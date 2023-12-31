import React from 'react'

import { allChangelogDocuments } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import Balancer from 'react-wrap-balancer'

import Markdown from '@/components/markdown'

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
