import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export type Crumb = { label: string; href?: string }

const BASE = 'https://lichtraum-studio.vercel.app'

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const full: Crumb[] = [{ label: 'Start', href: '/' }, ...items]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: full.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${BASE}${c.href}` } : {}),
    })),
  }

  return (
    <>
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[1100px] px-5 md:px-8 lg:px-12 pt-28 md:pt-32">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-fg-muted">
          {full.map((c, i) => (
            <li key={i} className="flex items-center gap-1">
              {c.href && i < full.length - 1 ? (
                <Link href={c.href} className="hover:text-accent transition-colors">{c.label}</Link>
              ) : (
                <span className="text-fg-subtle">{c.label}</span>
              )}
              {i < full.length - 1 && <ChevronRight size={12} className="text-fg-subtle" />}
            </li>
          ))}
        </ol>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
