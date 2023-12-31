import Slugger from 'github-slugger'
import { toString } from 'hast-util-to-string'
import { visit } from 'unist-util-visit'

export function withTableOfContents() {
  const slugs = new Slugger()
  return (tree) => {
    visit(tree, 'h2', (node) => {
      node.data = node.data || {}
      node.data = { hName: 'h2' }

      node.data.hProperties = node.data.hProperties || {}
      node.data.hProperties.lvl = node.depth
      node.data.hProperties.slug = slugs.slug(toString(node))
    })
  }
}
