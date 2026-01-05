# 🎯 MEGO Website

A modern online marketplace platform built with Next.js 14, TypeScript, and Tailwind CSS.

## 📁 Project Structure

```
mego_website/
├── app/                      # Next.js 14 App Router
│   ├── ads/                  # Ad-related pages
│   ├── dashboard/           # Main dashboard
│   ├── login/               # Authentication pages
│   ├── register/
│   ├── post-ad/             # Create new ad
│   ├── my-ads/              # User's own ads
│   ├── favorites/           # Favorite ads
│   ├── messages/            # Chat/Messages
│   ├── wallet/              # Wallet & transactions
│   ├── loyalty/             # Loyalty points & rewards
│   └── ...                  # Other feature pages
│
├── components/              # React Components
│   ├── layout/             # Layout components (Header, Footer)
│   ├── home/               # Homepage components
│   ├── chat/               # Chat components
│   ├── loyalty/            # Loyalty components
│   ├── ui/                 # Reusable UI components
│   ├── forms/              # Form components
│   ├── ads/                # Ad-specific components
│   └── common/             # Common/shared components
│
├── lib/                     # Libraries & Utilities
│   ├── api/                # API services
│   │   └── index.ts        # All API endpoints
│   ├── store/              # Zustand stores
│   │   ├── authStore.ts    # Auth state management
│   │   └── themeStore.ts   # Theme state management
│   ├── api.ts              # Legacy API (backward compatibility)
│   └── api-debug.ts        # API debugging utilities
│
├── config/                  # Configuration
│   └── api.ts              # API configuration & axios setup
│
├── types/                   # TypeScript Type Definitions
│   └── index.ts            # All interfaces & types
│
├── utils/                   # Utility Functions
│   └── index.ts            # Helper functions
│
├── hooks/                   # Custom React Hooks
│   └── index.ts            # Custom hooks exports
│
├── constants/              # Application Constants
│   └── index.ts            # Routes, API endpoints, categories, etc.
│
├── public/                 # Static Assets
│   ├── images/             # Image assets
│   └── icons/              # Icon assets
│
├── docs/                   # Documentation
│   ├── PROJECT_OVERVIEW.md # Complete project documentation
│   ├── STRUCTURE.md        # Folder structure guide
│   ├── CHANGES_CONFIRMATION.md
│   └── CLEAR_CACHE_FIX.md
│
├── scripts/                # Utility Scripts
│   ├── clear-build.ps1    # Clear build cache
│   ├── clear-cache.ps1    # Clear Next.js cache
│   ├── fix-cache.ps1      # Fix cache issues
│   └── verify-integration.js
│
├── middleware.ts           # Next.js middleware (Auth protection)
├── next.config.js          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies & scripts
```

> 📖 For detailed structure documentation, see [docs/STRUCTURE.md](./docs/STRUCTURE.md)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📚 Documentation

- **[Project Overview](./docs/PROJECT_OVERVIEW.md)** - Complete project documentation
- **[Folder Structure](./docs/STRUCTURE.md)** - Detailed folder structure guide
- **[Changes Confirmation](./docs/CHANGES_CONFIRMATION.md)** - Change logs
- **[Cache Fix Guide](./docs/CLEAR_CACHE_FIX.md)** - Troubleshooting guide

## 🛠️ Scripts

- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Build for production
- `npm start` - Start production server (port 8080)

### Utility Scripts (PowerShell)
- `.\scripts\clear-cache.ps1` - Clear Next.js cache
- `.\scripts\clear-build.ps1` - Clear build cache
- `.\scripts\fix-cache.ps1` - Fix cache issues

## 🔧 Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_API_URL=http://your-backend-url
```

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **API Client**: Axios
- **Forms**: React Hook Form + Zod
- **Real-time**: Socket.io Client

## 📝 License

Private project - All rights reserved

