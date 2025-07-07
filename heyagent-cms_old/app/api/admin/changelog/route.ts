import { NextRequest, NextResponse } from 'next/server';
import { validateRequest } from '@/lib/auth';
import { getChangelogService } from '@/lib/db/changelog-service';

interface ChangelogCreateData {
  version: string;
  date: string;
  title: string;
  summary: string;
  improvements: string[];
  fixes: string[];
}

export async function GET(request: NextRequest) {
  // Validate authentication
  const { user, error } = await validateRequest(request);
  if (!user) {
    return NextResponse.json({ error: error || 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = Math.min(50, Math.max(1, parseInt(searchParams.get('limit') || '10', 10)));
    const search = searchParams.get('search') || '';

    const service = await getChangelogService();
    const result = await service.list(page, limit, search);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching changelog:', error);
    return NextResponse.json(
      { error: 'Failed to fetch changelog entries' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  // Validate authentication
  const { user, error } = await validateRequest(request);
  if (!user) {
    return NextResponse.json({ error: error || 'Unauthorized' }, { status: 401 });
  }

  try {
    const data = await request.json() as ChangelogCreateData;
    
    // Validate required fields
    if (!data.version || !data.date || !data.title || !data.summary) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Ensure improvements and fixes are arrays
    data.improvements = data.improvements || [];
    data.fixes = data.fixes || [];

    const service = await getChangelogService();
    const result = await service.create(data);

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error('Error creating changelog entry:', error);
    return NextResponse.json(
      { error: 'Failed to create changelog entry' },
      { status: 500 }
    );
  }
}