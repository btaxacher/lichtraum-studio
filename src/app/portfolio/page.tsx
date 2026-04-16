import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { SubPageCta } from '@/components/sections/sub-page-cta'
import { portfolioItems } from '@/content/portfolio'
import { buildMetadata } from '@/lib/metadata'

export const generateMetadata = () =>
  buildMetadata({
    title: 'Portfolio | Lichtraum Fotostudio — Hochzeit, Portrait, Business',
    description:
      'Unser Portfolio: 24 kuratierte Bilder aus Hochzeitsreportagen, Portraits, Business-Shoots, Familienfotografie und Babybauch-Sessions aus Köln, Bonn, Euskirchen und dem Rheinland.',
    path: '/portfolio',
    keywords: ['Fotograf Portfolio', 'Hochzeitsbilder Köln', 'Portfolio Lichtraum', 'Fotograf Rheinland Arbeiten'],
  })

const categoryLabels: Record<string, string> = {
  hochzeit: 'Hochzeit',
  portrait: 'Portrait',
  business: 'Business',
  familie: 'Familie',
  babybauch: 'Babybauch',
  studio: 'Studio',
}

function gridClass(span?: string): string {
  if (span === 'large') return 'md:col-span-2 md:row-span-2 aspect-[4/5] md:aspect-[4/5]'
  if (span === 'medium') return 'aspect-[3/4]'
  return 'aspect-square'
}

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-bg">
      <Breadcrumbs items={[{ name: 'Portfolio', path: '/portfolio' }]} />

      <section className="bg-bg pt-14 md:pt-20 pb-10 md:pb-14">
        <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12">
          <div className="max-w-[68ch]">
            <p className="eyebrow eyebrow-gold mb-4">Unsere Arbeit</p>
            <h1
              className="editorial-display text-fg leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 500 }}
            >
              Portfolio — Hochzeiten, Portraits, Business, Familie.
            </h1>
            <p className="mt-6 md:mt-8 text-base md:text-lg text-fg-muted leading-[1.7]">
              Eine Auswahl aus den letzten Jahren. Hochzeiten im Rheinland, Portraits in Köln und Bonn, Business-Shoots in Studios zwischen Euskirchen und Düsseldorf, Familien-Reportagen bei unseren Kunden zu Hause. Alle Bilder im warm-editorialen Stil, der uns prägt.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bg pb-14 md:pb-20">
        <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[240px] gap-3 md:gap-5">
            {portfolioItems.map((item, i) => (
              <figure
                key={i}
                className={`relative overflow-hidden rounded-sm bg-bg-card shadow-card group ${gridClass(item.span)}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading={i < 4 ? 'eager' : 'lazy'}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bg-charcoal/70 via-bg-charcoal/20 to-transparent text-fg-invert text-xs px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {categoryLabels[item.category] ?? item.category}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-secondary py-14 md:py-20">
        <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12">
          <div className="mb-10 max-w-[68ch]">
            <p className="eyebrow eyebrow-gold mb-3">Nach Kategorie</p>
            <h2
              className="editorial-display text-fg leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)', fontWeight: 500 }}
            >
              Für welchen Anlass suchen Sie Referenzen?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { href: '/hochzeitsfotograf-koeln', title: 'Hochzeit', text: 'Ganztagsreportagen in Köln, Bonn, Euskirchen und der Eifel.' },
              { href: '/bewerbungsfotos-koeln', title: 'Bewerbung & Business', text: 'LinkedIn-Portraits, Corporate-Bilder, Team-Shootings.' },
              { href: '/schwangerschaftsfotos-koeln', title: 'Babybauch & Family', text: 'Schwangerschafts- und Familienfotografie im Studio und outdoor.' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group bg-bg-surface border border-border rounded-sm p-7 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 ease-editorial flex flex-col"
              >
                <h3 className="editorial-display text-fg text-xl md:text-2xl font-medium mb-3 flex items-center justify-between">
                  {l.title}
                  <ArrowRight className="h-4 w-4 text-accent-gold group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-sm text-fg-muted leading-[1.6]">{l.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SubPageCta
        heading="Ihre Geschichte gehört hier rein."
        body="Wenn Sie einen ähnlichen Stil für Ihren Anlass suchen — schreiben Sie uns. Wir schicken ein individuelles Angebot binnen 24 Stunden."
      />
    </main>
  )
}
