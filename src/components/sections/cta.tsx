'use client'

import { motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { EditorialHeading } from '@/components/ui/section'
import { brand, ctaCopy, ctaSlides } from '@/lib/content'

export function CTA() {
  const [current, setCurrent] = useState(0)
  const advance = useCallback(() => setCurrent((p) => (p + 1) % ctaSlides.length), [])

  useEffect(() => {
    const id = window.setInterval(advance, 8000)
    return () => window.clearInterval(id)
  }, [advance])

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden py-32 md:py-48 text-center"
    >
      {/* Background slideshow */}
      <div className="absolute inset-0 -z-10">
        {ctaSlides.map((src, i) => (
          <div
            key={i}
            aria-hidden={i !== current}
            className={`absolute inset-0 transition-opacity duration-[1600ms] ease-editorial ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${src})`,
                transform: i === current ? 'scale(1.02)' : 'scale(1.1)',
                transition: 'transform 10s ease-out',
              }}
            />
          </div>
        ))}
        {/* Readability overlay — keeps copy legible across warm/cool photos */}
        <div className="absolute inset-0 bg-bg/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/90 via-bg/70 to-bg" />
      </div>

      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <p className="script-heading text-3xl md:text-4xl mb-6">{ctaCopy.eyebrow}</p>
          <EditorialHeading size="xl" align="center" className="mb-8">
            {ctaCopy.heading[0]}
            <br />
            {ctaCopy.heading[1]}
          </EditorialHeading>
          <p className="text-base md:text-lg text-fg-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            {ctaCopy.body}
          </p>
          <a
            href={`mailto:${brand.email}?subject=Anfrage%20Shooting`}
            className="inline-block border border-accent bg-accent/10 text-accent px-10 py-4 rounded-full text-lg hover:bg-accent hover:text-bg transition-all duration-500 ease-editorial"
          >
            {ctaCopy.cta}
          </a>
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 text-sm text-fg-subtle">
            <a href={`mailto:${brand.email}`} className="hover:text-accent transition-colors">
              {brand.email}
            </a>
            <span className="hidden md:inline">•</span>
            <span>{brand.phone}</span>
            <span className="hidden md:inline">•</span>
            <span>{brand.location}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
