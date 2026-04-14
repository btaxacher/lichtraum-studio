import type { MetadataRoute } from 'next'
import { cities, services, allTier1 } from '@/lib/locations'

const BASE = 'https://lichtraum-studio.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const staticPaths = ['', '/portfolio', '/ueber-uns', '/kontakt', '/preise', '/blog']
  const cityPaths = cities.map((c) => `/fotograf/${c.slug}`)
  const servicePaths = services.map((s) => `/leistungen/${s.slug}`)
  const tier1Paths = allTier1.map((t) => `/${t.slug}`)

  return [...staticPaths, ...cityPaths, ...servicePaths, ...tier1Paths].map((p) => ({
    url: `${BASE}${p}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: p === '' ? 1 : p.split('/').length === 2 ? 0.8 : 0.6,
  }))
}
