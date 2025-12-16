# Migration Setup - Next Steps

## ✅ Completed

The `migration/astro-to-react-base` branch has been created with the following:

### Configuration Files Created
- **vite.config.ts** - Vite configuration with React plugin, port 5173, API proxy
- **vitest.config.ts** - Unit testing setup
- **.eslintrc.json** - ESLint rules for React, Hooks, TypeScript
- **.prettierrc** - Code formatting standards
- **tsconfig.json** - TypeScript configuration for React/Vite (ES2020, JSX)
- **tailwind.config.js** - Tailwind CSS v4 configuration
- **index.html** - Vite entry point
- **src/main.tsx** - React root with HelmetProvider
- **src/App.tsx** - React Router setup with all routes
- **MIGRATION_GUIDE.md** - Detailed migration documentation

### React Page Stubs Created
All `.astro` pages have been converted to React stubs (`.tsx`):
- `src/pages/index.tsx`
- `src/pages/dashboard.tsx`
- `src/pages/employees.tsx`
- `src/pages/inventory.tsx`
- `src/pages/vacancies.tsx`
- `src/pages/admin-dashboard.tsx`
- `src/pages/notifications.tsx`
- `src/pages/login.tsx`

## ⚠️ Issue: package.json

Due to file locking issues with Tailwind CSS v4 native bindings on Windows, the `package.json` file could not be created on disk. **You must manually create/update it**:

### To Fix
1. Create `package.json` in the root directory with the following content:

```json
{
  "name": "hexa-link-erp",
  "type": "module",
  "version": "0.0.1",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext .ts,.tsx",
    "lint:fix": "eslint src --ext .ts,.tsx --fix",
    "format": "prettier --write \"src/**/*.{ts,tsx,css,json}\"",
    "test": "vitest",
    "test:ui": "vitest --ui"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-helmet-async": "^2.0.5",
    "react-router-dom": "^6.26.0",
    "tailwindcss": "^4.1.18"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@tailwindcss/postcss": "^4.1.18",
    "@types/node": "^22.5.5",
    "@types/react": "^18.3.11",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "@vitest/ui": "^2.0.5",
    "eslint": "^9.9.1",
    "eslint-plugin-react": "^7.35.0",
    "eslint-plugin-react-hooks": "^4.6.2",
    "prettier": "^3.1.1",
    "typescript": "^5.5.4",
    "typescript-eslint": "^8.4.0",
    "vite": "^5.4.3",
    "vitest": "^2.0.5"
  }
}
```

2. Run:
```bash
npm install
npm run build   # Validate Vite build works
npm run lint    # Validate ESLint
```

3. Commit:
```bash
git add package.json
git commit -m "chore: Add package.json with React + Vite dependencies"
```

## 🚀 Next Steps

1. ✅ Create and push `migration/astro-to-react-base` branch
2. ⏭️ **Manually add package.json** (see above)
3. ⏭️ Merge branch to develop after validation
4. ⏭️ Create 10 feature branches for incremental migration:
   - feature/astro-to-react/auth-001
   - feature/astro-to-react/dashboard-001
   - feature/astro-to-react/employees-001
   - feature/astro-to-react/inventory-001
   - feature/astro-to-react/vacancies-001
   - feature/astro-to-react/admin-001
   - feature/astro-to-react/notifications-001
   - feature/astro-to-react/misc-001
   - feature/astro-to-react/public-views-001
   - chore/remove-astro-config

## 📊 Branch Status

- **Current branch**: `migration/astro-to-react-base`
- **Commits on branch**: 2 (cef8fb3, 6318527)
- **Files staged for commit**: All configuration files
- **Ready for**: Package.json addition + merge to develop

## 🧪 Testing After Setup

Once package.json is added and npm install completes:

```bash
# Development server
npm run dev          # Runs on http://localhost:5173

# Production build
npm run build        # Outputs to dist/

# Code quality
npm run lint         # Check for errors
npm run lint:fix     # Auto-fix issues
npm run format       # Format code

# Testing
npm run test         # Run unit tests
npm run test:ui      # Open Vitest UI
```

## 📚 Project Structure

```
src/
├── main.tsx              # React entry point
├── App.tsx              # Root router
├── pages/               # Page components (.tsx)
├── components/          # Reusable components
├── layouts/             # Layout wrappers
├── services/            # API services
├── lib/                 # Utilities & auth
├── styles/              # Global CSS
└── types/               # TypeScript types
```

## ⚡ Important Notes

- All `.astro` pages have been removed from the project
- React Router v6 is configured with all routes in `src/App.tsx`
- React Helmet Async is set up for SEO (head management)
- API base URL is configured via `VITE_API_URL` environment variable
- All environment variables must start with `VITE_` prefix to be accessible
- Tailwind CSS v4 with PostCSS is pre-configured

## 🔗 References

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [React Router v6](https://reactrouter.com)
- [Vitest Documentation](https://vitest.dev)
