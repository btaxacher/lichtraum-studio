'use client'

import { Section, EditorialHeading, Eyebrow } from '@/components/ui/section'
import { MasonryGrid, EditorialCard } from '@/components/ui/masonry-grid'
import { masonryCards } from '@/lib/content'
import { useEffect, useState } from 'react'

export function EditorialMasonry() {
  const [columns, setColumns] = useState(3)

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      if (w < 640) setColumns(1)
      else if (w < 1024) setColumns(2)
      else if (w < 1280) setColumns(3)
      else setColumns(4)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <Section spacing="lg">
      <div className="text-center mb-16">
        <Eyebrow className="mb-6">Referenzen</Eyebrow>
        <EditorialHeading size="lg" align="center">
          Bilder, die Geschichten tragen
        </EditorialHeading>
      </div>
      <MasonryGrid columns={columns} gap={6}>
        {masonryCards.map((card, i) => (
          <EditorialCard key={i} {...card} />
        ))}
      </MasonryGrid>
    </Section>
  )
}
