import Link from 'next/link'

type PriceRow = { name: string; price: string; note?: string }

type Props = {
  heading?: string
  eyebrow?: string
  items: PriceRow[]
  cta?: { label: string; href: string }
}

export function SubPagePricing({
  heading = 'Pakete & Preise',
  eyebrow = 'Transparent',
  items,
  cta = { label: 'Individuelles Angebot anfragen', href: '/#kontakt' },
}: Props) {
  return (
    <section className="bg-bg-secondary py-14 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8 lg:px-12">
        <div className="mb-10 md:mb-14 max-w-[68ch]">
          <p className="eyebrow eyebrow-gold mb-3">{eyebrow}</p>
          <h2
            className="editorial-display text-fg leading-[1.1] tracking-tight"
            style={{ fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)', fontWeight: 500 }}
          >
            {heading}
          </h2>
        </div>

        <ul className="divide-y divide-border">
          {items.map((row, i) => (
            <li key={i} className="py-5 md:py-6 flex items-baseline gap-4 md:gap-8">
              <div className="flex-1 min-w-0">
                <p className="text-fg text-base md:text-lg font-medium">{row.name}</p>
                {row.note ? (
                  <p className="text-fg-subtle text-sm mt-1">{row.note}</p>
                ) : null}
              </div>
              <div className="flex-shrink-0 text-accent-terra font-display text-xl md:text-2xl font-medium tabular-nums">
                {row.price}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Link
            href={cta.href}
            className="inline-flex items-center gap-2 border border-fg/20 text-fg px-6 py-3 rounded-full text-sm hover:border-accent-gold hover:text-accent-terra transition-colors duration-300 ease-editorial"
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
