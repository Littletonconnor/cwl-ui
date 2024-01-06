'use client'

import { cx } from 'cva'
import {
  TabList as BaseTabList,
  Tabs as BaseTabs,
  type TabListProps,
  type TabsProps,
} from 'react-aria-components'

const Tabs = ({ className, ...props }: TabsProps) => {
  return (
    <BaseTabs
      className={cx(
        'flex',
        // horizontal
        'orientation-horizontal:flex-col orientation-horizontal:[--border-width:0_0_2px_0]',

        // vertical
        'orientation-vertical:[--border-width:0_2px_0_0]',
        className,
      )}
      {...props}
    />
  )
}

const TabList = <T extends object>({
  className,
  ...props
}: TabListProps<T>) => {
  return (
    <BaseTabList
      className={cx(
        'group',
        'flex border-[length:var(--border-width) border-slate-700',
        // Vertical
        'orientation-vertical:flex-col',
        className,
      )}
      {...props}
    />
  )
}

export { Tabs, TabList }
