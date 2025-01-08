/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',

  // The image optimizer runs server-side to scale images appropriately to their output size. It therefore needs a
  // server to be running Next.js - which can't be true for a fully static site. So disable it.
  assetPrefix: '/',
  images: {
    unoptimized: true
  },

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  distDir: 'out',
}

module.exports = nextConfig
