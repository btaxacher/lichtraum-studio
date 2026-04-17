import { JsonLd } from './JsonLd'
import { SITE_URL } from '@/lib/site-url'

type Item = { name: string; description?: string; url?: string; streetAddress?: string }

type Props = {
  name: string
  items: Item[]
}

/**
 * ItemList JSON-LD — für Listen-Artikel wie Location-Rankings.
 * Beispiel: /blog/hochzeitslocations-nrw-rheinland
 */
export function ItemListSchema({ name, items }: Props) {
  if (!items?.length) return null
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name,
        numberOfItems: items.length,
        itemListElement: items.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'Place',
            name: item.name,
            ...(item.description ? { description: item.description } : {}),
            ...(item.url ? { url: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}` } : {}),
            ...(item.streetAddress
              ? { address: { '@type': 'PostalAddress', streetAddress: item.streetAddress, addressCountry: 'DE' } }
              : {}),
          },
        })),
      }}
    />
  )
}
