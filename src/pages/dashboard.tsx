import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Dashboard - Staffinity'
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
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 text-lg">Dashboard content - To be migrated from Astro</p>
          <div className="mt-6 space-y-2">
            <p className="text-sm text-gray-500">• Widgets and components will be added here</p>
            <p className="text-sm text-gray-500">• Charts and analytics integration pending</p>
            <p className="text-sm text-gray-500">• Real-time data synchronization setup</p>
          </div>
        </div>
      </div>
    </div>
  )
}
