'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { introContent } from '@/lib/content'

const editorialEase = [0.22, 1, 0.36, 1] as const

/**
 * IntroGreeting — warme, persönliche Begrüßung.
 * Layout 40/60 (Bild links, Text rechts) auf Desktop, stacked Mobile.
 * Scroll-Parallax auf dem Bild, gestaffeltes Fade-In auf den Text-Elementen.
 */
export function IntroGreeting() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  // Subtle parallax: image moves slower than scroll (negative = up bias)
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%'])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full bg-bg py-20 md:py-32"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14 lg:gap-20 items-center">
          {/* LEFT — Image (40%) with parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.1, ease: editorialEase }}
            className="md:col-span-2 relative"
          >
            <div className="relative w-full aspect-square overflow-hidden rounded-sm">
              <motion.div className="absolute inset-0" style={{ y: imageY }}>
                <Image
                  src={introContent.image.src}
                  alt={introContent.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover scale-110"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT — Content (60%) with staggered fade-in */}
          <div className="md:col-span-3">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: editorialEase }}
              className="script-heading script-tilt-mild text-3xl md:text-4xl lg:text-[3rem]"
            >
              {introContent.script}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: editorialEase }}
              className="editorial-display text-fg mt-4 md:mt-5 leading-[1.1]"
              style={{ fontSize: 'clamp(1.8rem, 3.6vw, 3rem)', fontWeight: 500 }}
            >
              {introContent.h2}
            </motion.h2>

            <div className="mt-6 md:mt-8 space-y-4 text-fg-muted leading-[1.7] text-base md:text-lg max-w-[620px]">
              {introContent.body.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + i * 0.12,
                    ease: editorialEase,
                  }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.5, ease: editorialEase }}
              className="script-heading mt-8 text-2xl md:text-3xl"
            >
              {introContent.signature}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
