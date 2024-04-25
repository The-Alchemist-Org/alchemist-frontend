import { useCallback, useEffect, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from 'constants/QueryKeys';
import { getMe } from 'api/Auth';
import { AuthDTO } from 'api/Auth/types';

export const useAuthContext = () => {
  const queryClient = useQueryClient();
  const [localToken, setLocalToken] = useState<string | null>(localStorage.getItem('token'));

  const setToken = useCallback((newToken: string) => {
    setLocalToken(newToken);
    localStorage.setItem('token', newToken);
  }, [setLocalToken]);

  const clearToken = useCallback(() => {
    setLocalToken(null);
    localStorage.removeItem('token');
  }, [setLocalToken]);

  const {
    data: user, isLoading, isFetched, remove,
  } = useQuery<AuthDTO>(
    [queryKeys.VERIFY_TOKEN],
    async () => {
      const response = await getMe();
      return response.data;
    },
    {
      retry: false,
      staleTime: Infinity,
      enabled: !!localToken,
    },
  );

  const logOut = useCallback(() => {
    localStorage.removeItem('refreshToken');
    clearToken();
    queryClient.clear();
    remove();
  }, [remove, clearToken, queryClient]);

  useEffect(() => {
    if (!localToken || (isFetched && !user)) {
      logOut();
    }
  }, [isFetched, user, localToken, logOut]);

  return {
    user,
    loadingUser: isLoading,
    isLoggedIn: !!user,
    hasToken: () => !!localToken,
    setToken,
    clearToken,
    logOut,
  };
};
