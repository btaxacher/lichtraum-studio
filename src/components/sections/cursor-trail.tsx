'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { ImageTrail } from '@/components/ui/image-trail'
import { galleryItems } from '@/lib/content'

/**
 * CursorTrail — 21st.dev ImageTrail-Pattern, an Warm Editorial Light angepasst.
 * Volle Section-Breite, grosses Heading zentriert, Bilder folgen dem Cursor
 * ueber die gesamte Flaeche und faden editorial aus.
 */
export function CursorTrail() {
  const ref = useRef<HTMLDivElement>(null)
  // 8 Kodak-Portra-400 Bilder aus der Gallery
  const trailImages = galleryItems.slice(0, 8)

  return (
    <section
      className="relative flex w-full justify-center items-center bg-bg overflow-hidden"
      style={{ height: 'clamp(520px, 85vh, 860px)' }}
    >
      {/* Trail layer — fills whole section */}
      <div ref={ref} className="absolute inset-0 z-0">
        <ImageTrail
          containerRef={ref}
          rotationRange={14}
          interval={100}
          animationSequence={[
            [{ scale: 1.15 }, { duration: 0.2, ease: 'circOut' }],
            [{ scale: 0 }, { duration: 0.7, ease: 'circIn' }],
          ]}
        >
          {trailImages.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden w-24 h-24 md:w-28 md:h-28 rounded-md shadow-card -translate-x-1/2 -translate-y-1/2"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt=""
                className="object-cover absolute inset-0 w-full h-full"
              />
            </div>
          ))}
        </ImageTrail>
      </div>

      {/* Editorial Heading — zentriert, uebergross */}
      <div className="relative z-10 select-none pointer-events-none text-center px-5">
        <p className="script-heading text-4xl md:text-5xl lg:text-[4.5rem] mb-3 md:mb-5">
          Momente,
        </p>
        <h2
          className="editorial-display text-fg leading-[0.95] tracking-tight"
          style={{ fontSize: 'clamp(2.8rem, 10vw, 8.5rem)', fontWeight: 500 }}
        >
          die bleiben.
        </h2>
      </div>
    </section>
  )
}
