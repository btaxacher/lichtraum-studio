'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { heroContent } from '@/lib/content'

const editorialEase = [0.22, 1, 0.36, 1] as const

/**
 * Hero — Warm Editorial Light.
 * 2-col 60/40 auf Desktop, stacked auf Mobile.
 * Single hero image (3:4), kein Slider.
 * SEO-kritische H1 "Fotograf Euskirchen für Köln, Bonn & das Rheinland" preserved.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative w-full bg-bg pt-24 md:pt-28 pb-16 md:pb-0 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12 lg:gap-16 items-center min-h-[70svh]">
          {/* LEFT — Content (60% = 3/5) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: editorialEase }}
            className="md:col-span-3 md:pr-4 lg:pr-8 order-2 md:order-1"
          >
            {/* Kicker */}
            <div className="eyebrow eyebrow-gold">{heroContent.kicker}</div>

            {/* Script-Akzent */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: editorialEase }}
              className="script-heading script-tilt-left mt-5 text-3xl md:text-4xl lg:text-[3.2rem]"
            >
              {heroContent.script}
            </motion.p>

            {/* H1 — SEO-kritisch, Text unverändert */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: editorialEase }}
              className="editorial-display text-fg mt-4 md:mt-6 leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 5rem)', fontWeight: 500 }}
            >
              <span className="block">{heroContent.h1[0]}</span>
              <span className="block text-fg/85" style={{ fontSize: '0.78em' }}>
                {heroContent.h1[1]}
              </span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: editorialEase }}
              className="mt-6 md:mt-8 text-base md:text-lg text-fg-muted leading-[1.7] max-w-[480px]"
            >
              {heroContent.body}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: editorialEase }}
              className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <a
                href={heroContent.primaryCta.href}
                className="group inline-flex items-center justify-center gap-2 bg-accent-gold text-bg-charcoal px-7 py-4 rounded-full font-medium text-base hover:bg-accent-terra hover:text-fg-invert transition-colors duration-300 ease-editorial"
              >
                {heroContent.primaryCta.label}
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href={heroContent.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 border border-accent-gold/70 text-fg px-7 py-4 rounded-sm font-medium text-base hover:border-accent-terra hover:text-accent-terra transition-colors duration-300"
              >
                {heroContent.secondaryCta.label}
              </a>
            </motion.div>

            {/* Trust-Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[0.82rem] text-fg-muted"
            >
              {heroContent.trustItems.map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <Check size={14} className="text-accent-gold" strokeWidth={2.5} />
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Hero Image (40% = 2/5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: editorialEase }}
            className="md:col-span-2 order-1 md:order-2 relative"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src={heroContent.image.src}
                alt={heroContent.image.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              {/* Passepartout-Gold-Linie */}
              <div
                className="absolute left-[8%] top-[20%] w-px bg-accent-gold/60"
                style={{ height: '60%' }}
                aria-hidden
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll-Indicator (mobile hidden) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="hidden md:flex flex-col items-center gap-2 mt-12 md:mt-16"
          aria-hidden
        >
          <span className="eyebrow">SCROLL</span>
          <div className="relative h-10 w-px bg-border overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-px h-3 bg-accent-gold"
              animate={{ y: [0, 28, 28], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
