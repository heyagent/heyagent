import { Metadata } from 'next';
import StatusPage from '@/components/StatusPage';

export const metadata: Metadata = {
  title: 'Service Status | HeyAgent',
  description: 'Real-time status and uptime information for HeyAgent services',
};

export default function Status() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-6 sm:pb-8 md:pb-12 bg-gradient-to-b from-amber-400/20 dark:from-amber-400/40 to-transparent">
        <div className="container relative mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 text-center mt-6">
            <div>
              <h5 className="text-2xl sm:text-3xl md:text-4xl md:leading-normal leading-normal tracking-wider font-semibold mb-0">
                Service Status
              </h5>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mt-5">
              Monitor the real-time status and performance of HeyAgent services
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-6 sm:py-8 md:py-10 lg:py-24">
        <div className="container relative mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="md:flex justify-center">
            <div className="md:w-3/4">
              <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md border border-gray-200 dark:border-gray-800">
                <StatusPage />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}