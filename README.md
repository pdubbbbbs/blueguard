# BlueGuard

A professional Bluetooth security platform website built with modern full-stack architecture. BlueGuard provides enterprise-grade security infrastructure and investor presentation pages for Bluetooth defense solutions.

Visit: [bluetoothdefense.com](https://bluetoothdefense.com)

## Features

- **Modern Full-Stack Architecture**: Type-safe API communication with tRPC
- **Authentication & Authorization**: Manus OAuth with JWT-based session management
- **Responsive Design**: Built with React 19 and Tailwind CSS 4
- **Enterprise-Grade Infrastructure**: MySQL/TiDB database with Drizzle ORM
- **Automated Deployment**: CI/CD pipeline with GitHub Actions and Cloudflare Pages

## Tech Stack

### Frontend
- React 19.1 with TypeScript
- Tailwind CSS 4
- Vite 7 (build tooling)
- tRPC client for type-safe API calls

### Backend
- Express 4
- tRPC 11 (end-to-end type safety)
- MySQL/TiDB with Drizzle ORM
- Manus OAuth integration

### Development & Deployment
- pnpm (package manager)
- Vitest (testing)
- GitHub Actions (CI/CD)
- Cloudflare Pages (hosting)

## Getting Started

### Prerequisites

- Node.js 22+
- pnpm
- MySQL/TiDB database (for production features)

### Installation

```bash
# Clone the repository
git clone https://github.com/pdubbbbbs/blueguard.git
cd blueguard

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration
```

### Environment Variables

Create a `.env` file in the root directory:

```bash
# Database
DATABASE_URL=mysql://user:password@host:port/database

# Server
PORT=3000
NODE_ENV=development

# Manus Integration
VITE_APP_ID=your_app_id
JWT_SECRET=your_jwt_secret
OAUTH_SERVER_URL=your_oauth_url
OWNER_OPEN_ID=your_owner_openid
BUILT_IN_FORGE_API_URL=your_forge_url
BUILT_IN_FORGE_API_KEY=your_forge_key
```

### Development

```bash
# Start development server (with hot reload)
pnpm dev

# Run tests
pnpm test

# Type checking
pnpm check

# Format code
pnpm format
```

The development server will start at `http://localhost:3000` (or next available port).

### Building for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## Project Structure

```
├── client/               # Frontend React application
│   ├── src/
│   │   ├── pages/       # Page components
│   │   ├── components/  # Reusable UI components
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Client utilities
│   └── public/          # Static assets
├── server/              # Backend Express application
│   ├── _core/           # Core server framework
│   ├── db.ts            # Database operations
│   ├── routers.ts       # tRPC router definitions
│   └── storage.ts       # File storage integration
├── shared/              # Shared code between client and server
│   ├── const.ts         # Shared constants
│   └── types.ts         # Shared TypeScript types
├── drizzle/             # Database schema and migrations
│   └── schema.ts        # Database schema definitions
└── dist/                # Build output (gitignored)
```

## Database Migrations

```bash
# Apply database migrations
pnpm db:push
```

**Note**: Requires `DATABASE_URL` environment variable to be set.

## Deployment

### Branch Strategy

- **`master` branch**: Production deployments to [bluetoothdefense.com](https://bluetoothdefense.com)
- **`main` branch**: Preview deployments to [main.bluetoothdefense.pages.dev](https://main.bluetoothdefense.pages.dev)

### Automatic Deployment

Pushes to either branch trigger automatic deployment via GitHub Actions:

1. Builds the project with `pnpm build`
2. Deploys `dist/public/` to Cloudflare Pages

### Deploy to Production

```bash
git checkout master
git merge main
git push origin master
git checkout main
```

### Manual Deployment

```bash
pnpm build
npx wrangler pages deploy dist/public --project-name=bluetoothdefense
```

## API Architecture

The application uses tRPC for type-safe API communication with three procedure types:

- **`publicProcedure`**: No authentication required
- **`protectedProcedure`**: Requires authenticated user
- **`adminProcedure`**: Requires admin role

Example API usage:

```typescript
// Server-side (server/routers.ts)
export const appRouter = router({
  myFeature: router({
    list: protectedProcedure.query(({ ctx }) => {
      // Implementation using ctx.user
    }),
  }),
});

// Client-side (React component)
const { data } = trpc.myFeature.list.useQuery();
```

## Testing

```bash
# Run all tests
pnpm test

# Run specific test
pnpm test <test-name-pattern>
```

Tests are configured for server-side code only using Vitest.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License

Copyright (c) 2025 Philip S Wright

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Author

**Philip S Wright**

## Acknowledgments

- Built with [Manus](https://manus.app) platform integration
- Deployed on [Cloudflare Pages](https://pages.cloudflare.com)
- UI components from [shadcn/ui](https://ui.shadcn.com)
