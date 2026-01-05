# 🎯 MEGO Website - Complete Project Overview (A to Z)

## 📋 Project Ka Introduction

**MEGO** ek **online marketplace platform** hai jo Pakistan ke liye banaya gaya hai. Ye ek classifieds/OLX-style platform hai jahan users buy aur sell kar sakte hain.

---

## 🏗️ Technology Stack

### Frontend Framework
- **Next.js 14** (React-based framework with App Router)
- **TypeScript** (Type safety ke liye)
- **React 18** (Latest version)

### Styling & UI
- **Tailwind CSS** (Utility-first CSS framework)
- **Framer Motion** (Animations ke liye)
- **Lucide React** (Icons library)
- **Dark Mode Support** (Theme switching)

### State Management
- **Zustand** (Lightweight state management)
  - `authStore.ts` - User authentication state
  - `themeStore.ts` - Dark/Light theme state

### API & Data Fetching
- **Axios** (HTTP client for API calls)
- **React Query** (Data fetching & caching)

### Form Handling
- **React Hook Form** (Form management)
- **Zod** (Schema validation)
- **@hookform/resolvers** (Form validation resolvers)

### Additional Features
- **Socket.io Client** (Real-time messaging)
- **React Hot Toast** (Notifications)
- **React Infinite Scroll** (Pagination)
- **React Image Gallery** (Image viewing)
- **React Share** (Social sharing)
- **React Audio Voice Recorder** (Voice messages)

---

## 📁 Project Structure

```
mego_website/
├── app/                      # Next.js App Router (Main pages)
│   ├── ads/                  # Ad-related pages
│   │   └── [id]/            # Dynamic ad pages
│   │       ├── page.tsx     # Ad detail page
│   │       ├── edit/        # Edit ad page
│   │       └── analytics/   # Ad analytics
│   ├── dashboard/           # Main dashboard
│   ├── login/               # Login page
│   ├── register/            # Registration page
│   ├── post-ad/             # Create new ad
│   ├── my-ads/              # User's own ads
│   ├── favorites/           # Favorite ads
│   ├── messages/            # Chat/Messages
│   ├── wallet/              # Wallet & transactions
│   ├── loyalty/             # Loyalty points & rewards
│   ├── profile/             # User profile
│   ├── settings/            # User settings
│   ├── notifications/       # Notifications
│   ├── search/              # Search page
│   ├── categories/          # Categories listing
│   ├── buyer-requests/      # Buyer requests
│   ├── swap-requests/       # Swap/exchange requests
│   ├── referral-center/     # Referral program
│   ├── daily-tasks/         # Daily tasks & rewards
│   ├── kyc/                 # KYC verification
│   ├── help/                # Help & support
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
│
├── components/              # Reusable React components
│   ├── layout/
│   │   ├── Header.tsx       # Main header/navbar
│   │   └── Footer.tsx       # Footer
│   ├── home/                # Homepage components
│   ├── chat/                # Chat components
│   └── loyalty/             # Loyalty components
│
├── lib/                     # Utility libraries
│   ├── api.ts               # All API endpoints & axios config
│   ├── api-debug.ts         # API debugging utilities
│   └── store/               # Zustand stores
│       ├── authStore.ts     # Auth state management
│       └── themeStore.ts    # Theme state management
│
├── middleware.ts            # Next.js middleware (Auth protection)
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies & scripts
```

---

## 🔑 Key Features & Functionality

### 1. **Authentication System** (`app/login`, `app/register`)
- Phone number + Password login
- User registration
- JWT token-based authentication
- Cookie-based session management
- Google/Facebook OAuth (placeholder, coming soon)

**Files:**
- `app/login/page.tsx` - Login page
- `app/register/page.tsx` - Registration page
- `lib/store/authStore.ts` - Auth state management
- `lib/api.ts` - Auth API endpoints

---

### 2. **Dashboard** (`app/dashboard/page.tsx`)
**Main Features:**
- Welcome section with user greeting
- Featured ads carousel (auto-scrolling)
- Search functionality
- Category filtering (Vehicles, Property, Mobiles, Electronics, etc.)
- All ads grid view
- Auto-refresh every 30 seconds
- Daily login rewards

**Key Code Features:**
- Memoized filtering for performance
- Responsive grid layout
- Image optimization with Next.js Image
- Real-time updates

---

### 3. **Ads Management**

#### View Ads (`app/ads/[id]/page.tsx`)
- Ad detail page
- Image gallery
- Seller information
- Contact options
- Analytics tracking

