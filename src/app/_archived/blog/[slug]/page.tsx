import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts } from '@/content/blog-posts'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { SubPageHero } from '@/components/sections/sub-page-hero'
import { ProseSection } from '@/components/sections/prose-section'
import { CTA } from '@/components/sections/cta'
import { brand } from '@/lib/content'
import { SITE_URL } from '@/lib/site-url'

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: `${post.title} | Lichtraum Blog`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedDate,
      authors: [post.author],
    },
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    author: { '@type': 'Organization', name: post.author, url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: brand.studio,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/og.jpg` },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    keywords: post.keyword,
    wordCount: post.sections.reduce((n, s) => n + s.paragraphs.join(' ').split(/\s+/).length, 0),
    articleSection: post.category,
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <main className="relative min-h-screen">
      <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />
      <SubPageHero
        eyebrow={`${post.category} · ${post.readTime} Min Lesezeit`}
        h1={post.title}
        subtitle={post.description}
      />

      <ProseSection eyebrow={new Date(post.publishedDate).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}>
        {post.intro.map((p, i) => <p key={i}>{p}</p>)}
      </ProseSection>

      {post.sections.map((s, i) => (
        <ProseSection key={i} title={s.h2}>
          {s.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
          {s.list && (
            <ul className="space-y-2 list-disc pl-6 marker:text-accent pt-2">
              {s.list.map((item) => <li key={item}>{item}</li>)}
            </ul>
          )}
        </ProseSection>
      ))}

      <ProseSection eyebrow="Fazit">
        <p>{post.closing}</p>
      </ProseSection>

      {otherPosts.length > 0 && (
        <section className="py-16 md:py-24 border-b border-border-soft bg-bg-elevated">
          <div className="mx-auto max-w-[1100px] px-5 md:px-8 lg:px-12">
            <h2 className="editorial-display text-2xl md:text-4xl text-fg mb-10">Weitere Artikel</h2>
            <ul className="grid md:grid-cols-3 gap-6">
              {otherPosts.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="group block border border-border-soft rounded-xl p-5 hover:border-accent transition-colors">
                    <div className="text-xs text-accent tracking-[0.2em] uppercase mb-2">{p.category}</div>
                    <div className="text-fg group-hover:text-accent transition-colors font-medium">{p.title}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CTA />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </main>
  )
}
