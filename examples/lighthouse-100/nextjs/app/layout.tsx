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
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
