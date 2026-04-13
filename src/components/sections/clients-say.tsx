'use client'

import { motion } from 'framer-motion'
import { Section, EditorialHeading, Eyebrow } from '@/components/ui/section'
import { bigTestimonial } from '@/lib/content'
import { TestimonialsMarquee } from '@/components/ui/testimonials-marquee'
import { testimonials } from '@/lib/content'

export function ClientsSay() {
  return (
    <Section spacing="xl" variant="subtle" className="overflow-hidden">
      <div className="relative text-center mb-16">
        <Eyebrow className="mb-6">Stimmen</Eyebrow>
        <EditorialHeading size="xl" align="center">
          Was meine Kund:innen sagen
        </EditorialHeading>
      </div>

      {/* Big Testimonial with central avatar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative max-w-5xl mx-auto mb-24"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-editorial">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={bigTestimonial.img}
            alt={bigTestimonial.name}
            className="w-full h-[360px] md:h-[480px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
        </div>
        <div className="relative -mt-16 flex flex-col items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={bigTestimonial.avatar}
            alt={bigTestimonial.name}
            className="w-20 h-20 rounded-full border-2 border-accent/60 object-cover bg-bg"
          />
          <blockquote className="mt-6 text-lg md:text-2xl italic font-display text-fg max-w-2xl text-center leading-relaxed">
            „{bigTestimonial.body}"
          </blockquote>
          <footer className="mt-6 text-sm text-fg-muted">
            <a className="text-accent">{bigTestimonial.name}</a> — {bigTestimonial.meta}
          </footer>
        </div>
      </motion.div>

      <TestimonialsMarquee testimonials={testimonials} />
    </Section>
  )
}
