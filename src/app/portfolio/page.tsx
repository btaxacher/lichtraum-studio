import type { Metadata } from 'next'
import { SubPageHero } from '@/components/sections/sub-page-hero'
import { PortfolioParallax } from '@/components/sections/portfolio-parallax'
import { GalleryShuffle } from '@/components/sections/gallery-shuffle'
import { CTA } from '@/components/sections/cta'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'

export const metadata: Metadata = {
  title: 'Portfolio | Lichtraum Fotostudio Euskirchen',
  description: 'Unser Portfolio: Hochzeiten, Portraits, Business und Familie aus dem Raum Euskirchen, Köln und Bonn.',
  alternates: { canonical: '/portfolio' },
}

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen">
      <Breadcrumbs items={[{ label: 'Portfolio' }]} />
      <SubPageHero eyebrow="Portfolio" h1="Arbeiten" subtitle="Ein Auszug aus Hochzeiten, Portraits und Business-Produktionen der letzten Monate." />
      <PortfolioParallax />
      <GalleryShuffle />
      <CTA />
    </main>
  )
}
