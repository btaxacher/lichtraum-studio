import type { Metadata } from 'next'
import { SubPageHero } from '@/components/sections/sub-page-hero'
import { ProseSection } from '@/components/sections/prose-section'
import { brand } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Impressum | Lichtraum Fotostudio',
  description: 'Impressum und rechtliche Angaben.',
  alternates: { canonical: '/impressum' },
  robots: { index: false, follow: true },
}

export default function ImpressumPage() {
  return (
    <main className="relative min-h-screen">
      <SubPageHero eyebrow="Legal" h1="Impressum" />
      <ProseSection eyebrow="Angaben gemäß § 5 TMG" title="Lichtraum Fotostudio">
        <p>[Platzhalter — in Phase 9 mit ladungsfähiger Adresse ergänzen]</p>
        <p>E-Mail: {brand.email}<br />Telefon: {brand.phone}</p>
        <p className="text-fg-muted text-base">USt-IdNr., Berufshaftpflicht, Streitbeilegung — ergänzen vor Live-Schaltung.</p>
      </ProseSection>
    </main>
  )
}
