# 🚀 AWS Amplify Deployment Guide

## ✅ Amplify Configuration Created

The `amplify.yml` file has been created and is ready for AWS Amplify deployment.

---

## 📋 Amplify.yml Configuration

The `amplify.yml` file includes:

### Pre-Build Phase
- Installs dependencies using `npm ci` with caching
- Verifies Node.js and npm versions

### Build Phase
- Runs `npm run build` to build Next.js application
- Outputs to `.next` directory

### Artifacts
- Base directory: `.next`
- Includes all files: `**/*`

### Cache
- Caches `.next/cache/**/*` for faster builds
- Caches `.npm/**/*` for dependency caching
- Caches `node_modules/**/*` for faster installs

---

## 🔧 AWS Amplify Setup Steps

### 1. Connect Repository
- Go to AWS Amplify Console
- Click "New app" → "Host web app"
- Connect your Git repository (GitHub, GitLab, Bitbucket, etc.)
- Select the branch (usually `main` or `master`)

### 2. Configure Build Settings
- Amplify will automatically detect `amplify.yml` in the root directory
- Or manually paste the `amplify.yml` content in the build settings

### 3. Environment Variables
In AWS Amplify Console → App Settings → Environment variables, add:

```
NEXT_PUBLIC_API_URL=http://3.236.171.71
```

Or your production backend URL.

### 4. Build Settings
- **Build image**: Use default (or custom if needed)
- **Build timeout**: 30 minutes (default)
- **Build instance type**: Standard (8 GiB Memory | 4 vCPUs)

### 5. Deploy
- Click "Save and deploy"
- Amplify will build and deploy your Next.js app

---

## 📝 Important Notes

### Next.js 14 on Amplify
- ✅ Next.js 14 App Router is fully supported
- ✅ Server-side rendering (SSR) works out of the box
- ✅ API routes are supported
- ✅ Middleware is supported
- ✅ Image optimization works

### Environment Variables
- All `NEXT_PUBLIC_*` variables are exposed to the browser
- Set them in Amplify Console → Environment variables
- They're available at build time and runtime

### Build Output
- Next.js outputs to `.next` directory
- Amplify serves the `.next` directory
- Static files are automatically optimized

---

## 🔍 Troubleshooting

### Build Fails
1. Check build logs in Amplify Console
2. Verify Node.js version (should be 18+)
3. Check if all dependencies are in `package.json`
4. Ensure `amplify.yml` is in the root directory

### Runtime Errors
1. Check environment variables are set correctly
2. Verify API URLs are accessible
3. Check browser console for errors
4. Review Next.js build output

### Performance Issues
1. Enable caching in `amplify.yml` (already enabled)
2. Use CDN for static assets (automatic with Amplify)
3. Optimize images using Next.js Image component
4. Enable compression (already enabled in `next.config.js`)

---

## 📦 Current Configuration

### Build Commands
```yaml
preBuild:
  - npm ci --cache .npm --prefer-offline
  - node --version
  - npm --version

build:
  - npm run build
```

### Output Directory
```
baseDirectory: .next
files: '**/*'
```

### Cache
- `.next/cache/**/*`
- `.npm/**/*`
- `node_modules/**/*`

---

## ✅ Next Steps

1. ✅ `amplify.yml` is created and ready
2. 🔗 Connect repository to AWS Amplify
3. ⚙️ Set environment variables in Amplify Console
4. 🚀 Deploy!

---

## 📚 Resources

- [AWS Amplify Docs](https://docs.aws.amazon.com/amplify/)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Amplify Next.js Guide](https://docs.aws.amazon.com/amplify/latest/userguide/deploy-nextjs-app.html)

---

**Status**: ✅ Ready for deployment!

