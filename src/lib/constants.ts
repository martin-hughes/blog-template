import type {Metadata} from 'next'

export const BLOG_TITLE = 'Blog Title'
export const BLOG_DESCRIPTION = 'Blog Description'

export const BLOG_LONG_TITLE = BLOG_TITLE + ' - ' + BLOG_DESCRIPTION

export const HOME_OG_IMAGE_URL =
  'https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg'

export const METADATA_BASE = process.env.BUILD_BASE_URL ?? 'http://localhost:3000'

export const DEFAULT_METADATA: Metadata = {
  metadataBase: new URL(METADATA_BASE),
  title: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
}
