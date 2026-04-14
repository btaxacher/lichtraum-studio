import type { Metadata } from 'next'
import { SubPageHero } from '@/components/sections/sub-page-hero'
import { ProseSection } from '@/components/sections/prose-section'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'

export const metadata: Metadata = {
  title: 'Blog | Lichtraum Fotostudio Euskirchen',
  description: 'Ratgeber und Inspiration rund um Hochzeits-, Business- und Bewerbungsfotografie in Köln, Bonn und Rhein-Erft.',
  alternates: { canonical: '/blog' },
}

export default function BlogIndex() {
  return (
    <main className="relative min-h-screen">
      <Breadcrumbs items={[{ label: 'Blog' }]} />
      <SubPageHero eyebrow="Blog" h1="Journal" subtitle="Gedanken, Guides und Behind-the-Scenes aus dem Lichtraum-Studio." />
      <ProseSection eyebrow="Coming soon" title="Wird in Phase 6 gebaut">
        <p className="text-fg-muted text-base">
          Der Blog wird in Phase 6 (MDX-basiert, 4 Starter-Artikel zu Preisen, Locations, Checklisten und Fotograf-Auswahl) bereitgestellt.
        </p>
      </ProseSection>
    </main>
  )
}
