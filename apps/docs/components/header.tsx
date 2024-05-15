'use client'

import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-950/10 bg-white px-6 py-5 sm:px-8 lg:flex lg:h-16 lg:items-center lg:py-0">
      <div className="mx-auto flex w-full max-w-xl items-center justify-between lg:max-w-7xl">
        <div className="flex items-center gap-2 sm:gap-4">
          <Link className="flex items-center gap-1" href="/">
            <p className="text-lg font-medium">cwl/ui</p>
          </Link>
        </div>
      </div>
    </header>
  )
}
