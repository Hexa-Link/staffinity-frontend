import { useMutation } from '@tanstack/react-query';
import { authApi } from '../api/apiClient';
import { LoginRequest, ErrorResponse } from '../api/generated';
import { useAuth } from './useAuth';
import { AxiosError } from 'axios';

export function useLogin() {
  const { login } = useAuth();

  return useMutation({
    mutationFn: (credentials: LoginRequest) => authApi.authLoginPost(credentials),
    onSuccess: (response) => {
      const { accessToken, user } = response.data;
      if (accessToken && user) {
        login(accessToken, user);
      }
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      console.error('Login failed:', error.response?.data || error.message);
    },
  });
}
