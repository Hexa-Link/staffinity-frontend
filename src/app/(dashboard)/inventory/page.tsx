/**
 * 📦 INVENTARIO - Gestión de Recursos
 * Ruta: /inventory
 * Descripción: Módulo para control y gestión de inventario.
 * Funcionalidades: Registrar items, controlar stock, establecer
 * estados (En Stock, Bajo Stock, Agotado), seguimiento de recursos.
 * Módulo: Gestión Administrativa
 */

'use client'

import { useState } from 'react'

interface InventoryItem {
  id: number
  name: string
  category: string
  quantity: number
  status: 'disponible' | 'bajo_stock' | 'agotado'
  location: string
  lastUpdated: string
}

const mockInventory: InventoryItem[] = [
  { id: 1, name: 'Laptop Dell XPS 15', category: 'Electrónicos', quantity: 15, status: 'disponible', location: 'Almacén A', lastUpdated: '2024-01-15' },
  { id: 2, name: 'Monitor LG 27"', category: 'Electrónicos', quantity: 8, status: 'disponible', location: 'Almacén A', lastUpdated: '2024-01-14' },
  { id: 3, name: 'Silla Ergonómica', category: 'Mobiliario', quantity: 3, status: 'bajo_stock', location: 'Almacén B', lastUpdated: '2024-01-13' },
  { id: 4, name: 'Teclado Mecánico', category: 'Periféricos', quantity: 0, status: 'agotado', location: 'Almacén A', lastUpdated: '2024-01-12' },
  { id: 5, name: 'Escritorio Ajustable', category: 'Mobiliario', quantity: 12, status: 'disponible', location: 'Almacén B', lastUpdated: '2024-01-11' },
]

export default function InventoryPage() {
  const [inventory] = useState<InventoryItem[]>(mockInventory)
  const [searchTerm, setSearchTerm] = useState('')

  const getStatusColor = (status: InventoryItem['status']) => {
    switch (status) {
      case 'disponible':
        return 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400'
      case 'bajo_stock':
        return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
      case 'agotado':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
      default:
        return 'bg-gray-100 text-gray-600'
    }
  }

  const getStatusLabel = (status: InventoryItem['status']) => {
    switch (status) {
      case 'disponible':
        return 'Disponible'
      case 'bajo_stock':
        return 'Bajo Stock'
      case 'agotado':
        return 'Agotado'
      default:
        return status
    }
  }

  const filteredInventory = inventory.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Inventario</h1>
          <p className="text-gray-500 dark:text-gray-400">Gestiona los activos y recursos de HexaLink</p>
        </div>
        <button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg shadow-teal-500/30 hover:-translate-y-0.5">+ Nuevo Item</button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-teal-100 dark:border-slate-700 text-center">
          <p className="text-3xl font-bold text-teal-600">38</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Total Items</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-teal-100 dark:border-slate-700 text-center">
          <p className="text-3xl font-bold text-emerald-600">35</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Disponibles</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-teal-100 dark:border-slate-700 text-center">
          <p className="text-3xl font-bold text-amber-600">2</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Bajo Stock</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-teal-100 dark:border-slate-700 text-center">
          <p className="text-3xl font-bold text-red-500">1</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Agotados</p>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-teal-100 dark:border-slate-700">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="🔍 Buscar items..."
              className="input-field"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select className="input-field sm:w-56">
            <option value="">Todas las categorías</option>
            <option value="electronicos">Electrónicos</option>
            <option value="mobiliario">Mobiliario</option>
            <option value="perifericos">Periféricos</option>
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
                  Categoría
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-teal-700 dark:text-teal-300 uppercase tracking-wider">
                  Cantidad
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-teal-700 dark:text-teal-300 uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-teal-700 dark:text-teal-300 uppercase tracking-wider">
                  Ubicación
                </th>
                <th className="px-6 py-4 text-right text-xs font-bold text-teal-700 dark:text-teal-300 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-teal-50 dark:divide-slate-700">
              {filteredInventory.map((item) => (
                <tr key={item.id} className="hover:bg-teal-50/50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900 dark:text-white">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-300">
                    {item.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-300">
                    {item.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}>
                      {getStatusLabel(item.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-300">
                    {item.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
                    <button className="text-teal-600 hover:text-teal-800 font-medium transition-colors">Editar</button>
                    <button className="text-red-500 hover:text-red-700 font-medium transition-colors">Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
