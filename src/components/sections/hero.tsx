'use client'

import { motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { hero, brand } from '@/lib/content'
import { MapPin, ArrowRight } from 'lucide-react'

export function Hero() {
  const [current, setCurrent] = useState(0)
  const nextSlide = useCallback(() => setCurrent((p) => (p + 1) % hero.slides.length), [])

  useEffect(() => {
    const id = window.setInterval(nextSlide, 6500)
    return () => window.clearInterval(id)
  }, [nextSlide])

  return (
    <section className="relative w-full h-[100svh] min-h-[640px] overflow-hidden" id="top">
      {/* Slides */}
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
              transform: i === current ? 'scale(1)' : 'scale(1.05)',
              transition: 'transform 8s ease-out',
            }}
          />
          {/* Readability overlays: dark top (nav), darker bottom (text) */}
          <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/30 to-bg/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/20 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24">
        <div className="mx-auto max-w-[1440px] w-full px-5 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            {/* Location eyebrow */}
            <div className="flex items-center gap-2 mb-6 text-accent">
              <MapPin size={16} strokeWidth={1.5} />
              <span className="text-xs tracking-[0.25em] uppercase font-medium">
                {brand.location}
              </span>
            </div>

            {/* SEO H1 */}
            <h1 className="editorial-display text-5xl md:text-6xl lg:text-7xl text-fg mb-6 leading-[1.05]">
              Fotograf im Raum
              <br />
              <span className="italic text-accent">Köln, Euskirchen</span>
              <br />
              <span className="text-fg">&amp; Rhein-Erft-Kreis</span>
            </h1>

            <p className="text-lg md:text-xl text-fg/90 max-w-xl leading-relaxed mb-10 font-light">
              Hochzeiten, Paare, Familien &amp; Portraits — ehrlich eingefangen,
              editorial erzählt. Termine für {new Date().getFullYear()} und{' '}
              {new Date().getFullYear() + 1} jetzt anfragen.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
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
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-fg-muted">
              <span>✓ Antwort innerhalb von 24 Stunden</span>
              <span>✓ Festpreise, keine versteckten Kosten</span>
              <span>✓ Über 120 Hochzeiten begleitet</span>
            </div>
          </motion.div>
        </div>

        {/* Slide counter */}
        <div className="absolute bottom-8 right-5 md:right-12 text-xs text-fg-muted tracking-[0.2em] z-10">
          {String(current + 1).padStart(2, '0')} / {String(hero.slides.length).padStart(2, '0')}
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
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
    </section>
  )
}
