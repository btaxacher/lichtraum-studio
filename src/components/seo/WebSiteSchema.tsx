import { JsonLd } from './JsonLd'
import { SITE_URL } from '@/lib/site-url'
import { brand } from '@/lib/content'

/**
 * WebSite JSON-LD mit optional SearchAction.
 * Best practice für root layout — hilft Google, die Seite als kohärente Site zu verstehen.
 */
export function WebSiteSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: brand.studio,
        inLanguage: 'de-DE',
        publisher: { '@id': `${SITE_URL}/#business` },
      }}
    />
  )
}
