"use client";

import ChangelogLayout from "@/components/changelog/ChangelogLayout";
import ChangelogEntry from "@/components/changelog/ChangelogEntry";
import { changelogData } from "@/lib/changelog-data";

export default function ChangelogPage() {
  return (
    <ChangelogLayout>
      <div className="space-y-16">
        {changelogData.map((entry, index) => (
          <ChangelogEntry key={entry.version} entry={entry} />
        ))}
      </div>
    </ChangelogLayout>
  );
}