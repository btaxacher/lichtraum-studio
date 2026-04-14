import type { ReactNode } from 'react'

type Props = {
  eyebrow?: string
  title?: string
  children: ReactNode
  maxWidth?: 'narrow' | 'medium' | 'wide'
}

export function ProseSection({ eyebrow, title, children, maxWidth = 'medium' }: Props) {
  const widths = { narrow: 'max-w-[680px]', medium: 'max-w-[880px]', wide: 'max-w-[1100px]' }
  return (
    <section className="py-16 md:py-24 border-b border-border-soft">
      <div className={`mx-auto ${widths[maxWidth]} px-5 md:px-8 lg:px-12`}>
        {eyebrow && (
          <div className="eyebrow text-accent mb-4">{eyebrow}</div>
        )}
        {title && (
          <h2 className="editorial-display text-3xl md:text-5xl text-fg mb-8 leading-[1.1]">{title}</h2>
        )}
        <div className="prose prose-invert max-w-none text-fg/85 text-lg leading-relaxed space-y-5 font-light">
          {children}
        </div>
      </div>
    </section>
  )
}
