import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const isTestEnv =
  typeof process !== 'undefined' && process.env.JEST_WORKER_ID !== undefined;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      gcTime: Infinity,
      enabled: !isTestEnv,
    },
  },
});

type Props = {
  children: React.ReactNode;
};

export function QueryProvider({children}: Props) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
