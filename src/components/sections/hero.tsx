'use client'

import { Slideshow } from '@/components/ui/slideshow'
import { hero, brand } from '@/lib/content'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <div className="relative" id="top">
      <Slideshow slides={hero.slides} />
      <motion.div
        className="pointer-events-none absolute bottom-14 left-5 md:left-12 z-[5] max-w-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="eyebrow mb-2 text-accent">{brand.tagline}</div>
        <p className="text-fg text-sm md:text-base leading-relaxed max-w-xs">
          Editorial-Fotografie mit Haltung. {brand.location}.
        </p>
      </motion.div>
    </div>
  )
}
