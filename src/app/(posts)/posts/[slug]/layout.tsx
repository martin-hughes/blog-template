import {BLOG_DESCRIPTION, BLOG_TITLE, HOME_OG_IMAGE_URL} from '@/lib/constants'
import type {Metadata} from 'next'
import MainLayout from '@/app/_components/main-layout'

export const metadata: Metadata = {
  title: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return MainLayout({children, isMainPage: false})
}
