# Astro → React Migration - Step-by-Step Guide

## Overview

This document provides step-by-step instructions for migrating the Staffinity ERP frontend from Astro to React + Vite.

---

## 📋 Pre-Migration Setup

### 1. Ensure Base Branch is Merged

```bash
git checkout develop
git pull origin develop
git merge migration/astro-to-react-base
# Resolve any conflicts if they exist
git push origin develop
```

### 2. Install Dependencies

```bash
npm ci
# or
npm install
```

### 3. Verify Setup

```bash
npm run build        # Should succeed
npm run lint         # Should pass
npm run test         # Should pass
npm run dev          # Should start on http://localhost:5173
```

---

## 🔄 Migrating a Module

### Step 1: Create Feature Branch

```bash
git checkout develop
git pull origin develop
git checkout -b feature/astro-to-react/{module}-{number}
# Example: feature/astro-to-react/auth-001
```

### Step 2: Analyze Existing Astro Pages

Check the original Astro pages to understand structure, components, and API calls. Review:
- Page layouts and structure
- Component imports and usage
- API/service calls
- Form handling
- Authentication/authorization logic

### Step 3: Migrate Page Content

Update the React stub pages with the actual content from Astro versions.

#### Example: Converting `dashboard.astro` to React

**Before (Astro):**
```astro
---
import DashboardLayout from '@/layouts/DashboardLayout.astro'
import StatWidget from '@/components/StatWidget.astro'

// Page logic here
---

<DashboardLayout>
  <StatWidget title="Users" count={100} />
</DashboardLayout>
```

**After (React):**
```tsx
import { Helmet } from 'react-helmet-async'
import DashboardLayout from '@/components/DashboardLayout'
import StatWidget from '@/components/StatWidget'

export default function Dashboard() {
  return (
    <>
      <Helmet>
        <title>Dashboard - Staffinity</title>
        <meta name="description" content="User dashboard" />
      </Helmet>

      <DashboardLayout>
        <StatWidget title="Users" count={100} />
      </DashboardLayout>
    </>
  )
}
```

### Step 4: Convert Components to React

Move or update components from `src/components/` to work with React:

#### Astro Component → React Component

**Before (Astro Component):**
```astro
---
interface Props {
  title: string
  count: number
}

const { title, count } = Astro.props
---

<div class="stat-widget">
  <h3>{title}</h3>
  <p>{count}</p>
</div>

<style>
  .stat-widget { /* styles */ }
</style>
```

**After (React Component):**
```tsx
interface StatWidgetProps {
  title: string
  count: number
}

export default function StatWidget({ title, count }: StatWidgetProps) {
  return (
    <div className="stat-widget">
      <h3>{title}</h3>
      <p>{count}</p>
    </div>
  )
}
```

### Step 5: Update API Calls

Ensure all API calls use the correct pattern:

```tsx
// Using the api service
import { api } from '@/services/api'

export default function MyComponent() {
  const [data, setData] = useState(null)

  useEffect(() => {
    api.get('/endpoint')
      .then(res => setData(res.data))
      .catch(err => console.error(err))
  }, [])

  return <div>{/* render data */}</div>
}
```

### Step 6: Handle Forms

If the module has forms, update the form handling:

```tsx
import { useState } from 'react'

export default function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/employees', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      // Handle response
    } catch (error) {
      console.error('Form submission failed:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  )
}
```

### Step 7: Update Imports

Fix all imports to use React/React Router patterns:

```tsx
// ❌ Wrong (Astro patterns)
import { navigate } from 'astro:env'
import Link from 'astro/components/Link.astro'

// ✅ Correct (React patterns)
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const MyComponent = () => {
  const navigate = useNavigate()

  return (
    <>
      <Link to="/dashboard">Dashboard</Link>
      <button onClick={() => navigate('/login')}>Go to Login</button>
    </>
  )
}
```

### Step 8: Validate Code Quality

```bash
npm run lint         # Check for errors
npm run lint:fix     # Auto-fix issues
npm run format       # Format code
npm run test         # Run tests
```

### Step 9: Validate Build

```bash
npm run build        # Should succeed without errors
```

### Step 10: Manual Testing

1. Start dev server:
   ```bash
   npm run dev
   ```

2. Test all pages in the module:
   - Navigate between pages
   - Test all user interactions
   - Verify forms work correctly
   - Check API calls in Network tab
   - Look for console errors/warnings

3. Test on mobile viewport:
   - Open DevTools → Toggle device toolbar
   - Test responsiveness

### Step 11: Commit Changes

