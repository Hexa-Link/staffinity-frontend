# 🧪 Script de Pruebas Automáticas - Hexa-Link ERP
# Verifica que el sistema de permisos funcione correctamente

Write-Host "======================================" -ForegroundColor Cyan
Write-Host "  🧪 PRUEBAS HEXA-LINK ERP" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

# Verificar que el servidor esté corriendo
Write-Host "📡 Verificando servidor..." -ForegroundColor Blue

$port = 4321
$serverRunning = $false

try {
    $response = Invoke-WebRequest -Uri "http://localhost:4321/" -TimeoutSec 2 -UseBasicParsing -ErrorAction SilentlyContinue
    $serverRunning = $true
    $port = 4321
} catch {
    try {
        $response = Invoke-WebRequest -Uri "http://localhost:4322/" -TimeoutSec 2 -UseBasicParsing -ErrorAction SilentlyContinue
        $serverRunning = $true
        $port = 4322
    } catch {
        Write-Host "⚠️  Servidor no detectado. Por favor inicia el servidor con: npm run dev" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Presiona Enter para continuar cuando el servidor esté corriendo..."
        Read-Host
    }
}

if ($serverRunning) {
    Write-Host "✅ Servidor detectado en puerto $port" -ForegroundColor Green
}

Write-Host ""
Write-Host "======================================" -ForegroundColor Cyan
Write-Host "  📝 CHECKLIST DE PRUEBAS" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

$tests = @(
    "Login page carga correctamente",
    "Employee login redirige a /my-profile",
    "HR login redirige a /manage-employees",
    "Admin login redirige a /admin-dashboard",
    "Candidate login redirige a /vacancies-public",
    "HR NO ve botón Eliminar en empleados",
    "Admin SÍ ve botón Eliminar en empleados",
    "Admin puede acceder a /admin-notifications-logs",
    "Employee NO puede acceder a /manage-employees",
    "Candidate solo puede acceder a /vacancies-public"
)

Write-Host "🔍 Pruebas a realizar manualmente:" -ForegroundColor White
Write-Host ""

$counter = 1
foreach ($test in $tests) {
    Write-Host "[$counter] $test" -ForegroundColor Blue
    $counter++
}

Write-Host ""
Write-Host "======================================" -ForegroundColor Cyan
Write-Host "  🔐 CREDENCIALES DE PRUEBA" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "👤 ADMIN (Gerente):" -ForegroundColor Green
Write-Host "   Email: admin@hexalink.com"
Write-Host "   Pass:  demo123"
Write-Host "   URL:   http://localhost:$port/login"
Write-Host ""

Write-Host "👤 HR (Recursos Humanos):" -ForegroundColor Blue
Write-Host "   Email: hr@hexalink.com"
Write-Host "   Pass:  demo123"
Write-Host "   URL:   http://localhost:$port/login"
Write-Host ""

Write-Host "👤 EMPLOYEE (Empleado):" -ForegroundColor Yellow
Write-Host "   Email: juan.perez@hexalink.com"
Write-Host "   Pass:  demo123"
Write-Host "   URL:   http://localhost:$port/login"
Write-Host ""

Write-Host "👤 CANDIDATE (Candidato):" -ForegroundColor Red
Write-Host "   Email: candidate@hexalink.com"
Write-Host "   Pass:  demo123"
Write-Host "   URL:   http://localhost:$port/login"
Write-Host ""

Write-Host "======================================" -ForegroundColor Cyan
Write-Host "  🎯 PÁGINAS CRÍTICAS A VERIFICAR" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "ADMIN:" -ForegroundColor Green
Write-Host "  ✓ http://localhost:$port/admin-dashboard"
Write-Host "  ✓ http://localhost:$port/admin-notifications-logs ⭐ NUEVO"
Write-Host "  ✓ http://localhost:$port/manage-vacancies"
Write-Host "  ✓ http://localhost:$port/manage-employees (botón Eliminar visible)"
Write-Host ""

Write-Host "HR:" -ForegroundColor Blue
Write-Host "  ✓ http://localhost:$port/manage-employees (SIN botón Eliminar)"
Write-Host "  ✓ http://localhost:$port/manage-vacations"
Write-Host "  ✓ http://localhost:$port/manage-candidates"
Write-Host "  ✓ http://localhost:$port/search-module"
Write-Host ""

Write-Host "EMPLOYEE:" -ForegroundColor Yellow
Write-Host "  ✓ http://localhost:$port/my-profile"
Write-Host "  ✓ http://localhost:$port/vacations"
Write-Host "  ✓ http://localhost:$port/employee-notifications"
Write-Host ""

Write-Host "CANDIDATE:" -ForegroundColor Red
Write-Host "  ✓ http://localhost:$port/vacancies-public"
Write-Host ""

Write-Host "======================================" -ForegroundColor Cyan
Write-Host "  ⚠️  VERIFICACIONES CRÍTICAS" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "1. Iniciar sesión como HR (hr@hexalink.com)"
Write-Host "2. Ir a: http://localhost:$port/manage-employees"
Write-Host "3. " -NoNewline
Write-Host "VERIFICAR: El botón 'Eliminar' NO debe aparecer" -ForegroundColor Red
Write-Host ""
Write-Host "4. Cerrar sesión y entrar como Admin (admin@hexalink.com)"
Write-Host "5. Ir a: http://localhost:$port/manage-employees"
Write-Host "6. " -NoNewline
Write-Host "VERIFICAR: El botón 'Eliminar' SÍ debe aparecer" -ForegroundColor Green
Write-Host ""
Write-Host "7. Como Admin, ir a: http://localhost:$port/admin-notifications-logs"
Write-Host "8. " -NoNewline
Write-Host "VERIFICAR: Panel duplex con notificaciones (izq) y logs (der)" -ForegroundColor Green
Write-Host ""

Write-Host "======================================" -ForegroundColor Cyan
Write-Host "  🚀 INICIAR PRUEBAS" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Abriendo navegador en http://localhost:$port/login..." -ForegroundColor White
Write-Host ""

# Abrir navegador
Start-Process "http://localhost:$port/login"

Write-Host "✅ Script de pruebas ejecutado." -ForegroundColor Green
Write-Host ""
Write-Host "Sigue las verificaciones manuales arriba." -ForegroundColor White
Write-Host ""
Write-Host "Presiona Enter para cerrar..." -ForegroundColor Yellow
Read-Host
