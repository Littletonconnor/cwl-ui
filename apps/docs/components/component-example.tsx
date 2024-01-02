import * as React from 'react'

import { Index } from '@/__registry__'

interface ComponentExampleProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'left' | 'center' | 'right'
  name: string
  story: string
}

export default function ComponentExample({
  align = 'center',
  name,
  story,
  children,
}: ComponentExampleProps) {
  const [Code] = React.Children.toArray(children) as React.ReactElement[]

  const codeString = React.useMemo(() => {
    if (
      typeof Code?.props['data-rehype-pretty-code-fragment'] !== 'undefined'
    ) {
      const [codeToCopy] = React.Children.toArray(
        Code.props.children,
      ) as React.ReactElement[]
      return codeToCopy?.props?.__rawString__ || null
    }
  }, [Code])

  const Story = React.useMemo(() => {
    const Component = Index[name]?.[story]?.component
    if (!Component) {
      return (
        <p className="text-muted-foreground text-sm">
          {name}{' '}
          <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
            &quot;{story}&quot;
          </code>{' '}
          not found in registry.
        </p>
      )
    }

    return <Component />
  }, [name, story])
  return <div></div>
}
