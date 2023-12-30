import { allComponentDocuments } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

import Navigation from '@/components/navigation'

interface DocsLayoutProps {
  params: {
    slug: string[]
  }
  children: React.ReactNode
}

export default async function DocsLayout({
  params,
  children,
}: DocsLayoutProps) {
  const sortedComponents = allComponentDocuments
    .filter((doc) => doc.isComponent === true)
    .sort((a, b) => a.title.localeCompare(b.title))

  const post = allComponentDocuments.find((post) => {
    return (
      post._raw.flattenedPath.replace('docs/', '') === params.slug.join('/')
    )
  })

  if (!post) {
    return notFound()
  }

  return (
    <div className="container mx-auto h-full px-6">
      <Navigation />
      <aside>TODO: Sidebar</aside>
      <section className="ml-56 pt-16">{children}</section>
    </div>
  )
}
