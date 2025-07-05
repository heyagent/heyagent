export type ServiceStatus = 'up' | 'down' | 'degraded' | 'unknown';
export type HistoryStatus = 'up' | 'down' | 'partial' | 'no-data';

export interface HistoryData {
  date: string;
  uptime: number;
  status: HistoryStatus;
}

/**
 * Determines the status for a specific date in the history
 */
export function getHistoryBarStatus(
  date: string,
  today: string,
  currentStatus: ServiceStatus,
  dailyMinutesDown: Record<string, number> | undefined
): HistoryData {
  const isToday = date === today;

  // For today, always use the current status
  if (isToday) {
    let status: HistoryStatus;
    let uptime = 100;
    
    if (currentStatus === 'unknown') {
      status = 'no-data';
    } else if (currentStatus === 'down') {
      status = 'down';
      uptime = 0;
    } else if (currentStatus === 'degraded') {
      status = 'partial';
      uptime = 50;
    } else {
      status = 'up';
      uptime = 100;
    }
    
    return { date, uptime, status };
  }

  // Check if this specific date exists in the data
  if (!dailyMinutesDown || !(date in dailyMinutesDown)) {
    // No data for this date - show gray bar
    return {
      date,
      uptime: 100,
      status: 'no-data'
    };
  }

  // We have data for this date
  const minutesDown = dailyMinutesDown[date];
  const uptime = minutesDown > 0 ? ((1440 - minutesDown) / 1440) * 100 : 100;
  
  // Determine status based on downtime
  let status: HistoryStatus;
  if (minutesDown === 0) {
    status = 'up';
  } else if (minutesDown >= 720) { // 12+ hours
    status = 'down';
  } else {
    status = 'partial';
  }
  
  return { date, uptime, status };
}

/**
 * Generates a 90-day history for a service
 */
export function generateServiceHistory(
  currentStatus: ServiceStatus,
  dailyMinutesDown: Record<string, number> | undefined
): HistoryData[] {
  const today = new Date().toISOString().split('T')[0];
  const history: HistoryData[] = [];

  for (let i = 89; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];
    
    history.push(getHistoryBarStatus(dateStr, today, currentStatus, dailyMinutesDown));
  }

  return history;
}