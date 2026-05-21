// Auto-maintained database types — regenerate with: supabase gen types typescript

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type ActivityLevel =
  | 'sedentary'
  | 'lightly_active'
  | 'moderately_active'
  | 'very_active'
  | 'extra_active'

export type GoalType =
  | 'weight_loss'
  | 'weight_gain'
  | 'maintenance'
  | 'running_5k'
  | 'running_10k'
  | 'running_half_marathon'
  | 'running_marathon'
  | 'strength'
  | 'habit'

export type Gender = 'male' | 'female' | 'other'

export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack'

export type WorkoutType =
  | 'running'
  | 'walking'
  | 'cycling'
  | 'strength'
  | 'swimming'
  | 'yoga'
  | 'hiit'
  | 'other'

export type InsightType =
  | 'motivation'
  | 'progress'
  | 'nutrition'
  | 'workout'
  | 'goal'
  | 'warning'

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: Profile
        Insert: Omit<Profile, 'created_at' | 'updated_at'>
        Update: Partial<Omit<Profile, 'id' | 'created_at'>>
      }
      goals: {
        Row: Goal
        Insert: Omit<Goal, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Goal, 'id' | 'created_at'>>
      }
      meals: {
        Row: Meal
        Insert: Omit<Meal, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Meal, 'id' | 'created_at'>>
      }
      meal_items: {
        Row: MealItem
        Insert: Omit<MealItem, 'id' | 'created_at'>
        Update: Partial<Omit<MealItem, 'id' | 'created_at'>>
      }
      nutrition_targets: {
        Row: NutritionTarget
        Insert: Omit<NutritionTarget, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<NutritionTarget, 'id' | 'created_at'>>
      }
      body_measurements: {
        Row: BodyMeasurement
        Insert: Omit<BodyMeasurement, 'id' | 'created_at'>
        Update: Partial<Omit<BodyMeasurement, 'id' | 'created_at'>>
      }
      workouts: {
        Row: Workout
        Insert: Omit<Workout, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Workout, 'id' | 'created_at'>>
      }
      workout_sets: {
        Row: WorkoutSet
        Insert: Omit<WorkoutSet, 'id' | 'created_at'>
        Update: Partial<Omit<WorkoutSet, 'id' | 'created_at'>>
      }
      running_plans: {
        Row: RunningPlan
        Insert: Omit<RunningPlan, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<RunningPlan, 'id' | 'created_at'>>
      }
      ai_insights: {
        Row: AiInsight
        Insert: Omit<AiInsight, 'id' | 'created_at'>
        Update: Partial<Omit<AiInsight, 'id' | 'created_at'>>
      }
      achievements: {
        Row: Achievement
        Insert: Omit<Achievement, 'id' | 'created_at'>
        Update: Partial<Omit<Achievement, 'id' | 'created_at'>>
      }
      activity_feed: {
        Row: ActivityFeedItem
        Insert: Omit<ActivityFeedItem, 'id' | 'created_at'>
        Update: never
      }
    }
  }
}

export interface Profile {
  id: string
  email: string | null
  full_name: string | null
  avatar_url: string | null
  date_of_birth: string | null
  gender: Gender | null
  height_cm: number | null
  activity_level: ActivityLevel | null
  onboarding_completed: boolean
  garmin_connected: boolean
  strava_connected: boolean
  created_at: string
  updated_at: string
}

export interface Goal {
  id: string
  user_id: string
  type: GoalType
  title: string
  description: string | null
  target_value: number | null
  current_value: number | null
  unit: string | null
  target_date: string | null
  is_active: boolean
  is_completed: boolean
  created_at: string
  updated_at: string
}

export interface Meal {
  id: string
  user_id: string
  name: string
  meal_type: MealType
  logged_at: string
  total_calories: number
  total_protein_g: number
  total_carbs_g: number
  total_fat_g: number
  notes: string | null
  photo_url: string | null
  is_favorite: boolean
  created_at: string
  updated_at: string
}

export interface MealItem {
  id: string
  meal_id: string
  user_id: string
  food_name: string
  brand_name: string | null
  barcode: string | null
  serving_size_g: number
  calories_per_100g: number
  protein_per_100g: number
  carbs_per_100g: number
  fat_per_100g: number
  calories: number
  protein_g: number
  carbs_g: number
  fat_g: number
  openfoodfacts_id: string | null
  created_at: string
}

export interface NutritionTarget {
  id: string
  user_id: string
  calories: number
  protein_g: number
  carbs_g: number
  fat_g: number
  effective_from: string
  created_at: string
  updated_at: string
}

export interface BodyMeasurement {
  id: string
  user_id: string
  measured_at: string
  weight_kg: number | null
  body_fat_percent: number | null
  muscle_mass_kg: number | null
  waist_cm: number | null
  hip_cm: number | null
  chest_cm: number | null
  arm_cm: number | null
  thigh_cm: number | null
  notes: string | null
  created_at: string
}

export interface Workout {
  id: string
  user_id: string
  name: string
  workout_type: WorkoutType
  started_at: string
  ended_at: string | null
  duration_minutes: number | null
  distance_km: number | null
  calories_burned: number | null
  avg_heart_rate: number | null
  max_heart_rate: number | null
  avg_pace_min_per_km: number | null
  elevation_gain_m: number | null
  notes: string | null
  garmin_activity_id: string | null
  strava_activity_id: string | null
  created_at: string
  updated_at: string
}

export interface WorkoutSet {
  id: string
  workout_id: string
  user_id: string
  exercise_name: string
  set_number: number
  reps: number | null
  weight_kg: number | null
  duration_seconds: number | null
  distance_m: number | null
  notes: string | null
  created_at: string
}

export interface RunningPlan {
  id: string
  user_id: string
  goal_type: GoalType
  title: string
  weeks_total: number
  current_week: number
  plan_data: Json
  is_active: boolean
  started_at: string | null
  target_completion_date: string | null
  created_at: string
  updated_at: string
}

export interface AiInsight {
  id: string
  user_id: string
  insight_type: InsightType
  title: string
  content: string
  data_snapshot: Json | null
  is_read: boolean
  created_at: string
}

export interface Achievement {
  id: string
  user_id: string
  key: string
  title: string
  description: string
  icon: string
  unlocked_at: string
  created_at: string
}

export interface ActivityFeedItem {
  id: string
  user_id: string
  event_type: string
  title: string
  description: string | null
  metadata: Json | null
  created_at: string
}
