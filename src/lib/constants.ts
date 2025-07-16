export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "SaaSify"
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
export const APP_DOMAIN = process.env.NEXT_PUBLIC_APP_DOMAIN || "localhost:3000"

export const COMPANY = {
  name: APP_NAME,
  email: "support@saasify.dev",
  twitter: "@saasify",
  github: "saasify",
  website: "https://saasify.dev",
} as const

export const SUBSCRIPTION_TIERS = {
  FREE: "free",
  PRO: "pro",
  ENTERPRISE: "enterprise",
} as const

export const FEATURES = [
  {
    name: "Authentication",
    description:
      "Secure user authentication with email/password, OAuth, and magic links.",
    tier_required: SUBSCRIPTION_TIERS.FREE,
    icon: "Shield",
  },
  {
    name: "Payments",
    description:
      "Integrated payment processing with Stripe for subscriptions and one-time payments.",
    tier_required: SUBSCRIPTION_TIERS.FREE,
    icon: "CreditCard",
  },
  {
    name: "Analytics",
    description:
      "Real-time analytics dashboard to track user behavior and business metrics.",
    tier_required: SUBSCRIPTION_TIERS.PRO,
    icon: "BarChart",
  },
  {
    name: "API Management",
    description:
      "Powerful API with rate limiting, webhooks, and comprehensive documentation.",
    tier_required: SUBSCRIPTION_TIERS.PRO,
    icon: "Code",
  },
  {
    name: "Team Collaboration",
    description:
      "Invite team members, manage roles, and collaborate on projects together.",
    tier_required: SUBSCRIPTION_TIERS.PRO,
    icon: "Users",
  },
  {
    name: "Priority Support",
    description:
      "Get dedicated support with guaranteed response times and direct access to our team.",
    tier_required: SUBSCRIPTION_TIERS.ENTERPRISE,
    icon: "Headphones",
  },
] as const

export const PRICING_PLANS = [
  {
    name: "Free",
    tier: SUBSCRIPTION_TIERS.FREE,
    price: {
      monthly: 0,
      yearly: 0,
    },
    description: "Perfect for trying out our platform",
    features: [
      "Up to 3 projects",
      "Basic authentication",
      "Community support",
      "Basic analytics",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    tier: SUBSCRIPTION_TIERS.PRO,
    price: {
      monthly: 29,
      yearly: 290,
    },
    description: "For growing businesses and teams",
    features: [
      "Unlimited projects",
      "Advanced authentication",
      "Priority email support",
      "Advanced analytics",
      "API access",
      "Team collaboration",
      "Custom integrations",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    tier: SUBSCRIPTION_TIERS.ENTERPRISE,
    price: {
      monthly: null,
      yearly: null,
    },
    description: "For large organizations with custom needs",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "24/7 phone support",
      "Custom contracts & SLAs",
      "Advanced security features",
      "Dedicated account manager",
      "On-premise deployment",
    ],
    cta: "Contact Sales",
    popular: false,
  },
] as const