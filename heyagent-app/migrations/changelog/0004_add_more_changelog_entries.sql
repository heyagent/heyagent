-- Add more changelog entries for pagination testing

-- Insert version 1.2.1
INSERT INTO changelog_entries (version, date, title, summary) VALUES 
('1.2.1', 'Jan 10, 2025', 'Hotfix: Critical Bug Fixes', 'Emergency hotfix addressing critical issues discovered in the 1.2.0 release. This update ensures system stability and resolves workflow execution errors affecting some enterprise customers.');

INSERT INTO changelog_improvements (entry_id, improvement, display_order) VALUES 
((SELECT id FROM changelog_entries WHERE version = '1.2.1'), 'Optimized memory usage for large-scale workflow processing', 1),
((SELECT id FROM changelog_entries WHERE version = '1.2.1'), 'Added retry mechanism for failed API calls', 2),
((SELECT id FROM changelog_entries WHERE version = '1.2.1'), 'Improved error messaging for better debugging', 3);

INSERT INTO changelog_fixes (entry_id, fix, display_order) VALUES 
((SELECT id FROM changelog_entries WHERE version = '1.2.1'), 'Fixed critical bug causing workflow loops in certain conditions', 1),
((SELECT id FROM changelog_entries WHERE version = '1.2.1'), 'Resolved database connection pool exhaustion issue', 2),
((SELECT id FROM changelog_entries WHERE version = '1.2.1'), 'Fixed race condition in concurrent workflow executions', 3);

-- Insert version 1.1.5
INSERT INTO changelog_entries (version, date, title, summary) VALUES 
('1.1.5', 'Jan 2, 2025', 'New Year Performance Boost', 'Start the new year with blazing fast performance! This update focuses on speed optimizations and resource efficiency improvements across the platform.');

INSERT INTO changelog_improvements (entry_id, improvement, display_order) VALUES 
((SELECT id FROM changelog_entries WHERE version = '1.1.5'), 'Reduced API response time by 60% through caching optimizations', 1),
((SELECT id FROM changelog_entries WHERE version = '1.1.5'), 'Implemented lazy loading for dashboard components', 2),
((SELECT id FROM changelog_entries WHERE version = '1.1.5'), 'Added CDN support for static assets', 3),
((SELECT id FROM changelog_entries WHERE version = '1.1.5'), 'Optimized database queries with better indexing', 4);

INSERT INTO changelog_fixes (entry_id, fix, display_order) VALUES 
((SELECT id FROM changelog_entries WHERE version = '1.1.5'), 'Fixed slow loading times for workflow history', 1),
((SELECT id FROM changelog_entries WHERE version = '1.1.5'), 'Resolved memory spikes during bulk operations', 2);

-- Insert version 1.1.4
INSERT INTO changelog_entries (version, date, title, summary) VALUES 
('1.1.4', 'Dec 28, 2024', 'Holiday Features & Automation', 'Special holiday release bringing festive automation features and improved scheduling capabilities for managing seasonal workflows.');

INSERT INTO changelog_improvements (entry_id, improvement, display_order) VALUES 
((SELECT id FROM changelog_entries WHERE version = '1.1.4'), 'Added holiday-aware scheduling for workflows', 1),
((SELECT id FROM changelog_entries WHERE version = '1.1.4'), 'Introduced out-of-office automation templates', 2),
((SELECT id FROM changelog_entries WHERE version = '1.1.4'), 'Enhanced calendar integration with holiday detection', 3),
((SELECT id FROM changelog_entries WHERE version = '1.1.4'), 'Added bulk workflow pause/resume functionality', 4),
((SELECT id FROM changelog_entries WHERE version = '1.1.4'), 'Implemented custom holiday calendar support', 5);

INSERT INTO changelog_fixes (entry_id, fix, display_order) VALUES 
((SELECT id FROM changelog_entries WHERE version = '1.1.4'), 'Fixed timezone issues with holiday scheduling', 1),
((SELECT id FROM changelog_entries WHERE version = '1.1.4'), 'Resolved calendar sync conflicts', 2);

-- Insert version 1.1.3
INSERT INTO changelog_entries (version, date, title, summary) VALUES 
('1.1.3', 'Dec 20, 2024', 'Stability & Reliability Update', 'Focus on system stability and reliability improvements based on user feedback. This release addresses various edge cases and enhances error handling.');

INSERT INTO changelog_improvements (entry_id, improvement, display_order) VALUES 
((SELECT id FROM changelog_entries WHERE version = '1.1.3'), 'Enhanced error recovery mechanisms', 1),
((SELECT id FROM changelog_entries WHERE version = '1.1.3'), 'Added automatic backup for workflow configurations', 2),
((SELECT id FROM changelog_entries WHERE version = '1.1.3'), 'Improved system monitoring and alerting', 3);

