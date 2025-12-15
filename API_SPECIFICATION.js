/**
 * ESPECIFICACIÓN DE ENDPOINTS DE API
 * 
 * Este archivo define los endpoints que el frontend espera del backend.
 * Base URL: http://localhost:3000/api (configurable en PUBLIC_API_URL)
 * 
 * Autenticación: Bearer Token en header Authorization
 * Content-Type: application/json
 */

// ============================================
// AUTENTICACIÓN
// ============================================

/**
 * POST /auth/login
 * Autentica un usuario con email y password
 * 
 * Request:
 * {
 *   "email": "usuario@hexa-link.com",
 *   "password": "password123"
 * }
 * 
 * Response (200):
 * {
 *   "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
 *   "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
 *   "expires_in": 3600,
 *   "user": {
 *     "id": "123",
 *     "email": "usuario@hexa-link.com",
 *     "name": "Juan Delgado",
 *     "role": "admin"
 *   }
 * }
 * 
 * Response (401):
 * {
 *   "message": "Credenciales inválidas"
 * }
 */

/**
 * POST /auth/logout
 * Cierra la sesión del usuario
 * 
 * Headers:
 * Authorization: Bearer <token>
 * 
 * Response (200):
 * {
 *   "message": "Sesión cerrada exitosamente"
 * }
 */

/**
 * POST /auth/refresh
 * Refrescar token expirado
 * 
 * Request:
 * {
 *   "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 * }
 * 
 * Response (200):
 * {
 *   "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
 *   "expires_in": 3600
 * }
 */

// ============================================
// EMPLEADOS (CRUD)
// ============================================

/**
 * GET /employees
 * Obtener lista de empleados con filtros
 * 
 * Query Parameters:
 * - department: string (opcional)
 * - status: "Activo" | "En Vacaciones" | "Inactivo" (opcional)
 * - page: number (opcional, default: 1)
 * - limit: number (opcional, default: 20)
 * - search: string (opcional, busca en name y email)
 * 
 * Headers:
 * Authorization: Bearer <token>
 * 
 * Response (200):
 * {
 *   "data": [
 *     {
 *       "id": "E001",
 *       "name": "Juan Pérez",
 *       "email": "juan@hexa-link.com",
 *       "department": "Ingeniería",
 *       "position": "Senior Developer",
 *       "salary": 4500,
 *       "startDate": "2023-01-15",
 *       "status": "Activo",
 *       "phone": "+57 300 123 4567"
 *     }
 *   ],
 *   "total": 127,
 *   "page": 1,
 *   "limit": 20
 * }
 */

/**
 * GET /employees/:id
 * Obtener detalles de un empleado
 * 
 * Headers:
 * Authorization: Bearer <token>
 * 
 * Response (200):
 * {
 *   "data": {
 *     "id": "E001",
 *     "name": "Juan Pérez",
 *     "email": "juan@hexa-link.com",
 *     "department": "Ingeniería",
 *     "position": "Senior Developer",
 *     "salary": 4500,
 *     "startDate": "2023-01-15",
 *     "status": "Activo",
 *     "phone": "+57 300 123 4567",
 *     "address": "Calle Principal 123",
 *     "city": "Bogotá",
 *     "country": "Colombia"
 *   }
 * }
 */

/**
 * POST /employees
 * Crear un nuevo empleado
 * 
 * Headers:
 * Authorization: Bearer <token>
 * 
 * Request:
 * {
 *   "name": "Nuevo Empleado",
 *   "email": "nuevo@hexa-link.com",
 *   "department": "Ingeniería",
 *   "position": "Developer",
 *   "salary": 3500,
 *   "startDate": "2025-12-12",
 *   "status": "Activo",
 *   "phone": "+57 300 123 4567"
 * }
 * 
 * Response (201):
 * {
 *   "data": {
 *     "id": "E009",
 *     "name": "Nuevo Empleado",
 *     ...
 *   },
 *   "message": "Empleado creado exitosamente"
 * }
 */

/**
 * PUT /employees/:id
 * Actualizar datos de un empleado
 * 
 * Headers:
 * Authorization: Bearer <token>
 * 
 * Request: (los campos que quieras actualizar)
 * {
 *   "position": "Lead Developer",
 *   "salary": 4200
 * }
 * 
 * Response (200):
 * {
 *   "data": { ... empleado actualizado ... },
 *   "message": "Empleado actualizado"
 * }
 */

/**
 * DELETE /employees/:id
 * Eliminar un empleado
 * 
 * Headers:
 * Authorization: Bearer <token>
 * 
 * Response (200):
 * {
 *   "message": "Empleado eliminado"
 * }
 */

