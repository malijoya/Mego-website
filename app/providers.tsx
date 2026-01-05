'use client';

import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useThemeStore } from '@/lib/store/themeStore';
import { useAuthStore } from '@/lib/store/authStore';

// Create a single QueryClient instance (singleton pattern for better performance)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  const { darkMode, setDarkMode } = useThemeStore();
  const { user } = useAuthStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Initialize theme after mount - client-side only
    if (typeof window === 'undefined' || !mounted) return;
    
    // Only set if not already set by ThemeScript
    const htmlHasDark = document.documentElement.classList.contains('dark');
    
    try {
      const savedTheme = localStorage.getItem('mego-theme');
      if (savedTheme) {
        const parsed = JSON.parse(savedTheme);
        if (parsed.state?.darkMode !== undefined) {
          // Only update if different from current state
          if (parsed.state.darkMode !== htmlHasDark) {
            setDarkMode(parsed.state.darkMode);
          }
          return;
        }
      }
    } catch (error) {
      // Ignore parse errors
    }
    
    // Check system preference only if no saved theme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark !== htmlHasDark) {
      setDarkMode(prefersDark);
    }
  }, [mounted, setDarkMode]);

  // Sync user's dark mode preference
  useEffect(() => {
    if (typeof window === 'undefined' || !mounted) return;
    if (user?.darkMode !== undefined) {
      setDarkMode(user.darkMode);
    }
  }, [user, setDarkMode, mounted]);

  // Apply dark mode class to document
  useEffect(() => {
    if (typeof window === 'undefined' || !mounted) return;
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode, mounted]);

  return (
    <QueryClientProvider client={queryClient}>
      <div suppressHydrationWarning>
        {children}
      </div>
    </QueryClientProvider>
  );
}

