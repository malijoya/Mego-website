# 🔧 AWS Amplify Build Fix Guide

## Issue: Build Failing on Amplify

The build is failing after dependency installation. Here's how to fix it:

---

## ✅ Updated amplify.yml

I've updated the `amplify.yml` file with:
- ✅ Better error logging
- ✅ Environment variable verification
- ✅ Build output verification
- ✅ Verbose build commands

---

## 🔍 Common Issues & Solutions

### 1. Missing Environment Variables

**Problem**: `NEXT_PUBLIC_API_URL` might not be set in Amplify Console.

**Solution**: 
1. Go to AWS Amplify Console
2. Navigate to: **App Settings** → **Environment variables**
3. Add: `NEXT_PUBLIC_API_URL` = `http://3.236.171.71` (or your backend URL)
4. Redeploy

### 2. Build Timeout

**Problem**: Build might be taking too long.

**Solution**:
1. Go to **Build settings** → **Advanced settings**
2. Increase **Build timeout** to 60 minutes (if needed)
3. Current: 30 minutes should be enough

### 3. Node.js Version

**Problem**: Wrong Node.js version.

**Solution**:
- Amplify should auto-detect Node.js 18+
- If issues persist, add to `package.json`:
```json
"engines": {
  "node": ">=18.0.0"
}
```

### 4. Build Output Directory

**Problem**: Amplify can't find build output.

**Solution**:
- Current config uses `.next` directory (correct for Next.js 14)
- If still failing, check build logs for actual error

---

## 📋 Steps to Fix Deployment

### Step 1: Update amplify.yml
✅ Already updated with better logging

### Step 2: Set Environment Variables
1. Go to AWS Amplify Console
2. **App Settings** → **Environment variables**
3. Add:
   ```
   NEXT_PUBLIC_API_URL=http://3.236.171.71
   ```

### Step 3: Commit and Push
```bash
git add amplify.yml
git commit -m "Fix Amplify build configuration"
git push origin main
```

### Step 4: Redeploy
- Amplify will auto-deploy on push
- Or manually trigger: **Deployments** → **Redeploy this version**

---

## 🔍 Debugging Build Logs

### Check for:
1. **Build command output**: Look for `npm run build` output
2. **Error messages**: Check for TypeScript/build errors
3. **Environment variables**: Verify `NEXT_PUBLIC_API_URL` is set
4. **Build timeout**: Check if build completes before timeout

### Common Error Patterns:

#### "Command failed with exit code 1"
- Usually a build error
- Check TypeScript errors
- Check missing dependencies

#### "Build timeout"
- Build taking too long
- Increase timeout or optimize build

#### "Cannot find module"
- Missing dependencies
- Run `npm install` locally to verify

---

## ✅ Updated amplify.yml Features

```yaml
preBuild:
  - npm ci (with caching)
  - Version checks
  - Environment variable verification

build:
  - npm run build (with verbose output)
  - Build verification
  - Output directory check
```

---

## 🚀 Next Steps

1. ✅ Updated `amplify.yml` with better logging
2. ⚙️ Set `NEXT_PUBLIC_API_URL` in Amplify Console
3. 📤 Commit and push changes
4. 🔄 Redeploy and check logs

---

## 📝 Additional Notes

- The build should complete in 2-5 minutes normally
- Check the full build logs in Amplify Console for specific errors
- If build still fails, share the error message from logs

---

**Status**: Ready to redeploy with improved configuration!