// ============================================
// INVENTARIO (CRUD)
// ============================================

/**
 * GET /inventory
 * Obtener lista de productos
 * 
 * Query Parameters:
 * - category: string (opcional)
 * - status: "Normal" | "Bajo Stock" | "Crítico" (opcional)
 * - page: number (opcional)
 * - limit: number (opcional)
 * 
 * Response (200):
 * {
 *   "data": [
 *     {
 *       "id": "P001",
 *       "name": "Laptop HP 15-inch",
 *       "sku": "SKU-001",
 *       "category": "Electrónica",
 *       "stock": 45,
 *       "minStock": 10,
 *       "price": 899.99,
 *       "location": "A-5-2",
 *       "status": "Normal"
 *     }
 *   ],
 *   "total": 1250
 * }
 */

/**
 * POST /inventory
 * Crear un nuevo producto
 * 
 * Request:
 * {
 *   "name": "Nuevo Producto",
 *   "sku": "SKU-100",
 *   "category": "Accesorios",
 *   "price": 49.99,
 *   "stock": 100,
 *   "minStock": 10,
 *   "location": "B-1-1"
 * }
 * 
 * Response (201):
 * {
 *   "data": { ... },
 *   "message": "Producto creado"
 * }
 */

/**
 * POST /inventory/:id/movements
 * Registrar movimiento de inventario (entrada/salida)
 * 
 * Request:
 * {
 *   "type": "entrada" | "salida",
 *   "quantity": 10,
 *   "reason": "Compra" | "Venta" | "Ajuste",
 *   "reference": "PO-2025-001",
 *   "date": "2025-12-11T10:30:00Z"
 * }
 * 
 * Response (200):
 * {
 *   "data": {
 *     "movementId": "MOV-001",
 *     "productId": "P001",
 *     "previousStock": 45,
 *     "newStock": 55,
 *     "type": "entrada",
 *     "quantity": 10,
 *     "date": "2025-12-11T10:30:00Z"
 *   }
 * }
 */

// ============================================
// VACANTES (CRUD)
// ============================================

/**
 * GET /vacancies
 * Obtener lista de vacantes
 * 
 * Query Parameters:
 * - department: string (opcional)
 * - status: "Abierta" | "En Revisión" | "Cerrada" (opcional)
 * 
 * Response (200):
 * {
 *   "data": [
 *     {
 *       "id": "V001",
 *       "title": "Frontend Developer Senior",
 *       "department": "Ingeniería",
 *       "description": "Buscamos...",
 *       "salary": "4000-5000",
 *       "requirements": ["React", "TypeScript", "CSS"],
 *       "applicants": 12,
 *       "status": "Abierta",
 *       "posted": "2025-11-27"
 *     }
 *   ],
 *   "total": 6
 * }
 */

/**
 * POST /vacancies
 * Crear una nueva vacante
 * 
 * Request:
 * {
 *   "title": "Backend Developer",
 *   "department": "Ingeniería",
 *   "description": "Descripción detallada...",
 *   "salary": "3500-4500",
 *   "requirements": ["Node.js", "MongoDB"],
 *   "responsibilities": ["Desarrollar APIs", "Optimizar DB"]
 * }
 * 
 * Response (201):
 * {
 *   "data": { ... },
 *   "message": "Vacante creada"
 * }
 */

/**
 * GET /vacancies/:id/applicants
 * Obtener candidatos para una vacante
 * 
 * Query Parameters:
 * - status: "Nuevo" | "En Revisión" | "Entrevista" | "Rechazado" (opcional)
 * 
 * Response (200):
 * {
 *   "data": [
 *     {
 *       "id": "CAND-001",
 *       "name": "Carlos Mendez",
 *       "email": "carlos@example.com",
 *       "phone": "+57 300 000 0000",
 *       "resume": "url_al_cv",
 *       "appliedDate": "2025-12-11",
 *       "status": "Entrevista Agendada",
 *       "interviewDate": "2025-12-15T10:00:00Z",
 *       "rating": 4.5,
 *       "notes": "Excelente candidato"
 *     }
 *   ],
 *   "total": 12
 * }
 */

/**
 * PUT /vacancies/:id/applicants/:candidateId
 * Actualizar estado de candidato
 * 
 * Request:
 * {
 *   "status": "Entrevista Agendada",
 *   "interviewDate": "2025-12-15T10:00:00Z",
 *   "rating": 4.5,
 *   "notes": "Candidato prometedor"
 * }
 * 
 * Response (200):
 * {
 *   "data": { ... },
 *   "message": "Candidato actualizado"
 * }
 */

/**
 * DELETE /vacancies/:id
 * Cerrar una vacante
 * 
 * Response (200):
 * {
 *   "message": "Vacante cerrada"
 * }
 */

