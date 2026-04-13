'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export interface ShuffleSquare {
  id: number
  src: string
}

const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr]
  let i = a.length
  while (i !== 0) {
    const r = Math.floor(Math.random() * i)
    i--
    ;[a[i], a[r]] = [a[r], a[i]]
  }
  return a
}

interface ShuffleGridProps {
  images: readonly ShuffleSquare[]
  intervalMs?: number
}

export function ShuffleGrid({ images, intervalMs = 3000 }: ShuffleGridProps) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [squares, setSquares] = useState(() => shuffle([...images]))

  useEffect(() => {
    const reshuffle = () => {
      setSquares(shuffle([...images]))
      timeoutRef.current = setTimeout(reshuffle, intervalMs)
    }
    timeoutRef.current = setTimeout(reshuffle, intervalMs)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [images, intervalMs])

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] md:h-[560px] gap-1.5 w-full">
      {squares.map((sq) => (
        <motion.div
          key={sq.id}
          layout
          transition={{ duration: 1.5, type: 'spring', bounce: 0.12 }}
          className="w-full h-full rounded-md overflow-hidden bg-bg-elevated"
          style={{
            backgroundImage: `url(${sq.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}
    </div>
  )
}
