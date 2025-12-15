import { apiGet, apiPost, apiPut, apiDelete, login, logout, isAuthenticated } from './api';

/**
 * EJEMPLOS DE INTEGRACIÓN CON BACKEND
 * 
 * Este archivo muestra cómo integrar el frontend con tu backend
 * usando las funciones de API disponibles en src/lib/api.ts
 */

// ============================================
// AUTENTICACIÓN
// ============================================

export async function handleLogin(email: string, password: string) {
  try {
    const response = await login(email, password);
    
    if (response.error) {
      console.error('Error de login:', response.error);
      return { success: false, error: response.error };
    }

    console.log('Login exitoso, token guardado');
    return { success: true, data: response.data };
  } catch (error) {
    console.error('Error en login:', error);
    return { success: false, error: 'Error desconocido' };
  }
}

export async function handleLogout() {
  await logout();
  window.location.href = '/login';
}

export function checkAuth(): boolean {
  return isAuthenticated();
}

// ============================================
// EMPLEADOS
// ============================================

export async function fetchEmployees(filter?: { department?: string; status?: string }) {
  const endpoint = filter ? `/employees?${new URLSearchParams(filter as any).toString()}` : '/employees';
  const response = await apiGet(endpoint);
  
  if (response.error) {
    console.error('Error al obtener empleados:', response.error);
    return [];
  }

  return response.data || [];
}

export async function fetchEmployeeById(id: string) {
  const response = await apiGet(`/employees/${id}`);
  
  if (response.error) {
    console.error('Error al obtener empleado:', response.error);
    return null;
  }

  return response.data;
}

export async function createEmployee(employeeData: {
  name: string;
  email: string;
  department: string;
  position: string;
  salary?: number;
  startDate?: string;
}) {
  const response = await apiPost('/employees', employeeData);
  
  if (response.error) {
    console.error('Error al crear empleado:', response.error);
    return { success: false, error: response.error };
  }

  return { success: true, data: response.data };
}

export async function updateEmployee(id: string, employeeData: any) {
  const response = await apiPut(`/employees/${id}`, employeeData);
  
  if (response.error) {
    console.error('Error al actualizar empleado:', response.error);
    return { success: false, error: response.error };
  }

  return { success: true, data: response.data };
}

export async function deleteEmployee(id: string) {
  const response = await apiDelete(`/employees/${id}`);
  
  if (response.error) {
    console.error('Error al eliminar empleado:', response.error);
    return { success: false, error: response.error };
  }

  return { success: true };
}

// ============================================
// INVENTARIO
// ============================================

export async function fetchProducts(filter?: { category?: string; status?: string }) {
  const endpoint = filter ? `/inventory?${new URLSearchParams(filter as any).toString()}` : '/inventory';
  const response = await apiGet(endpoint);
  
  if (response.error) {
    console.error('Error al obtener productos:', response.error);
    return [];
  }

  return response.data || [];
}

export async function fetchProductById(id: string) {
  const response = await apiGet(`/inventory/${id}`);
  
  if (response.error) {
    console.error('Error al obtener producto:', response.error);
    return null;
  }

  return response.data;
}

export async function createProduct(productData: {
  name: string;
  sku: string;
  category: string;
  price: number;
  minStock: number;
}) {
  const response = await apiPost('/inventory', productData);
  
  if (response.error) {
    console.error('Error al crear producto:', response.error);
    return { success: false, error: response.error };
  }

  return { success: true, data: response.data };
}

export async function updateStock(id: string, quantity: number, type: 'entrada' | 'salida') {
  const response = await apiPost(`/inventory/${id}/movements`, {
    quantity,
    type,
    date: new Date().toISOString(),
  });
  
  if (response.error) {
    console.error('Error al actualizar stock:', response.error);
    return { success: false, error: response.error };
  }

  return { success: true, data: response.data };
}

// ============================================
// VACANTES
// ============================================

