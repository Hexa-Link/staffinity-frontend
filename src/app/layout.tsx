import type { Metadata } from 'next'
import './globals.css'
import ChatBot from '@/components/ChatBot'

export const metadata: Metadata = {
  title: 'Staffinity - Sistema de Gestión de Recursos Humanos',
  description: 'Plataforma integral para la gestión de empleados, vacantes e inventario',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gray-50 antialiased">
        {children}
        <ChatBot />
      </body>
    </html>
  )
}
