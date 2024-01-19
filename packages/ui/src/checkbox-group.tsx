import * as ReactAria from 'react-aria-components'

import { composeTailwindRenderProps } from '@/lib/utils'

import { Description, ErrorMessage, Label } from './field'

interface CheckboxGroupProps extends ReactAria.CheckboxGroupProps {
  label?: string
  children?: React.ReactNode
  description?: string
  errorMessage?: string | ((validation: ReactAria.ValidationResult) => string)
}

export const CheckboxGroup = (props: CheckboxGroupProps) => {
  return (
    <ReactAria.CheckboxGroup
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'flex flex-col gap-2',
      )}
    >
      <Label>{props.label}</Label>
      {props.children}
      {props.description && <Description>{props.description}</Description>}
      <ErrorMessage>{props.errorMessage}</ErrorMessage>
    </ReactAria.CheckboxGroup>
  )
}
