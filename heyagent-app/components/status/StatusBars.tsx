'use client';

import { useState } from 'react';
import { MonitorTarget, MonitorState, generateDailyUptimeData, getUptimeColor, formatDowntime } from '@/lib/status-utils';

interface StatusBarsProps {
  monitor: MonitorTarget;
  state: MonitorState;
}

export default function StatusBars({ monitor, state }: StatusBarsProps) {
  const [selectedDay, setSelectedDay] = useState<{
    date: Date;
    uptimePercent: string;
    downTime: number;
    incidentDetails: string[];
  } | null>(null);

  const uptimeBars = generateDailyUptimeData(monitor, state);

  return (
    <>
      {/* Status bars */}
      <div className="flex items-center gap-[1px]">
        {uptimeBars.map((day, index) => (
          <div
            key={index}
            className="relative group"
            onClick={() => day.downTime > 0 && setSelectedDay(day)}
          >
            <div
              className={`w-2 h-5 rounded-sm transition-all ${
                day.downTime > 0 ? 'cursor-pointer hover:scale-110' : ''
              }`}
              style={{ backgroundColor: getUptimeColor(day.uptimePercent) }}
            />
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap">
              <div className="bg-gray-900 text-white text-xs rounded px-2 py-1">
                <div>{day.uptimePercent}% at {day.date.toLocaleDateString()}</div>
                {day.downTime > 0 && (
                  <div className="text-gray-300">{formatDowntime(day.downTime)}</div>
                )}
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                <div className="border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Incident Modal */}
      {selectedDay && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedDay(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-semibold mb-4">
              🚨 {monitor.name} incidents at {selectedDay.date.toLocaleDateString()}
            </h3>
            <div className="space-y-2">
              {selectedDay.incidentDetails.map((detail, idx) => (
                <div key={idx} className="text-sm text-gray-600 dark:text-gray-300">
                  {detail}
                </div>
              ))}
            </div>
            <button
              className="mt-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              onClick={() => setSelectedDay(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}