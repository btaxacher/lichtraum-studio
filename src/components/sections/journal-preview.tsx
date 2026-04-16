'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import { journalCards, journalHeader } from '@/lib/content'

const editorialEase = [0.22, 1, 0.36, 1] as const

/**
 * JournalPreview — 3 Blog-Cards (16:10 Bild + Kategorie + Titel + Lesezeit).
 */
export function JournalPreview() {
  return (
    <section id="journal" className="relative w-full bg-bg py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: editorialEase }}
          className="text-center max-w-[680px] mx-auto mb-14 md:mb-20"
        >
          <div className="eyebrow">{journalHeader.kicker}</div>
          <h2
            className="editorial-display text-fg mt-3 md:mt-5"
            style={{ fontSize: 'clamp(1.8rem, 3.6vw, 3rem)', fontWeight: 500, lineHeight: 1.1 }}
          >
            {journalHeader.h2}
          </h2>
          <p className="mt-5 text-fg-muted text-base md:text-lg leading-[1.7]">
            {journalHeader.subline}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {journalCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: editorialEase }}
            >
              <Link
                href={card.href}
                className="group block bg-bg-surface border border-border rounded-md overflow-hidden transition-all duration-500 ease-editorial hover:-translate-y-1 hover:shadow-card-hover shadow-card"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-bg-secondary">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6 md:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="eyebrow eyebrow-gold">{card.category}</span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-fg-subtle">
                      <Clock size={12} />
                      {card.readTime}
                    </span>
                  </div>
                  <h3 className="editorial-display text-fg mt-3 text-xl md:text-[1.5rem] leading-[1.25] group-hover:text-accent-terra transition-colors duration-300">
                    {card.title}
                  </h3>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm text-accent-gold group-hover:text-accent-terra transition-colors duration-300">
                    Weiterlesen
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* All articles link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <Link
            href={journalHeader.allLink.href}
            className="group inline-flex items-center gap-2 text-sm text-accent-gold hover:text-accent-terra transition-colors duration-300 border-b border-accent-gold/50 pb-1"
          >
            {journalHeader.allLink.label}
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
