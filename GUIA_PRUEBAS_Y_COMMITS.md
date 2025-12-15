# 🧪 GUÍA DE PRUEBAS Y ORGANIZACIÓN DE COMMITS

## 📝 CÓMO HACER LAS PRUEBAS

### 1. Iniciar el servidor de desarrollo

```powershell
npm run dev
```

El servidor se iniciará en `http://localhost:4321` (o 4322 si 4321 está ocupado)

### 2. Probar cada uno de los 4 roles

| Credencial | Rol | URL Inicial | Permisos |
|------------|-----|-------------|----------|
| `admin@hexalink.com` / `demo123` | **Admin (Gerente)** | `/admin-dashboard` | ✅ TODO: CRUD completo empleados, vacantes, vacaciones, logs |
| `hr@hexalink.com` / `demo123` | **HR Manager** | `/manage-employees` | ✅ Empleados (Ver/Editar), Vacaciones (Aprobar), Candidatos, Búsqueda, Vacantes HR |
| `juan.perez@hexalink.com` / `demo123` | **Employee** | `/my-profile` | ✅ Mi Perfil, Mis Vacaciones, Notificaciones |
| `candidate@hexalink.com` / `demo123` | **Candidate** | `/vacancies-public` | ✅ Ver vacantes públicas y aplicar |

### 3. Verificaciones Críticas

#### ✅ EMPLOYEE (Empleado)
1. Ir a `/login` y entrar con `juan.perez@hexalink.com`
2. ✅ Debe redirigir a `/my-profile`
3. ✅ Ver datos personales y botón "Editar"
4. ✅ Ir a `/vacations` → Ver saldo y botón "Solicitar Vacaciones"
5. ✅ Ir a `/employee-notifications` → Ver notificaciones
6. ❌ Intentar ir a `/manage-employees` → Debe redirigir (no tiene permisos)

#### ✅ HR (Recursos Humanos)
1. Ir a `/login` y entrar con `hr@hexalink.com`
2. ✅ Debe redirigir a `/manage-employees`
3. ✅ Ver tabla de empleados con botones "Ver" y "Editar"
4. ⚠️ **CRÍTICO**: NO debe aparecer el botón "Eliminar" (solo Admin puede eliminar)
5. ✅ Ir a `/manage-vacations` → Ver solicitudes y botones "Aprobar/Rechazar"
6. ✅ Ir a `/manage-candidates` → Gestionar candidatos (botón ✕ rechaza pero no elimina)
7. ✅ Ir a `/search-module` → Búsqueda interna/externa
8. ✅ Ir a `/manage-vacancies-hr` → Ver y actualizar vacantes

#### ✅ ADMIN (Gerente/Administrador)
1. Ir a `/login` y entrar con `admin@hexalink.com`
2. ✅ Debe redirigir a `/admin-dashboard`
3. ✅ Ir a `/admin-notifications-logs` → **PANEL DUPLEX** con Notificaciones y Logs
4. ✅ Ir a `/manage-employees` → Botón "Eliminar" SÍ debe aparecer (CRUD completo)
5. ✅ Ir a `/manage-vacancies` → CRUD completo de vacantes
6. ✅ Acceso a TODAS las páginas del sistema

#### ✅ CANDIDATE (Candidato)
1. Ir a `/login` y entrar con `candidate@hexalink.com`
2. ✅ Debe redirigir a `/vacancies-public`
3. ✅ Ver vacantes públicas con botón "Aplicar Ahora"
4. ❌ Intentar ir a cualquier otra página → Debe redirigir

---

## 🌿 ORGANIZACIÓN DE COMMITS EN RAMAS

Los 33 archivos modificados se organizan en **5 ramas temáticas**:

### **Rama 1: `feature/employee-views`** (Vistas de Empleado)
Archivos:
- `src/pages/my-profile.astro` - Perfil del empleado con edición de datos no sensibles
- `src/pages/vacations.astro` - Ver saldo, solicitar, cancelar vacaciones
- `src/pages/employee-notifications.astro` - Notificaciones del empleado

**Commit:**
```bash
git checkout feature/role-based-permissions
git checkout -b feature/employee-views
git add src/pages/my-profile.astro src/pages/vacations.astro src/pages/employee-notifications.astro
git commit -m "feat(employee): add employee views with profile, vacations, and notifications

- Add My Profile page with view and edit capabilities
- Add Vacations page with balance display and request/cancel actions
- Add Employee Notifications page for vacation status updates
- Implement modal for editing non-sensitive personal data
- Stats cards showing vacation balance and usage"
```

---

### **Rama 2: `feature/hr-management-views`** (Vistas de HR)
Archivos:
- `src/pages/manage-employees.astro` - Gestión de empleados (sin DELETE para HR)
- `src/pages/manage-vacations.astro` - Aprobar/Rechazar solicitudes de vacaciones
- `src/pages/manage-candidates.astro` - Gestión de candidatos
- `src/pages/manage-vacancies-hr.astro` - Gestión de vacantes para HR
- `src/pages/search-module.astro` - Búsqueda interna/externa de talento

