/**
 * Access control utilities for page protection
 */

import { getRoleFromEmail, hasAccessToPage, getDefaultRedirectForRole } from './permissions';

export interface User {
  email: string;
  role: 'admin' | 'hr' | 'employee' | 'candidate';
}

/**
 * Get current user from localStorage
 */
export function getCurrentUser(): User | null {
  if (typeof window === 'undefined') return null;
  
  const userStr = localStorage.getItem('user');
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  
  if (!userStr || !isLoggedIn) return null;
  
  try {
    return JSON.parse(userStr);
  } catch {
    return null;
  }
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('isLoggedIn') === 'true';
}

/**
 * Check if user has access to current page
 */
export function canAccessPage(pagePath: string): boolean {
  const user = getCurrentUser();
  if (!user) return false;
  
  return hasAccessToPage(user.role, pagePath);
}

/**
 * Logout user
 */
export function logout(): void {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem('user');
  localStorage.removeItem('isLoggedIn');
  window.location.href = '/login';
}

/**
 * Redirect if unauthorized
 */
export function redirectIfUnauthorized(pagePath: string): void {
  if (typeof window === 'undefined') return;
  
  const user = getCurrentUser();
  
  // Not authenticated - redirect to login
  if (!user) {
    window.location.href = '/login';
    return;
  }
  
  // Authenticated but no access to this page - redirect to default
  if (!hasAccessToPage(user.role, pagePath)) {
    const defaultPath = getDefaultRedirectForRole(user.role);
    window.location.href = defaultPath;
  }
}

/**
 * Initialize auth check on page load
 */
export function initAuthCheck(requiredPage: string): void {
  if (typeof window === 'undefined') return;
  
  // Check on initial load
  redirectIfUnauthorized(requiredPage);
  
  // Listen for storage changes (logout from other tabs)
  window.addEventListener('storage', () => {
    if (!isAuthenticated()) {
      window.location.href = '/login';
    }
  });
}
