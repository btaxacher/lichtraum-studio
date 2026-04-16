'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ImageTrail } from '@/components/ui/image-trail'
import { galleryItems } from '@/lib/content'

const editorialEase = [0.22, 1, 0.36, 1] as const

/**
 * CursorTrail — interaktive Section.
 * Mausbewegung über die Fläche erzeugt einen editorial Bilder-Trail,
 * der langsam wieder ausfadet. Touch-fallback: statische Grid-Vorschau.
 */
export function CursorTrail() {
  const containerRef = useRef<HTMLDivElement>(null)
  // 8 cohärente Kodak-Portra-400 Bilder aus der Gallery
  const trailImages = galleryItems.slice(0, 8)

  return (
    <section className="relative w-full bg-bg-secondary py-24 md:py-32 overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: editorialEase }}
          className="max-w-[640px]"
        >
          <div className="eyebrow eyebrow-gold">BEWEG DICH</div>
          <p className="script-heading script-tilt-mild mt-4 text-3xl md:text-4xl lg:text-[3rem]">
            Augenblicke, keine Posen.
          </p>
          <h2
            className="editorial-display text-fg mt-3 md:mt-5"
            style={{ fontSize: 'clamp(1.8rem, 3.6vw, 3rem)', fontWeight: 500, lineHeight: 1.1 }}
          >
            Zieh den Cursor durch die Fläche.
          </h2>
          <p className="mt-5 text-fg-muted text-base md:text-lg leading-[1.7] max-w-[520px]">
            Das Bild entsteht dort, wo ihr hinschaut. Genau so arbeiten wir auch mit der Kamera —
            wir folgen euch, nicht umgekehrt.
          </p>
        </motion.div>

        {/* Trail Area */}
        <div
          ref={containerRef}
          className="relative mt-12 md:mt-16 w-full select-none overflow-hidden rounded-md bg-bg/30"
          style={{ height: 'clamp(380px, 50vh, 560px)' }}
        >
          {/* Subtle hint when idle */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none flex items-center justify-center text-fg-subtle/50 text-sm tracking-[0.3em] uppercase"
          >
            <span className="border border-border rounded-full px-5 py-2 bg-bg/40 backdrop-blur-sm">
              Hover
            </span>
          </div>

          {/* ImageTrail overlay */}
          <div className="absolute inset-0">
            <ImageTrail
              containerRef={containerRef}
              interval={120}
              rotationRange={12}
              animationSequence={[
                [{ scale: 1, opacity: 1 }, { duration: 0.25, ease: 'circOut' }],
                [{ scale: 0.9, opacity: 0 }, { duration: 0.9, ease: 'circIn' }],
              ]}
            >
              {trailImages.map((img, i) => (
                <div
                  key={i}
                  className="relative w-[140px] h-[186px] md:w-[180px] md:h-[240px] -translate-x-1/2 -translate-y-1/2 rounded-sm overflow-hidden shadow-card bg-bg"
                >
                  <Image
                    src={img.src}
                    alt=""
                    fill
                    sizes="240px"
                    className="object-cover"
                  />
                </div>
              ))}
            </ImageTrail>
          </div>
        </div>
      </div>
    </section>
  )
}
