import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/lib/supabase'
import { useAuthStore } from '@/store/authStore'
import { QUERY_KEYS } from '@/constants'

export function useProfile() {
  const user = useAuthStore((s) => s.user)
  const setProfile = useAuthStore((s) => s.setProfile)

  return useQuery({
    queryKey: QUERY_KEYS.profile,
    queryFn: async () => {
      if (!user) return null
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()
      if (error) throw error
      setProfile(data)
      return data
    },
    enabled: !!user,
  })
}
