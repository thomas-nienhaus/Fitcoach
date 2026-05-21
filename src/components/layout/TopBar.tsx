import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface TopBarProps {
  title?: string
  showBack?: boolean
  rightAction?: React.ReactNode
  className?: string
  transparent?: boolean
}

export function TopBar({
  title,
  showBack,
  rightAction,
  className,
  transparent,
}: TopBarProps) {
  const navigate = useNavigate()

  return (
    <header
      className={cn(
        'sticky top-0 z-40 flex h-14 items-center justify-between px-4',
        !transparent && 'bg-background/80 backdrop-blur-xl border-b border-border/50',
        className
      )}
    >
      <div className="flex items-center gap-3 min-w-0">
        {showBack && (
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => navigate(-1)}
            className="-ml-1 shrink-0"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        )}
        {title && (
          <h1 className="text-base font-semibold truncate">{title}</h1>
        )}
      </div>
      <div className="flex items-center gap-1 shrink-0">
        {rightAction ?? (
          <Button variant="ghost" size="icon-sm" className="relative">
            <Bell className="h-5 w-5" />
          </Button>
        )}
      </div>
    </header>
  )
}
