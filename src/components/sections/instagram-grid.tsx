'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/section'
import { masonryCards, brand } from '@/lib/content'

export function InstagramGrid() {
  const tiles = masonryCards.slice(0, 8)

  return (
    <Section spacing="lg" variant="elevated">
      <div className="text-center mb-12">
        <h2 className="script-heading text-5xl md:text-6xl lg:text-7xl">Instagram</h2>
        <p className="mt-4 text-fg-muted">Folge mir auf {brand.instagram}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {tiles.map((tile, i) => (
          <motion.a
            key={i}
            href="#"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative aspect-square overflow-hidden rounded-lg group"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tile.mainImage}
              alt={tile.feedback}
              className="w-full h-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.a>
        ))}
      </div>
    </Section>
  )
}
