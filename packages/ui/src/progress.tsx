import * as React from 'react'

import { cn } from './lib/utils'

const DEFAULT_MAX = 100

const ProgressContext = React.createContext<{
  value: number | undefined
  max: number
  color: string | undefined
}>({ value: undefined, max: DEFAULT_MAX, color: undefined })

type ProgressState = 'indeterminate' | 'complete' | 'loading'
type ProgressVariant = 'default' | 'inline'
interface ProgressProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  color?:
    | 'primary'
    | 'purple'
    | 'green'
    | 'blue'
    | 'orange'
    | 'pink'
    | 'yellow'
    | 'red'
    | 'secondary'
  max: number
  value: number
  variant?: ProgressVariant
}

const ProgressRoot = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ children, color = 'primary', value: valueProp, max: maxProp }, ref) => {
    const max = isValidMaxNumber(maxProp) ? maxProp : DEFAULT_MAX
    const value = isValidValueNumber(valueProp, max) ? valueProp : undefined
    const valueLabel = isNumber(value) ? getValueLabel(value, max) : undefined

    return (
      <ProgressContext.Provider value={{ max, value, color }}>
        <div
          className={cn('shrink-1 bg-surface-100 relative h-2 w-full overflow-hidden rounded-full')}
          aria-valuemax={max}
          aria-valuemin={0}
          aria-valuenow={isNumber(value) ? value : undefined}
          aria-valuetext={valueLabel}
          data-state={getProgressState(value, max)}
          role="progressbar"
          ref={ref}
        >
          {children}
        </div>
      </ProgressContext.Provider>
    )
  },
)

const Indicator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { color, value, max } = React.useContext(ProgressContext)

    return (
      <div
        data-value={value ?? undefined}
        data-state={getProgressState(value, max)}
        ref={ref}
        className={cn(className, 'size-full rounded-e-full', color === 'primary' && 'bg-primary')}
        style={{ transform: `translateX(-${100 - (Math.min(value ?? 0, max) / max) * 100}%)` }}
        {...props}
      />
    )
  },
)

function isNumber(value: unknown): value is number {
  return typeof value === 'number'
}

function isValidMaxNumber(max?: number) {
  return max && isNumber(max) && !isNaN(max) && max > 0
}

function getValueLabel(value: number, max: number) {
  return `${Math.round((value / max) * 100)}`
}

function getProgressState(value: number | undefined, maxValue: number | undefined): ProgressState {
  return value == null ? 'indeterminate' : value === maxValue ? 'complete' : 'loading'
}

function isValidValueNumber(value: unknown, max: number): value is number {
  return isNumber(value) && !isNaN(value) && value <= max && value >= 0
}

ProgressRoot.displayName = 'Progress'
Indicator.displayName = 'Indicator'

const Progress = Object.assign(ProgressRoot, {
  Indicator,
})

export { Progress }
