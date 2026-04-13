'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { brand } from '@/lib/content'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#work', label: 'Portfolio' },
    { href: '#services', label: 'Leistungen' },
    { href: '#about', label: 'Über mich' },
    { href: '#contact', label: 'Kontakt' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-editorial',
        scrolled ? 'bg-bg/80 backdrop-blur-xl border-b border-border-soft' : 'bg-transparent',
      )}
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="editorial-display text-lg md:text-xl tracking-tight text-fg">
          {brand.name}
        </a>
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
