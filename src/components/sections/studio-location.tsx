'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Clock, Car, ArrowUpRight } from 'lucide-react'
import { studioContent } from '@/lib/content'

const editorialEase = [0.22, 1, 0.36, 1] as const

const iconMap = {
  MapPin,
  Clock,
  Car,
} as const

/**
 * StudioLocation — 50/50 Layout. Links Info-Block, rechts Studio-Interior Image.
 * Local-SEO + Vertrauens-Signal.
 */
export function StudioLocation() {
  return (
    <section id="studio" className="relative w-full bg-bg-secondary py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">
          {/* LEFT — Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: editorialEase }}
            className="order-2 md:order-1"
          >
            <div className="eyebrow eyebrow-gold">{studioContent.kicker}</div>
            <p className="script-heading script-tilt-mild mt-4 text-3xl md:text-4xl lg:text-[3rem]">
              {studioContent.script}
            </p>
            <h2
              className="editorial-display text-fg mt-3 md:mt-5"
              style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.6rem)', fontWeight: 500, lineHeight: 1.15 }}
            >
              {studioContent.h2}
            </h2>
            <p className="mt-5 md:mt-7 text-fg-muted leading-[1.7] text-base md:text-lg max-w-[560px]">
              {studioContent.body}
            </p>

            {/* Info-Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-4">
              {studioContent.infoGrid.map((info) => {
                const Icon = iconMap[info.icon as keyof typeof iconMap]
                return (
                  <div key={info.label} className="flex flex-col gap-2">
                    <Icon size={18} className="text-accent-gold" strokeWidth={1.8} />
                    <div className="eyebrow">{info.label}</div>
                    <p className="text-sm text-fg-muted leading-[1.55] whitespace-pre-line">
                      {info.text}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Maps CTA */}
            <a
              href={studioContent.mapsCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 mt-10 text-sm text-accent-gold hover:text-accent-terra transition-colors duration-300 border-b border-accent-gold/50 pb-1"
            >
              {studioContent.mapsCta.label}
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>

          {/* RIGHT — Studio Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: editorialEase }}
            className="order-1 md:order-2 relative"
          >
            <div className="relative w-full aspect-square overflow-hidden rounded-sm">
              <Image
                src={studioContent.image.src}
                alt={studioContent.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
