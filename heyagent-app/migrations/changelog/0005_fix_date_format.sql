-- Fix date format to use sortable ISO date format (YYYY-MM-DD)

-- Update existing dates to sortable format
UPDATE changelog_entries SET date = '2025-01-10' WHERE version = '1.2.1';
UPDATE changelog_entries SET date = '2025-01-05' WHERE version = '1.2.0';
UPDATE changelog_entries SET date = '2025-01-02' WHERE version = '1.1.5';
UPDATE changelog_entries SET date = '2024-12-28' WHERE version = '1.1.4';
UPDATE changelog_entries SET date = '2024-12-20' WHERE version = '1.1.3';
UPDATE changelog_entries SET date = '2024-12-15' WHERE version = '1.1.0';
UPDATE changelog_entries SET date = '2024-12-10' WHERE version = '1.1.2';
UPDATE changelog_entries SET date = '2024-12-05' WHERE version = '1.1.1';
UPDATE changelog_entries SET date = '2024-11-25' WHERE version = '1.0.5';
UPDATE changelog_entries SET date = '2024-11-20' WHERE version = '1.0.4';
UPDATE changelog_entries SET date = '2024-11-15' WHERE version = '1.0.3';
UPDATE changelog_entries SET date = '2024-11-10' WHERE version = '1.0.2';
UPDATE changelog_entries SET date = '2024-11-05' WHERE version = '1.0.1';
UPDATE changelog_entries SET date = '2024-11-01' WHERE version = '1.0.0';