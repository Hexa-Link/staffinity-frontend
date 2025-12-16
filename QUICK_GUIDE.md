# 🚀 Guía Rápida: Trabajar con las Nuevas Ramas

## ¿Qué cambió?

✅ El código base Next.js + HexaLink está ahora distribuido en **todas las ramas feature**
✅ Cada rama tiene todo lo necesario para el desarrollo
✅ La rama antigua `migration/astro-to-react-base` fue eliminada

---

## 📋 Comandos Esenciales

### 1️⃣ Comenzar trabajo en tu rama feature

```bash
# Clonar repo (si es primera vez)
git clone https://github.com/Hexa-Link/staffinity-frontend.git
cd staffinity-frontend

# Actualizar todas las ramas
git fetch origin

# Cambiar a tu rama feature
git checkout feature/[tu-rama]
```

### 2️⃣ Mantener tu rama actualizada

```bash
# Si develop tiene cambios nuevos
git merge develop

# Si hay conflictos
git merge --abort  # Para cancelar
# ... resuelve conflictos manualmente ...
# git add .
# git commit -m "Merge: Resolve conflicts with develop"
```

### 3️⃣ Hacer cambios y commit

```bash
# Hacer tus cambios en archivos
# ... editar código ...

# Ver cambios
git status

# Agregar cambios
git add .

# Hacer commit
git commit -m "feat: Descripción de tu cambio"

# Pushear a tu rama
git push origin feature/[tu-rama]
```

### 4️⃣ Crear Pull Request en GitHub

**IMPORTANTE**: En GitHub, asegúrate que:
- **Base branch**: `develop` ← (MUY IMPORTANTE, NO main)
- **Compare branch**: `feature/[tu-rama]`
- **Title**: Descripción clara del PR
- **Description**: Explica qué cambios haces

```
Ejemplo:
Title: Add employee filtering functionality
Description:
- Implement filter by department
- Add search by employee name
- Include date range selection

Closes #123
```

---

## ⚠️ Regla de Oro

```
┌─────────────────────────────────────────┐
│  Siempre hacer PR a: develop            │
│  NUNCA a: main                          │
└─────────────────────────────────────────┘
```

---

## 🔄 Flujo Completo de Ejemplo

```bash
# 1. Obtener última versión de develop
git fetch origin
git checkout develop
git pull origin develop

# 2. Cambiar a tu rama feature
git checkout feature/frontend-employees-page

# 3. Mergear cambios nuevos de develop
git merge develop

# 4. Hacer tus cambios
# ... editar archivos ...

# 5. Commit
git add .
git commit -m "feat: Add employee search filter"

# 6. Push
git push origin feature/frontend-employees-page

# 7. En GitHub: Click "Compare & pull request"
#    - Verifica que "base: develop"
#    - Click "Create pull request"

# 8. Esperar revisión y merge
```

---

## 🆘 Problemas Comunes

### Problema: "Tus cambios serían sobrescritos por merge"

```bash
# Solución: Stash tus cambios primero
git stash

# Luego merge
git merge develop

# Recupera tus cambios
git stash pop

# Resuelve conflictos si hay
```

### Problema: "Cannot commit, branches diverged"

```bash
# Solución: Mergear develop nuevamente
git merge develop

# Si tiene conflictos
# ... resuelve manualmente todos los archivos ...
git add .
git commit -m "Merge: Resolve conflicts with develop"
git push origin feature/[tu-rama]
```

### Problema: "¿Cómo vuelvo a la versión anterior?"

```bash
# Ver historial
git log --oneline

# Resetear a un commit anterior
git reset --hard <commit-hash>

# Si ya pusheaste, fuerza update (¡cuidado!)
git push origin feature/[tu-rama] --force-with-lease
```

---

## 📁 Estructura del Proyecto

Todos los archivos Next.js están disponibles en tu rama:

```
src/
├─ app/                      ← Páginas y rutas
│  ├─ globals.css           ← Estilos globales (HexaLink)
│  ├─ layout.tsx            ← Layout principal
│  ├─ page.tsx              ← Landing page
│  ├─ login/page.tsx        ← Login
│  └─ (dashboard)/          ← Rutas protegidas
│     ├─ admin-dashboard/
│     ├─ employees/
│     ├─ vacancies/
│     ├─ inventory/
│     ├─ notifications/
│     └─ layout.tsx
├─ components/              ← Componentes React
│  └─ ChatBot.tsx          ← AI chatbot
├─ hooks/                   ← Custom hooks
│  └─ useChat.ts           ← Estado chat
├─ types/                   ← TypeScript types
│  └─ chat.ts
└─ utils/                   ← Funciones auxiliares
```

---

## 🎨 Colores HexaLink (Tailwind)

```
Primary Teal:  #0d9488  → bg-teal-600, text-teal-600
Secondary:     #5eead4  → bg-cyan-300, text-cyan-300
Dark mode:     Soportado → use 'dark:' prefix
```

Ejemplos:
```jsx
<button className="bg-teal-600 hover:bg-teal-700">
  Botón principal
</button>

<div className="dark:bg-slate-900 dark:text-white">
  Contenido con soporte dark mode
</div>
```

---

## 🚢 Proceso de Release (Después de PR Merged)

```
1. PR merged a develop
   ↓
2. Preparar release en develop
   - Actualizar versión en package.json
   - Crear commit de versión
   ↓
3. Mergear develop → main
   ↓
4. Crear tag en main
   - v1.0.0, v1.1.0, etc.
   ↓
5. Deploy a producción
```

---

## 📞 Necesitas Ayuda?

1. **Lee**: [DISTRIBUCION_COMPLETA.md](./DISTRIBUCION_COMPLETA.md)
2. **Verifica**: Estado de tu rama con `git log -3`
3. **Contacta**: Menciona en el PR los problemas que encuentres

---

## ✨ Tips Útiles

```bash
# Ver ramas locales y remotas
git branch -a

# Ver cambios sin hacer commit
git diff

# Ver commits pendientes de push
git log origin/feature/[tu-rama]..HEAD

# Limpiar commits innecesarios (squash)
git rebase -i develop

# Ver quién hizo qué
git blame src/app/page.tsx
```

---

**¡Listo para desarrollar!** 🎉

Todas tus ramas feature ahora tienen el stack completo de Next.js. Comienza con `git checkout feature/[tu-rama]` y ¡a codificar!

Recuerda: **develop** es tu destino, nunca **main**.
