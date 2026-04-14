import Link from 'next/link'

type LinkEntry = { href: string; label: string; hint?: string }

export function InternalLinks({ title, links }: { title: string; links: LinkEntry[] }) {
  return (
    <section className="py-16 md:py-24 border-b border-border-soft bg-bg-elevated">
      <div className="mx-auto max-w-[1100px] px-5 md:px-8 lg:px-12">
        <h2 className="editorial-display text-2xl md:text-4xl text-fg mb-10">{title}</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group block border border-border-soft rounded-xl px-5 py-4 hover:border-accent transition-colors"
              >
                <div className="text-fg group-hover:text-accent transition-colors">{l.label}</div>
                {l.hint && <div className="text-xs text-fg-subtle mt-1">{l.hint}</div>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
