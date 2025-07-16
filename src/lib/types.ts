// User types
export interface User {
  id: string
  email: string
  name?: string | null
  avatar_url?: string | null
  created_at: string
  updated_at: string
}

// Subscription types
export enum SubscriptionTier {
  FREE = "free",
  PRO = "pro",
  ENTERPRISE = "enterprise",
}

export interface Subscription {
  id: string
  user_id: string
  tier: SubscriptionTier
  status: "active" | "canceled" | "past_due" | "trialing"
  current_period_start: string
  current_period_end: string
  cancel_at?: string | null
  canceled_at?: string | null
  created_at: string
  updated_at: string
}

// Feature types
export interface Feature {
  name: string
  description: string
  tier_required: SubscriptionTier
  icon?: string
}

// API Response types
export interface ApiResponse<T = any> {
  data?: T
  error?: ApiError
  message?: string
  success: boolean
}

export interface ApiError {
  code: string
  message: string
  details?: Record<string, any>
}

// Pagination types
export interface PaginationParams {
  page?: number
  limit?: number
  sort?: string
  order?: "asc" | "desc"
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

// Form types
export interface ContactFormData {
  name: string
  email: string
  company?: string
  message: string
}

// Pricing types
export interface PricingPlan {
  name: string
  tier: SubscriptionTier
  price: {
    monthly: number | null
    yearly: number | null
  }
  description: string
  features: string[]
  cta: string
  popular: boolean
}