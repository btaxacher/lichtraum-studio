'use client'

import { Section, EditorialHeading, Eyebrow } from '@/components/ui/section'
import { ShuffleGrid } from '@/components/ui/shuffle-grid'
import { shuffleImages } from '@/lib/content'

export function GalleryShuffle() {
  return (
    <Section id="gallery" spacing="lg" variant="elevated">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Eyebrow className="mb-6">Galerie</Eyebrow>
          <EditorialHeading size="lg" className="mb-6">
            Jeder Moment sucht sein Bild
          </EditorialHeading>
          <p className="text-fg-muted leading-relaxed max-w-md">
            Eine kleine Auswahl aus Hochzeiten, Portraits und Editorial-Shootings der letzten zwei
            Jahre. Die Bilder mischen sich — wie Erinnerungen es tun.
          </p>
          <a
            href="/#contact"
            className="inline-block mt-8 border-b border-accent text-accent hover:text-fg hover:border-fg transition-colors pb-1"
          >
            Volle Portfolios anfragen →
          </a>
        </div>
        <ShuffleGrid images={shuffleImages} />
      </div>
    </Section>
  )
}
