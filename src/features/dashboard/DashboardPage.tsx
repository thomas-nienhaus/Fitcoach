import { motion } from 'framer-motion'
import { TopBar } from '@/components/layout/TopBar'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { formatDate } from '@/lib/utils'

// Full dashboard implementation comes in Phase 3
export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-0">
      <TopBar
        rightAction={
          <div className="h-8 w-8 rounded-full bg-gradient-brand flex items-center justify-center">
            <span className="text-white text-xs font-bold">FC</span>
          </div>
        }
      />

      <div className="px-4 pb-4 space-y-4">
        {/* Date header */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-2"
        >
          <p className="text-muted-foreground text-sm">
            {formatDate(new Date(), 'EEEE d MMMM')}
          </p>
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </motion.div>

        {/* Placeholder cards */}
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Card>
              <CardContent className="pt-5">
                <Skeleton className="h-4 w-32 mb-3" />
                <Skeleton className="h-8 w-24 mb-2" />
                <Skeleton className="h-2 w-full" />
              </CardContent>
            </Card>
          </motion.div>
        ))}

        <p className="text-center text-sm text-muted-foreground py-4">
          Volledig dashboard komt in Phase 3 🚀
        </p>
      </div>
    </div>
  )
}
