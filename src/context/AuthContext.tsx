'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { UserDto } from '../api/generated';
import { authApi } from '../api/apiClient';
import { getAccessToken, setAccessToken } from '../api/authStore';
import { useQuery } from '@tanstack/react-query';

interface AuthContextType {
  user: UserDto | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (token: string, user: UserDto) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserDto | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Check for existing token and fetch user on mount
  const { isLoading: isFetchingUser, refetch: fetchUser } = useQuery({
    queryKey: ['me'],
    queryFn: async () => {
      try {
        const response = await authApi.authMeGet();
        return response.data;
      } catch (error) {
        return null;
      }
    },
    enabled: false, // Don't run automatically, we control it
  });

  useEffect(() => {
    const initAuth = async () => {
      const token = getAccessToken();
      if (token) {
        const userData = await fetchUser();
        if (userData.data) {
          setUser(userData.data);
        } else {
          // Token might be invalid
          setAccessToken(null);
        }
      }
      setIsInitialized(true);
    };
    initAuth();
  }, [fetchUser]);

  const login = (token: string, newUser: UserDto) => {
    setAccessToken(token);
    setUser(newUser);
  };

  const logout = () => {
    setAccessToken(null);
    setUser(null);
    authApi.authLogoutPost().catch(console.error); // Best effort logout
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading: !isInitialized || isFetchingUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
