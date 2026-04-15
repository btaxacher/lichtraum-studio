import Link from 'next/link'
import { brand, footerCover } from '@/lib/content'
import { services, cities, tier1Pages } from '@/lib/locations'

export function Footer() {
  return (
    <footer className="bg-bg-elevated">
      {/* Editorial image bridge into the footer */}
      <div
        aria-hidden
        className="relative w-full h-[220px] md:h-[300px] bg-cover bg-center"
        style={{ backgroundImage: `url(${footerCover})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/40 to-bg-elevated" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="editorial-display text-3xl md:text-5xl italic text-fg/95 tracking-tight">
            {brand.studio}
          </span>
        </div>
      </div>

      <div className="border-t border-border-soft pt-16 pb-10">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link href="/" className="editorial-display text-xl tracking-tight text-fg">
              {brand.name}
            </Link>
            <p className="mt-4 text-sm text-fg-muted max-w-xs leading-relaxed">
              {brand.studio} — {brand.region}.
            </p>
            <p className="mt-3 text-sm text-fg-muted">
              <a href={`mailto:${brand.email}`} className="hover:text-accent transition-colors">
                {brand.email}
              </a>
            </p>
            <p className="text-sm text-fg-muted">{brand.phone}</p>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="text-xs tracking-[0.25em] uppercase text-fg mb-4">Leistungen</h3>
            <ul className="space-y-2 text-sm text-fg-muted">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/leistungen/${s.slug}`} className="hover:text-accent transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
              {tier1Pages.slice(0, 4).map((t) => (
                <li key={t.slug}>
                  <Link href={`/${t.slug}`} className="hover:text-accent transition-colors">
                    {t.h1.split('—')[0].trim()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Standorte */}
          <div>
            <h3 className="text-xs tracking-[0.25em] uppercase text-fg mb-4">Standorte</h3>
            <ul className="space-y-2 text-sm text-fg-muted">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">Euskirchen</Link>
              </li>
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link href={`/fotograf/${c.slug}`} className="hover:text-accent transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info / Legal */}
          <div>
            <h3 className="text-xs tracking-[0.25em] uppercase text-fg mb-4">Info</h3>
            <ul className="space-y-2 text-sm text-fg-muted">
              <li><Link href="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link></li>
              <li><Link href="/preise" className="hover:text-accent transition-colors">Preise</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="/ueber-uns" className="hover:text-accent transition-colors">Über uns</Link></li>
              <li><Link href="/kontakt" className="hover:text-accent transition-colors">Kontakt</Link></li>
              <li><Link href="/impressum" className="hover:text-accent transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-accent transition-colors">Datenschutz</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border-soft flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-fg-subtle tracking-wider">
            © {new Date().getFullYear()} {brand.studio}
          </p>
          <p className="text-xs text-fg-subtle">
            Instagram: <a href={`https://instagram.com/${brand.instagram.replace('@','')}`} className="hover:text-accent transition-colors">{brand.instagram}</a>
          </p>
        </div>
      </div>
      </div>
    </footer>
  )
}
