# 📁 MEGO Website - Professional Folder Structure

## 🏗️ Complete Directory Structure

```
mego_website/
├── app/                          # Next.js 14 App Router
│   ├── ads/                      # Ad-related pages
│   │   └── [id]/                 # Dynamic ad routes
│   │       ├── page.tsx          # Ad detail page
│   │       ├── edit/             # Edit ad page
│   │       └── analytics/        # Ad analytics page
│   ├── buyer-requests/           # Buyer requests feature
│   ├── categories/               # Categories listing
│   ├── daily-tasks/              # Daily tasks & rewards
│   ├── dashboard/                # Main dashboard
│   ├── favorites/                # Favorite ads
│   ├── forgot-password/          # Password recovery
│   ├── help/                     # Help & support
│   ├── kyc/                      # KYC verification
│   ├── language/                 # Language settings
│   ├── login/                    # Login page
│   ├── loyalty/                  # Loyalty points
│   ├── messages/                 # Chat/Messaging
│   ├── my-ads/                   # User's ads
│   ├── neighborhood/             # Location-based feed
│   ├── notifications/            # Notifications
│   ├── post-ad/                  # Create new ad
│   ├── profile/                 # User profile
│   ├── recently-viewed/          # Recently viewed ads
│   ├── referral-center/          # Referral program
│   ├── register/                 # Registration
│   ├── search/                   # Search page
│   ├── seller/                   # Seller profiles
│   │   └── [id]/
│   ├── seller-dashboard/          # Seller dashboard
│   ├── settings/                 # User settings
│   ├── swap-requests/            # Swap requests
│   ├── wallet/                   # Wallet & transactions
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   ├── providers.tsx             # Context providers
│   └── globals.css               # Global styles
│
├── components/                   # React Components
│   ├── layout/                   # Layout components
│   │   ├── Header.tsx            # Main header/navbar
│   │   └── Footer.tsx            # Footer
│   ├── home/                     # Homepage components
│   │   ├── HeroSection.tsx
│   │   ├── FeaturedAds.tsx
│   │   ├── FeaturedCategories.tsx
│   │   ├── StatsSection.tsx
│   │   └── WhyChooseUs.tsx
│   ├── chat/                     # Chat components
│   │   ├── ChatReactions.tsx
│   │   └── TypingIndicator.tsx
│   ├── loyalty/                  # Loyalty components
│   │   └── PointsExchangeModal.tsx
│   ├── ui/                       # Reusable UI components
│   │   └── index.ts              # UI components barrel export
│   ├── forms/                    # Form components
│   ├── ads/                      # Ad-specific components
│   ├── common/                   # Common/shared components
│   └── ThemeScript.tsx           # Theme initialization
│
├── lib/                          # Libraries & Utilities
│   ├── api/                      # API services
│   │   └── index.ts              # All API endpoints
│   ├── store/                    # State management (Zustand)
│   │   ├── authStore.ts          # Authentication state
│   │   └── themeStore.ts         # Theme state
│   ├── api.ts                    # Legacy API (to be migrated)
│   └── api-debug.ts              # API debugging utilities
│
├── config/                       # Configuration files
│   └── api.ts                    # API configuration & axios setup
│
├── types/                        # TypeScript Type Definitions
│   └── index.ts                  # All interfaces & types
│
├── utils/                        # Utility Functions
│   └── index.ts                  # Helper functions
│
├── hooks/                        # Custom React Hooks
│   └── index.ts                  # Custom hooks exports
│
├── constants/                    # Application Constants
│   └── index.ts                  # All constants (routes, API endpoints, etc.)
│
├── public/                       # Static Assets
│   ├── images/                   # Image assets
│   └── icons/                    # Icon assets
│
├── scripts/                      # Utility Scripts
│   ├── clear-build.ps1           # Clear build cache
│   ├── clear-cache.ps1           # Clear Next.js cache
│   ├── fix-cache.ps1             # Fix cache issues
│   └── verify-integration.js     # Integration verification
│
├── docs/                         # Documentation
│   ├── PROJECT_OVERVIEW.md       # Complete project overview
│   ├── STRUCTURE.md               # This file
│   ├── CHANGES_CONFIRMATION.md
│   └── CLEAR_CACHE_FIX.md
│
├── middleware.ts                 # Next.js middleware (Auth protection)
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── postcss.config.js             # PostCSS configuration
├── package.json                  # Dependencies & scripts
├── package-lock.json             # Lock file
├── .gitignore                   # Git ignore rules
├── .npmrc                        # NPM configuration
├── next-env.d.ts                 # Next.js type definitions
└── README.md                     # Project README
```

## 📂 Folder Purposes

### `/app`
Next.js 14 App Router directory. Contains all pages and routes. Each folder represents a route, and `page.tsx` files are the actual pages.

### `/components`
Reusable React components organized by feature:
- **layout/**: Header, Footer, and other layout components
- **home/**: Homepage-specific components
- **chat/**: Chat and messaging components
- **loyalty/**: Loyalty program components
- **ui/**: Generic reusable UI components (buttons, cards, modals, etc.)
- **forms/**: Form components
- **ads/**: Ad-specific components
- **common/**: Shared/common components

### `/lib`
Core libraries and utilities:
- **api/**: API service layer with all endpoints
- **store/**: Zustand state management stores

### `/config`
Configuration files for external services and libraries:
- **api.ts**: Axios instance configuration and interceptors

### `/types`
TypeScript type definitions. All interfaces and types should be defined here and exported from `index.ts`.

### `/utils`
Utility functions for common operations:
- Formatting (currency, dates, numbers)
- String manipulation
- Image handling
- Validation
- Array/Object utilities
- Storage utilities
- Debounce/Throttle

### `/hooks`
Custom React hooks. Re-exports commonly used hooks and custom hooks.

### `/constants`
Application-wide constants:
- API endpoints
- Routes
- Categories
- Validation rules
- Error messages
- Configuration values

### `/public`
Static assets served from the root URL. Images, icons, and other static files.

### `/scripts`
Utility scripts for development and maintenance:
- Cache clearing scripts
- Build scripts
- Verification scripts

### `/docs`
Project documentation:
- Project overview
- Structure documentation
- Change logs
- Fix guides

## 🔄 Import Patterns

### Types
```typescript
import { User, Ad, Message } from '@/types';
```

### Constants
```typescript
import { ROUTES, CATEGORIES, API_ENDPOINTS } from '@/constants';
```

### Utils
```typescript
import { formatCurrency, getImageUrl, validateEmail } from '@/utils';
```

### Hooks
```typescript
import { useAuthStore, useThemeStore } from '@/hooks';
```

### API
```typescript
import { adsApi, authApi, messagesApi } from '@/lib/api';
```

### Components
```typescript
import { Header, Footer } from '@/components/layout';
import { HeroSection } from '@/components/home';
```

## 📝 Best Practices

1. **Types**: Always define types in `/types/index.ts` and import from there
2. **Constants**: Use constants from `/constants/index.ts` instead of hardcoding values
3. **Utils**: Use utility functions from `/utils/index.ts` for common operations
4. **API**: All API calls should go through `/lib/api/index.ts`
5. **Components**: Organize components by feature, not by type
6. **Imports**: Use `@/` alias for absolute imports (configured in `tsconfig.json`)

## 🚀 Migration Notes

The old `lib/api.ts` file is still present for backward compatibility. Gradually migrate imports to use `/lib/api/index.ts` which uses constants from `/constants/index.ts`.