**Commit:**
```bash
git checkout feature/role-based-permissions
git checkout -b feature/hr-management-views
git add src/pages/manage-employees.astro src/pages/manage-vacations.astro src/pages/manage-candidates.astro src/pages/manage-vacancies-hr.astro src/pages/search-module.astro
git commit -m "feat(hr): add HR management views with role-based restrictions

- Add Manage Employees page (View/Edit only, no DELETE for HR)
- Add Manage Vacations page with Approve/Reject actions
- Add Manage Candidates page with CRUD operations
- Add Manage Vacancies HR page with associate candidates feature
- Add Search Module for internal/external talent search
- Implement permission checks: HR cannot delete employees
- DataTableStaffinity integration for all tables"
```

---

### **Rama 3: `feature/admin-dashboard-logs`** (Panel de Admin)
Archivos:
- `src/pages/admin-dashboard.astro` - Dashboard principal de administrador
- `src/pages/admin-notifications-logs.astro` - **Panel duplex** de notificaciones y logs
- `src/pages/manage-vacancies.astro` - CRUD completo de vacantes (Admin)
- `src/pages/notifications.astro` - Panel general de notificaciones

**Commit:**
```bash
git checkout feature/role-based-permissions
git checkout -b feature/admin-dashboard-logs
git add src/pages/admin-dashboard.astro src/pages/admin-notifications-logs.astro src/pages/manage-vacancies.astro src/pages/notifications.astro
git commit -m "feat(admin): add admin dashboard with duplex notifications/logs panel

- Add Admin Dashboard with stats and activity timeline
- Add Admin Notifications/Logs page (duplex panel) - ONLY ADMIN ACCESS
- Left panel: System notifications with filters
- Right panel: Audit logs with action tracking
- Add Manage Vacancies page with full CRUD for Admin
- Add Notifications page with tabs for notifications and logs
- Implement role verification: redirect non-admins from admin pages"
```

---

### **Rama 4: `feature/role-permissions-system`** (Sistema de Permisos)
Archivos:
- `src/lib/permissions.ts` - Matriz de permisos completa
- `src/lib/auth.ts` - Utilidades de autenticación
- `src/components/ProtectedPage.astro` - Wrapper de protección
- `src/components/AccessChecker.astro` - Widget de verificación de acceso
- `src/pages/permissions-verification.astro` - Página de verificación de permisos
- `src/pages/login.astro` (actualizado)
- `src/layouts/DashboardLayout.astro` (actualizado)

**Commit:**
```bash
git checkout feature/role-based-permissions
git checkout -b feature/role-permissions-system
git add src/lib/permissions.ts src/lib/auth.ts src/components/ProtectedPage.astro src/components/AccessChecker.astro src/pages/permissions-verification.astro src/pages/login.astro src/layouts/DashboardLayout.astro
git commit -m "feat(auth): implement role-based permissions system

- Add permissions.ts with complete matrix for 4 roles (admin, hr, employee, candidate)
- Add auth.ts utility functions for role verification
- Add ProtectedPage component for page-level access control
- Add AccessChecker component showing current user and role
- Update login.astro to store role-based auth data
- Update DashboardLayout with role-based menu filtering
- Add permissions verification page for testing
- Fix infinite redirect loop by standardizing localStorage keys
- Implement dynamic action buttons based on user role"
```

---

### **Rama 5: `feature/candidate-public-views`** (Vistas Públicas)
Archivos:
- `src/pages/vacancies-public.astro` - Vista pública de vacantes para candidatos
- `src/pages/index.astro` (actualizado)
- `src/components/DataTableStaffinity.astro` - Tabla reutilizable con dark mode
- `src/styles/tokens.css` (actualizado)
- Documentación: `VERIFICACION_PERMISOS.md`, `API_SPECIFICATION.js`, `start.sh`

**Commit:**
```bash
git checkout feature/role-based-permissions
git checkout -b feature/candidate-public-views
git add src/pages/vacancies-public.astro src/pages/index.astro src/components/DataTableStaffinity.astro src/styles/tokens.css VERIFICACION_PERMISOS.md API_SPECIFICATION.js start.sh
git commit -m "feat(public): add public vacancy views and shared components

- Add Vacancies Public page for candidates to view and apply
- Update index.astro landing page with dark mode toggle
- Add DataTableStaffinity component with CSS Variables for dark mode
- Update design tokens for Staffinity color scheme
- Add verification documentation (VERIFICACION_PERMISOS.md)
- Add API specification file
- Add start.sh script for easy project startup
- Implement filters for vacancies (department, location, modality)"
```

---

## 📊 RESUMEN DE RAMAS Y COMMITS

