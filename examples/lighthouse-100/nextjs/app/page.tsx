// Per-component CSS — imported adjacent to where the component is used.
// Next.js deduplicates these across the route, so importing `css/button`
// from two places is free. The page bundle here only carries Button and
// Badge styles — the other 16 lv1 components ship zero bytes.
import '@yasmro/schatten/css/button'
import '@yasmro/schatten/css/badge'

import { Badge, Button } from '@yasmro/schatten'

export default function Home() {
  return (
    <main
      style={{
        maxWidth: 640,
        margin: '0 auto',
        padding: '4rem 1.5rem',
        display: 'grid',
        gap: '1.5rem',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <h1 style={{ fontSize: '1.75rem', margin: 0 }}>
        Schatten — Lighthouse 100 demo
      </h1>
      <p style={{ margin: 0, lineHeight: 1.6 }}>
        This page imports only the Button and Badge CSS via per-component
        subpaths. Open DevTools → Coverage to see how little CSS is
        unused.
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Button variant="primary">Save</Button>
        <Button variant="secondary">Cancel</Button>
        <Badge variant="success">Active</Badge>
      </div>
    </main>
  )
}
