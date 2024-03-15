import * as React from 'react'

import { cn } from './lib/utils'

interface TextProps extends React.ComponentPropsWithoutRef<'p'> {
  /**
   * Represents the class name of the Text.
   */
  className?: string
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <p className={cn(className, 'text-base/6 text-gray-500 sm:text-sm/6')} ref={ref} {...props}>
        {children}
      </p>
    )
  },
)

const Strong = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <strong className={cn(className, 'text-medium text-gray-900')} ref={ref} {...props}>
        {children}
      </strong>
    )
  },
)

interface HeadingProps extends React.ComponentPropsWithoutRef<'h1'> {
  /**
   * Represents the tag of the heading.
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  /**
   * Represents the class name of the Text.
   */
  className?: string
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as: Component = 'h1', children, className, ...props }, ref) => {
    return (
      <Component
        className={cn(
          className,
          'font-bold text-gray-900',
          Component === 'h1' && 'text-4xl',
          Component === 'h2' && 'text-3xl',
          Component === 'h3' && 'text-2xl',
          Component === 'h4' && 'text-xl',
          Component === 'h5' && 'text-lg',
          Component === 'h6' && 'text-base',
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

Text.displayName = 'Text'
Strong.displayName = 'Strong'
Heading.displayName = 'Heading'

export { Text, Strong, Heading }
