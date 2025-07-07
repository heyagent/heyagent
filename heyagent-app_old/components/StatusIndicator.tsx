'use client';

import { useEffect, useState } from 'react';

interface Service {
  name: string;
  url: string;
  status: 'up' | 'down' | 'degraded';
  uptime: string;
  uptimeDay: string;
  uptimeWeek: string;
  uptimeMonth: string;
  responseTime: number;
  icon?: string;
}

interface StatusData {
  lastUpdated: string;
  services: Service[];
}

export default function StatusIndicator() {
  const [statusData, setStatusData] = useState<StatusData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch('/api/status');
        if (!response.ok) {
          throw new Error('Failed to fetch status');
        }
        const data: StatusData = await response.json();
        setStatusData(data);
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
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-24"></div>
      </div>
    );
  }

  if (error || !statusData || statusData.services.length === 0) {
    return null; // Don't show anything if there's an error or no data
  }

  const allOperational = statusData.services.every(service => service.status === 'up');
  const hasIssues = statusData.services.some(service => service.status === 'down');
  const hasDegraded = statusData.services.some(service => service.status === 'degraded');

  const getStatusColor = () => {
    if (hasIssues) return 'text-red-600';
    if (hasDegraded) return 'text-yellow-600';
    return 'text-green-600';
  };

  const getStatusText = () => {
    if (hasIssues) return 'Issues Detected';
    if (hasDegraded) return 'Degraded Performance';
    return 'All Systems Operational';
  };

  const getStatusDot = () => {
    if (hasIssues) return 'bg-red-500';
    if (hasDegraded) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="inline-flex items-center gap-2">
      <span className={`inline-flex h-2 w-2 rounded-full ${getStatusDot()} animate-pulse`}></span>
      <span className={`text-sm font-medium ${getStatusColor()}`}>
        {getStatusText()}
      </span>
    </div>
  );
}