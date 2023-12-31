import React from 'react'

import { allChangelogDocuments } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

import Markdown from '@/components/markdown'
import PageToc from '@/components/page-toc'

export async function generateStaticParams() {
  return allChangelogDocuments
}

export async function generateMetadata() {
  const post = allChangelogDocuments[0]

  if (!post) {
    notFound()
  }

  return {
    title: post.title,
    // TODO: openGraph
    // TODO: twitter
  }
}

export default async function ChangelogPage() {
  const post = allChangelogDocuments[0]

  if (!post) {
    notFound()
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
      <main className="my-12 w-full">
        <div className="prose prose-slate md:ml-52">
          <h1>{post.title}</h1>
          <p className="lead">{post.description}</p>
          <Markdown doc={post} />
        </div>
      </main>
    </>
  )
}
