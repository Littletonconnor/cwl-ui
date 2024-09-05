import { type HeadingProperties } from './lib/types'
import { cn } from './lib/utils'

const Heading = ({
  children,
  color,
  Tag = 'h1',
  align,
  className,
  size,
  truncate,
  ...props
}: HeadingProperties) => {
  return (
    <Tag
      className={cn(
        size === 'small' && 'text-lg font-normal leading-7',
        size === 'standard' && 'text-2xl font-normal leading-8',
        size === 'large' && 'text-3xl font-normal leading-9',
        align === 'left' && 'text-left',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        color === 'primary' && 'text-primary',
        color === 'secondary' && 'text-secondary',
        color === 'positive' && 'text-positive',
        color === 'destructive' && 'text-destructive',
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

export { Heading }
