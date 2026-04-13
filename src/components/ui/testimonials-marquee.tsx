'use client'

import * as React from 'react'

export interface TestimonialCardT {
  image: string
  name: string
  handle: string
  body: string
}

function Card({ card }: { card: TestimonialCardT }) {
  return (
    <div className="p-6 rounded-2xl mx-3 w-[320px] md:w-[380px] shrink-0 bg-bg-elevated border border-border-soft">
      <div className="flex gap-3 items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="size-11 rounded-full object-cover border border-accent/30"
          src={card.image}
          alt={card.name}
        />
        <div className="flex flex-col">
          <p className="font-medium text-fg">{card.name}</p>
          <span className="text-xs text-fg-subtle tracking-wider">{card.handle}</span>
        </div>
      </div>
      <p className="text-sm pt-4 text-fg-muted leading-relaxed italic font-display">
        „{card.body}"
      </p>
    </div>
  )
}

function MarqueeRow({
  data,
  reverse = false,
  speed = 40,
}: {
  data: readonly TestimonialCardT[]
  reverse?: boolean
  speed?: number
}) {
  const doubled = React.useMemo(() => [...data, ...data], [data])
  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 md:w-40 z-10 bg-gradient-to-r from-bg to-transparent" />
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
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 md:w-40 z-10 bg-gradient-to-l from-bg to-transparent" />
    </div>
  )
}

export function TestimonialsMarquee({ testimonials }: { testimonials: readonly TestimonialCardT[] }) {
  return (
    <div className="flex flex-col gap-2">
      <MarqueeRow data={testimonials} reverse={false} speed={50} />
      <MarqueeRow data={testimonials} reverse={true} speed={50} />
    </div>
  )
}
