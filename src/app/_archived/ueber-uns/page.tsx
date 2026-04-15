import type { Metadata } from 'next'
import { SubPageHero } from '@/components/sections/sub-page-hero'
import { Manifest } from '@/components/sections/manifest'
import { CTA } from '@/components/sections/cta'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'

export const metadata: Metadata = {
  title: 'Über das Studio | Lichtraum Euskirchen',
  description: 'Über Lichtraum Fotostudio in Euskirchen: unsere Philosophie, unsere Arbeitsweise, unser Team.',
  alternates: { canonical: '/ueber-uns' },
}

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <Breadcrumbs items={[{ label: 'Über das Studio' }]} />
      <SubPageHero eyebrow="Über das Studio" h1="Lichtraum Fotostudio" subtitle="Wir sind ein kleines Team aus dem Raum Euskirchen — angetrieben von der Frage, was ein Bild ehrlich macht." />
      <Manifest />
      <CTA />
    </main>
  )
}
