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
};

const log = {
  info: (msg) => console.log(`${colors.blue}${msg}${colors.reset}`),
  success: (msg) => console.log(`${colors.green}✓ ${msg}${colors.reset}`),
  warn: (msg) => console.log(`${colors.yellow}⚠ ${msg}${colors.reset}`),
  error: (msg) => console.log(`${colors.red}❌ ${msg}${colors.reset}`),
};

function runCommand(command, options = {}) {
  try {
    execSync(command, { stdio: 'inherit', ...options });
    return true;
  } catch (error) {
    return false;
  }
}

function main() {
  console.log('\n🚀 Setting up Next.js SaaS Boilerplate...\n');

  // Check Node.js version
  const nodeVersion = process.version;
  const majorVersion = parseInt(nodeVersion.split('.')[0].substring(1));
  
  if (majorVersion < 18) {
    log.error(`Node.js version 18+ is required. Current version: ${nodeVersion}`);
    process.exit(1);
  }
  
  log.success(`Node.js ${nodeVersion} detected`);
  console.log('');

  // Install shadcn/ui components
  log.info('🎨 Installing shadcn/ui components...\n');
  
  const components = [
    'button',
    'card', 
    'input',
    'label',
    'sheet',
    'dropdown-menu',
    'navigation-menu',
    'dialog',
    'avatar'
  ];

  let allInstalled = true;

  for (const component of components) {
    process.stdout.write(`Installing ${component}...`);
    
    const success = runCommand(`npx shadcn-ui@latest add ${component} --yes`, {
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
  
  if (allInstalled) {
    log.success('All shadcn/ui components installed');
  } else {
    log.warn('Some components failed to install. You may need to install them manually.');
  }
  
  console.log('');

  // Copy environment variables
  const envExample = path.join(process.cwd(), '.env.local.example');
  const envLocal = path.join(process.cwd(), '.env.local');
  
  if (!fs.existsSync(envLocal) && fs.existsSync(envExample)) {
    log.info('📋 Creating .env.local from .env.local.example...');
    fs.copyFileSync(envExample, envLocal);
    log.success('Environment file created');
  } else if (fs.existsSync(envLocal)) {
    log.warn('.env.local already exists, skipping...');
  }

  console.log('');
  log.success('Setup complete!\n');
  
  console.log('To start the development server, run:');
  console.log(`  ${colors.yellow}npm run dev${colors.reset}`);
  console.log('');
  console.log(`Then open ${colors.yellow}http://localhost:3000${colors.reset} in your browser.`);
  console.log('\nHappy coding! 🎉\n');
}

main();