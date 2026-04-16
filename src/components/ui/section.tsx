import { cn } from '@/lib/utils'
import { forwardRef, type HTMLAttributes } from 'react'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'secondary' | 'charcoal' | 'elevated' | 'subtle'
  container?: boolean
  spacing?: 'sm' | 'md' | 'lg' | 'xl' | 'none'
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = 'default', container = true, spacing = 'lg', children, ...props }, ref) => {
    const bg = {
      default: 'bg-bg',
      secondary: 'bg-bg-secondary',
      charcoal: 'bg-bg-charcoal text-fg-invert',
      // Legacy-Aliase
      elevated: 'bg-bg-elevated',
      subtle: 'bg-bg-subtle',
    }[variant]

    const pad = {
      none: '',
      sm: 'py-16 md:py-20',
      md: 'py-20 md:py-28',
      lg: 'py-24 md:py-32',
      xl: 'py-28 md:py-40',
    }[spacing]

    return (
      <section ref={ref} className={cn('relative w-full', bg, pad, className)} {...props}>
        {container ? (
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12">{children}</div>
        ) : (
          children
        )}
      </section>
    )
  },
)
Section.displayName = 'Section'

interface EditorialHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  align?: 'left' | 'center'
}

export function EditorialHeading({
  as: Tag = 'h2',
  size = 'lg',
  align = 'left',
  className,
  children,
  ...props
}: EditorialHeadingProps) {
  const sizes = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl',
    xl: 'text-5xl md:text-6xl',
  }[size]

  return (
    <Tag
      className={cn(
        'editorial-display text-fg',
        sizes,
        align === 'center' && 'text-center',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}

export function Eyebrow({
  className,
  children,
  gold = false,
}: {
  className?: string
  children: React.ReactNode
  gold?: boolean
}) {
  return <div className={cn('eyebrow', gold && 'eyebrow-gold', className)}>{children}</div>
}
