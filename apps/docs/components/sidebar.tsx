'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Icon } from '@/components/icons/icons'
import { cx } from '@/lib/cva.config'

const componentLinks = [
  {
    title: 'Alert',
    href: '/docs/alert',
  },
  {
    title: 'Avatar',
    href: '/docs/alert',
  },
  {
    title: 'Badge',
    href: '/docs/alert',
  },
  {
    title: 'Breadcrumbs',
    href: '/docs/breadcrumbs',
  },
  {
    title: 'Button',
    href: '/docs/button',
  },
  {
    title: 'Checkbox',
    href: '/docs/checkbox',
  },
  {
    title: 'Dialog',
    href: '/docs/dialog',
  },
  {
    title: 'Dropdown',
    href: '/docs/dropdown',
  },
  {
    title: 'Fieldset',
    href: '/docs/fieldset',
  },
  {
    title: 'Input',
    href: '/docs/input',
  },
  {
    title: 'Listbox',
    href: '/docs/listbox',
  },
  {
    title: 'Pagination',
    href: '/docs/pagination',
  },
  {
    title: 'Radio button',
    href: '/docs/radio-button',
  },
  {
    title: 'Select',
    href: '/docs/select',
  },
  {
    title: 'Switch',
    href: '/docs/switch',
  },
  {
    title: 'Table',
    href: '/docs/table',
  },
  {
    title: 'Tabs',
    href: '/docs/tabs',
  },
  {
    title: 'Text',
    href: '/docs/text',
  },
  {
    title: 'TextArea',
    href: '/docs/text-area',
  },
]

export function Sidebar() {
  const pathname = usePathname()
  return (
    <nav className="sticky top-16 hidden max-h-svh w-48 shrink-0 overflow-y-auto pb-16 pt-12 lg:block">
      <ul>
        <li>
          <Link
            href="/docs"
            className={cx(
              'flex items-center gap-x-3 py-1.5 text-sm/6 font-medium text-zinc-700 hover:text-zinc-950',
              pathname === '/docs' && 'text-zinc-950',
              {
                'text-zinc-950': pathname === '/docs',
              },
            )}
          >
            <Icon source="home" />
            Getting started
          </Link>
        </li>
        <li className="mt-6">
          <p className="text-sm/6 font-medium text-zinc-950">Components</p>
          <ul className="mt-4 space-y-3.5 border-l border-zinc-200">
            {componentLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className={cx(
                    'relative block pl-4 text-sm/6 font-medium text-zinc-700 hover:text-zinc-950',
                    {
                      'text-zinc-950 before:absolute before:inset-y-0 before:left-[-1.5px] before:w-[2px] before:rounded-full before:bg-zinc-950':
                        pathname === link.href,
                    },
                  )}
                  href={link.href}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  )
}
