import { JsonLd } from './JsonLd'
import { SITE_URL } from '@/lib/site-url'
import { brand } from '@/lib/content'

type Review = { author: string; body: string; ratingValue?: number }

type Props = {
  reviews: Review[]
}

/**
 * Review JSON-LD — einzelne Review-Items für Testimonial-Sections.
 * Keine aggregateRating, weil wir (noch) nicht genügend echte Google-Reviews haben
 * um das ehrlich darzustellen. Einzelne Reviews sind aber für Rich Results geeignet.
 */
export function ReviewSchema({ reviews }: Props) {
  if (!reviews?.length) return null
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@graph': reviews.map((r, i) => ({
          '@type': 'Review',
          '@id': `${SITE_URL}/#review-${i + 1}`,
          itemReviewed: { '@id': `${SITE_URL}/#business` },
          author: { '@type': 'Person', name: r.author },
          reviewBody: r.body,
          publisher: { '@type': 'Organization', name: brand.studio, url: SITE_URL },
          ...(r.ratingValue
            ? {
                reviewRating: {
                  '@type': 'Rating',
                  ratingValue: r.ratingValue,
                  bestRating: 5,
                  worstRating: 1,
                },
              }
            : {}),
        })),
      }}
    />
  )
}
