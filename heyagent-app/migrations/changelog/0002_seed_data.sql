-- Seed data for changelog entries
-- This data is derived from lib/changelog-data.ts

-- Insert version 1.2.0
INSERT INTO changelog_entries (version, date, title, summary) VALUES 
('1.2.0', 'Jan 5, 2025', 'Powerful Workflow Automation & Enhanced AI', 'This release introduces powerful new workflow automation features, enhanced AI capabilities, and improved integration support. We''ve also made significant performance improvements to ensure faster response times across all workflows.');

-- Get the ID of the last inserted entry
-- Note: In production, you might want to use a different approach
-- For SQLite, we can use last_insert_rowid()

-- Insert improvements for version 1.2.0
INSERT INTO changelog_improvements (entry_id, improvement, display_order) VALUES 
((SELECT id FROM changelog_entries WHERE version = '1.2.0'), 'Added support for custom workflow templates with drag-and-drop builder', 1),
((SELECT id FROM changelog_entries WHERE version = '1.2.0'), 'Introduced AI-powered workflow suggestions based on usage patterns', 2),
((SELECT id FROM changelog_entries WHERE version = '1.2.0'), 'Enhanced Slack integration with threaded conversation support', 3),
((SELECT id FROM changelog_entries WHERE version = '1.2.0'), 'Added bulk actions for managing multiple workflows simultaneously', 4),
((SELECT id FROM changelog_entries WHERE version = '1.2.0'), 'Improved dashboard analytics with real-time metrics', 5),
((SELECT id FROM changelog_entries WHERE version = '1.2.0'), 'Added support for conditional logic in workflow steps', 6),
((SELECT id FROM changelog_entries WHERE version = '1.2.0'), 'Introduced workflow versioning and rollback capabilities', 7),
((SELECT id FROM changelog_entries WHERE version = '1.2.0'), 'Enhanced mobile app with offline workflow execution', 8);

-- Insert fixes for version 1.2.0
INSERT INTO changelog_fixes (entry_id, fix, display_order) VALUES 
((SELECT id FROM changelog_entries WHERE version = '1.2.0'), 'Fixed issue where workflows would occasionally timeout on large datasets', 1),
((SELECT id FROM changelog_entries WHERE version = '1.2.0'), 'Resolved authentication errors with Microsoft Teams integration', 2),
((SELECT id FROM changelog_entries WHERE version = '1.2.0'), 'Fixed UI glitch in dark mode for workflow builder', 3),
((SELECT id FROM changelog_entries WHERE version = '1.2.0'), 'Corrected timezone handling for scheduled workflows', 4),
((SELECT id FROM changelog_entries WHERE version = '1.2.0'), 'Fixed memory leak in long-running automation processes', 5),
((SELECT id FROM changelog_entries WHERE version = '1.2.0'), 'Resolved issue with file attachments in email workflows', 6);

-- Insert version 1.1.0
INSERT INTO changelog_entries (version, date, title, summary) VALUES 
('1.1.0', 'Dec 15, 2024', 'Enterprise Features & Security Enhancements', 'Major update focusing on enterprise features, security enhancements, and improved user experience. This release also includes our new AI model with better context understanding and response accuracy.');

-- Insert improvements for version 1.1.0
INSERT INTO changelog_improvements (entry_id, improvement, display_order) VALUES 
((SELECT id FROM changelog_entries WHERE version = '1.1.0'), 'Implemented SSO support for enterprise customers', 1),
((SELECT id FROM changelog_entries WHERE version = '1.1.0'), 'Added role-based access control (RBAC) for team management', 2),
((SELECT id FROM changelog_entries WHERE version = '1.1.0'), 'Introduced audit logs for compliance tracking', 3),
((SELECT id FROM changelog_entries WHERE version = '1.1.0'), 'Enhanced natural language processing for better intent recognition', 4),
((SELECT id FROM changelog_entries WHERE version = '1.1.0'), 'Added support for ServiceNow and Jira integrations', 5),
((SELECT id FROM changelog_entries WHERE version = '1.1.0'), 'Improved workflow execution speed by 40%', 6),
((SELECT id FROM changelog_entries WHERE version = '1.1.0'), 'Added multi-language support (Spanish, French, German)', 7),
((SELECT id FROM changelog_entries WHERE version = '1.1.0'), 'Introduced workflow templates marketplace', 8);

-- Insert fixes for version 1.1.0
INSERT INTO changelog_fixes (entry_id, fix, display_order) VALUES 
((SELECT id FROM changelog_entries WHERE version = '1.1.0'), 'Fixed critical security vulnerability in API authentication', 1),
((SELECT id FROM changelog_entries WHERE version = '1.1.0'), 'Resolved issues with workflow scheduling in different timezones', 2),
((SELECT id FROM changelog_entries WHERE version = '1.1.0'), 'Fixed data export functionality for large datasets', 3),
((SELECT id FROM changelog_entries WHERE version = '1.1.0'), 'Corrected webhook payload validation errors', 4),
((SELECT id FROM changelog_entries WHERE version = '1.1.0'), 'Fixed UI responsiveness issues on tablet devices', 5),
((SELECT id FROM changelog_entries WHERE version = '1.1.0'), 'Resolved intermittent connection drops in real-time notifications', 6);

-- Insert version 1.0.0
INSERT INTO changelog_entries (version, date, title, summary) VALUES 
('1.0.0', 'Nov 1, 2024', 'HeyAgent Launch - Welcome to the Future of Work', 'Initial release of HeyAgent! This marks the beginning of our journey to revolutionize workplace automation. Our AI-powered chatbot is now ready to help businesses automate their workflows and boost productivity.');

-- Insert improvements for version 1.0.0
INSERT INTO changelog_improvements (entry_id, improvement, display_order) VALUES 
((SELECT id FROM changelog_entries WHERE version = '1.0.0'), 'Core chatbot functionality with natural language understanding', 1),
((SELECT id FROM changelog_entries WHERE version = '1.0.0'), 'Pre-built workflows for common business processes', 2),
((SELECT id FROM changelog_entries WHERE version = '1.0.0'), 'Integration with Slack and Microsoft Teams', 3),
((SELECT id FROM changelog_entries WHERE version = '1.0.0'), 'Basic analytics dashboard', 4),
((SELECT id FROM changelog_entries WHERE version = '1.0.0'), 'User onboarding wizard', 5),
((SELECT id FROM changelog_entries WHERE version = '1.0.0'), 'Email notification system', 6),
((SELECT id FROM changelog_entries WHERE version = '1.0.0'), 'API access for developers', 7),
((SELECT id FROM changelog_entries WHERE version = '1.0.0'), 'Mobile-responsive web interface', 8);

-- Insert fixes for version 1.0.0
INSERT INTO changelog_fixes (entry_id, fix, display_order) VALUES 
((SELECT id FROM changelog_entries WHERE version = '1.0.0'), 'N/A - Initial release', 1);