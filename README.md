# Audiophile — Starter Full‑Stack React + Express Template

A production-ready starter for a React SPA with an integrated Express server. This repository is designed for local development with Vite and single-port dev (frontend + backend) plus TypeScript and modern tooling.

---

## Quick summary

- Tech: React 18, TypeScript, Vite, Express (integrated), Tailwind CSS, Radix UI
- Package manager: npm (recommended)
- Test runner: Vitest
- Primary commands: `npm run dev`, `npm run build`, `npm start`, `npm test`, `npm run typecheck`
- Dev server default port: 8080 (frontend + backend together)
 - Vercel-ready: includes `vercel.json` and an `api/[...path].ts` serverless wrapper for Express

This README documents how to set up, run, extend, and contribute to the project.

---

## Table of contents

- Project overview
- Tech stack
- Repository layout
- Setup & run (development)
- Build & run (production)
- API routes & shared types
- Adding pages, routes and UI components
- Testing & type checking
- Troubleshooting
- Contributing
- License

---

## Project overview

This repository is a full-stack starter that keeps the frontend single-page app (React + Vite + TypeScript) and a small Express server in the same project for convenience during development and for simple API endpoints. It's structured to promote type-safety and shared interfaces between client and server using the `shared/` folder.

Use this starter to build e-commerce-like sites, dashboards, or any SPA that needs a simple API layer.

---

## Tech stack

- Node & npm
- Frontend: React 18, TypeScript, Vite, React Router v6
- Styling: TailwindCSS 3
- UI primitives: Radix UI + Lucide icons
- Backend: Express integrated into Vite dev server (single port dev experience)
- Testing: Vitest
- Type validation: TypeScript (run `npm run typecheck`)

---

## Repository layout (important files and folders)

Top-level layout (abridged):

- `client/` (in this starter the client code is in `src/`) — React SPA frontend
  - `src/pages/` — route components (e.g. `Index.tsx`, `ProductDetail.tsx`)
  - `src/components/` — UI components and app pieces
  - `src/global.css` — Tailwind + custom styles
  - `src/main.tsx` — SPA entry
- `server/` — Express API backend
  - `server/index.ts` — server setup and route registration
  - `server/routes/` — server route handlers (e.g. `demo.ts`)
- `shared/` — TypeScript types shared by client & server (e.g. `shared/api.ts`)
- `package.json` — scripts & dependencies

In your working copy the client code lives under `src/` and images & assets are under `src/assets/`.

---

## Setup — prerequisites

- Node (v16+ recommended) installed on your machine
Ensure Node (v16+) and npm are installed. npm is bundled with Node, so installing Node will also provide npm.

---

## Run locally (development)

These commands are intended to be run in PowerShell on Windows (they are simple npm scripts and will work in most shells).

Install dependencies (first time):

```powershell
npm install
```

Start the development server (single port for client + server):

```powershell
npm run dev
```

What to expect:
- Vite will start and also load the Express server integration.
- Hot Module Replacement (HMR) available for client & server code.

---

## Build & run (production)

Build the client for production:

```powershell
npm run build
```

Start the production server (after build):

```powershell
npm start
```

Notes:
- The production server will serve the built client and run the Express endpoints defined in `server/`.
- Check `server/index.ts` and `node-build.ts` for specifics about how the build and serve steps are implemented.
- Build output notes:
  - Client static files: `dist/spa` (contains `index.html` and `assets/`). This is the Output Directory to use for static hosts (Vercel/Render) or the `vercel.json` config.
  - Server bundle: `dist/server` (contains `node-build.mjs`) — used by `npm start` which runs `node dist/server/node-build.mjs`.

If you plan to deploy to Vercel, this repository already contains a `vercel.json` and a serverless wrapper at `api/[...path].ts` which mounts the Express app via `serverless-http`. See the "Deployment — Vercel" section below for details.

---

## Important scripts

Open `package.json` for exact scripts. Typical scripts include:

- `npm run dev` — start Vite dev server + Express integration
- `npm run build` — build client for production
- `npm start` — start production server
- `npm run typecheck` — run TypeScript checks
- `npm test` — run Vitest tests

---

## API routes & shared types

