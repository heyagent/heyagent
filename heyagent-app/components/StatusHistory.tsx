'use client';

interface DayData {
  date: string;
  uptime: number; // 0-100
  status: 'up' | 'down' | 'partial' | 'no-data';
}

interface StatusHistoryProps {
  serviceName: string;
  history: DayData[];
  uptimePercentage: string;
  currentStatus?: string;
}

export default function StatusHistory({ serviceName, history, uptimePercentage, currentStatus = 'up' }: StatusHistoryProps) {
  // Generate 90 days of data (fill with mock data if not available)
  const generateHistoryBars = () => {
    const bars = [];
    const today = new Date();
    
    for (let i = 89; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      
      // Find actual data for this date or use default
      const dayData = history?.find(h => h.date === dateStr) || {
        date: dateStr,
        uptime: 100,
        status: 'up' as const
      };
      
      bars.push(dayData);
    }
    
    return bars;
  };

  const bars = generateHistoryBars();

  const getBarColor = (status: string, uptime: number) => {
    if (status === 'no-data') {
      return 'bg-gray-200 dark:bg-gray-700';
    } else if (status === 'down' || uptime === 0) {
      return 'bg-red-500';
    } else if (status === 'partial' || uptime < 100) {
      return 'bg-yellow-500';
    }
    return 'bg-green-500';
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'up':
        return 'Operational';
      case 'down':
        return 'Down';
      case 'degraded':
        return 'Degraded';
      case 'unknown':
        return 'Unknown';
      default:
        return 'Unknown';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      case 'degraded':
        return 'text-yellow-600';
      case 'unknown':
        return 'text-gray-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h6 className="font-medium text-slate-900 dark:text-slate-100">
          {serviceName}
        </h6>
        <span className={`text-sm ${getStatusColor(currentStatus)}`}>
          {getStatusText(currentStatus)}
        </span>
      </div>
      
      {/* History bars */}
      <div>
        <div className="flex items-center h-10 gap-[1px]">
          {bars.map((day, index) => (
            <div
              key={index}
              className={`flex-1 h-full rounded-sm ${getBarColor(day.status, day.uptime)}`}
            />
          ))}
        </div>
        
        {/* Timeline labels */}
        <div className="flex justify-between mt-2 text-xs text-slate-500 dark:text-slate-400">
          <span>90 days ago</span>
          <span>{uptimePercentage} uptime</span>
          <span>Today</span>
        </div>
      </div>
    </div>
  );
}