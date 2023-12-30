import { cx } from '@/lib/cva.config'

import '../styles/globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={cx('h-full', inter.className)}>{children}</body>
    </html>
  )
}
