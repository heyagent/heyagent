'use client';

import { useState, useEffect, use } from 'react';
import { notFound } from 'next/navigation';
import { ChangelogForm } from '@/components/admin/ChangelogForm';

interface PageProps {
  params: Promise<{ id: string }>;
}

interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  summary: string;
  improvements: string[];
  fixes: string[];
}

export default function EditChangelogEntry({ params }: PageProps) {
  const { id } = use(params);
  const [entry, setEntry] = useState<ChangelogEntry | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEntry();
  }, [id]);

  const fetchEntry = async () => {
    try {
      const response = await fetch(`/api/admin/changelog/${id}`);
      if (!response.ok) {
        if (response.status === 404) {
          notFound();
        }
        throw new Error('Failed to fetch entry');
      }

      const data = await response.json() as ChangelogEntry;
      setEntry(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (data: any): Promise<void> => {
    const response = await fetch(`/api/admin/changelog/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json() as { error?: string };
      throw new Error(errorData.error || 'Failed to update entry');
    }

    await response.json();
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <p className="mt-4 text-gray-600">Loading entry...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Edit Changelog Entry</h1>
        <p className="mt-2 text-sm text-gray-700">
          Update the changelog entry details.
        </p>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        {entry && (
          <ChangelogForm 
            initialData={entry} 
            onSubmit={handleSubmit} 
            isEdit={true} 
          />
        )}
      </div>
    </div>
  );
}