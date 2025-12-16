import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminDashboard() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Admin Dashboard - Staffinity'
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
        <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">User Management</h3>
            <p className="text-gray-600 mb-4">Manage system users and permissions</p>
            <button className="text-blue-600 hover:underline">Configure →</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">System Settings</h3>
            <p className="text-gray-600 mb-4">Configure system parameters</p>
            <button className="text-blue-600 hover:underline">Configure →</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Reports</h3>
            <p className="text-gray-600 mb-4">View system reports and analytics</p>
            <button className="text-blue-600 hover:underline">View →</button>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-6">Admin panel - To be migrated from Astro</p>
      </div>
    </div>
  )
}
