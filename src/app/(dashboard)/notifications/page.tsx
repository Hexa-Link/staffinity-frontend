/**
 * 🔔 NOTIFICACIONES - Centro de Alertas
 * Ruta: /notifications
 * Descripción: Centro de notificaciones del sistema para alertas
 * y comunicaciones. Tipos: Info, Éxito, Advertencia, Error.
 * Funcionalidades: Ver notificaciones, marcar como leída, filtrar por tipo.
 * Módulo: Comunicaciones
 */

'use client'

import { useState } from 'react'

interface Notification {
  id: number
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  read: boolean
  createdAt: string
}



import { useNotifications } from '@/context/NotificationContext'

export default function NotificationsPage() {
  const { notifications } = useNotifications()
  const [filter, setFilter] = useState<'all' | 'unread'>('all')

  const getTypeStyles = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return { bg: 'bg-teal-50 dark:bg-teal-900/20', border: 'border-teal-200 dark:border-teal-800', icon: '✓', iconBg: 'bg-gradient-to-br from-teal-200 to-teal-400 text-teal-800' }
      case 'info':
        return { bg: 'bg-cyan-50 dark:bg-cyan-900/20', border: 'border-cyan-200 dark:border-cyan-800', icon: 'ℹ', iconBg: 'bg-gradient-to-br from-cyan-200 to-cyan-400 text-cyan-800' }
      case 'warning':
        return { bg: 'bg-amber-50 dark:bg-amber-900/20', border: 'border-amber-200 dark:border-amber-800', icon: '⚠', iconBg: 'bg-gradient-to-br from-amber-200 to-amber-400 text-amber-800' }
      case 'error':
        return { bg: 'bg-red-50 dark:bg-red-900/20', border: 'border-red-200 dark:border-red-800', icon: '✕', iconBg: 'bg-gradient-to-br from-red-200 to-red-400 text-red-800' }
      default:
        return { bg: 'bg-gray-50', border: 'border-gray-200', icon: '•', iconBg: 'bg-gray-200 text-gray-600' }
    }
  }

  // TODO: Implement markAsRead in NotificationContext or API
  const markAsRead = (id: number) => {
    console.log('Mark as read', id)
  }

  const markAllAsRead = () => {
    console.log('Mark all as read')
  }

  const filteredNotifications = filter === 'unread' 
    ? notifications.filter((n) => !n.read) 
    : notifications

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-gray-500 dark:text-gray-400">
            {unreadCount > 0 ? `Tienes ${unreadCount} notificaciones sin leer` : 'Todas las notificaciones leídas'}
          </p>
        </div>
        {unreadCount > 0 && (
          <button onClick={markAllAsRead} className="py-3 px-6 border-2 border-teal-600 text-teal-600 font-semibold rounded-full hover:bg-teal-50 transition-colors">
            Marcar todas como leídas
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="flex gap-3">
        <button
          onClick={() => setFilter('all')}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            filter === 'all' 
              ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/30' 
              : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 border-2 border-teal-100 dark:border-slate-700 hover:bg-teal-50 dark:hover:bg-slate-700'
          }`}
        >
          Todas ({notifications.length})
        </button>
        <button
          onClick={() => setFilter('unread')}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            filter === 'unread' 
              ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/30' 
              : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 border-2 border-teal-100 dark:border-slate-700 hover:bg-teal-50 dark:hover:bg-slate-700'
          }`}
        >
          Sin leer ({unreadCount})
        </button>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.length === 0 ? (
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-12 border border-teal-100 dark:border-slate-700 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-200 to-teal-400 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              🔔
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-lg">No hay notificaciones</p>
          </div>
        ) : (
          filteredNotifications.map((notification) => {
            const styles = getTypeStyles(notification.type)
            return (
              <div
                key={notification.id}
                className={`rounded-2xl p-6 border-2 ${styles.bg} ${styles.border} ${
                  !notification.read ? 'ring-2 ring-teal-400 ring-offset-2' : ''
                } transition-all duration-300 hover:shadow-lg`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold ${styles.iconBg}`}>
                    {styles.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-gray-900 dark:text-white">{notification.title}</h3>
                      {!notification.read && (
                        <span className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></span>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">{notification.message}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                        {new Date(notification.createdAt).toLocaleString('es-MX')}
                      </span>
                      {!notification.read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="text-sm text-teal-600 hover:text-teal-800 font-semibold transition-colors"
                        >
                          Marcar como leída
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
