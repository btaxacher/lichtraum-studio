'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { brand } from '@/lib/content'
import { services, cities } from '@/lib/locations'
import { ChevronDown } from 'lucide-react'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<'services' | 'locations' | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-editorial',
        scrolled
          ? 'bg-bg/90 backdrop-blur-xl border-b border-border-soft shadow-lg shadow-black/20'
          : 'bg-gradient-to-b from-bg/85 via-bg/50 to-transparent backdrop-blur-sm',
      )}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="editorial-display text-lg md:text-xl tracking-tight text-fg">
          {brand.name}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/portfolio" className="text-sm text-fg-muted hover:text-accent transition-colors duration-300">
            Portfolio
          </Link>

          {/* Leistungen dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu('services')}
          >
            <button className="text-sm text-fg-muted hover:text-accent transition-colors duration-300 inline-flex items-center gap-1">
              Leistungen <ChevronDown size={14} />
            </button>
            {openMenu === 'services' && (
              <div className="absolute top-full left-0 mt-2 w-60 rounded-xl border border-border-soft bg-bg/95 backdrop-blur-xl shadow-lg shadow-black/40 py-2">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/leistungen/${s.slug}`}
                    className="block px-5 py-2 text-sm text-fg-muted hover:text-accent hover:bg-bg-elevated transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
                <div className="my-1 border-t border-border-soft" />
                <Link href="/hochzeitsfotograf-koeln" className="block px-5 py-2 text-sm text-fg-muted hover:text-accent transition-colors">
                  Hochzeit Köln
                </Link>
                <Link href="/bewerbungsfotos-koeln" className="block px-5 py-2 text-sm text-fg-muted hover:text-accent transition-colors">
                  Bewerbung Köln
                </Link>
              </div>
            )}
          </div>

          {/* Standorte dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu('locations')}
          >
            <button className="text-sm text-fg-muted hover:text-accent transition-colors duration-300 inline-flex items-center gap-1">
              Standorte <ChevronDown size={14} />
            </button>
            {openMenu === 'locations' && (
              <div className="absolute top-full left-0 mt-2 w-56 max-h-[70vh] overflow-y-auto rounded-xl border border-border-soft bg-bg/95 backdrop-blur-xl shadow-lg shadow-black/40 py-2">
                <Link href="/" className="block px-5 py-2 text-sm text-accent hover:bg-bg-elevated transition-colors">
                  Euskirchen (Studio)
                </Link>
                <div className="my-1 border-t border-border-soft" />
                {cities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/fotograf/${c.slug}`}
                    className="block px-5 py-2 text-sm text-fg-muted hover:text-accent hover:bg-bg-elevated transition-colors"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/blog" className="text-sm text-fg-muted hover:text-accent transition-colors duration-300">
            Blog
          </Link>
          <Link href="/ueber-uns" className="text-sm text-fg-muted hover:text-accent transition-colors duration-300">
            Über uns
          </Link>
          <Link href="/kontakt" className="text-sm text-fg-muted hover:text-accent transition-colors duration-300">
            Kontakt
          </Link>

          <a
            href={`mailto:${brand.email}`}
            className="text-sm border border-accent/60 text-accent px-4 py-2 rounded-full hover:bg-accent hover:text-bg transition-all duration-300"
          >
            Anfragen
          </a>
        </nav>
      </div>
    </header>
  )
}
