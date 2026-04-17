import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type Props = {
  eyebrow: string
  h1: string
  subtitle: string
  image: { src: string; alt: string }
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

/**
 * Warm-Editorial Hero für Sub-Pages.
 * Server-Component (keine Framer-Motion) — priorisiert SSR-Content für Crawler.
 * Layout: 2-col 60/40 auf Desktop, stacked auf Mobile.
 */
export function SubPageHero({
  eyebrow,
  h1,
  subtitle,
  image,
  primaryCta = { label: 'Termin anfragen', href: '/#contact' },
  secondaryCta,
}: Props) {
  return (
    <section className="relative w-full bg-bg pt-24 md:pt-28 pb-14 md:pb-16">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12 lg:gap-16 items-center">
          <div className="md:col-span-3 md:pr-4 lg:pr-8 order-2 md:order-1">
            <p className="eyebrow eyebrow-gold">{eyebrow}</p>
            <h1
              className="editorial-display text-fg mt-4 md:mt-6 leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 500 }}
            >
              {h1}
            </h1>
            <p className="mt-6 md:mt-8 text-base md:text-lg text-fg-muted leading-[1.7] max-w-[560px]">
              {subtitle}
            </p>
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href={primaryCta.href}
                className="group inline-flex items-center justify-center gap-2 bg-accent-gold text-bg-charcoal px-7 py-4 rounded-full font-medium text-base hover:bg-accent-terra hover:text-fg-invert transition-colors duration-300 ease-editorial"
              >
                {primaryCta.label}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 border border-fg/20 text-fg px-7 py-4 rounded-full font-medium text-base hover:border-accent-gold hover:text-accent-terra transition-colors duration-300 ease-editorial"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </div>

          <div className="md:col-span-2 order-1 md:order-2">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm shadow-editorial bg-bg-card">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
