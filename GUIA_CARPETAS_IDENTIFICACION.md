# 📍 Guía de Identificación de Carpetas y Archivos

## 🗂️ Estructura Visual con Identificadores

### Páginas del Dashboard (Rutas)
```
src/app/(dashboard)/
│
├── 📊 dashboard/page.tsx
│   └─ Panel Principal | Ruta: /dashboard
│   └─ Estadísticas, actividad reciente, métricas
│
├── 👥 employees/page.tsx
│   └─ Gestión de Personal | Ruta: /employees
│   └─ CRUD empleados, perfiles, estados
│
├── 🎯 vacancies/page.tsx
│   └─ Gestión de Puestos | Ruta: /vacancies
│   └─ Crear/editar vacantes, publicar ofertas
│
├── 📦 inventory/page.tsx
│   └─ Control de Recursos | Ruta: /inventory
│   └─ Stock, items, disponibilidad
│
├── 🔔 notifications/page.tsx
│   └─ Centro de Alertas | Ruta: /notifications
│   └─ Notificaciones por tipo (Info, Éxito, Error)
│
├── ⚙️ admin-dashboard/page.tsx
│   └─ Panel Administrativo | Ruta: /admin-dashboard
│   └─ ⚠️ REQUIERE PERMISOS ADMIN
│   └─ Módulos del sistema, permisos, zona de peligro
│
└── 🎨 layout.tsx
    └─ Estructura de Dashboard
    └─ Sidebar, header, contenedor principal
    └─ Se aplica a TODAS las rutas dentro de (dashboard)
```

### Páginas Generales
```
src/app/
│
├── 🏠 page.tsx
│   └─ Landing Page | Ruta: /
│   └─ Presentación, Hero, Soluciones, Contacto
│
├── 🔐 login/page.tsx
│   └─ Autenticación | Ruta: /login
│   └─ Formulario de inicio de sesión
│
└── 🌍 layout.tsx
    └─ Layout Raíz
    └─ Se aplica a TODA la aplicación
```

### Componentes (Reutilizables)
```
src/components/
│
└── 🤖 ChatBot.tsx
    └─ Asistente de IA Flotante
    └─ Chat con Gemini, modal responsivo
    └─ Scope: Global (en layout.tsx)
```

### Hooks (Lógica Reutilizable)
```
src/hooks/
│
└── 💬 useChat.ts
    └─ Lógica del Chat
    └─ Gestión de mensajes, llamadas a API
    └─ Usado por: ChatBot.tsx
```

### Tipos TypeScript
```
src/types/
│
└── 📝 chat.ts
    └─ Definiciones de Tipos
    └─ Message, ChatState
    └─ Usado por: ChatBot.tsx, useChat.ts
```

### Utils (Funciones Auxiliares)
```
src/utils/
│
└─ (Futuras funciones helper aquí)
```

---

## 🔍 Quick Reference - Busca por Emoji

| Emoji | Archivo | Ubicación | Función |
|-------|---------|-----------|---------|
| 📊 | dashboard/page.tsx | (dashboard) | Panel principal con stats |
| 👥 | employees/page.tsx | (dashboard) | Gestión de empleados |
| 🎯 | vacancies/page.tsx | (dashboard) | Gestión de vacantes |
| 📦 | inventory/page.tsx | (dashboard) | Control de inventario |
| 🔔 | notifications/page.tsx | (dashboard) | Centro de notificaciones |
| ⚙️ | admin-dashboard/page.tsx | (dashboard) | Panel administrativo |
| 🎨 | layout.tsx | (dashboard) | Estructura dashboard |
| 🏠 | page.tsx | app | Landing page |
| 🔐 | login/page.tsx | app | Autenticación |
| 🤖 | ChatBot.tsx | components | Chatbot IA |
| 💬 | useChat.ts | hooks | Lógica chat |
| 📝 | chat.ts | types | Tipos chat |

---

## 📌 Cómo Identificar Cada Carpeta

### Al abrir un archivo, busca el comentario en la parte superior:

```typescript
/**
 * 🎯 VACANTES - Gestión de Puestos
 * Ruta: /vacancies
 * Descripción: Sistema de gestión de vacantes...
 * Módulo: Reclutamiento y Selección
 */
```

### Información clave que encontrarás:
- **Emoji**: Identificación visual rápida
- **Nombre**: Nombre descriptivo
- **Ruta**: Path en la URL
- **Descripción**: Qué hace el módulo
- **Funcionalidades**: Características principales
- **Módulo**: A qué área del negocio pertenece

---

## 🚀 Rutas Principales de la Aplicación

```
/                          → Landing Page (Bienvenida)
/login                     → Autenticación
/dashboard                 → Panel Principal
/employees                 → Gestión de Empleados
/vacancies                 → Gestión de Vacantes
/inventory                 → Control de Inventario
/notifications             → Centro de Notificaciones
/admin-dashboard           → Panel Administrativo
```

---

## 🔐 Niveles de Acceso

- **Público**: `/` (landing), `/login`
- **Usuarios Autenticados**: Dashboard, Empleados, Vacantes, Inventario, Notificaciones
- **Administradores**: `/admin-dashboard` ⚠️

---

## 💡 Consejos para Navegar

1. Busca por **emoji** al abrir archivos
2. Lee el **comentario JSDoc** en la parte superior
3. Usa **Ctrl+P** (VSCode) para buscar rápido por nombre
4. Revisa la estructura en el **Explorador de archivos**
5. Consulta este archivo cuando tengas dudas

