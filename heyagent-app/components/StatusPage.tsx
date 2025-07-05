'use client';

import { useEffect, useState } from 'react';
import { CheckCircle, XCircle, AlertCircle, Clock, Activity } from 'lucide-react';

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
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'down':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const baseClasses = "px-2 py-1 text-xs font-medium rounded-full";
    switch (status) {
      case 'up':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'down':
        return `${baseClasses} bg-red-100 text-red-800`;
      case 'degraded':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  if (loading) {
    return (
      <div className="p-6 space-y-4">
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-100 rounded-lg p-4 h-24"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">Error loading status: {error}</p>
        </div>
      </div>
    );
  }

  if (!statusData || statusData.services.length === 0) {
    return (
      <div className="p-6">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <p className="text-gray-600">Status data is being initialized. Please check back in a few minutes.</p>
        </div>
      </div>
    );
  }

  const allOperational = statusData.services.every(service => service.status === 'up');

  return (
    <div className="space-y-6">
      {/* Overall Status Banner */}
      <div className={`p-4 rounded-lg ${
        allOperational ? 'bg-green-50 border border-green-200' : 'bg-yellow-50 border border-yellow-200'
      }`}>
        <div className="flex items-center gap-2">
          {allOperational ? (
            <>
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h2 className="text-lg font-semibold text-green-900">All Systems Operational</h2>
            </>
          ) : (
            <>
              <AlertCircle className="w-6 h-6 text-yellow-600" />
              <h2 className="text-lg font-semibold text-yellow-900">Some Systems May Be Experiencing Issues</h2>
            </>
          )}
        </div>
      </div>

      {/* Services List */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Services</h3>
        {statusData.services.map((service) => (
          <div key={service.name} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                {getStatusIcon(service.status)}
                <div>
                  <h4 className="font-medium text-gray-900">{service.name}</h4>
                  <p className="text-sm text-gray-500 mt-1">{service.url}</p>
                </div>
              </div>
              <span className={getStatusBadge(service.status)}>
                {service.status.toUpperCase()}
              </span>
            </div>

            {/* Metrics */}
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="flex items-center gap-1 text-gray-500">
                  <Activity className="w-4 h-4" />
                  <span>Overall Uptime</span>
                </div>
                <p className="font-medium text-gray-900 mt-1">{service.uptime}</p>
              </div>
              <div>
                <div className="flex items-center gap-1 text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>Response Time</span>
                </div>
                <p className="font-medium text-gray-900 mt-1">{service.responseTime}ms</p>
              </div>
              <div>
                <div className="text-gray-500">24h Uptime</div>
                <p className="font-medium text-gray-900 mt-1">{service.uptimeDay}</p>
              </div>
              <div>
                <div className="text-gray-500">7d Uptime</div>
                <p className="font-medium text-gray-900 mt-1">{service.uptimeWeek}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Last Updated */}
      <div className="text-sm text-gray-500 text-center">
        Last updated: {new Date(statusData.lastUpdated).toLocaleString()}
      </div>
    </div>
  );
}