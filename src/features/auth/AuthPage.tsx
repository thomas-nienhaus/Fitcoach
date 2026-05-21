import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Dumbbell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { supabase } from '@/lib/supabase'
import { useAuthStore } from '@/store/authStore'
import { ROUTES } from '@/constants'
import { toast } from '@/hooks/useToast'

export default function AuthPage() {
  const navigate = useNavigate()
  const { user, isInitialized } = useAuthStore()

  useEffect(() => {
    if (isInitialized && user) {
      navigate(ROUTES.DASHBOARD, { replace: true })
    }
  }, [user, isInitialized, navigate])

  async function handleAppleSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'apple',
      options: {
        redirectTo: `${window.location.origin}${ROUTES.DASHBOARD}`,
        scopes: 'name email',
      },
    })
    if (error) {
      toast({ title: 'Aanmelden mislukt', description: error.message, variant: 'destructive' })
    }
  }

  return (
    <div className="min-h-dvh flex flex-col bg-background">
      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col items-center text-center gap-6"
        >
          {/* Logo */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-2xl scale-150" />
            <div className="relative h-24 w-24 rounded-3xl bg-gradient-brand flex items-center justify-center shadow-glow">
              <Dumbbell className="h-12 w-12 text-white" strokeWidth={1.5} />
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight">
              Fit Coach
            </h1>
            <p className="text-muted-foreground text-lg max-w-xs leading-relaxed">
              Jouw persoonlijke gezondheids- en fitnesscoach
            </p>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-3 gap-4 w-full max-w-xs mt-4">
            {[
              { emoji: '🥗', label: 'Voeding' },
              { emoji: '🏃', label: 'Training' },
              { emoji: '🤖', label: 'AI Coach' },
            ].map(({ emoji, label }) => (
              <div key={label} className="flex flex-col items-center gap-1.5 glass-card p-3">
                <span className="text-2xl">{emoji}</span>
                <span className="text-xs font-medium text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Auth buttons */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="px-6 pb-12 space-y-3"
      >
        <Button
          onClick={handleAppleSignIn}
          className="w-full h-14 gap-3 bg-foreground text-background hover:bg-foreground/90 text-base font-semibold rounded-2xl"
          size="xl"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Doorgaan met Apple
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          Door door te gaan ga je akkoord met onze{' '}
          <span className="text-primary">Servicevoorwaarden</span>
          {' '}en{' '}
          <span className="text-primary">Privacybeleid</span>
        </p>
      </motion.div>
    </div>
  )
}
