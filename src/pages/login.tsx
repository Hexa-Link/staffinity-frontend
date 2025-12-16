import { Helmet } from 'react-helmet-async'

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Helmet>
        <title>Login - Staffinity</title>
      </Helmet>

      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6">Login to Staffinity</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
        <p className="text-gray-600">Login form - To be migrated from Astro</p>
      </div>
    </div>
  )
}
