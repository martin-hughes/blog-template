import MainLayout from '@/app/_components/main-layout'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return MainLayout({children, isMainPage: false})
}
