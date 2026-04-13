import { brand } from '@/lib/content'

export function Footer() {
  return (
    <footer className="border-t border-border-soft bg-bg-elevated py-12">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="editorial-display text-lg tracking-tight">{brand.name}</div>
        <nav className="flex items-center gap-6 text-sm text-fg-muted">
          <a href="#work" className="hover:text-accent transition-colors">Portfolio</a>
          <a href="#services" className="hover:text-accent transition-colors">Leistungen</a>
          <a href="#contact" className="hover:text-accent transition-colors">Kontakt</a>
          <a href="#" className="hover:text-accent transition-colors">Impressum</a>
          <a href="#" className="hover:text-accent transition-colors">Datenschutz</a>
        </nav>
        <p className="text-xs text-fg-subtle tracking-wider">
          © {new Date().getFullYear()} {brand.name}
        </p>
      </div>
    </footer>
  )
}
