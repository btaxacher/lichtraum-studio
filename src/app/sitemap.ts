import type { MetadataRoute } from 'next'
import { SITE_URL as BASE } from '@/lib/site-url'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ]
}
