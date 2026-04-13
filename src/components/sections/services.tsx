'use client'

import { Camera, Heart, Plane, Ring, Sparkles } from 'lucide-react'
import { InteractiveSelector, type SelectorOption } from '@/components/ui/interactive-selector'
import { Section, Eyebrow, EditorialHeading } from '@/components/ui/section'
import { services } from '@/lib/content'

const ICONS = [Ring, Camera, Heart, Sparkles, Plane]

export function Services() {
  const options: SelectorOption[] = services.map((s, i) => {
    const Icon = ICONS[i] ?? Camera
    return {
      title: s.title,
      description: s.description,
      image: s.image,
      icon: <Icon size={20} strokeWidth={1.5} />,
    }
  })

  return (
    <Section id="services" spacing="lg" variant="subtle">
      <div className="text-center mb-12">
        <Eyebrow className="mb-6">Leistungen</Eyebrow>
        <EditorialHeading size="lg" align="center" className="mb-4">
          Fünf Wege, in die Stille zu gehen
        </EditorialHeading>
        <p className="text-fg-muted max-w-xl mx-auto">
          Jedes Shooting ist eigen. Wähle, was zu dir passt — oder schreib mir für etwas ganz Eigenes.
        </p>
      </div>
      <InteractiveSelector options={options} />
    </Section>
  )
}
