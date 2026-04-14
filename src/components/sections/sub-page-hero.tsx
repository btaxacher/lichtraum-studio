import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { brand } from '@/lib/content'

type Props = {
  eyebrow?: string
  h1: string
  subtitle?: string
  ctaHref?: string
  ctaLabel?: string
}

export function SubPageHero({ eyebrow, h1, subtitle, ctaHref = '/kontakt', ctaLabel = 'Termin anfragen' }: Props) {
  return (
    <section className="relative pt-10 md:pt-14 pb-20 md:pb-28 border-b border-border-soft">
      <div className="mx-auto max-w-[1100px] px-5 md:px-8 lg:px-12">
        {eyebrow && (
          <div className="flex items-center gap-2 mb-6 text-accent">
            <MapPin size={16} strokeWidth={1.5} />
            <span className="text-xs tracking-[0.25em] uppercase font-medium">{eyebrow}</span>
          </div>
        )}
        <h1 className="editorial-display text-4xl md:text-6xl lg:text-7xl text-fg leading-[1.05] mb-8 max-w-4xl">
          {h1}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-fg/80 max-w-2xl leading-relaxed font-light mb-10">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center gap-2 bg-accent text-bg px-8 py-4 rounded-full font-medium hover:bg-fg transition-all duration-500 ease-editorial group"
          >
            {ctaLabel}
            <ArrowRight size={18} className="transition-transform duration-500 group-hover:translate-x-1" />
          </Link>
          <a
            href={`mailto:${brand.email}`}
            className="inline-flex items-center justify-center gap-2 border border-fg/30 text-fg px-8 py-4 rounded-full hover:border-accent hover:text-accent transition-all duration-500 ease-editorial"
          >
            E-Mail schreiben
          </a>
        </div>
      </div>
    </section>
  )
}
