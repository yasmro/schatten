import { Badge, Button } from '@yasmro/schatten'
import { useState } from 'react'

/**
 * React island — hydrated with `client:load` on the index page. Proves the
 * React component layer and the CSS-class layer render against the SAME
 * tokens: this Button (real React component) sits next to a hand-written
 * `<button class="st-btn …">` in index.astro and must look identical.
 */
export function Island() {
  const [count, setCount] = useState(0)
  return (
    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
      <Button variant="primary" onClick={() => setCount((c) => c + 1)}>
        Clicked {count}×
      </Button>
      <Badge variant="success" appearance="subtle">
        React island
      </Badge>
    </div>
  )
}
