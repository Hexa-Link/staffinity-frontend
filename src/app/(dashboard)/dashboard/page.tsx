/**
 * 📊 DASHBOARD - Panel Principal
 * Ruta: /dashboard
 * Descripción: Panel de control principal con estadísticas generales,
 * vista rápida de métricas y actividad reciente del sistema.
 * Módulo: Gestión de Capital Humano
 */

'use client'

import Link from 'next/link'

const stats = [
  { label: 'Total Empleados', value: '156', change: '+12%', icon: '👥', color: 'from-teal-400 to-teal-600' },
  { label: 'Vacantes Activas', value: '8', change: '+3', icon: '🎯', color: 'from-emerald-400 to-emerald-600' },
  { label: 'Items en Inventario', value: '2,345', change: '-5%', icon: '📦', color: 'from-cyan-400 to-cyan-600' },
  { label: 'Notificaciones', value: '23', change: 'Nuevas', icon: '🔔', color: 'from-teal-300 to-teal-500' },
]

const recentActivities = [
  { id: 1, action: 'Nuevo empleado registrado', user: 'Juan Pérez', time: 'Hace 2 horas', icon: '👤' },
  { id: 2, action: 'Vacante publicada', user: 'María García', time: 'Hace 4 horas', icon: '📋' },
  { id: 3, action: 'Inventario actualizado', user: 'Carlos López', time: 'Hace 1 día', icon: '📦' },
  { id: 4, action: 'Solicitud de vacaciones', user: 'Ana Martínez', time: 'Hace 2 días', icon: '🏖️' },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-teal-100 dark:border-slate-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-600/10 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stat.value}</p>
                <p className="text-sm text-teal-600 font-semibold mt-1">{stat.change}</p>
              </div>
              <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions & Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Quick Actions */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-teal-100 dark:border-slate-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Acciones Rápidas</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link
              href="/employees"
              className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-slate-700 dark:to-slate-600 rounded-2xl hover:shadow-lg hover:shadow-teal-600/10 hover:-translate-y-1 transition-all duration-300 text-center group"
            >
              <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform">👥</span>
              <span className="text-sm font-semibold text-teal-700 dark:text-teal-400">Nuevo Empleado</span>
            </Link>
            <Link
              href="/vacancies"
              className="p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-slate-700 dark:to-slate-600 rounded-2xl hover:shadow-lg hover:shadow-emerald-600/10 hover:-translate-y-1 transition-all duration-300 text-center group"
            >
              <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform">🎯</span>
              <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">Nueva Vacante</span>
            </Link>
            <Link
              href="/inventory"
              className="p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-slate-700 dark:to-slate-600 rounded-2xl hover:shadow-lg hover:shadow-cyan-600/10 hover:-translate-y-1 transition-all duration-300 text-center group"
            >
              <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform">📦</span>
              <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-400">Agregar Item</span>
            </Link>
            <Link
              href="/admin-dashboard"
              className="p-6 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-slate-700 dark:to-slate-600 rounded-2xl hover:shadow-lg hover:shadow-amber-600/10 hover:-translate-y-1 transition-all duration-300 text-center group"
            >
              <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform">⚙️</span>
              <span className="text-sm font-semibold text-amber-700 dark:text-amber-400">Configuración</span>
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-teal-100 dark:border-slate-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Actividad Reciente</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between py-4 border-b border-teal-50 dark:border-slate-700 last:border-0 hover:bg-teal-50/50 dark:hover:bg-slate-700/50 -mx-2 px-2 rounded-xl transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-200 to-teal-400 rounded-xl flex items-center justify-center">
                    {activity.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{activity.action}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{activity.user}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
