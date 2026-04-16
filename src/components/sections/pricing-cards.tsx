'use client'

import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'
import { pricingCards, pricingHeader, pricingFooter } from '@/lib/content'

const editorialEase = [0.22, 1, 0.36, 1] as const

/**
 * PricingCards — einzige dunkle Section der Seite (charcoal).
 * 3 Pakete, mittleres highlighted mit "BELIEBT" Badge.
 */
export function PricingCards() {
  return (
    <section
      id="pricing"
      className="relative w-full bg-bg-charcoal text-fg-invert py-24 md:py-32"
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
          <div className="eyebrow eyebrow-gold">{pricingHeader.kicker}</div>
          <p className="script-heading script-tilt-mild mt-4 text-3xl md:text-4xl lg:text-[3rem]">
            {pricingHeader.script}
          </p>
          <h2
            className="editorial-display text-fg-invert mt-3 md:mt-5"
            style={{ fontSize: 'clamp(1.8rem, 3.6vw, 3rem)', fontWeight: 500, lineHeight: 1.1 }}
          >
            {pricingHeader.h2}
          </h2>
          <p className="mt-5 text-[#E3D8C4]/80 text-base md:text-lg leading-[1.7]">
            {pricingHeader.subline}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-[1180px] mx-auto">
          {pricingCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: editorialEase }}
              className={`relative flex flex-col rounded-md p-8 md:p-9 ${
                card.highlight
                  ? 'bg-bg-charcoal border-2 border-accent-gold md:-translate-y-2'
                  : 'bg-[#3a3631] border border-[#4a4640]'
              }`}
            >
              {card.highlight && card.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-accent-gold text-bg-charcoal px-4 py-1 rounded-full text-[0.7rem] tracking-[0.2em] uppercase font-semibold">
                  <Sparkles size={12} />
                  {card.badge}
                </div>
              )}

              <div className="eyebrow eyebrow-gold mb-2">{card.category}</div>
              <div
                className="editorial-display text-accent-gold leading-none mt-1"
                style={{ fontSize: 'clamp(2.2rem, 3.6vw, 3rem)', fontWeight: 500 }}
              >
                {card.price}
              </div>
              <h3 className="editorial-display text-fg-invert mt-2 text-xl md:text-2xl leading-snug">
                {card.title}
              </h3>

              <ul className="mt-6 space-y-3 flex-1">
                {card.features.map((feature) => (
                  <li key={feature} className="flex gap-3 items-start text-sm text-[#E3D8C4]/90 leading-[1.55]">
                    <Check
                      size={16}
                      className="text-accent-gold mt-0.5 shrink-0"
                      strokeWidth={2.5}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={card.cta.href}
                className={`mt-7 inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition-colors duration-300 ${
                  card.highlight
                    ? 'bg-accent-gold text-bg-charcoal hover:bg-accent-terra hover:text-fg-invert'
                    : 'border border-accent-gold/70 text-accent-gold hover:bg-accent-gold hover:text-bg-charcoal'
                }`}
              >
                {card.cta.label}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Footer link */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 md:mt-16 text-[#E3D8C4]/80 text-sm md:text-base"
        >
          {pricingFooter.text}{' '}
          <a
            href={pricingFooter.linkHref}
            className="text-accent-gold hover:text-accent-terra transition-colors border-b border-accent-gold/50 hover:border-accent-terra pb-0.5"
          >
            {pricingFooter.linkLabel} →
          </a>
        </motion.p>
      </div>
    </section>
  )
}
