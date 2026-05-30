// Token layer — Next.js inlines this CSS into the document <head> as a
// <style> block, which is what "critical CSS" needs. Every Schatten
// component references these CSS variables via var(--color-*), so first
// paint must already have them.
import '@yasmro/schatten/core/tokens'
import '@yasmro/schatten/themes/default'

import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Schatten — Lighthouse 100 demo',
  description:
    'A minimal Next.js page using Schatten components with per-component CSS imports, targeting a 100/100/100/100 Lighthouse score.',
  // Inline SVG favicon so the browser's automatic /favicon.ico request never
  // fires — otherwise Next.js 404s it and the console error costs a Best
  // Practices point.
  icons: {
    icon: {
      url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Crect width='16' height='16' rx='3' fill='%23262321'/%3E%3C/svg%3E",
      type: 'image/svg+xml',
    },
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/* Establish the page surface from Schatten tokens — the reset layer
          normally does this, but these examples load only the token + theme
          layers as critical CSS. Without it, dark-mode hosts flip
          --color-foreground to a light value while the body stays white,
          failing the color-contrast a11y audit. */}
      <body
        style={{
          margin: 0,
          backgroundColor: 'var(--color-background)',
          color: 'var(--color-foreground)',
        }}
      >
        {children}
      </body>
    </html>
  )
}
