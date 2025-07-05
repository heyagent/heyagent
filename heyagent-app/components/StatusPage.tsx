'use client';

import { useEffect, useState } from 'react';
import { FiCheckCircle, FiXCircle, FiAlertCircle, FiClock, FiActivity } from 'react-icons/fi';
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
        return <FiCheckCircle className="w-5 h-5 text-green-600" />;
      case 'down':
        return <FiXCircle className="w-5 h-5 text-red-600" />;
      case 'degraded':
        return <FiAlertCircle className="w-5 h-5 text-yellow-600" />;
      default:
        return <FiAlertCircle className="w-5 h-5 text-gray-500" />;
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
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      case 'degraded':
        return 'text-yellow-600';
      default:
        return 'text-gray-600';
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-100 dark:bg-gray-800 rounded p-4 h-24"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded">
        <p className="text-red-800 dark:text-red-300">Error loading status: {error}</p>
      </div>
    );
  }

  if (!statusData || statusData.services.length === 0) {
    return (
      <div className="p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">
        <p className="text-slate-600 dark:text-slate-300">
          Status data is being initialized. Please check back in a few minutes.
        </p>
      </div>
    );
  }

  const allOperational = statusData.services.every(service => service.status === 'up');

  return (
    <div className="space-y-8">
      {/* Overall Status */}
      <div>
        <h5 className="text-xl font-semibold mb-4">Current Status</h5>
        <p className={`text-lg ${allOperational ? 'text-green-600' : 'text-red-600'}`}>
          {allOperational ? 'All Systems Operational' : 'Some Services May Be Down'}
        </p>
      </div>

      {/* Service Cards */}
      <div>
        <h5 className="text-xl font-semibold mb-4">Services</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {statusData.services.map((service) => (
            <div 
              key={service.name} 
              className="p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {getStatusIcon(service.status)}
                  <h6 className="font-semibold text-slate-900 dark:text-slate-100">
                    {service.name}
                  </h6>
                </div>
                <span className={`text-sm font-medium ${getStatusColor(service.status)}`}>
                  {getStatusText(service.status)}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm text-slate-600 dark:text-slate-300">
                <div>
                  <span className="block text-xs text-slate-500 dark:text-slate-400">Uptime</span>
                  <span className="font-medium">{service.uptime}</span>
                </div>
                <div>
                  <span className="block text-xs text-slate-500 dark:text-slate-400">Response</span>
                  <span className="font-medium">
                    {service.responseTime > 0 ? `${service.responseTime}ms` : 'N/A'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* History Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-semibold">90-Day History</h5>
          <a 
            href="https://github.com/heyagent/heyagent-status"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-amber-400 hover:text-amber-500"
          >
            View details →
          </a>
        </div>

        <div className="space-y-6">
          {statusData.services.map((service) => {
            // Generate mock history data for now
            const mockHistory = Array.from({ length: 90 }, (_, i) => {
              const date = new Date();
              date.setDate(date.getDate() - (89 - i));
              const isDown = service.status === 'down' || Math.random() < 0.02;
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
      <div className="text-sm text-slate-500 dark:text-slate-400">
        Last updated: {new Date(statusData.lastUpdated).toLocaleString()}
      </div>
    </div>
  );
}