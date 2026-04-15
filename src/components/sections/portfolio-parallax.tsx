'use client'

import dynamic from 'next/dynamic'
import { parallaxImages } from '@/lib/content'

const ZoomParallax = dynamic(
  () => import('@/components/ui/zoom-parallax').then((m) => m.ZoomParallax),
  { ssr: false },
)

/**
 * The zoom-parallax scroll animation. Section header lives in <Hero /> above —
 * this component renders only the animation itself.
 */
export function PortfolioParallax() {
  return (
    <div id="work" className="relative">
      <ZoomParallax images={parallaxImages} />
    </div>
  )
}
