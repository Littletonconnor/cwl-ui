import * as React from 'react'

import { type AtomicProperties, type TextSizes } from './lib/types'
import { cn } from './lib/utils'

// neutral

interface TextProps {
  /**
   * Represents the alignment of the Text.
   */
  align?: AtomicProperties['align']

  /**
   * Represents the color of the Text.
   */
  color?: AtomicProperties['color']

  /**
   * Represents the children of the Text.
   */
  children: React.ReactNode

  /**
   * Represents the tag of the Text.
   */
  Tag?: React.ElementType

  /**
   * Represents the size of the Text.
   */
  size?: TextSizes
}

const Text = ({ align, children, color = 'neutral', size, Tag = 'p', ...props }: TextProps) => {
  return (
    <Tag
      className={cn(
        'text-primary',
        size === 'xsmall' && 'text-xs font-normal leading-4',
        size === 'small' && 'text-sm font-normal leading-5',
        size === 'standard' && 'text-base font-normal leading-6',
        size === 'large' && 'text-lg font-normal leading-7',
        align === 'left' && 'text-left',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        color === 'neutral' && 'text-gray-900',
        color === 'secondary' && 'text-gray-700',
        color === 'promote' && 'text-purple-600',
        color === 'info' && 'text-blue-600',
        color === 'positive' && 'text-green-700',
        color === 'critical' && 'text-red-600',
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}

Text.displayName = 'Text'

export { Text }