INSERT INTO changelog_fixes (entry_id, fix, display_order) VALUES 
((SELECT id FROM changelog_entries WHERE version = '1.1.3'), 'Fixed intermittent API timeout errors', 1),
((SELECT id FROM changelog_entries WHERE version = '1.1.3'), 'Resolved workflow state corruption issues', 2),
((SELECT id FROM changelog_entries WHERE version = '1.1.3'), 'Fixed data validation errors in form inputs', 3);

-- Insert version 1.1.2
INSERT INTO changelog_entries (version, date, title, summary) VALUES 
('1.1.2', 'Dec 10, 2024', 'Integration Expansion Pack', 'Expanding our integration ecosystem with new connectors and improved existing integrations for seamless workflow automation.');

INSERT INTO changelog_improvements (entry_id, improvement, display_order) VALUES 
((SELECT id FROM changelog_entries WHERE version = '1.1.2'), 'Added Salesforce CRM integration', 1),
((SELECT id FROM changelog_entries WHERE version = '1.1.2'), 'Introduced Google Workspace connector', 2),
((SELECT id FROM changelog_entries WHERE version = '1.1.2'), 'Enhanced Zapier compatibility', 3),
((SELECT id FROM changelog_entries WHERE version = '1.1.2'), 'Added webhook debugging tools', 4),
((SELECT id FROM changelog_entries WHERE version = '1.1.2'), 'Implemented OAuth 2.0 for secure integrations', 5);

INSERT INTO changelog_fixes (entry_id, fix, display_order) VALUES 
((SELECT id FROM changelog_entries WHERE version = '1.1.2'), 'Fixed authentication issues with third-party services', 1),
((SELECT id FROM changelog_entries WHERE version = '1.1.2'), 'Resolved data mapping errors in integrations', 2);

-- Insert version 1.1.1
INSERT INTO changelog_entries (version, date, title, summary) VALUES 
('1.1.1', 'Dec 5, 2024', 'Quick Fixes & Improvements', 'Rapid response update addressing user-reported issues and implementing quick wins for better user experience.');

INSERT INTO changelog_improvements (entry_id, improvement, display_order) VALUES 
((SELECT id FROM changelog_entries WHERE version = '1.1.1'), 'Added keyboard shortcuts for common actions', 1),
((SELECT id FROM changelog_entries WHERE version = '1.1.1'), 'Improved form validation feedback', 2),
((SELECT id FROM changelog_entries WHERE version = '1.1.1'), 'Enhanced search functionality in workflow library', 3);

INSERT INTO changelog_fixes (entry_id, fix, display_order) VALUES 
((SELECT id FROM changelog_entries WHERE version = '1.1.1'), 'Fixed button alignment issues in Safari', 1),
((SELECT id FROM changelog_entries WHERE version = '1.1.1'), 'Resolved copy-paste issues in workflow builder', 2),
((SELECT id FROM changelog_entries WHERE version = '1.1.1'), 'Fixed notification sound settings not saving', 3);

-- Insert version 1.0.5
INSERT INTO changelog_entries (version, date, title, summary) VALUES 
('1.0.5', 'Nov 25, 2024', 'Thanksgiving Special: Gratitude Features', 'We''re thankful for our users! This release includes community-requested features and improvements to make your automation experience even better.');

INSERT INTO changelog_improvements (entry_id, improvement, display_order) VALUES 
((SELECT id FROM changelog_entries WHERE version = '1.0.5'), 'Added workflow sharing capabilities', 1),
((SELECT id FROM changelog_entries WHERE version = '1.0.5'), 'Introduced team collaboration features', 2),
((SELECT id FROM changelog_entries WHERE version = '1.0.5'), 'Enhanced workflow commenting system', 3),
((SELECT id FROM changelog_entries WHERE version = '1.0.5'), 'Added workflow performance metrics', 4);

INSERT INTO changelog_fixes (entry_id, fix, display_order) VALUES 
((SELECT id FROM changelog_entries WHERE version = '1.0.5'), 'Fixed sharing permissions not updating correctly', 1),
((SELECT id FROM changelog_entries WHERE version = '1.0.5'), 'Resolved notification delivery delays', 2);

-- Insert version 1.0.4
INSERT INTO changelog_entries (version, date, title, summary) VALUES 
('1.0.4', 'Nov 20, 2024', 'Security Hardening Update', 'Comprehensive security update implementing industry best practices and addressing potential vulnerabilities to keep your data safe.');