// ============================================
// REPORTES
// ============================================

/**
 * GET /reports
 * Obtener lista de reportes disponibles
 * 
 * Query Parameters:
 * - category: "RR.HH" | "Inventario" | "Finanzas" | "Ventas" (opcional)
 * 
 * Response (200):
 * {
 *   "data": [
 *     {
 *       "id": "REP-001",
 *       "name": "Nómina Mensual",
 *       "category": "RR.HH",
 *       "description": "Reporte de nómina...",
 *       "frequency": "Mensual",
 *       "format": ["PDF", "Excel"],
 *       "lastGenerated": "2025-12-10"
 *     }
 *   ]
 * }
 */

/**
 * POST /reports/:id/generate
 * Generar un reporte
 * 
 * Request:
 * {
 *   "format": "pdf" | "excel",
 *   "filters": {
 *     "startDate": "2025-12-01",
 *     "endDate": "2025-12-31",
 *     "department": "Ingeniería"
 *   }
 * }
 * 
 * Response (200):
 * {
 *   "data": {
 *     "reportId": "GEN-001",
 *     "downloadUrl": "/api/reports/GEN-001/download",
 *     "generatedAt": "2025-12-11T10:30:00Z",
 *     "expiresAt": "2025-12-18T10:30:00Z"
 *   },
 *   "message": "Reporte generado"
 * }
 */

// ============================================
// ANÁLISIS Y ESTADÍSTICAS
// ============================================

/**
 * GET /analytics/dashboard
 * Obtener estadísticas del dashboard
 * 
 * Response (200):
 * {
 *   "data": {
 *     "totalEmployees": 127,
 *     "openVacancies": 8,
 *     "totalInventory": 1250,
 *     "inventoryValue": 350240,
 *     "monthlyRevenue": 85500,
 *     "trends": {
 *       "employees": { current: 127, previous: 122, change: 4.1 },
 *       "vacancies": { current: 8, previous: 6, change: 33.3 },
 *       "inventory": { current: 1250, previous: 1230, change: 1.6 }
 *     }
 *   }
 * }
 */

/**
 * GET /analytics/kpis
 * Obtener KPIs principales
 * 
 * Query Parameters:
 * - period: "month" | "quarter" | "year" (default: "month")
 * 
 * Response (200):
 * {
 *   "data": {
 *     "annualGrowth": 23.5,
 *     "profitMargin": 42.3,
 *     "employeeRotation": 8.2,
 *     "customerSatisfaction": 4.7,
 *     "operationalEfficiency": 87.5
 *   }
 * }
 */

// ============================================
// CÓDIGOS DE RESPUESTA HTTP
// ============================================

/**
 * 200 OK - Solicitud exitosa
 * 201 Created - Recurso creado exitosamente
 * 204 No Content - Solicitud exitosa sin contenido
 * 400 Bad Request - Parámetros inválidos
 * 401 Unauthorized - Token inválido o expirado
 * 403 Forbidden - No tienes permiso para acceder
 * 404 Not Found - Recurso no encontrado
 * 422 Unprocessable Entity - Validación fallida
 * 500 Internal Server Error - Error del servidor
 */

// ============================================
// FORMATO DE ERRORES
// ============================================

/**
 * Respuesta de error:
 * {
 *   "error": true,
 *   "message": "Descripción del error",
 *   "code": "ERROR_CODE",
 *   "details": { ... datos adicionales ... }
 * }
 */

// ============================================
// HEADERS REQUERIDOS
// ============================================

/**
 * Content-Type: application/json
 * 
 * Para rutas protegidas:
 * Authorization: Bearer <token>
 * 
 * CORS debe permitir:
 * - Origin: http://localhost:4321 (desarrollo)
 * - Origin: https://tudominio.com (producción)
 * 
 * Métodos permitidos:
 * - GET, POST, PUT, DELETE, OPTIONS
 */

// ============================================
// PAGINACIÓN
// ============================================

/**
 * Parámetros:
 * - page: número de página (default: 1)
 * - limit: registros por página (default: 20, máx: 100)
 * 
 * Respuesta incluye:
 * {
 *   "data": [...],
 *   "pagination": {
 *     "total": 1250,
 *     "page": 1,
 *     "limit": 20,
 *     "pages": 63
 *   }
 * }
 */

// ============================================
// BÚSQUEDA Y FILTROS
// ============================================

/**
 * GET /employees?search=juan&department=Ingeniería&status=Activo&page=1&limit=20
 * 
 * Busca empleados con nombre/email contieniendo "juan"
 * Filtra por departamento y estado
 * Retorna página 1 con 20 resultados
 */
