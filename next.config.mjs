/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'randomuser.me' },
      { protocol: 'https', hostname: 'cdn.cosmos.so' },
    ],
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', 'react-icons'],
  },
  async redirects() {
    // One-pager mode — all former sub-routes redirect to homepage.
    return [
      { source: '/portfolio', destination: '/', permanent: false },
      { source: '/leistungen/:slug*', destination: '/', permanent: false },
      { source: '/fotograf/:slug*', destination: '/', permanent: false },
      { source: '/blog/:slug*', destination: '/', permanent: false },
      { source: '/ueber-uns', destination: '/', permanent: false },
      { source: '/kontakt', destination: '/', permanent: false },
      { source: '/preise', destination: '/', permanent: false },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        source: '/:path*.(jpg|jpeg|png|webp|avif|svg|gif|woff2)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ]
  },
}

export default nextConfig
