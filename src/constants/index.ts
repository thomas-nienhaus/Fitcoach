export const APP_NAME = 'Fit Coach'
export const APP_VERSION = '0.1.0'

// Dutch locale
export const LOCALE = 'nl-NL'
export const TIMEZONE = 'Europe/Amsterdam'

// Nutrition
export const CALORIES_PER_GRAM = {
  protein: 4,
  carbs: 4,
  fat: 9,
} as const

export const MACRO_COLORS = {
  protein: '#3b82f6',  // blue-500
  carbs: '#f59e0b',    // amber-500
  fat: '#f43f5e',      // rose-500
  calories: '#f97316', // orange-500
} as const

export const MEAL_TYPE_LABELS: Record<string, string> = {
  breakfast: 'Ontbijt',
  lunch: 'Lunch',
  dinner: 'Avondeten',
  snack: 'Tussendoor',
}

export const MEAL_TYPE_ICONS: Record<string, string> = {
  breakfast: '🌅',
  lunch: '☀️',
  dinner: '🌙',
  snack: '🍎',
}

// Activity
export const WORKOUT_TYPE_LABELS: Record<string, string> = {
  running: 'Hardlopen',
  walking: 'Wandelen',
  cycling: 'Fietsen',
  strength: 'Krachttraining',
  swimming: 'Zwemmen',
  yoga: 'Yoga',
  hiit: 'HIIT',
  other: 'Overig',
}

// Goals
export const GOAL_TYPE_LABELS: Record<string, string> = {
  weight_loss: 'Afvallen',
  weight_gain: 'Aankomen',
  maintenance: 'Op gewicht blijven',
  running_5k: '5K hardlopen',
  running_10k: '10K hardlopen',
  running_half_marathon: 'Halve marathon',
  running_marathon: 'Marathon',
  strength: 'Kracht opbouwen',
  habit: 'Gewoonte',
}

export const ACTIVITY_LEVEL_LABELS: Record<string, string> = {
  sedentary: 'Zittend (weinig/geen sport)',
  lightly_active: 'Licht actief (1-3 dagen/week)',
  moderately_active: 'Matig actief (3-5 dagen/week)',
  very_active: 'Zeer actief (6-7 dagen/week)',
  extra_active: 'Extra actief (2x per dag)',
}

// BMR multipliers (Harris-Benedict)
export const ACTIVITY_MULTIPLIERS: Record<string, number> = {
  sedentary: 1.2,
  lightly_active: 1.375,
  moderately_active: 1.55,
  very_active: 1.725,
  extra_active: 1.9,
}

// Default macro split percentages
export const DEFAULT_MACRO_SPLIT = {
  protein: 0.3,  // 30%
  carbs: 0.4,    // 40%
  fat: 0.3,      // 30%
} as const

// Routes
export const ROUTES = {
  HOME: '/',
  AUTH: '/auth',
  ONBOARDING: '/onboarding',
  DASHBOARD: '/dashboard',
  NUTRITION: '/nutrition',
  NUTRITION_LOG: '/nutrition/log',
  ACTIVITIES: '/activities',
  ACTIVITIES_LOG: '/activities/log',
  GOALS: '/goals',
  AI_COACH: '/coach',
  PROFILE: '/profile',
  SETTINGS: '/profile/settings',
} as const

// Query keys
export const QUERY_KEYS = {
  profile: ['profile'] as const,
  goals: ['goals'] as const,
  meals: (date?: string) => ['meals', date] as const,
  mealItems: (mealId: string) => ['meal-items', mealId] as const,
  nutritionTargets: ['nutrition-targets'] as const,
  bodyMeasurements: ['body-measurements'] as const,
  workouts: (date?: string) => ['workouts', date] as const,
  workoutSets: (workoutId: string) => ['workout-sets', workoutId] as const,
  runningPlans: ['running-plans'] as const,
  aiInsights: ['ai-insights'] as const,
  achievements: ['achievements'] as const,
  activityFeed: ['activity-feed'] as const,
  dailyProgress: (date: string) => ['daily-progress', date] as const,
  weightTrend: (days: number) => ['weight-trend', days] as const,
} as const

// OpenFoodFacts
export const OFF_API_BASE = 'https://world.openfoodfacts.org/api/v2'

// Achievements
export const ACHIEVEMENT_KEYS = {
  FIRST_MEAL: 'first_meal',
  FIRST_WORKOUT: 'first_workout',
  FIRST_WEIGHT: 'first_weight',
  WEEK_STREAK: 'week_streak',
  MONTH_STREAK: 'month_streak',
  CALORIE_GOAL_WEEK: 'calorie_goal_week',
  FIRST_5K: 'first_5k',
  FIRST_10K: 'first_10k',
  WEIGHT_GOAL: 'weight_goal',
} as const
