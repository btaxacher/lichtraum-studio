'use client'

import { type RefObject, useEffect, useState } from 'react'

export function useMouseVector(containerRef?: RefObject<HTMLElement | null>) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [vector, setVector] = useState({ dx: 0, dy: 0 })

  useEffect(() => {
    let last = { x: 0, y: 0 }

    const update = (x: number, y: number) => {
      let newX: number, newY: number
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect()
        newX = x - rect.left
        newY = y - rect.top
      } else {
        newX = x
        newY = y
      }
      setVector({ dx: newX - last.x, dy: newY - last.y })
      setPosition({ x: newX, y: newY })
      last = { x: newX, y: newY }
    }

    const onMouse = (e: MouseEvent) => update(e.clientX, e.clientY)
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0]
      if (t) update(t.clientX, t.clientY)
    }

    window.addEventListener('mousemove', onMouse)
    window.addEventListener('touchmove', onTouch)
    return () => {
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('touchmove', onTouch)
    }
  }, [containerRef])

  return { position, vector }
}
