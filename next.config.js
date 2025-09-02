/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  
  // Strict mode for better React development
  reactStrictMode: true,
  
  // Experimental features
  experimental: {
    // Optimize CSS - disabled to avoid critters dependency
    optimizeCss: false,
  },
}

module.exports = nextConfig
