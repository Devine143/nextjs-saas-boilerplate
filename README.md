# Next.js SaaS Boilerplate

A production-ready Next.js 14+ SaaS boilerplate with TypeScript, Tailwind CSS, shadcn/ui, and modern best practices.

## 🎉 One-Line Install (Recommended)

```bash
# Using the install script (works with npm, yarn, or pnpm)
git clone https://github.com/Devine143/nextjs-saas-boilerplate.git my-app && cd my-app && chmod +x install.sh && ./install.sh
```

This will automatically:
- ✅ Detect your package manager
- ✅ Clean any previous installations
- ✅ Install all dependencies
- ✅ Set up shadcn/ui components
- ✅ Create `.env.local` file
- ✅ Clear all caches

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
- ✅ **Proper server/client component separation**

## 🚀 Features

- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for rapid styling with CSS variable fallbacks
- **shadcn/ui** for beautiful, accessible components
- **Dark Mode** support with next-themes
- **Responsive Design** with mobile-first approach
- **Production-ready** folder structure
- **ESLint & Prettier** pre-configured
- **Git** ready with proper .gitignore
- **GitHub Actions** CI/CD pipeline
- **Server/Client component boundaries** properly configured

## 📦 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation Steps

1. **Clone your new repository:**
```bash
git clone https://github.com/yourusername/your-new-repo.git
cd your-new-repo
```

2. **Run the install script (Easiest):**
```bash
chmod +x install.sh
./install.sh
```

Or install manually:

#### Using npm:
```bash
npm install --legacy-peer-deps
npm run setup
npm run dev
```

#### Using Yarn:
```bash
yarn install --network-timeout 100000
yarn setup
yarn dev
```

#### Using pnpm:
```bash
pnpm install --shamefully-hoist
pnpm setup
pnpm dev
```

3. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

### Alternative: Manual Setup

If the setup script fails, you can set up manually:

```bash
# 1. Clean everything
rm -rf node_modules .next yarn.lock package-lock.json pnpm-lock.yaml

# 2. Install dependencies
npm install --legacy-peer-deps  # or yarn/pnpm

# 3. Initialize shadcn/ui
npx shadcn-ui@latest init -y

# 4. Install components
npx shadcn-ui@latest add button card input label form sheet dropdown-menu navigation-menu dialog avatar --overwrite

# 5. Copy environment variables
cp .env.local.example .env.local

# 6. Start dev server
npm run dev
```

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout (Server Component)
│   ├── page.tsx           # Home page
│   └── (auth)/            # Auth route group (ready for auth pages)
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Layout components
│   │   ├── root-client.tsx  # Client wrapper component
│   │   ├── header.tsx      # Header (Client Component)
│   │   ├── footer.tsx      # Footer (Client Component)
│   │   └── navigation.tsx  # Navigation
│   ├── features/         # Feature-specific components
│   └── common/           # Shared components
├── lib/                  # Utility functions and helpers
│   ├── utils.ts         # Utility functions
│   ├── constants.ts     # App constants
│   └── types.ts         # Shared TypeScript types
├── styles/              # Additional styles
└── types/               # TypeScript type definitions
```

## 🎨 Architecture Decisions

### Server/Client Component Separation
- **Root Layout** (`layout.tsx`) is a Server Component for SEO metadata
- **Client functionality** is wrapped in `RootClientLayout` component
- **All interactive components** have `"use client"` directive
- **Proper boundaries** ensure optimal performance

### CSS Variables with Fallbacks
- All Tailwind color utilities have fallback values
- Works even if CSS variables are not loaded
- Example: `background: "hsl(var(--background, 0 0% 100%))"`

## 🚨 Common Issues & Solutions

### Installation Issues

#### VSCode/Cursor Tailwind IntelliSense Errors
The errors you see in the Tailwind CSS extension output are **normal** and don't affect the template functionality. They occur because:
- The extension looks for Tailwind in specific ways
- It falls back to its bundled version automatically
- Your app will still work perfectly

To minimize these warnings:
1. Restart VS Code/Cursor after installation
2. Open Command Palette: `Cmd/Ctrl + Shift + P`
3. Run "Developer: Reload Window"

#### Yarn: Module resolution errors
```bash
# Use the install script which handles this automatically
./install.sh

# Or manually:
rm -rf node_modules yarn.lock .yarn
yarn cache clean
yarn install --network-timeout 100000 --ignore-engines
```

#### npm: Installation hanging
```bash
npm cache clean --force
npm install --legacy-peer-deps
```

#### pnpm: Peer dependency issues
```bash
pnpm install --shamefully-hoist
```

### Development Issues

#### Module not found: Can't resolve '@/components/ui/...'
```bash
# Run the setup script
npm run setup
```

#### CSS not loading properly
```bash
# Clear all caches
rm -rf .next node_modules/.cache
npm run dev
```

#### "use client" directive errors
- Ensure all interactive components have `"use client"` at the top
- Server components (like `layout.tsx`) should NOT have `"use client"`
- Check that `RootClientLayout` is properly wrapping client functionality

### Platform-Specific Issues

#### Windows: PowerShell execution policy
```powershell
# Run as Administrator
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

#### macOS/Linux: Permission denied
```bash
chmod +x install.sh setup.sh
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

## 🚀 Deployment

This boilerplate is ready to deploy on:

- [Vercel](https://vercel.com) (recommended)
- [Netlify](https://netlify.com)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- Any platform that supports Next.js

### Deployment Checklist
- [ ] Update environment variables on your platform
- [ ] Ensure all dependencies are in `package.json`
- [ ] Test the build locally: `npm run build`
- [ ] Verify all components render properly

## 📄 License

This template is open source and available under the [MIT License](LICENSE). When you use this template, you can choose your own license for your project.

## 🤝 Contributing to the Template

If you'd like to improve this template:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines
- Maintain the server/client component separation
- Add proper TypeScript types
- Follow the existing code style
- Update documentation for new features

## 💖 Support

If this template helped you, please consider:
- ⭐ Giving it a star on GitHub
- 🐦 Sharing it on Twitter
- ☕ [Buying me a coffee](https://buymeacoffee.com/yourusername)

---

Built with ❤️ for the SaaS community. Happy building! 🚀
