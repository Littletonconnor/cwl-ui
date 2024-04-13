import { allGeneralDocuments } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

import Markdown from '@/components/markdown'

export async function generateMetadata() {
  return {
    title: 'Docs',
  }
}

export default function DocsPage() {
  const post = allGeneralDocuments.find((post) => {
    return post.slug === '/docs/getting-started'
  })

  if (!post) {
    return notFound()
  }

  return (
    <div>
      <div className="typography">
        <h1>{post.title}</h1>
        <p className="lead">{post.description}</p>
      </div>
      <div className="typography">
        <Markdown doc={post} />
      </div>
    </div>
  )
}
