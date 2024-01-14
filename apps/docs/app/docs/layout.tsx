'use client'

import { allGeneralDocuments } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'

interface LayoutProps {
  params: {
    slug: string[]
  }
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const post = allGeneralDocuments.find((post) => {
    return post.slug === '/docs/getting-started'
  })

  if (!post) {
    return notFound()
  }

  return (
    <div className="bg-white">
      <Header />
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-xl lg:max-w-7xl">
          <div className="mx-auto flex max-w-xl items-start gap-x-12 lg:max-w-7xl">
            <Sidebar />
            <main className="min-w-0 flex-1 gap-x-12 pb-16 pt-8 lg:pt-12">
              <div className="max-w-2xl">{children}</div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
