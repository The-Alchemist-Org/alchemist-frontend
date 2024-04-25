import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster as ToastProvider } from 'react-hot-toast';
import { AuthContextProvider } from './context';
import { Router } from './modules';

import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60, // 1 hour
      refetchOnWindowFocus: false,
    },
  },
});

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthContextProvider>
      <ToastProvider position="top-center" />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      <Router />
    </AuthContextProvider>
  </QueryClientProvider>
);
