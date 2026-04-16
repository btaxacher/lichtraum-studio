import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'

export type Crumb = { name: string; path: string }

/**
 * Visible breadcrumb + BreadcrumbList JSON-LD.
 * Always prepends Home/Start automatically.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const full: Crumb[] = [{ name: 'Start', path: '/' }, ...items]
  return (
    <>
      <BreadcrumbSchema items={full} />
      <nav
        aria-label="Breadcrumb"
        className="w-full bg-bg border-b border-border-soft"
      >
        <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12">
          <ol className="flex items-center gap-2 py-3 md:py-4 text-xs md:text-sm text-fg-subtle overflow-x-auto whitespace-nowrap">
            {full.map((c, i) => {
              const isLast = i === full.length - 1
              return (
                <li key={c.path} className="flex items-center gap-2">
                  {i > 0 ? (
                    <ChevronRight className="h-3 w-3 text-fg-subtle/50" aria-hidden />
                  ) : null}
                  {isLast ? (
                    <span className="text-fg-muted" aria-current="page">
                      {c.name}
                    </span>
                  ) : (
                    <Link
                      href={c.path}
                      className="hover:text-accent-terra transition-colors"
                    >
                      {c.name}
                    </Link>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </nav>
    </>
  )
}
