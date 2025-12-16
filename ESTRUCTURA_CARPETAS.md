# Estructura de Carpetas - Staffinity Frontend

## 📁 Organización del Proyecto

```
src/
├── app/                          # Next.js App Router (páginas y rutas)
│   ├── (dashboard)/             # Grupo de rutas del dashboard
│   │   ├── layout.tsx           # Layout principal del dashboard
│   │   ├── admin-dashboard/     # Panel de administración
│   │   ├── dashboard/           # Panel principal
│   │   ├── employees/           # Gestión de empleados
│   │   ├── inventory/           # Gestión de inventario
│   │   ├── notifications/       # Centro de notificaciones
│   │   └── vacancies/           # Gestión de vacantes
│   ├── api/                     # API routes (backend)
│   │   └── chat/                # Endpoint para chat con Gemini
│   ├── login/                   # Página de autenticación
│   ├── layout.tsx               # Layout raíz
│   ├── page.tsx                 # Landing page (home)
│   └── globals.css              # Estilos globales
│
├── components/                   # Componentes reutilizables
│   └── ChatBot.tsx              # Componente de chatbot con IA
│
├── hooks/                        # Custom React hooks
│   └── useChat.ts               # Hook para gestionar estado del chat
│
├── layouts/                      # Layouts específicos
│   └── (Layouts personalizados aquí)
│
├── types/                        # Tipos TypeScript globales
│   └── chat.ts                  # Tipos relacionados con chat
│
└── utils/                        # Funciones utilitarias
    └── (Funciones helper aquí)
```

## 🎯 Descripción por Carpeta

### `app/` - Rutas y Páginas
- **Ubicación**: Raíz de la aplicación Next.js
- **Contenido**: Páginas, layouts y rutas API
- **(dashboard)**: Grupo de rutas protegidas del panel administrativo
- **Páginas individuales**:
  - `/`: Landing page (bienvenida)
  - `/login`: Autenticación
  - `/dashboard`: Panel de control
  - `/employees`: Gestión de empleados
  - `/vacancies`: Gestión de vacantes
  - `/inventory`: Gestión de inventario
  - `/notifications`: Centro de notificaciones
  - `/admin-dashboard`: Panel de administración

### `components/` - Componentes Reutilizables
- **ChatBot.tsx**: Componente flotante de chat con IA
  - Usa el hook `useChat` para estado
  - Interfaz responsiva (mobile-first)
  - Integración con API de Gemini

### `hooks/` - Lógica Reutilizable
- **useChat.ts**: Gestión centralizada de estado del chat
  - Maneja mensajes
  - Llamadas a API
  - Estado de carga

### `types/` - Tipos TypeScript
- **chat.ts**: Definiciones de tipos
  - `Message`: Estructura de un mensaje
  - `ChatState`: Estado del chatbot

### `layouts/` - Layouts Específicos
- Reservado para layouts personalizados

### `utils/` - Funciones Auxiliares
- Reservado para funciones helper y utilidades

## 🎨 Convenciones de Nomenclatura

| Elemento | Convención | Ejemplo |
|----------|-----------|---------|
| Carpetas | `kebab-case` | `admin-dashboard` |
| Archivos componentes | `PascalCase` | `ChatBot.tsx` |
| Archivos hooks | `camelCase` | `useChat.ts` |
| Archivos tipos | `camelCase` | `chat.ts` |
| Archivos utilidades | `camelCase` | `helpers.ts` |

## 🔗 Importaciones Estándar

```typescript
// Desde componentes
import ChatBot from '@/components/ChatBot'

// Desde hooks
import { useChat } from '@/hooks/useChat'

// Desde tipos
import { Message, ChatState } from '@/types/chat'

// Desde utils (cuando existan)
import { helperFunction } from '@/utils/helpers'
```

## 📝 Notas Importantes

- Usa `@/` para importaciones absolutas (configurado en `tsconfig.json`)
- Componentes deben ser reutilizables y agnósticos de rutas
- Hooks contienen lógica, componentes contienen UI
- Tipos centralizados para mejor mantenibilidad
