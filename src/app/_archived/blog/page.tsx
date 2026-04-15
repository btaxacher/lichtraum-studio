import type { Metadata } from 'next'
import Link from 'next/link'
import { SubPageHero } from '@/components/sections/sub-page-hero'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { blogPosts } from '@/content/blog-posts'

export const metadata: Metadata = {
  title: 'Blog | Lichtraum Fotostudio — Ratgeber Fotografie NRW',
  description: 'Ratgeber und Einordnungen rund um Hochzeits-, Business- und Bewerbungsfotografie in Köln, Bonn und Rhein-Erft — geschrieben für Paare, Familien und Selbständige.',
  alternates: { canonical: '/blog' },
}

export default function BlogIndex() {
  const sorted = [...blogPosts].sort((a, b) => b.publishedDate.localeCompare(a.publishedDate))
  return (
    <main className="relative min-h-screen">
      <Breadcrumbs items={[{ label: 'Blog' }]} />
      <SubPageHero
        eyebrow="Journal"
        h1="Journal"
        subtitle="Gedanken, Guides und Einordnungen rund um Fotografie in NRW — ehrlich, ausführlich, ohne Verkaufsdruck."
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1100px] px-5 md:px-8 lg:px-12">
          <ul className="divide-y divide-border-soft">
            {sorted.map((p) => (
              <li key={p.slug} className="py-8">
                <Link href={`/blog/${p.slug}`} className="group block">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-fg-subtle tracking-[0.2em] uppercase mb-3">
                    <span className="text-accent">{p.category}</span>
                    <span>·</span>
                    <time dateTime={p.publishedDate}>
                      {new Date(p.publishedDate).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                    <span>·</span>
                    <span>{p.readTime} Min Lesezeit</span>
                  </div>
                  <h2 className="editorial-display text-2xl md:text-4xl text-fg group-hover:text-accent transition-colors mb-3 leading-tight">
                    {p.title}
                  </h2>
                  <p className="text-fg/80 font-light leading-relaxed max-w-2xl">{p.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
