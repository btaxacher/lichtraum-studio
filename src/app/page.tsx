import { Hero } from '@/components/sections/hero'
import { PortfolioParallax } from '@/components/sections/portfolio-parallax'
import { Manifest } from '@/components/sections/manifest'
import { MoonDivider } from '@/components/sections/moon-divider'
import { Services } from '@/components/sections/services'
import { GalleryShuffle } from '@/components/sections/gallery-shuffle'
import { ClientsSay } from '@/components/sections/clients-say'
import { CTA } from '@/components/sections/cta'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <PortfolioParallax />
      <Manifest />
      <MoonDivider />
      <Services />
      <GalleryShuffle />
      <ClientsSay />
      <CTA />
    </main>
  )
}
