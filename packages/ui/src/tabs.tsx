'use client'

import { cx } from 'cva'
import {
  Tab as BaseTab,
  TabList as BaseTabList,
  TabPanel as BaseTabPanel,
  Tabs as BaseTabs,
  type TabListProps,
  type TabPanelProps,
  type TabProps,
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
        'flex border-slate-700',
        // Vertical
        'orientation-vertical:flex-col',
        className,
      )}
      {...props}
    />
  )
}

const Tab = ({ className, ...props }: TabProps) => {
  return (
    <BaseTab
      className={cx(
        'relative shrink-0 cursor-pointer border-[length:var(--border-width)] border-transparent px-4 py-2 text-slate-500 outline-none transition-colors',
        // Focus-visible
        'focus-visible:ring-2 focus-visible:ring-slate-400',
        // Disabled
        'disabled:cursor-not-allowed disabled:opacity-40',
        // Horizontal
        'group-orientation-horizontal:border-[width:var(--border-width)] group-orientation-horizontal:top-[2px]',
        // Vertical
        'group-orientation-vertical:border-[width:var(--border-width)] group-orientation-vertical:left-[2px] group-orientation-vertical:inline-flex',
        // Selected
        'selected:border-black selected:text-black',
        className,
      )}
      {...props}
    />
  )
}

const TabPanel = ({ className, ...props }: TabPanelProps) => {
  return <BaseTabPanel className={cx('grow p-4', className)} {...props} />
}

export { Tab, Tabs, TabList, TabPanel }
