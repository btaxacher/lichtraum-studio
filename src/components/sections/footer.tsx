import Link from 'next/link'
import { Instagram } from 'lucide-react'
import { FaPinterest } from 'react-icons/fa'
import { footerContent } from '@/lib/content'

const iconMap = {
  Instagram,
  Pinterest: FaPinterest,
} as const

/**
 * Footer — Warm Editorial Light Redesign.
 * 3-Col Layout auf Desktop (Brand + Leistungen + Navigation), stacked Mobile.
 */
export function Footer() {
  return (
    <footer className="relative w-full bg-bg border-t border-border pt-16 md:pt-20 pb-10">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          {/* Brand Column */}
          <div>
            <Link href="/" className="inline-flex flex-col gap-1">
              <span
                className="editorial-display text-fg leading-none"
                style={{ fontSize: '2rem', fontWeight: 500 }}
              >
                {footerContent.brandName}
              </span>
              <span className="text-[0.6rem] tracking-[0.35em] uppercase text-fg-subtle">
                {footerContent.brandSub}
              </span>
            </Link>
            <p className="mt-5 text-sm text-fg-muted leading-[1.7] whitespace-pre-line max-w-[280px]">
              {footerContent.tagline}
            </p>
          </div>

          {/* Leistungen Column */}
          <div>
            <h3 className="eyebrow mb-4">{footerContent.servicesColumn.title}</h3>
            <ul className="space-y-2.5">
              {footerContent.servicesColumn.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-fg-muted hover:text-accent-terra transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="eyebrow mb-4">{footerContent.navColumn.title}</h3>
            <ul className="space-y-2.5">
              {footerContent.navColumn.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-fg-muted hover:text-accent-terra transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gold divider */}
        <div className="mt-14 md:mt-20 h-px bg-accent-gold/40" aria-hidden />

        {/* Bottom Row */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-fg-subtle tracking-wide">{footerContent.copyright}</p>
          <div className="flex items-center gap-4">
            {footerContent.social.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap]
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="text-accent-gold hover:text-accent-terra transition-colors duration-300"
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
