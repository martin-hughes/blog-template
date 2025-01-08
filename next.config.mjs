/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',

  // The image optimizer runs server-side to scale images appropriately to their output size. It therefore needs a
  // server to be running Next.js - which can't be true for a fully static site. So disable it.
  assetPrefix: '/',
  images: {
    unoptimized: true,
  },
  distDir: 'out',
  reactStrictMode: true,

  // TODO: Remove this once all lint errors fixed
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
