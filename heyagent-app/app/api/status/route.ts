import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/heyagent/heyagent-status/master/history/summary.json',
      {
        next: { revalidate: 60 }, // Cache for 1 minute
        headers: {
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      // If summary.json doesn't exist yet (GitHub Actions still running)
      return NextResponse.json(
        { 
          message: 'Status data not available yet',
          services: [] 
        },
        { status: 200 }
      );
    }

    const data = await response.json();
    
    // Transform the data if needed
    const transformedData = {
      lastUpdated: new Date().toISOString(),
      services: data.map((service: any) => ({
        name: service.name,
        url: service.url,
        status: service.status,
        uptime: service.uptime,
        uptimeDay: service.uptimeDay,
        uptimeWeek: service.uptimeWeek,
        uptimeMonth: service.uptimeMonth,
        responseTime: service.time,
        icon: service.icon,
      })),
    };

    return NextResponse.json(transformedData);
  } catch (error) {
    console.error('Error fetching status data:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch status data',
        services: [] 
      },
      { status: 500 }
    );
  }
}