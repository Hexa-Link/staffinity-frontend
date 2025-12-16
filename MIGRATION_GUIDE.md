# Staffinity ERP Frontend - React + Vite Migration

## 📋 Overview

This branch (`migration/astro-to-react-base`) contains the foundation setup for migrating the Staffinity ERP frontend from **Astro** to **React + Vite**.

## 🚀 What's Included

### Configuration Files
- **vite.config.ts**: Vite configuration with React plugin, API proxy, and optimized build settings
- **tsconfig.json**: TypeScript configuration for React/Vite (ES2020, JSX support, strict mode)
- **vitest.config.ts**: Unit testing setup with Vitest
- **.eslintrc.json**: Code quality rules for React, TypeScript, and Hooks
- **.prettierrc**: Code formatting standards
- **tailwind.config.js**: Tailwind CSS v4 configuration
- **postcss.config.mjs**: PostCSS with Tailwind CSS plugin

### Entry Points
- **index.html**: Vite HTML entry point with root div and script reference
- **src/main.tsx**: React root with HelmetProvider (react-helmet-async) for SEO
- **src/App.tsx**: Router setup with React Router v6 and initial routes

### Dependencies Added
- `react` + `react-dom` v19
- `react-router-dom` v6
- `react-helmet-async` for SEO/head management
- `vite` v5 as build tool
- `vitest` for unit testing
- `eslint` + `prettier` for code quality
- TypeScript v5 support

### Dependencies Removed
- `astro` and astro-related packages
- `@astrojs/react` (no longer needed)

## 📝 Migration Strategy

This is the **foundation branch** where all configuration is set up. The actual page/component migration happens in subsequent feature branches:

1. **feature/astro-to-react/auth-001**: Login & authentication pages
2. **feature/astro-to-react/dashboard-001**: Dashboard and core pages
3. **feature/astro-to-react/employees-001**: Employee management pages
4. **feature/astro-to-react/inventory-001**: Inventory pages
5. **feature/astro-to-react/vacancies-001**: Vacancies/recruitment pages
6. **feature/astro-to-react/admin-001**: Admin dashboard and management pages
7. **feature/astro-to-react/notifications-001**: Notification system pages
8. **feature/astro-to-react/misc-001**: Miscellaneous pages (vacations, reports, etc.)
9. **feature/astro-to-react/public-views-001**: Public-facing pages
10. **chore/remove-astro-config**: Final cleanup (remove astro.config.mjs)

## 🛠️ Setup Instructions

### Install Dependencies
```bash
npm ci
# or
npm install
```

### Development Server
```bash
npm run dev
```
Runs on `http://localhost:5173`

### Build
```bash
npm run build
```
Output: `dist/` directory

### Linting
```bash
npm run lint        # Check for errors
npm run lint:fix    # Auto-fix issues
```

### Formatting
```bash
npm run format
```

### Testing
```bash
npm run test        # Run tests with Vitest
npm run test:ui     # Open Vitest UI
```

## 📂 Project Structure

```
src/
├── main.tsx          # React entry point
├── App.tsx           # Root router & component
├── pages/            # Page components (to be migrated from .astro)
├── components/       # Reusable React components
├── layouts/          # Layout wrappers for pages
├── services/         # API service calls
├── lib/              # Utilities, auth, permissions
├── styles/           # Global CSS & tokens
└── types/            # TypeScript type definitions
```

## 🔄 Next Steps

1. ✅ This branch sets up the configuration
2. ⏭️ Merge this to `develop` after validation
3. ⏭️ Create feature branches from develop for incremental migration
4. ⏭️ Each feature branch converts `.astro` pages to React (`.tsx`)
5. ⏭️ Each PR includes ESLint validation, tests, and build verification

## 🧪 CI/CD Requirements

Each PR must:
- ✅ Pass `npm run lint` (ESLint)
- ✅ Pass `npm run build` (Vite build)
- ✅ Pass `npm run test` (Vitest)
- ✅ Include QA checklist with manual testing validation

## 📚 Resources

- [React Documentation](https://react.dev)
- [React Router v6](https://reactrouter.com)
- [Vite Documentation](https://vitejs.dev)
- [Vitest Documentation](https://vitest.dev)
- [React Helmet Async](https://github.com/steverob/react-helmet-async)

## ⚠️ Important Notes

- **API Integration**: Backend URL is configured via `VITE_API_URL` env variable (default: `http://localhost:3000/api`)
- **Path Alias**: Use `@/` to import from `src/` (e.g., `import { api } from '@/services/api'`)
- **Environment Variables**: All client-side env vars must start with `VITE_` to be accessible
- **Authentication**: Review `src/lib/auth.ts` for existing auth logic during migration
