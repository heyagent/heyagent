'use client';

import { MonitorTarget, MonitorState, getMonitorStatus, calculateUptimePercentage, getStatusTextColor } from '@/lib/status-utils';
import StatusBars from './StatusBars';

interface MonitorListProps {
  monitors: MonitorTarget[];
  state: MonitorState;
}

export default function MonitorList({ monitors, state }: MonitorListProps) {
  return (
    <div className="space-y-6">
      {monitors.map((monitor) => {
        const status = getMonitorStatus(monitor, state);
        const uptimePercent = calculateUptimePercentage(monitor, state);
        
        return (
          <div key={monitor.id}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">
                {monitor.name}
              </h3>
              <span className={`text-sm font-medium ${getStatusTextColor(status)}`}>
                {status === 'operational' ? 'Operational' : status === 'down' ? 'Down' : 'Unknown'}
              </span>
            </div>
            
            <StatusBars monitor={monitor} state={state} />
            
            <div className="flex items-center justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
              <span>90 days ago</span>
              <span>{uptimePercent}% uptime</span>
              <span>Today</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}