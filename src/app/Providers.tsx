'use client'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { getQueryClient } from '@/app/get-query-client'
import { Toaster } from 'react-hot-toast';
import { UserProvider } from '@/context/UserContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
      {children}
      <Toaster position="bottom-right" reverseOrder={false} />
      </UserProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
