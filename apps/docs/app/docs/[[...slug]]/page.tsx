import { allComponentDocuments } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

import Anatomy from '@/components/anatomy'
import Markdown from '@/components/markdown'
import PageToc from '@/components/page-toc'

export async function generateStaticParams() {
  return allComponentDocuments.map((post) => {
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
  const post = allComponentDocuments.find((post) => {
    return (
      post._raw.flattenedPath.replace('docs/', '') === params.slug.join('/')
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
  const post = allComponentDocuments.find((post) => {
    return (
      post._raw.flattenedPath.replace('docs/', '') === params.slug.join('/')
    )
  })

  if (!post) {
    return notFound()
  }

  return (
    <>
      <div className="hidden shrink-0 pl-4 md:pl-8 lg:w-1/4 xl:block">
        <div className="fixed left-full top-0 h-screen pt-16">
          <div className="h-full overflow-y-auto">
            <div className="my-12 pr-4">
              <PageToc headings={post.toc} />
            </div>
          </div>
        </div>
      </div>
      <main className="w-full py-12 md:ml-52">
        <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
        <p className="mt-2 text-lg font-light text-gray-500">
          {post.description}
        </p>
        {post.ariaPattern && (
          <a
            className="mt-2 inline-block rounded-md border px-3 py-2 text-sm font-medium text-zinc-600 transition duration-150 ease-in-out hover:bg-zinc-50 hover:text-zinc-700"
            href={post.ariaPattern}
            target="_blank"
          >
            Aria Pattern
          </a>
        )}
        <div className="prose prose-slate mt-12 max-w-3xl">
          <Markdown doc={post} />
        </div>
      </main>
    </>
  )
}