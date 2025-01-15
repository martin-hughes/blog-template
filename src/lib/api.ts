import {Post} from '@/interfaces/post'
import fs from 'fs'
import matter from 'gray-matter'
import {join} from 'path'

import * as rawAuthors from '@/../_data/authors.json'
import {Author} from '@/interfaces/author'

type AuthorsArray = {
  [id: string]: Author
}

const authors: AuthorsArray = {}

Object.entries(rawAuthors).forEach((data) => {
  authors[data[0]] = {id: data[0], ...data[1]}
})

const postsDirectory = join(process.cwd(), '_data/posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const {data, content} = matter(fileContents)
  const author = authors[data.author as string]
  return {...{...data, author: author}, slug: realSlug, content} as Post
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post) => !post.preview)
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
