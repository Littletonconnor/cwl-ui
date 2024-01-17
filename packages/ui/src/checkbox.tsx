'use client'

import { type VariantProps } from 'cva'
import * as ReactAria from 'react-aria-components'

import { cva, cx } from '@/lib/cva.config'

const checkboxVariants = cva({
  base: [
    'group flex cursor-pointer items-center gap-2',
    // Disabled
    'disabled:cursor-not-allowed',
  ],
  variants: {
    size: {
      lg: 'text-lg',
      md: 'text-base',
      sm: 'text-sm',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface CheckboxProps extends VariantProps<typeof checkboxVariants> {
  className?: string
  children?: React.ReactNode
}

export const Checkbox = ({
  children,
  size,
  className,
  ...props
}: CheckboxProps) => {
  return (
    <ReactAria.Checkbox
      className={cx(checkboxVariants({ size, className }))}
      {...props}
    >
      <div className="flex">Inner</div>
      <div className="text-zinc-950 group-disabled:opacity-40">{children}</div>
    </ReactAria.Checkbox>
  )
}
