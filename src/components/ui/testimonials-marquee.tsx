'use client'

import * as React from 'react'
import { Quote } from 'lucide-react'

export interface TestimonialCardT {
  image: string
  name: string
  handle: string
  body: string
}

function Card({ card }: { card: TestimonialCardT }) {
  return (
    <div className="p-6 md:p-7 rounded-md mx-3 w-[320px] md:w-[400px] shrink-0 bg-bg-card border border-border shadow-card">
      <Quote size={22} className="text-accent-gold" strokeWidth={1.5} />
      <p className="text-[0.95rem] pt-3 text-fg-muted leading-[1.65] italic font-display">
        „{card.body}"
      </p>
      <div className="mt-5 flex gap-3 items-center pt-4 border-t border-border">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="size-11 rounded-full object-cover border border-accent-gold/40"
          src={card.image}
          alt={card.name}
        />
        <div className="flex flex-col">
          <p className="font-medium text-fg text-sm">{card.name}</p>
          <span className="text-xs text-fg-subtle tracking-wide">{card.handle}</span>
        </div>
      </div>
    </div>
  )
}

function MarqueeRow({
  data,
  reverse = false,
  speed = 50,
}: {
  data: readonly TestimonialCardT[]
  reverse?: boolean
  speed?: number
}) {
  // Einmalige Verdopplung ist notwendig für seamless Infinite-Loop via CSS translateX(-50%).
  // KEINE 7-fache Duplikation — nur exakt 1x gedoppelt.
  const doubled = React.useMemo(() => [...data, ...data], [data])
  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 md:w-40 z-10 bg-gradient-to-r from-bg-secondary via-bg-secondary/70 to-transparent" />
      <div
        className="flex flex-nowrap py-5 w-max"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
          willChange: 'transform',
        }}
      >
        {doubled.map((c, i) => (
          <Card key={i} card={c} />
        ))}
      </div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 md:w-40 z-10 bg-gradient-to-l from-bg-secondary via-bg-secondary/70 to-transparent" />
    </div>
  )
}

export function TestimonialsMarquee({ testimonials }: { testimonials: readonly TestimonialCardT[] }) {
  return (
    <div className="flex flex-col gap-2">
      <MarqueeRow data={testimonials} reverse={false} speed={55} />
      <MarqueeRow data={testimonials} reverse={true} speed={65} />
    </div>
  )
}
