'use client'

import dynamic from 'next/dynamic'
import { Section, EditorialHeading, Eyebrow } from '@/components/ui/section'
import { parallaxImages } from '@/lib/content'

const ZoomParallax = dynamic(() => import('@/components/ui/zoom-parallax').then((m) => m.ZoomParallax), {
  ssr: false,
})

export function PortfolioParallax() {
  return (
    <div id="work" className="relative">
      <Section spacing="md" className="relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <Eyebrow className="mb-6">Portfolio</Eyebrow>
          <EditorialHeading size="lg" align="center">
            Ausgewählte Arbeiten
          </EditorialHeading>
          <p className="text-fg-muted mt-6">Scrolle — die Bilder öffnen sich.</p>
        </div>
      </Section>
      <ZoomParallax images={parallaxImages} />
    </div>
  )
}
