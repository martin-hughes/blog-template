import {Metadata} from 'next'
import {notFound} from 'next/navigation'
import {getAllPosts, getPostBySlug} from '@/lib/api'
import {BLOG_TITLE, DEFAULT_METADATA} from '@/lib/constants'
import markdownToHtml from '@/lib/markdownToHtml'
import Container from '@/app/_components/container'
import Header from '@/app/_components/header'
import {PostBody} from '@/app/_components/post-body'
import {PostHeader} from '@/app/_components/post-header'

export default async function Post(props: Params) {
  const params = await props.params
  const post = getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }

  const content = await markdownToHtml(post.content || '')

  return (
    <main>
      <Container>
        <div className='max-w-5xl mx-auto'>
          <Header />
          <article className='mb-32'>
            <PostHeader title={post.title} date={post.date} author={post.author} />
            <PostBody content={content} />
          </article>
        </div>
      </Container>
    </main>
  )
}

type Params = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params
  const post = getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }

  const title = `${post.title} | ${BLOG_TITLE}`

  return {
    ...DEFAULT_METADATA,
    title: title,
    description: post.excerpt,
    openGraph: {
      title,
      description: post.excerpt,
      images: post.ogImage ? [post.ogImage.url] : DEFAULT_METADATA.openGraph!.images,
    },
  }
}

// Think this has to be declared async, but haven't checked.
// eslint-disable-next-line @typescript-eslint/require-await
export async function generateStaticParams() {
  const posts = getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}
