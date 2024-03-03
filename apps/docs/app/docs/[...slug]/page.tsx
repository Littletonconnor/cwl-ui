import { allComponentDocuments } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

import Markdown from '@/components/markdown'

export async function generateStaticParams() {
  return allComponentDocuments.map((post) => {
    return {
      slug: post._raw.flattenedPath.split('/'),
    }
  })
}

export async function generateMetadata({ params }: { params: { slug: string[] } }) {
  const post = allComponentDocuments.find((post) => {
    return post.slug.replace('/docs/', '') === params.slug.join('')
  })

  if (!post) {
    notFound()
  }

  return {
    title: `${post.title.toUpperCase().slice(0, 1) + post.title.slice(1)} - CWL UI Kit`,
  }
}

interface DocsPageProps {
  params: {
    slug: string[]
  }
}

export default async function DocsPage({ params }: DocsPageProps) {
  const post = allComponentDocuments.find((post) => {
    return post.slug.replace('/docs/', '') === params.slug.join('')
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
      <div>
        <Markdown doc={post} />
      </div>
    </div>
  )
}
