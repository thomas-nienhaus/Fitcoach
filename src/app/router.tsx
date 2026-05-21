import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell'
import { ROUTES } from '@/constants'
import { useAuthStore } from '@/store/authStore'

// Lazy page imports
import { lazy } from 'react'

const DashboardPage = lazy(() => import('@/features/dashboard/DashboardPage'))
const NutritionPage = lazy(() => import('@/features/nutrition/NutritionPage'))
const ActivitiesPage = lazy(() => import('@/features/activities/ActivitiesPage'))
const GoalsPage = lazy(() => import('@/features/goals/GoalsPage'))
const AiCoachPage = lazy(() => import('@/features/ai-coach/AiCoachPage'))
const ProfilePage = lazy(() => import('@/features/profile/ProfilePage'))
const AuthPage = lazy(() => import('@/features/auth/AuthPage'))
const OnboardingPage = lazy(() => import('@/features/onboarding/OnboardingPage'))

function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, isInitialized } = useAuthStore()
  if (!isInitialized) return null
  if (!user) return <Navigate to={ROUTES.AUTH} replace />
  return <>{children}</>
}

export const router = createBrowserRouter([
  {
    path: ROUTES.AUTH,
    element: <AuthPage />,
  },
  {
    path: ROUTES.ONBOARDING,
    element: (
      <AuthGuard>
        <OnboardingPage />
      </AuthGuard>
    ),
  },
  {
    path: '/',
    element: (
      <AuthGuard>
        <AppShell />
      </AuthGuard>
    ),
    children: [
      { index: true, element: <Navigate to={ROUTES.DASHBOARD} replace /> },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'nutrition/*', element: <NutritionPage /> },
      { path: 'activities/*', element: <ActivitiesPage /> },
      { path: 'goals/*', element: <GoalsPage /> },
      { path: 'coach/*', element: <AiCoachPage /> },
      { path: 'profile/*', element: <ProfilePage /> },
    ],
  },
  {
    path: '*',
    element: <Navigate to={ROUTES.DASHBOARD} replace />,
  },
])
