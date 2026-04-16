'use client'

import { motion } from 'framer-motion'
import { testimonialsNew, testimonialsHeader, trustBadges } from '@/lib/content'
import { TestimonialsMarquee } from '@/components/ui/testimonials-marquee'

const editorialEase = [0.22, 1, 0.36, 1] as const

/**
 * Testimonials Section — warm editorial light.
 * Marquee-Effekt bleibt (User-Entscheidung), warme Palette, Bug-Fix:
 * Array wird nur einmal gedoppelt (siehe TestimonialsMarquee), keine 7-fache
 * Duplikation. 6 Testimonials → 12 Cards pro Row (2 Rows) für Infinite-Loop.
 */
export function ClientsSay() {
  // Adapt neue Testimonial-Struktur → Marquee-Props
  const marqueeData = testimonialsNew.map((t) => ({
    image: t.avatar,
    name: t.name,
    handle: t.meta,
    body: t.body,
  }))

  return (
    <section
      id="voices"
      className="relative w-full bg-bg-secondary py-24 md:py-32 overflow-hidden"
    >
      {/* Header */}
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: editorialEase }}
          className="text-center max-w-[680px] mx-auto mb-14 md:mb-20"
        >
          <div className="eyebrow">{testimonialsHeader.kicker}</div>
          <p className="script-heading script-tilt-mild mt-4 text-3xl md:text-4xl lg:text-[3rem]">
            {testimonialsHeader.script}
          </p>
          <h2
            className="editorial-display text-fg mt-3 md:mt-5"
            style={{ fontSize: 'clamp(1.8rem, 3.6vw, 3rem)', fontWeight: 500, lineHeight: 1.1 }}
          >
            {testimonialsHeader.h2}
          </h2>
        </motion.div>
      </div>

      {/* Full-bleed marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1, ease: editorialEase }}
        className="w-full"
      >
        <TestimonialsMarquee testimonials={marqueeData} />
      </motion.div>

      {/* Trust-Badges unter Marquee */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, delay: 0.2, ease: editorialEase }}
        className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12 mt-14 md:mt-20"
      >
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="text-[0.72rem] md:text-[0.78rem] tracking-[0.15em] uppercase text-fg-muted border border-accent-gold/40 bg-bg/50 rounded-full px-4 py-2"
            >
              {badge}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
