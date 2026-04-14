import type { Metadata } from 'next'
import { SubPageHero } from '@/components/sections/sub-page-hero'
import { ProseSection } from '@/components/sections/prose-section'
import { brand } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Kontakt | Lichtraum Fotostudio Euskirchen',
  description: 'Termin anfragen bei Lichtraum Fotostudio. Antwort innerhalb von 24 Stunden. Studio in Euskirchen, aktiv in Köln, Bonn und Rheinland.',
  alternates: { canonical: '/kontakt' },
}

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <SubPageHero eyebrow="Kontakt" h1="Termin anfragen" subtitle="Schreiben Sie uns — Antwort innerhalb von 24 Stunden." />
      <ProseSection eyebrow="Erreichbarkeit" title="So erreichen Sie uns">
        <p>
          E-Mail:{' '}
          <a href={`mailto:${brand.email}`} className="text-accent underline-offset-4 hover:underline">
            {brand.email}
          </a>
        </p>
        <p>Telefon: {brand.phone}</p>
        <p>Studio: Euskirchen (Besuche nach Terminvereinbarung)</p>
        <p className="text-fg-muted text-base">Platzhalter — Phase 3 ersetzt diesen Abschnitt durch ein echtes Kontaktformular mit Anliegen-Auswahl und Datumsvorschlag.</p>
      </ProseSection>
    </main>
  )
}
