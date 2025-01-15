import Avatar from './avatar'
import DateFormatter from './date-formatter'
import {PostTitle} from '@/app/_components/post-title'
import {type Author} from '@/interfaces/author'

type Props = {
  title: string
  date: string
  author: Author
}

export function PostHeader({title, date, author}: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className='flex flex-row items-center md:mb-6 gap-6'>
        <Avatar name={author.name} picture={author.picture} />
        <div className='text-xl'>
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}
