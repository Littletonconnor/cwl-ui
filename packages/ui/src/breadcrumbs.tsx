import * as React from 'react'

import * as ReactAria from 'react-aria-components'

import { cx } from '@/lib/cva.config'

export const Breadcrumbs = <T extends object>({
  className,
  ...props
}: ReactAria.BreadcrumbsProps<T>) => {
  return (
    <ReactAria.Breadcrumbs
      className={cx('flex flex-wrap gap-1', className)}
      {...props}
    />
  )
}

export interface BreadcrumbItemProps extends ReactAria.BreadcrumbProps {
  separator?: React.ReactNode
}

export const BreadcrumbItem = ({
  separator,
  children,
  ...props
}: BreadcrumbItemProps) => {
  return (
    <ReactAria.Breadcrumb className="flex items-center gap-1" {...props}>
      {children}
      {separator ? (
        <div aria-hidden="true" className="text-muted">
          {separator}
        </div>
      ) : null}
    </ReactAria.Breadcrumb>
  )
}

export const BreadcrumbLink = ({
  children,
  className,
  ...props
}: ReactAria.LinkProps) => {
  return (
    <ReactAria.Link
      className={cx(
        'text-destructive hover:underline current:text-primary current:hover:no-underline',
        className,
      )}
      {...props}
    >
      {children}
    </ReactAria.Link>
  )
}
