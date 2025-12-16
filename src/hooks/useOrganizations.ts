import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { organizationsApi } from '../api/apiClient';
import { OrganizationDto } from '../api/generated';

export function useOrganizations() {
  return useQuery({
    queryKey: ['organizations'],
    queryFn: async () => {
      const response = await organizationsApi.orgsGet();
      return response.data;
    },
  });
}

// Note: Update organization endpoint is not in the minimal spec yet, 
// but I will add a placeholder hook for it assuming it might exist or I'll add it to spec later.
// For now, I'll just use the GET hook.
