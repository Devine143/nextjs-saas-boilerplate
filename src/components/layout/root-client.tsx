"use client"

import * as React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

interface RootClientLayoutProps {
  children: React.ReactNode
}

export function RootClientLayout({ children }: RootClientLayoutProps) {
  return (
    <body
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable
      )}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </body>
  )
}
