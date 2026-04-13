import { Nav } from '@/components/sections/nav'
import { Hero } from '@/components/sections/hero'
import { Manifest } from '@/components/sections/manifest'
import { PortfolioParallax } from '@/components/sections/portfolio-parallax'
import { Services } from '@/components/sections/services'
import { MoonDivider } from '@/components/sections/moon-divider'
import { GalleryShuffle } from '@/components/sections/gallery-shuffle'
import { BehindTheScenes } from '@/components/sections/behind-the-scenes'
import { ClientsSay } from '@/components/sections/clients-say'
import { CTA } from '@/components/sections/cta'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Nav />
      <Hero />
      <Manifest />
      <PortfolioParallax />
      <MoonDivider />
      <Services />
      <GalleryShuffle />
      <BehindTheScenes />
      <ClientsSay />
      <CTA />
      <Footer />
    </main>
  )
}
