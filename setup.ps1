# PowerShell setup script for Windows

Write-Host "🚀 Setting up Next.js SaaS Boilerplate..." -ForegroundColor Green
Write-Host ""

# Check if node is installed
try {
    $nodeVersion = node -v
    Write-Host "✓ Node.js $nodeVersion detected" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed. Please install Node.js 18+ first." -ForegroundColor Red
    exit 1
}

# Check node version
$versionNumber = [int]($nodeVersion -replace 'v(\d+)\..*', '$1')
if ($versionNumber -lt 18) {
    Write-Host "❌ Node.js version 18+ is required. Current version: $nodeVersion" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
if (Get-Command pnpm -ErrorAction SilentlyContinue) {
    pnpm install
} elseif (Get-Command yarn -ErrorAction SilentlyContinue) {
    yarn install
} else {
    npm install
}

Write-Host ""
Write-Host "✓ Dependencies installed" -ForegroundColor Green
Write-Host ""

# Install shadcn/ui components
Write-Host "🎨 Installing shadcn/ui components..." -ForegroundColor Yellow
Write-Host ""

$components = @("button", "card", "input", "label", "sheet", "dropdown-menu", "navigation-menu", "dialog", "avatar")

foreach ($component in $components) {
    Write-Host "Installing $component..."
    npx shadcn-ui@latest add $component --yes
}

Write-Host ""
Write-Host "✓ All shadcn/ui components installed" -ForegroundColor Green
Write-Host ""

# Copy environment variables
if (!(Test-Path .env.local)) {
    Write-Host "📋 Creating .env.local from .env.local.example..." -ForegroundColor Yellow
    Copy-Item .env.local.example .env.local
    Write-Host "✓ Environment file created" -ForegroundColor Green
} else {
    Write-Host "⚠ .env.local already exists, skipping..." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "✅ Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "To start the development server, run:" -ForegroundColor White
Write-Host "  npm run dev" -ForegroundColor Yellow
Write-Host ""
Write-Host "Then open http://localhost:3000 in your browser." -ForegroundColor White
Write-Host ""
Write-Host "Happy coding! 🎉" -ForegroundColor Green