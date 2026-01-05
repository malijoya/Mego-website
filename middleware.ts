import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Public routes that don't require authentication
const publicRoutes = [
  '/',
  '/login',
  '/register',
  '/forgot-password',
  '/search',
  '/categories',
  // '/dashboard',
];

// Check if route is public
function isPublicRoute(pathname: string): boolean {
  // Exact matches
  if (publicRoutes.includes(pathname)) {
    return true;
  }
  
  // Check for dynamic routes (like /ads/[id]) - viewing ads is public
  if (pathname.startsWith('/ads/') && !pathname.includes('/edit') && !pathname.includes('/analytics')) {
    return true;
  }
  
  // Seller profile pages are public
  if (pathname.startsWith('/seller/')) {
    return true;
  }
  
  return false;
}

// Check if user is authenticated (check token in cookies)
function isAuthenticated(request: NextRequest): boolean {
  // Check for token in cookies
  const token = request.cookies.get('token')?.value;
  
  // Token must exist and not be empty
  if (token && token.trim().length > 0) {
    return true;
  }
  
  return false;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Allow public routes
  if (isPublicRoute(pathname)) {
    return NextResponse.next();
  }
  
  // Check authentication for protected routes
  if (!isAuthenticated(request)) {
    // Redirect to login with the original URL as redirect parameter
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }
  
  return NextResponse.next();
}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

