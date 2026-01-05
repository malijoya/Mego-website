/**
 * API Configuration
 * Centralized API configuration and setup
 */

import axios from 'axios';
import { API_CONFIG } from '@/constants';

// Create axios instance with performance optimizations
export const api = axios.create({
  baseURL: `${API_CONFIG.BASE_URL}/${API_CONFIG.VERSION}`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  timeout: API_CONFIG.TIMEOUT,
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      
      // Log request in development
      if (process.env.NODE_ENV === 'development') {
        console.log('📤 API Request:', {
          method: config.method?.toUpperCase(),
          url: config.url,
          fullURL: (config.baseURL || '') + (config.url || ''),
          data: config.data,
        });
      }
    }
    return config;
  },
  (error) => {
    console.error('❌ Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    // Log successful response in development
    if (process.env.NODE_ENV === 'development') {
      console.log('📥 API Response:', {
        url: response.config?.url,
        status: response.status,
        data: response.data,
      });
    }
    return response;
  },
  (error) => {
    // Enhanced error logging for debugging
    console.error('❌ API Error:', {
      url: error.config?.url,
      fullURL: (error.config?.baseURL || '') + (error.config?.url || ''),
      method: error.config?.method,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      message: error.message,
      code: error.code,
      requestData: error.config?.data,
    });
    
    // Handle 401 Unauthorized - auto logout
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        // Only redirect if not already on login page
        if (window.location.pathname !== '/login' && window.location.pathname !== '/register') {
          window.location.href = '/login';
        }
      }
    }
    
    return Promise.reject(error);
  }
);

export default api;

