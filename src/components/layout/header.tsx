"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/common/theme-toggle"
import { Navigation } from "./navigation"
import { cn } from "@/lib/utils"
import { APP_NAME } from "@/lib/constants"

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <div className="mr-4 flex md:mr-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl gradient-text">{APP_NAME}</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1">
          <Navigation />
        </div>

        {/* Right side actions */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
            
            {/* Auth Buttons - Replace with actual auth when implemented */}
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="md:hidden"
                  size="icon"
                  aria-label="Toggle Menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="/"
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      pathname === "/" ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    Home
                  </Link>
                  <Link
                    href="/features"
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      pathname === "/features" ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    Features
                  </Link>
                  <Link
                    href="/pricing"
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      pathname === "/pricing" ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/docs"
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      pathname === "/docs" ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    Documentation
                  </Link>
                  <hr className="my-4" />
                  <div className="flex flex-col space-y-2">
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/login">Sign In</Link>
                    </Button>
                    <Button asChild className="w-full">
                      <Link href="/signup">Get Started</Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  )
}