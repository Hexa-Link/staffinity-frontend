const PERSONAL_API_URL = process.env.NEXT_PUBLIC_PERSONAL_API_URL || 'http://localhost:8081';
const RECRUITING_API_URL = process.env.NEXT_PUBLIC_RECRUITING_API_URL || 'http://localhost:8082';

export interface HealthResponse {
  status: string;
  service?: string;
  timestamp?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Vacancy interfaces
export interface Vacancy {
  id?: number;
  title: string;
  description: string;
  requirements: string;
  location: string;
  salary?: number;
  status?: 'OPEN' | 'CLOSED' | 'PAUSED';
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateVacancyDTO {
  title: string;
  description: string;
  requirements: string;
  location: string;
  salary?: number;
}

/**
 * Check Personal API health
 */
export async function checkPersonalApiHealth(): Promise<ApiResponse<HealthResponse>> {
  try {
    const response = await fetch(`${PERSONAL_API_URL}/health`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

/**
 * Check Recruiting API health
 */
export async function checkRecruitingApiHealth(): Promise<ApiResponse<HealthResponse>> {
  try {
    const response = await fetch(`${RECRUITING_API_URL}/health`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

/**
 * Check all APIs health status
 */
export async function checkAllApisHealth(): Promise<{
  personal: ApiResponse<HealthResponse>;
  recruiting: ApiResponse<HealthResponse>;
}> {
  const [personal, recruiting] = await Promise.all([
    checkPersonalApiHealth(),
    checkRecruitingApiHealth(),
  ]);

  return { personal, recruiting };
}

// ==================== VACANCIES API ====================

/**
 * Get all vacancies from Recruiting API
 */
export async function getVacancies(): Promise<ApiResponse<Vacancy[]>> {
  try {
    const response = await fetch(`${RECRUITING_API_URL}/vacancies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

/**
 * Create a new vacancy
 */
export async function createVacancy(vacancy: CreateVacancyDTO): Promise<ApiResponse<Vacancy>> {
  try {
    const response = await fetch(`${RECRUITING_API_URL}/vacancies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vacancy),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

/**
 * Get a single vacancy by ID
 */
export async function getVacancyById(id: number): Promise<ApiResponse<Vacancy>> {
  try {
    const response = await fetch(`${RECRUITING_API_URL}/vacancies/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}
