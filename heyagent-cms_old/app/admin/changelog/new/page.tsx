'use client';

import { ChangelogForm } from '@/components/admin/ChangelogForm';

export default function NewChangelogEntry() {
  const handleSubmit = async (data: any): Promise<void> => {
    const response = await fetch('/api/admin/changelog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json() as { error?: string };
      throw new Error(errorData.error || 'Failed to create entry');
    }

    await response.json();
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Create Changelog Entry</h1>
        <p className="mt-2 text-sm text-gray-700">
          Add a new changelog entry to track changes in the application.
        </p>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <ChangelogForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}