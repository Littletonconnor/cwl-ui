import { GithubIcon } from 'lucide-react'
import Link from 'next/link'

export default function Navigation() {
  return (
    <div className="fixed inset-x-0 top-0 z-10 h-14 border-b bg-white">
      <div className="mx-auto flex h-full w-full items-center px-6">
        <Link
          href="/"
          aria-label="Home"
          className="flex items-center gap-2 font-semibold"
        >
          <span>CWL UI</span>
        </Link>
        {/* ---- DESKTOP NAV ---- */}
        <nav className="flex grow items-center">
          <div className="ml-14 hidden items-center gap-8 lg:flex">
            <Link
              href="/getting-started"
              className="rounded-sm text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2"
            >
              Getting Started
            </Link>
            <Link
              href="/docs/components"
              className="rounded-sm text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2"
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
    </div>
  )
}
