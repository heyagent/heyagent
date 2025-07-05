"use client";

import ChangelogTabs from "./ChangelogTabs";
import { ChangelogEntryType } from "@/lib/changelog-data";

interface ChangelogEntryProps {
  entry: ChangelogEntryType;
}

export default function ChangelogEntry({ entry }: ChangelogEntryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 relative">
      {/* Sticky Date Column */}
      <div className="md:col-span-3">
        <div className="md:sticky md:top-24 text-center md:text-left">
          <div className="inline-block md:block">
            <time className="text-2xl font-bold text-amber-400 block mb-1">
              {entry.date}
            </time>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Version {entry.version}
            </span>
          </div>
        </div>
      </div>

      {/* Content Column */}
      <div className="md:col-span-9">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Version {entry.version} Release
          </h3>
          
          <ChangelogTabs
            summary={entry.summary}
            improvements={entry.improvements}
            fixes={entry.fixes}
          />
        </div>
      </div>
    </div>
  );
}