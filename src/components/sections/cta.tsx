'use client'

import { motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { brand, ctaCopy, ctaSlides } from '@/lib/content'

export function CTA() {
  const [current, setCurrent] = useState(0)
  const advance = useCallback(() => setCurrent((p) => (p + 1) % ctaSlides.length), [])

  useEffect(() => {
    const id = window.setInterval(advance, 8000)
    return () => window.clearInterval(id)
  }, [advance])

  return (
    <section id="contact" className="relative w-full bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-10 md:gap-16 items-center rounded-2xl overflow-hidden bg-bg-elevated border border-border-soft"
        >
          {/* Image side — slideshow, subtle Ken-Burns */}
          <div className="relative w-full h-[320px] md:h-[520px] overflow-hidden">
            {ctaSlides.map((src, i) => (
              <div
                key={i}
                aria-hidden={i !== current}
                className={`absolute inset-0 transition-opacity duration-[1600ms] ease-editorial ${
                  i === current ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover"
                  style={{
                    backgroundImage: `url(${src})`,
                    backgroundPosition: 'center 35%',
                    transform: i === current ? 'scale(1.02)' : 'scale(1.1)',
                    transition: 'transform 10s ease-out',
                  }}
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-bg-elevated md:to-transparent" />
          </div>

          {/* Copy side */}
          <div className="px-6 pb-10 md:px-10 md:py-12 lg:px-14">
            <p className="script-heading text-2xl md:text-3xl mb-5">{ctaCopy.eyebrow}</p>
            <h2 className="editorial-display text-3xl md:text-4xl lg:text-5xl text-fg leading-[1.08] mb-6">
              {ctaCopy.heading[0]}
              <br />
              {ctaCopy.heading[1]}
            </h2>
            <p className="text-sm md:text-base text-fg-muted leading-relaxed mb-8">
              {ctaCopy.body}
            </p>
            <a
              href={`mailto:${brand.email}?subject=Anfrage%20Shooting`}
              className="inline-block border border-accent bg-accent/10 text-accent px-8 py-3.5 rounded-full text-base hover:bg-accent hover:text-bg transition-all duration-500 ease-editorial"
            >
              {ctaCopy.cta}
            </a>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-fg-subtle">
              <a href={`mailto:${brand.email}`} className="hover:text-accent transition-colors">
                {brand.email}
              </a>
              <span className="text-fg-subtle/50">•</span>
              <span>{brand.phone}</span>
              <span className="text-fg-subtle/50">•</span>
              <span>{brand.location}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
