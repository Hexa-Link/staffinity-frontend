/**
 * Utilidades para consumir APIs backend
 * Configura el endpoint base y métodos reutilizables
 */

const API_BASE = import.meta.env.PUBLIC_API_URL || 'http://localhost:3000/api';

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}

export interface AuthToken {
  access_token: string;
  refresh_token?: string;
  expires_in: number;
}

/**
 * Obtiene el token de autenticación del localStorage
 */
export function getAuthToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('auth_token');
}

/**
 * Guarda el token de autenticación
 */
export function setAuthToken(token: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('auth_token', token);
}

/**
 * Elimina el token de autenticación
 */
export function clearAuthToken(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('auth_token');
}

/**
 * Realiza una petición GET autenticada
 */
export async function apiGet<T>(endpoint: string): Promise<ApiResponse<T>> {
  const token = getAuthToken();
  
  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });

    const data = await response.json();
    
    return {
      data: data.data || data,
      status: response.status,
      error: !response.ok ? data.message || 'Error en la petición' : undefined,
    };
  } catch (error) {
    return {
      status: 500,
      error: error instanceof Error ? error.message : 'Error desconocido',
    };
  }
}

/**
 * Realiza una petición POST autenticada
 */
export async function apiPost<T>(endpoint: string, body: any): Promise<ApiResponse<T>> {
  const token = getAuthToken();
  
  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    
    return {
      data: data.data || data,
      status: response.status,
      error: !response.ok ? data.message || 'Error en la petición' : undefined,
    };
  } catch (error) {
    return {
      status: 500,
      error: error instanceof Error ? error.message : 'Error desconocido',
    };
  }
}

/**
 * Realiza una petición PUT autenticada
 */
export async function apiPut<T>(endpoint: string, body: any): Promise<ApiResponse<T>> {
  const token = getAuthToken();
  
  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    
    return {
      data: data.data || data,
      status: response.status,
      error: !response.ok ? data.message || 'Error en la petición' : undefined,
    };
  } catch (error) {
    return {
      status: 500,
      error: error instanceof Error ? error.message : 'Error desconocido',
    };
  }
}

/**
 * Realiza una petición DELETE autenticada
 */
export async function apiDelete<T>(endpoint: string): Promise<ApiResponse<T>> {
  const token = getAuthToken();
  
  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });

    const data = await response.json();
    
    return {
      data: data.data || data,
      status: response.status,
      error: !response.ok ? data.message || 'Error en la petición' : undefined,
    };
  } catch (error) {
    return {
      status: 500,
      error: error instanceof Error ? error.message : 'Error desconocido',
    };
  }
}

/**
 * Login del usuario
 */
export async function login(email: string, password: string): Promise<ApiResponse<AuthToken>> {
  const response = await apiPost<AuthToken>('/auth/login', { email, password });
  
  if (response.data?.access_token) {
    setAuthToken(response.data.access_token);
  }
  
  return response;
}

/**
 * Logout del usuario
 */
export async function logout(): Promise<void> {
  clearAuthToken();
  // Opcionalmente enviar petición al backend
  await apiPost('/auth/logout', {});
}

/**
 * Verifica si el usuario está autenticado
 */
export function isAuthenticated(): boolean {
  return !!getAuthToken();
}
