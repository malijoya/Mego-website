'use client';

import { useEffect, useState } from 'react';

export function ThemeScript() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Initialize theme immediately on client side
    const initTheme = () => {
      try {
        const theme = localStorage.getItem('mego-theme');
        if (theme) {
          const parsed = JSON.parse(theme);
          if (parsed.state?.darkMode) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        } else {
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (prefersDark) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
      } catch (e) {
        document.documentElement.classList.remove('dark');
      }
    };

    // Run immediately after mount
    initTheme();
  }, []);

  // Return null to avoid hydration mismatch
  if (!mounted) return null;
  return null;
}