#### Create Ad (`app/post-ad/page.tsx`)
- Multi-step form
- Image upload (multiple images)
- Category selection
- Price, location, description
- Form validation with Zod

#### Edit Ad (`app/ads/[id]/edit/page.tsx`)
- Edit existing ads
- Update images, price, details

#### My Ads (`app/my-ads/page.tsx`)
- List of user's own ads
- Edit/Delete options
- Mark as sold

#### Ad Analytics (`app/ads/[id]/analytics/page.tsx`)
- View count
- Click tracking
- Save/Share analytics

---

### 4. **Search & Categories**
- **Search Page** (`app/search/page.tsx`): Advanced search with filters
- **Categories Page** (`app/categories/page.tsx`): Browse by category
- Real-time search filtering
- Category-based filtering

---

### 5. **Favorites System** (`app/favorites/page.tsx`)
- Save favorite ads
- Remove favorites
- Quick access to saved items

**API:** `favoritesApi` in `lib/api.ts`

---

### 6. **Messaging/Chat System** (`app/messages/page.tsx`)
- Real-time messaging with Socket.io
- Text messages
- File/image sharing
- Voice messages
- Message reactions (emojis)
- Read receipts
- Typing indicators

**Components:**
- `components/chat/ChatReactions.tsx`
- `components/chat/TypingIndicator.tsx`

---

### 7. **Wallet System** (`app/wallet/page.tsx`)
- View balance
- Transaction history
- Withdrawal requests
- Payment methods

---

### 8. **Loyalty & Rewards** (`app/loyalty/page.tsx`)
- Loyalty points system
- Points earning tasks
- Points redemption
- Reward wheel/spin
- Referral program
- Daily login rewards

**Features:**
- Complete tasks to earn points
- Exchange points for rewards
- Refer friends for bonus points

---

### 9. **Profile Management** (`app/profile/page.tsx`)
- View/edit profile
- Profile picture upload
- Update personal information
- Privacy settings

---

### 10. **Settings** (`app/settings/page.tsx`)
- Dark/Light mode toggle
- Notification preferences
- Language settings
- Privacy settings
- Password change

---

### 11. **Notifications** (`app/notifications/page.tsx`)
- Real-time notifications
- Mark as read
- Delete notifications
- Notification count badge in header

---

### 12. **Buyer Requests** (`app/buyer-requests/`)
- Create buyer requests
- Respond to requests
- Browse buyer requests

---

### 13. **Swap Requests** (`app/swap-requests/page.tsx`)
- Create swap/exchange requests
- Accept/reject swap offers
- Swap item management

---

### 14. **Referral System** (`app/referral-center/page.tsx`)
- Generate referral code
- Share referral link
- Track referral stats
- Earn referral rewards

---

### 15. **Daily Tasks** (`app/daily-tasks/page.tsx`)
- Complete daily tasks
- Earn rewards
- Task progress tracking

---

### 16. **KYC Verification** (`app/kyc/page.tsx`)
- Submit KYC documents
- Check verification status
- Identity verification

---

### 17. **Help & Support** (`app/help/page.tsx`)
- FAQ section
- Contact support
- Create support tickets

---

### 18. **Recently Viewed** (`app/recently-viewed/page.tsx`)
- Track viewed ads
- Quick access to recently viewed items

---

### 19. **Neighborhood** (`app/neighborhood/page.tsx`)
- Location-based feed
- Nearby listings

---

### 20. **Seller Dashboard** (`app/seller-dashboard/page.tsx`)
- Seller-specific dashboard
- Sales analytics
- Performance metrics

---

### 21. **Seller Profile** (`app/seller/[id]/page.tsx`)
- Public seller profile
- Seller ratings & reviews
- Seller's listings

---

## 🔐 Authentication & Security

### Middleware (`middleware.ts`)
- Route protection
- Token validation
- Public routes (home, login, register, search, ads viewing)
- Protected routes (dashboard, profile, wallet, etc.)
- Auto-redirect to login if not authenticated

### Auth Store (`lib/store/authStore.ts`)
- User state management with Zustand
- Token storage (localStorage + cookies)
- Persistent authentication
- Logout functionality

### API Security (`lib/api.ts`)
- JWT token in Authorization header
- Automatic token injection
- 401 error handling (auto-logout)
- Request/Response interceptors

---

## 🌐 API Integration

