import { Helmet } from 'react-helmet-async'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Staffinity - Home</title>
      </Helmet>

      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">Staffinity</h1>
            </div>
            <div className="flex items-center gap-4">
              <a href="/dashboard" className="text-gray-600 hover:text-gray-900">
                Dashboard
              </a>
              <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl font-bold mb-4">Welcome to Staffinity ERP</h2>
        <p className="text-lg text-gray-600 mb-8">
          Enterprise Resource Planning System
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Employees</h3>
            <p className="text-gray-600">Manage employee information and records</p>
            <a href="/employees" className="mt-4 inline-block text-blue-600 hover:underline">
              View →
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Inventory</h3>
            <p className="text-gray-600">Track and manage inventory items</p>
            <a href="/inventory" className="mt-4 inline-block text-blue-600 hover:underline">
              View →
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Vacancies</h3>
            <p className="text-gray-600">Browse and apply for job openings</p>
            <a href="/vacancies" className="mt-4 inline-block text-blue-600 hover:underline">
              View →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
