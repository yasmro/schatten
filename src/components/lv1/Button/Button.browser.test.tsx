import { render } from '@testing-library/react'
import { beforeAll, describe, expect, it } from 'vitest'
import { userEvent } from 'vitest/browser'
import { Button } from './Button'

// The hover check from Button.vrt.spec.ts ("filled variants darken their
// label on hover"), as a unit test in a real browser (#650). `userEvent` from
// `vitest/browser` moves the real pointer, so CSS `:hover` applies —
// @testing-library/user-event only dispatches events and never triggers it.

beforeAll(() => {
  // Read the settled colour, not a mid-transition one.
  const style = document.createElement('style')
  style.textContent = '*, *::before, *::after { transition: none !important }'
  document.head.append(style)
})

function lightness(color: string): number {
  const canvas = document.createElement('canvas')
  canvas.width = 1
  canvas.height = 1
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('no 2d context')
  ctx.fillStyle = color
  ctx.fillRect(0, 0, 1, 1)
  const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

type Variant = 'primary' | 'destructive' | 'secondary' | 'tertiary'

async function labelColorBeforeAndAfterHover(variant: Variant) {
  const { getByRole } = render(<Button variant={variant}>{variant}</Button>)
  const button = getByRole('button', { name: variant })
  const rest = getComputedStyle(button).color
  await userEvent.hover(button)
  return { rest, hovered: getComputedStyle(button).color }
}

// Titles are written out per variant, not with it.each — see
// Switch.browser.test.tsx for why.
describe('Button', () => {
  describe('hover', () => {
    it('darkens the primary label on hover', async () => {
      const { rest, hovered } = await labelColorBeforeAndAfterHover('primary')
      expect(lightness(hovered)).toBeLessThan(lightness(rest))
    })

    it('darkens the destructive label on hover', async () => {
      const { rest, hovered } = await labelColorBeforeAndAfterHover('destructive')
      expect(lightness(hovered)).toBeLessThan(lightness(rest))
    })

    it('keeps the secondary label colour on hover', async () => {
      const { rest, hovered } = await labelColorBeforeAndAfterHover('secondary')
      expect(hovered).toBe(rest)
    })

    it('keeps the tertiary label colour on hover', async () => {
      const { rest, hovered } = await labelColorBeforeAndAfterHover('tertiary')
      expect(hovered).toBe(rest)
    })
  })
})
