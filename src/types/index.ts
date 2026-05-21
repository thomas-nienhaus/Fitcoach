export * from './database'

// App-level UI types

export interface MacroTotals {
  calories: number
  protein_g: number
  carbs_g: number
  fat_g: number
}

export interface DailyProgress {
  date: string
  consumed: MacroTotals
  target: MacroTotals
  burned: number
  remaining: number
}

export interface WeightTrend {
  date: string
  weight_kg: number
  moving_avg?: number
}

export interface RunningStats {
  total_distance_km: number
  total_runs: number
  avg_pace_min_per_km: number
  best_pace_min_per_km: number
  longest_run_km: number
}

export type Theme = 'light' | 'dark' | 'system'

export interface ToastMessage {
  id: string
  title: string
  description?: string
  variant?: 'default' | 'destructive' | 'success'
}

export interface OpenFoodFactsProduct {
  code: string
  product_name: string
  brands?: string
  nutriments: {
    energy_kcal_100g?: number
    proteins_100g?: number
    carbohydrates_100g?: number
    fat_100g?: number
  }
  image_url?: string
}
