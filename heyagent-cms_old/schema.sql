-- Changelog Database Schema for Local Development
-- This file sets up the D1 database structure for the HeyAgent CMS

-- Main changelog entries table
CREATE TABLE IF NOT EXISTS changelog_entries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  version TEXT NOT NULL,
  date TEXT NOT NULL,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Improvements related to changelog entries
CREATE TABLE IF NOT EXISTS changelog_improvements (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  entry_id INTEGER NOT NULL,
  improvement TEXT NOT NULL,
  FOREIGN KEY (entry_id) REFERENCES changelog_entries(id) ON DELETE CASCADE
);

-- Fixes related to changelog entries
CREATE TABLE IF NOT EXISTS changelog_fixes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  entry_id INTEGER NOT NULL,
  fix TEXT NOT NULL,
  FOREIGN KEY (entry_id) REFERENCES changelog_entries(id) ON DELETE CASCADE
);

-- Indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_changelog_date ON changelog_entries(date DESC);
CREATE INDEX IF NOT EXISTS idx_changelog_version ON changelog_entries(version);
CREATE INDEX IF NOT EXISTS idx_improvements_entry ON changelog_improvements(entry_id);
CREATE INDEX IF NOT EXISTS idx_fixes_entry ON changelog_fixes(entry_id);