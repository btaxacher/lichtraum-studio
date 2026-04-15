import Link from 'next/link'
import { brand, footerCover } from '@/lib/content'

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
          <span className="script-heading text-4xl md:text-6xl text-fg/95">
            Lichtraum
          </span>
        </div>
      </div>

      <div className="border-t border-border-soft pt-14 pb-10">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            <div className="max-w-sm">
              <Link href="/" className="script-heading text-2xl text-fg">
                Lichtraum Fotostudio
              </Link>
              <p className="mt-4 text-sm text-fg-muted leading-relaxed">
                {brand.region}. Hochzeiten, Portraits &amp; Business — editorial
                fotografiert, ehrlich erzählt.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 md:gap-14 text-sm">
              <div>
                <h3 className="text-xs tracking-[0.25em] uppercase text-fg mb-3">Kontakt</h3>
                <ul className="space-y-2 text-fg-muted">
                  <li>
                    <a href={`mailto:${brand.email}`} className="hover:text-accent transition-colors">
                      {brand.email}
                    </a>
                  </li>
                  <li>{brand.phone}</li>
                  <li>
                    <a
                      href={`https://instagram.com/${brand.instagram.replace('@', '')}`}
                      className="hover:text-accent transition-colors"
                    >
                      {brand.instagram}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs tracking-[0.25em] uppercase text-fg mb-3">Navigation</h3>
                <ul className="space-y-2 text-fg-muted">
                  <li><a href="#about" className="hover:text-accent transition-colors">Studio</a></li>
                  <li><a href="#services" className="hover:text-accent transition-colors">Leistungen</a></li>
                  <li><a href="#gallery" className="hover:text-accent transition-colors">Galerie</a></li>
                  <li><a href="#contact" className="hover:text-accent transition-colors">Kontakt</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-border-soft flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-fg-subtle tracking-wider">
              © {new Date().getFullYear()} {brand.studio}
            </p>
            <p className="text-xs text-fg-subtle">Euskirchen · Köln · Bonn · Rheinland</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
