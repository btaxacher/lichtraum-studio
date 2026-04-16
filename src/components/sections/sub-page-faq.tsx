type Faq = { q: string; a: string }

type Props = {
  heading?: string
  eyebrow?: string
  faqs: Faq[]
}

/**
 * Server-rendered FAQ. Uses HTML <details> for native accordion behaviour
 * without JavaScript — SEO-friendly, full content always in DOM for crawlers.
 */
export function SubPageFAQ({ heading = 'Häufige Fragen', eyebrow = 'FAQ', faqs }: Props) {
  if (!faqs?.length) return null
  return (
    <section className="bg-bg py-14 md:py-20">
      <div className="mx-auto w-full max-w-[1100px] px-5 md:px-8 lg:px-12">
        <div className="mb-10 md:mb-14 max-w-[68ch]">
          <p className="eyebrow eyebrow-gold mb-3">{eyebrow}</p>
          <h2
            className="editorial-display text-fg leading-[1.1] tracking-tight"
            style={{ fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)', fontWeight: 500 }}
          >
            {heading}
          </h2>
        </div>

        <div className="divide-y divide-border">
          {faqs.map((faq, i) => (
            <details key={i} className="group py-5 md:py-6" {...(i === 0 ? { open: true } : {})}>
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-fg text-base md:text-lg font-medium hover:text-accent-terra transition-colors">
                <span>{faq.q}</span>
                <span
                  aria-hidden
                  className="flex-shrink-0 w-6 h-6 rounded-full border border-border flex items-center justify-center text-accent-gold transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="mt-3 md:mt-4 text-fg-muted text-base md:text-[1.05rem] leading-[1.75] max-w-[68ch]">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
