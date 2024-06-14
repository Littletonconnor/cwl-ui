'use client'

import { Badge } from 'cwl-ui/src/badge'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Icon } from '@/components/icons/icons'
import { cx } from '@/lib/cva.config'

const foundationLinks = [
  {
    title: 'Color System',
    href: '/docs/color-system',
  },
  {
    title: 'Typography',
    href: '/docs/typography',
    comingSoon: true,
  },
  {
    title: 'Iconography',
    href: '/docs/iconography',
    comingSoon: true,
  },
]

const componentLinks = [
  {
    title: 'Alert',
    href: '/docs/alert',
    comingSoon: true,
  },
  {
    title: 'Avatar',
    href: '/docs/avatar',
  },
  {
    title: 'Badge',
    href: '/docs/badge',
  },
  {
    title: 'Breadcrumbs',
    href: '/docs/breadcrumbs',
  },
  {
    title: 'Button',
    href: '/docs/button',
    comingSoon: true,
  },
  {
    title: 'Checkbox',
    href: '/docs/checkbox',
  },
  {
    title: 'CheckboxGroup',
    href: '/docs/checkbox-group',
  },
  {
    title: 'Dialog',
    href: '/docs/dialog',
    comingSoon: true,
  },
  {
    title: 'Dropdown',
    href: '/docs/dropdown',
    comingSoon: true,
  },
  {
    title: 'Fieldset',
    href: '/docs/fieldset',
    comingSoon: true,
  },
  {
    title: 'Heading',
    href: '/docs/heading',
  },
  {
    title: 'Input',
    href: '/docs/input',
    comingSoon: true,
  },
  {
    title: 'Label',
    href: '/docs/label',
  },
  {
    title: 'Listbox',
    href: '/docs/listbox',
    comingSoon: true,
  },
  {
    title: 'Pagination',
    href: '/docs/pagination',
    comingSoon: true,
  },
  {
    title: 'Radio button',
    href: '/docs/radio-button',
    comingSoon: true,
  },
  {
    title: 'Select',
    href: '/docs/select',
    comingSoon: true,
  },
  {
    title: 'Spinner',
    href: '/docs/spinner',
  },
  {
    title: 'Switch',
    href: '/docs/switch',
    comingSoon: true,
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
    comingSoon: true,
  },
]

export function Sidebar() {
  const pathname = usePathname()
  return (
    <nav className="sticky top-16 hidden max-h-svh w-56 shrink-0 overflow-y-auto pb-16 pt-12 lg:block">
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
          <p className="text-sm/6 font-medium text-zinc-950">Foundations</p>
          <ul className="mt-4 space-y-3.5 border-l border-zinc-200">
            {foundationLinks.map((link) => (
              <li className="flex gap-2" key={link.href}>
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
                {link.comingSoon && <Badge color="gray">Coming Soon</Badge>}
              </li>
            ))}
          </ul>
        </li>
        <li className="mt-6">
          <p className="text-sm/6 font-medium text-zinc-950">Components</p>
          <ul className="mt-4 space-y-3.5 border-l border-zinc-200">
            {componentLinks.map((link) => (
              <li className="flex gap-2" key={link.href}>
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
                {link.comingSoon && <Badge color="gray">Coming Soon</Badge>}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  )
}
