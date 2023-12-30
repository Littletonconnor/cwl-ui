import React from 'react'

import { type DocumentTypes } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

// import Callout from '@/components/docs/callout'
// import ComponentExample from '@/components/docs/component-example'
// import ComponentSource from '@/components/docs/component-source'
import Heading from '@/components/heading'
import { cx } from '@/lib/cva.config'

type MarkdownProps = {
  doc: DocumentTypes
}

export default function Markdown(props: MarkdownProps) {
  const { doc } = props
  const MDXComponent = useMDXComponent(doc.body.code)
  return (
    <div>
      <MDXComponent
        components={{
          //   ComponentSource,
          //   ComponentExample,
          //   Callout,
          Heading,
          code: ({
            className,
            ...props
          }: Omit<
            React.HTMLAttributes<HTMLElement>,
            'dangerouslySetInnerHTML'
          >) => <code className={cx(className)} {...props} />,
        }}
      />
    </div>
  )
}
