# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**BlueGuard** (bluetoothdefense.com) - A professional Bluetooth security platform website built with a modern full-stack architecture. This is a Manus-powered web application featuring investor presentation pages and enterprise-grade security infrastructure.

## Tech Stack

- **Frontend**: React 19.1 with TypeScript, Tailwind CSS 4
- **Backend**: Express 4 with tRPC 11 for type-safe API communication
- **Database**: MySQL/TiDB with Drizzle ORM
- **Authentication**: Manus OAuth with JWT-based session management
- **Build Tools**: Vite 7, pnpm package manager
- **Deployment**: Cloudflare Pages with GitHub Actions CI/CD

## Development Commands

### Essential Commands
```bash
# Development server (watches for changes)
pnpm dev

# Production build
pnpm build

# Production server (requires build first)
pnpm start

# Type checking (no emit)
pnpm check

# Code formatting
pnpm format

# Run tests
pnpm test

# Database migrations
pnpm db:push
```

### Running Single Tests
```bash
# Use Vitest's filter pattern
pnpm test <test-name-pattern>
```

## Architecture

### Directory Structure

```
├── client/               # Frontend React application
│   ├── src/
│   │   ├── pages/       # Page components (Home, ComponentShowcase, NotFound)
│   │   ├── components/  # Reusable UI components (includes ui/ directory with shadcn components)
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Client utilities and tRPC client setup
│   │   ├── contexts/    # React context providers
│   │   └── _core/       # Core client-side framework code
│   ├── public/          # Static assets
│   └── index.html       # Entry HTML
├── server/              # Backend Express application
│   ├── _core/           # Core server framework (tRPC, auth, SDK integrations)
│   │   ├── index.ts     # Server entry point with Express setup
│   │   ├── trpc.ts      # tRPC setup with publicProcedure, protectedProcedure, adminProcedure
│   │   ├── context.ts   # Request context creation
│   │   ├── cookies.ts   # Session cookie management
│   │   ├── oauth.ts     # Manus OAuth integration
│   │   ├── sdk.ts       # Manus SDK integrations
│   │   └── vite.ts      # Vite dev server integration
│   ├── db.ts            # Database operations (upsertUser, getUserByOpenId)
│   ├── routers.ts       # Main tRPC router (appRouter)
│   └── storage.ts       # Manus storage proxy for file uploads
├── shared/              # Shared code between client and server
│   ├── const.ts         # Shared constants (COOKIE_NAME, error messages)
│   └── types.ts         # Shared TypeScript types
├── drizzle/             # Database schema and migrations
│   └── schema.ts        # User table schema
└── dist/                # Build output (gitignored)
```

### Key Architectural Patterns

**Full-Stack Type Safety**: The application uses tRPC to maintain end-to-end type safety from database to UI. The `AppRouter` type is exported from `server/routers.ts` and imported in the client via `@/lib/trpc`.

**Three-Tier Procedure Model**:
- `publicProcedure`: No authentication required
- `protectedProcedure`: Requires authenticated user (enforced via middleware)
- `adminProcedure`: Requires admin role (defined in `server/_core/trpc.ts`)

**Lazy Database Connection**: The `getDb()` function in `server/db.ts` creates the Drizzle instance only when needed, allowing local tooling to run without a database connection.

**Manus Integration**: The server integrates with Manus services including:
- OAuth authentication flow (`server/_core/oauth.ts`)
- Storage proxy for file uploads (`server/storage.ts`)
- LLM capabilities (`server/_core/llm.ts`)
- Image generation (`server/_core/imageGeneration.ts`)
- Voice transcription (`server/_core/voiceTranscription.ts`)

**Development vs Production**: In development mode, Vite middleware is used for hot module replacement. In production, Express serves static files from the `dist/` directory.

### Path Aliases

TypeScript and Vite are configured with these path aliases:
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets/*` → `attached_assets/*`

## Database Operations

### Running Migrations
```bash
# Generate migration files and apply them
pnpm db:push
```

### Schema Extension
When adding new database tables:
1. Define schema in `drizzle/schema.ts` following the pattern of the `users` table
2. Add corresponding database operations in `server/db.ts`
3. Run `pnpm db:push` to apply changes
4. Add tRPC routers in `server/routers.ts` for API access

## Adding New Features

### tRPC Router Pattern
```typescript
// In server/routers.ts, add a new router to appRouter:
myFeature: router({
  list: protectedProcedure.query(({ ctx }) => {
    // Implementation using ctx.user
  }),
  create: protectedProcedure.input(mySchema).mutation(({ input, ctx }) => {
    // Implementation
  }),
}),
```

### Client-Side API Calls
```typescript
// In React components, use tRPC hooks:
const { data } = trpc.myFeature.list.useQuery();
const mutation = trpc.myFeature.create.useMutation();
```

## Deployment

### Automatic Deployment
Every push to `main` branch triggers automatic deployment via GitHub Actions (`.github/workflows/deploy.yml`):
1. Builds the project with `pnpm build`
2. Deploys to Cloudflare Pages project named `bluetoothdefense`

### Required GitHub Secrets
- `CLOUDFLARE_API_TOKEN`: API token with Cloudflare Pages Edit permission
- `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID

### Manual Deployment
```bash
pnpm build
npx wrangler pages deploy dist --project-name=bluetoothdefense
```

## Environment Variables

The application uses these environment variables (defined in `.env` file, not committed to git):

**Required for development:**
- `DATABASE_URL`: MySQL/TiDB connection string (optional for local tooling)
- `PORT`: Server port (defaults to 3000)
- `NODE_ENV`: Set to "development" or "production"

**Manus Integration (provided by Manus platform):**
- `BUILT_IN_FORGE_API_URL`: Manus storage proxy URL
- `BUILT_IN_FORGE_API_KEY`: Manus storage proxy API key

## Important Implementation Details

**Session Management**: Uses HTTP-only cookies with the name defined in `@shared/const.ts` (`COOKIE_NAME`). Sessions are validated on the server using JWT tokens from Manus OAuth.

**Error Handling**: Client-side automatically redirects to login when receiving `UNAUTHED_ERR_MSG` from API calls (see `client/src/main.tsx`).

**Admin User**: The first user with `openId` matching `ENV.ownerOpenId` automatically receives admin role.

**Port Fallback**: Server automatically finds an available port starting from the configured `PORT` if the preferred port is busy.

## Code Style

- Use `pnpm format` before committing (Prettier configured)
- TypeScript strict mode is enabled
- Follow existing patterns in `server/routers.ts` for new API endpoints
- Keep shared constants in `shared/const.ts` for client/server reuse
