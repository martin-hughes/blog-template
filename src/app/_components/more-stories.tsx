import {Post} from '@/interfaces/post'
import {PostPreview} from './post-preview'

type Props = {
  posts: Post[]
}

export function MoreStories({posts}: Props) {
  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 mb-32'>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
