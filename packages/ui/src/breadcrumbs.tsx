'use client'

import * as React from 'react'

import {
  Breadcrumb as BaseBreadcrumb,
  Breadcrumbs as BaseBreadcrumbs,
  Link,
  type BreadcrumbProps,
  type BreadcrumbsProps,
} from 'react-aria-components'

import { cx } from '@/lib/cva.config'

const Breadcrumbs = <T extends object>({
  className,
  ...props
}: BreadcrumbsProps<T>) => {
  return (
    <BaseBreadcrumbs
      className={cx('flex flex-wrap gap-1', className)}
      {...props}
    />
  )
}

export interface BreadcrumbItemProps extends BreadcrumbProps {
  separator?: React.ReactNode
}

const BreadcrumbItem = ({
  separator,
  children,
  ...props
}: BreadcrumbItemProps) => {
  return (
    <BaseBreadcrumb className="flex items-center gap-1" {...props}>
      <Link className="text-slate-500 hover:underline current:text-black current:hover:no-underline dark:text-slate-300 dark:current:text-white">
        {children}
      </Link>
      {separator ? (
        <div aria-hidden="true" className="text-slate-400 dark:text-slate-500">
          {separator}
        </div>
      ) : null}
    </BaseBreadcrumb>
  )
}

export { Breadcrumbs as Breadcrumbs, BreadcrumbItem as BreadcrumbItem }
