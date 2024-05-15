import * as ReactAria from 'react-aria-components'

import { Description, ErrorMessage, Label } from './field'
import { composeTailwindRenderProps } from './lib/utils'

interface CheckboxGroupProps extends ReactAria.CheckboxGroupProps {
  label?: string
  children?: React.ReactNode
  orientation?: 'vertical' | 'horizontal'
  description?: string
  errorMessage?: string | ((validation: ReactAria.ValidationResult) => string)
}

export const CheckboxGroup = (props: CheckboxGroupProps) => {
  return (
    <ReactAria.CheckboxGroup
      {...props}
      data-orientation={props.orientation ?? 'vertical'}
      className={composeTailwindRenderProps(props.className, 'group flex flex-col gap-2')}
    >
      <Label>{props.label}</Label>
      <div className="group-orientation-horizontal:flex-row flex flex-col gap-2">
        {props.children}
      </div>
      {props.description && <Description>{props.description}</Description>}
      <ErrorMessage>{props.errorMessage}</ErrorMessage>
    </ReactAria.CheckboxGroup>
  )
}
