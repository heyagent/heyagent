'use client';

import { useEffect, useState } from 'react';
import { MonitorState, MonitorTarget } from '@/lib/status-utils';
import OverallStatus from './status/OverallStatus';
import MonitorList from './status/MonitorList';

interface StatusApiResponse {
  state: MonitorState | null;
  monitors: MonitorTarget[];
  error?: string;
}

export default function StatusPage() {
  const [data, setData] = useState<StatusApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch('/api/status');
        if (!response.ok) {
          throw new Error('Failed to fetch status');
        }
        const apiData: StatusApiResponse = await response.json();
        setData(apiData);
        setError(apiData.error || null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
    // Refresh every 60 seconds
    const interval = setInterval(fetchStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-4"></div>
          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
                <div className="h-5 bg-gray-100 dark:bg-gray-800 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !data?.state) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600 dark:text-red-400">
          {error || 'No monitoring data available'}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Please check if the monitoring worker is running.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <OverallStatus state={data.state} />
      
      <div>
        <h2 className="text-xl font-semibold mb-6">90-Day History</h2>
        <MonitorList monitors={data.monitors} state={data.state} />
      </div>
    </div>
  );
}