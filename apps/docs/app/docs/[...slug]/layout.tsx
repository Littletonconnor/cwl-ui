import { allComponentDocuments } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

interface DocsLayoutProps {
  params: {
    slug: string[]
  }
  children: React.ReactNode
}

export default function Layout({ params, children }: DocsLayoutProps) {
  const post = allComponentDocuments.find((post) => {
    return post.slug.replace('/docs/', '') === params.slug.join('')
  })

  if (!post) {
    return notFound()
  }

  return children
}
