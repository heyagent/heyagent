import { NextResponse } from 'next/server';

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
    // Get Sonic CMS API URL from environment or use default
    const sonicApiUrl = process.env.SONIC_CMS_API_URL || 'http://localhost:4321/api/v1';
    
    // Parse query parameters from the incoming request
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || '1';
    const limit = searchParams.get('limit') || '10';
    const search = searchParams.get('search') || '';
    
    // Build the URL for Sonic CMS changelog endpoint
    const sonicUrl = new URL(`${sonicApiUrl}/changelog-entries`);
    // Calculate offset from page and limit
    const offset = (parseInt(page) - 1) * parseInt(limit);
    sonicUrl.searchParams.set('offset', offset.toString());
    sonicUrl.searchParams.set('limit', limit);
    if (search) {
      sonicUrl.searchParams.set('search', search);
    }
    
    // Fetch from Sonic CMS
    const response = await fetch(sonicUrl.toString(), {
      headers: {
        'Accept': 'application/json',
      },
      // Don't cache the response
      cache: 'no-store'
    });
    
    if (!response.ok) {
      console.error('Sonic CMS API error:', response.status, response.statusText);
      throw new Error(`Sonic CMS API returned ${response.status}`);
    }
    
    const sonicData: any = await response.json();
    
    // Process Sonic CMS data to match our expected format
    let processedData = [];
    let pagination: PaginationData = {
      currentPage: parseInt(page),
      totalPages: 0,
      totalItems: 0,
      hasNextPage: false,
      hasPreviousPage: false,
      limit: parseInt(limit)
    };
    
    if (sonicData.data && Array.isArray(sonicData.data)) {
      // Fetch related improvements and fixes for each entry
      const entriesWithRelations = await Promise.all(
        sonicData.data.map(async (entry: ChangelogEntry) => {
          try {
            // Fetch improvements with proper filter syntax
            const improvementsResponse = await fetch(
              `${sonicApiUrl}/changelog-improvements?filters[entryId][$eq]=${entry.id}`,
              { cache: 'no-store' }
            );
            const improvementsData: any = await improvementsResponse.json();
            
            // Fetch fixes with proper filter syntax
            const fixesResponse = await fetch(
              `${sonicApiUrl}/changelog-fixes?filters[entryId][$eq]=${entry.id}`,
              { cache: 'no-store' }
            );
            const fixesData: any = await fixesResponse.json();
            
            // Extract improvements and fixes
            const improvements = improvementsData.data
              ?.map((imp: any) => imp.improvement) || [];
            
            const fixes = fixesData.data
              ?.map((fix: any) => fix.fix) || [];
            
            return {
              version: entry.version,
              date: entry.date,
              title: entry.title,
              summary: entry.summary,
              improvements,
              fixes
            };
          } catch (error) {
            console.error(`Error fetching relations for entry ${entry.id}:`, error);
            // Return entry without relations if fetch fails
            return {
              version: entry.version,
              date: entry.date,
              title: entry.title,
              summary: entry.summary,
              improvements: [],
              fixes: []
            };
          }
        })
      );
      
      processedData = entriesWithRelations;
      
      // Calculate pagination based on total entries
      const totalItems = sonicData.total || sonicData.pagination?.totalItems || sonicData.data.length;
      const totalPages = Math.ceil(totalItems / parseInt(limit));
      
      pagination = {
        currentPage: parseInt(page),
        totalPages,
        totalItems,
        hasNextPage: parseInt(page) < totalPages,
        hasPreviousPage: parseInt(page) > 1,
        limit: parseInt(limit)
      };
    }
    
    // Return data in the same format as before
    return NextResponse.json({
      data: processedData,
      pagination
    });
  } catch (error) {
    console.error('Error fetching changelog from Sonic CMS:', error);
    
    // Return empty data set on error instead of 500
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