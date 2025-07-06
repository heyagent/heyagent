import { vi } from 'vitest';

interface ChangelogEntryType {
  version: string;
  date: string;
  title: string;
  summary: string;
  improvements: string[];
  fixes: string[];
}

// Mock changelog entries for testing
export const mockChangelogEntries: ChangelogEntryType[] = [
  {
    version: '1.2.0',
    date: '2025-01-05',
    title: 'Powerful Workflow Automation & Enhanced AI',
    summary: 'This release introduces powerful new workflow automation features.',
    improvements: [
      'Added support for custom workflow templates',
      'Introduced AI-powered workflow suggestions',
      'Enhanced Slack integration'
    ],
    fixes: [
      'Fixed issue where workflows would timeout',
      'Resolved authentication errors'
    ]
  },
  {
    version: '1.1.0',
    date: '2024-12-15',
    title: 'Enterprise Features & Security Enhancements',
    summary: 'Major update focusing on enterprise features.',
    improvements: [
      'Implemented SSO support',
      'Added role-based access control'
    ],
    fixes: [
      'Fixed critical security vulnerability'
    ]
  }
];

// Mock D1 database result
export const mockD1Result = <T>(results: T[], success = true) => ({
  results,
  success,
  meta: {
    changed_db: false,
    changes: 0,
    duration: 1,
    last_row_id: 0,
    rows_read: results.length,
    rows_written: 0,
    size_after: 0,
  }
});

// Mock D1 database
export const createMockD1Database = () => {
  const mockStmt = {
    bind: vi.fn().mockReturnThis(),
    all: vi.fn(),
    first: vi.fn(),
    run: vi.fn(),
  };

  return {
    prepare: vi.fn().mockReturnValue(mockStmt),
    dump: vi.fn(),
    exec: vi.fn(),
    batch: vi.fn(),
  };
};

// Mock Cloudflare context
export const createMockCloudflareContext = (mockDb: any) => ({
  env: {
    DB_CHANGELOG: mockDb
  },
  cf: {},
  ctx: {
    waitUntil: vi.fn(),
    passThroughOnException: vi.fn(),
  }
});

// Mock router
export const createMockRouter = () => ({
  push: vi.fn(),
  replace: vi.fn(),
  prefetch: vi.fn(),
  back: vi.fn(),
  forward: vi.fn(),
  refresh: vi.fn(),
});

// Mock search params
export const createMockSearchParams = (params: Record<string, string> = {}) => ({
  get: (key: string) => params[key] || null,
  getAll: (key: string) => params[key] ? [params[key]] : [],
  has: (key: string) => key in params,
  toString: () => new URLSearchParams(params).toString(),
  entries: () => Object.entries(params),
  keys: () => Object.keys(params),
  values: () => Object.values(params),
  forEach: (callback: (value: string, key: string) => void) => {
    Object.entries(params).forEach(([key, value]) => callback(value, key));
  },
  [Symbol.iterator]: function* () {
    for (const [key, value] of Object.entries(params)) {
      yield [key, value];
    }
  },
});