import { NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { statusConfig } from '@/app/status.config';
import { MonitorState } from '@/lib/status-utils';

export async function GET() {
  try {
    const { env } = getCloudflareContext();
    
    // Read state from KV
    const stateStr = await env.UPTIMEFLARE_STATE?.get('state');
    
    if (!stateStr) {
      // No data available yet
      return NextResponse.json({
        state: null,
        monitors: statusConfig.monitors,
        error: 'No monitoring data available'
      });
    }

    const state = JSON.parse(stateStr) as MonitorState;
    
    return NextResponse.json({
      state,
      monitors: statusConfig.monitors,
    });
  } catch (error) {
    console.error('Error fetching status data:', error);
    
    return NextResponse.json({
      state: null,
      monitors: statusConfig.monitors,
      error: 'Failed to fetch monitoring data'
    });
  }
}