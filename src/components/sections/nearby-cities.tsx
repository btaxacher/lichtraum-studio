'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const editorialEase = [0.22, 1, 0.36, 1] as const

/**
 * Nearby Cities — "In deiner Nähe" Section.
 * Zielt auf 'fotograf in der nähe' (6.600 Vol/Mo) über interne Verlinkung +
 * LocalBusiness-Signal. Rendert Stadt-Chips zu allen Tier-2/3-Städten,
 * die wir bedienen. Jeder Chip ist ein Link auf die passende Landingpage.
 *
 * Layout: Chips in Flex-Wrap, auf Mobile 2 Spalten, auf Desktop flexibel.
 * Platzierung: Zwischen FAQ und ContactForm auf der Homepage.
 */

type CityChip = { label: string; href: string; highlight?: boolean }

const cityChips: readonly CityChip[] = [
  // Kern-Städte (highlight)
  { label: 'Euskirchen', href: '/hochzeitsfotograf-euskirchen', highlight: true },
  { label: 'Köln', href: '/fotograf-koeln', highlight: true },
  { label: 'Bonn', href: '/fotograf-bonn', highlight: true },
  // Tier-2/3 Rhein-Erft + Rheinland
  { label: 'Leverkusen', href: '/fotograf-leverkusen' },
  { label: 'Weilerswist', href: '/fotograf-weilerswist' },
  { label: 'Bergisch Gladbach', href: '/fotograf-bergisch-gladbach' },
  { label: 'Siegburg', href: '/fotograf-siegburg' },
  { label: 'Erftstadt', href: '/fotograf-erftstadt' },
  { label: 'Bergheim', href: '/fotograf-bergheim' },
  { label: 'Kerpen', href: '/fotograf-kerpen' },
  { label: 'Hürth', href: '/fotograf-huerth' },
  { label: 'Brühl', href: '/fotograf-bruehl' },
  { label: 'Pulheim', href: '/fotograf-pulheim' },
] as const

export function NearbyCities() {
  return (
    <section id="nearby" className="relative w-full bg-bg-secondary py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: editorialEase }}
          className="max-w-[68ch] mb-10 md:mb-12"
        >
          <p className="eyebrow eyebrow-gold mb-4 inline-flex items-center gap-2">
            <MapPin className="h-3 w-3" aria-hidden /> IN DEINER NÄHE
          </p>
          <h2
            className="editorial-display text-fg leading-[1.1] tracking-tight"
            style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.8rem)', fontWeight: 500 }}
          >
            Wir sind unterwegs im ganzen Rheinland.
          </h2>
          <p className="mt-5 text-base md:text-lg text-fg-muted leading-[1.7]">
            Von Euskirchen über Köln bis Bonn — und in jede Stadt dazwischen. Klickt auf eure Stadt, um zu sehen, wie wir dort fotografieren.
          </p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.03 } },
          }}
          className="flex flex-wrap gap-2 md:gap-3"
        >
          {cityChips.map((chip) => (
            <motion.li
              key={chip.href}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: editorialEase } },
              }}
            >
              <Link
                href={chip.href}
                className={[
                  'group inline-flex items-center gap-2 px-4 py-2.5 md:px-5 md:py-3 rounded-full border transition-all duration-300 ease-editorial',
                  chip.highlight
                    ? 'border-accent-gold/60 bg-accent-gold/5 text-fg hover:bg-accent-gold/10 hover:border-accent-gold'
                    : 'border-border text-fg-muted hover:border-accent-gold/60 hover:text-fg hover:bg-bg-surface',
                ].join(' ')}
              >
                <MapPin
                  className={[
                    'h-3.5 w-3.5 transition-colors',
                    chip.highlight ? 'text-accent-gold' : 'text-fg-subtle group-hover:text-accent-gold',
                  ].join(' ')}
                  aria-hidden
                />
                <span className="text-sm md:text-base font-medium">{chip.label}</span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.4, ease: editorialEase }}
          className="mt-8 text-sm text-fg-subtle"
        >
          Eure Stadt ist nicht dabei? Schreibt uns — wir fahren weiter, als ihr vielleicht denkt.{' '}
          <Link
            href="/standorte"
            className="text-accent-gold hover:text-accent-terra underline-offset-2 hover:underline transition-colors"
          >
            Alle Standorte ansehen →
          </Link>
        </motion.p>
      </div>
    </section>
  )
}
