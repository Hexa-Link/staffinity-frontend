/**
 * 🎨 DASHBOARD LAYOUT - Estructura de Dashboard
 * Ubicación: src/app/(dashboard)/layout.tsx
 * Descripción: Layout principal para todas las páginas del dashboard.
 * Componentes: Sidebar navegación, header top, contenedor principal.
 * Funcionalidades: Dark mode, navegación responsive, menú colapsable.
 * Alcance: Se aplica a /dashboard, /employees, /vacancies, /inventory, /notifications, /admin-dashboard
 */

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: '📊' },
  { href: '/employees', label: 'Empleados', icon: '👥' },
  { href: '/vacancies', label: 'Vacantes', icon: '🎯' },
  { href: '/inventory', label: 'Inventario', icon: '📦' },
  { href: '/notifications', label: 'Notificaciones', icon: '🔔' },
  { href: '/admin-dashboard', label: 'Administración', icon: '⚙️' },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-slate-900' : 'bg-gradient-to-br from-teal-50 via-white to-white'}`}>
      {/* Sidebar - Hidden on mobile */}
      <aside className={`fixed hidden md:flex inset-y-0 left-0 w-64 flex-col ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-teal-100'} border-r shadow-lg z-50`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className={`flex items-center h-20 px-6 ${darkMode ? 'border-slate-700' : 'border-teal-100'} border-b`}>
            <Link href="/" className="text-2xl font-bold text-teal-600">
              HexaLink
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/30'
                      : darkMode
                        ? 'text-gray-300 hover:bg-slate-700'
                        : 'text-gray-600 hover:bg-teal-50 hover:text-teal-600'
                  }`}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* User Section */}
          <div className={`p-4 ${darkMode ? 'border-slate-700' : 'border-teal-100'} border-t`}>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-200 to-teal-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-teal-800 font-bold text-lg">U</span>
              </div>
              <div className="ml-3">
                <p className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Usuario</p>
                <Link href="/" className="text-xs text-teal-600 hover:text-teal-700 font-medium">
                  Cerrar sesión
                </Link>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="md:ml-64 min-h-screen">
        {/* Top Bar */}
        <header className={`h-16 md:h-20 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white/80 backdrop-blur-lg border-teal-100'} border-b flex items-center justify-between px-4 md:px-8 sticky top-0 z-40`}>
          <div className="min-w-0 flex-1">
            <h1 className={`text-lg md:text-2xl font-bold truncate ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {navItems.find((item) => item.href === pathname)?.label || 'Dashboard'}
            </h1>
            <p className={`text-xs md:text-sm hidden sm:block ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Bienvenido al panel de HexaLink
            </p>
          </div>
          <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
            <button
              onClick={toggleDarkMode}
              className={`w-9 h-9 md:w-10 md:h-10 ${darkMode ? 'bg-slate-700' : 'bg-teal-50'} rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all text-sm md:text-base`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button className={`relative p-2 md:p-3 ${darkMode ? 'text-gray-300 hover:bg-slate-700' : 'text-gray-500 hover:text-teal-600 hover:bg-teal-50'} rounded-xl transition-all`}>
              🔔
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-teal-500 rounded-full"></span>
            </button>
            <button className={`p-2 md:p-3 ${darkMode ? 'text-gray-300 hover:bg-slate-700' : 'text-gray-500 hover:text-teal-600 hover:bg-teal-50'} rounded-xl transition-all`}>
              ⚙️
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-4 md:p-8">{children}</div>
      </main>
    </div>
  )
}
