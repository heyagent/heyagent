// Status page configuration
import { MonitorTarget } from '@/lib/status-utils';

export const statusConfig = {
  title: 'HeyAgent Status',
  monitors: [
    {
      id: 'website',
      name: 'Website',
      target: 'https://heyagent-app.heyagentai.workers.dev/',
      tooltip: 'Main HeyAgent application',
      statusPageLink: 'https://heyagent-app.heyagentai.workers.dev/',
    },
    {
      id: 'help_support',
      name: 'Help and Support',
      target: 'https://help.heyagentai.workers.dev/',
      tooltip: 'Help and documentation site',
      statusPageLink: 'https://help.heyagentai.workers.dev/',
    },
    {
      id: 'runner',
      name: 'Runner',
      target: 'https://runner.heyagentai.workers.dev/',
      tooltip: 'Workflow runner service',
      statusPageLink: 'https://runner.heyagentai.workers.dev/',
    },
    {
      id: 'backend',
      name: 'Backend',
      target: 'https://backend.heyagentai.workers.dev/',
      tooltip: 'Main backend API service',
      statusPageLink: 'https://backend.heyagentai.workers.dev/',
    },
  ] as MonitorTarget[],
  // Optional grouping - not used in current design
  groups: {
    '🌐 Frontend Services': ['website', 'help_support'],
    '⚙️ Backend Services': ['runner', 'backend'],
  },
};