### API Base Configuration (`lib/api.ts`)
- Base URL: `NEXT_PUBLIC_API_URL/v1`
- Default: `http://3.236.171.71/v1`
- Axios instance with interceptors
- Request timeout: 10 seconds
- Automatic error handling

### Available API Modules:
1. **authApi** - Authentication (login, signup, profile)
2. **adsApi** - Ads CRUD operations
3. **categoriesApi** - Categories listing
4. **loyaltyApi** - Loyalty points & rewards
5. **pointsExchangeApi** - Points redemption
6. **walletApi** - Wallet operations
7. **favoritesApi** - Favorites management
8. **recentlyViewedApi** - Recently viewed tracking
9. **neighborhoodApi** - Location-based feed
10. **buyerRequestApi** - Buyer requests
11. **swapRequestApi** - Swap requests
12. **messagesApi** - Messaging/chat
13. **supportApi** - Support tickets
14. **reportsApi** - Report ads
15. **sellerRatingApi** - Seller ratings
16. **adAnalyticsApi** - Ad analytics
17. **adHistoryApi** - Ad history
18. **adQualityApi** - Ad quality scoring
19. **kycApi** - KYC verification
20. **notificationsApi** - Notifications
21. **chatReactionsApi** - Chat reactions
22. **usersApi** - User operations
23. **boostApi** - Ad boosting

---

## 🎨 UI/UX Features

### Theme System
- **Dark Mode** support
- Theme persistence (localStorage)
- Smooth theme transitions
- System preference detection

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Mobile menu navigation
- Responsive grids

### Animations
- Fade-in animations
- Smooth transitions
- Hover effects
- Loading states
- Carousel animations

### Components
- Reusable UI components
- Consistent styling
- Custom buttons, cards, modals
- Toast notifications

---

## 📱 Header Component (`components/layout/Header.tsx`)

**Features:**
- Logo & branding
- Search bar (desktop & mobile)
- Post Ad button
- Theme toggle (dark/light mode)
- Notifications bell (with count badge)
- User menu dropdown:
  - Profile
  - Dashboard
  - Wallet
  - Loyalty Center
  - Daily Tasks
  - Referral Center
  - Swap Requests
  - Settings
  - Logout
- Mobile responsive menu
- Authentication state (show login/signup if not logged in)

---

## 🔄 State Management

### Auth Store (`lib/store/authStore.ts`)
```typescript
- user: User | null
- token: string | null
- isAuthenticated: boolean
- setAuth(user, token)
- logout()
- updateUser(partialUser)
```

### Theme Store (`lib/store/themeStore.ts`)
```typescript
- darkMode: boolean
- toggleDarkMode()
```

Both stores use **Zustand** with persistence.

---

## 🚀 Performance Optimizations

### Next.js Optimizations
- Image optimization (Next.js Image component)
- Code splitting (dynamic imports)
- Lazy loading for heavy components
- Static generation where possible
- SWC minification
- Font optimization
- CSS optimization

### Code Optimizations
- Memoized computations (useMemo)
- Callback memoization (useCallback)
- Component lazy loading
- Reduced bundle size
- Console log removal in production

### API Optimizations
- Request timeout (10s)
- Error handling & retries
- Response caching (React Query)
- Parallel API calls (Promise.all)

---

## 🛠️ Development

### Scripts (`package.json`)
```bash
npm run dev      # Development server (localhost:3000)
npm run build    # Production build
npm start        # Start production server (port 8080)
```

