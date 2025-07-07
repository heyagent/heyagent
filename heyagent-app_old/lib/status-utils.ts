// Utility functions for status page calculations (adapted from UptimeFlare)

export interface MonitorIncident {
  start: number[];
  end?: number;
  error: string[];
}

export interface MonitorLatency {
  recent: Array<{
    loc: string;
    ping: number;
    time: number;
  }>;
}

export interface MonitorState {
  lastUpdate: number;
  overallUp: number;
  overallDown: number;
  incident: Record<string, MonitorIncident[]>;
  latency: Record<string, MonitorLatency>;
}

export interface MonitorTarget {
  id: string;
  name: string;
  method?: string;
  target?: string;
  tooltip?: string;
  statusPageLink?: string;
  expectedCodes?: number[];
}

export interface DayUptimeData {
  date: Date;
  uptimePercent: string;
  downTime: number;
  hasData: boolean;
  incidentDetails: string[];
}

// Calculate overlap between two time ranges
export function overlapLength(x1: number, x2: number, y1: number, y2: number): number {
  return Math.max(0, Math.min(x2, y2) - Math.max(x1, y1));
}

// Get color based on uptime percentage
export function getUptimeColor(uptimePercent: string | number): string {
  const percent = typeof uptimePercent === 'string' ? parseFloat(uptimePercent) : uptimePercent;
  
  if (isNaN(percent)) {
    return '#374151'; // gray-700
  }
  
  if (percent >= 99.5) {
    return '#10b981'; // green-500
  } else if (percent >= 95) {
    return '#f59e0b'; // yellow-500
  } else {
    return '#ef4444'; // red-500
  }
}

// Get status text color
export function getStatusTextColor(status: 'operational' | 'down' | 'unknown'): string {
  switch (status) {
    case 'operational':
      return 'text-green-500';
    case 'down':
      return 'text-red-500';
    case 'unknown':
      return 'text-gray-500';
  }
}

// Calculate uptime percentage for a monitor
export function calculateUptimePercentage(monitor: MonitorTarget, state: MonitorState): string {
  if (!state.incident[monitor.id] || state.incident[monitor.id].length === 0) {
    return '100.00';
  }

  const totalTime = Date.now() / 1000 - state.incident[monitor.id][0].start[0];
  let downTime = 0;
  
  for (const incident of state.incident[monitor.id]) {
    downTime += (incident.end ?? Date.now() / 1000) - incident.start[0];
  }

  return (((totalTime - downTime) / totalTime) * 100).toPrecision(4);
}

// Check if monitor is currently down
export function isMonitorDown(monitor: MonitorTarget, state: MonitorState): boolean {
  if (!state.incident[monitor.id] || state.incident[monitor.id].length === 0) {
    return false;
  }
  
  const lastIncident = state.incident[monitor.id].slice(-1)[0];
  return lastIncident.end === undefined;
}

// Get current status text
export function getMonitorStatus(monitor: MonitorTarget, state: MonitorState): 'operational' | 'down' | 'unknown' {
  if (!state.incident[monitor.id]) {
    return 'unknown';
  }
  
  return isMonitorDown(monitor, state) ? 'down' : 'operational';
}

// Format time difference in human readable format
export function formatTimeDiff(seconds: number): string {
  if (seconds < 60) return `${Math.floor(seconds)}s`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h`;
  return `${Math.floor(seconds / 86400)}d`;
}

// Generate daily uptime data for the past 90 days
export function generateDailyUptimeData(monitor: MonitorTarget, state: MonitorState): DayUptimeData[] {
  const uptimeBars: DayUptimeData[] = [];
  const currentTime = Math.round(Date.now() / 1000);
  
  if (!state.incident[monitor.id] || state.incident[monitor.id].length === 0) {
    // No incident data, return all green bars
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    
    for (let i = 89; i >= 0; i--) {
      const dayStart = Math.round(todayStart.getTime() / 1000) - i * 86400;
      uptimeBars.push({
        date: new Date(dayStart * 1000),
        uptimePercent: '100.0',
        downTime: 0,
        hasData: true,
        incidentDetails: [],
      });
    }
    return uptimeBars;
  }
  
  const monitorStartTime = state.incident[monitor.id][0].start[0];
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  for (let i = 89; i >= 0; i--) {
    const dayStart = Math.round(todayStart.getTime() / 1000) - i * 86400;
    const dayEnd = dayStart + 86400;

    const dayMonitorTime = overlapLength(dayStart, dayEnd, monitorStartTime, currentTime);
    let dayDownTime = 0;
    const incidentDetails: string[] = [];

    for (const incident of state.incident[monitor.id]) {
      const incidentStart = incident.start[0];
      const incidentEnd = incident.end ?? currentTime;

      const overlap = overlapLength(dayStart, dayEnd, incidentStart, incidentEnd);
      dayDownTime += overlap;

      // Collect incident details for this day
      if (overlap > 0) {
        for (let j = 0; j < incident.error.length; j++) {
          const partStart = incident.start[j];
          const partEnd = j === incident.error.length - 1 ? incident.end ?? currentTime : incident.start[j + 1];
          const effectiveStart = Math.max(partStart, dayStart);
          const effectiveEnd = Math.min(partEnd, dayEnd);

          if (overlapLength(dayStart, dayEnd, effectiveStart, effectiveEnd) > 0) {
            const startTime = new Date(effectiveStart * 1000).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            });
            const endTime = new Date(effectiveEnd * 1000).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            });
            incidentDetails.push(`[${startTime}-${endTime}] ${incident.error[j]}`);
          }
        }
      }
    }

    const dayPercent = dayMonitorTime > 0 
      ? (((dayMonitorTime - dayDownTime) / dayMonitorTime) * 100).toPrecision(4)
      : 'NaN';

    uptimeBars.push({
      date: new Date(dayStart * 1000),
      uptimePercent: dayPercent,
      downTime: dayDownTime,
      hasData: dayMonitorTime > 0,
      incidentDetails,
    });
  }

  return uptimeBars;
}

// Format downtime duration
export function formatDowntime(seconds: number): string {
  if (seconds === 0) return '';
  
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  
  if (hours > 0) {
    return `Down for ${hours}h ${minutes}m`;
  } else {
    return `Down for ${minutes}m`;
  }
}