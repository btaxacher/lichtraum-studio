'use client'

import { motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { hero, brand } from '@/lib/content'
import { MapPin, ArrowRight } from 'lucide-react'

/**
 * Editorial hero — sits directly above the ZoomParallax scroll animation.
 * A slim slideshow strip acts as a visual opener, the actual hero content
 * (H1, CTAs, trust bar) lives on the warm page background below — this
 * lets the page feel lighter and shorter than a full-bleed slideshow.
 */
export function Hero() {
  const [current, setCurrent] = useState(0)
  const nextSlide = useCallback(() => setCurrent((p) => (p + 1) % hero.slides.length), [])

  useEffect(() => {
    const id = window.setInterval(nextSlide, 6500)
    return () => window.clearInterval(id)
  }, [nextSlide])

  return (
    <section id="top" className="relative w-full pt-24 md:pt-28">
      {/* Slideshow strip */}
      <div className="relative w-full h-[46svh] min-h-[320px] md:h-[58svh] md:min-h-[460px] overflow-hidden">
        {hero.slides.map((slide, i) => (
          <div
            key={i}
            aria-hidden={i !== current}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-editorial ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.img})`,
                transform: i === current ? 'scale(1)' : 'scale(1.06)',
                transition: 'transform 8s ease-out',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-transparent to-bg/80" />
          </div>
        ))}

        {/* Slide indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {hero.slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-[2px] transition-all duration-500 ${
                i === current ? 'w-10 bg-accent' : 'w-5 bg-fg/30 hover:bg-fg/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Editorial content — sits on the page background, not on top of the image */}
      <div className="relative z-10 -mt-16 md:-mt-24">
        <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl bg-bg/95 backdrop-blur-sm border border-border-soft px-6 py-10 md:px-14 md:py-16 shadow-editorial text-center"
          >
            {/* Location eyebrow */}
            <div className="flex items-center justify-center gap-2 mb-5 text-accent">
              <MapPin size={16} strokeWidth={1.5} />
              <span className="text-xs tracking-[0.25em] uppercase font-medium">
                {brand.location}
              </span>
            </div>

            {/* SEO H1 */}
            <h1 className="editorial-display text-4xl md:text-6xl lg:text-7xl text-fg leading-[1.04] max-w-4xl mx-auto">
              Fotograf <span className="italic text-accent">Euskirchen</span>
              <span className="block text-fg text-3xl md:text-5xl lg:text-6xl mt-2">
                für Köln, Bonn &amp; das Rheinland
              </span>
            </h1>

            <p className="script-heading text-2xl md:text-3xl mt-6">
              Scrolle — die Bilder öffnen sich.
            </p>

            <p className="text-base md:text-lg text-fg-muted max-w-2xl mx-auto mt-6 leading-relaxed">
              Hochzeiten, Bewerbungsfotos, Portraits &amp; Business — ehrlich eingefangen,
              editorial erzählt. Termine für {new Date().getFullYear()} und{' '}
              {new Date().getFullYear() + 1} jetzt anfragen.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-accent text-bg px-8 py-4 rounded-full font-medium hover:bg-fg transition-all duration-500 ease-editorial group"
              >
                Termin anfragen
                <ArrowRight
                  size={18}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                />
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 border border-fg/30 text-fg px-8 py-4 rounded-full hover:border-accent hover:text-accent transition-all duration-500 ease-editorial"
              >
                Portfolio ansehen
              </a>
            </div>

            {/* Trust bar */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-fg-muted">
              <span>✓ Antwort innerhalb von 24 Stunden</span>
              <span>✓ Festpreise, keine versteckten Kosten</span>
              <span>✓ Über 120 Hochzeiten begleitet</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
