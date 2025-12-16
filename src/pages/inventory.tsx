import { Helmet } from 'react-helmet-async'

export default function Inventory() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Inventory - Staffinity</title>
      </Helmet>

      <h1 className="text-4xl font-bold p-8">Inventory</h1>
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-gray-600">Inventory management - To be migrated from Astro</p>
      </div>
    </div>
  )
}
