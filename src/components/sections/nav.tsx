'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { brand } from '@/lib/content'

const links = [
  { href: '#about', label: 'Studio' },
  { href: '#services', label: 'Leistungen' },
  { href: '#gallery', label: 'Galerie' },
  { href: '#voices', label: 'Stimmen' },
  { href: '#contact', label: 'Kontakt' },
] as const

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

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
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className="flex flex-col items-start leading-none"
          aria-label={`${brand.studio} — Startseite`}
        >
          <span className="script-heading text-2xl md:text-3xl normal-case tracking-normal">
            Lichtraum
          </span>
          <span className="text-[0.55rem] md:text-[0.6rem] tracking-[0.35em] uppercase text-fg-subtle mt-0.5">
            Fotostudio
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-fg-muted hover:text-accent transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}

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
