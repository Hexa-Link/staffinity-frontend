# 🔄 Astro → React Migration PR

## 📋 Description

This PR migrates the `{MODULE_NAME}` module from Astro to React + Vite.

### What's Being Migrated
- [ ] Pages converted from `.astro` to React `.tsx`
- [ ] Components updated for React patterns
- [ ] API integration verified
- [ ] Routing configured in React Router
- [ ] SEO/Head management with React Helmet

### Scope
- **Module**: {MODULE_NAME}
- **Pages affected**: {LIST_PAGES}
- **Components affected**: {LIST_COMPONENTS}

---

## ✅ Checklist

### Code Quality
- [ ] Code follows ESLint rules (`npm run lint`)
- [ ] Code formatted with Prettier (`npm run format`)
- [ ] No TypeScript errors
- [ ] No console errors in browser dev tools

### Build & Testing
- [ ] `npm run build` passes without errors
- [ ] `npm run test` passes all tests
- [ ] Development server (`npm run dev`) runs without errors
- [ ] No warnings in console output

### Functionality
- [ ] All pages render correctly
- [ ] Navigation between pages works
- [ ] Forms submit correctly (if applicable)
- [ ] API calls work (if applicable)
- [ ] Authentication/authorization maintained (if applicable)
- [ ] Responsive design maintained

### Documentation
- [ ] Updated MIGRATION_GUIDE.md if needed
- [ ] Added JSDoc comments for complex functions
- [ ] Environment variables documented (.env.example)

---

## 🧪 QA Checklist

Test the following before approving:

### Manual Testing
- [ ] Visit all pages in module: `http://localhost:5173/{path}`
- [ ] Test all user interactions (clicks, form inputs, navigation)
- [ ] Test on mobile viewport (DevTools responsive mode)
- [ ] Test API calls if network-dependent
- [ ] Check browser console for errors/warnings

### Cross-browser Testing (if applicable)
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)

### Performance
- [ ] Load time acceptable
- [ ] No memory leaks (DevTools Memory tab)
- [ ] No layout shifts or jank

---

## 📝 Related Issues

Closes #{ISSUE_NUMBER}

---

## 🔗 References

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [React Router v6](https://reactrouter.com)
- [Migration Guide](../MIGRATION_GUIDE.md)

---

## 📸 Screenshots (if applicable)

<!-- Add screenshots showing before/after or new functionality -->

---

## 💬 Notes for Reviewers

{ADD_ADDITIONAL_CONTEXT}
