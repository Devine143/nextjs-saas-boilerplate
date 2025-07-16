import { Shield, CreditCard, BarChart, Code, Users, Headphones } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Authentication",
    description: "Secure user authentication with email/password, OAuth, and magic links.",
    icon: Shield,
  },
  {
    title: "Payments",
    description: "Integrated payment processing with Stripe for subscriptions and one-time payments.",
    icon: CreditCard,
  },
  {
    title: "Analytics",
    description: "Real-time analytics dashboard to track user behavior and business metrics.",
    icon: BarChart,
  },
  {
    title: "API Management",
    description: "Powerful API with rate limiting, webhooks, and comprehensive documentation.",
    icon: Code,
  },
  {
    title: "Team Collaboration",
    description: "Invite team members, manage roles, and collaborate on projects together.",
    icon: Users,
  },
  {
    title: "Priority Support",
    description: "Get dedicated support with guaranteed response times and direct access to our team.",
    icon: Headphones,
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Everything You Need to
            <span className="gradient-text"> Launch Fast</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stop wasting time on boilerplate code. Focus on building your unique features.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}