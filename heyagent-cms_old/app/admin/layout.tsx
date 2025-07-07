import { ReactNode } from 'react';
import { 
  HomeIcon, 
  DocumentTextIcon,
  ArrowRightOnRectangleIcon 
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: ReactNode }) {
  // Note: Authentication is handled by Cloudflare Access at the edge
  // If user reaches this page, they're already authenticated

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">HeyAgent CMS</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Admin User</span>
              <a
                href="/cdn-cgi/access/logout"
                className="text-gray-500 hover:text-gray-700"
                title="Logout"
              >
                <ArrowRightOnRectangleIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <nav className="w-64 bg-white shadow-sm min-h-[calc(100vh-4rem)]">
          <div className="p-4">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/admin"
                  className="flex items-center space-x-3 text-gray-700 p-2 rounded-lg hover:bg-gray-100"
                >
                  <HomeIcon className="h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="flex items-center space-x-3 text-gray-700 p-2 rounded-lg hover:bg-gray-100 bg-gray-100"
                >
                  <DocumentTextIcon className="h-5 w-5" />
                  <span>Changelog</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}