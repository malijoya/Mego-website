/**
 * API Services
 * All API endpoints organized by feature
 */

import api from '@/config/api';
import { API_ENDPOINTS } from '@/constants';

// Re-export api instance
export { default as api } from '@/config/api';

// Re-export getImageUrl utility
export { getImageUrl } from '@/utils';

// ==================== Auth API ====================
export const authApi = {
  signup: (data: { name: string; phone: string; email: string; password: string }) =>
    api.post(API_ENDPOINTS.AUTH.SIGNUP, data),
  login: (data: { phone: string; password: string }) =>
    api.post(API_ENDPOINTS.AUTH.LOGIN, data),
  googleAuth: (data: { accessToken: string }) =>
    api.post(API_ENDPOINTS.AUTH.GOOGLE, data),
  facebookAuth: (data: { accessToken: string }) =>
    api.post(API_ENDPOINTS.AUTH.FACEBOOK, data),
  getProfile: () => api.get(API_ENDPOINTS.AUTH.PROFILE),
  updateProfile: (data: FormData) =>
    api.put(API_ENDPOINTS.AUTH.UPDATE_PROFILE, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  updateSettings: (data: { darkMode: boolean; notificationsEnabled: boolean }) =>
    api.put(API_ENDPOINTS.AUTH.UPDATE_SETTINGS, data),
  changePassword: (data: { currentPassword: string; newPassword: string }) =>
    api.put(API_ENDPOINTS.AUTH.CHANGE_PASSWORD, data),
  updatePrivacy: (data: { hideProfile: boolean; allowMessages: boolean }) =>
    api.put(API_ENDPOINTS.AUTH.UPDATE_PRIVACY, data),
  updateLanguage: (data: { language: string }) =>
    api.put(API_ENDPOINTS.AUTH.UPDATE_LANGUAGE, data),
};

// ==================== Ads API ====================
export const adsApi = {
  getAll: () => api.get(API_ENDPOINTS.ADS.BASE),
  getById: (id: number) => api.get(API_ENDPOINTS.ADS.BY_ID(id)),
  getMyAds: () => api.get(API_ENDPOINTS.ADS.MY_ADS),
  create: (data: FormData) =>
    api.post(API_ENDPOINTS.ADS.BASE, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  update: (id: number, data: FormData) =>
    api.put(API_ENDPOINTS.ADS.BY_ID(id), data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  delete: (id: number) => api.delete(API_ENDPOINTS.ADS.BY_ID(id)),
  markAsSold: (id: number) => api.post(API_ENDPOINTS.ADS.MARK_SOLD(id)),
};

// ==================== Categories API ====================
export const categoriesApi = {
  getAll: () => api.get(API_ENDPOINTS.CATEGORIES),
};

// ==================== Loyalty API ====================
export const loyaltyApi = {
  spin: () => api.post(API_ENDPOINTS.LOYALTY.SPIN),
  getTasks: () => api.get(API_ENDPOINTS.LOYALTY.TASKS),
  completeTask: (taskType: string, points: number) =>
    api.post(API_ENDPOINTS.LOYALTY.COMPLETE_TASK, { taskType, points }),
  getPoints: () => api.get(API_ENDPOINTS.LOYALTY.POINTS),
  getReferralCode: () => api.get(API_ENDPOINTS.LOYALTY.REFERRAL),
  generateReferralCode: () => api.post(API_ENDPOINTS.LOYALTY.GENERATE_REFERRAL),
  redeemReferralCode: (code: string) =>
    api.post(API_ENDPOINTS.LOYALTY.REDEEM_REFERRAL, { referralCode: code }),
  getReferralStats: () => api.get(API_ENDPOINTS.LOYALTY.REFERRAL_STATS),
};

// ==================== Points Exchange API ====================
export const pointsExchangeApi = {
  getOptions: () => api.get('/pointsExchange'),
  exchange: (data: { optionId: string; amount: number }) =>
    api.post('/pointsExchange/exchange', data),
};

// ==================== Wallet API ====================
export const walletApi = {
  getBalance: () => api.get(API_ENDPOINTS.WALLET.BALANCE),
  getTransactions: () => api.get(API_ENDPOINTS.WALLET.TRANSACTIONS),
  getRecentWithdrawals: () => api.get(API_ENDPOINTS.WALLET.RECENT_WITHDRAWALS),
  requestWithdraw: (data: { method: string; amount: string }) =>
    api.post(API_ENDPOINTS.WALLET.WITHDRAW, data),
};

// ==================== Favorites API ====================
export const favoritesApi = {
  getAll: () => api.get(API_ENDPOINTS.FAVORITES.BASE),
  toggle: (adId: number) => api.post(API_ENDPOINTS.FAVORITES.TOGGLE, { adId }),
  add: (adId: number) => api.post(API_ENDPOINTS.FAVORITES.TOGGLE, { adId }),
  remove: (adId: number) => api.post(API_ENDPOINTS.FAVORITES.TOGGLE, { adId }),
};

// ==================== Recently Viewed API ====================
export const recentlyViewedApi = {
  getAll: () => api.get('/recentlyViewed'),
  add: (adId: number) => api.post('/recentlyViewed', { adId }),
};

// ==================== Neighborhood API ====================
export const neighborhoodApi = {
  getFeed: (location?: string) =>
    api.get('/neighborhood/feed', { params: { location } }),
};

// ==================== Buyer Request API ====================
export const buyerRequestApi = {
  getAll: () => api.get('/buyerRequest'),
  create: (data: any) => api.post('/buyerRequest', data),
  respond: (requestId: string, adId: number) =>
    api.post(`/buyerRequest/${requestId}/respond`, { adId }),
};

// ==================== Swap Request API ====================
export const swapRequestApi = {
  getAll: () => api.get('/swapRequest'),
  getForMyAds: () => api.get('/swaprequest/my-ads'),
  getMyAds: () => api.get('/swaprequest/my-ads'),
  create: (data: any) => api.post('/swaprequest', data),
  accept: (id: string) => api.post(`/swaprequest/${id}/accept`),
  reject: (id: string) => api.post(`/swaprequest/${id}/reject`),
};

// ==================== Messages API ====================
export const messagesApi = {
  getConversations: () => api.get(API_ENDPOINTS.MESSAGES.CONVERSATIONS),
  getMessages: (conversationId: string) =>
    api.get(API_ENDPOINTS.MESSAGES.MESSAGES(conversationId)),
  startConversation: (receiverId: string) =>
    api.post(API_ENDPOINTS.MESSAGES.START_CONVERSATION(receiverId)),
  sendMessage: (data: { conversationId: string; content: string; type?: string }) =>
    api.post('/messages', data),
  sendTextMessage: (conversationId: string, content: string) =>
    api.post(API_ENDPOINTS.MESSAGES.SEND_TEXT(conversationId), { content }),
  sendFileMessage: (conversationId: string, data: FormData) =>
    api.post(API_ENDPOINTS.MESSAGES.SEND_FILE(conversationId), data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  sendVoiceMessage: (data: FormData) =>
    api.post(API_ENDPOINTS.MESSAGES.VOICE, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  markAsRead: (conversationId: string, messageId: string) =>
    api.post(API_ENDPOINTS.MESSAGES.MARK_READ(conversationId, messageId)),
  deleteMessage: (conversationId: string, messageId: string) =>
    api.delete(API_ENDPOINTS.MESSAGES.DELETE_MESSAGE(conversationId, messageId)),
  deleteConversation: (conversationId: string) =>
    api.delete(API_ENDPOINTS.MESSAGES.DELETE_CONVERSATION(conversationId)),
};

// ==================== Support API ====================
export const supportApi = {
  createTicket: (data: any) => api.post('/support', data),
  getTickets: () => api.get('/support'),
};

// ==================== Reports API ====================
export const reportsApi = {
  reportAd: (data: { adId: number; reason: string; userId?: string }) =>
    api.post('/report', data),
  getAll: () => api.get('/report/all'),
  updateStatus: (reportId: string, status: string) =>
    api.put(`/report/status/${reportId}`, { status }),
};

// ==================== Seller Rating API ====================
export const sellerRatingApi = {
  rate: (data: { sellerId: string; rating: number; review?: string }) =>
    api.post('/sellerRating', data),
  getRatings: (sellerId: string) => api.get(`/sellerRating/seller/${sellerId}`),
  getMyRatings: () => api.get('/sellerRating/my-ratings'),
};

// ==================== Ad Analytics API ====================
export const adAnalyticsApi = {
  getAnalytics: (adId: number) => api.get(`/adAnalytics/${adId}`),
  trackView: (adId: number) => api.post(`/adAnalytics/${adId}/view`),
  trackClick: (adId: number) => api.post(`/adAnalytics/${adId}/click`),
  trackSave: (adId: number) => api.post(`/adAnalytics/${adId}/save`),
  trackShare: (adId: number) => api.post(`/adAnalytics/${adId}/share`),
};

// ==================== Ad History API ====================
export const adHistoryApi = {
  getHistory: (adId: number) => api.get(`/adHistory/${adId}`),
};

// ==================== Ad Quality API ====================
export const adQualityApi = {
  getScore: (adId: number) => api.get(`/adQuality/${adId}`),
  recalculate: (adId: number) => api.post(`/adQuality/${adId}/recalculate`),
};

// ==================== KYC API ====================
export const kycApi = {
  submit: (data: FormData) =>
    api.post('/kyc/submit', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  getStatus: () => api.get('/kyc/status'),
};

// ==================== Notifications API ====================
export const notificationsApi = {
  getAll: () => api.get('/notifications'),
  markAsRead: (id: string) => api.put(`/notifications/${id}/read`),
  markAllAsRead: () => api.put('/notifications/read-all'),
  delete: (id: string) => api.delete(`/notifications/${id}`),
};

// ==================== Chat Reactions API ====================
export const chatReactionsApi = {
  add: (messageId: string, emoji: string) =>
    api.post(`/chatReaction/message/${messageId}`, { emoji }),
  get: (messageId: string) => api.get(`/chatReaction/message/${messageId}`),
  remove: (messageId: string, emoji: string) =>
    api.delete(`/chatReaction/message/${messageId}/emoji/${emoji}`),
};

// ==================== Users API ====================
export const usersApi = {
  getById: (userId: string) => api.get(`/users/${userId}`),
  getSellerDetails: (sellerId: string) => api.get(`/users/${sellerId}`),
};

// ==================== Boost API ====================
export const boostApi = {
  boostAd: (adId: number) => api.post(`/boost/${adId}`),
  generateShareLink: (adId: number) => api.post(`/boost/ad/${adId}/share-link`),
  trackClick: (refCode: string, adId: number) =>
    api.post(`/boost/track-click?refCode=${refCode}&adId=${adId}`),
  getStatus: (adId: number) => api.get(`/boost/ad/${adId}/status`),
};

