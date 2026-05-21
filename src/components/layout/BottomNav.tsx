import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  Utensils,
  Dumbbell,
  Target,
  Sparkles,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { ROUTES } from '@/constants'

const navItems = [
  { to: ROUTES.DASHBOARD, icon: LayoutDashboard, label: 'Dashboard' },
  { to: ROUTES.NUTRITION, icon: Utensils, label: 'Voeding' },
  { to: ROUTES.ACTIVITIES, icon: Dumbbell, label: 'Activiteit' },
  { to: ROUTES.GOALS, icon: Target, label: 'Doelen' },
  { to: ROUTES.AI_COACH, icon: Sparkles, label: 'Coach' },
]

export function BottomNav() {
  const location = useLocation()

  return (
    <nav className="tab-bar">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map(({ to, icon: Icon, label }) => {
          const isActive = location.pathname === to ||
            (to !== ROUTES.DASHBOARD && location.pathname.startsWith(to))

          return (
            <NavLink
              key={to}
              to={to}
              className="flex flex-col items-center justify-center flex-1 py-1 no-select"
            >
              <div className="relative flex flex-col items-center gap-0.5">
                {isActive && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute -inset-2 rounded-xl bg-primary/10"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
                <Icon
                  className={cn(
                    'relative z-10 h-5 w-5 transition-colors duration-150',
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  )}
                  strokeWidth={isActive ? 2.5 : 1.75}
                />
                <span
                  className={cn(
                    'relative z-10 text-[10px] font-medium transition-colors duration-150',
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  )}
                >
                  {label}
                </span>
              </div>
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}
