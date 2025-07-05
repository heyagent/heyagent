import { Metadata } from 'next';
import StatusPage from '@/components/StatusPage';

export const metadata: Metadata = {
  title: 'Service Status | HeyAgent',
  description: 'Real-time status and uptime information for HeyAgent services',
};

export default function Status() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Service Status</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Monitor the real-time status and performance of HeyAgent services
          </p>
        </div>
        
        <StatusPage />
        
        <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
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