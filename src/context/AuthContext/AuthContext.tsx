import React, {
  createContext, useContext, useMemo,
} from 'react';
import type { AuthDTO } from 'api/Auth/types';
import { useAuthContext as useAuthContextInternalState } from './hooks';

interface Props {
  children: React.ReactNode;
}

type AuthContextInterface = {
  user?: AuthDTO;
  isLoggedIn: boolean;
  loadingUser: boolean;
  hasToken: () => boolean;
  setToken: (token: string) => void;
  clearToken: () => void;
  logOut: () => void;
};

const AuthContext = createContext<AuthContextInterface>({
  user: undefined,
  isLoggedIn: false,
  loadingUser: true,
  setToken: () => { },
  hasToken: () => false,
  clearToken: () => { },
  logOut: () => { },
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: Props) => {
  const authContext = useAuthContextInternalState();

  const contextValue = useMemo(() => (authContext), [authContext]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
