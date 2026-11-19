import { render } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Switch } from './Switch'

// The #524 contract on computed colours: a disabled + checked Switch must not
// keep the check icon in the colour chosen for the enabled checked track.
// jsdom loads no stylesheet, so this runs in a real browser (#650). It
// replaced the source-text assertions Switch.test.tsx used to make on
// Switch.css (#642).

/** The colour a token resolves to, as the browser computes it. */
function tokenColor(token: string): string {
  const probe = document.createElement('span')
  probe.style.color = `var(${token})`
  document.body.append(probe)
  const color = getComputedStyle(probe).color
  probe.remove()
  return color
}

/** WCAG relative luminance of a computed `color` / `background-color`. */
function luminance(color: string): number {
  const canvas = document.createElement('canvas')
  canvas.width = 1
  canvas.height = 1
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('no 2d context')
  ctx.fillStyle = color
  ctx.fillRect(0, 0, 1, 1)
  const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data
  const lin = (c: number) => {
    const s = c / 255
    return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
  }
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b)
}

function contrast(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (hi + 0.05) / (lo + 0.05)
}

afterEach(() => {
  document.documentElement.classList.remove('dark')
})

type Mode = 'light' | 'dark'

function renderSwitch(mode: Mode, { isError = false } = {}) {
  if (mode === 'dark') document.documentElement.classList.add('dark')
  const { container } = render(
    <Switch aria-label="Wi-Fi" disabled defaultChecked isError={isError} />,
  )
  const track = container.querySelector('.st-switch') as HTMLElement
  const check = container.querySelector('.st-switch__check') as Element
  return { track, check }
}

function expectDisabledCheckColor(mode: Mode, options?: { isError?: boolean }) {
  const { check } = renderSwitch(mode, options)
  expect(getComputedStyle(check).color).toBe(tokenColor('--color-foreground-disabled'))
}

function expectCheckVisibleOnTrack(mode: Mode) {
  const { track, check } = renderSwitch(mode)
  const ratio = contrast(getComputedStyle(check).color, getComputedStyle(track).backgroundColor)
  // Before #524 the icon kept --color-background on a disabled track and
  // measured ~1.1:1. 1.5:1 separates "visible" from that collapse without
  // claiming the AA 3:1 a disabled control is exempt from.
  expect(ratio).toBeGreaterThan(1.5)
}

// Titles are written out per mode, not with describe.each: the test catalog
// lists browser tests without running them (`vitest list`), so a `%s`
// template would show up unexpanded in the Storybook Tests tab.
describe('Switch', () => {
  describe('disabled + checked, light', () => {
    it('paints the check icon in --color-foreground-disabled (#524)', () => {
      expectDisabledCheckColor('light')
    })
    it('keeps the check icon distinguishable from the track (#524)', () => {
      expectCheckVisibleOnTrack('light')
    })
    // The error + checked rule is more specific than `.st-switch:disabled`, so
    // a `color` added there would win and bring #524 back for invalid switches.
    it('keeps the disabled check colour when the switch is also in error', () => {
      expectDisabledCheckColor('light', { isError: true })
    })
  })

  describe('disabled + checked, dark', () => {
    it('paints the check icon in --color-foreground-disabled (#524)', () => {
      expectDisabledCheckColor('dark')
    })
    it('keeps the check icon distinguishable from the track (#524)', () => {
      expectCheckVisibleOnTrack('dark')
    })
    it('keeps the disabled check colour when the switch is also in error', () => {
      expectDisabledCheckColor('dark', { isError: true })
    })
  })
})
