'use client'

import * as React from 'react'

import * as SliderPrimitive from '@radix-ui/react-slider'

import { Label, LabelHelperText } from './label'
import { AtomicProperties } from './lib/types'
import { cn } from './lib/utils'
import { Text } from './text'

export type SliderElement = React.ElementRef<typeof SliderPrimitive.Root>
export type SliderProps = Omit<
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
  'asChild'
> &
  Pick<
    AtomicProperties,
    'description' | 'disabled' | 'label' | 'leadingAccessory' | 'trailingAccessory' | 'helperText'
  >

const Slider = React.forwardRef<SliderElement, SliderProps>(
  (
    {
      children,
      disabled,
      leadingAccessory,
      trailingAccessory,
      defaultValue,
      label,
      id,
      orientation,
      helperText,
      description,
      onValueChange,
      ...props
    },
    ref,
  ) => {
    const [thumbs, setThumbs] = React.useState<number[]>(defaultValue ?? [0])
    const generateId = React.useId()
    const elId = id ?? generateId

    return (
      <div className={cn('flex flex-col gap-2', disabled && 'text-surface-300')}>
        <Label id={`${elId}__label`} htmlFor={elId} description={description} disabled={disabled}>
          {label}
        </Label>

        <div
          className={cn(
            'flex justify-center items-baseline gap-4 self-stretch',
            orientation === 'vertical' && 'flex-col items-start',
            orientation === 'horizontal' && 'items-center',
          )}
        >
          {leadingAccessory ? (
            <Text color="secondary" size="xsmall">
              {leadingAccessory}
            </Text>
          ) : null}

          <SliderRoot
            ref={ref}
            id={elId}
            disabled={disabled}
            defaultValue={defaultValue}
            aria-describedby={`${elId}__describe`}
            orientation={orientation}
            onValueChange={(value) => {
              setThumbs(value)
              onValueChange?.(value)
            }}
            {...props}
          >
            <SliderTrack>
              <SliderRange aria-disabled={disabled} />
            </SliderTrack>
            {thumbs?.map((_, index) => (
              <SliderThumb key={index} id={elId} aria-disabled={disabled} tooltip={false} />
            ))}
            {children}
          </SliderRoot>

          {trailingAccessory ? (
            <Text color="secondary" size="xsmall">
              {trailingAccessory}
            </Text>
          ) : null}
        </div>

        <LabelHelperText disabled={disabled} id={`${elId}__describe`}>
          {helperText}
        </LabelHelperText>
      </div>
    )
  },
)

export type SliderRootElement = React.ElementRef<typeof SliderPrimitive.Root>
export type SliderRootProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>

const SliderRoot = React.forwardRef<SliderRootElement, SliderRootProps>(
  ({ className, ...props }, ref) => {
    return (
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          'relative flex w-full touch-none select-none items-center',
          'data-[orientation=horizontal]:min-h-6',
          'data-[orientation=vertical]:w-2 data-[orientation=vertical]:flex-col data-[orientation=vertical]:justify-center data-[orientation=vertical]:px-3',
          className,
        )}
        {...props}
      />
    )
  },
)

export { Slider }

export type SliderTrackElement = React.ElementRef<typeof SliderPrimitive.Track>
export type SliderTrackProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Track>

const SliderTrack = React.forwardRef<SliderTrackElement, SliderTrackProps>(
  ({ className, ...props }, ref) => {
    return (
      <SliderPrimitive.Track
        ref={ref}
        cwl-ui-component="SliderTrack"
        className={cn(
          'relative h-2 w-full grow overflow-hidden rounded-full bg-surface-100',
          'data-[orientation=vertical]:h-72 data-[orientation=vertical]:w-2',
          className,
        )}
        {...props}
      />
    )
  },
)

export type SliderRangeElement = React.ElementRef<typeof SliderPrimitive.Range>
export type SliderRangeProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Range>

const SliderRange = React.forwardRef<SliderRangeElement, SliderRangeProps>(
  ({ className, ...props }, ref) => {
    const disabled = props['aria-disabled'] ?? false

    return (
      <SliderPrimitive.Range
        ref={ref}
        cwl-ui-component="SliderRange"
        className={cn(
          'absolute rounded-full bg-primary',
          'data-[orientation=vertical]:left-0 data-[orientation=vertical]:w-full',
          'data-[orientation=horizontal]:l-0 data-[orientation=horizontal]:h-full',
          disabled && 'bg-surface-200',
          className,
        )}
        {...props}
      />
    )
  },
)

export type SliderThumbElement = React.ElementRef<typeof SliderPrimitive.Thumb>
export type SliderThumbProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Thumb> & {
  /**
   * Whether or not to show a tooltip.
   */
  tooltip?: boolean

  /**
   * Which direction to render the thumb
   */
  orientation?: 'horizontal' | 'vertical'
}

const SliderThumb = React.forwardRef<SliderThumbElement, SliderThumbProps>(
  ({ className, tooltip, ...props }, ref) => {
    const disabled = props['aria-disabled'] ?? false
    return (
      <SliderPrimitive.Thumb
        ref={ref}
        cwl-ui-component="SliderThumb"
        className={cn(
          'block size-5 cursor-grab border border-surface-200 rounded-full bg-white shadow-sm hidden:disabled',
          'focus:outline-none focus-visible:border-primary',
          'data-[state=active]:cursor-grabbing data-[state=active]:border-primary',
          disabled && 'hidden',
          className,
        )}
        {...props}
      >
        {tooltip ? <span>Tooltip</span> : null}
      </SliderPrimitive.Thumb>
    )
  },
)
