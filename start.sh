#!/bin/bash
# Script para iniciar el proyecto Hexa-Link ERP

echo "╔═══════════════════════════════════════════════════════════╗"
echo "║    HEXA-LINK ERP - Sistema de Gestión Empresarial       ║"
echo "║                  Iniciando servidor...                   ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""

# Verificar si Node está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor instala Node.js 18+"
    exit 1
fi

echo "✓ Node.js detectado: $(node --version)"
echo ""

# Verificar si dependencias están instaladas
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    npm install
fi

echo ""
echo "🚀 Iniciando servidor de desarrollo..."
echo ""
echo "📍 URL Local:    http://localhost:4321/"
echo "🌐 URL Network:  use --host para exponer"
echo ""
echo "📝 Sitios disponibles:"
echo "   • Home:             http://localhost:4321/"
echo "   • Login:            http://localhost:4321/login"
echo "   • Dashboard:        http://localhost:4321/dashboard"
echo "   • Empleados:        http://localhost:4321/employees"
echo "   • Inventario:       http://localhost:4321/inventory"
echo "   • Vacantes:         http://localhost:4321/vacancies"
echo "   • Reportes:         http://localhost:4321/reports"
echo "   • Configuración:    http://localhost:4321/settings"
echo ""
echo "⌨️  Presiona CTRL+C para detener"
echo ""

npm run dev
