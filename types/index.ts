/**
 * Central TypeScript type definitions for MEGO Website
 * All interfaces and types should be exported from here
 */

// ==================== User Types ====================
export interface User {
  id: string;
  name: string;
  phone: string;
  email: string;
  profileImage?: string;
  darkMode?: boolean;
  notificationsEnabled?: boolean;
  coinsBalance?: number;
  verificationTier?: string;
  language?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  setAuth: (user: User, token: string) => void;
  logout: () => void;
  updateUser: (user: Partial<User>) => void;
}

// ==================== Ad Types ====================
export interface Ad {
  id: number;
  title: string;
  price: number;
  imageUrl?: string;
  location: string;
  category?: string;
  description?: string;
  condition?: string;
  adType?: string;
  contact?: string;
  createdAt: string;
  views?: number;
  media?: Array<{ filePath: string; mediaUrl?: string }>;
  sellerId?: string;
  sellerName?: string;
  sellerImage?: string;
  isFavorite?: boolean;
  isSold?: boolean;
}

export interface AdFormData {
  title: string;
  description: string;
  price: number;
  category: string;
  condition: string;
  location: string;
  adType: string;
  images: File[];
}

// ==================== Category Types ====================
export interface Category {
  id: string;
  name: string;
  icon?: string;
  imageUrl?: string;
  description?: string;
  parentId?: string;
}

// ==================== Message Types ====================
export interface ConversationUser {
  id: string;
  name: string;
  phone: string;
  email: string;
  profileImage?: string;
  Image?: string;
}

export interface Conversation {
  id: string;
  participants: ConversationUser[];
  lastMessage?: Message;
  updatedAt: string;
  unreadCount: number;
}

export interface Message {
  id: string;
  content: string;
  senderId: string;
  type: 'text' | 'image' | 'file' | 'voice';
  createdAt: string;
  fileUrl?: string;
  voiceUrl?: string;
  reactions?: MessageReaction[];
  isRead?: boolean;
}

export interface MessageReaction {
  emoji: string;
  userId: string;
  userName: string;
}

// ==================== Wallet Types ====================
export interface WalletTransaction {
  id: string;
  type: 'credit' | 'debit';
  amount: number;
  description: string;
  status: 'pending' | 'completed' | 'failed';
  createdAt: string;
  method?: string;
}

export interface WalletBalance {
  balance: number;
  pendingWithdrawals?: number;
}

// ==================== Loyalty Types ====================
export interface Task {
  id: string;
  taskType: string;
  title: string;
  description: string;
  points: number;
  completed: boolean;
  frequency: string;
}

export interface PointsExchangeOption {
  id: string;
  name: string;
  description: string;
  pointsRequired: number;
  value: number;
  type: 'cash' | 'discount' | 'reward';
}

export interface ReferralStats {
  totalReferrals: number;
  activeReferrals: number;
  totalEarnings: number;
  referralCode: string;
}

// ==================== Buyer Request Types ====================
export interface BuyerRequest {
  id: string;
  title: string;
  description: string;
  category: string;
  maxPrice: number;
  location: string;
  buyerId: string;
  buyerName: string;
  buyerImage?: string;
  createdAt: string;
  status: 'active' | 'fulfilled' | 'closed';
  responses?: Array<{
    adId: number;
    adTitle: string;
    adPrice: number;
    adImage?: string;
  }>;
}

// ==================== Swap Request Types ====================
export interface SwapRequest {
  id: string;
  requestedAdId: number;
  offeredAdId: number;
  requestedAd: Ad;
  offeredAd: Ad;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: string;
  message?: string;
}

// ==================== Notification Types ====================
export interface Notification {
  id: string;
  type: string;
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  link?: string;
  imageUrl?: string;
}

// ==================== Seller Types ====================
export interface Seller {
  id: string;
  name: string;
  phone: string;
  email: string;
  profileImage?: string;
  rating?: number;
  totalRatings?: number;
  verified?: boolean;
  joinedAt?: string;
}

export interface SellerRating {
  id: string;
  sellerId: string;
  buyerId: string;
  rating: number;
  review?: string;
  createdAt: string;
  buyerName?: string;
  buyerImage?: string;
}

// ==================== Analytics Types ====================
export interface AdAnalytics {
  adId: number;
  views: number;
  clicks: number;
  saves: number;
  shares: number;
  lastViewed?: string;
}

// ==================== KYC Types ====================
export interface KYCStatus {
  status: 'pending' | 'approved' | 'rejected' | 'not_submitted';
  tier?: string;
  submittedAt?: string;
  reviewedAt?: string;
  rejectionReason?: string;
}

// ==================== Support Types ====================
export interface SupportTicket {
  id: string;
  subject: string;
  message: string;
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  createdAt: string;
  updatedAt?: string;
  response?: string;
}

// ==================== Theme Types ====================
export interface ThemeState {
  darkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (value: boolean) => void;
}

// ==================== API Response Types ====================
export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  success: boolean;
  errors?: string[];
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// ==================== Form Types ====================
export interface LoginFormData {
  phone: string;
  password: string;
}

export interface RegisterFormData {
  name: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ProfileUpdateData {
  name?: string;
  email?: string;
  profileImage?: File;
}

export interface SettingsData {
  darkMode: boolean;
  notificationsEnabled: boolean;
  language?: string;
  hideProfile?: boolean;
  allowMessages?: boolean;
}

// ==================== Search & Filter Types ====================
export interface SearchFilters {
  query?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  location?: string;
  condition?: string;
  adType?: string;
  sortBy?: 'newest' | 'oldest' | 'price_low' | 'price_high' | 'popular';
}

// ==================== Component Props Types ====================
export interface PageProps {
  params?: Record<string, string>;
  searchParams?: Record<string, string | string[] | undefined>;
}

