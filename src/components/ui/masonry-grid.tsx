'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MasonryGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number
  gap?: number
}

export const MasonryGrid = React.forwardRef<HTMLDivElement, MasonryGridProps>(
  ({ className, columns = 3, gap = 4, children, ...props }, ref) => {
    const style = {
      columnCount: columns,
      columnGap: `${gap * 0.25}rem`,
    }

    return (
      <div ref={ref} style={style} className={cn('w-full', className)} {...props}>
        {React.Children.map(children, (child) => (
          <motion.div
            className="mb-4 break-inside-avoid"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {child}
          </motion.div>
        ))}
      </div>
    )
  },
)
MasonryGrid.displayName = 'MasonryGrid'

interface EditorialCardProps {
  profileImage: string
  name: string
  feedback: string
  mainImage: string
}

export function EditorialCard({ profileImage, name, feedback, mainImage }: EditorialCardProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden group transition-transform duration-500 ease-editorial hover:scale-[1.02] border border-border-soft">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={mainImage} alt={feedback} className="w-full h-auto object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 group-hover:from-black/20 group-hover:to-black/50 transition-all duration-500" />
      <div className="absolute inset-x-0 top-0 p-4 text-fg flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={profileImage}
          alt={name}
          className="w-9 h-9 rounded-full border border-accent/40 object-cover"
        />
        <span className="font-medium text-sm drop-shadow-md">{name}</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-sm font-medium text-fg leading-tight drop-shadow-md">{feedback}</p>
      </div>
    </div>
  )
}
