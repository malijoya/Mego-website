/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep dev experience good but avoid extra overhead in production
  reactStrictMode: false,
  
  // Image optimization - using remotePatterns (domains deprecated)
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'http',
        hostname: '192.168.0.106',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
      },
      {
        protocol: 'http',
        hostname: '3.236.171.71',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Compression
  compress: true,
  
  // Performance optimizations
  swcMinify: true,
  
  // Aggressive performance optimizations
  poweredByHeader: false,
  
  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
  
  // Reduce bundle size in production by stripping most console logs
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  
  // Optimize fonts
  optimizeFonts: true,
  
  // Production source maps disabled for speed
  productionBrowserSourceMaps: false,
  
  // Webpack alias for @/ imports + cache fixes
  webpack: (config, { dev, isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname),
    };
    
    // Fix webpack cache issues in dev mode
    if (dev) {
      config.cache = false; // Disable cache to avoid module loading issues
    }
    
    // Ensure proper module resolution
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    
    return config;
  },
  
  // Headers for caching (skip _next static files in dev)
  async headers() {
    // Don't apply cache headers in development to avoid 404 issues
    if (process.env.NODE_ENV === 'development') {
      return [];
    }
    
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  env: {
    // Default to deployed backend URL; can be overridden via environment variable
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://3.236.171.71',
  },
}

module.exports = nextConfig




