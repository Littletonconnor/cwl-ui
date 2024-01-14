import React from 'react'

import { type DocumentTypes } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

import Anatomy from '@/components/anatomy'
import ComponentSource from '@/components/docs/component-source'
import { cx } from '@/lib/cva.config'

import ComponentDemo from './component-demo'
import ComponentExample from './component-example'

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
          ComponentExample,
          ComponentDemo,
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
          >) => <p className={cx('typography', className)} {...props} />,
          h2: ({
            className,
            ...props
          }: Omit<
            React.HTMLAttributes<HTMLHeadingElement>,
            'dangerouslySetInnerHTML'
          >) => (
            <div className="typography">
              <h2 className={cx(className)} {...props} />
            </div>
          ),
        }}
      />
    </div>
  )
}
