'use client'

import { useEffect, useState, type ReactNode } from 'react'

export interface SelectorOption {
  title: string
  description: string
  image: string
  icon: ReactNode
}

interface InteractiveSelectorProps {
  options: readonly SelectorOption[]
  title?: string
  subtitle?: string
}

export function InteractiveSelector({ options, title, subtitle }: InteractiveSelectorProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animated, setAnimated] = useState<number[]>([])

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []
    options.forEach((_, i) => {
      timers.push(setTimeout(() => setAnimated((prev) => [...prev, i]), 150 * i))
    })
    return () => timers.forEach(clearTimeout)
  }, [options])

  return (
    <div className="relative flex flex-col items-center justify-center w-full py-12 font-body text-fg">
      {(title || subtitle) && (
        <div className="w-full max-w-2xl px-6 mb-10 text-center">
          {title && (
            <h3 className="editorial-display text-4xl md:text-5xl mb-3 tracking-tight">{title}</h3>
          )}
          {subtitle && <p className="text-base md:text-lg text-fg-muted max-w-xl mx-auto">{subtitle}</p>}
        </div>
      )}

      <div className="options flex w-full max-w-[1100px] min-w-[320px] h-[420px] md:h-[500px] items-stretch overflow-hidden relative gap-1 px-2">
        {options.map((option, index) => (
          <div
            key={index}
            role="button"
            tabIndex={0}
            aria-label={option.title}
            aria-current={activeIndex === index}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setActiveIndex(index)
            }}
            className="option relative flex flex-col justify-end overflow-hidden transition-all duration-[700ms] ease-editorial cursor-pointer rounded-lg"
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize: activeIndex === index ? 'auto 100%' : 'auto 125%',
              backgroundPosition: 'center',
              opacity: animated.includes(index) ? 1 : 0,
              transform: animated.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
              minWidth: '60px',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: activeIndex === index ? 'rgba(201,169,110,0.6)' : 'rgba(42,39,36,0.8)',
              boxShadow:
                activeIndex === index
                  ? '0 24px 60px rgba(0,0,0,0.65), 0 0 40px rgba(201,169,110,0.15)'
                  : '0 8px 24px rgba(0,0,0,0.35)',
              flex: activeIndex === index ? '7 1 0%' : '1 1 0%',
              zIndex: activeIndex === index ? 10 : 1,
              willChange: 'flex-grow, box-shadow, background-size',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 pointer-events-none" />
            <div className="label absolute left-0 right-0 bottom-5 flex items-center justify-start z-[2] pointer-events-none px-4 gap-3">
              <div className="icon min-w-[44px] h-[44px] flex items-center justify-center rounded-full bg-black/70 backdrop-blur-md border border-accent/40 shadow-lg flex-shrink-0 text-accent">
                {option.icon}
              </div>
              <div className="info text-white whitespace-pre relative">
                <div
                  className="main editorial-display text-xl md:text-2xl transition-all duration-[700ms] ease-editorial"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)',
                  }}
                >
                  {option.title}
                </div>
                <div
                  className="sub text-sm text-fg-muted transition-all duration-[700ms] ease-editorial"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)',
                  }}
                >
                  {option.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
