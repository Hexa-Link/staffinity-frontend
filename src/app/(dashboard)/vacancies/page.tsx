/**
 * 🎯 VACANTES - Gestión de Puestos
 * Ruta: /vacancies
 * Descripción: Sistema de gestión de vacantes y ofertas de empleo.
 * Funcionalidades: Crear vacantes, publicar ofertas, gestionar
 * candidatos, cambiar estados (Urgente, Nuevo, En Proceso).
 * Módulo: Reclutamiento y Selección
 */

'use client'

import { useState } from 'react'

interface Vacancy {
  id: number
  title: string
  department: string
  location: string
  type: string
  applicants: number
  status: 'activa' | 'cerrada' | 'pausada'
  createdAt: string
  badge?: string
}

const mockVacancies: Vacancy[] = [
  { id: 1, title: 'Backend Developer .NET', department: 'Engineering', location: 'Remoto / Barranquilla', type: 'Tiempo completo', applicants: 24, status: 'activa', createdAt: '2024-01-15', badge: 'Urgente' },
  { id: 2, title: 'Backend Developer Java', department: 'Engineering', location: 'Híbrido', type: 'Tiempo completo', applicants: 18, status: 'activa', createdAt: '2024-01-12', badge: 'Nuevo' },
  { id: 3, title: 'Frontend Developer Next.js', department: 'Engineering', location: 'Remoto', type: 'Tiempo completo', applicants: 32, status: 'activa', createdAt: '2024-01-10' },
  { id: 4, title: 'UX/UI Designer', department: 'Diseño', location: 'Híbrido', type: 'Tiempo completo', applicants: 15, status: 'pausada', createdAt: '2024-01-08' },
]

export default function VacanciesPage() {
  const [vacancies] = useState<Vacancy[]>(mockVacancies)
  const [showModal, setShowModal] = useState(false)

  const getStatusColor = (status: Vacancy['status']) => {
    switch (status) {
      case 'activa':
        return 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400'
      case 'cerrada':
        return 'bg-gray-100 text-gray-600 dark:bg-slate-600 dark:text-gray-300'
      case 'pausada':
        return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
      default:
        return 'bg-gray-100 text-gray-600'
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-gray-500 dark:text-gray-400">Gestiona las ofertas de trabajo de HexaLink</p>
        </div>
        <button onClick={() => setShowModal(true)} className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg shadow-teal-500/30 hover:-translate-y-0.5">
          + Nueva Vacante
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-teal-100 dark:border-slate-700 text-center">
          <p className="text-3xl font-bold text-teal-600">4</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Total Vacantes</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-teal-100 dark:border-slate-700 text-center">
          <p className="text-3xl font-bold text-emerald-600">3</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Activas</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-teal-100 dark:border-slate-700 text-center">
          <p className="text-3xl font-bold text-amber-600">1</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Pausadas</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-teal-100 dark:border-slate-700 text-center">
          <p className="text-3xl font-bold text-cyan-600">89</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Aplicantes</p>
        </div>
      </div>

      {/* Vacancies Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {vacancies.map((vacancy) => (
          <div key={vacancy.id} className="bg-gradient-to-br from-teal-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border-2 border-teal-100 dark:border-slate-600 hover:border-teal-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-teal-600/15 transition-all duration-300 relative">
            {vacancy.badge && (
              <span className="absolute top-6 right-6 bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                {vacancy.badge}
              </span>
            )}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 pr-20">{vacancy.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{vacancy.department}</p>

            <div className="space-y-2 mb-6">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="mr-2">📍</span>
                <span><strong>Ubicación:</strong> {vacancy.location}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="mr-2">⏰</span>
                <span><strong>Tipo:</strong> {vacancy.type}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="mr-2">👥</span>
                <span><strong>Aplicantes:</strong> {vacancy.applicants}</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-teal-100 dark:border-slate-600">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(vacancy.status)}`}>
                  {vacancy.status}
                </span>
                <span className="text-xs text-gray-400">
                  {new Date(vacancy.createdAt).toLocaleDateString('es-MX')}
                </span>
              </div>
              <div className="space-x-3">
                <button className="text-teal-600 hover:text-teal-800 text-sm font-medium">Ver detalles</button>
                <button className="text-gray-500 hover:text-gray-700 text-sm font-medium">Editar</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-md w-full mx-4 p-8 shadow-2xl border border-teal-100 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Nueva Vacante</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Título</label>
                <input type="text" className="input-field" placeholder="Ej: Frontend Developer" />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Departamento</label>
                <select className="input-field">
                  <option>Engineering</option>
                  <option>Diseño</option>
                  <option>Marketing</option>
                  <option>RRHH</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Ubicación</label>
                <input type="text" className="input-field" placeholder="Ej: Remoto / Híbrido" />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Descripción</label>
                <textarea className="input-field min-h-[100px]" placeholder="Describe la vacante..."></textarea>
              </div>
            </form>
            <div className="flex gap-4 mt-8">
              <button onClick={() => setShowModal(false)} className="flex-1 py-3 px-6 border-2 border-teal-600 text-teal-600 font-semibold rounded-full hover:bg-teal-50 transition-colors">
                Cancelar
              </button>
              <button className="flex-1 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg shadow-teal-500/30 hover:-translate-y-0.5 transition-all">
                Publicar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
