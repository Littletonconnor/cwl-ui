import * as React from 'react'

import { type AtomicProperties, type TextSizes } from './lib/types'
import { cn } from './lib/utils'

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
   * Optional class to add to the Text.
   */
  className?: string

  /**
   * Represents the tag of the Text.
   */
  Tag?: 'p' | 'span'

  /**
   * Represents the size of the Text.
   */
  size?: TextSizes

  /**
   * Truncate the number of lines of the Text.
   */
  truncate?: 1 | 2 | 3
}

const Text = ({
  align,
  children,
  color = 'primary',
  className,
  size,
  truncate,
  Tag = 'p',
  ...props
}: TextProps) => {
  return (
    <Tag
      className={cn(
        size === 'xsmall' && 'text-xs font-normal leading-4',
        size === 'small' && 'text-sm font-normal leading-5',
        size === 'standard' && 'text-base font-normal leading-6',
        size === 'large' && 'text-lg font-normal leading-7',
        align === 'left' && 'text-left',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        color === 'primary' && 'text-primary',
        color === 'secondary' && 'text-secondary',
        color === 'destructive' && 'text-destructive',
        color === 'positive' && 'text-positive',
        truncate === 1 && 'line-clamp-1',
        truncate === 2 && 'line-clamp-2',
        truncate === 3 && 'line-clamp-3',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}

Text.displayName = 'Text'

export { Text }
