import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allTier1 } from '@/lib/locations'
import { SubPageHero } from '@/components/sections/sub-page-hero'
import { ProseSection } from '@/components/sections/prose-section'
import { CTA } from '@/components/sections/cta'

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
  if (!entry) notFound()

  return (
    <main className="relative min-h-screen">
      <SubPageHero
        eyebrow={`Ziel-Volumen: ${entry.targetVolume}/Monat · Nische`}
        h1={entry.h1}
        subtitle={entry.description}
      />
      <ProseSection eyebrow="Über diese Leistung" title="Worauf es ankommt">
        <p>{entry.intro}</p>
        <p className="text-fg-muted text-base">
          Platzhalter — Phase 3 ersetzt diesen Inhalt durch 1.400–1.800 Wörter mit Preistabelle, 10+ FAQ, Galerie
          und schema.org FAQPage + Service-Markup.
        </p>
      </ProseSection>
      <CTA />
    </main>
  )
}
