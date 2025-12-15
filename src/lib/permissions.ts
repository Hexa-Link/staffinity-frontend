/**
 * Permission Matrix for HexaLink ERP based on requirements
 * Define access rights for each role to each page/feature
 */

export type Role = 'admin' | 'hr' | 'employee' | 'candidate';

export interface RolePermissions {
  views: string[];
  features: string[];
}

export const PERMISSIONS_MATRIX: Record<Role, RolePermissions> = {
  // ADMIN (GERENTE) - Full access to everything
  admin: {
    views: [
      '/admin-dashboard',
      '/admin-notifications-logs',
      '/employee-views',
      '/my-profile',
      '/vacations',
      '/login',
      '/notifications',
      '/manage-employees',
      '/manage-vacations',
      '/manage-candidates',
      '/search-module',
      '/manage-vacancies',
      '/manage-vacancies-hr',
      '/employee-notifications',
      '/all-notifications-audits',
      '/crud-vacantes',
      '/crud-vacaciones',
      '/vacancies-public',
      '/inventory',
      '/reports',
      '/settings',
      '/employees',
      '/dashboard',
      '/manage-candidates'
    ],
    features: [
      'view_own_profile',
      'edit_own_profile',
      'view_vacation_history',
      'request_vacation',
      'cancel_vacation',
      'view_notifications',
      'view_all_employees',
      'create_employee',
      'edit_employee',
      'delete_employee',
      'approve_vacation',
      'reject_vacation',
      'view_candidates',
      'manage_candidates',
      'view_vacancies',
      'create_vacancy',
      'edit_vacancy',
      'delete_vacancy',
      'search_talent',
      'view_audit_logs',
      'view_reports',
      'manage_system_settings'
    ]
  },

  // HR (Módulos Vinculados) - HR specific access
  hr: {
    views: [
      '/manage-employees',
      '/employee-views',
      '/manage-vacations',
      '/manage-candidates',
      '/search-module',
      '/manage-vacancies-hr',
      '/vacancies-public',
      '/my-profile',
      '/vacations',
      '/employee-notifications',
      '/dashboard',
      '/login'
    ],
    features: [
      'view_own_profile',
      'edit_own_profile',
      'view_vacation_history',
      'request_vacation',
      'cancel_vacation',
      'view_employee_vacations',
      'approve_vacation',
      'reject_vacation',
      'view_all_employees',
      'create_employee',
      'edit_employee',
      'view_candidates',
      'manage_candidates',
      'create_vacancy',
      'edit_vacancy',
      'associate_employees_candidates',
      'search_talent',
      'view_notifications'
    ]
  },

  // EMPLOYEE - Limited to own data
  employee: {
    views: [
      '/my-profile',
      '/vacations',
      '/login',
      '/employee-notifications',
      '/vacancies-public',
      '/dashboard'
    ],
    features: [
      'view_own_profile',
      'edit_own_profile_basic',
      'view_vacation_history',
      'request_vacation',
      'cancel_vacation',
      'view_notifications'
    ]
  },

  // CANDIDATE - Public access only
  candidate: {
    views: [
      '/vacancies-public',
      '/login'
    ],
    features: [
      'view_vacancies',
      'apply_to_vacancy'
    ]
  }
};

/**
 * Determine user role from email
 */
export function getRoleFromEmail(email: string): Role {
  if (email.includes('admin')) return 'admin';
  if (email.includes('hr')) return 'hr';
  if (email.includes('candidate')) return 'candidate';
  return 'employee';
}

/**
 * Check if user has access to a specific view/page
 */
export function hasAccessToPage(role: Role, pagePath: string): boolean {
  const normalizedPath = pagePath.toLowerCase();
  return PERMISSIONS_MATRIX[role].views.some(view => 
    normalizedPath === view || normalizedPath === view.toLowerCase()
  );
}

/**
 * Check if user has specific feature access
 */
export function hasFeatureAccess(role: Role, feature: string): boolean {
  return PERMISSIONS_MATRIX[role].features.includes(feature);
}

/**
 * Get allowed pages for a role
 */
export function getAllowedPages(role: Role): string[] {
  return PERMISSIONS_MATRIX[role].views;
}

/**
 * Redirect user based on role if accessing unauthorized page
 */
export function getDefaultRedirectForRole(role: Role): string {
  const redirectMap: Record<Role, string> = {
    admin: '/admin-dashboard',
    hr: '/manage-employees',
    employee: '/my-profile',
    candidate: '/vacancies-public'
  };
  return redirectMap[role];
}