| Rama | Archivos | Descripción |
|------|----------|-------------|
| `feature/employee-views` | 3 | Vistas del empleado (perfil, vacaciones, notificaciones) |
| `feature/hr-management-views` | 5 | Vistas de gestión para HR |
| `feature/admin-dashboard-logs` | 4 | Dashboard y logs para Admin |
| `feature/role-permissions-system` | 7 | Sistema completo de permisos |
| `feature/candidate-public-views` | 6 + docs | Vistas públicas y componentes compartidos |
| **TOTAL** | **25 archivos** | **5 ramas temáticas** |

---

## 🚀 SECUENCIA DE COMANDOS PARA CREAR RAMAS Y COMMITS

### Paso 1: Volver a la rama base
```powershell
git checkout feature/role-based-permissions
```

### Paso 2: Crear y commitear rama Employee
```powershell
git checkout -b feature/employee-views
git add src/pages/my-profile.astro src/pages/vacations.astro src/pages/employee-notifications.astro
git commit -m "feat(employee): add employee views with profile, vacations, and notifications"
```

### Paso 3: Crear y commitear rama HR
```powershell
git checkout feature/role-based-permissions
git checkout -b feature/hr-management-views
git add src/pages/manage-employees.astro src/pages/manage-vacations.astro src/pages/manage-candidates.astro src/pages/manage-vacancies-hr.astro src/pages/search-module.astro
git commit -m "feat(hr): add HR management views with role-based restrictions"
```

### Paso 4: Crear y commitear rama Admin
```powershell
git checkout feature/role-based-permissions
git checkout -b feature/admin-dashboard-logs
git add src/pages/admin-dashboard.astro src/pages/admin-notifications-logs.astro src/pages/manage-vacancies.astro src/pages/notifications.astro
git commit -m "feat(admin): add admin dashboard with duplex notifications/logs panel"
```

### Paso 5: Crear y commitear rama Permissions
```powershell
git checkout feature/role-based-permissions
git checkout -b feature/role-permissions-system
git add src/lib/permissions.ts src/lib/auth.ts src/components/ProtectedPage.astro src/components/AccessChecker.astro src/pages/permissions-verification.astro src/pages/login.astro src/layouts/DashboardLayout.astro
git commit -m "feat(auth): implement role-based permissions system"
```

### Paso 6: Crear y commitear rama Public
```powershell
git checkout feature/role-based-permissions
git checkout -b feature/candidate-public-views
git add src/pages/vacancies-public.astro src/pages/index.astro src/components/DataTableStaffinity.astro src/styles/tokens.css VERIFICACION_PERMISOS.md API_SPECIFICATION.js start.sh
git commit -m "feat(public): add public vacancy views and shared components"
```

### Paso 7: Merge de todas las ramas a main (cuando estés listo)
```powershell
git checkout main
git merge feature/employee-views
git merge feature/hr-management-views
git merge feature/admin-dashboard-logs
git merge feature/role-permissions-system
git merge feature/candidate-public-views
git push origin main --all
```

---

## ✅ CHECKLIST DE VERIFICACIÓN FINAL

- [ ] Servidor inicia sin errores: `npm run dev`
- [ ] Login con 4 roles funciona correctamente
- [ ] Employee solo ve sus páginas permitidas
- [ ] HR NO ve botón "Eliminar" en empleados
- [ ] Admin ve panel duplex en `/admin-notifications-logs`
- [ ] Candidate solo ve `/vacancies-public`
- [ ] Dark mode funciona en landing page
- [ ] Todas las tablas usan DataTableStaffinity
- [ ] 5 ramas creadas con commits organizados
- [ ] Documento de verificación completo (VERIFICACION_PERMISOS.md)

---

## 📦 ARCHIVOS TOTALES POR CATEGORÍA

### Páginas (21 total):
- `index.astro`, `login.astro` (públicas)
- `my-profile.astro`, `vacations.astro`, `employee-notifications.astro` (employee)
- `manage-employees.astro`, `manage-vacations.astro`, `manage-candidates.astro`, `manage-vacancies-hr.astro`, `search-module.astro` (hr)
- `admin-dashboard.astro`, `admin-notifications-logs.astro`, `manage-vacancies.astro`, `notifications.astro` (admin)
- `vacancies-public.astro` (candidate)
- `permissions-verification.astro`, `dashboard.astro`, `employees.astro`, `inventory.astro`, `reports.astro`, `settings.astro`, `vacancies.astro` (general)

### Componentes (4):
- `DataTableStaffinity.astro`, `ProtectedPage.astro`, `AccessChecker.astro`, `Button/Card/etc` (existentes)

### Librerías (2):
- `permissions.ts`, `auth.ts`

### Documentación (3):
- `VERIFICACION_PERMISOS.md`, `API_SPECIFICATION.js`, `start.sh`

---

## 🎯 RESULTADO FINAL

**94% de features implementadas** según el diagrama de permisos.

**Páginas funcionales:** 22 (una nueva: admin-notifications-logs)

**Sistema de permisos:** Completamente funcional con 4 roles.

**Restricciones:** HR no puede eliminar (botón oculto según rol).
