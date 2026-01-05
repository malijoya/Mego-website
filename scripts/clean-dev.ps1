# PowerShell script to completely clean Next.js dev environment
# Run: .\scripts\clean-dev.ps1

Write-Host "🧹 Cleaning Next.js development environment..." -ForegroundColor Yellow
Write-Host ""

# Stop any running Next.js processes (if possible)
Write-Host "1. Removing .next directory..." -ForegroundColor Cyan
if (Test-Path ".next") {
    Remove-Item -Recurse -Force ".next"
    Write-Host "   ✓ Removed .next directory" -ForegroundColor Green
} else {
    Write-Host "   ✓ .next directory doesn't exist" -ForegroundColor Gray
}

# Remove node_modules cache
Write-Host "2. Cleaning npm cache..." -ForegroundColor Cyan
npm cache clean --force 2>$null
Write-Host "   ✓ npm cache cleaned" -ForegroundColor Green

# Remove webpack cache
Write-Host "3. Removing webpack cache..." -ForegroundColor Cyan
if (Test-Path "node_modules\.cache") {
    Remove-Item -Recurse -Force "node_modules\.cache" -ErrorAction SilentlyContinue
    Write-Host "   ✓ Webpack cache removed" -ForegroundColor Green
} else {
    Write-Host "   ✓ No webpack cache found" -ForegroundColor Gray
}

Write-Host ""
Write-Host "✅ Cleanup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Now run: npm run dev" -ForegroundColor Yellow
Write-Host ""

