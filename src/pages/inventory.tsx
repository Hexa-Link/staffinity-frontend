import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Inventory() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Inventory - Staffinity'
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <button
              onClick={() => navigate('/')}
              className="text-2xl font-bold text-blue-600 hover:opacity-80"
            >
              Staffinity
            </button>
            <button
              onClick={() => navigate('/')}
              className="text-gray-600 hover:text-gray-900"
            >
              ← Back
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">Inventory</h1>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            + Add Item
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-lg mb-4">Inventory management - To be migrated from Astro</p>
          <div className="space-y-2">
            <p className="text-sm text-gray-500">• Stock tracking and management</p>
            <p className="text-sm text-gray-500">• Inventory reports and analytics</p>
            <p className="text-sm text-gray-500">• Low stock alerts and notifications</p>
          </div>
        </div>
      </div>
    </div>
  )
}
