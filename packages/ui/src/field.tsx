import * as ReactAria from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

import { composeTailwindRenderProps } from './lib/utils'

export const Label = (props: ReactAria.LabelProps) => {
  return (
    <ReactAria.Label
      {...props}
      className={twMerge(
        'text-sm font-medium [--color:theme(colors.slate.500)] text-[--color] cursor-default w-fit',
        props.className,
      )}
    >
      {props.children}
    </ReactAria.Label>
  )
}

export const Description = (props: ReactAria.TextProps) => {
  return (
    <ReactAria.Text
      {...props}
      slot="description"
      className={twMerge(
        'text-sm [--color:theme(colors.slate.600)] text-[--color]',
      )}
    >
      {props.children}
    </ReactAria.Text>
  )
}

export const ErrorMessage = (props: ReactAria.FieldErrorProps) => {
  return (
    <ReactAria.FieldError
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'text-sm [--color:theme(colors.red.600)] text-[--color]',
      )}
    >
      {props.children}
    </ReactAria.FieldError>
  )
}
