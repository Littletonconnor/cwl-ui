import React from 'react'

import { type DocumentTypes } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

import Anatomy from '@/components/anatomy'
import ComponentSource from '@/components/docs/component-source'
import { cx } from '@/lib/cva.config'

import ColorReference from './color-reference'
import { ColorPalette, ColorPaletteCoreColor, ColorPaletteThemeColor } from './colors'
import ComponentCode from './component-code'
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
          ColorReference,
          ComponentSource,
          ColorPalette,
          ColorPaletteCoreColor,
          ColorPaletteThemeColor,
          ComponentExample,
          ComponentDemo,
          ComponentCode,
          Anatomy,
          code: ({
            className,
            ...props
          }: Omit<React.HTMLAttributes<HTMLElement>, 'dangerouslySetInnerHTML'>) => (
            <code className={cx(className)} {...props} />
          ),
          table: ({
            className,
            children,
            ...props
          }: Omit<React.HTMLAttributes<HTMLElement>, 'dangerouslySetInnerHTML'>) => (
            <div className="typography">
              <table
                className={cx('w-full table-auto text-left whitespace-no-wrap', className)}
                {...props}
              >
                <colgroup>
                  <col style={{ width: '25%' }} />
                  <col style={{ width: '25%' }} />
                  <col style={{ width: '50%' }} />
                </colgroup>
                {children}
              </table>
            </div>
          ),
          th: ({
            className,
            ...props
          }: Omit<React.HTMLAttributes<HTMLTableHeaderCellElement>, 'dangerouslySetInnerHTML'>) => (
            <th className={cx('pb-4 text-sm font-semibold', className)} {...props} />
          ),
          td: ({
            className,
            ...props
          }: Omit<React.HTMLAttributes<HTMLTableDataCellElement>, 'dangerouslySetInnerHTML'>) => (
            <td className={cx('py-1.5 pb-6 pt-3', className)} {...props} />
          ),
          pre: ({
            className,
            ...props
          }: Omit<React.HTMLAttributes<HTMLPreElement>, 'dangerouslySetInnerHTML'>) => (
            <div className="typography my-6">
              <pre
                className={cx(
                  'flex max-w-full overflow-x-auto rounded-xl py-4 text-sm/6 ring-1 ring-inset ring-black/10',
                  className,
                )}
                {...props}
              />
            </div>
          ),
          p: ({
            className,
            ...props
          }: Omit<React.HTMLAttributes<HTMLParagraphElement>, 'dangerouslySetInnerHTML'>) => (
            <p className={cx('typography', className)} {...props} />
          ),
          span: ({
            ...props
          }: Omit<React.HTMLAttributes<HTMLParagraphElement>, 'dangerouslySetInnerHTML'>) => (
            <span className="data-[line]:px-6" {...props} />
          ),
          h2: ({
            className,
            ...props
          }: Omit<React.HTMLAttributes<HTMLHeadingElement>, 'dangerouslySetInnerHTML'>) => (
            <div className="typography">
              <h2 className={cx(className)} {...props} />
            </div>
          ),
          h3: ({
            className,
            ...props
          }: Omit<React.HTMLAttributes<HTMLHeadingElement>, 'dangerouslySetInnerHTML'>) => (
            <div className="typography">
              <h3 className={cx(className)} {...props} />
            </div>
          ),
        }}
      />
    </div>
  )
}
