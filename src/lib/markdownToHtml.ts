import {remark} from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'
import remarkGemoji from 'remark-gemoji'
import processPostLink from '@/lib/processPostLink'

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).use(remarkGfm).use(remarkGemoji).use(processPostLink).process(markdown)
  return result.toString()
}
