import { Hero } from '@/components/sections/hero'
import { IntroGreeting } from '@/components/sections/intro-greeting'
import { ServicesGrid } from '@/components/sections/services-grid'
import { Gallery } from '@/components/sections/gallery'
import { CursorTrail } from '@/components/sections/cursor-trail'
import { ClientsSay } from '@/components/sections/clients-say'
import { PricingCards } from '@/components/sections/pricing-cards'
import { JournalPreview } from '@/components/sections/journal-preview'
import { StudioLocation } from '@/components/sections/studio-location'
import { FaqAccordion } from '@/components/sections/faq-accordion'
import { NearbyCities } from '@/components/sections/nearby-cities'
import { ContactForm } from '@/components/sections/contact-form'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BreadcrumbSchema items={[{ name: 'Start', path: '/' }]} />
      <Hero />
      <IntroGreeting />
      <ServicesGrid />
      <Gallery />
      <CursorTrail />
      <ClientsSay />
      <PricingCards />
      <JournalPreview />
      <StudioLocation />
      <FaqAccordion />
      <NearbyCities />
      <ContactForm />
    </main>
  )
}