```bash
git add .
git commit -m "feat(astro-to-react): Migrate {module} module to React

- Convert {pages} pages from .astro to React (.tsx)
- Update components to use React patterns
- Integrate with React Router and Helmet
- Validate API calls and forms
- All ESLint and build checks passing"
```

### Step 12: Push and Create PR

```bash
git push -u origin feature/astro-to-react/{module}-{number}
```

Then create a PR on GitHub using the migration PR template.

---

## 📋 Module-by-Module Guide

### 1. Authentication Module (auth-001)
- [ ] Login page
- [ ] Register page (if exists)
- [ ] Password reset (if exists)
- Update auth context/hooks
- Maintain existing auth API integration

### 2. Dashboard Module (dashboard-001)
- [ ] Main dashboard page
- [ ] Dashboard widgets
- [ ] Charts/analytics (if exists)
- Verify real-time data updates
- Test performance with large datasets

### 3. Employees Module (employees-001)
- [ ] Employee list page
- [ ] Employee detail page
- [ ] Employee form (create/edit)
- [ ] Maintain API integration
- [ ] Validate form validation

### 4. Inventory Module (inventory-001)
- [ ] Inventory list page
- [ ] Inventory detail page
- [ ] Inventory form (create/edit)
- [ ] Stock management features

### 5. Vacancies Module (vacancies-001)
- [ ] Vacancies list page
- [ ] Vacancy detail page
- [ ] Application forms
- [ ] Candidate management

### 6. Admin Module (admin-001)
- [ ] Admin dashboard
- [ ] User management
- [ ] Permission settings
- [ ] System configuration

### 7. Notifications Module (notifications-001)
- [ ] Notification list page
- [ ] Real-time notifications
- [ ] Notification preferences
- [ ] Email/in-app integration

### 8. Miscellaneous Module (misc-001)
- [ ] Reports page
- [ ] Settings page
- [ ] Vacations/time-off
- [ ] Profile management

### 9. Public Views Module (public-views-001)
- [ ] Public job listings
- [ ] Public career page
- [ ] Public company info

### 10. Cleanup (remove-astro-config)
- [ ] Remove astro.config.mjs
- [ ] Update README.md with React/Vite commands
- [ ] Final dependency cleanup

---

## 🛠️ Common Patterns

### useState for Form Handling

```tsx
const [formData, setFormData] = useState({
  field1: '',
  field2: '',
})

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target
  setFormData(prev => ({ ...prev, [name]: value }))
}
```

### useEffect for Data Fetching

```tsx
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('/api/endpoint')
      const data = await response.json()
      setData(data)
    } catch (error) {
      setError(error.message)
    }
  }

  fetchData()
}, [])
```

### useNavigate for Programmatic Navigation

```tsx
const navigate = useNavigate()

const handleNavigation = () => {
  navigate('/dashboard')
}
```

### React Helmet for SEO

```tsx
import { Helmet } from 'react-helmet-async'

export default function MyPage() {
  return (
    <>
      <Helmet>
        <title>Page Title - Staffinity</title>
        <meta name="description" content="Page description" />
        <meta name="keywords" content="key1, key2" />
      </Helmet>

      {/* Page content */}
    </>
  )
}
```

---

## 🚨 Common Issues & Solutions

### Issue: Import Path Errors
**Error**: `Cannot find module '@/services/api'`
**Solution**: Ensure tsconfig.json has correct paths configured and use `@/` for imports

### Issue: Tailwind Classes Not Applied
**Error**: Styles not showing up
**Solution**: Ensure `tailwind.config.js` includes `./src/**/*.{js,ts,jsx,tsx}`

### Issue: API 404 Errors
**Error**: Requests to `/api/...` returning 404
**Solution**: Check `vite.config.ts` proxy settings and backend URL in `.env`

### Issue: Routing Not Working
**Error**: Navigation doesn't change pages
**Solution**: Ensure all routes are defined in `src/App.tsx` and using React Router `<Link>` or `useNavigate()`

---

## ✅ Migration Completion Checklist

- [ ] All 10 feature branches created and merged
- [ ] All modules migrated to React
- [ ] All tests passing
- [ ] All ESLint checks passing
- [ ] Build succeeds without errors
- [ ] Dev server runs without errors
- [ ] Manual testing completed for all modules
- [ ] Documentation updated
- [ ] astro.config.mjs removed
- [ ] README.md updated with React/Vite commands

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Vite Documentation](https://vitejs.dev)
- [TypeScript React Patterns](https://react-typescript-cheatsheet.netlify.app)
- [React Helmet Async](https://github.com/steverob/react-helmet-async)
