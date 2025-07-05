'use client';

import { Tooltip } from '@/components/ui/tooltip';

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
      return 'bg-red-500 dark:bg-red-600';
    } else if (status === 'partial' || uptime < 100) {
      return 'bg-yellow-500 dark:bg-yellow-600';
    }
    return 'bg-green-500 dark:bg-green-600';
  };

  const getBarHeight = (uptime: number) => {
    // Scale height based on uptime percentage
    const minHeight = 20; // Minimum height in pixels
    const maxHeight = 40; // Maximum height in pixels
    return minHeight + ((maxHeight - minHeight) * uptime / 100);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {serviceName}
        </h3>
        <span className="text-sm font-medium text-green-600 dark:text-green-400">
          Operational
        </span>
      </div>
      
      {/* History bars */}
      <div className="relative">
        <div className="flex items-end justify-between h-12 gap-[1px]">
          {bars.map((day, index) => {
            const height = getBarHeight(day.uptime);
            return (
              <div
                key={index}
                className="group relative flex-1 flex items-end"
              >
                <div
                  className={`w-full rounded-sm transition-all duration-200 hover:opacity-80 ${getBarColor(day.status, day.uptime)}`}
                  style={{ height: `${height}px` }}
                >
                  {/* Tooltip on hover */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                    {new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    <br />
                    {day.uptime}% uptime
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Timeline labels */}
        <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
          <span>90 days ago</span>
          <span className="text-center">{uptimePercentage} uptime</span>
          <span>Today</span>
        </div>
      </div>
    </div>
  );
}