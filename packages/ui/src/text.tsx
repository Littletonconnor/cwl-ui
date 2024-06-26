import * as React from 'react'

import { type TextProperties } from './lib/types'
import { cn } from './lib/utils'

const Text = ({
  align,
  children,
  color = 'primary',
  className,
  size,
  truncate,
  Tag = 'p',
  ...props
}: TextProperties) => {
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
