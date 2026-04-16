import Link from 'next/link'
import { brand } from '@/lib/content'

type Props = {
  heading: string
  body?: string
  primaryCta?: { label: string; href: string }
}

export function SubPageCta({
  heading,
  body,
  primaryCta = { label: 'Jetzt Termin anfragen', href: '/#kontakt' },
}: Props) {
  return (
    <section className="bg-bg-charcoal text-fg-invert py-16 md:py-24">
      <div className="mx-auto w-full max-w-[900px] px-5 md:px-8 lg:px-12 text-center">
        <h2
          className="editorial-display leading-[1.1] tracking-tight"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500 }}
        >
          {heading}
        </h2>
        {body ? (
          <p className="mt-6 text-base md:text-lg text-fg-invert/80 leading-[1.7] max-w-[60ch] mx-auto">
            {body}
          </p>
        ) : null}
        <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center justify-center gap-2 bg-accent-gold text-bg-charcoal px-8 py-4 rounded-full font-medium text-base hover:bg-accent-terra hover:text-fg-invert transition-colors duration-300 ease-editorial"
          >
            {primaryCta.label}
          </Link>
          <a
            href={`mailto:${brand.email}?subject=Shooting-Anfrage`}
            className="inline-flex items-center justify-center gap-2 border border-fg-invert/30 text-fg-invert/90 px-8 py-4 rounded-full font-medium text-base hover:border-accent-gold hover:text-accent-gold transition-colors duration-300 ease-editorial"
          >
            {brand.email}
          </a>
        </div>
      </div>
    </section>
  )
}
