// Status page configuration
import { MonitorTarget } from '@/lib/status-utils';

export const statusConfig = {
  title: 'HeyAgent Status',
  monitors: [
    {
      id: 'api_gateway',
      name: 'API Gateway',
      target: 'https://api.heyagentai.workers.dev/health',
      tooltip: 'Core API service that handles all frontend requests',
      statusPageLink: 'https://api.heyagentai.workers.dev/',
    },
    {
      id: 'workflow_engine',
      name: 'Workflow Engine',
      target: 'https://workflows.heyagentai.workers.dev/health',
      tooltip: 'N8n automation engine for executing workflows',
      statusPageLink: 'https://workflows.heyagentai.workers.dev/',
    },
    {
      id: 'business_platform',
      name: 'Business Platform',
      target: 'https://erp.heyagentai.workers.dev/health',
      tooltip: 'Odoo ERP system for business operations',
      statusPageLink: 'https://erp.heyagentai.workers.dev/',
    },
    {
      id: 'database',
      name: 'Database',
      target: 'https://api.heyagentai.workers.dev/health/database',
      tooltip: 'Database connectivity and health status',
      statusPageLink: 'https://api.heyagentai.workers.dev/',
    },
  ] as MonitorTarget[],
  // Optional grouping - not used in current design
  groups: {
    '🔧 Core Infrastructure': ['api_gateway', 'database'],
    '⚙️ Business Services': ['workflow_engine', 'business_platform'],
  },
};