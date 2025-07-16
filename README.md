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

2. **Install dependencies (choose one):**

#### Using npm:
```bash
npm install
npm run setup
```

#### Using Yarn:
```bash
yarn install
yarn setup
```

#### Using pnpm:
```bash
pnpm install
pnpm setup
```

> **Important:** The setup script will:
> - Install all required shadcn/ui components
> - Create your `.env.local` file
> - Clear any build cache

3. **Start the development server:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

### Alternative: Manual Setup

If the setup script fails, you can set up manually:

```bash
# 1. Initialize shadcn/ui
npx shadcn-ui@latest init -y

# 2. Install components
npx shadcn-ui@latest add button card input label form sheet dropdown-menu navigation-menu dialog avatar --overwrite

# 3. Copy environment variables
cp .env.local.example .env.local

# 4. Clear cache
rm -rf .next node_modules/.cache

# 5. Start dev server
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

#### Yarn: "Can't resolve 'tailwindcss'"
If you're using Yarn and encounter module resolution errors:

1. **Delete lock files and node_modules:**
```bash
rm -rf node_modules yarn.lock package-lock.json
```

2. **Clear Yarn cache:**
```bash
yarn cache clean
```

3. **Reinstall with Yarn 1.x:**
```bash
yarn install --network-timeout 100000
yarn setup
```

#### npm: Installation hanging
If npm install hangs:

```bash
# Clear npm cache
npm cache clean --force

# Install with legacy peer deps
npm install --legacy-peer-deps
npm run setup
```

#### pnpm: Peer dependency issues
```bash
# Install with shamefully-hoist
pnpm install --shamefully-hoist
pnpm setup
```

### Development Issues

#### Module not found: Can't resolve '@/components/ui/...'
```bash
# The shadcn/ui components need to be installed
npm run setup
```

#### Tailwind CSS IntelliSense not working
1. Restart VS Code/Cursor
2. Check that Tailwind CSS extension is installed
3. Reload the window: `Cmd/Ctrl + Shift + P` → "Reload Window"

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

#### macOS: Permission denied
```bash
chmod +x setup.sh
./setup.sh
```

#### Linux: EACCES errors
```bash
# Fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
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
