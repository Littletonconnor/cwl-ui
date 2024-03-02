import { createContext, useContext, useState } from 'react'

import { Link } from 'react-aria-components'

import { cn } from './lib/utils'

interface TableProps extends React.ComponentPropsWithoutRef<'table'> {
  bleed?: boolean
  dense?: boolean
  grid?: boolean
  striped?: boolean
}

const TableContext = createContext<TableProps>({
  bleed: false,
  dense: false,
  grid: false,
  striped: false,
})

export const Table = ({ children, bleed, dense, grid, striped, ...props }: TableProps) => {
  return (
    <TableContext.Provider
      value={{
        bleed,
        dense,
        grid,
        striped,
      }}
    >
      <div className="overflow-x-auto whitespace-nowrap">
        <table className="min-w-full text-left text-sm/6" {...props}>
          {children}
        </table>
      </div>
    </TableContext.Provider>
  )
}

export const TableHead = ({ children, ...props }: React.ComponentPropsWithoutRef<'thead'>) => {
  return (
    <thead className="text-zinc-500" {...props}>
      {children}
    </thead>
  )
}

export const TableBody = ({ ...props }: React.ComponentPropsWithoutRef<'tbody'>) => {
  return <tbody {...props} />
}

const TableRowContext = createContext<{
  href?: string
  target?: string
  title?: string
}>({
  href: undefined,
  target: undefined,
  title: undefined,
})

interface TableRowProps extends React.ComponentPropsWithoutRef<'tr'> {
  href?: string
  target?: string
  title?: string
}

export const TableRow = ({ children, href, target, title, className, ...props }: TableRowProps) => {
  const { striped } = useContext(TableContext)

  // FIXME: there's a fair amount of complexity here to get things like focus states right.
  // Since we're not using any external link libraries at the moment
  return (
    <TableRowContext.Provider value={{ href, title, target }}>
      <tr
        {...props}
        className={cn(
          className,
          href &&
            'rounded-md has-[[data-row-link][data-focused]]:outline has-[[data-row-link][data-focused]]:outline-2 has-[[data-row-link][data-focused]]:-outline-offset-2 has-[[data-row-link][data-focused]]:outline-blue-500',
          striped && 'even:bg-zinc-950/[2.5%]',
          href && striped && 'hover:bg-zinc-950/5',
          href && !striped && 'hover:bg-zinc-950/[2.5%]',
        )}
      >
        {children}
      </tr>
    </TableRowContext.Provider>
  )
}

export const TableHeader = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'th'>) => {
  const { bleed, grid } = useContext(TableContext)

  return (
    <th
      className={cn(
        className,
        'border-b border-b-zinc-950/10 px-4 font-medium first:pl-2 last:pr-2',
        grid && 'border-l border-l-zinc-950/5 first:border-l-0 first:pl-0',
        !bleed && 'sm:first:pl-2 sm:last:pr-2',
      )}
      {...props}
    >
      {children}
    </th>
  )
}

export const TableCell = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'td'>) => {
  const { bleed, dense, grid, striped } = useContext(TableContext)
  const { href, target, title } = useContext(TableRowContext)
  const [cellRef, setCellRef] = useState<HTMLElement | null>(null)

  return (
    <td
      ref={href ? setCellRef : undefined}
      {...props}
      className={cn(
        className,
        'relative px-4 tabular-nums first:pl-2 last:pr-2',
        !striped && 'border-b border-zinc-950/5',
        grid && 'border-l border-l-zinc-950/5 first:border-l-0',
        dense ? 'py-2.5' : 'py-4',
        !bleed && 'sm:first:pl-2 sm:last:pr-2',
      )}
    >
      {cellRef?.previousElementSibling === null && href && (
        // Since the href attribute is passed in at the TableRow level we need a way to make sure only the first
        // TableCell is rendered as an anchor.
        // We then use the data attributes exposed by react-aria on the TableRow level to make the entire row look
        // Focusable when in reality it is just the first row. That is why we've got focus:outline-none set below.
        <Link
          data-row-link
          href={href}
          target={target}
          aria-label={title}
          className="absolute inset-0 focus:outline-none"
        />
      )}
      {children}
    </td>
  )
}
