import { cx } from '@/lib/cva.config'
import { fontSans } from '@/lib/fonts'

import '../styles/globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CWL UI',
  description:
    'A Design System built by Connor Littleton and heavily inspired by Draft-UI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body className={cx('h-full', fontSans.className)}>{children}</body>
    </html>
  )
}
