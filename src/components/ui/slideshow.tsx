'use client'

import { useCallback, useEffect, useState } from 'react'

export interface Slide {
  img: string
  text: readonly string[]
  alt?: string
}

interface SlideshowProps {
  slides: readonly Slide[]
  autoPlay?: boolean
  interval?: number
}

export function Slideshow({ slides, autoPlay = true, interval = 6000 }: SlideshowProps) {
  const [current, setCurrent] = useState(0)

  const nextSlide = useCallback(() => setCurrent((p) => (p + 1) % slides.length), [slides.length])
  const prevSlide = () => setCurrent((p) => (p - 1 + slides.length) % slides.length)

  useEffect(() => {
    if (!autoPlay) return
    const id = window.setInterval(nextSlide, interval)
    return () => window.clearInterval(id)
  }, [autoPlay, interval, nextSlide])

  return (
    <div className="slideshow">
      {slides.map((slide, i) => (
        <div
          key={i}
          role="img"
          aria-label={slide.alt ?? slide.text.join(' ')}
          className={`slide ${i === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.img})` }}
        >
          <div className="slide-text">
            {slide.text.map((t, j) => (
              <span key={j}>{t}</span>
            ))}
          </div>
        </div>
      ))}

      <button className="nav left" onClick={prevSlide} aria-label="Vorheriger Slide">
        ←
      </button>
      <button className="nav right" onClick={nextSlide} aria-label="Nächster Slide">
        →
      </button>

      <div className="counter">
        {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </div>
  )
}
