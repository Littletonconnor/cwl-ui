'use client'

import Link from 'next/link'

import { Icon } from './icons/icons'

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-950/10 bg-white px-6 py-5 sm:px-8 lg:flex lg:h-16 lg:items-center lg:py-0">
      <div className="mx-auto flex w-full max-w-xl items-center justify-between lg:max-w-7xl">
        <div className="flex items-center gap-2 sm:gap-4">
          <Link className="flex items-center gap-1" href="/">
            <Icon source="paint-brush" />
            <p className="text-lg font-medium">CWL/UI</p>
          </Link>
          <div className="flex items-center gap-2 rounded-full border border-dashed border-zinc-300 px-3 py-px text-xs/6 font-medium text-zinc-900">
            Search the docs
          </div>
        </div>
        <div className="flex items-center gap-8">
          <Link className="text-sm/6 font-medium text-zinc-700 hover:text-zinc-950" href="/docs">
            Docs
          </Link>
          <Icon source="moon" />
        </div>
      </div>
      <div className="mx-auto mt-5 flex max-w-xl lg:hidden">
        <div className="w-full rounded-md border border-zinc-200 px-2 py-1">Select</div>
      </div>
    </header>
  )
}
