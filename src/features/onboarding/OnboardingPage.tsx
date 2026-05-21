import { motion } from 'framer-motion'
import { Dumbbell } from 'lucide-react'

// Full onboarding implementation comes in Phase 2
export default function OnboardingPage() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="h-16 w-16 rounded-2xl bg-gradient-brand flex items-center justify-center mx-auto">
          <Dumbbell className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold">Welkom bij Fit Coach</h1>
        <p className="text-muted-foreground">Onboarding komt in Phase 2</p>
      </motion.div>
    </div>
  )
}
