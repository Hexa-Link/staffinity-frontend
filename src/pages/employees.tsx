import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface Employee {
  id: number
  name: string
  email: string
  role: string
}

export default function Employees() {
  const navigate = useNavigate()
  const [employees, setEmployees] = useState<Employee[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.title = 'Employees - Staffinity'
    // Fetch employees from API
    setTimeout(() => setLoading(false), 1000)
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
          <h1 className="text-4xl font-bold">Employees</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            + Add Employee
          </button>
        </div>

        <div className="bg-white rounded-lg shadow">
          {loading ? (
            <div className="p-6 text-center">
              <p className="text-gray-500">Loading employees...</p>
            </div>
          ) : employees.length === 0 ? (
            <div className="p-6 text-center">
              <p className="text-gray-500">No employees found</p>
              <p className="text-sm text-gray-400 mt-2">Employee management - To be migrated from Astro</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Email</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Role</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map(emp => (
                    <tr key={emp.id} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">{emp.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{emp.email}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{emp.role}</td>
                      <td className="px-6 py-4 text-sm">
                        <button className="text-blue-600 hover:underline">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