INSERT INTO changelog_improvements (entry_id, improvement, display_order) VALUES 
((SELECT id FROM changelog_entries WHERE version = '1.0.4'), 'Implemented two-factor authentication (2FA)', 1),
((SELECT id FROM changelog_entries WHERE version = '1.0.4'), 'Added IP whitelisting for enterprise accounts', 2),
((SELECT id FROM changelog_entries WHERE version = '1.0.4'), 'Enhanced encryption for data at rest', 3),
((SELECT id FROM changelog_entries WHERE version = '1.0.4'), 'Introduced security audit logging', 4);

INSERT INTO changelog_fixes (entry_id, fix, display_order) VALUES 
((SELECT id FROM changelog_entries WHERE version = '1.0.4'), 'Patched XSS vulnerability in workflow names', 1),
((SELECT id FROM changelog_entries WHERE version = '1.0.4'), 'Fixed session management security issues', 2),
((SELECT id FROM changelog_entries WHERE version = '1.0.4'), 'Resolved CSRF token validation errors', 3);

-- Insert version 1.0.3
INSERT INTO changelog_entries (version, date, title, summary) VALUES 
('1.0.3', 'Nov 15, 2024', 'Performance Optimization Round 1', 'First round of performance optimizations based on real-world usage data, focusing on the most common user workflows.');

INSERT INTO changelog_improvements (entry_id, improvement, display_order) VALUES 
((SELECT id FROM changelog_entries WHERE version = '1.0.3'), 'Reduced workflow execution time by 30%', 1),
((SELECT id FROM changelog_entries WHERE version = '1.0.3'), 'Optimized database connection pooling', 2),
((SELECT id FROM changelog_entries WHERE version = '1.0.3'), 'Implemented request batching for API calls', 3),
((SELECT id FROM changelog_entries WHERE version = '1.0.3'), 'Added response compression', 4);

INSERT INTO changelog_fixes (entry_id, fix, display_order) VALUES 
((SELECT id FROM changelog_entries WHERE version = '1.0.3'), 'Fixed slow dashboard loading for large teams', 1),
((SELECT id FROM changelog_entries WHERE version = '1.0.3'), 'Resolved timeout issues with complex workflows', 2);

-- Insert version 1.0.2
INSERT INTO changelog_entries (version, date, title, summary) VALUES 
('1.0.2', 'Nov 10, 2024', 'Bug Squash Sprint', 'Dedicated bug fix release addressing issues reported during our first week of operations. Thank you to our early adopters for the valuable feedback!');

INSERT INTO changelog_improvements (entry_id, improvement, display_order) VALUES 
((SELECT id FROM changelog_entries WHERE version = '1.0.2'), 'Improved error messages clarity', 1),
((SELECT id FROM changelog_entries WHERE version = '1.0.2'), 'Added input validation for all forms', 2),
((SELECT id FROM changelog_entries WHERE version = '1.0.2'), 'Enhanced logging for better troubleshooting', 3);

INSERT INTO changelog_fixes (entry_id, fix, display_order) VALUES 
((SELECT id FROM changelog_entries WHERE version = '1.0.2'), 'Fixed workflow duplication bug', 1),
((SELECT id FROM changelog_entries WHERE version = '1.0.2'), 'Resolved user invitation email delivery issues', 2),
((SELECT id FROM changelog_entries WHERE version = '1.0.2'), 'Fixed chart rendering on Firefox', 3),
((SELECT id FROM changelog_entries WHERE version = '1.0.2'), 'Corrected workflow status display inconsistencies', 4);

-- Insert version 1.0.1
INSERT INTO changelog_entries (version, date, title, summary) VALUES 
('1.0.1', 'Nov 5, 2024', 'Day One Patch', 'Quick patch addressing critical issues discovered during our launch. We''re committed to continuous improvement and rapid response to user needs.');

INSERT INTO changelog_improvements (entry_id, improvement, display_order) VALUES 
((SELECT id FROM changelog_entries WHERE version = '1.0.1'), 'Added system status page', 1),
((SELECT id FROM changelog_entries WHERE version = '1.0.1'), 'Improved onboarding flow based on user feedback', 2);

INSERT INTO changelog_fixes (entry_id, fix, display_order) VALUES 
((SELECT id FROM changelog_entries WHERE version = '1.0.1'), 'Fixed registration confirmation emails not sending', 1),
((SELECT id FROM changelog_entries WHERE version = '1.0.1'), 'Resolved login issues for users with special characters in passwords', 2),
((SELECT id FROM changelog_entries WHERE version = '1.0.1'), 'Fixed mobile menu not closing after selection', 3);