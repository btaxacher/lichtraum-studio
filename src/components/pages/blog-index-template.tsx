import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { blogPosts } from '@/content/blog-posts'

/** Fallback-Hero falls post.heroImage fehlt — nutzt bestehende Redesign-Pool. */
const CATEGORY_FALLBACK: Record<string, string> = {
  Hochzeit: '/images/redesign/hero-bride-golden-hour.jpg',
  Locations: '/images/redesign/gallery-05-couple-field.jpg',
  Bewerbung: '/images/redesign/gallery-06-business.jpg',
  Ratgeber: '/images/redesign/gallery-03-bride.jpg',
  Guide: '/images/redesign/studio-interior.jpg',
}

export function BlogIndexPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime(),
  )

  return (
    <main className="relative min-h-screen bg-bg">
      <Breadcrumbs items={[{ name: 'Journal', path: '/blog' }]} />

      <section className="bg-bg pt-14 md:pt-20 pb-10 md:pb-14">
        <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12">
          <div className="max-w-[68ch]">
            <p className="eyebrow eyebrow-gold mb-4">Journal</p>
            <h1
              className="editorial-display text-fg leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 500 }}
            >
              Aus der Kamera in den Text.
            </h1>
            <p className="mt-6 md:mt-8 text-base md:text-lg text-fg-muted leading-[1.7]">
              Gedanken, Guides und ehrliche Einordnungen rund um Fotografie im Rheinland — Hochzeiten, Bewerbungsfotos, Location-Tipps und das, was zwischen Kamera und Kunde sonst noch wichtig ist.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bg pb-20 md:pb-28">
        <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {sorted.map((post, i) => {
              const heroSrc = post.heroImage
                ?? CATEGORY_FALLBACK[post.category]
                ?? '/images/redesign/hero-bride-golden-hour.jpg'
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-bg-card shadow-card mb-5">
                    <Image
                      src={heroSrc}
                      alt={post.title}
                      fill
                      loading={i < 2 ? 'eager' : 'lazy'}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-center gap-3 text-xs text-fg-subtle mb-3 uppercase tracking-[0.2em]">
                    <span>{post.category}</span>
                    <span className="text-fg-subtle/50">·</span>
                    <span>{post.readTime} Min Lesezeit</span>
                  </div>
                  <h2 className="editorial-display text-fg text-xl md:text-2xl lg:text-3xl font-medium leading-[1.15] mb-3 group-hover:text-accent-terra transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm md:text-base text-fg-muted leading-[1.65] mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-accent-gold group-hover:text-accent-terra transition-colors">
                    Weiterlesen
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
