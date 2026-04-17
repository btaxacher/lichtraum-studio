import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { SubPageHero } from '@/components/sections/sub-page-hero'
import { ProseSection } from '@/components/sections/prose-section'
import { SubPageFAQ } from '@/components/sections/sub-page-faq'
import { SubPageCta } from '@/components/sections/sub-page-cta'
import { ServiceSchema } from '@/components/seo/ServiceSchema'
import { FaqPageSchema } from '@/components/seo/FaqPageSchema'
import { nrwHubContent } from '@/content/nrw-hub-content'
import { buildMetadata } from '@/lib/metadata'

const heroImage = {
  // V3 — lokales Bild statt Unsplash (nano-banana Kodak Portra 400)
  src: '/images/redesign/gallery-05-couple-field.jpg',
  alt: 'Brautpaar bei Golden Hour in einer Rheinland-Landschaft — Hochzeitsfotograf NRW',
}

export function nrwHubMetadata(): Metadata {
  return buildMetadata({
    title: nrwHubContent.meta.title,
    description: nrwHubContent.meta.description,
    path: '/hochzeitsfotograf-nrw',
    image: heroImage.src,
  })
}

export function NrwHubPage() {
  return (
    <main className="relative min-h-screen">
      <Breadcrumbs items={[{ name: 'Hochzeitsfotograf NRW', path: '/hochzeitsfotograf-nrw' }]} />

      <SubPageHero
        eyebrow={nrwHubContent.meta.eyebrow}
        h1={nrwHubContent.meta.h1}
        subtitle={nrwHubContent.meta.description}
        image={heroImage}
      />

      <ProseSection body={nrwHubContent.intro} />

      <section className="bg-bg-secondary py-14 md:py-20">
        <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12">
          <div className="mb-10 md:mb-14 max-w-[68ch]">
            <p className="eyebrow eyebrow-gold mb-3">Drei Regionen</p>
            <h2
              className="editorial-display text-fg leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)', fontWeight: 500 }}
            >
              Unsere Schwerpunktregionen im Rheinland
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {nrwHubContent.cityCards.map((card) => (
              <Link
                key={card.slug}
                href={`/${card.slug}`}
                className="group block bg-bg-surface border border-border rounded-sm p-7 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 ease-editorial"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="editorial-display text-fg text-xl md:text-2xl leading-[1.25] font-medium">
                    {card.h3}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-accent-gold group-hover:text-accent-terra transition-colors" />
                </div>
                <p className="text-sm text-fg-muted leading-[1.6] mb-4">{card.description}</p>
                <ul className="space-y-1 text-xs text-fg-subtle">
                  {card.locations.slice(0, 5).map((loc) => (
                    <li key={loc}>· {loc}</li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {nrwHubContent.sections.map((s, i) => (
        <ProseSection
          key={i}
          h2={s.h2}
          body={s.body}
          variant={i % 2 === 0 ? 'default' : 'sand'}
        />
      ))}

      <SubPageFAQ faqs={nrwHubContent.faqs} />

      <ProseSection
        eyebrow="Nächster Schritt"
        body={[nrwHubContent.closing]}
        variant="sand"
      />

      <SubPageCta
        heading="Ihr NRW-Hochzeitstermin."
        body="Schreiben Sie uns Datum, Ort und ungefähre Gästezahl — Rückmeldung binnen 24 Stunden."
      />

      <ServiceSchema
        name="Hochzeitsfotograf NRW"
        description={nrwHubContent.meta.description}
        areaServed={['NRW', 'Rheinland', 'Köln', 'Bonn', 'Euskirchen', 'Rhein-Erft', 'Bergisches Land']}
        startingPrice="890"
        path="/hochzeitsfotograf-nrw"
      />
      <FaqPageSchema faqs={nrwHubContent.faqs} />
    </main>
  )
}
