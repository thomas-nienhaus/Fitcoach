import { TopBar } from '@/components/layout/TopBar'

export default function NutritionPage() {
  return (
    <div>
      <TopBar title="Voeding" />
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">Voeding module — Phase 4</p>
      </div>
    </div>
  )
}
