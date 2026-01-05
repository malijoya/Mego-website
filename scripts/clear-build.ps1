# Clear Next.js build cache and rebuild
Write-Host "Clearing Next.js build cache..." -ForegroundColor Yellow

# Remove .next directory
if (Test-Path ".next") {
    Remove-Item -Recurse -Force ".next"
    Write-Host "Removed .next directory" -ForegroundColor Green
} else {
    Write-Host ".next directory doesn't exist" -ForegroundColor Green
}

# Remove node_modules/.cache if exists
if (Test-Path "node_modules\.cache") {
    Remove-Item -Recurse -Force "node_modules\.cache"
    Write-Host "Removed node_modules/.cache" -ForegroundColor Green
}

Write-Host ""
Write-Host "Build cache cleared successfully!" -ForegroundColor Green
Write-Host "Now run: npm run dev" -ForegroundColor Cyan

