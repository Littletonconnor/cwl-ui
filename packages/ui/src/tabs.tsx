'use client'

import { cx } from 'cva'
import * as ReactAria from 'react-aria-components'

const Tabs = ({ className, ...props }: ReactAria.TabsProps) => {
  return (
    <ReactAria.Tabs
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

const TabList = <T extends object>({ className, ...props }: ReactAria.TabListProps<T>) => {
  return (
    <ReactAria.TabList
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

const Tab = ({ className, ...props }: ReactAria.TabProps) => {
  return (
    <ReactAria.Tab
      className={cx(
        'relative shrink-0 cursor-pointer border-[length:var(--border-width)] border-transparent px-4 py-2 text-muted-foreground outline-none transition-colors',
        // Focus-visible
        'focus-visible:ring-2 focus-visible:text-ring',
        // Disabled
        'disabled:cursor-not-allowed disabled:opacity-40',
        // Horizontal
        'group-orientation-horizontal:border-[width:var(--border-width)] group-orientation-horizontal:top-[2px]',
        // Vertical
        'group-orientation-vertical:border-[width:var(--border-width)] group-orientation-vertical:left-[2px] group-orientation-vertical:inline-flex',
        // Selected
        'selected:border-black selected:text-primary',
        className,
      )}
      {...props}
    />
  )
}

const TabPanel = ({ className, ...props }: ReactAria.TabPanelProps) => {
  return <ReactAria.TabPanel className={cx('grow p-4', className)} {...props} />
}

export { Tab, Tabs, TabList, TabPanel }
