import * as React from 'react'

import { cn } from './lib/utils'

interface LabelProps extends React.HtmlHTMLAttributes<HTMLLabelElement> {
  /*
   * Additional description text that shows up next to the primary label.
   */
  description?: string

  /*
   * Indicates if the label is associated with a required field.
   */
  required?: boolean

  /*
   * Indicated if the label is associated with a disabled field.
   */
  disabled?: boolean

  /*
   * Associate the label to an input field.
   */
  htmlFor?: string
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, className, description, disabled, required, ...props }, ref) => {
    return (
      <div className="text-surface-900 inline-flex shrink-0 items-center gap-1 antialiased">
        <label
          {...props}
          className={cn(
            'inline-flex cursor-pointer items-center gap-1 text-sm font-medium leading-6',
            disabled && 'text-surface-300 pointer-events-none',
            className,
          )}
          ref={ref}
          onMouseDown={(event) => {
            // event.detail represents the click count, so we prevent text selection when double clicking the element.
            props.onMouseDown?.(event)
            if (!event.defaultPrevented && event.detail > 1) event.preventDefault()
          }}
        >
          {children && <span>{children}</span>}
          {description && (
            <span className={cn('text-surface-500 font-normal', disabled && 'text-current')}>
              {description}
            </span>
          )}
          {required && <span className="text-destructive font-normal">*</span>}
        </label>
      </div>
    )
  },
)

Label.displayName = 'Label'

export { Label }
