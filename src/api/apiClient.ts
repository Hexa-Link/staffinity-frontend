import axios from 'axios';
import { AuthApi, UsersApi, ProfilesApi, OrganizationsApi, ProjectsApi, FilesApi, Configuration } from './generated';
import { getAccessToken, setAccessToken } from './authStore';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com/api/v1';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // for refresh token cookie
});

axiosInstance.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // Call refresh endpoint
        // Note: We use a fresh axios call to avoid interceptors if needed, 
        // but here we just need to hit the endpoint. 
        // The refresh endpoint is /auth/refresh
        const response = await axios.post(`${BASE_URL}/auth/refresh`, {}, { withCredentials: true });
        const { accessToken } = response.data;
        setAccessToken(accessToken);
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        setAccessToken(null);
        // Redirect to login or handle error
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

const configuration = new Configuration({
  basePath: BASE_URL,
});

export const authApi = new AuthApi(configuration, BASE_URL, axiosInstance);
export const usersApi = new UsersApi(configuration, BASE_URL, axiosInstance);
export const profilesApi = new ProfilesApi(configuration, BASE_URL, axiosInstance);
export const organizationsApi = new OrganizationsApi(configuration, BASE_URL, axiosInstance);
export const projectsApi = new ProjectsApi(configuration, BASE_URL, axiosInstance);
export const filesApi = new FilesApi(configuration, BASE_URL, axiosInstance);

export default axiosInstance;
