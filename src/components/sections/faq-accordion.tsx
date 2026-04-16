'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'
import { faqs, faqHeader } from '@/lib/content'

const editorialEase = [0.22, 1, 0.36, 1] as const

/**
 * FaqAccordion — 6 Fragen mit smooth Expand.
 * SEO-Bonus: FAQPage JSON-LD für Rich Results.
 */
export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <section id="faq" className="relative w-full bg-bg py-24 md:py-32">
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto w-full max-w-[800px] px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: editorialEase }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="eyebrow">{faqHeader.kicker}</div>
          <h2
            className="editorial-display text-fg mt-3 md:mt-5"
            style={{ fontSize: 'clamp(1.8rem, 3.6vw, 3rem)', fontWeight: 500, lineHeight: 1.1 }}
          >
            {faqHeader.h2}
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="divide-y divide-border border-y border-border">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: editorialEase }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="w-full flex items-start justify-between gap-6 py-5 md:py-7 text-left hover:text-accent-terra transition-colors duration-300"
                >
                  <span
                    className="editorial-display text-fg text-lg md:text-xl leading-[1.4] flex-1"
                    style={{ fontWeight: 500 }}
                  >
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 mt-1 w-8 h-8 rounded-full border border-accent-gold/50 flex items-center justify-center text-accent-gold">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: editorialEase }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 md:pb-8 pr-12 text-fg-muted leading-[1.7] text-base">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
