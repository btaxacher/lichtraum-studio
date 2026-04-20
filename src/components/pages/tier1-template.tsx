import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allTier1, tier1Pages, extraNicheCologne } from '@/lib/locations'
import { tier1Content } from '@/content/tier1-content'
import { tier1Images } from '@/content/tier1-images'
import { SubPageHero } from '@/components/sections/sub-page-hero'
import { ProseSection } from '@/components/sections/prose-section'
import { SubPageGallery } from '@/components/sections/sub-page-gallery'
import { SubPagePricing } from '@/components/sections/sub-page-pricing'
import { SubPageFAQ } from '@/components/sections/sub-page-faq'
import { SubPageCta } from '@/components/sections/sub-page-cta'
import { InternalLinks } from '@/components/sections/internal-links'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { ServiceSchema } from '@/components/seo/ServiceSchema'
import { FaqPageSchema } from '@/components/seo/FaqPageSchema'
import { buildMetadata } from '@/lib/metadata'

export function tier1Metadata(slug: string): Metadata {
  const entry = allTier1.find((t) => t.slug === slug)
  if (!entry) return {}
  const img = tier1Images[slug]?.hero.src
  return buildMetadata({
    title: entry.title,
    description: entry.description,
    path: `/${slug}`,
    image: img,
  })
}

/**
 * Infers areaServed from slug.
 * Used by Service JSON-LD.
 */
function inferAreaServed(slug: string): string[] {
  if (slug.includes('koeln')) return ['Köln', 'Rhein-Erft', 'Leverkusen', 'Bonn', 'NRW']
  if (slug.includes('euskirchen')) return ['Euskirchen', 'Weilerswist', 'Zülpich', 'Mechernich', 'Kreis Euskirchen']
  if (slug.includes('bonn')) return ['Bonn', 'Rhein-Sieg', 'Siegburg', 'Königswinter']
  return ['NRW', 'Rheinland']
}

/**
 * Schema-Preise für Tier-1-Seiten.
 * Override-Map statt inferiertem Minimum, damit die Schema-Preise
 * den realistischen Startpreis der Hauptleistung zeigen.
 */
const SCHEMA_PRICE: Record<string, string> = {
  'hochzeitsfotograf-koeln': '1790',
  'hochzeitsfotograf-euskirchen': '1790',
  'bewerbungsfotos-koeln': '89',
  'bewerbungsfotos-euskirchen': '89',
  'fotograf-koeln': '149',
  'fotoshooting-koeln': '149',
  'schwangerschaftsfotos-koeln': '249',
  'businessfotograf-koeln': '149',
}

function inferStartingPrice(slug: string): string | undefined {
  if (SCHEMA_PRICE[slug]) return SCHEMA_PRICE[slug]
  const pricing = tier1Content[slug]?.pricing
  if (!pricing?.length) return undefined
  const prices = pricing
    .filter((p) => !p.price.trimStart().startsWith('+'))
    .map((p) => p.price.match(/(\d[\d.]*)\s*€/))
    .filter((m): m is RegExpMatchArray => !!m)
    .map((m) => Number(m[1].replace(/\./g, '')))
    .filter((n) => Number.isFinite(n) && n > 0)
  if (!prices.length) return undefined
  return String(Math.min(...prices))
}

/**
 * Related tier-1 slugs by topic/city overlap, excluding current.
 */
function relatedTier1(slug: string): string[] {
  const all = allTier1.map((t) => t.slug).filter((s) => s !== slug)
  // Heuristic: same city OR same service prefix.
  const city = ['koeln', 'euskirchen', 'bonn'].find((c) => slug.includes(c))
  const related = all.filter((s) => city && s.includes(city))
  const others = all.filter((s) => !related.includes(s))
  return [...related, ...others].slice(0, 3)
}

/**
 * Full H1 entry (entry.h1) often contains „— Subtitle" — short label strips it.
 */
function shortLabel(h1: string): string {
  return h1.split('—')[0].trim()
}

export function Tier1Page({ slug }: { slug: string }) {
  const entry = allTier1.find((t) => t.slug === slug)
  const content = tier1Content[slug]
  const imgSet = tier1Images[slug]
  if (!entry || !content || !imgSet) notFound()

  const areaServed = inferAreaServed(slug)
  const startingPrice = inferStartingPrice(slug)
  const relatedSlugs = relatedTier1(slug)
  const relatedLinks = relatedSlugs.map((s) => {
    const e = allTier1.find((t) => t.slug === s)!
    return {
      title: shortLabel(e.h1),
      description: e.description.split('.')[0] + '.',
      href: `/${s}`,
    }
  })

  return (
    <main className="relative min-h-screen">
      <Breadcrumbs items={[{ name: shortLabel(entry.h1), path: `/${slug}` }]} />

      <SubPageHero
        eyebrow={content.eyebrow}
        h1={entry.h1}
        subtitle={entry.description}
        image={imgSet.hero}
        secondaryCta={{ label: 'Preise ansehen', href: '#preise' }}
      />

      <ProseSection body={content.intro} />

      {content.sections.map((s, i) => (
        <ProseSection
          key={i}
          h2={s.h2}
          body={s.body}
          variant={i % 2 === 0 ? 'sand' : 'default'}
        />
      ))}

      {content.locations?.length ? (
        <section className="bg-bg-secondary py-14 md:py-20">
          <div className="mx-auto w-full max-w-[1100px] px-5 md:px-8 lg:px-12">
            <div className="mb-10 md:mb-14 max-w-[68ch]">
              <p className="eyebrow eyebrow-gold mb-3">Locations vor Ort</p>
              <h2
                className="editorial-display text-fg leading-[1.1] tracking-tight"
                style={{ fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)', fontWeight: 500 }}
              >
                Wo wir für Sie fotografieren
              </h2>
            </div>
            <ul className="grid gap-4 md:grid-cols-2">
              {content.locations.map((l) => (
                <li
                  key={l.name}
                  className="bg-bg-surface border border-border rounded-sm px-5 py-4 shadow-card"
                >
                  <div className="text-fg font-medium">{l.name}</div>
                  <div className="text-sm text-fg-muted mt-1 leading-[1.6]">{l.note}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <div id="galerie">
        <SubPageGallery
          heading="Bildwelten, die zum Shooting passen"
          eyebrow="Galerie"
          images={imgSet.gallery}
        />
      </div>

      {content.pricing?.length ? (
        <div id="preise">
          <SubPagePricing items={content.pricing} />
        </div>
      ) : null}

      <SubPageFAQ faqs={content.faqs} />

      <ProseSection
        eyebrow="Nächster Schritt"
        body={[content.closing]}
        variant="sand"
      />

      <InternalLinks links={relatedLinks} />

      <SubPageCta
        heading="Schreiben Sie uns."
        body="Wir melden uns binnen 24 Stunden. Kurzer Anlass, Wunschdatum, alles Weitere klären wir im Gespräch."
      />

      {/* JSON-LD */}
      <ServiceSchema
        name={shortLabel(entry.h1)}
        description={entry.description}
        areaServed={areaServed}
        startingPrice={startingPrice}
        path={`/${slug}`}
      />
      <FaqPageSchema faqs={content.faqs} />
    </main>
  )
}
