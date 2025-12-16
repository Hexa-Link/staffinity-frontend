import { Helmet } from 'react-helmet-async'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Dashboard - Staffinity</title>
      </Helmet>

      <h1 className="text-4xl font-bold p-8">Dashboard</h1>
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-gray-600">Dashboard content - To be migrated from Astro</p>
      </div>
    </div>
  )
}
