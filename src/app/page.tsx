import { Hero } from '@/components/sections/hero'
import { Manifest } from '@/components/sections/manifest'
import { Services } from '@/components/sections/services'
import { GalleryShuffle } from '@/components/sections/gallery-shuffle'
import { ClientsSay } from '@/components/sections/clients-say'
import { CTA } from '@/components/sections/cta'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <Manifest />
      <Services />
      <GalleryShuffle />
      <ClientsSay />
      <CTA />
    </main>
  )
}
