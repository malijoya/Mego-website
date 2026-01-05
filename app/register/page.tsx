'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { authApi } from '@/lib/api';
import { useAuthStore } from '@/lib/store/authStore';
import toast from 'react-hot-toast';
import { Eye, EyeOff, Mail, Lock, Phone, User } from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();
  const { setAuth } = useAuthStore();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    // Validate required fields
    if (!formData.name || !formData.phone || !formData.email || !formData.password) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);

    try {
      const { confirmPassword, ...signupData } = formData;
      
      // Log for debugging - always log in dev
      console.log('🔵 Signup attempt:', {
        url: `${process.env.NEXT_PUBLIC_API_URL || 'http://3.236.171.71'}/v1/auth/signup`,
        data: { ...signupData, password: '***' }
      });
      
      const response = await authApi.signup(signupData);
      
      console.log('🟢 Signup response:', response);
      console.log('🟢 Response data:', response?.data);
      console.log('🟢 Response status:', response?.status);
      
      // Check if response has data
      if (!response || !response.data) {
        console.error('❌ No response data:', response);
        toast.error('Invalid response from server');
        setLoading(false);
        return;
      }
      
      // Handle different response formats
      let token: string | null = null;
      let user: any = null;
      
      // Try different response formats
      if (response.data.token) {
        // Format 1: { token: "...", ...user }
        token = response.data.token;
        const { token: _, ...userData } = response.data;
        user = userData;
      } else if (response.data.data?.token) {
        // Format 2: { data: { token: "...", ...user } }
        token = response.data.data.token;
        const { token: _, ...userData } = response.data.data;
        user = userData;
      } else if (response.data.user && response.data.token) {
        // Format 3: { user: {...}, token: "..." }
        token = response.data.token;
        user = response.data.user;
      } else {
        // Try to extract token from any nested structure
        console.warn('⚠️ Unexpected response format, trying to extract token...');
        token = response.data.token || response.data.accessToken || response.data.access_token || null;
        user = response.data.user || response.data.data || response.data;
      }
      
      if (!token) {
        console.error('❌ No token found in response:', {
          responseData: response.data,
          keys: Object.keys(response.data || {}),
        });
        toast.error('Token not received from server. Please check backend response format.');
        setLoading(false);
        return;
      }
      
      if (!user || !user.id) {
        console.warn('⚠️ User data incomplete:', user);
        // Still try to proceed if we have token
      }
      
      console.log('✅ Setting auth with:', { user, hasToken: !!token });
      setAuth(user || { id: 'temp', name: signupData.name, phone: signupData.phone, email: signupData.email }, token);
      
      // Set cookie for middleware authentication
      document.cookie = `token=${token}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`;
      
      toast.success('Account created successfully!');
      
      // Use window.location for immediate redirect to ensure state is updated
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 500);
    } catch (error: any) {
      // Better error handling with detailed logging
      console.error('❌ Signup error details:', {
        error,
        message: error.message,
        response: error.response,
        request: error.request,
        config: error.config,
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
      });
      
      let errorMessage = 'Registration failed. Please try again.';
      
      if (error.response) {
        // Server responded with error
        const serverMessage = error.response.data?.message || error.response.data?.error || error.response.data?.msg;
        errorMessage = serverMessage || `Server error: ${error.response.status} ${error.response.statusText}`;
        console.error('❌ Server error response:', error.response.data);
      } else if (error.request) {
        // Request made but no response
        errorMessage = 'Cannot connect to server. Please check your internet connection and backend URL.';
        console.error('❌ No response received. Request:', error.request);
      } else {
        // Something else happened
        errorMessage = error.message || errorMessage;
        console.error('❌ Error setting up request:', error.message);
      }
      
      toast.error(errorMessage);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />
      <main className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 page-transition">
        <div className="max-w-md w-full space-y-8 animate-fadeInUp">
          <div className="text-center">
            <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
              Join MEGO
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Create your account and start selling
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{' '}
              <Link href="/login" className="font-semibold text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors">
                Sign in
              </Link>
            </p>
          </div>
          <form 
            method="post" 
            action="#" 
            className="mt-8 space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-large border border-gray-200/50 dark:border-gray-700/50" 
            onSubmit={handleSubmit}
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="appearance-none relative block w-full px-10 py-3.5 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 sm:text-sm transition-all shadow-soft"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="appearance-none relative block w-full px-10 py-3.5 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 sm:text-sm transition-all shadow-soft"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="appearance-none relative block w-full px-10 py-3.5 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 sm:text-sm transition-all shadow-soft"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    className="appearance-none relative block w-full px-10 py-3.5 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 sm:text-sm transition-all shadow-soft"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="sr-only">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    className="appearance-none relative block w-full px-10 py-3.5 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 sm:text-sm transition-all shadow-soft"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-semibold rounded-xl text-white btn-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
              >
                {loading ? (
                  <span className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Creating account...</span>
                  </span>
                ) : (
                  'Create account'
                )}
              </button>
            </div>

            <div className="text-xs text-center text-gray-600 dark:text-gray-400">
              By creating an account, you agree to our{' '}
              <Link href="/terms" className="text-primary-600 hover:text-primary-500">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-primary-600 hover:text-primary-500">
                Privacy Policy
              </Link>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}




