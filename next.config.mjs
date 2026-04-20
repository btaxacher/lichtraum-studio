/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', 'react-icons'],
  },
  async redirects() {
    // Keyword-typo + legacy-slug 301s. Real sub-page routing lives in src/app/.
    return [
      // Keyword-typos → canonical tier-1 slugs (SEO consolidation)
      { source: '/hochzeit-koeln', destination: '/hochzeitsfotograf-koeln', permanent: true },
      { source: '/hochzeit-euskirchen', destination: '/hochzeitsfotograf-euskirchen', permanent: true },
      { source: '/fotografin-koeln', destination: '/fotograf-koeln', permanent: true },
      { source: '/fotografin-euskirchen', destination: '/fotograf-euskirchen', permanent: true },
      // Legacy English → German canonical
      { source: '/work', destination: '/portfolio', permanent: true },
      { source: '/about', destination: '/ueber-uns', permanent: true },
      { source: '/contact', destination: '/kontakt', permanent: true },
      // Blog slug renames (V3 Sistrix-keyword alignment) + safety-net for homepage journal links
      { source: '/blog/was-kostet-hochzeitsfotograf-koeln-2026', destination: '/blog/hochzeitsfotograf-kosten-preise', permanent: true },
      { source: '/blog/schoenste-hochzeitslocations-rhein-erft', destination: '/blog/hochzeitslocations-nrw-rheinland', permanent: true },
      { source: '/blog/hochzeitslocations-rheinland', destination: '/blog/hochzeitslocations-nrw-rheinland', permanent: true },
      { source: '/blog/outfit-bewerbungsshooting', destination: '/blog/bewerbungsfoto-checkliste', permanent: true },
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
