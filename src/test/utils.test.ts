import { describe, it, expect } from 'vitest'
import {
  calculateBMI,
  calculateBMR,
  calculateTDEE,
  calculateCalorieTarget,
  calculateMacroTargets,
  formatPace,
  formatDistance,
  formatDuration,
  formatPercent,
  clamp,
} from '@/lib/utils'

describe('calculateBMI', () => {
  it('calculates BMI correctly', () => {
    expect(calculateBMI(70, 175)).toBeCloseTo(22.86, 1)
  })
})

describe('calculateBMR', () => {
  it('calculates male BMR (Mifflin-St Jeor)', () => {
    // 10*80 + 6.25*180 - 5*30 + 5 = 1780
    const bmr = calculateBMR(80, 180, 30, 'male')
    expect(bmr).toBeCloseTo(1780, 0)
  })

  it('calculates female BMR', () => {
    // 10*65 + 6.25*165 - 5*28 - 161 = 1380.25
    const bmr = calculateBMR(65, 165, 28, 'female')
    expect(bmr).toBeCloseTo(1380, 0)
  })
})

describe('calculateTDEE', () => {
  it('applies the sedentary multiplier', () => {
    expect(calculateTDEE(2000, 'sedentary')).toBe(2400)
  })

  it('applies the very_active multiplier', () => {
    expect(calculateTDEE(2000, 'very_active')).toBe(3450)
  })
})

describe('calculateCalorieTarget', () => {
  it('reduces calories for weight loss', () => {
    expect(calculateCalorieTarget(2500, 'weight_loss')).toBe(2000)
  })

  it('adds calories for weight gain', () => {
    expect(calculateCalorieTarget(2500, 'weight_gain')).toBe(2800)
  })

  it('returns tdee for maintenance', () => {
    expect(calculateCalorieTarget(2500, 'maintenance')).toBe(2500)
  })

  it('never goes below 1200 kcal', () => {
    expect(calculateCalorieTarget(1400, 'weight_loss')).toBe(1200)
  })
})

describe('calculateMacroTargets', () => {
  it('splits macros at correct ratios', () => {
    const result = calculateMacroTargets(2000)
    // 30% protein = 600 kcal / 4 = 150g
    expect(result.protein_g).toBe(150)
    // 40% carbs = 800 kcal / 4 = 200g
    expect(result.carbs_g).toBe(200)
    // 30% fat = 600 kcal / 9 ≈ 67g
    expect(result.fat_g).toBe(67)
  })
})

describe('formatPace', () => {
  it('formats pace correctly', () => {
    expect(formatPace(5.5)).toBe('5:30 /km')
    expect(formatPace(6)).toBe('6:00 /km')
  })
})

describe('formatDistance', () => {
  it('formats km distances', () => {
    expect(formatDistance(10.5)).toBe('10.50 km')
  })

  it('formats sub-km distances in meters', () => {
    expect(formatDistance(0.4)).toBe('400 m')
  })
})

describe('formatDuration', () => {
  it('formats short durations', () => {
    expect(formatDuration(45)).toBe('45 min')
  })

  it('formats long durations with hours', () => {
    expect(formatDuration(90)).toBe('1u 30m')
  })
})

describe('formatPercent', () => {
  it('calculates percentage', () => {
    expect(formatPercent(75, 100)).toBe(75)
  })

  it('caps at 100', () => {
    expect(formatPercent(150, 100)).toBe(100)
  })

  it('handles zero total', () => {
    expect(formatPercent(50, 0)).toBe(0)
  })
})

describe('clamp', () => {
  it('clamps within bounds', () => {
    expect(clamp(5, 0, 10)).toBe(5)
    expect(clamp(-1, 0, 10)).toBe(0)
    expect(clamp(15, 0, 10)).toBe(10)
  })
})
