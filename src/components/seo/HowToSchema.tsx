import { JsonLd } from './JsonLd'

type Step = { name: string; text: string; image?: string; url?: string }

type Props = {
  name: string
  description?: string
  totalTime?: string // ISO 8601 Duration, e.g. "PT30M"
  steps: Step[]
}

/**
 * HowTo JSON-LD — für Ratgeber-Artikel mit step-by-step Anleitung.
 * Beispiel: /blog/bewerbungsfoto-checkliste
 */
export function HowToSchema({ name, description, totalTime, steps }: Props) {
  if (!steps?.length) return null
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name,
        ...(description ? { description } : {}),
        ...(totalTime ? { totalTime } : {}),
        step: steps.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: s.name,
          text: s.text,
          ...(s.image ? { image: s.image } : {}),
          ...(s.url ? { url: s.url } : {}),
        })),
      }}
    />
  )
}
