# Repository Guidelines

## Project Structure & Module Organization
- Backend: `Backend/` — Node.js + Express API (`app.js`), routes in `routes/`, controllers in `controllers/`, DB config in `config/db.js`, OpenAPI in `swagger.yaml`.
- Frontend: `Front/` — React + Vite app (`src/` components/pages), Tailwind config, ESLint config.
- Docs: `Documentación/` — technical manuals and references.

## Build, Test, and Development Commands
- Backend install: `cd Backend && npm install`
- Backend run: `npm start` (serves on port `3000`; Swagger at `/api-docs`).
- Frontend install: `cd Front && npm install`
- Frontend dev: `npm run dev` (Vite dev server with HMR).
- Frontend build: `npm run build`; preview: `npm run preview`.
- Lint frontend: `npm run lint`.
Note: Backend `npm test` is not configured yet (placeholder).

## Coding Style & Naming Conventions
- Language: JavaScript/JSX. Prefer 2‑space indentation, single quotes, and semicolons consistently.
- Naming: `camelCase` for variables/functions, `PascalCase` for React components (e.g., `DashboardMenu`), route files as `dataRoutes.js`, controllers as `dataController.js`.
- Linting: Frontend uses ESLint (`Front/.eslintrc.cjs`). Run `npm run lint` before PRs.

## Testing Guidelines
- Current state: No test harness configured.
- Recommendation: Use Jest + Supertest for backend (e.g., `Backend/__tests__/routes.spec.js`) and React Testing Library for frontend (e.g., `Front/src/__tests__/App.test.jsx`).
- Naming: `*.spec.js(x)` colocated under `__tests__/` or next to source.

## Commit & Pull Request Guidelines
- Commits: Prefer Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`). Keep messages imperative and scoped (e.g., `fix(api): handle null FechaCV`).
- PRs: Include clear description, linked issues, steps to test, and screenshots/GIFs for UI changes. Keep PRs focused and small.

## Security & Configuration Tips
- Do not hardcode secrets. Move DB credentials from `Backend/config/db.js` to environment variables (e.g., `.env`): `DB_HOST`, `DB_USER`, `DB_PASS`, `DB_NAME`, `DB_PORT`.
- Load via `process.env` and ensure `.env` is git‑ignored. Rotate any previously committed secrets.
- CORS: `app.js` allows `*`; restrict origins per environment for production.

