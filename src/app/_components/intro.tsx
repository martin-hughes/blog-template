import {BLOG_DESCRIPTION} from '@/lib/constants'

export function Intro() {
  return (
    <section>
      <h1 className='text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8'>Blog Title.</h1>
      <h4 className='text-center md:text-left text-2xl mt-5'>{BLOG_DESCRIPTION}</h4>
      <hr className='mt-6 mb-10' />
    </section>
  )
}
