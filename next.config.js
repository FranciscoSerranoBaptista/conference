/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  
  // Strict mode for better React development
  reactStrictMode: true,
  
  // SWC minification (faster than Terser)
  swcMinify: true,
  
  // Experimental features
  experimental: {
    // Optimize CSS
    optimizeCss: true,
  },
}

module.exports = nextConfig
