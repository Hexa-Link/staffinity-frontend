import { Helmet } from 'react-helmet-async'

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Admin Dashboard - Staffinity</title>
      </Helmet>

      <h1 className="text-4xl font-bold p-8">Admin Dashboard</h1>
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-gray-600">Admin panel - To be migrated from Astro</p>
      </div>
    </div>
  )
}
