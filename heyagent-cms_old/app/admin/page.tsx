'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { PlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Modal } from '@/components/ui/Modal';
import { ChangelogTable } from '@/components/admin/ChangelogTable';

interface ChangelogEntry {
  id: number;
  version: string;
  date: string;
  title: string;
  summary: string;
  improvements: string[];
  fixes: string[];
}

interface PaginationData {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  limit: number;
}

function AdminDashboardContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [entries, setEntries] = useState<ChangelogEntry[]>([]);
  const [pagination, setPagination] = useState<PaginationData>({
    currentPage: 1,
    totalPages: 0,
    totalItems: 0,
    hasNextPage: false,
    hasPreviousPage: false,
    limit: 10
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; entry: ChangelogEntry | null }>({
    isOpen: false,
    entry: null
  });

  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  useEffect(() => {
    fetchEntries();
  }, [currentPage, searchParams.get('search')]);

  const fetchEntries = async () => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams();
      params.set('page', currentPage.toString());
      params.set('limit', '10');
      
      const search = searchParams.get('search');
      if (search) {
        params.set('search', search);
      }

      const response = await fetch(`/api/admin/changelog?${params.toString()}`);
      if (!response.ok) {
        throw new Error('Failed to fetch changelog entries');
      }

      const data = await response.json() as { data: ChangelogEntry[]; pagination: PaginationData };
      setEntries(data.data);
      setPagination(data.pagination);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (searchTerm) {
      params.set('search', searchTerm);
      params.set('page', '1');
    } else {
      params.delete('search');
    }
    router.push(`/admin?${params.toString()}`);
  };

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    router.push(`/admin?${params.toString()}`);
  };

  const handleDelete = async () => {
    if (!deleteModal.entry) return;

    try {
      const response = await fetch(`/api/admin/changelog/${deleteModal.entry.id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Failed to delete entry');
      }

      setDeleteModal({ isOpen: false, entry: null });
      fetchEntries();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete entry');
    }
  };

  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Changelog Entries</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage changelog entries for the HeyAgent application.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Link href="/admin/changelog/new">
            <Button>
              <PlusIcon className="h-4 w-4 mr-2" />
              Add Entry
            </Button>
          </Link>
        </div>
      </div>

      {/* Search */}
      <form onSubmit={handleSearch} className="mt-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search entries..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </form>

      {/* Table */}
      <div className="mt-8">
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading entries...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600">{error}</p>
          </div>
        ) : entries.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No changelog entries found.</p>
          </div>
        ) : (
          <>
            <ChangelogTable
              entries={entries}
              onDelete={(entry) => {
                const selectedEntry = entries.find(e => e.id === entry);
                setDeleteModal({ isOpen: true, entry: selectedEntry || null });
              }}
            />

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <div className="mt-6 flex items-center justify-between">
                <div className="flex-1 flex justify-between sm:hidden">
                  <Button
                    variant="secondary"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={!pagination.hasPreviousPage}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={!pagination.hasNextPage}
                  >
                    Next
                  </Button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      Showing page <span className="font-medium">{pagination.currentPage}</span> of{' '}
                      <span className="font-medium">{pagination.totalPages}</span>
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={!pagination.hasPreviousPage}
                    >
                      Previous
                    </Button>
                    {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                      const page = i + 1;
                      return (
                        <Button
                          key={page}
                          variant={page === currentPage ? 'primary' : 'secondary'}
                          size="sm"
                          onClick={() => handlePageChange(page)}
                        >
                          {page}
                        </Button>
                      );
                    })}
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={!pagination.hasNextPage}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={deleteModal.isOpen}
        onClose={() => setDeleteModal({ isOpen: false, entry: null })}
        title="Delete Changelog Entry"
      >
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Are you sure you want to delete version <strong>{deleteModal.entry?.version}</strong>?
            This action cannot be undone.
          </p>
        </div>
        <div className="mt-4 flex justify-end space-x-3">
          <Button
            variant="secondary"
            onClick={() => setDeleteModal({ isOpen: false, entry: null })}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <Suspense fallback={
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    }>
      <AdminDashboardContent />
    </Suspense>
  );
}