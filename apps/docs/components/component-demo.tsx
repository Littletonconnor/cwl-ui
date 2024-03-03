'use client'

import * as React from 'react'

import { Index } from '@/__registry__'

interface ComponentExampleProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  story: string
}

export default function ComponentDemo({ name, story }: ComponentExampleProps) {
  const Story = React.useMemo(() => {
    const Component = Index[name]?.[story]?.component
    if (!Component) {
      throw new Error(`Component ${name} not found in registry`)
    }

    return <Component />
  }, [name, story])

  return (
    <div className="not-prose -mx-6 flex items-start justify-center border-y border-zinc-200 bg-white px-6 py-12 sm:mx-0 sm:rounded-lg sm:border sm:px-8">
      <React.Suspense fallback={<p>Loading...</p>}>{Story}</React.Suspense>
    </div>
  )
}
