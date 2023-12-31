'use client'

import { GithubIcon, PencilIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cx } from '@/lib/cva.config'

export default function Navigation() {
  const pathname = usePathname()
  return (
    <header className="fixed top-0 z-10 w-full border-b bg-white">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center px-8">
        <Link
          href="/"
          aria-label="Home"
          className="flex items-center gap-1 font-semibold"
        >
          <PencilIcon className="h-4 w-4" />
          <span>CWL UI</span>
        </Link>
        {/* ---- DESKTOP NAV ---- */}
        <nav className="flex grow items-center">
          <div className="ml-14 hidden items-center gap-4 lg:flex">
            <Link
              href="/getting-started"
              className={cx('rounded-sm text-sm', {
                'text-black font-normal':
                  pathname.startsWith('/getting-started'),
                'text-black/70 font-light':
                  !pathname.startsWith('/getting-started'),
              })}
            >
              Getting Started
            </Link>
            <Link
              href="/docs/components"
              className={cx('rounded-sm text-sm', {
                'text-black font-normal':
                  pathname.startsWith('/docs/components'),
                'text-black/70 font-light':
                  !pathname.startsWith('/docs/components'),
              })}
            >
              Components
            </Link>
          </div>
          <div className="mx-0 lg:ml-auto">
            <div className="flex gap-2">
              <div className="hidden md:block">Search</div>
              <div className="hidden gap-2 lg:flex">
                <a
                  rel="noopener"
                  target="_blank"
                  aria-label="Link to GitHub Repository"
                  href="https://github.com/Littletonconnor"
                >
                  <GithubIcon size={20} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </nav>
        {/* ---- MOBILE NAV ---- */}
      </div>
    </header>
  )
}
