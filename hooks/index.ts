/**
 * Custom React Hooks
 * Reusable hooks for the MEGO Website
 */

export { useAuthStore } from '@/lib/store/authStore';
export { useThemeStore } from '@/lib/store/themeStore';

// Re-export commonly used hooks from React
export { useState, useEffect, useCallback, useMemo, useRef } from 'react';
export { useRouter, useSearchParams, usePathname } from 'next/navigation';

