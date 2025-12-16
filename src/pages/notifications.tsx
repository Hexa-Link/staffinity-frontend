import { Helmet } from 'react-helmet-async'

export default function Notifications() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Notifications - Staffinity</title>
      </Helmet>

      <h1 className="text-4xl font-bold p-8">Notifications</h1>
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-gray-600">Notification system - To be migrated from Astro</p>
      </div>
    </div>
  )
}
