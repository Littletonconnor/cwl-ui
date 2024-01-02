import React from 'react'

import { type DocumentTypes } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

import Anatomy from '@/components/anatomy'
// import Callout from '@/components/docs/callout'
// import ComponentExample from '@/components/docs/component-example'
import ComponentSource from '@/components/docs/component-source'
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
          ComponentSource,
          //   ComponentExample,
          //   Callout,
          // Heading,
          Anatomy,
          code: ({
            className,
            ...props
          }: Omit<
            React.HTMLAttributes<HTMLElement>,
            'dangerouslySetInnerHTML'
          >) => <code className={cx(className)} {...props} />,
          pre: ({
            className,
            ...props
          }: Omit<
            React.HTMLAttributes<HTMLPreElement>,
            'dangerouslySetInnerHTML'
          >) => (
            <pre
              className={cx(
                'border border-slate-200 overflow-hidden rounded-md',
                className,
              )}
              {...props}
            />
          ),
          p: ({
            className,
            ...props
          }: Omit<
            React.HTMLAttributes<HTMLParagraphElement>,
            'dangerouslySetInnerHTML'
          >) => (
            <p
              className={cx('leading-7 [&:not(:first-child)]:mt-3', className)}
              {...props}
            />
          ),
          h2: ({
            className,
            ...props
          }: Omit<
            React.HTMLAttributes<HTMLHeadingElement>,
            'dangerouslySetInnerHTML'
          >) => (
            <h2
              className={cx(
                'font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0 mb-0',
                className,
              )}
              {...props}
            />
          ),
        }}
      />
    </div>
  )
}
