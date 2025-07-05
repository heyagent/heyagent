import { Metadata } from 'next';
import StatusPage from '@/components/StatusPage';

export const metadata: Metadata = {
  title: 'Service Status | HeyAgent',
  description: 'Real-time status and uptime information for HeyAgent services',
};

export default function Status() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Service Status</h1>
          <p className="mt-2 text-gray-600">
            Monitor the real-time status and performance of HeyAgent services
          </p>
        </div>
        
        <StatusPage />
        
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> Status monitoring has just been set up. If no data is shown, please check back in 5-10 minutes 
            as our monitoring system initializes. Updates occur every 5 minutes.
          </p>
        </div>
        
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            Powered by{' '}
            <a 
              href="https://github.com/upptime/upptime" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Upptime
            </a>
            {' '}•{' '}
            <a 
              href="https://github.com/heyagent/heyagent-status" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View on GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}