import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "HeyAgent Status",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://heyagent.ai', label: 'Main Site' },
    { link: 'https://github.com/heyagent', label: 'GitHub' },
    { link: 'https://help.heyagentai.workers.dev/', label: 'Help Center', highlight: true },
  ],
  // [OPTIONAL] Group your monitors
  // If not specified, all monitors will be shown in a single list
  // If specified, monitors will be grouped and ordered, not-listed monitors will be invisble (but still monitored)
  group: {
    '🔧 Core Infrastructure': ['api_gateway', 'database'],
    '⚙️ Business Services': ['workflow_engine', 'business_platform'],
  },
}

const workerConfig: WorkerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    {
      id: 'api_gateway',
      name: 'API Gateway',
      method: 'GET',
      target: 'https://api.heyagentai.workers.dev/health',
      tooltip: 'Core API service that handles all frontend requests',
      statusPageLink: 'https://api.heyagentai.workers.dev/',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'UptimeFlare/1.0',
      },
    },
    {
      id: 'workflow_engine',
      name: 'Workflow Engine',
      method: 'GET',
      target: 'https://workflows.heyagentai.workers.dev/health',
      tooltip: 'N8n automation engine for executing workflows',
      statusPageLink: 'https://workflows.heyagentai.workers.dev/',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'UptimeFlare/1.0',
      },
    },
    {
      id: 'business_platform',
      name: 'Business Platform',
      method: 'GET',
      target: 'https://erp.heyagentai.workers.dev/health',
      tooltip: 'Odoo ERP system for business operations',
      statusPageLink: 'https://erp.heyagentai.workers.dev/',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'UptimeFlare/1.0',
      },
    },
    {
      id: 'database',
      name: 'Database',
      method: 'GET',
      target: 'https://api.heyagentai.workers.dev/health/database',
      tooltip: 'Database connectivity and health status',
      statusPageLink: 'https://api.heyagentai.workers.dev/',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'UptimeFlare/1.0',
      },
    },
  ],
  notification: {
    // Notification configuration - disabled for now
    // Uncomment and configure if you want to enable notifications
    // appriseApiServer: 'https://apprise.example.com/notify',
    // recipientUrl: 'tgram://bottoken/ChatID',
    // timeZone: 'America/New_York',
    // gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here
      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature
// const maintenances: MaintenanceConfig[] = []
const maintenances: MaintenanceConfig[] = [
  // No scheduled maintenances at this time
  // Example:
  // {
  //   monitors: ['website', 'backend'],
  //   title: 'Scheduled Maintenance',
  //   body: 'We will be performing system upgrades',
  //   start: '2025-07-10T00:00:00-05:00',
  //   end: '2025-07-10T04:00:00-05:00',
  //   color: 'blue',
  // },
]

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig, maintenances }
