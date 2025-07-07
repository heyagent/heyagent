import { NextRequest, NextResponse } from 'next/server';
import { validateRequest } from '@/lib/auth';
import { getChangelogService } from '@/lib/db/changelog-service';

interface ChangelogUpdateData {
  version?: string;
  date?: string;
  title?: string;
  summary?: string;
  improvements?: string[];
  fixes?: string[];
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  // Validate authentication
  const { user, error } = await validateRequest(request);
  if (!user) {
    return NextResponse.json({ error: error || 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await context.params;
    
    if (!id || typeof id !== 'string') {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const service = await getChangelogService();
    const entry = await service.getById(id);

    if (!entry) {
      return NextResponse.json({ error: 'Entry not found' }, { status: 404 });
    }

    return NextResponse.json(entry);
  } catch (error) {
    console.error('Error fetching changelog entry:', error);
    return NextResponse.json(
      { error: 'Failed to fetch changelog entry' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  // Validate authentication
  const { user, error } = await validateRequest(request);
  if (!user) {
    return NextResponse.json({ error: error || 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await context.params;
    
    if (!id || typeof id !== 'string') {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const data = await request.json() as ChangelogUpdateData;
    const service = await getChangelogService();
    
    // Check if entry exists
    const existing = await service.getById(id);
    if (!existing) {
      return NextResponse.json({ error: 'Entry not found' }, { status: 404 });
    }

    const result = await service.update(id, data);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error updating changelog entry:', error);
    return NextResponse.json(
      { error: 'Failed to update changelog entry' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  // Validate authentication
  const { user, error } = await validateRequest(request);
  if (!user) {
    return NextResponse.json({ error: error || 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await context.params;
    
    if (!id || typeof id !== 'string') {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const service = await getChangelogService();
    
    // Check if entry exists
    const existing = await service.getById(id);
    if (!existing) {
      return NextResponse.json({ error: 'Entry not found' }, { status: 404 });
    }

    const result = await service.delete(id);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error deleting changelog entry:', error);
    return NextResponse.json(
      { error: 'Failed to delete changelog entry' },
      { status: 500 }
    );
  }
}