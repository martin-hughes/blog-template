import {DEFAULT_METADATA} from '@/lib/constants'
import type {Metadata} from 'next'
import '@/app/globals.css'
import MainLayout from '@/app/_components/main-layout'

export const metadata: Metadata = DEFAULT_METADATA

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return MainLayout({children, isMainPage: true})
}