### Environment Variables
- `NEXT_PUBLIC_API_URL` - Backend API URL (default: http://3.236.171.71)

### Configuration Files
- `next.config.js` - Next.js config (images, webpack, headers)
- `tailwind.config.ts` - Tailwind CSS theme & customizations
- `tsconfig.json` - TypeScript compiler options
- `postcss.config.js` - PostCSS configuration

---

## 📦 Dependencies Summary

### Core
- next@14.2.35
- react@18.3.0
- react-dom@18.3.0
- typescript@5.3.3

### UI & Styling
- tailwindcss@3.4.1
- framer-motion@11.0.0
- lucide-react@0.344.0

### State & Data
- zustand@4.5.0
- axios@1.7.0
- react-query@3.39.3

### Forms
- react-hook-form@7.51.0
- zod@3.22.4
- @hookform/resolvers@3.3.4

### Additional
- socket.io-client@4.7.2 (Real-time)
- react-hot-toast@2.4.1 (Notifications)
- react-infinite-scroll-component@6.1.0
- react-image-gallery@1.3.0
- react-share@4.4.1
- react-audio-voice-recorder@2.1.5
- date-fns@3.3.1

---

## 🔍 Key Code Patterns

### 1. Page Structure Pattern
```typescript
'use client';  // Client component

import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useAuthStore } from '@/lib/store/authStore';
import { apiFunction } from '@/lib/api';

export default function PageName() {
  const { user, isAuthenticated } = useAuthStore();
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div>
      <Header />
      <main>...</main>
      <Footer />
    </div>
  );
}
```

### 2. API Call Pattern
```typescript
import { adsApi } from '@/lib/api';

const fetchAds = async () => {
  try {
    const response = await adsApi.getAll();
    setAds(response.data);
  } catch (error) {
    toast.error('Failed to load ads');
  }
};
```

### 3. Authentication Pattern
```typescript
import { useAuthStore } from '@/lib/store/authStore';

const { user, isAuthenticated, logout } = useAuthStore();

// Check auth
if (!isAuthenticated) {
  router.push('/login');
}
```

---

## 🎯 Project Flow

### User Journey:
1. **Landing** → Homepage (`/`)
2. **Browse** → Dashboard (`/dashboard`) - View all ads
3. **Search** → Search page with filters
4. **View Ad** → Ad detail page (`/ads/[id]`)
5. **Create Account** → Register (`/register`)
6. **Login** → Login page (`/login`)
7. **Post Ad** → Create ad (`/post-ad`)
8. **Manage** → My Ads (`/my-ads`)
9. **Chat** → Messages (`/messages`)
10. **Wallet** → Wallet (`/wallet`)
11. **Rewards** → Loyalty Center (`/loyalty`)

---

## 🔐 Route Protection

### Public Routes (No Auth Required):
- `/` (Homepage)
- `/login`
- `/register`
- `/forgot-password`
- `/search`
- `/categories`
- `/ads/[id]` (Viewing ads)
- `/seller/[id]` (Seller profiles)

### Protected Routes (Auth Required):
- `/dashboard`
- `/profile`
- `/post-ad`
- `/my-ads`
- `/favorites`
- `/messages`
- `/wallet`
- `/loyalty`
- `/settings`
- `/notifications`
- And all other user-specific pages

**Implementation:** `middleware.ts` checks for token in cookies and redirects to `/login` if not authenticated.

---

## 🎨 Design System

### Colors
- **Primary**: Blue shades (#0ea5e9 to #0284c7)
- **Secondary**: Purple shades (#a855f7 to #9333ea)
- **Dark Mode**: Gray scale (gray-900 to gray-50)

### Typography
- Font: Inter (Google Fonts)
- Responsive font sizes
- Gradient text for headings

### Shadows
- `soft` - Subtle shadow
- `medium` - Medium shadow
- `large` - Large shadow
- `glow` - Glowing effect

### Animations
- `fadeIn` - Fade in effect
- `fadeInUp` - Fade in from bottom
- `pulse-slow` - Slow pulse
- `spin-slow` - Slow spin

---

## 📝 Important Notes

1. **Backend API**: Project connects to backend API at `NEXT_PUBLIC_API_URL/v1`
2. **Authentication**: Uses JWT tokens stored in localStorage + cookies
3. **State Management**: Zustand for global state (lightweight alternative to Redux)
4. **Real-time**: Socket.io for real-time messaging
5. **Image Handling**: Next.js Image component for optimization
6. **Performance**: Lazy loading, code splitting, memoization
7. **Type Safety**: Full TypeScript implementation
8. **Responsive**: Mobile-first design approach
9. **Dark Mode**: Full dark mode support with theme persistence
10. **Error Handling**: Comprehensive error handling with toast notifications

---

## 🚀 Deployment

### Build for Production
```bash
npm run build    # Creates optimized production build
npm start        # Runs on port 8080
```

### Environment Setup
Create `.env.local`:
```
NEXT_PUBLIC_API_URL=http://your-backend-url
```

---

## 📚 Summary

**MEGO Website** ek complete, production-ready marketplace platform hai jo:
- ✅ Modern tech stack use karta hai (Next.js 14, TypeScript, Tailwind)
- ✅ Full-featured hai (Ads, Messaging, Wallet, Loyalty, etc.)
- ✅ Secure hai (JWT auth, route protection)
- ✅ Fast hai (Performance optimizations)
- ✅ Beautiful hai (Modern UI with dark mode)
- ✅ Responsive hai (Mobile-friendly)
- ✅ Scalable hai (Clean architecture)

Yeh ek professional-grade application hai jo ready hai production ke liye! 🎉


