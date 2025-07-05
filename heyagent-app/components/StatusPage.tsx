'use client';

import { useEffect, useState } from 'react';
import { FiCheckCircle, FiXCircle, FiAlertCircle, FiClock, FiActivity } from 'react-icons/fi';
import StatusHistory from './StatusHistory';

interface Service {
  name: string;
  url: string;
  status: 'up' | 'down' | 'degraded' | 'unknown';
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
      case 'unknown':
        return <FiAlertCircle className="w-5 h-5 text-gray-500" />;
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

  if (error || !statusData || statusData.services.length === 0) {
    // Show services with unknown status when there's an error or no data
    const unknownServices = [
      { name: 'Website', status: 'unknown', uptime: 'N/A', responseTime: 0 },
      { name: 'Help and Support', status: 'unknown', uptime: 'N/A', responseTime: 0 },
      { name: 'Runner', status: 'unknown', uptime: 'N/A', responseTime: 0 },
      { name: 'Backend', status: 'unknown', uptime: 'N/A', responseTime: 0 }
    ];
    
    const fallbackData = {
      services: unknownServices.map(s => ({
        ...s,
        url: '',
        uptimeDay: 'N/A',
        uptimeWeek: 'N/A',
        uptimeMonth: 'N/A',
        dailyMinutesDown: {}
      })),
      lastUpdated: new Date().toISOString()
    };
    
    setStatusData(fallbackData);
    setError(null);
    return null; // Re-render will happen with fallback data
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
        <div className="mb-4">
          <h5 className="text-xl font-semibold">90-Day History</h5>
        </div>

        <div className="space-y-6">
          {statusData.services.map((service) => {
            const today = new Date().toISOString().split('T')[0];
            
            // Generate history for each day
            const history = Array.from({ length: 90 }, (_, i) => {
              const date = new Date();
              date.setDate(date.getDate() - (89 - i));
              const dateStr = date.toISOString().split('T')[0];
              const isToday = dateStr === today;
              
              // For today, always use the current status
              if (isToday) {
                let status: 'up' | 'down' | 'partial' | 'no-data';
                let uptime = 100;
                
                if (service.status === 'unknown') {
                  status = 'no-data';
                } else if (service.status === 'down') {
                  status = 'down';
                  uptime = 0;
                } else if (service.status === 'degraded') {
                  status = 'partial';
                  uptime = 50;
                } else {
                  status = 'up';
                  uptime = 100;
                }
                
                return {
                  date: dateStr,
                  uptime,
                  status
                };
              }
              
              // Check if this specific date exists in the data
              if (!service.dailyMinutesDown || !(dateStr in service.dailyMinutesDown)) {
                // No data for this date - show gray bar
                return {
                  date: dateStr,
                  uptime: 100,
                  status: 'no-data' as const
                };
              }
              
              // We have data for this date
              const minutesDown = service.dailyMinutesDown[dateStr];
              const uptime = minutesDown > 0 ? ((1440 - minutesDown) / 1440) * 100 : 100;
              
              // Determine status based on downtime
              let status: 'up' | 'down' | 'partial' | 'no-data';
              if (minutesDown === 0) {
                status = 'up';
              } else if (minutesDown >= 720) { // 12+ hours
                status = 'down';
              } else {
                status = 'partial';
              }
              
              return {
                date: dateStr,
                uptime,
                status
              };
            });

            return (
              <StatusHistory
                key={service.name}
                serviceName={service.name}
                history={history}
                uptimePercentage={service.uptime || 'N/A'}
                currentStatus={service.status}
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