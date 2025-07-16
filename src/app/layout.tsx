import type { Metadata } from "next"
import "./globals.css"
import { RootClientLayout } from "@/components/layout/root-client"

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
      <RootClientLayout>{children}</RootClientLayout>
    </html>
  )
}
