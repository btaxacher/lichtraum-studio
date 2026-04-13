'use client'

import dynamic from 'next/dynamic'
import { useRef } from 'react'
import { trailImages } from '@/lib/content'

const ImageTrail = dynamic(() => import('@/components/ui/image-trail').then((m) => m.ImageTrail), {
  ssr: false,
})

export function BehindTheScenes() {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-bg-elevated border-y border-border-soft">
      <div ref={ref} className="absolute inset-0 z-0">
        <ImageTrail containerRef={ref}>
          {trailImages.map((url, i) => (
            <div key={i} className="w-24 h-32 md:w-32 md:h-40 rounded-lg overflow-hidden shadow-editorial">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={url} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </ImageTrail>
      </div>

      <div className="relative z-[1] h-full flex flex-col items-center justify-center text-center pointer-events-none px-6">
        <div className="eyebrow mb-6 text-accent">Behind the Scenes</div>
        <h2 className="editorial-display text-6xl md:text-8xl lg:text-9xl font-light tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-fg via-fg to-fg/40">
          MOMENTE
        </h2>
        <p className="mt-6 text-fg-muted max-w-md">
          Bewege die Maus. So fühlt sich ein Shootingtag für mich an.
        </p>
      </div>
    </section>
  )
}
