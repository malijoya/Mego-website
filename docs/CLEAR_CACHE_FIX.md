# ArrowRight Error Fix - Cache Clear Instructions

## Issue
ArrowRight is not defined error in wallet page

## Root Cause
Next.js development cache is not picking up the import changes.

## Solution

### Option 1: Quick Fix (Recommended)
1. **Stop the dev server** (Press `Ctrl+C` in terminal)
2. **Delete `.next` folder**:
   ```powershell
   cd mego_website
   Remove-Item -Recurse -Force .next
   ```
3. **Restart dev server**:
   ```bash
   npm run dev
   ```

### Option 2: Hard Refresh Browser
1. Press `Ctrl + Shift + R` (Windows/Linux)
2. Or `Cmd + Shift + R` (Mac)
3. Or `Ctrl + F5`

### Option 3: Clear All Cache
```powershell
cd mego_website

# Delete Next.js cache
Remove-Item -Recurse -Force .next

# Delete node_modules (if needed)
# Remove-Item -Recurse -Force node_modules
# npm install

# Restart
npm run dev
```

## Verification
After clearing cache:
1. Open `/wallet` page
2. Error should be gone
3. ArrowRight icons should display properly

## Note
The import is already correct in the code:
```typescript
import { Wallet, Coins, ArrowUp, ArrowDown, ArrowRight, Sparkles, CheckCircle, Cash, RefreshCw } from 'lucide-react';
```

The error is just a caching issue - clearing `.next` folder will fix it!

