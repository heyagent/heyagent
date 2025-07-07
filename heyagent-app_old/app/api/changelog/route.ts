import { NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';

interface ChangelogEntry {
  id: string;
  version: string;
  date: string;
  title: string;
  summary: string;
  improvements?: any[];
  fixes?: any[];
}

interface PaginationData {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  limit: number;
}

export async function GET(request: Request) {
  try {
    // Get D1 database from Cloudflare context
    const { env } = getCloudflareContext();
    const db = env.DB_CHANGELOG;
    
    // Parse query parameters
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = Math.min(50, Math.max(1, parseInt(searchParams.get('limit') || '10', 10)));
    const search = searchParams.get('search') || '';
    const offset = (page - 1) * limit;
    
    // Build search condition
    const searchPattern = search ? `%${search}%` : '';
    
    // Optimized query with JSON aggregation
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
      LEFT JOIN changelog_improvements ci ON ce.id = ci.entry_id
      LEFT JOIN changelog_fixes cf ON ce.id = cf.entry_id
      WHERE 
        CASE 
          WHEN ?1 = '' THEN 1
          ELSE (ce.title LIKE ?1 OR ce.summary LIKE ?1)
        END
      GROUP BY ce.id
      ORDER BY ce.date DESC, ce.id DESC
      LIMIT ?2 OFFSET ?3
    `;
    
    // Execute the optimized query
    const result = await db.prepare(query)
      .bind(searchPattern, limit, offset)
      .all();
    
    if (!result.success) {
      throw new Error('Database query failed');
    }
    
    // Process results
    const entries = result.results || [];
    const totalItems = entries.length > 0 ? parseInt(entries[0].total as string) : 0;
    const totalPages = Math.ceil(totalItems / limit);
    
    // Format data for response
    const processedData = entries.map((entry: any) => ({
      version: entry.version,
      date: entry.date,
      title: entry.title,
      summary: entry.summary,
      improvements: JSON.parse(entry.improvements || '[]'),
      fixes: JSON.parse(entry.fixes || '[]')
    }));
    
    const pagination: PaginationData = {
      currentPage: page,
      totalPages,
      totalItems,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
      limit
    };
    
    return NextResponse.json({
      data: processedData,
      pagination
    });
  } catch (error) {
    console.error('Error fetching changelog:', error);
    
    // Return empty data set on error
    return NextResponse.json({
      data: [],
      pagination: {
        currentPage: 1,
        totalPages: 0,
        totalItems: 0,
        hasNextPage: false,
        hasPreviousPage: false,
        limit: 10
      }
    });
  }
}