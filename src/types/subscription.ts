export type BillingInterval = "monthly" | "yearly"

export interface SubscriptionPlan {
  id: string
  name: string
  description: string
  price: {
    monthly: number
    yearly: number
  }
  features: string[]
  limits: {
    projects?: number
    team_members?: number
    api_calls?: number
    storage_gb?: number
  }
  stripe_price_ids: {
    monthly: string
    yearly: string
  }
}

export interface CustomerSubscription {
  id: string
  customer_id: string
  subscription_id: string
  plan_id: string
  status: "active" | "canceled" | "past_due" | "trialing" | "unpaid"
  current_period_start: string
  current_period_end: string
  cancel_at_period_end: boolean
  trial_end?: string | null
  created_at: string
  updated_at: string
}

export interface PaymentMethod {
  id: string
  type: "card"
  card: {
    brand: string
    last4: string
    exp_month: number
    exp_year: number
  }
  is_default: boolean
  created_at: string
}

export interface Invoice {
  id: string
  invoice_number: string
  amount_paid: number
  amount_due: number
  currency: string
  status: "draft" | "open" | "paid" | "uncollectible" | "void"
  period_start: string
  period_end: string
  invoice_pdf?: string
  created_at: string
}

export interface UsageRecord {
  id: string
  subscription_id: string
  metric: string
  quantity: number
  timestamp: string
}

export interface BillingAddress {
  line1: string
  line2?: string
  city: string
  state?: string
  postal_code: string
  country: string
}