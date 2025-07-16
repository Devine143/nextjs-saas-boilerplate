# Next.js SaaS Boilerplate

A production-ready Next.js 14+ SaaS boilerplate with TypeScript, Tailwind CSS, shadcn/ui, and modern best practices.

## 🚀 Use this Template

This repository is a **template repository**. You can create your own SaaS project from this template:

### Using GitHub (Recommended)
1. Click the **"Use this template"** button at the top of this repository
2. Choose **"Create a new repository"**
3. Give your new repository a name
4. Click **"Create repository from template"**

### Using Git CLI
```bash
# Clone the template (not a regular clone)
git clone --depth 1 https://github.com/Devine143/nextjs-saas-boilerplate.git my-saas-app
cd my-saas-app

# Remove the existing git history
rm -rf .git

# Initialize a new git repository
git init
git add .
git commit -m "Initial commit from Next.js SaaS Boilerplate"

# Add your own remote origin
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

## 🎯 Why Use This Template?

- ✅ **Save 40+ hours** of initial setup
- ✅ **Production-ready** from day one
- ✅ **Best practices** baked in
- ✅ **Fully typed** with TypeScript
- ✅ **Beautiful UI** with shadcn/ui
- ✅ **Dark mode** included
- ✅ **SEO optimized** structure
- ✅ **Performance focused** configuration

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
- **GitHub Actions** CI/CD pipeline

## 📦 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### After Creating Your Repository

1. Clone your new repository:
```bash
git clone https://github.com/yourusername/your-new-repo.git
cd your-new-repo
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the setup script** (this installs shadcn/ui components):
```bash
npm run setup
# or
yarn setup
# or
pnpm setup
```

> **Note:** The setup script will install all required shadcn/ui components and create your `.env.local` file.

### Alternative: Manual Setup

If you prefer to set up manually or the script fails:

```bash
# Install shadcn/ui components one by one
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card input label sheet dropdown-menu navigation-menu dialog avatar

# Copy environment variables
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

## 🎨 First Steps After Using Template

1. **Update Branding**
   - Change `APP_NAME` in `/src/lib/constants.ts`
   - Update colors in `tailwind.config.ts`
   - Replace favicon in `/public`
   - Update metadata in `/src/app/layout.tsx`

2. **Clean Up**
   - Update or remove the LICENSE file
   - Update this README for your project
   - Remove any features you don't need

3. **Add Your Features**
   - Authentication (Supabase, NextAuth, Clerk, etc.)
   - Database (Prisma, Drizzle, etc.)
   - Payment processing (Stripe, Paddle, etc.)
   - Analytics (PostHog, Plausible, etc.)

## 🛠️ Built With

- [Next.js 14+](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management

## 📝 Environment Variables

The template includes an `.env.local.example` file with placeholders for common integrations:

```env
# App Configuration
NEXT_PUBLIC_APP_NAME="Your App Name"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Add your API keys and secrets here
# Database, Auth, Payments, etc.
```

## 🚨 Common Issues

### Module not found: Can't resolve '@/components/ui/...'

This happens because shadcn/ui components need to be installed after cloning. Run:
```bash
npm run setup
```

### Permission denied when running setup.sh

Make the script executable:
```bash
chmod +x setup.sh
./setup.sh
```

### Windows users

Use the PowerShell setup script:
```powershell
./setup.ps1
```

Or run the Node.js setup script:
```bash
npm run setup
```

## 🚀 Deployment

This boilerplate is ready to deploy on:

- [Vercel](https://vercel.com) (recommended)
- [Netlify](https://netlify.com)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- Any platform that supports Next.js

## 📄 License

This template is open source and available under the [MIT License](LICENSE). When you use this template, you can choose your own license for your project.

## 🤝 Contributing to the Template

If you'd like to improve this template:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 💖 Support

If this template helped you, please consider:
- ⭐ Giving it a star on GitHub
- 🐦 Sharing it on Twitter
- ☕ [Buying me a coffee](https://buymeacoffee.com/yourusername)

---

Built with ❤️ for the SaaS community. Happy building! 🚀
