import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allTier1 } from '@/lib/locations'
import { tier1Content } from '@/content/tier1-content'
import { SubPageHero } from '@/components/sections/sub-page-hero'
import { ProseSection } from '@/components/sections/prose-section'
import { CTA } from '@/components/sections/cta'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { brand } from '@/lib/content'

export function tier1Metadata(slug: string): Metadata {
  const entry = allTier1.find((t) => t.slug === slug)
  if (!entry) return {}
  return {
    title: entry.title,
    description: entry.description,
    alternates: { canonical: `/${entry.slug}` },
    openGraph: { title: entry.title, description: entry.description, type: 'website', locale: 'de_DE' },
  }
}

export function Tier1Page({ slug }: { slug: string }) {
  const entry = allTier1.find((t) => t.slug === slug)
  const content = tier1Content[slug]
  if (!entry) notFound()

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

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: entry.h1,
    provider: {
      '@type': 'LocalBusiness',
      name: brand.studio,
      url: 'https://lichtraum-studio.vercel.app',
    },
    areaServed: slug.includes('koeln') ? 'Köln' : slug.includes('euskirchen') ? 'Euskirchen' : 'Rheinland',
    description: entry.description,
  }

  const shortLabel = entry.h1.split('—')[0].trim()

  return (
    <main className="relative min-h-screen">
      <Breadcrumbs items={[{ label: 'Leistungen' }, { label: shortLabel }]} />
      <SubPageHero
        eyebrow={content?.eyebrow ?? `Ziel-Volumen: ${entry.targetVolume}/Monat`}
        h1={entry.h1}
        subtitle={entry.description}
      />

      {content && (
        <>
          <ProseSection eyebrow="Einführung" title="Worum es geht">
            {content.intro.map((p, i) => <p key={i}>{p}</p>)}
          </ProseSection>

          {content.sections.map((s, i) => (
            <ProseSection key={i} title={s.h2}>
              {s.body.map((p, j) => <p key={j}>{p}</p>)}
            </ProseSection>
          ))}

          {content.locations && content.locations.length > 0 && (
            <section className="py-16 md:py-24 border-b border-border-soft bg-bg-elevated">
              <div className="mx-auto max-w-[880px] px-5 md:px-8 lg:px-12">
                <h2 className="editorial-display text-3xl md:text-5xl text-fg mb-10 leading-[1.1]">Empfohlene Locations</h2>
                <ul className="grid gap-4 md:grid-cols-2">
                  {content.locations.map((l) => (
                    <li key={l.name} className="border border-border-soft rounded-xl px-5 py-4">
                      <div className="text-fg font-medium">{l.name}</div>
                      <div className="text-sm text-fg-muted mt-1">{l.note}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {content.pricing && content.pricing.length > 0 && (
            <section className="py-16 md:py-24 border-b border-border-soft">
              <div className="mx-auto max-w-[880px] px-5 md:px-8 lg:px-12">
                <h2 className="editorial-display text-3xl md:text-5xl text-fg mb-10 leading-[1.1]">Preise</h2>
                <div className="divide-y divide-border-soft border border-border-soft rounded-xl overflow-hidden">
                  {content.pricing.map((p) => (
                    <div key={p.name} className="flex items-baseline justify-between gap-6 px-6 py-5">
                      <div>
                        <div className="text-fg">{p.name}</div>
                        {p.note && <div className="text-xs text-fg-subtle mt-1">{p.note}</div>}
                      </div>
                      <div className="text-accent font-medium whitespace-nowrap">{p.price}</div>
                    </div>
                  ))}
                </div>
                <p className="text-fg-subtle text-sm mt-4">Alle Preise inklusive Mehrwertsteuer und dezenter Retusche.</p>
              </div>
            </section>
          )}

          {content.faqs.length > 0 && (
            <section className="py-16 md:py-24 border-b border-border-soft bg-bg-elevated">
              <div className="mx-auto max-w-[880px] px-5 md:px-8 lg:px-12">
                <h2 className="editorial-display text-3xl md:text-5xl text-fg mb-10 leading-[1.1]">Häufige Fragen</h2>
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

          <ProseSection eyebrow="Nächster Schritt">
            <p>{content.closing}</p>
          </ProseSection>
        </>
      )}

      <CTA />

      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </main>
  )
}
