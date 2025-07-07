'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { ListEditor } from './ListEditor';

interface ChangelogFormData {
  version: string;
  date: string;
  title: string;
  summary: string;
  improvements: string[];
  fixes: string[];
}

interface ChangelogFormProps {
  initialData?: ChangelogFormData;
  onSubmit: (data: ChangelogFormData) => Promise<void>;
  isEdit?: boolean;
}

export function ChangelogForm({ initialData, onSubmit, isEdit = false }: ChangelogFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<ChangelogFormData>(
    initialData || {
      version: '',
      date: new Date().toISOString().split('T')[0],
      title: '',
      summary: '',
      improvements: [],
      fixes: []
    }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      await onSubmit(formData);
      router.push('/admin');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setIsSubmitting(false);
    }
  };

  const updateField = (field: keyof ChangelogFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Input
          label="Version"
          type="text"
          required
          value={formData.version}
          onChange={(e) => updateField('version', e.target.value)}
          placeholder="1.0.0"
        />

        <Input
          label="Date"
          type="date"
          required
          value={formData.date}
          onChange={(e) => updateField('date', e.target.value)}
        />
      </div>

      <Input
        label="Title"
        type="text"
        required
        value={formData.title}
        onChange={(e) => updateField('title', e.target.value)}
        placeholder="Major Feature Release"
      />

      <div>
        <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-1">
          Summary
        </label>
        <textarea
          id="summary"
          required
          rows={4}
          value={formData.summary}
          onChange={(e) => updateField('summary', e.target.value)}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          placeholder="Describe the main changes in this release..."
        />
      </div>

      <div className="space-y-6">
        <ListEditor
          label="Improvements"
          items={formData.improvements}
          onChange={(items) => updateField('improvements', items)}
          placeholder="Add an improvement..."
        />

        <ListEditor
          label="Fixes"
          items={formData.fixes}
          onChange={(items) => updateField('fixes', items)}
          placeholder="Add a fix..."
        />
      </div>

      <div className="flex justify-end space-x-3 pt-6 border-t">
        <Button
          type="button"
          variant="secondary"
          onClick={() => router.push('/admin')}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Saving...' : isEdit ? 'Update Entry' : 'Create Entry'}
        </Button>
      </div>
    </form>
  );
}