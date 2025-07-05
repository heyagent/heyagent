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

export async function GET() {
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

    // Fetch all changelog entries ordered by date DESC
    const entriesResult = await db.prepare(
      `SELECT * FROM changelog_entries ORDER BY date DESC`
    ).all<ChangelogEntry>();

    if (!entriesResult.success) {
      throw new Error('Failed to fetch changelog entries');
    }

    const entries = entriesResult.results;

    // Fetch all improvements and fixes in one query each
    const improvementsResult = await db.prepare(
      `SELECT * FROM changelog_improvements ORDER BY entry_id, display_order`
    ).all<ChangelogImprovement>();

    const fixesResult = await db.prepare(
      `SELECT * FROM changelog_fixes ORDER BY entry_id, display_order`
    ).all<ChangelogFix>();

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

    return NextResponse.json(changelogData);
  } catch (error) {
    console.error('Error fetching changelog data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch changelog data' },
      { status: 500 }
    );
  }
}