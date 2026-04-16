'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { servicesGrid, servicesGridHeader } from '@/lib/content'

const editorialEase = [0.22, 1, 0.36, 1] as const

/**
 * ServicesGrid — 4 visuelle Cards (2x2 Desktop, stacked Mobile).
 * Ersetzt den alten InteractiveSelector Accordion.
 */
export function ServicesGrid() {
  return (
    <section
      id="services"
      className="relative w-full bg-bg-secondary py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: editorialEase }}
          className="text-center max-w-[680px] mx-auto mb-14 md:mb-20"
        >
          <div className="eyebrow eyebrow-gold">{servicesGridHeader.kicker}</div>
          <p className="script-heading script-tilt-mild mt-4 text-3xl md:text-4xl lg:text-[3rem]">
            {servicesGridHeader.script}
          </p>
          <h2
            className="editorial-display text-fg mt-3 md:mt-5"
            style={{ fontSize: 'clamp(1.8rem, 3.6vw, 3rem)', fontWeight: 500, lineHeight: 1.1 }}
          >
            {servicesGridHeader.h2}
          </h2>
          <p className="mt-5 text-fg-muted text-base md:text-lg leading-[1.7]">
            {servicesGridHeader.subline}
          </p>
        </motion.div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
          {servicesGrid.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: editorialEase,
              }}
            >
              <Link
                href={service.href}
                className="group relative block aspect-square overflow-hidden rounded-sm bg-fg"
              >
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[800ms] ease-editorial group-hover:scale-[1.04]"
                />
                {/* Gradient-Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-charcoal/90 via-bg-charcoal/20 to-transparent transition-opacity duration-500 group-hover:from-bg-charcoal/75" />

                {/* Text */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 flex flex-col gap-1.5">
                  <span className="eyebrow eyebrow-gold text-accent-gold">
                    {service.eyebrow}
                  </span>
                  <h3
                    className="editorial-display text-fg-invert text-3xl md:text-[2rem] leading-tight"
                    style={{ fontWeight: 500 }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm text-fg-invert/85 leading-snug mt-1 max-w-[280px]">
                    {service.subtitle}
                  </p>
                </div>

                {/* Arrow Hover Indicator */}
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-fg-invert/0 border border-fg-invert/0 flex items-center justify-center transition-all duration-500 group-hover:bg-fg-invert group-hover:border-fg-invert">
                  <ArrowUpRight
                    size={18}
                    className="text-fg-invert opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:text-bg-charcoal"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
