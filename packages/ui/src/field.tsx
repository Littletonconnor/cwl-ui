import * as ReactAria from 'react-aria-components'

import { cn, composeTailwindRenderProps } from './lib/utils'

export const Label = (props: ReactAria.LabelProps) => {
  return (
    <ReactAria.Label
      {...props}
      className={cn(
        'w-fit cursor-default text-sm font-medium text-[--color] [--color:theme(colors.slate.500)]',
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
      className={cn('text-sm text-[--color] [--color:theme(colors.slate.600)]')}
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
