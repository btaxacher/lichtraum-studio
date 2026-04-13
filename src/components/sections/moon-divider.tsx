'use client'

import { motion } from 'framer-motion'

/**
 * Decorative moon-phases divider, inspired by the Figma reference.
 * Pure SVG — no image asset needed.
 */
export function MoonDivider() {
  const phases = [
    { frac: 0.0 },   // New
    { frac: 0.25 },  // Waxing Crescent
    { frac: 0.5 },   // First Quarter
    { frac: 0.75 },  // Waxing Gibbous
    { frac: 1.0 },   // Full
    { frac: 0.75 },  // Waning Gibbous
    { frac: 0.5 },   // Last Quarter
    { frac: 0.25 },  // Waning Crescent
  ]

  return (
    <div className="w-full bg-bg py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.5 }}
        className="mx-auto max-w-4xl px-6"
      >
        <div className="flex items-center justify-center gap-6 md:gap-10">
          {phases.map((p, i) => (
            <MoonPhase key={i} frac={p.frac} size={i === 4 ? 56 : 36} />
          ))}
        </div>
        <p className="mt-10 text-center text-fg-subtle text-xs tracking-[0.3em] uppercase">
          Luna — das Licht, das sich erinnert
        </p>
      </motion.div>
    </div>
  )
}

function MoonPhase({ frac, size }: { frac: number; size: number }) {
  const r = size / 2
  const offset = r * 2 * (1 - frac)
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="shrink-0">
      <defs>
        <mask id={`m-${frac}-${size}`}>
          <rect width={size} height={size} fill="white" />
          <circle cx={r - offset} cy={r} r={r} fill="black" />
        </mask>
      </defs>
      <circle cx={r} cy={r} r={r - 0.5} fill="none" stroke="#c9a96e" strokeWidth={0.8} opacity={0.6} />
      <circle cx={r} cy={r} r={r - 1} fill="#f5f1ea" opacity={0.95} mask={`url(#m-${frac}-${size})`} />
    </svg>
  )
}
