'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { brand } from '@/lib/content'

const links = [
  { href: '#about', label: 'Studio' },
  { href: '#services', label: 'Leistungen' },
  { href: '#gallery', label: 'Galerie' },
  { href: '#voices', label: 'Stimmen' },
  { href: '#pricing', label: 'Preise' },
  { href: '#journal', label: 'Journal' },
  { href: '#contact', label: 'Kontakt' },
] as const

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMobileOpen(false)

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-editorial',
        scrolled
          ? 'bg-bg/95 backdrop-blur-xl border-b border-border shadow-card'
          : 'bg-gradient-to-b from-bg/90 via-bg/60 to-transparent backdrop-blur-sm',
      )}
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className="flex flex-col items-start leading-none"
          aria-label={`${brand.studio} — Startseite`}
          onClick={closeMenu}
        >
          <span
            className="editorial-display text-fg"
            style={{ fontSize: '1.6rem', fontWeight: 500 }}
          >
            Lichtraum
          </span>
          <span className="text-[0.55rem] md:text-[0.6rem] tracking-[0.35em] uppercase text-fg-subtle mt-0.5">
            Fotostudio
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-fg-muted hover:text-accent-terra transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}

          <a
            href="#contact"
            className="text-sm bg-accent-gold text-bg-charcoal px-4 py-2 rounded-full hover:bg-accent-terra hover:text-fg-invert transition-colors duration-300"
          >
            Termin anfragen
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden p-2 text-fg hover:text-accent-terra transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full inset-x-0 bg-bg border-b border-border shadow-card">
          <nav className="flex flex-col py-4 px-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className="py-3 text-base text-fg-muted hover:text-accent-terra transition-colors border-b border-border-soft last:border-b-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-4 inline-flex items-center justify-center bg-accent-gold text-bg-charcoal px-4 py-3 rounded-full text-sm font-medium"
            >
              Termin anfragen
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