export async function fetchVacancies(filter?: { department?: string; status?: string }) {
  const endpoint = filter ? `/vacancies?${new URLSearchParams(filter as any).toString()}` : '/vacancies';
  const response = await apiGet(endpoint);
  
  if (response.error) {
    console.error('Error al obtener vacantes:', response.error);
    return [];
  }

  return response.data || [];
}

export async function fetchVacancyById(id: string) {
  const response = await apiGet(`/vacancies/${id}`);
  
  if (response.error) {
    console.error('Error al obtener vacante:', response.error);
    return null;
  }

  return response.data;
}

export async function createVacancy(vacancyData: {
  title: string;
  department: string;
  description: string;
  salary: string;
  requirements: string[];
}) {
  const response = await apiPost('/vacancies', vacancyData);
  
  if (response.error) {
    console.error('Error al crear vacante:', response.error);
    return { success: false, error: response.error };
  }

  return { success: true, data: response.data };
}

export async function fetchApplicants(vacancyId: string) {
  const response = await apiGet(`/vacancies/${vacancyId}/applicants`);
  
  if (response.error) {
    console.error('Error al obtener candidatos:', response.error);
    return [];
  }

  return response.data || [];
}

export async function updateApplicantStatus(vacancyId: string, applicantId: string, status: string) {
  const response = await apiPut(
    `/vacancies/${vacancyId}/applicants/${applicantId}`,
    { status }
  );
  
  if (response.error) {
    console.error('Error al actualizar estado del candidato:', response.error);
    return { success: false, error: response.error };
  }

  return { success: true, data: response.data };
}

// ============================================
// REPORTES
// ============================================

export async function fetchReports() {
  const response = await apiGet('/reports');
  
  if (response.error) {
    console.error('Error al obtener reportes:', response.error);
    return [];
  }

  return response.data || [];
}

export async function generateReport(reportId: string, format: 'pdf' | 'excel' = 'pdf') {
  const response = await apiPost(`/reports/${reportId}/generate`, { format });
  
  if (response.error) {
    console.error('Error al generar reporte:', response.error);
    return { success: false, error: response.error };
  }

  // El backend debería retornar una URL para descargar
  if (response.data && typeof response.data === 'object' && 'downloadUrl' in response.data) {
    window.location.href = (response.data as { downloadUrl: string }).downloadUrl;
  }

  return { success: true, data: response.data };
}

// ============================================
// ANÁLISIS
// ============================================

export async function fetchDashboardStats() {
  const response = await apiGet('/analytics/dashboard');
  
  if (response.error) {
    console.error('Error al obtener estadísticas:', response.error);
    return null;
  }

  return response.data;
}

export async function fetchKPIs(period: 'month' | 'quarter' | 'year' = 'month') {
  const response = await apiGet(`/analytics/kpis?period=${period}`);
  
  if (response.error) {
    console.error('Error al obtener KPIs:', response.error);
    return null;
  }

  return response.data;
}

// ============================================
// USO EN COMPONENTES ASTRO
// ============================================

/*
Ejemplo de cómo usar estas funciones en un componente Astro:

---
import DashboardLayout from '../layouts/DashboardLayout.astro';
import { fetchEmployees } from '../lib/api-examples';

// En el frontmatter del componente
const employees = await fetchEmployees();
const stats = await fetchDashboardStats();
---

<DashboardLayout>
  {employees.map(emp => (
    <div>{emp.name}</div>
  ))}
</DashboardLayout>
*/

// ============================================
// USO EN SCRIPTS DEL LADO DEL CLIENTE
// ============================================

/*
Para usar estas funciones en scripts del lado del cliente:

1. Expórtalas desde un archivo .ts en src/lib/
2. Utiliza client-side routing o event listeners
3. Ejemplo:

document.getElementById('createBtn')?.addEventListener('click', async () => {
  const result = await createEmployee({
    name: 'Juan',
    email: 'juan@example.com',
    department: 'Ingeniería',
    position: 'Developer'
  });
  
  if (result.success) {
    alert('Empleado creado!');
  } else {
    alert('Error: ' + result.error);
  }
});
*/
