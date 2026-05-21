import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Theme } from '@/types'

interface AppState {
  theme: Theme
  setTheme: (theme: Theme) => void

  activeTab: string
  setActiveTab: (tab: string) => void

  isAddMealOpen: boolean
  setAddMealOpen: (open: boolean) => void

  isAddWorkoutOpen: boolean
  setAddWorkoutOpen: (open: boolean) => void

  isAddWeightOpen: boolean
  setAddWeightOpen: (open: boolean) => void

  selectedDate: string
  setSelectedDate: (date: string) => void
}

function getTodayString(): string {
  return new Date().toISOString().split('T')[0]
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'system',
      setTheme: (theme) => set({ theme }),

      activeTab: 'dashboard',
      setActiveTab: (tab) => set({ activeTab: tab }),

      isAddMealOpen: false,
      setAddMealOpen: (open) => set({ isAddMealOpen: open }),

      isAddWorkoutOpen: false,
      setAddWorkoutOpen: (open) => set({ isAddWorkoutOpen: open }),

      isAddWeightOpen: false,
      setAddWeightOpen: (open) => set({ isAddWeightOpen: open }),

      selectedDate: getTodayString(),
      setSelectedDate: (date) => set({ selectedDate: date }),
    }),
    {
      name: 'fitcoach-app',
      partialize: (state) => ({ theme: state.theme }),
    }
  )
)
