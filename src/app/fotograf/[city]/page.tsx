import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cities } from '@/lib/locations'
import { SubPageHero } from '@/components/sections/sub-page-hero'
import { ProseSection } from '@/components/sections/prose-section'
import { InternalLinks } from '@/components/sections/internal-links'
import { CTA } from '@/components/sections/cta'

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

  const neighborLinks = entry.neighbors
    .map((slug) => cities.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))
    .map((c) => ({ href: `/fotograf/${c.slug}`, label: `Fotograf ${c.name}`, hint: `${c.distanceKm} km von Euskirchen` }))

  return (
    <main className="relative min-h-screen">
      <SubPageHero
        eyebrow={`Standort · ${entry.distanceKm} km von Euskirchen`}
        h1={`Fotograf ${entry.name}`}
        subtitle={entry.tagline}
      />

      <ProseSection eyebrow="Über die Arbeit in dieser Stadt" title={`Lichtraum in ${entry.name}`}>
        <p>{entry.intro}</p>
        <p>
          Unsere Shootings in {entry.name} reichen von Hochzeiten über Portraits bis zu Businessfotos.
          Wir kennen die besten Tageszeiten für die Locations vor Ort — und wissen, wo man sie mit etwas
          Ruhe erleben kann.
        </p>
      </ProseSection>

      <ProseSection eyebrow="Shooting-Locations" title="Wo wir in dieser Stadt gerne fotografieren" maxWidth="wide">
        <ul className="space-y-3 list-disc pl-6 marker:text-accent">
          {entry.locations.map((loc) => (
            <li key={loc}>{loc}</li>
          ))}
        </ul>
        <p className="pt-6 text-fg-muted text-base">
          Platzhalter — in Phase 3/7 ersetzt durch ausführliche Beschreibungen pro Location (mind. 800 Wörter pro Stadtseite).
        </p>
      </ProseSection>

      <InternalLinks title={`Auch verfügbar in Nachbarstädten von ${entry.name}`} links={neighborLinks} />

      <CTA />
    </main>
  )
}
