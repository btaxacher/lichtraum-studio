import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cities, services } from '@/lib/locations'
import { cityContent } from '@/content/city-content'
import { SubPageHero } from '@/components/sections/sub-page-hero'
import { ProseSection } from '@/components/sections/prose-section'
import { InternalLinks } from '@/components/sections/internal-links'
import { CTA } from '@/components/sections/cta'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { brand } from '@/lib/content'
import { SITE_URL } from '@/lib/site-url'

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }))
}

type Props = { params: Promise<{ city: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params
  const entry = cities.find((c) => c.slug === city)
  if (!entry) return {}
  const title = `Fotograf ${entry.name} | Lichtraum Studio`
  const description = `${entry.tagline}. Hochzeitsfotograf, Portrait- und Businessfotos in ${entry.name}. Anfahrt vom Lichtraum-Studio Euskirchen: ca. ${entry.distanceKm} km.`
  return {
    title,
    description,
    alternates: { canonical: `/fotograf/${entry.slug}` },
    openGraph: { title, description, type: 'website', locale: 'de_DE' },
  }
}

export default async function CityPage({ params }: Props) {
  const { city } = await params
  const entry = cities.find((c) => c.slug === city)
  if (!entry) notFound()
  const content = cityContent[city]

  const neighborLinks = entry.neighbors
    .map((slug) => cities.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))
    .map((c) => ({ href: `/fotograf/${c.slug}`, label: `Fotograf ${c.name}`, hint: `${c.distanceKm} km von Euskirchen` }))

  const serviceLinks = services.slice(0, 3).map((s) => ({
    href: `/leistungen/${s.slug}`, label: s.name, hint: s.startingPrice,
  }))

  const cityBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${brand.studio} — ${entry.name}`,
    description: entry.tagline,
    areaServed: entry.name,
    provider: { '@type': 'Organization', name: brand.studio, url: SITE_URL },
    address: { '@type': 'PostalAddress', addressLocality: entry.name, postalCode: entry.postalCode, addressCountry: 'DE' },
  }

  const faqSchema = content?.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: content.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null

  return (
    <main className="relative min-h-screen">
      <Breadcrumbs items={[{ label: 'Standorte' }, { label: entry.name }]} />
      <SubPageHero
        eyebrow={`Standort · ${entry.distanceKm} km von Euskirchen`}
        h1={`Fotograf ${entry.name}`}
        subtitle={entry.tagline}
      />

      <ProseSection eyebrow="Über die Arbeit in dieser Stadt" title={`Lichtraum in ${entry.name}`}>
        <p>{entry.intro}</p>
        {content?.longIntro.map((p, i) => <p key={i}>{p}</p>)}
      </ProseSection>

      {content?.sections.map((s, i) => (
        <ProseSection key={i} title={s.h2}>
          {s.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
        </ProseSection>
      ))}

      <ProseSection eyebrow="Shooting-Locations" title="Wo wir in dieser Stadt fotografieren" maxWidth="wide">
        <ul className="space-y-3 list-disc pl-6 marker:text-accent">
          {entry.locations.map((loc) => <li key={loc}>{loc}</li>)}
        </ul>
      </ProseSection>

      {content?.faqs && content.faqs.length > 0 && (
        <section className="py-16 md:py-24 border-b border-border-soft bg-bg-elevated">
          <div className="mx-auto max-w-[880px] px-5 md:px-8 lg:px-12">
            <h2 className="editorial-display text-3xl md:text-5xl text-fg mb-10 leading-[1.1]">Häufige Fragen zu {entry.name}</h2>
            <dl className="space-y-6">
              {content.faqs.map((f) => (
                <div key={f.q} className="border border-border-soft rounded-xl px-6 py-5">
                  <dt className="text-fg font-medium mb-2">{f.q}</dt>
                  <dd className="text-fg/80 leading-relaxed font-light">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {content && (
        <ProseSection eyebrow="Nächster Schritt">
          <p>{content.closing}</p>
        </ProseSection>
      )}

      <InternalLinks title={`Auch verfügbar in Nachbarstädten von ${entry.name}`} links={neighborLinks} />
      <InternalLinks title="Unsere Leistungen" links={serviceLinks} />

      <CTA />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cityBusinessSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
    </main>
  )
}