API endpoints are under `server/routes/` and are exposed with the `/api/*` prefix. Example endpoints included by the starter:

- `GET /api/ping` — simple ping endpoint
- `GET /api/demo` — demo endpoint (see `server/routes/demo.ts`)

Shared types for client-server type safety are in `shared/api.ts`. Import them with the path alias used in the project (check `tsconfig.json` for aliases):

```ts
import { DemoResponse } from '@shared/api';
```

When adding a new route, consider adding a matching interface to `shared/api.ts` so the client can statically type the response.

---

## Adding a new API route (recommended pattern)

1. (Optional) Add request/response types to `shared/api.ts`.
2. Create a new route handler in `server/routes/my-route.ts`:

```ts
import { RequestHandler } from 'express';
import { MyRouteResponse } from '@shared/api';

export const handleMyRoute: RequestHandler = (req, res) => {
  const response: MyRouteResponse = { message: 'Hello from my endpoint!' };
  res.json(response);
};
```

3. Register route in `server/index.ts` (or where routes are registered):

```ts
app.get('/api/my-endpoint', handleMyRoute);
```

4. Fetch in the client:

```ts
const res = await fetch('/api/my-endpoint');
const data = await res.json() as MyRouteResponse;
```

---

## Adding a new page route (React Router v6)

1. Create your page component in `src/pages/MyPage.tsx`.
2. Import it into the routes setup in `src/App.tsx` (or wherever `Routes` are configured) and add a `Route`:

```tsx
<Route path="/my-page" element={<MyPage />} />
```

Remember to keep route components as route-level boundaries and break smaller UI pieces into `src/components/`.

---

## Styling and UI

- Tailwind CSS is used for styling. Edit the tokens and theme in `src/global.css` and `tailwind.config.*`.
- A small UI primitives library is provided under `src/components/ui/` (button, input, dialog, toasts, etc.). Use the `cn()` utility to compose Tailwind classes safely.

---

## Tests and type checking

Type checking:

```powershell
npm run typecheck
```

Run unit tests (Vitest):

```powershell
npm test
```

Add tests alongside modules or in a central `tests/` folder depending on your preference. The starter already includes a simple `lib/utils.spec.ts` example test.

---

## Troubleshooting

Common problems:

- Missing path aliases/types: If imports like `@shared/api` fail, ensure `tsconfig.json` has the path aliases and your editor/IDE is using the project TypeScript version.
- HMR not updating server code: Server code changes may require a server restart depending on the integration. The dev server integration aims to reload server routes, but check console logs for instructions.

Helpful diagnostic commands:

```powershell
# Check Node version
node --version

# List installed packages and versions
npm ls --depth 0

# Run the dev server and watch logs
npm run dev
```

---

## Contributing

Guidelines for extending the project:

- Keep types in `shared/` for any data exchanged between client and server.
- Add route-level tests for server handlers.
- Add unit tests for new UI components and pages.
- When changing Tailwind tokens or design tokens, update `src/global.css` and `tailwind.config.*` and run a visual sanity check in the browser.

If you plan to submit PRs, include a short description of the change and any verification steps.

---

## Project maintenance / Quality gates

When making changes, run these checks locally:

1. Type checks: `npm run typecheck` — ensures no TypeScript errors.
2. Tests: `npm test` — run unit tests.
3. Linting (if configured): run your linter. If not configured, consider adding ESLint as a follow-up.

These steps help maintain stability and prevent regressions.

---

## Next steps & improvements (suggested)

- Add CI (GitHub Actions) for running typecheck & tests on PRs.
- Add ESLint & Prettier for consistent code style.
- Add more example API endpoints and integration tests.
- Add an end-to-end test harness (Cypress or Playwright) for key flows like checkout.

---

## A note about the included demo routes and assets

- Server demo routes are in `server/routes/demo.ts`.
- Mock data and product assets are in `./assets/` (including `assets/db.json` used by the starter for demo purposes).

---

## License & attribution

Include your preferred license here (e.g., MIT). If this starter is derived from an upstream template, keep any necessary attribution. Add or modify `LICENSE` in the repo root as needed.

---

## Contact / Maintainers

If you need help, open an issue in the repository or contact the maintainers listed in `package.json`/project settings.

---

Thank you for using this starter — happy building!
