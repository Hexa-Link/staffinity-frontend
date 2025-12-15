#!/bin/bash

# 🧪 Script de Pruebas Automáticas - Hexa-Link ERP
# Verifica que el sistema de permisos funcione correctamente

echo "======================================"
echo "  🧪 PRUEBAS HEXA-LINK ERP"
echo "======================================"
echo ""

# Colores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Verificar que el servidor esté corriendo
echo -e "${BLUE}📡 Verificando servidor...${NC}"
if ! curl -s http://localhost:4321/ > /dev/null 2>&1 && ! curl -s http://localhost:4322/ > /dev/null 2>&1; then
    echo -e "${YELLOW}⚠️  Servidor no detectado. Iniciando...${NC}"
    npm run dev &
    SERVER_PID=$!
    sleep 5
    PORT=4321
    if ! curl -s http://localhost:4321/ > /dev/null 2>&1; then
        PORT=4322
    fi
else
    PORT=4321
    if ! curl -s http://localhost:4321/ > /dev/null 2>&1; then
        PORT=4322
    fi
    echo -e "${GREEN}✅ Servidor detectado en puerto $PORT${NC}"
fi

echo ""
echo "======================================"
echo "  📝 CHECKLIST DE PRUEBAS"
echo "======================================"
echo ""

# Array de pruebas
declare -a tests=(
    "Login page carga correctamente"
    "Employee login redirige a /my-profile"
    "HR login redirige a /manage-employees"
    "Admin login redirige a /admin-dashboard"
    "Candidate login redirige a /vacancies-public"
    "HR NO ve botón Eliminar en empleados"
    "Admin SÍ ve botón Eliminar en empleados"
    "Admin puede acceder a /admin-notifications-logs"
    "Employee NO puede acceder a /manage-employees"
    "Candidate solo puede acceder a /vacancies-public"
)

echo "🔍 Pruebas a realizar manualmente:"
echo ""

counter=1
for test in "${tests[@]}"; do
    echo -e "${BLUE}[$counter]${NC} $test"
    counter=$((counter+1))
done

echo ""
echo "======================================"
echo "  🔐 CREDENCIALES DE PRUEBA"
echo "======================================"
echo ""

echo -e "${GREEN}👤 ADMIN (Gerente):${NC}"
echo "   Email: admin@hexalink.com"
echo "   Pass:  demo123"
echo "   URL:   http://localhost:$PORT/login"
echo ""

echo -e "${BLUE}👤 HR (Recursos Humanos):${NC}"
echo "   Email: hr@hexalink.com"
echo "   Pass:  demo123"
echo "   URL:   http://localhost:$PORT/login"
echo ""

echo -e "${YELLOW}👤 EMPLOYEE (Empleado):${NC}"
echo "   Email: juan.perez@hexalink.com"
echo "   Pass:  demo123"
echo "   URL:   http://localhost:$PORT/login"
echo ""

echo -e "${RED}👤 CANDIDATE (Candidato):${NC}"
echo "   Email: candidate@hexalink.com"
echo "   Pass:  demo123"
echo "   URL:   http://localhost:$PORT/login"
echo ""

echo "======================================"
echo "  🎯 PÁGINAS CRÍTICAS A VERIFICAR"
echo "======================================"
echo ""

echo -e "${GREEN}ADMIN:${NC}"
echo "  ✓ http://localhost:$PORT/admin-dashboard"
echo "  ✓ http://localhost:$PORT/admin-notifications-logs ⭐ NUEVO"
echo "  ✓ http://localhost:$PORT/manage-vacancies"
echo "  ✓ http://localhost:$PORT/manage-employees (botón Eliminar visible)"
echo ""

echo -e "${BLUE}HR:${NC}"
echo "  ✓ http://localhost:$PORT/manage-employees (SIN botón Eliminar)"
echo "  ✓ http://localhost:$PORT/manage-vacations"
echo "  ✓ http://localhost:$PORT/manage-candidates"
echo "  ✓ http://localhost:$PORT/search-module"
echo ""

echo -e "${YELLOW}EMPLOYEE:${NC}"
echo "  ✓ http://localhost:$PORT/my-profile"
echo "  ✓ http://localhost:$PORT/vacations"
echo "  ✓ http://localhost:$PORT/employee-notifications"
echo ""

echo -e "${RED}CANDIDATE:${NC}"
echo "  ✓ http://localhost:$PORT/vacancies-public"
echo ""

echo "======================================"
echo "  ⚠️  VERIFICACIONES CRÍTICAS"
echo "======================================"
echo ""

echo "1. Iniciar sesión como HR (hr@hexalink.com)"
echo "2. Ir a: http://localhost:$PORT/manage-employees"
echo "3. ${RED}VERIFICAR: El botón 'Eliminar' NO debe aparecer${NC}"
echo ""
echo "4. Cerrar sesión y entrar como Admin (admin@hexalink.com)"
echo "5. Ir a: http://localhost:$PORT/manage-employees"
echo "6. ${GREEN}VERIFICAR: El botón 'Eliminar' SÍ debe aparecer${NC}"
echo ""
echo "7. Como Admin, ir a: http://localhost:$PORT/admin-notifications-logs"
echo "8. ${GREEN}VERIFICAR: Panel duplex con notificaciones (izq) y logs (der)${NC}"
echo ""

echo "======================================"
echo "  🚀 INICIAR PRUEBAS"
echo "======================================"
echo ""

echo "Abriendo navegador en http://localhost:$PORT/login..."
echo ""

# Detectar sistema operativo y abrir navegador
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" ]]; then
    # Windows
    start http://localhost:$PORT/login
elif [[ "$OSTYPE" == "darwin"* ]]; then
    # Mac
    open http://localhost:$PORT/login
else
    # Linux
    xdg-open http://localhost:$PORT/login 2>/dev/null || echo "Por favor abre http://localhost:$PORT/login manualmente"
fi

echo -e "${GREEN}✅ Script de pruebas ejecutado.${NC}"
echo ""
echo "Sigue las verificaciones manuales arriba."
echo ""
echo "Presiona Ctrl+C para detener el servidor cuando termines."
echo ""

# Si iniciamos el servidor, esperar a que se detenga
if [ ! -z "$SERVER_PID" ]; then
    wait $SERVER_PID
fi
