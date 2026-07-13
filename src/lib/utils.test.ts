import { describe, expect, it } from 'vitest'
import { cn } from './utils'

describe('cn', () => {
  it('joins string arguments', () => {
    expect(cn('st-btn', 'st-btn--primary')).toBe('st-btn st-btn--primary')
  })

  it('drops falsy values', () => {
    expect(cn('st-btn', false && 'st-btn--loading', null, undefined)).toBe('st-btn')
  })

  it('applies conditional object syntax', () => {
    expect(cn('st-btn', { 'st-btn--sm': true, 'st-btn--lg': false })).toBe('st-btn st-btn--sm')
  })

  it('flattens nested arrays', () => {
    expect(cn(['st-btn', ['st-btn--md']], 'st-btn--primary')).toBe(
      'st-btn st-btn--md st-btn--primary',
    )
  })

  it('preserves argument order (no Tailwind dedupe)', () => {
    // Post tailwind-merge removal, cn is clsx-only: BEM classes pass through
    // untouched in the order given, never deduped or reordered.
    expect(cn('st-btn', 'st-btn--primary', 'st-btn--md')).toBe('st-btn st-btn--primary st-btn--md')
  })
})
