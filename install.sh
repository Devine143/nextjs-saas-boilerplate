#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Next.js SaaS Boilerplate - Installation Script${NC}"
echo ""

# Detect package manager
if [ -f "yarn.lock" ]; then
    PM="yarn"
    PM_INSTALL="yarn install"
    PM_RUN="yarn"
elif [ -f "pnpm-lock.yaml" ]; then
    PM="pnpm"
    PM_INSTALL="pnpm install"
    PM_RUN="pnpm"
else
    PM="npm"
    PM_INSTALL="npm install"
    PM_RUN="npm run"
fi

echo -e "${GREEN}✓ Detected package manager: ${PM}${NC}"
echo ""

# Clean previous installations
echo -e "${YELLOW}🧹 Cleaning previous installations...${NC}"
rm -rf node_modules .next .yarn/install-state.gz yarn-error.log npm-debug.log pnpm-debug.log

# Clear package manager caches
echo -e "${YELLOW}🧹 Clearing package manager cache...${NC}"
if [ "$PM" = "yarn" ]; then
    yarn cache clean 2>/dev/null || true
elif [ "$PM" = "pnpm" ]; then
    pnpm store prune 2>/dev/null || true
else
    npm cache clean --force 2>/dev/null || true
fi

echo ""
echo -e "${BLUE}📦 Installing dependencies...${NC}"
echo -e "${YELLOW}This may take a few minutes...${NC}"
echo ""

# Install dependencies with appropriate flags
if [ "$PM" = "yarn" ]; then
    yarn install --network-timeout 100000 --ignore-engines
elif [ "$PM" = "pnpm" ]; then
    pnpm install --shamefully-hoist
else
    npm install --legacy-peer-deps
fi

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Failed to install dependencies${NC}"
    echo -e "${YELLOW}Try running: rm -rf node_modules package-lock.json yarn.lock pnpm-lock.yaml${NC}"
    echo -e "${YELLOW}Then run this script again${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}✓ Dependencies installed successfully${NC}"
echo ""

# Run setup script
echo -e "${BLUE}🎨 Setting up shadcn/ui components...${NC}"
$PM_RUN setup

echo ""
echo -e "${GREEN}✅ Installation complete!${NC}"
echo ""
echo -e "To start the development server, run:"
echo -e "  ${YELLOW}$PM_RUN dev${NC}"
echo ""
echo -e "Happy coding! 🎉"
