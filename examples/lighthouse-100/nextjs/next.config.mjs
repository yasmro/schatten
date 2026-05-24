/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // optimizePackageImports lets Next.js tree-shake the @yasmro/schatten
  // root entry — only the components actually imported on a page survive
  // into the route's JS bundle. The per-component CSS subpaths are
  // imported separately (see app/page.tsx), so this flag is purely a JS
  // optimization.
  experimental: {
    optimizePackageImports: ['@yasmro/schatten'],
  },
}

export default nextConfig
