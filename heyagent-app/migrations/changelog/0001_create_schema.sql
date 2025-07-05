-- Create changelog entries table
CREATE TABLE IF NOT EXISTS changelog_entries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  version TEXT NOT NULL UNIQUE,
  date TEXT NOT NULL,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create improvements table
CREATE TABLE IF NOT EXISTS changelog_improvements (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  entry_id INTEGER NOT NULL,
  improvement TEXT NOT NULL,
  display_order INTEGER NOT NULL,
  FOREIGN KEY (entry_id) REFERENCES changelog_entries(id) ON DELETE CASCADE
);

-- Create fixes table
CREATE TABLE IF NOT EXISTS changelog_fixes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  entry_id INTEGER NOT NULL,
  fix TEXT NOT NULL,
  display_order INTEGER NOT NULL,
  FOREIGN KEY (entry_id) REFERENCES changelog_entries(id) ON DELETE CASCADE
);

-- Create indexes for better query performance
CREATE INDEX idx_changelog_entries_version ON changelog_entries(version);
CREATE INDEX idx_changelog_entries_date ON changelog_entries(date);
CREATE INDEX idx_improvements_entry_id ON changelog_improvements(entry_id);
CREATE INDEX idx_fixes_entry_id ON changelog_fixes(entry_id);