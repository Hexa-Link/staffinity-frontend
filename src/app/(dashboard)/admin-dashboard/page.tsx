/**
 * ⚙️ ADMINISTRACIÓN - Panel Administrativo
 * Ruta: /admin-dashboard
 * Descripción: Panel exclusivo para administradores del sistema.
 * Funcionalidades: Control de módulos, gestión de permisos,
 * configuración del sistema, estadísticas de uso, zona de peligro.
 * Módulo: Sistema
 * ⚠️ REQUIERE PERMISOS ADMINISTRATIVOS
 */

'use client'

import { useOrganizations } from '@/hooks/useOrganizations'

const adminStats = [
  { label: 'Usuarios del Sistema', value: '45', icon: '👤', color: 'from-teal-400 to-teal-600' },
  { label: 'Roles Activos', value: '5', icon: '🔐', color: 'from-emerald-400 to-emerald-600' },
  { label: 'Módulos Habilitados', value: '8', icon: '📦', color: 'from-cyan-400 to-cyan-600' },
  { label: 'Último Backup', value: 'Hoy', icon: '💾', color: 'from-teal-300 to-teal-500' },
]

const systemModules = [
  { name: 'Empleados', enabled: true, description: 'Gestión de personal' },
  { name: 'Vacantes', enabled: true, description: 'Publicación de ofertas' },
  { name: 'Reportes', enabled: true, description: 'Generación de informes' },
  { name: 'Nómina', enabled: false, description: 'Cálculo de salarios' },
  { name: 'Capacitación', enabled: false, description: 'Gestión de cursos' },
]

export default function AdminDashboardPage() {
  const { data: organizations } = useOrganizations()
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="text-gray-500 dark:text-gray-400">Configura y gestiona el sistema HexaLink</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {adminStats.map((stat) => (
          <div key={stat.label} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-teal-100 dark:border-slate-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-600/10 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stat.value}</p>
              </div>
              <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* System Modules */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-teal-100 dark:border-slate-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Módulos del Sistema</h2>
          <div className="space-y-4">
            {systemModules.map((module) => (
              <div key={module.name} className="flex items-center justify-between p-4 bg-gradient-to-r from-teal-50 to-white dark:from-slate-700 dark:to-slate-600 rounded-xl border border-teal-100 dark:border-slate-600">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{module.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{module.description}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked={module.enabled}
                    className="sr-only peer"
                  />
                  <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 rounded-full peer dark:bg-slate-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-500 peer-checked:bg-teal-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Settings */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-teal-100 dark:border-slate-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Configuración Rápida</h2>
          <div className="space-y-5">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Nombre de la Empresa
              </label>
              <input
                type="text"
                defaultValue={organizations?.[0]?.name || "HexaLink S.A.S."}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Email de Contacto
              </label>
              <input
                type="email"
                defaultValue="admin@hexalink.com"
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Zona Horaria
              </label>
              <select className="input-field">
                <option>America/Bogota (GMT-5)</option>
                <option>America/Mexico_City (GMT-6)</option>
                <option>America/Buenos_Aires (GMT-3)</option>
                <option>Europe/Madrid (GMT+1)</option>
              </select>
            </div>
            <button className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg shadow-teal-500/30 hover:-translate-y-0.5">
              Guardar Cambios
            </button>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-8 border-2 border-red-200 dark:border-red-800">
        <h2 className="text-xl font-bold text-red-700 dark:text-red-400 mb-6">⚠️ Zona de Peligro</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl">
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">Exportar todos los datos</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Descarga una copia de toda la información</p>
            </div>
            <button className="py-2 px-6 border-2 border-teal-600 text-teal-600 font-semibold rounded-full hover:bg-teal-50 transition-colors">
              Exportar
            </button>
          </div>
          <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl">
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">Resetear configuración</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Restaurar valores por defecto</p>
            </div>
            <button className="py-2 px-6 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all shadow-lg shadow-red-600/30 hover:-translate-y-0.5">
              Resetear
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
