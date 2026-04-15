'use client'

import { motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { hero, brand } from '@/lib/content'
import { ArrowRight } from 'lucide-react'

/**
 * Editorial hero — slim slideshow strip above, clean content block below
 * sitting naturally on the page background (no card/box). Keeps the SEO H1
 * and leads directly into the ZoomParallax "Scrolle — die Bilder öffnen sich"
 * animation that follows.
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
      <div className="relative w-full h-[52svh] min-h-[360px] md:h-[64svh] md:min-h-[500px] overflow-hidden">
        {hero.slides.map((slide, i) => (
          <div
            key={i}
            aria-hidden={i !== current}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-editorial ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover"
              style={{
                backgroundImage: `url(${slide.img})`,
                backgroundPosition: slide.position ?? 'center 30%',
                transform: i === current ? 'scale(1)' : 'scale(1.06)',
                transition: 'transform 8s ease-out',
              }}
            />
            {/* Soft fade into the page so the image melts into the text below */}
            <div className="absolute inset-0 bg-gradient-to-b from-bg/25 via-transparent to-bg" />
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
                i === current ? 'w-10 bg-accent' : 'w-5 bg-fg/40 hover:bg-fg/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Editorial content — sits plain on the page, no card */}
      <div className="relative">
        <div className="mx-auto w-full max-w-[1100px] px-5 md:px-8 lg:px-12 text-center pt-10 md:pt-16 pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs md:text-sm tracking-[0.35em] uppercase text-accent/80">
              {brand.location}
            </span>

            <h1 className="editorial-display text-4xl md:text-6xl lg:text-7xl text-fg mt-6 leading-[1.05]">
              Fotograf <span className="italic text-accent">Euskirchen</span>
              <span className="block text-fg/90 text-3xl md:text-5xl lg:text-6xl mt-3">
                für Köln, Bonn &amp; das Rheinland
              </span>
            </h1>

            <p className="script-heading text-2xl md:text-3xl mt-8">
              Jeder Moment, ehrlich erzählt.
            </p>

            <p className="text-base md:text-lg text-fg-muted max-w-2xl mx-auto mt-6 leading-relaxed">
              Hochzeiten, Bewerbungsfotos, Portraits &amp; Business — ehrlich eingefangen,
              editorial erzählt. Termine für {new Date().getFullYear()} und{' '}
              {new Date().getFullYear() + 1} jetzt anfragen.
            </p>

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
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-fg/30 text-fg px-8 py-4 rounded-full hover:border-accent hover:text-accent transition-all duration-500 ease-editorial"
              >
                Leistungen ansehen
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-fg-subtle">
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
