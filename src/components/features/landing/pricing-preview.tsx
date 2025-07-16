import Link from "next/link"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { PRICING_PLANS } from "@/lib/constants"

export function PricingPreview() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background/50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Simple, Transparent
            <span className="gradient-text"> Pricing</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the perfect plan for your business. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "relative overflow-hidden transition-shadow",
                plan.popular && "border-primary shadow-lg scale-105"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  {plan.price.monthly !== null ? (
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">${plan.price.monthly}</span>
                      <span className="text-muted-foreground ml-2">/month</span>
                    </div>
                  ) : (
                    <div className="text-4xl font-bold">Custom</div>
                  )}
                  {plan.price.yearly !== null && (
                    <p className="text-sm text-muted-foreground mt-1">
                      ${plan.price.yearly}/year (save ${(plan.price.monthly! * 12 - plan.price.yearly).toFixed(0)})
                    </p>
                  )}
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href={plan.tier === "enterprise" ? "/contact" : "/signup"}>
                    {plan.cta}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            All plans include unlimited projects, SSL certificates, and 99.9% uptime SLA.
          </p>
          <Button variant="link" asChild className="mt-4">
            <Link href="/pricing">View full feature comparison →</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}