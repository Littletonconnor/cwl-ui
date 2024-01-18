'use client'

import { Check, Minus } from 'lucide-react'
import * as ReactAria from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { focusRing } from '../lib/utils'

const checkboxStyles = tv({
  base: 'flex gap-2 items-center group text-sm transition',
  variants: {
    isDisabled: {
      false: '[--color:theme(colors.slate.950)] text-[--color]',
      true: '[--color:theme(colors.slate.300)] text-[--color]',
    },
  },
})

const boxStyles = tv({
  extend: focusRing,
  base: 'w-5 h-5 flex-shrink-0 rounded flex items-center justify-center border-2 transition',
  variants: {
    isSelected: {
      false: 'bg-white [--color:theme(colors.slate.400)] border-[--color]',
      true: 'bg-[--color] border-[--color] [--color:theme(colors.slate.950)]',
    },
    isInvalid: {
      true: '[--color:theme(colors.red.700)]',
    },
    isDisabled: {
      true: '[--color:theme(colors.slate.300)]',
    },
  },
})

const iconStyles =
  'w-4 h-4 text-white [--color:theme(colors.slate.400)] group-disabled:text-[--color]'

export const Checkbox = (props: ReactAria.CheckboxProps) => {
  return (
    <ReactAria.Checkbox
      {...props}
      className={ReactAria.composeRenderProps(
        props.className,
        (className, renderProps) =>
          checkboxStyles({ ...renderProps, className }),
      )}
    >
      {({ isSelected, isIndeterminate, ...renderProps }) => {
        return (
          <>
            <div
              className={boxStyles({
                isSelected: isSelected || isIndeterminate,
                ...renderProps,
              })}
            >
              {isIndeterminate ? (
                <Minus aria-hidden className={iconStyles} />
              ) : isSelected ? (
                <Check aria-hidden className={iconStyles} />
              ) : null}
            </div>
            {props.children}
          </>
        )
      }}
    </ReactAria.Checkbox>
  )
}
