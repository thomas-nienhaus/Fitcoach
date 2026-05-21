import { Suspense } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from '@/lib/queryClient'
import { useAuthListener } from '@/hooks/useAuth'
import { useTheme } from '@/hooks/useTheme'
import { Toaster } from '@/components/ui/toaster'
import { Skeleton } from '@/components/ui/skeleton'

function AppInit({ children }: { children: React.ReactNode }) {
  useAuthListener()
  useTheme()
  return <>{children}</>
}

function PageLoader() {
  return (
    <div className="flex flex-col gap-4 p-4 min-h-dvh">
      <Skeleton className="h-14 w-full" />
      <Skeleton className="h-48 w-full" />
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-32 w-full" />
    </div>
  )
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AppInit>
        <Suspense fallback={<PageLoader />}>
          {children}
        </Suspense>
        <Toaster />
        {import.meta.env.DEV && <ReactQueryDevtools position="bottom" />}
      </AppInit>
    </QueryClientProvider>
  )
}
