import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

type LinkEntry = { title: string; description: string; href: string }

type Props = {
  heading?: string
  eyebrow?: string
  links: LinkEntry[]
}

export function InternalLinks({
  heading = 'Das könnte Sie auch interessieren',
  eyebrow = 'Weiterlesen',
  links,
}: Props) {
  if (!links?.length) return null
  return (
    <section className="bg-bg-secondary py-14 md:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="mb-10 md:mb-14 max-w-[68ch]">
          <p className="eyebrow eyebrow-gold mb-3">{eyebrow}</p>
          <h2
            className="editorial-display text-fg leading-[1.1] tracking-tight"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 500 }}
          >
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {links.map((l, i) => (
            <Link
              key={i}
              href={l.href}
              className="group relative block bg-bg-surface border border-border rounded-sm p-7 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 ease-editorial"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="editorial-display text-fg text-xl md:text-2xl leading-[1.25] font-medium">
                  {l.title}
                </h3>
                <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-accent-gold group-hover:text-accent-terra transition-colors" />
              </div>
              <p className="mt-4 text-sm md:text-base text-fg-muted leading-[1.6]">
                {l.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
