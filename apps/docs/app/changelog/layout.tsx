'use client'

import {
  allChangelogDocuments,
  allComponentDocuments,
} from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Link } from 'react-aria-components'

import Navigation from '@/components/navigation'
import { cx } from '@/lib/cva.config'

const gettingStartedLinks = [
  {
    slug: '/getting-started/introduction',
    title: 'Introduction',
  },
  {
    slug: '/getting-started/installation',
    title: 'Installation',
  },
  {
    slug: '/changelog',
    title: 'Changelog',
  },
]

interface ChangelogLayoutProps {
  children: React.ReactNode
}

export default function ChangelogLayout({ children }: ChangelogLayoutProps) {
  const post = allChangelogDocuments[0]
  const sortedComponents = allComponentDocuments
    .filter((doc) => doc.isComponent === true)
    .sort((a, b) => a.title.localeCompare(b.title))

  if (!post) {
    return notFound()
  }

  return (
    <div className="container mx-auto h-full max-w-7xl px-6">
      <Navigation />
      <aside className="fixed top-0 hidden h-full shrink-0 border-r pt-14 md:w-40 lg:block">
        <nav className="h-full overflow-y-auto py-12" tabIndex={-1}>
          <div className="mb-4">
            <h4 className="text-lg font-medium text-zinc-900">
              Getting Started
            </h4>
            <div className="mt-3">
              <ul>
                {gettingStartedLinks.map((link) => (
                  <li key={link.slug}>
                    <Link
                      className={cx(
                        'flex justify-between gap-2 items-center text-sm py-1 rounded-sm text-zinc-600',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-500 hover:underline',
                      )}
                      href={link.slug}
                    >
                      <span className="truncate">{link.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </aside>
      <section className="pt-14">{children}</section>
    </div>
  )
}
