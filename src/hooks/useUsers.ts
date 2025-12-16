import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { usersApi } from '../api/apiClient';
import { UserDto } from '../api/generated';

export function useUsers(page: number = 1, size: number = 20, search?: string) {
  return useQuery({
    queryKey: ['users', page, size, search],
    queryFn: async () => {
      const response = await usersApi.usersGet(page, size, search);
      return response.data;
    },
  });
}

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (user: UserDto) => usersApi.usersPost(user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}
