import type { Metadata } from 'next'
import { SubPageHero } from '@/components/sections/sub-page-hero'
import { ProseSection } from '@/components/sections/prose-section'

export const metadata: Metadata = {
  title: 'Datenschutz | Lichtraum Fotostudio',
  description: 'Datenschutzerklärung nach DSGVO.',
  alternates: { canonical: '/datenschutz' },
  robots: { index: false, follow: true },
}

export default function DatenschutzPage() {
  return (
    <main className="relative min-h-screen">
      <SubPageHero eyebrow="Legal" h1="Datenschutzerklärung" />
      <ProseSection eyebrow="DSGVO" title="Hinweise zum Datenschutz">
        <p className="text-fg-muted text-base">Platzhalter — vor Live-Schaltung muss eine vollständige Datenschutzerklärung eingefügt werden (Verantwortlicher, Cookies, Analytics, Hosting, Formular, Rechte der Betroffenen).</p>
      </ProseSection>
    </main>
  )
}
