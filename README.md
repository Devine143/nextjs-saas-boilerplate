# Next.js SaaS Boilerplate

A production-ready Next.js 14+ SaaS boilerplate with TypeScript, Tailwind CSS, shadcn/ui, and modern best practices.

## 🚀 Features

- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for rapid styling
- **shadcn/ui** for beautiful, accessible components
- **Dark Mode** support with next-themes
- **Responsive Design** with mobile-first approach
- **Production-ready** folder structure
- **ESLint & Prettier** pre-configured
- **Git** ready with proper .gitignore

## 📦 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Devine143/nextjs-saas-boilerplate.git
cd nextjs-saas-boilerplate
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Copy the environment variables:
```bash
cp .env.local.example .env.local
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── (auth)/            # Auth route group (ready for auth pages)
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Layout components (header, footer, nav)
│   ├── features/         # Feature-specific components
│   └── common/           # Shared components
├── lib/                  # Utility functions and helpers
│   ├── utils.ts         # Utility functions
│   ├── constants.ts     # App constants
│   └── types.ts         # Shared TypeScript types
├── styles/              # Additional styles
└── types/               # TypeScript type definitions
```

## 🎨 Customization

### Brand Colors

Update the brand colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Your primary color shades
  },
  secondary: {
    // Your secondary color shades
  },
  accent: {
    // Your accent color shades
  }
}
```

### Components

All UI components are built with [shadcn/ui](https://ui.shadcn.com/). To add new components:

```bash
npx shadcn-ui@latest add [component-name]
```

## 🛠️ Built With

- [Next.js 14+](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management

## 📝 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Add your environment variables here
NEXT_PUBLIC_APP_NAME="SaaSify"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Future integrations (placeholders)
# SUPABASE_URL=
# SUPABASE_ANON_KEY=
# STRIPE_PUBLIC_KEY=
# STRIPE_SECRET_KEY=
```

## 🚀 Deployment

This boilerplate is ready to deploy on:

- [Vercel](https://vercel.com) (recommended)
- [Netlify](https://netlify.com)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- Any platform that supports Next.js

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ for the SaaS community
