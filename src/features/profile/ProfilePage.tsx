import { TopBar } from '@/components/layout/TopBar'
import { Button } from '@/components/ui/button'
import { supabase } from '@/lib/supabase'
import { toast } from '@/hooks/useToast'

export default function ProfilePage() {
  async function handleSignOut() {
    const { error } = await supabase.auth.signOut()
    if (error) toast({ title: 'Fout', description: error.message, variant: 'destructive' })
  }

  return (
    <div>
      <TopBar title="Profiel" />
      <div className="flex flex-col items-center justify-center gap-4 h-64">
        <p className="text-muted-foreground">Profiel module — Phase 2</p>
        <Button variant="outline" onClick={handleSignOut}>
          Uitloggen
        </Button>
      </div>
    </div>
  )
}
