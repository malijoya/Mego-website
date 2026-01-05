/**
 * Application Constants
 * Centralized constants for the MEGO Website
 */

import {
  Car, Home, Smartphone, Laptop, Shirt, Gamepad2,
  Dumbbell, Book, Sofa, Watch, Camera, Headphones,
  Bike, Baby, PawPrint, Music, Palette, Wrench, Sprout, Trophy
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

// ==================== API Configuration ====================
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://3.236.171.71',
  VERSION: 'v1',
  TIMEOUT: 10000, // 10 seconds
} as const;

export const API_ENDPOINTS = {
  AUTH: {
    SIGNUP: '/auth/signup',
    LOGIN: '/auth/login',
    GOOGLE: '/auth/google',
    FACEBOOK: '/auth/facebook',
    PROFILE: '/auth/me',
    UPDATE_PROFILE: '/auth/update-profile',
    UPDATE_SETTINGS: '/auth/update-settings',
    CHANGE_PASSWORD: '/auth/change-password',
    UPDATE_PRIVACY: '/auth/update-privacy',
    UPDATE_LANGUAGE: '/auth/update-language',
  },
  ADS: {
    BASE: '/ads',
    MY_ADS: '/ads/my',
    BY_ID: (id: number) => `/ads/${id}`,
    MARK_SOLD: (id: number) => `/ads/${id}/sold`,
  },
  CATEGORIES: '/categories',
  LOYALTY: {
    SPIN: '/loyalty/spin',
    TASKS: '/loyalty/tasks',
    COMPLETE_TASK: '/loyalty/complete-task',
    POINTS: '/loyalty/points',
    REFERRAL: '/loyalty/referral',
    GENERATE_REFERRAL: '/loyalty/generate-referral',
    REDEEM_REFERRAL: '/loyalty/redeem-referral',
    REFERRAL_STATS: '/loyalty/referral/stats',
  },
  WALLET: {
    BALANCE: '/wallet/balance',
    TRANSACTIONS: '/wallet/transactions',
    RECENT_WITHDRAWALS: '/wallet/recent-withdrawals',
    WITHDRAW: '/wallet/withdraw',
  },
  FAVORITES: {
    BASE: '/favorites/me',
    TOGGLE: '/favorites/toggle',
  },
  MESSAGES: {
    CONVERSATIONS: '/conversations',
    MESSAGES: (id: string) => `/messages/${id}`,
    START_CONVERSATION: (id: string) => `/conversations/${id}`,
    SEND_TEXT: (id: string) => `/messages/${id}/text`,
    SEND_FILE: (id: string) => `/messages/${id}/upload`,
    VOICE: '/messages/voice',
    MARK_READ: (conversationId: string, messageId: string) =>
      `/messages/${conversationId}/read/${messageId}`,
    DELETE_MESSAGE: (conversationId: string, messageId: string) =>
      `/messages/${conversationId}/${messageId}`,
    DELETE_CONVERSATION: (id: string) => `/messages/conversation/${id}`,
  },
} as const;

// ==================== Categories ====================
export interface CategoryConfig {
  name: string;
  icon: LucideIcon;
  color: string;
  count: string;
  slug: string;
}

