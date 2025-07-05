export interface ChangelogEntryType {
  version: string;
  date: string;
  title: string;
  summary: string;
  improvements: string[];
  fixes: string[];
}

export const changelogData: ChangelogEntryType[] = [
  {
    version: "1.2.0",
    date: "Jan 5, 2025",
    title: "Powerful Workflow Automation & Enhanced AI",
    summary: "This release introduces powerful new workflow automation features, enhanced AI capabilities, and improved integration support. We've also made significant performance improvements to ensure faster response times across all workflows.",
    improvements: [
      "Added support for custom workflow templates with drag-and-drop builder",
      "Introduced AI-powered workflow suggestions based on usage patterns",
      "Enhanced Slack integration with threaded conversation support",
      "Added bulk actions for managing multiple workflows simultaneously",
      "Improved dashboard analytics with real-time metrics",
      "Added support for conditional logic in workflow steps",
      "Introduced workflow versioning and rollback capabilities",
      "Enhanced mobile app with offline workflow execution"
    ],
    fixes: [
      "Fixed issue where workflows would occasionally timeout on large datasets",
      "Resolved authentication errors with Microsoft Teams integration",
      "Fixed UI glitch in dark mode for workflow builder",
      "Corrected timezone handling for scheduled workflows",
      "Fixed memory leak in long-running automation processes",
      "Resolved issue with file attachments in email workflows"
    ]
  },
  {
    version: "1.1.0",
    date: "Dec 15, 2024",
    title: "Enterprise Features & Security Enhancements",
    summary: "Major update focusing on enterprise features, security enhancements, and improved user experience. This release also includes our new AI model with better context understanding and response accuracy.",
    improvements: [
      "Implemented SSO support for enterprise customers",
      "Added role-based access control (RBAC) for team management",
      "Introduced audit logs for compliance tracking",
      "Enhanced natural language processing for better intent recognition",
      "Added support for ServiceNow and Jira integrations",
      "Improved workflow execution speed by 40%",
      "Added multi-language support (Spanish, French, German)",
      "Introduced workflow templates marketplace"
    ],
    fixes: [
      "Fixed critical security vulnerability in API authentication",
      "Resolved issues with workflow scheduling in different timezones",
      "Fixed data export functionality for large datasets",
      "Corrected webhook payload validation errors",
      "Fixed UI responsiveness issues on tablet devices",
      "Resolved intermittent connection drops in real-time notifications"
    ]
  },
  {
    version: "1.0.0",
    date: "Nov 1, 2024",
    title: "HeyAgent Launch - Welcome to the Future of Work",
    summary: "Initial release of HeyAgent! This marks the beginning of our journey to revolutionize workplace automation. Our AI-powered chatbot is now ready to help businesses automate their workflows and boost productivity.",
    improvements: [
      "Core chatbot functionality with natural language understanding",
      "Pre-built workflows for common business processes",
      "Integration with Slack and Microsoft Teams",
      "Basic analytics dashboard",
      "User onboarding wizard",
      "Email notification system",
      "API access for developers",
      "Mobile-responsive web interface"
    ],
    fixes: [
      "N/A - Initial release"
    ]
  }
];