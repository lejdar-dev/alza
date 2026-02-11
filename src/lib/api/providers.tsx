/**
 * This is the innermost component in the root laouy.tsx
 * It is resposible for providing react contexts or any client-dependent logic;
 */

'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
