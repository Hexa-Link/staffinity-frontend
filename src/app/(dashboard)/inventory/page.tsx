/**
 * 📦 INVENTARIO - Gestión de Recursos
 * Ruta: /inventory
 * Descripción: Módulo para control y gestión de inventario.
 * Funcionalidades: Registrar items, controlar stock, establecer
 * estados (En Stock, Bajo Stock, Agotado), seguimiento de recursos.
 * Módulo: Gestión Administrativa
 */

import { redirect } from 'next/navigation'

export default function InventoryPageRedirect() {
  // Inventory module removed from UI — redirect to dashboard
  redirect('/dashboard')
}
