import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: {
    default: "SaaSify - Build Your SaaS Faster",
    template: "%s | SaaSify",
  },
  description:
    "The ultimate Next.js SaaS boilerplate with authentication, payments, and everything you need to launch your SaaS quickly.",
  keywords: [
    "SaaS",
    "Next.js",
    "React",
    "TypeScript",
    "Boilerplate",
    "Starter",
  ],
  authors: [
    {
      name: "SaaSify",
      url: "https://saasify.dev",
    },
  ],
  creator: "SaaSify",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saasify.dev",
    title: "SaaSify - Build Your SaaS Faster",
    description:
      "The ultimate Next.js SaaS boilerplate with authentication, payments, and everything you need to launch your SaaS quickly.",
    siteName: "SaaSify",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaSify - Build Your SaaS Faster",
    description:
      "The ultimate Next.js SaaS boilerplate with authentication, payments, and everything you need to launch your SaaS quickly.",
    creator: "@saasify",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
    </html>
  )
}