export const CATEGORIES: CategoryConfig[] = [
  { name: 'Vehicles', icon: Car, color: 'bg-blue-500', count: '12K+', slug: 'vehicles' },
  { name: 'Property', icon: Home, color: 'bg-green-500', count: '8K+', slug: 'property' },
  { name: 'Mobiles', icon: Smartphone, color: 'bg-purple-500', count: '15K+', slug: 'mobiles' },
  { name: 'Electronics', icon: Laptop, color: 'bg-red-500', count: '10K+', slug: 'electronics' },
  { name: 'Fashion', icon: Shirt, color: 'bg-pink-500', count: '7K+', slug: 'fashion' },
  { name: 'Gaming', icon: Gamepad2, color: 'bg-yellow-500', count: '5K+', slug: 'gaming' },
  { name: 'Sports', icon: Dumbbell, color: 'bg-orange-500', count: '4K+', slug: 'sports' },
  { name: 'Books', icon: Book, color: 'bg-indigo-500', count: '3K+', slug: 'books' },
  { name: 'Furniture', icon: Sofa, color: 'bg-teal-500', count: '6K+', slug: 'furniture' },
  { name: 'Watches', icon: Watch, color: 'bg-cyan-500', count: '2K+', slug: 'watches' },
  { name: 'Cameras', icon: Camera, color: 'bg-gray-500', count: '3K+', slug: 'cameras' },
  { name: 'Audio', icon: Headphones, color: 'bg-rose-500', count: '4K+', slug: 'audio' },
  { name: 'Motorcycles', icon: Bike, color: 'bg-blue-600', count: '5K+', slug: 'motorcycles' },
  { name: 'Baby Items', icon: Baby, color: 'bg-pink-400', count: '2K+', slug: 'baby' },
  { name: 'Pets', icon: PawPrint, color: 'bg-amber-500', count: '3K+', slug: 'pets' },
  { name: 'Musical Instruments', icon: Music, color: 'bg-violet-500', count: '1K+', slug: 'musical' },
  { name: 'Art & Collectibles', icon: Palette, color: 'bg-rose-400', count: '1K+', slug: 'art' },
  { name: 'Tools & Hardware', icon: Wrench, color: 'bg-slate-500', count: '2K+', slug: 'tools' },
  { name: 'Plants & Garden', icon: Sprout, color: 'bg-emerald-500', count: '1K+', slug: 'plants' },
  { name: 'Trophies & Awards', icon: Trophy, color: 'bg-yellow-400', count: '500+', slug: 'trophies' },
];

export const CATEGORY_NAMES = CATEGORIES.map(cat => cat.name);

// ==================== Ad Conditions ====================
export const AD_CONDITIONS = ['New', 'Like New', 'Good', 'Fair', 'Poor'] as const;

export type AdCondition = typeof AD_CONDITIONS[number];

// ==================== Ad Types ====================
export const AD_TYPES = ['Sell', 'Buy', 'Rent', 'Swap'] as const;

export type AdType = typeof AD_TYPES[number];

// ==================== Routes ====================
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  DASHBOARD: '/dashboard',
  POST_AD: '/post-ad',
  MY_ADS: '/my-ads',
  FAVORITES: '/favorites',
  MESSAGES: '/messages',
  WALLET: '/wallet',
  LOYALTY: '/loyalty',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  NOTIFICATIONS: '/notifications',
  SEARCH: '/search',
  CATEGORIES: '/categories',
  BUYER_REQUESTS: '/buyer-requests',
  SWAP_REQUESTS: '/swap-requests',
  REFERRAL_CENTER: '/referral-center',
  DAILY_TASKS: '/daily-tasks',
  KYC: '/kyc',
  HELP: '/help',
  RECENTLY_VIEWED: '/recently-viewed',
  NEIGHBORHOOD: '/neighborhood',
  SELLER_DASHBOARD: '/seller-dashboard',
  AD_DETAIL: (id: number) => `/ads/${id}`,
  AD_EDIT: (id: number) => `/ads/${id}/edit`,
  AD_ANALYTICS: (id: number) => `/ads/${id}/analytics`,
  SELLER_PROFILE: (id: string) => `/seller/${id}`,
} as const;

// ==================== Protected Routes ====================
export const PROTECTED_ROUTES = [
  ROUTES.DASHBOARD,
  ROUTES.POST_AD,
  ROUTES.MY_ADS,
  ROUTES.FAVORITES,
  ROUTES.MESSAGES,
  ROUTES.WALLET,
  ROUTES.LOYALTY,
  ROUTES.PROFILE,
  ROUTES.SETTINGS,
  ROUTES.NOTIFICATIONS,
  ROUTES.BUYER_REQUESTS,
  ROUTES.SWAP_REQUESTS,
  ROUTES.REFERRAL_CENTER,
  ROUTES.DAILY_TASKS,
  ROUTES.KYC,
  ROUTES.RECENTLY_VIEWED,
  ROUTES.NEIGHBORHOOD,
  ROUTES.SELLER_DASHBOARD,
] as const;

