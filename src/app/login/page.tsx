/**
 * 🔐 LOGIN - Autenticación
 * Ruta: /login
 * Descripción: Página de autenticación e inicio de sesión.
 * Funcionalidades: Ingresar credenciales, validar usuario,
 * redirigir a dashboard al iniciar sesión exitosamente.
 * Módulo: Seguridad
 */

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useLogin } from '@/hooks/useLogin'

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const { mutate: login, isPending } = useLogin()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    login(
      { email: formData.email, password: formData.password },
      {
        onSuccess: () => {
          router.push('/dashboard')
        },
        onError: () => {
          setError('Error al iniciar sesión. Verifica tus credenciales.')
        },
      }
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-teal-50 to-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 sm:w-[400px] md:w-[600px] h-96 sm:h-[400px] md:h-[600px] bg-gradient-radial from-teal-600/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-64 sm:w-[300px] md:w-[400px] h-64 sm:h-[300px] md:h-[400px] bg-gradient-radial from-teal-600/10 to-transparent rounded-full translate-y-1/2 -translate-x-1/4"></div>
      
      <div className="max-w-md w-full relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 border border-teal-100">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block">
              <span className="text-2xl sm:text-3xl font-bold text-teal-600">HexaLink</span>
            </Link>
            <h2 className="mt-6 text-2xl sm:text-3xl font-extrabold text-gray-900">
              Iniciar Sesión
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-500">
              Accede a tu cuenta para gestionar tu empresa
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl">
                {error}
              </div>
            )}

            <div className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="input-field"
                  placeholder="tu@hexalink.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="input-field"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Recordarme
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-teal-600 hover:text-teal-700 transition-colors">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-4 rounded-full transition-all duration-300 shadow-lg shadow-teal-500/30 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {isPending ? 'Ingresando...' : 'Iniciar Sesión'}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            ¿No tienes cuenta?{' '}
            <a href="#" className="font-semibold text-teal-600 hover:text-teal-700 transition-colors">
              Contacta con nosotros
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
