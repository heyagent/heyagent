import { getCloudflareContext } from '@opennextjs/cloudflare';

interface ChangelogEntry {
  id?: number;
  version: string;
  date: string;
  title: string;
  summary: string;
  created_at?: string;
  updated_at?: string;
}

interface ChangelogWithRelations extends ChangelogEntry {
  improvements: string[];
  fixes: string[];
}

export class ChangelogService {
  private db: D1Database;

  constructor(db: D1Database) {
    this.db = db;
  }

  async list(page: number = 1, limit: number = 10, search: string = '') {
    const offset = (page - 1) * limit;
    const searchPattern = search ? `%${search}%` : '';

    // Use the same optimized query as the main app
    const query = `
      SELECT 
        ce.id,
        ce.version,
        ce.date,
        ce.title,
        ce.summary,
        JSON_GROUP_ARRAY(DISTINCT ci.improvement) FILTER (WHERE ci.improvement IS NOT NULL) as improvements,
        JSON_GROUP_ARRAY(DISTINCT cf.fix) FILTER (WHERE cf.fix IS NOT NULL) as fixes,
        COUNT(*) OVER() as total
      FROM changelog_entries ce
      LEFT JOIN changelog_improvements ci ON ce.id = ci.entryId
      LEFT JOIN changelog_fixes cf ON ce.id = cf.entryId
      WHERE 
        CASE 
          WHEN ?1 = '' THEN 1
          ELSE (ce.title LIKE ?1 OR ce.summary LIKE ?1)
        END
      GROUP BY ce.id
      ORDER BY ce.date DESC, ce.id DESC
      LIMIT ?2 OFFSET ?3
    `;

    const result = await this.db.prepare(query)
      .bind(searchPattern, limit, offset)
      .all();

    const entries = result.results || [];
    const totalItems = entries.length > 0 ? parseInt(entries[0].total as string) : 0;
    const totalPages = Math.ceil(totalItems / limit);

    const processedData = entries.map((entry: any) => ({
      id: entry.id,
      version: entry.version,
      date: entry.date,
      title: entry.title,
      summary: entry.summary,
      improvements: JSON.parse(entry.improvements || '[]'),
      fixes: JSON.parse(entry.fixes || '[]')
    }));

    return {
      data: processedData,
      pagination: {
        currentPage: page,
        totalPages,
        totalItems,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
        limit
      }
    };
  }

  async getById(id: string): Promise<ChangelogWithRelations | null> {
    const entry = await this.db.prepare(
      'SELECT * FROM changelog_entries WHERE id = ?'
    ).bind(id).first<ChangelogEntry>();

    if (!entry) return null;

    const improvements = await this.db.prepare(
      'SELECT improvement FROM changelog_improvements WHERE entryId = ?'
    ).bind(id).all();

    const fixes = await this.db.prepare(
      'SELECT fix FROM changelog_fixes WHERE entryId = ?'
    ).bind(id).all();

    return {
      ...entry,
      improvements: improvements.results?.map(i => i.improvement as string) || [],
      fixes: fixes.results?.map(f => f.fix as string) || []
    };
  }

  async create(data: Omit<ChangelogWithRelations, 'id' | 'created_at' | 'updated_at'>) {
    // Start a transaction
    const batch: D1PreparedStatement[] = [];

    // Insert main entry
    const insertEntry = this.db.prepare(
      `INSERT INTO changelog_entries (version, date, title, summary) 
       VALUES (?, ?, ?, ?)`
    ).bind(data.version, data.date, data.title, data.summary);

    const result = await insertEntry.run();
    const entryId = result.meta.last_row_id;

    // Insert improvements
    for (const improvement of data.improvements) {
      batch.push(
        this.db.prepare(
          'INSERT INTO changelog_improvements (entryId, improvement) VALUES (?, ?)'
        ).bind(entryId, improvement)
      );
    }

    // Insert fixes
    for (const fix of data.fixes) {
      batch.push(
        this.db.prepare(
          'INSERT INTO changelog_fixes (entryId, fix) VALUES (?, ?)'
        ).bind(entryId, fix)
      );
    }

    if (batch.length > 0) {
      await this.db.batch(batch);
    }

    return { id: entryId };
  }

  async update(id: string, data: Partial<ChangelogWithRelations>) {
    const batch: D1PreparedStatement[] = [];

    // Update main entry if any fields provided
    if (data.version || data.date || data.title || data.summary) {
      const updateFields = [];
      const values = [];

      if (data.version) {
        updateFields.push('version = ?');
        values.push(data.version);
      }
      if (data.date) {
        updateFields.push('date = ?');
        values.push(data.date);
      }
      if (data.title) {
        updateFields.push('title = ?');
        values.push(data.title);
      }
      if (data.summary) {
        updateFields.push('summary = ?');
        values.push(data.summary);
      }

      updateFields.push('updated_at = CURRENT_TIMESTAMP');
      values.push(id);

      batch.push(
        this.db.prepare(
          `UPDATE changelog_entries SET ${updateFields.join(', ')} WHERE id = ?`
        ).bind(...values)
      );
    }

    // Update improvements if provided
    if (data.improvements) {
      // Delete existing improvements
      batch.push(
        this.db.prepare('DELETE FROM changelog_improvements WHERE entryId = ?').bind(id)
      );

      // Insert new improvements
      for (const improvement of data.improvements) {
        batch.push(
          this.db.prepare(
            'INSERT INTO changelog_improvements (entryId, improvement) VALUES (?, ?)'
          ).bind(id, improvement)
        );
      }
    }

    // Update fixes if provided
    if (data.fixes) {
      // Delete existing fixes
      batch.push(
        this.db.prepare('DELETE FROM changelog_fixes WHERE entryId = ?').bind(id)
      );

      // Insert new fixes
      for (const fix of data.fixes) {
        batch.push(
          this.db.prepare(
            'INSERT INTO changelog_fixes (entryId, fix) VALUES (?, ?)'
          ).bind(id, fix)
        );
      }
    }

    await this.db.batch(batch);
    return { success: true };
  }

  async delete(id: string) {
    // Due to CASCADE DELETE, related improvements and fixes will be deleted automatically
    await this.db.prepare('DELETE FROM changelog_entries WHERE id = ?').bind(id).run();
    return { success: true };
  }
}

export async function getChangelogService() {
  const { env } = await getCloudflareContext();
  return new ChangelogService(env.DB_CHANGELOG);
}