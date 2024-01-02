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
    <div className="relative flex min-h-screen w-full flex-col">
      <Navigation />
      <main className="container mx-auto flex-1 items-start px-8 pt-14 md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="top-14 hidden w-full shrink-0 md:sticky md:block">
          <nav className="h-full overflow-y-auto py-6 lg:py-8" tabIndex={-1}>
            <div className="mb-4">
              <h4 className="px-2 py-1 text-sm font-semibold">
                Getting Started
              </h4>
              <ul>
                {gettingStartedLinks.map((link) => (
                  <li key={link.slug}>
                    <Link
                      className={cx(
                        'flex justify-between gap-2 items-center text-sm font-light px-2 py-1 rounded-sm text-zinc-600',
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
          </nav>
        </aside>
        {children}
      </main>
    </div>
  )
}
