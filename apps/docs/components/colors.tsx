import * as React from 'react'

import { cn } from 'cwl-ui/src/lib/utils'

export const ColorPalette = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    title: string
  }
>(({ className, children, title, ...props }, ref) => {
  return (
    <div className="my-8">
      <div className="text-surface-900 mb-3 mt-2 flex items-center gap-2 text-sm font-medium">
        <span>{title}</span>
      </div>
      {/* FIXME types are not working well here for some reason */}
      <div ref={ref} className={cn('grid grid-cols-10', className)} {...(props as any)}>
        {children}
      </div>
    </div>
  )
})

export const ColorPaletteCoreColor = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLElement> & {
    title: string
    hex: string
  }
>(({ className, title, hex, ...props }, ref) => {
  return (
    <div className="group flex w-full flex-col">
      <div
        className={cn('h-10 w-full group-first:rounded-l group-last:rounded-r', className)}
        ref={ref}
        // FIXME types are not working well here for some reason
        {...(props as any)}
      />
      <span className="text center text-surface-700 mt-1 pl-1 text-xs md:text-start">{title}</span>
      <span className="text-surface-400 hidden pl-1 font-mono text-[8px] md:block">{hex}</span>
    </div>
  )
})

export const ColorPaletteThemeColor = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLElement> & {
    title: string
    hex: string
  }
>(({ className, title, hex, ...props }, ref) => {
  return (
    <div className="group flex w-full flex-col">
      <div
        ref={ref}
        className={cn('h-10 w-full rounded-sm ring-1 ring-inset sm:h-12', className)}
        {...(props as any)}
      />
      <span className="text-surface-700 mt-1.5 pl-1 text-xs">{title}</span>
      <span className="text-surface-400 pl-1 font-mono text-[8px]">{hex}</span>
    </div>
  )
})

ColorPalette.displayName = 'Color Palette'
ColorPaletteCoreColor.displayName = 'Color Palette Core Color'
ColorPaletteThemeColor.displayName = 'Color Palette Theme Color'
