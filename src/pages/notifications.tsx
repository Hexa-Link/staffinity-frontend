import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Notifications() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Notifications - Staffinity'
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
        <h1 className="text-4xl font-bold mb-6">Notifications</h1>
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <p className="text-gray-600 text-lg mb-4">Notification system - To be migrated from Astro</p>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">• In-app notifications</p>
              <p className="text-sm text-gray-500">• Email notifications</p>
              <p className="text-sm text-gray-500">• Real-time alerts and updates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
