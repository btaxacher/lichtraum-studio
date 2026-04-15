import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { services, cities } from '@/lib/locations'
import { SubPageHero } from '@/components/sections/sub-page-hero'
import { ProseSection } from '@/components/sections/prose-section'
import { InternalLinks } from '@/components/sections/internal-links'
import { CTA } from '@/components/sections/cta'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { brand } from '@/lib/content'
import { SITE_URL } from '@/lib/site-url'

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }))
}

type Props = { params: Promise<{ service: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params
  const entry = services.find((s) => s.slug === service)
  if (!entry) return {}
  const title = `${entry.h1} | Lichtraum Studio`
  const description = `${entry.intro} Preise ${entry.startingPrice}. Termin online anfragen.`
  return {
    title,
    description,
    alternates: { canonical: `/leistungen/${entry.slug}` },
    openGraph: { title, description, type: 'website', locale: 'de_DE' },
  }
}

export default async function ServicePage({ params }: Props) {
  const { service } = await params
  const entry = services.find((s) => s.slug === service)
  if (!entry) notFound()

  const cityLinks = cities.slice(0, 6).map((c) => ({
    href: `/fotograf/${c.slug}`,
    label: `${entry.name} ${c.name}`,
    hint: `${c.distanceKm} km`,
  }))

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: entry.h1,
    description: entry.intro,
    provider: { '@type': 'LocalBusiness', name: brand.studio, url: SITE_URL },
    areaServed: ['Euskirchen', 'Köln', 'Bonn', 'Rhein-Erft'],
    offers: { '@type': 'Offer', price: entry.startingPrice.replace(/[^0-9]/g, ''), priceCurrency: 'EUR' },
  }

  return (
    <main className="relative min-h-screen">
      <Breadcrumbs items={[{ label: 'Leistungen' }, { label: entry.name }]} />
      <SubPageHero
        eyebrow={`Leistung · ${entry.startingPrice}`}
        h1={entry.h1}
        subtitle={entry.intro}
      />

      <ProseSection eyebrow="Ablauf" title="So arbeiten wir">
        <p>
          Jedes Shooting beginnt mit einem Vorgespräch — per Telefon oder Video. Dabei klären wir Anlass, Stimmung,
          Location, Kleidung und Dauer. Auf Wunsch geben wir Orientierungshilfe zu Outfit oder Vorbereitung.
        </p>
        <p>
          Vor Ort arbeiten wir ruhig, beobachtend, mit Zeit. Retusche und Auslieferung erfolgen innerhalb weniger Tage
          über ein geschütztes Online-Portal.
        </p>
        <p className="text-fg-muted text-base">
          Platzhalter — Phase 3/7 ersetzt diesen Text durch ausführlichen Service-Content inkl. Preistabellen und FAQ.
        </p>
      </ProseSection>

      <InternalLinks title={`${entry.name} auch in diesen Städten`} links={cityLinks} />

      <CTA />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </main>
  )
}
