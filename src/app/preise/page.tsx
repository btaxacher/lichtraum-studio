import type { Metadata } from 'next'
import { SubPageHero } from '@/components/sections/sub-page-hero'
import { ProseSection } from '@/components/sections/prose-section'
import { services } from '@/lib/locations'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'

export const metadata: Metadata = {
  title: 'Preise | Lichtraum Fotostudio Euskirchen',
  description: 'Transparente Preise für Hochzeit, Portrait, Bewerbung und Business — keine versteckten Kosten.',
  alternates: { canonical: '/preise' },
}

export default function PricesPage() {
  return (
    <main className="relative min-h-screen">
      <Breadcrumbs items={[{ label: 'Preise' }]} />
      <SubPageHero eyebrow="Preise" h1="Transparente Preise" subtitle="Festpreise, keine Überraschungen. Retusche und digitale Auslieferung im Paket enthalten." />
      <ProseSection eyebrow="Übersicht" title="Startpreise">
        <ul className="space-y-3 list-disc pl-6 marker:text-accent">
          {services.map((s) => (
            <li key={s.slug}><span className="font-medium text-fg">{s.name}</span> — {s.startingPrice}</li>
          ))}
          <li><span className="font-medium text-fg">Hochzeit (Ganztag)</span> — ab 1.890 €</li>
          <li><span className="font-medium text-fg">Bewerbungsfoto Express</span> — ab 89 €</li>
        </ul>
        <p className="text-fg-muted text-base pt-6">Platzhalter — Phase 3 erweitert zu vollständigen Preistabellen mit Paket-Differenzierung.</p>
      </ProseSection>
    </main>
  )
}
