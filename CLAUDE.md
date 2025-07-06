## Project Context

We're building a Next.js app for deployment on Cloudflare Workers with D1 and R2. Using Next-js-Boilerplate in .reference/ as a reference for the SaaS starter features.

## HeyAgent Business Model

HeyAgent provides AI automation services to businesses via a chatbot that employees can use to complete tasks. Key aspects:

- **Core Product**: AI chatbot for employee task automation
- **How it works**: Employees interact with HeyAgent through chat interfaces (Slack, Teams, etc.) to execute workflows
- **Workflows**: Pre-built workflows for common business processes (lower tiers) and custom workflows (higher tiers)
- **Target Market**: Businesses looking to automate internal operations and boost employee productivity
- **Value Proposition**: Reduce ticket resolution time, save employee hours, streamline operations

### Key Features:
- Conversational AI interface for task execution
- Pre-built workflow library for common business tasks
- Custom workflow builder (no-code)
- Enterprise integrations (ServiceNow, Jira, Salesforce, etc.)
- Real-time analytics and ROI tracking
- Role-based access controls and enterprise security

## Development Patterns

### D1-backed Features Pattern

We've established a consistent pattern for features that use Cloudflare D1 (changelog, blog, case studies, integrations, workflows). Here's the reusable structure:

#### API Route Pattern (`/app/api/[feature]/route.ts`)
```typescript
// Standard imports
import { NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';

// Pattern for pagination and search
export async function GET(request: Request) {
  const { env } = getCloudflareContext();
  const db = env.DB_[FEATURE];
  
  // Parse query parameters
  const { searchParams } = new URL(request.url);
  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
  const limit = Math.min(50, Math.max(1, parseInt(searchParams.get('limit') || '10', 10)));
  const search = searchParams.get('search') || '';
  const offset = (page - 1) * limit;

  // Build queries based on search
  // Execute with proper error handling
  // Return paginated response
  return NextResponse.json({
    data: results,
    pagination: {
      currentPage: page,
      totalPages,
      totalItems,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
      limit
    }
  });
}
```

#### Frontend Page Pattern (`/app/(content)/[feature]/page.tsx`)
```typescript
// Wrap with Suspense for useSearchParams
export default function FeaturePage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <FeatureContent />
    </Suspense>
  );
}

function FeatureContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // URL parameter handling
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const currentSearch = searchParams.get('search') || '';
  
  // Fetch data based on URL params
  // Handle loading, error, and empty states
  // Render content with search and pagination
}
```

#### Database Schema Pattern
```sql
-- Main content table
CREATE TABLE IF NOT EXISTS [feature]_entries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL UNIQUE,  -- URL-friendly identifier
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  date TEXT NOT NULL,         -- ISO format YYYY-MM-DD for sorting
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Related data tables (if needed)
CREATE TABLE IF NOT EXISTS [feature]_categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  entry_id INTEGER NOT NULL,
  category TEXT NOT NULL,
  FOREIGN KEY (entry_id) REFERENCES [feature]_entries(id) ON DELETE CASCADE
);

-- Indexes for performance
CREATE INDEX idx_[feature]_date ON [feature]_entries(date DESC);
CREATE INDEX idx_[feature]_title ON [feature]_entries(title);
```

### Common Utilities to Extract (When Needed)

Don't create these upfront, but extract when you see duplication:

1. **Date Formatting** (`lib/date-utils.ts`)
   - ISO to display format conversion
   - Consistent date display across features

2. **Pagination Hook** (`hooks/usePagination.ts`)
   - URL parameter management
   - Page navigation helpers

3. **Loading/Error Components** (`components/shared/`)
   - Consistent loading spinners
   - Error message display

4. **API Types** (`types/api.ts`)
   - PaginationData interface
   - Generic PaginatedResponse<T>

## Testing Strategy

### Test Setup
- **Framework**: Vitest with React Testing Library
- **Config**: `vitest.config.mts` with jsdom environment
- **Setup**: `test/setup.ts` imports `@testing-library/jest-dom`

### Test Structure

#### API Route Tests
```typescript
// Mock Cloudflare context
vi.mock('@opennextjs/cloudflare', () => ({
  getCloudflareContext: () => ({
    env: { DB_FEATURE: mockDb },
    cf: {},
    ctx: { waitUntil: vi.fn() }
  })
}));

// Test cases:
// - Successful data fetching
// - Pagination (page 1, page 2, beyond last page)
// - Search functionality
// - Error handling (DB errors, invalid params)
// - Empty results
```

#### Component Tests
```typescript
// Mock Next.js navigation
vi.mock('next/navigation', () => ({
  useRouter: () => mockRouter,
  useSearchParams: () => mockSearchParams
}));

// Test cases:
// - Renders loading state
// - Renders error state
// - Renders empty state
// - User interactions (search, pagination)
// - URL updates on actions
```

### Mocking Patterns

#### D1 Database Mock
```typescript
const mockDb = {
  prepare: vi.fn().mockReturnValue({
    bind: vi.fn().mockReturnThis(),
    all: vi.fn().mockResolvedValue({ results: [], success: true }),
    first: vi.fn().mockResolvedValue({ total: 0 })
  })
};
```

#### Router/SearchParams Mock
```typescript
const mockRouter = {
  push: vi.fn(),
  refresh: vi.fn()
};

const mockSearchParams = new URLSearchParams();
```

### What to Test
- **Business logic**: Data transformation, pagination calculations
- **User interactions**: Click handlers, form submissions
- **Error scenarios**: Network failures, invalid data
- **Accessibility**: ARIA attributes, keyboard navigation

### What NOT to Test
- Third-party library internals
- Simple prop passing
- CSS classes (unless they affect behavior)
- Implementation details (focus on user-facing behavior)