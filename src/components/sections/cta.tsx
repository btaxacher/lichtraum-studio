'use client'

import { motion } from 'framer-motion'
import { Section, EditorialHeading } from '@/components/ui/section'
import { brand } from '@/lib/content'

export function CTA() {
  return (
    <Section id="contact" spacing="xl" className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-3xl mx-auto"
      >
        <p className="script-heading text-3xl md:text-4xl mb-6">Lass uns reden.</p>
        <EditorialHeading size="xl" align="center" className="mb-8">
          Der beste Moment,<br />
          um den schönsten festzuhalten.
        </EditorialHeading>
        <p className="text-lg text-fg-muted max-w-xl mx-auto mb-12">
          Schreib mir von deinem Tag, deinem Ort, deiner Idee. Ich melde mich innerhalb
          von 24 Stunden persönlich zurück.
        </p>
        <a
          href={`mailto:${brand.email}?subject=Anfrage%20Shooting`}
          className="inline-block border border-accent bg-accent/10 text-accent px-10 py-4 rounded-full text-lg hover:bg-accent hover:text-bg transition-all duration-500 ease-editorial"
        >
          Anfrage senden →
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
    </Section>
  )
}
