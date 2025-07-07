'use client';

import { useEffect, useState } from 'react';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { MonitorState, formatTimeDiff } from '@/lib/status-utils';

interface OverallStatusProps {
  state: MonitorState;
}

export default function OverallStatus({ state }: OverallStatusProps) {
  const [currentTime, setCurrentTime] = useState(Math.round(Date.now() / 1000));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Math.round(Date.now() / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  let statusString = '';
  let statusIcon = <FiAlertCircle className="w-16 h-16 text-red-500" />;
  
  if (state.overallUp === 0 && state.overallDown === 0) {
    statusString = 'No data yet';
  } else if (state.overallUp === 0) {
    statusString = 'All systems not operational';
  } else if (state.overallDown === 0) {
    statusString = 'All systems operational';
    statusIcon = <FiCheckCircle className="w-16 h-16 text-green-500" />;
  } else {
    statusString = `Some systems not operational (${state.overallDown} out of ${
      state.overallUp + state.overallDown
    })`;
  }

  const timeSinceUpdate = currentTime - state.lastUpdate;

  return (
    <div className="text-center mb-8">
      <div className="flex justify-center mb-4">{statusIcon}</div>
      <h1 className="text-2xl font-bold mb-2">{statusString}</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Last updated on: {new Date(state.lastUpdate * 1000).toLocaleString()} ({formatTimeDiff(timeSinceUpdate)} ago)
      </p>
    </div>
  );
}