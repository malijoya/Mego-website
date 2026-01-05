'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
  darkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (value: boolean) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      darkMode: false,
      toggleDarkMode: () => {
        const currentMode = get().darkMode;
        const newMode = !currentMode;
        
        // Update state
        set({ darkMode: newMode });
        
        // Apply class immediately on client side
        if (typeof window !== 'undefined') {
          if (newMode) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
      },
      setDarkMode: (value: boolean) => {
        // Update state
        set({ darkMode: value });
        
        // Apply class immediately on client side
        if (typeof window !== 'undefined') {
          if (value) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
      },
    }),
    {
      name: 'mego-theme',
      skipHydration: true,
    }
  )
);

