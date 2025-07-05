import { NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';

// Remove edge runtime as it's not supported with OpenNext yet
// export const runtime = 'edge';

interface ChangelogEntry {
  id: number;
  version: string;
  date: string;
  title: string;
  summary: string;
  created_at: string;
  updated_at: string;
}

interface ChangelogImprovement {
  id: number;
  entry_id: number;
  improvement: string;
  display_order: number;
}

interface ChangelogFix {
  id: number;
  entry_id: number;
  fix: string;
  display_order: number;
}

export async function GET(request: Request) {
  try {
    const { env } = getCloudflareContext();
    const db = env.DB_CHANGELOG;

    if (!db) {
      console.error('DB_CHANGELOG binding not found');
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 500 }
      );
    }

    // Parse query parameters
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
    const limit = Math.min(50, Math.max(1, parseInt(searchParams.get('limit') || '10', 10)));
    const search = searchParams.get('search') || '';
    const offset = (page - 1) * limit;

    let entriesQuery: string;
    let countQuery: string;
    const searchPattern = search ? `%${search}%` : '';

    if (search) {
      // Search query with DISTINCT to avoid duplicates
      entriesQuery = `
        SELECT DISTINCT e.* 
        FROM changelog_entries e
        LEFT JOIN changelog_improvements i ON e.id = i.entry_id
        LEFT JOIN changelog_fixes f ON e.id = f.entry_id
        WHERE e.title LIKE ? OR e.summary LIKE ? 
          OR i.improvement LIKE ? OR f.fix LIKE ?
        ORDER BY e.date DESC
        LIMIT ? OFFSET ?
      `;
      
      countQuery = `
        SELECT COUNT(DISTINCT e.id) as total
        FROM changelog_entries e
        LEFT JOIN changelog_improvements i ON e.id = i.entry_id
        LEFT JOIN changelog_fixes f ON e.id = f.entry_id
        WHERE e.title LIKE ? OR e.summary LIKE ? 
          OR i.improvement LIKE ? OR f.fix LIKE ?
      `;
    } else {
      // Regular pagination query
      entriesQuery = `
        SELECT * FROM changelog_entries 
        ORDER BY date DESC 
        LIMIT ? OFFSET ?
      `;
      
      countQuery = `SELECT COUNT(*) as total FROM changelog_entries`;
    }

    // Execute queries
    const [entriesResult, countResult] = await Promise.all([
      search 
        ? db.prepare(entriesQuery).bind(searchPattern, searchPattern, searchPattern, searchPattern, limit, offset).all<ChangelogEntry>()
        : db.prepare(entriesQuery).bind(limit, offset).all<ChangelogEntry>(),
      search
        ? db.prepare(countQuery).bind(searchPattern, searchPattern, searchPattern, searchPattern).first<{ total: number }>()
        : db.prepare(countQuery).first<{ total: number }>()
    ]);

    if (!entriesResult.success || !countResult) {
      throw new Error('Failed to fetch changelog entries');
    }

    const entries = entriesResult.results;
    const totalItems = countResult.total || 0;
    const totalPages = Math.ceil(totalItems / limit);

    // Fetch improvements and fixes only for the entries we found
    const entryIds = entries.map(e => e.id);
    
    if (entryIds.length === 0) {
      // No entries found, return empty result
      return NextResponse.json({
        data: [],
        pagination: {
          currentPage: page,
          totalPages: 0,
          totalItems: 0,
          hasNextPage: false,
          hasPreviousPage: false,
          limit
        }
      });
    }

    // Create placeholders for the IN clause
    const placeholders = entryIds.map(() => '?').join(',');
    
    const improvementsResult = await db.prepare(
      `SELECT * FROM changelog_improvements WHERE entry_id IN (${placeholders}) ORDER BY entry_id, display_order`
    ).bind(...entryIds).all<ChangelogImprovement>();

    const fixesResult = await db.prepare(
      `SELECT * FROM changelog_fixes WHERE entry_id IN (${placeholders}) ORDER BY entry_id, display_order`
    ).bind(...entryIds).all<ChangelogFix>();

    if (!improvementsResult.success || !fixesResult.success) {
      throw new Error('Failed to fetch improvements or fixes');
    }

    // Group improvements and fixes by entry_id
    const improvementsByEntry = improvementsResult.results.reduce((acc, improvement) => {
      if (!acc[improvement.entry_id]) {
        acc[improvement.entry_id] = [];
      }
      acc[improvement.entry_id].push(improvement.improvement);
      return acc;
    }, {} as Record<number, string[]>);

    const fixesByEntry = fixesResult.results.reduce((acc, fix) => {
      if (!acc[fix.entry_id]) {
        acc[fix.entry_id] = [];
      }
      acc[fix.entry_id].push(fix.fix);
      return acc;
    }, {} as Record<number, string[]>);

    // Combine the data
    const changelogData = entries.map(entry => ({
      version: entry.version,
      date: entry.date,
      title: entry.title,
      summary: entry.summary,
      improvements: improvementsByEntry[entry.id] || [],
      fixes: fixesByEntry[entry.id] || []
    }));

    // Return data with pagination metadata
    return NextResponse.json({
      data: changelogData,
      pagination: {
        currentPage: page,
        totalPages,
        totalItems,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
        limit
      }
    });
  } catch (error) {
    console.error('Error fetching changelog data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch changelog data' },
      { status: 500 }
    );
  }
}