'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { galleryItems, galleryHeader } from '@/lib/content'

const editorialEase = [0.22, 1, 0.36, 1] as const

/**
 * Gallery — statische 9-Bilder Masonry mit Lightbox.
 * Ersetzt die alte Shuffle-Gallery.
 */
export function Gallery() {
  const [index, setIndex] = useState(-1)

  const slides = galleryItems.map((item) => ({
    src: item.src,
    alt: item.alt,
  }))

  return (
    <section id="gallery" className="relative w-full bg-bg py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12">
        {/* Header — left-aligned, link right-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: editorialEase }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14"
        >
          <div>
            <div className="eyebrow">{galleryHeader.kicker}</div>
            <h2
              className="editorial-display text-fg mt-3"
              style={{ fontSize: 'clamp(1.8rem, 3.6vw, 3rem)', fontWeight: 500, lineHeight: 1.1 }}
            >
              {galleryHeader.h2}
            </h2>
          </div>
          <Link
            href={galleryHeader.portfolioLink.href}
            className="group inline-flex items-center gap-2 text-sm text-accent-gold hover:text-accent-terra transition-colors duration-300 self-start md:self-end"
          >
            {galleryHeader.portfolioLink.label}
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[260px] gap-3">
          {galleryItems.map((item, i) => (
            <motion.button
              type="button"
              key={i}
              onClick={() => setIndex(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: editorialEase,
              }}
              className={`group relative overflow-hidden rounded-sm bg-bg-secondary ${item.span}`}
              aria-label={`Bild ${i + 1} von ${galleryItems.length} öffnen`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-all duration-700 ease-editorial group-hover:scale-[1.04] group-hover:saturate-110"
              />
              <div className="absolute inset-0 bg-bg-charcoal/0 transition-colors duration-500 group-hover:bg-bg-charcoal/10" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        styles={{
          container: { backgroundColor: 'rgba(31, 28, 23, 0.94)' },
        }}
      />
    </section>
  )
}
