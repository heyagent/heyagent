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
      // If summary.json doesn't exist yet, return services with unknown status
      const unknownServices = [
        { name: 'Website', url: 'https://heyagent-app.heyagentai.workers.dev/', status: 'unknown' },
        { name: 'Help and Support', url: 'https://help.heyagentai.workers.dev/', status: 'unknown' },
        { name: 'Runner', url: 'https://runner.heyagentai.workers.dev/', status: 'unknown' },
        { name: 'Backend', url: 'https://backend.heyagentai.workers.dev/', status: 'unknown' }
      ].map(service => ({
        ...service,
        uptime: 'N/A',
        uptimeDay: 'N/A',
        uptimeWeek: 'N/A',
        uptimeMonth: 'N/A',
        responseTime: 0,
        dailyMinutesDown: {}
      }));

      return NextResponse.json({
        lastUpdated: new Date().toISOString(),
        services: unknownServices
      });
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
        dailyMinutesDown: service.dailyMinutesDown || {},
      })),
    };

    return NextResponse.json(transformedData);
  } catch (error) {
    console.error('Error fetching status data:', error);
    // Return services with unknown status on error
    const unknownServices = [
      { name: 'Website', url: 'https://heyagent-app.heyagentai.workers.dev/', status: 'unknown' },
      { name: 'Help and Support', url: 'https://help.heyagentai.workers.dev/', status: 'unknown' },
      { name: 'Runner', url: 'https://runner.heyagentai.workers.dev/', status: 'unknown' },
      { name: 'Backend', url: 'https://backend.heyagentai.workers.dev/', status: 'unknown' }
    ].map(service => ({
      ...service,
      uptime: 'N/A',
      uptimeDay: 'N/A',
      uptimeWeek: 'N/A',
      uptimeMonth: 'N/A',
      responseTime: 0,
      dailyMinutesDown: {}
    }));

    return NextResponse.json({
      lastUpdated: new Date().toISOString(),
      services: unknownServices
    });
  }
}