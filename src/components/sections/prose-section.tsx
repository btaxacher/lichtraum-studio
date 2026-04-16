type Props = {
  h2?: string
  eyebrow?: string
  body: string[]
  variant?: 'default' | 'sand'
  id?: string
}

/**
 * Long-form prose block with optional H2 heading.
 * Max-width 68ch für optimale Readability. Serif display headings, sans body.
 * `variant='sand'` für Section-Wechsel (bg-bg-secondary).
 */
export function ProseSection({ h2, eyebrow, body, variant = 'default', id }: Props) {
  const bg = variant === 'sand' ? 'bg-bg-secondary' : 'bg-bg'
  return (
    <section id={id} className={`${bg} py-14 md:py-20`}>
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="max-w-[68ch] mx-auto">
          {eyebrow ? <p className="eyebrow eyebrow-gold mb-4">{eyebrow}</p> : null}
          {h2 ? (
            <h2
              className="editorial-display text-fg mb-6 md:mb-8 leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)', fontWeight: 500 }}
            >
              {h2}
            </h2>
          ) : null}
          <div className="prose-warm space-y-4 text-fg-muted text-base md:text-lg leading-[1.75]">
            {body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
