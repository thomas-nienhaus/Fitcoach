import { useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useAuthStore } from '@/store/authStore'
import { queryClient } from '@/lib/queryClient'

export function useAuthListener() {
  const { setUser, setSession, setInitialized, setLoading, reset } = useAuthStore()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      setInitialized(true)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
        setUser(session?.user ?? null)
        if (!session) {
          reset()
          queryClient.clear()
        }
      }
    )

    return () => subscription.unsubscribe()
  }, [setUser, setSession, setInitialized, setLoading, reset])
}

export function useCurrentUser() {
  return useAuthStore((s) => s.user)
}

export function useCurrentProfile() {
  return useAuthStore((s) => s.profile)
}

export function useIsAuthenticated() {
  return useAuthStore((s) => s.user !== null)
}
