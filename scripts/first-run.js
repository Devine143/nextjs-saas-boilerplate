#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
};

const log = {
  info: (msg) => console.log(`${colors.blue}${msg}${colors.reset}`),
  success: (msg) => console.log(`${colors.green}✓ ${msg}${colors.reset}`),
  warn: (msg) => console.log(`${colors.yellow}⚠ ${msg}${colors.reset}`),
  error: (msg) => console.log(`${colors.red}❌ ${msg}${colors.reset}`),
  important: (msg) => console.log(`${colors.magenta}${msg}${colors.reset}`),
};

function runCommand(command, options = {}) {
  try {
    execSync(command, { stdio: 'inherit', ...options });
    return true;
  } catch (error) {
    return false;
  }
}

function checkIfComponentsExist() {
  const uiDir = path.join(process.cwd(), 'src', 'components', 'ui');
  if (!fs.existsSync(uiDir)) {
    return false;
  }
  
  const requiredComponents = ['button.tsx', 'card.tsx', 'sheet.tsx'];
  for (const component of requiredComponents) {
    if (!fs.existsSync(path.join(uiDir, component))) {
      return false;
    }
  }
  
  return true;
}

function main() {
  console.log('\n🚀 Next.js SaaS Boilerplate - First Time Setup\n');
  console.log('===============================================\n');

  // Check if this is the first run
  if (checkIfComponentsExist()) {
    log.info('Components already installed. Skipping setup...');
    return;
  }

  log.important('⚠️  IMPORTANT: This is your first time running the project!');
  log.important('⚠️  We need to generate the UI components before the app can start.\n');
  
  console.log('This template uses shadcn/ui components which must be generated');
  console.log('in your project. This is a one-time setup that takes ~30 seconds.\n');

  // Check Node.js version
  const nodeVersion = process.version;
  const majorVersion = parseInt(nodeVersion.split('.')[0].substring(1));
  
  if (majorVersion < 18) {
    log.error(`Node.js version 18+ is required. Current version: ${nodeVersion}`);
    process.exit(1);
  }

  // Check if dependencies are installed
  if (!fs.existsSync(path.join(process.cwd(), 'node_modules'))) {
    log.error('Dependencies not installed! Please run:');
    console.log(`  ${colors.yellow}npm install${colors.reset} (or yarn/pnpm install)`);
    process.exit(1);
  }

  log.info('🎨 Installing shadcn/ui components...\n');
  
  // Initialize shadcn/ui if needed
  const componentsJson = path.join(process.cwd(), 'components.json');
  if (!fs.existsSync(componentsJson)) {
    log.info('Initializing shadcn/ui...');
    const initSuccess = runCommand('npx shadcn-ui@latest init -y', {
      stdio: 'pipe'
    });
    
    if (!initSuccess) {
      log.error('Failed to initialize shadcn/ui');
      log.error('Please run manually: npx shadcn-ui@latest init');
      process.exit(1);
    }
  }

  // Install required components
  const components = [
    'button',
    'card', 
    'input',
    'label',
    'form',
    'sheet',
    'dropdown-menu',
    'navigation-menu',
    'dialog',
    'avatar'
  ];

  log.info('Installing components (this may take a minute)...\n');

  let allInstalled = true;
  for (const component of components) {
    process.stdout.write(`Installing ${component}...`);
    
    const success = runCommand(`npx shadcn-ui@latest add ${component} --yes --overwrite`, {
      stdio: 'pipe'
    });
    
    if (success) {
      console.log(` ${colors.green}✓${colors.reset}`);
    } else {
      console.log(` ${colors.red}✗${colors.reset}`);
      allInstalled = false;
    }
  }

  console.log('');
  
  if (!allInstalled) {
    log.error('Some components failed to install.');
    log.warn('The app may not work correctly. Try installing them manually:');
    console.log(`  ${colors.yellow}npx shadcn-ui@latest add [component-name]${colors.reset}`);
    process.exit(1);
  }

  // Copy environment variables
  const envExample = path.join(process.cwd(), '.env.local.example');
  const envLocal = path.join(process.cwd(), '.env.local');
  
  if (!fs.existsSync(envLocal) && fs.existsSync(envExample)) {
    log.info('Creating .env.local file...');
    fs.copyFileSync(envExample, envLocal);
  }

  // Clear Next.js cache
  const nextDir = path.join(process.cwd(), '.next');
  if (fs.existsSync(nextDir)) {
    log.info('Clearing Next.js cache...');
    fs.rmSync(nextDir, { recursive: true, force: true });
  }

  console.log('');
  log.success('Setup complete! All components have been generated.\n');
  log.important('🎉 You can now start the development server!\n');
  
  console.log('Run one of these commands:');
  console.log(`  ${colors.yellow}npm run dev${colors.reset}`);
  console.log(`  ${colors.yellow}yarn dev${colors.reset}`);
  console.log(`  ${colors.yellow}pnpm dev${colors.reset}`);
  console.log('');
}

main();
