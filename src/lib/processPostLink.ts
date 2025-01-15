import {visit} from 'unist-util-visit'
import type {Root} from 'mdast'

// Strips the ".md" from any site-relative links, since the page slugs don't have the .md extension.
const processPostLink = () => {
  return (tree: Root) => {
    visit(tree, 'link', (node) => {
      if (node.url && node.url.endsWith('.md') && (node.url.startsWith('./') || node.url.startsWith('/'))) {
        try {
          node.url = node.url.slice(0, node.url.length - 3)
        } catch {
          throw new Error(`Invalid URL: ${node.url}`)
        }
      }
    })
  }
}

export default processPostLink