// ==================== Public Routes ====================
export const PUBLIC_ROUTES = [
  ROUTES.HOME,
  ROUTES.LOGIN,
  ROUTES.REGISTER,
  ROUTES.FORGOT_PASSWORD,
  ROUTES.SEARCH,
  ROUTES.CATEGORIES,
  ROUTES.HELP,
] as const;

// ==================== Storage Keys ====================
export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user',
  THEME: 'mego-theme',
  AUTH: 'mego-auth',
} as const;

// ==================== Pagination ====================
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,
} as const;

// ==================== File Upload ====================
export const FILE_UPLOAD = {
  MAX_IMAGE_SIZE: 5 * 1024 * 1024, // 5MB
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
  ALLOWED_FILE_TYPES: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'application/pdf'],
  MAX_IMAGES_PER_AD: 10,
} as const;

// ==================== Date & Time ====================
export const DATE_FORMATS = {
  DISPLAY: 'MMM dd, yyyy',
  DISPLAY_WITH_TIME: 'MMM dd, yyyy hh:mm a',
  API: 'yyyy-MM-dd',
  TIME_ONLY: 'hh:mm a',
} as const;

// ==================== Validation ====================
export const VALIDATION = {
  PHONE_MIN_LENGTH: 10,
  PHONE_MAX_LENGTH: 15,
  PASSWORD_MIN_LENGTH: 6,
  PASSWORD_MAX_LENGTH: 50,
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,
  TITLE_MIN_LENGTH: 5,
  TITLE_MAX_LENGTH: 100,
  DESCRIPTION_MIN_LENGTH: 10,
  DESCRIPTION_MAX_LENGTH: 2000,
} as const;

// ==================== Notification Types ====================
export const NOTIFICATION_TYPES = {
  MESSAGE: 'message',
  AD_VIEW: 'ad_view',
  AD_SAVE: 'ad_save',
  AD_SOLD: 'ad_sold',
  FAVORITE: 'favorite',
  RATING: 'rating',
  SYSTEM: 'system',
} as const;

// ==================== Message Types ====================
export const MESSAGE_TYPES = {
  TEXT: 'text',
  IMAGE: 'image',
  FILE: 'file',
  VOICE: 'voice',
} as const;

// ==================== Sort Options ====================
export const SORT_OPTIONS = {
  NEWEST: 'newest',
  OLDEST: 'oldest',
  PRICE_LOW: 'price_low',
  PRICE_HIGH: 'price_high',
  POPULAR: 'popular',
} as const;

// ==================== Refresh Intervals ====================
export const REFRESH_INTERVALS = {
  DASHBOARD: 30000, // 30 seconds
  NOTIFICATIONS: 60000, // 1 minute
  MESSAGES: 5000, // 5 seconds
} as const;

// ==================== Theme ====================
export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
} as const;

// ==================== Error Messages ====================
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'You are not authorized. Please login.',
  NOT_FOUND: 'Resource not found.',
  SERVER_ERROR: 'Server error. Please try again later.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  UNKNOWN_ERROR: 'An unknown error occurred.',
} as const;

// ==================== Success Messages ====================
export const SUCCESS_MESSAGES = {
  LOGIN: 'Login successful!',
  REGISTER: 'Registration successful!',
  AD_CREATED: 'Ad posted successfully!',
  AD_UPDATED: 'Ad updated successfully!',
  AD_DELETED: 'Ad deleted successfully!',
  PROFILE_UPDATED: 'Profile updated successfully!',
  PASSWORD_CHANGED: 'Password changed successfully!',
  MESSAGE_SENT: 'Message sent successfully!',
} as const;

