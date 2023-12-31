import { allGeneralDocuments } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import Balancer from 'react-wrap-balancer'

import Markdown from '@/components/markdown'

export async function generateStaticParams() {
  return allGeneralDocuments.map((post) => {
    return {
      slug: post._raw.flattenedPath.split('/'),
    }
  })
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}) {
  const post = allGeneralDocuments.find((post) => {
    return (
      post._raw.flattenedPath.replace('getting-started/', '') ===
      params.slug.join('/')
    )
  })

  if (!post) {
    notFound()
  }

  return {
    title: post.title,
    // TODO: openGraph
    // TODO: twitter
  }
}

interface DocsPageProps {
  params: {
    slug: string[]
  }
}

export default async function DocsPage({ params }: DocsPageProps) {
  const post = allGeneralDocuments.find((post) => {
    return (
      post._raw.flattenedPath.replace('getting-started/', '') ===
      params.slug.join('/')
    )
  })

  if (!post) {
    return notFound()
  }

  return (
    <div className="w-full py-6 lg:py-8">
      <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
      <p className="mt-2 text-lg font-light text-gray-500">
        <Balancer>{post.description}</Balancer>
      </p>
      <div className="prose prose-slate mt-12 max-w-3xl">
        <Markdown doc={post} />
      </div>
    </div>
  )
}
