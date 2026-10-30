import { describe, expect, it } from 'vitest'
import { renderBlock, renderMatrix } from '../sync-readme-components.mjs'

// Pure-renderer tests for scripts/sync-readme-components.mjs. The lv2 half
// (lv2-composition-guideline §6.2 row 6) is the part with no live data yet —
// src/components/lv2/ holds no component until #125 — so it is pinned here
// rather than through `pnpm check:readme`.

describe('renderMatrix', () => {
  it('marks a parity-exempt lv1 as visual-classes-only', () => {
    const out = renderMatrix(['Button', 'Dialog'])
    expect(out).toContain('| `Button` | ✅ | ✅ |')
    expect(out).toContain('| `Dialog` | ✅ | ⚠️ |')
  })

  it('renders no lv2 section when there is no lv2', () => {
    const out = renderMatrix(['Button'])
    expect(out).not.toContain('lv2')
    expect(out.split('\n')).toHaveLength(3)
  })

  it('lists lv2 components in their own React-only table', () => {
    const out = renderMatrix(['Button'], ['EmptyState'])
    expect(out).toContain('| Component (lv2) | React | HTML + CSS only |')
    expect(out).toContain('| `EmptyState` | ✅ | ❌ |')
    // The lv1 table comes first and is unchanged.
    expect(out.startsWith('| Component | React | HTML + CSS only |')).toBe(true)
    expect(out.indexOf('`Button`')).toBeLessThan(out.indexOf('`EmptyState`'))
  })
})

describe('renderBlock', () => {
  it('joins slugs with middle dots and ends with a period', () => {
    expect(renderBlock(['badge', 'button', 'emptystate'])).toBe(
      '`badge` · `button` · `emptystate`.',
    )
  })
})
