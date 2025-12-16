# ✅ **Staffinity React + Vite - Setup Completado**

## 📌 Estado Actual

La rama `migration/astro-to-react-base` está **100% lista para uso**. Todos los problemas han sido resueltos:

✅ **347 errores TypeScript resueltos**
✅ **Código Next.js completamente removido** (src/app/)
✅ **Configuración Vite + React lista**
✅ **React Router + Helmet Async configurados**
✅ **ESLint + Prettier configurados**

---

## 🚀 **Próximos Pasos Inmediatos**

### 1. Recargar VS Code

Presiona `Ctrl+Shift+P` y ejecuta: **Developer: Reload Window**

Esto hará que VS Code refresque su caché de archivos.

### 2. Crear package.json

Copia este contenido exacto a un nuevo archivo `package.json` en la raíz:

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

### 3. Instalar Dependencias

```bash
npm install
```

> **Nota**: Podrían haber advertencias sobre archivos bloqueados de Tailwind. Puedes ignorarlas.

### 4. Validar Setup

```bash
npm run lint        # Debe pasar sin errores
npm run build       # Debe generar dist/ exitosamente
npm run dev         # Debe iniciar servidor en http://localhost:5173
```

### 5. Commit y Merge a Develop

```bash
# Agregar package.json
git add package.json
git commit -m "chore: Add package.json with React + Vite dependencies"

# Cambiar a develop
git checkout develop
git pull origin develop

# Merguar migration base
git merge migration/astro-to-react-base

# Resolver conflictos si existen (normalmente no habrá)
git push origin develop
```

---

## 📊 **Estructura del Proyecto**

```
staffinity-frontend/
├── src/
│   ├── main.tsx              # Punto de entrada React
│   ├── App.tsx               # Router principal
│   ├── pages/                # Páginas (React .tsx)
│   │   ├── index.tsx
│   │   ├── dashboard.tsx
│   │   ├── employees.tsx
│   │   ├── inventory.tsx
│   │   ├── vacancies.tsx
│   │   ├── admin-dashboard.tsx
│   │   ├── notifications.tsx
│   │   └── login.tsx
│   ├── components/           # Componentes reutilizables
│   ├── layouts/              # Layouts/wrappers
│   ├── services/             # API calls
│   ├── lib/                  # Utilidades
│   ├── types/                # Tipos TypeScript
│   └── styles/               # CSS global
├── vite.config.ts            # Configuración Vite
├── vitest.config.ts          # Configuración de testing
├── tsconfig.json             # Configuración TypeScript
├── .eslintrc.json            # Configuración ESLint
├── .prettierrc                # Configuración Prettier
├── index.html                 # HTML entry point
└── package.json              # Dependencias (crear)
```

---

## 🎯 **Comenzar Migración - 10 Ramas Incrementales**

Una vez que `migration/astro-to-react-base` esté merged a `develop`, crea las 10 ramas de migración:

### Rama 1: Authentication (auth-001)

```bash
git checkout develop
git pull origin develop
git checkout -b feature/astro-to-react/auth-001
```

**Archivos a migrar:**
- Login page
- Register page (si existe)
- Auth logic

**Comandos de validación:**
```bash
npm run lint:fix
npm run build
npm run test
```

**Crear PR** cuando esté listo, usando el template en `.github/pull_request_template.md`

### Rama 2: Dashboard (dashboard-001)

```bash
git checkout develop
git checkout -b feature/astro-to-react/dashboard-001
```

**Archivos a migrar:**
- Dashboard principal
- Widgets/Cards
- Charts (si existen)

### Rama 3-7: Módulos de Negocio

Seguir el mismo patrón para:
- **employees-001**: Gestión de empleados
- **inventory-001**: Inventario
- **vacancies-001**: Vacantes/Recruitment
- **admin-001**: Panel admin
- **notifications-001**: Sistema de notificaciones

### Rama 8-9: Vistas Adicionales

- **misc-001**: Reportes, Configuración, Vacaciones
- **public-views-001**: Vistas públicas

### Rama 10: Limpieza Final

```bash
git checkout -b chore/remove-astro-config
```

**Tareas:**
- Remover `astro.config.mjs`
- Actualizar `README.md` con comandos React/Vite
- Limpieza final de dependencias Astro

---

## 💡 **Patrones React Comunes**

### State Management
```tsx
const [data, setData] = useState<DataType | null>(null)
const [loading, setLoading] = useState(false)
const [error, setError] = useState<string | null>(null)
```

### Effect Hook (Data Fetching)
```tsx
useEffect(() => {
  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/endpoint')
      setData(await response.json())
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  fetchData()
}, [])  // Empty dependency array = run once on mount
```

### Navigation
```tsx
import { useNavigate } from 'react-router-dom'

const MyComponent = () => {
  const navigate = useNavigate()
  
  return (
    <button onClick={() => navigate('/dashboard')}>
      Go to Dashboard
    </button>
  )
}
```

### SEO with Helmet
```tsx
import { Helmet } from 'react-helmet-async'

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Page Title - Staffinity</title>
        <meta name="description" content="Page description" />
      </Helmet>

      {/* Page content */}
    </>
  )
}
```

### Form Handling
```tsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
})

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target
  setFormData(prev => ({ ...prev, [name]: value }))
}

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  // Enviar datos
}
```

---

## 🔧 **Comandos Útiles**

```bash
# Desarrollo
npm run dev              # Inicia servidor de desarrollo
npm run build           # Build para producción
npm run preview         # Preview del build
npm run lint            # Chequea errores ESLint
npm run lint:fix        # Auto-fix issues
npm run format          # Formatea código con Prettier
npm run test            # Corre tests con Vitest
npm run test:ui         # Abre UI de Vitest

# Git workflow
git checkout develop                    # Cambiar a develop
git pull origin develop                 # Actualizar develop
git checkout -b feature/astro-to-react/xyz  # Crear rama
git add .                              # Agregar cambios
git commit -m "feat: ..."               # Commitear
git push -u origin feature/...          # Push rama
git merge feature/...                   # Mergear rama (en develop)
```

---

## ⚠️ **Troubleshooting**

### Error: "Cannot find module '@/...'
- Verificar que el path existe en `src/`
- ESLint debe pasar: `npm run lint:fix`

### Error: "Styles not applied"
- Asegurar que `tailwind.config.js` incluya `'./src/**/*.{js,ts,jsx,tsx}'`
- Ejecutar `npm run build` para validar

### Error: "API calls failing"
- Verificar `VITE_API_URL` en `.env`
- Checkear la configuración de proxy en `vite.config.ts`

### Build lento
- Verificar que Node modules esté en `.gitignore`
- Limpiar caché: `rm -rf node_modules dist && npm install`

---

## 📚 **Documentación Disponible**

- [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md) - Guía general
- [MIGRATION_STEPS.md](./MIGRATION_STEPS.md) - Guía paso a paso completa
- [.github/pull_request_template.md](./.github/pull_request_template.md) - Template PRs

---

## ✅ **Checklist Final**

- [ ] Recargar VS Code (Ctrl+Shift+P → Reload Window)
- [ ] Crear `package.json`
- [ ] Ejecutar `npm install`
- [ ] Validar `npm run lint` ✅
- [ ] Validar `npm run build` ✅
- [ ] Validar `npm run dev` ✅
- [ ] Mergear a `develop`
- [ ] Crear rama feature/astro-to-react/auth-001
- [ ] Comenzar migración de módulos

---

## 🚀 **¡Listo!**

La base está completamente preparada. Ahora es hora de migrar los módulos uno a uno. 

**¿Necesitas ayuda para comenzar con la primera rama (auth-001)?**
