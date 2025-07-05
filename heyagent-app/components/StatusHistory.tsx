'use client';

interface DayData {
  date: string;
  uptime: number; // 0-100
  status: 'up' | 'down' | 'partial';
}

interface StatusHistoryProps {
  serviceName: string;
  history: DayData[];
  uptimePercentage: string;
}

export default function StatusHistory({ serviceName, history, uptimePercentage }: StatusHistoryProps) {
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
    if (status === 'down' || uptime === 0) {
      return 'bg-red-500';
    } else if (status === 'partial' || uptime < 100) {
      return 'bg-yellow-500';
    }
    return 'bg-green-500';
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h6 className="font-medium text-slate-900 dark:text-slate-100">
          {serviceName}
        </h6>
        <span className="text-sm text-green-600">
          Operational
        </span>
      </div>
      
      {/* History bars */}
      <div>
        <div className="flex items-end justify-between h-10 gap-[1px]">
          {bars.map((day, index) => (
            <div
              key={index}
              className="flex-1 flex items-end"
            >
              <div
                className={`w-full rounded-sm ${getBarColor(day.status, day.uptime)}`}
                style={{ height: '100%' }}
              />
            </div>
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