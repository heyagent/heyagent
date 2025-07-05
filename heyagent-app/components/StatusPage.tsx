'use client';

import { useEffect, useState } from 'react';
import { CheckCircle, XCircle, AlertCircle, Clock, Activity } from 'lucide-react';
import StatusHistory from './StatusHistory';

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
  dailyMinutesDown?: Record<string, number>;
}

interface StatusData {
  lastUpdated: string;
  services: Service[];
}

export default function StatusPage() {
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
        const data = await response.json();
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'up':
        return <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400" />;
      case 'down':
        return <XCircle className="w-5 h-5 text-red-500 dark:text-red-400" />;
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-500 dark:text-gray-400" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'up':
        return 'Operational';
      case 'down':
        return 'Down';
      case 'degraded':
        return 'Degraded';
      default:
        return 'Unknown';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'up':
        return 'text-green-600 dark:text-green-400';
      case 'down':
        return 'text-red-600 dark:text-red-400';
      case 'degraded':
        return 'text-yellow-600 dark:text-yellow-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  if (loading) {
    return (
      <div className="space-y-8">
        {/* Loading skeleton for status banner */}
        <div className="animate-pulse">
          <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
        </div>

        {/* Loading skeleton for service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 h-32"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
        <p className="text-red-800 dark:text-red-300">Error loading status: {error}</p>
      </div>
    );
  }

  if (!statusData || statusData.services.length === 0) {
    return (
      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
        <p className="text-gray-600 dark:text-gray-300">Status data is being initialized. Please check back in a few minutes.</p>
      </div>
    );
  }

  const allOperational = statusData.services.every(service => service.status === 'up');
  const hasIssues = statusData.services.some(service => service.status === 'down');

  return (
    <div className="space-y-8">
      {/* Overall Status Banner */}
      <div className={`p-6 rounded-lg text-white ${
        allOperational 
          ? 'bg-green-600 dark:bg-green-700' 
          : hasIssues 
            ? 'bg-red-600 dark:bg-red-700' 
            : 'bg-yellow-600 dark:bg-yellow-700'
      }`}>
        <h2 className="text-xl font-semibold">
          {allOperational 
            ? 'All Systems Operational' 
            : hasIssues 
              ? 'System Issues Detected' 
              : 'Degraded Performance'}
        </h2>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {statusData.services.map((service) => (
          <div 
            key={service.name} 
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                {getStatusIcon(service.status)}
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    {service.name}
                  </h3>
                  <p className={`text-sm font-medium ${getStatusColor(service.status)}`}>
                    {getStatusText(service.status)}
                  </p>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-gray-500 dark:text-gray-400">Uptime</div>
                <p className="font-medium text-gray-900 dark:text-gray-100">{service.uptime}</p>
              </div>
              <div>
                <div className="text-gray-500 dark:text-gray-400">Response</div>
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  {service.responseTime > 0 ? `${service.responseTime}ms` : 'N/A'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* History Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Uptime over the past 90 days
          </h2>
          <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
            View historical uptime
          </button>
        </div>

        <div className="space-y-8">
          {statusData.services.map((service) => {
            // Generate mock history data for now
            const mockHistory = Array.from({ length: 90 }, (_, i) => {
              const date = new Date();
              date.setDate(date.getDate() - (89 - i));
              const isDown = service.status === 'down' || Math.random() < 0.05;
              return {
                date: date.toISOString().split('T')[0],
                uptime: isDown ? 0 : 100,
                status: isDown ? 'down' as const : 'up' as const
              };
            });

            return (
              <StatusHistory
                key={service.name}
                serviceName={service.name}
                history={mockHistory}
                uptimePercentage={service.uptime}
              />
            );
          })}
        </div>
      </div>

      {/* Last Updated */}
      <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
        Last updated: {new Date(statusData.lastUpdated).toLocaleString()}
      </div>
    </div>
  );
}