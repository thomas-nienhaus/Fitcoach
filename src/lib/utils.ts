import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format, formatDistanceToNow, isToday, isYesterday } from 'date-fns'
import { nl } from 'date-fns/locale'
import { ACTIVITY_MULTIPLIERS, CALORIES_PER_GRAM, DEFAULT_MACRO_SPLIT } from '@/constants'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ─── Date formatting (Dutch) ───────────────────────────────────────────────

export function formatDate(date: string | Date, fmt = 'd MMMM yyyy'): string {
  return format(new Date(date), fmt, { locale: nl })
}

export function formatDateShort(date: string | Date): string {
  return format(new Date(date), 'd MMM', { locale: nl })
}

export function formatTime(date: string | Date): string {
  return format(new Date(date), 'HH:mm', { locale: nl })
}

export function formatRelative(date: string | Date): string {
  const d = new Date(date)
  if (isToday(d)) return 'Vandaag'
  if (isYesterday(d)) return 'Gisteren'
  return formatDistanceToNow(d, { addSuffix: true, locale: nl })
}

export function toDateString(date: Date = new Date()): string {
  return format(date, 'yyyy-MM-dd')
}

// ─── Number formatting ────────────────────────────────────────────────────

export function formatWeight(kg: number): string {
  return `${kg.toFixed(1)} kg`
}

export function formatCalories(kcal: number): string {
  return Math.round(kcal).toLocaleString('nl-NL')
}

export function formatMacro(grams: number): string {
  return `${Math.round(grams)}g`
}

export function formatDistance(km: number): string {
  if (km < 1) return `${Math.round(km * 1000)} m`
  return `${km.toFixed(2)} km`
}

export function formatPace(minPerKm: number): string {
  const min = Math.floor(minPerKm)
  const sec = Math.round((minPerKm - min) * 60)
  return `${min}:${sec.toString().padStart(2, '0')} /km`
}

export function formatDuration(minutes: number): string {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  if (h === 0) return `${m} min`
  return `${h}u ${m}m`
}

export function formatPercent(value: number, total: number): number {
  if (total === 0) return 0
  return Math.min(100, Math.round((value / total) * 100))
}

// ─── Health calculations ──────────────────────────────────────────────────

export function calculateBMI(weightKg: number, heightCm: number): number {
  const heightM = heightCm / 100
  return weightKg / (heightM * heightM)
}

export function getBMICategory(bmi: number): string {
  if (bmi < 18.5) return 'Ondergewicht'
  if (bmi < 25) return 'Normaal gewicht'
  if (bmi < 30) return 'Overgewicht'
  return 'Obesitas'
}

export function calculateBMR(
  weightKg: number,
  heightCm: number,
  ageYears: number,
  gender: 'male' | 'female' | 'other'
): number {
  // Mifflin-St Jeor equation
  const base = 10 * weightKg + 6.25 * heightCm - 5 * ageYears
  if (gender === 'male') return base + 5
  if (gender === 'female') return base - 161
  return base - 78 // average for other
}

export function calculateTDEE(bmr: number, activityLevel: string): number {
  const multiplier = ACTIVITY_MULTIPLIERS[activityLevel] ?? 1.2
  return Math.round(bmr * multiplier)
}

export function calculateCalorieTarget(
  tdee: number,
  goalType: string
): number {
  switch (goalType) {
    case 'weight_loss':
      return Math.max(1200, tdee - 500)
    case 'weight_gain':
      return tdee + 300
    default:
      return tdee
  }
}

export function calculateMacroTargets(calorieTarget: number) {
  const protein_g = Math.round(
    (calorieTarget * DEFAULT_MACRO_SPLIT.protein) / CALORIES_PER_GRAM.protein
  )
  const carbs_g = Math.round(
    (calorieTarget * DEFAULT_MACRO_SPLIT.carbs) / CALORIES_PER_GRAM.carbs
  )
  const fat_g = Math.round(
    (calorieTarget * DEFAULT_MACRO_SPLIT.fat) / CALORIES_PER_GRAM.fat
  )
  return { protein_g, carbs_g, fat_g }
}

export function getAgeFromDOB(dob: string): number {
  const today = new Date()
  const birth = new Date(dob)
  let age = today.getFullYear() - birth.getFullYear()
  const m = today.getMonth() - birth.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--
  return age
}

// ─── Color helpers ────────────────────────────────────────────────────────

export function getProgressColor(percent: number): string {
  if (percent >= 100) return 'text-destructive'
  if (percent >= 80) return 'text-warning'
  return 'text-primary'
}

export function getMacroProgress(consumed: number, target: number): number {
  return formatPercent(consumed, target)
}

// ─── Misc ─────────────────────────────────────────────────────────────────

export function generateId(): string {
  return crypto.randomUUID()
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}
