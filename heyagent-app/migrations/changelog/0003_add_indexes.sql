-- Add indexes for better query performance
-- Index on date for ordering
CREATE INDEX IF NOT EXISTS idx_changelog_date ON changelog_entries(date DESC);

-- Index on title for search performance
CREATE INDEX IF NOT EXISTS idx_changelog_title ON changelog_entries(title);

-- Index on summary for search performance
CREATE INDEX IF NOT EXISTS idx_changelog_summary ON changelog_entries(summary);

-- Composite index for improvements table
CREATE INDEX IF NOT EXISTS idx_improvements_entry_order ON changelog_improvements(entry_id, display_order);

-- Composite index for fixes table
CREATE INDEX IF NOT EXISTS idx_fixes_entry_order ON changelog_fixes(entry_id, display_order);

-- Index on improvement text for search
CREATE INDEX IF NOT EXISTS idx_improvement_text ON changelog_improvements(improvement);

-- Index on fix text for search
CREATE INDEX IF NOT EXISTS idx_fix_text ON changelog_fixes(fix);