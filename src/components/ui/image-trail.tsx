'use client'

import { Children, useCallback, useEffect, useMemo, useRef, type RefObject } from 'react'
import {
  type AnimationSequence,
  motion,
  type Target,
  type Transition,
  useAnimate,
  useAnimationFrame,
} from 'framer-motion'
import { v4 as uuidv4 } from 'uuid'
import { useMouseVector } from '@/components/hooks/use-mouse-vector'

type TrailSegment = [Target, Transition]
type TrailAnimationSequence = TrailSegment[]

interface ImageTrailProps {
  children: React.ReactNode
  containerRef?: RefObject<HTMLElement | null>
  newOnTop?: boolean
  rotationRange?: number
  animationSequence?: TrailAnimationSequence
  interval?: number
}

interface TrailItem {
  id: string
  x: number
  y: number
  rotation: number
  animationSequence: TrailAnimationSequence
  scale: number
  child: React.ReactNode
}

export function ImageTrail({
  children,
  newOnTop = true,
  rotationRange = 15,
  containerRef,
  animationSequence = [
    [{ scale: 1.15 }, { duration: 0.18, ease: 'circOut' }],
    [{ scale: 0 }, { duration: 0.6, ease: 'circIn' }],
  ],
  interval = 90,
}: ImageTrailProps) {
  const trailRef = useRef<TrailItem[]>([])
  const lastAddedTimeRef = useRef(0)
  const { position: mousePosition } = useMouseVector(containerRef)
  const lastMousePosRef = useRef(mousePosition)
  const currentIndexRef = useRef(0)
  const childrenArray = useMemo(() => Children.toArray(children), [children])
  const [, forceRender] = useAnimate()

  const addToTrail = useCallback(
    (mousePos: { x: number; y: number }) => {
      const newItem: TrailItem = {
        id: uuidv4(),
        x: mousePos.x,
        y: mousePos.y,
        rotation: (Math.random() - 0.5) * rotationRange * 2,
        animationSequence,
        scale: 1,
        child: childrenArray[currentIndexRef.current],
      }
      currentIndexRef.current = (currentIndexRef.current + 1) % Math.max(childrenArray.length, 1)
      if (newOnTop) trailRef.current.push(newItem)
      else trailRef.current.unshift(newItem)
      forceRender(0)
    },
    [childrenArray, rotationRange, animationSequence, newOnTop, forceRender],
  )

  const removeFromTrail = useCallback((itemId: string) => {
    const idx = trailRef.current.findIndex((i) => i.id === itemId)
    if (idx !== -1) trailRef.current.splice(idx, 1)
  }, [])

  useAnimationFrame((time) => {
    if (
      lastMousePosRef.current.x === mousePosition.x &&
      lastMousePosRef.current.y === mousePosition.y
    ) {
      return
    }
    lastMousePosRef.current = mousePosition
    if (time - lastAddedTimeRef.current < interval) return
    lastAddedTimeRef.current = time
    addToTrail(mousePosition)
  })

  return (
    <div className="relative w-full h-full pointer-events-none">
      {trailRef.current.map((item) => (
        <TrailItemEl key={item.id} item={item} onComplete={removeFromTrail} />
      ))}
    </div>
  )
}

function TrailItemEl({ item, onComplete }: { item: TrailItem; onComplete: (id: string) => void }) {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    const sequence = item.animationSequence.map((segment) => [scope.current, ...segment])
    animate(sequence as AnimationSequence).then(() => onComplete(item.id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <motion.div
      ref={scope}
      className="absolute"
      style={{ left: item.x, top: item.y, rotate: item.rotation }}
    >
      {item.child}
    </motion.div>
  )
}
