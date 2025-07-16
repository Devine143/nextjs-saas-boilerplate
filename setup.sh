#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "🚀 Setting up Next.js SaaS Boilerplate..."
echo ""

# Check if node is installed
if ! command -v node &> /dev/null; then
    echo "${RED}❌ Node.js is not installed. Please install Node.js 18+ first.${NC}"
    exit 1
fi

# Check node version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "${RED}❌ Node.js version 18+ is required. Current version: $(node -v)${NC}"
    exit 1
fi

echo "${GREEN}✓ Node.js $(node -v) detected${NC}"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
if command -v pnpm &> /dev/null; then
    pnpm install
elif command -v yarn &> /dev/null; then
    yarn install
else
    npm install
fi

echo ""
echo "${GREEN}✓ Dependencies installed${NC}"
echo ""

# Install shadcn/ui components
echo "🎨 Installing shadcn/ui components..."
echo ""

# Install each component
components=("button" "card" "input" "label" "sheet" "dropdown-menu" "navigation-menu" "dialog" "avatar")

for component in "${components[@]}"; do
    echo "Installing $component..."
    npx shadcn-ui@latest add $component --yes
done

echo ""
echo "${GREEN}✓ All shadcn/ui components installed${NC}"
echo ""

# Copy environment variables
if [ ! -f .env.local ]; then
    echo "📋 Creating .env.local from .env.local.example..."
    cp .env.local.example .env.local
    echo "${GREEN}✓ Environment file created${NC}"
else
    echo "${YELLOW}⚠ .env.local already exists, skipping...${NC}"
fi

echo ""
echo "${GREEN}✅ Setup complete!${NC}"
echo ""
echo "To start the development server, run:"
echo "  ${YELLOW}npm run dev${NC}"
echo ""
echo "Then open ${YELLOW}http://localhost:3000${NC} in your browser."
echo ""
echo "Happy coding! 🎉"