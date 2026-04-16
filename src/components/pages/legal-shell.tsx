import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { hasPlaceholders } from '@/content/legal-content'

type Block = { h2?: string; paragraphs: string[] }

type Props = {
  title: string
  crumbName: string
  crumbPath: string
  lastUpdated: string
  blocks: Block[]
}

export function LegalShell({ title, crumbName, crumbPath, lastUpdated, blocks }: Props) {
  const incomplete = hasPlaceholders(blocks)

  return (
    <main className="relative min-h-screen bg-bg">
      <Breadcrumbs items={[{ name: crumbName, path: crumbPath }]} />

      {incomplete ? (
        <div className="w-full bg-accent-gold/15 border-b border-accent-gold/40">
          <div className="mx-auto max-w-[1100px] px-5 md:px-8 lg:px-12 py-4">
            <p className="text-sm md:text-base text-fg leading-relaxed">
              <strong className="text-accent-terra">
                Hinweis für den Betreiber:
              </strong>{' '}
              Diese Seite enthält Platzhalter (z. B. <code>[INHABER-NAME]</code>, <code>[STRASSE]</code>,{' '}
              <code>[USt-ID]</code>). Vor Go-Live in{' '}
              <code>src/content/legal-content.ts</code> ersetzen.
            </p>
          </div>
        </div>
      ) : null}

      <article className="py-14 md:py-20">
        <div className="mx-auto max-w-[780px] px-5 md:px-8 lg:px-12">
          <header className="mb-10 md:mb-14">
            <p className="eyebrow eyebrow-gold mb-3">Rechtliche Hinweise</p>
            <h1
              className="editorial-display text-fg leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 500 }}
            >
              {title}
            </h1>
            <p className="mt-4 text-sm text-fg-subtle">Stand: {lastUpdated}</p>
          </header>

          <div className="space-y-10">
            {blocks.map((block, i) => (
              <section key={i}>
                {block.h2 ? (
                  <h2 className="editorial-display text-fg text-xl md:text-2xl font-medium leading-[1.2] mb-4">
                    {block.h2}
                  </h2>
                ) : null}
                <div className="space-y-3 text-fg-muted text-base leading-[1.75]">
                  {block.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>
    </main>
  )
}
