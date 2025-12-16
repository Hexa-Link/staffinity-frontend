/**
 * 👥 EMPLEADOS - Gestión de Personal
 * Ruta: /employees
 * Descripción: Módulo completo para la gestión de empleados.
 * Funcionalidades: Crear, editar, eliminar empleados, gestionar
 * perfiles, estados y datos personales.
 * Módulo: Gestión de Capital Humano
 */

'use client'

import { useState } from 'react'

interface Employee {
  id: number
  name: string
  email: string
  department: string
  position: string
  status: 'activo' | 'inactivo'
}

import { useUsers, useCreateUser } from '@/hooks/useUsers'
import { useFileUpload } from '@/hooks/useFileUpload'
import { UserDto } from '@/api/generated'

export default function EmployeesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [showModal, setShowModal] = useState(false)
  const { data: usersData, isLoading } = useUsers(1, 20, searchTerm)
  const { mutate: createUser, isPending: isCreating } = useCreateUser()
  const { uploadFile, isUploading } = useFileUpload()
  
  // Form state
  const [newUser, setNewUser] = useState<UserDto>({
    email: '',
    firstName: '',
    lastName: '',
    roles: ['User']
  })

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault()
    createUser(newUser, {
      onSuccess: () => {
        setShowModal(false)
        setNewUser({ email: '', firstName: '', lastName: '', roles: ['User'] })
      }
    })
  }

  const employees = usersData?.items || []

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-gray-500 dark:text-gray-400">Gestiona la información de tu equipo</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg shadow-teal-500/30 hover:-translate-y-0.5"
        >
          + Nuevo Empleado
        </button>
      </div>

      {/* Search & Filters */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-teal-100 dark:border-slate-700">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="🔍 Buscar empleados..."
              className="input-field"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select className="input-field sm:w-56">
            <option value="">Todos los departamentos</option>
            <option value="desarrollo">Desarrollo</option>
            <option value="diseño">Diseño</option>
            <option value="marketing">Marketing</option>
            <option value="rrhh">RRHH</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-teal-100 dark:border-slate-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-teal-50 to-teal-100 dark:from-slate-700 dark:to-slate-600">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-teal-700 dark:text-teal-300 uppercase tracking-wider">
                  Nombre
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-teal-700 dark:text-teal-300 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-teal-700 dark:text-teal-300 uppercase tracking-wider">
                  Departamento
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-teal-700 dark:text-teal-300 uppercase tracking-wider">
                  Posición
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-teal-700 dark:text-teal-300 uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-6 py-4 text-right text-xs font-bold text-teal-700 dark:text-teal-300 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-teal-50 dark:divide-slate-700">
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center">Cargando...</td>
                </tr>
              ) : employees.map((employee) => (
                <tr key={employee.id} className="hover:bg-teal-50/50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-200 to-teal-400 rounded-full flex items-center justify-center mr-4 shadow-md">
                        <span className="text-teal-800 font-bold">
                          {employee.firstName?.[0]}
                        </span>
                      </div>
                      <span className="font-semibold text-gray-900 dark:text-white">{employee.firstName} {employee.lastName}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-300">
                    {employee.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-300">
                    - {/* Department not in UserDto yet */}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-300">
                    - {/* Position not in UserDto yet */}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400`}
                    >
                      Activo
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
                    <button 
                      onClick={() => alert('Funcionalidad de editar próximamente')}
                      className="text-teal-600 hover:text-teal-800 font-medium transition-colors"
                    >
                      Editar
                    </button>
                    <button 
                      onClick={() => {
                        if(confirm('¿Estás seguro de eliminar este empleado?')) {
                          alert('Funcionalidad de eliminar próximamente')
                        }
                      }}
                      className="text-red-500 hover:text-red-700 font-medium transition-colors"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-md w-full mx-4 p-8 shadow-2xl border border-teal-100 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Nuevo Empleado</h2>
            <form className="space-y-4" onSubmit={handleCreate}>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Nombre</label>
                <input 
                  type="text" 
                  className="input-field" 
                  placeholder="Nombre" 
                  value={newUser.firstName}
                  onChange={e => setNewUser({...newUser, firstName: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Apellidos</label>
                <input 
                  type="text" 
                  className="input-field" 
                  placeholder="Apellidos" 
                  value={newUser.lastName}
                  onChange={e => setNewUser({...newUser, lastName: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Email</label>
                <input 
                  type="email" 
                  className="input-field" 
                  placeholder="email@hexalink.com" 
                  value={newUser.email}
                  onChange={e => setNewUser({...newUser, email: e.target.value})}
                  required
                />
              </div>
              
              <div className="flex gap-4 mt-8">
                <button type="button" onClick={() => setShowModal(false)} className="flex-1 py-3 px-6 border-2 border-teal-600 text-teal-600 font-semibold rounded-full hover:bg-teal-50 transition-colors">
                  Cancelar
                </button>
                <button type="submit" disabled={isCreating} className="flex-1 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg shadow-teal-500/30 hover:-translate-y-0.5 transition-all disabled:opacity-50">
                  {isCreating ? 'Guardando...' : 'Guardar'}
                </button>
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Avatar</label>
                <input 
                  type="file" 
                  className="input-field" 
                  accept="image/*"
                  onChange={async (e) => {
                    const file = e.target.files?.[0]
                    if (file) {
                      try {
                        const key = await uploadFile(file)
                        setNewUser({...newUser, avatarUrl: key})
                        console.log('File uploaded, key:', key)
                      } catch (err) {
                        console.error(err)
                        alert('Error al subir la imagen. Por favor intenta de nuevo.')
                      }
                    }
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
