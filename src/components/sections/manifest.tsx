'use client'

import { motion } from 'framer-motion'
import { Section, EditorialHeading, Eyebrow } from '@/components/ui/section'
import { manifest } from '@/lib/content'

export function Manifest() {
  return (
    <Section id="about" spacing="xl" className="relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-3xl mx-auto text-center"
      >
        <Eyebrow className="mb-8">{manifest.eyebrow}</Eyebrow>
        <EditorialHeading size="xl" align="center" className="mb-10 whitespace-pre-line">
          {manifest.title}
        </EditorialHeading>
        <p className="text-lg md:text-xl text-fg-muted leading-relaxed font-light max-w-2xl mx-auto">
          {manifest.body}
        </p>
        <p className="script-heading text-3xl mt-12">{manifest.signature}</p>
      </motion.div>
    </Section>
  )
}
