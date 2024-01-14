import * as React from 'react'

interface ComponentExampleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  name: string
  story: string
}

export default function ComponentCode({ children }: ComponentExampleProps) {
  const [Code] = React.Children.toArray(children) as React.ReactElement[]

  console.log({ Code })
  return (
    <div className="-mx-6 flex items-start justify-center border-y border-zinc-200 bg-white px-6 py-12 sm:mx-0 sm:rounded-lg sm:border sm:px-8">
      {Code}
    </div>
  )
}
