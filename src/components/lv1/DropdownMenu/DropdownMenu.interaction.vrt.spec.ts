import { expect, test } from '@playwright/test'

/**
 * Behavioral (non-screenshot) regression guard for the containing-block class
 * of bugs fixed in #403. These are TRANSIENT, animation-time positioning
 * failures that neither static VRT (still frames) nor jsdom unit tests (no
 * layout) can catch:
 *
 *   - A `transform` / `translate` on `.st-dropdown-menu__content` makes it the
 *     containing block for the nested `position: fixed` SubContent popper, so
 *     the open submenu snaps INSIDE the parent panel (and inflates its scroll,
 *     flashing a scrollbar) — most visibly during the parent's close animation.
 *
 * The guard runs against the open-by-default `submenu` story: it opens the
 * submenu, then closes the whole menu, sampling every animation frame. It
 * fails if the submenu ever jumps toward the parent panel or the parent's
 * scrollHeight exceeds its clientHeight. Lives in a `.vrt.spec.ts` file so it
 * runs under Playwright (`pnpm test:vrt`), not Vitest; it takes no screenshots
 * so it needs no committed baseline. See DropdownMenu.css ("transform-free").
 */

const STORY_URL =
  '/iframe.html?id=components-lv1-dropdownmenu--submenu&globals=theme:light&viewMode=story'

test('DropdownMenu / submenu stays positioned through close (no containing-block jump)', async ({
  page,
}) => {
  await page.setViewportSize({ width: 700, height: 600 })
  await page.goto(STORY_URL)
  await page.waitForLoadState('networkidle')
  await page.waitForSelector('[role="menu"]')

  // Open the submenu via hover and wait for its first item to render.
  await page.getByRole('menuitem', { name: 'Share' }).hover()
  await page.getByRole('menuitem', { name: 'Email' }).waitFor({ state: 'visible', timeout: 10_000 })
  await page.waitForTimeout(250) // let the open animation settle

  // Sanity: the open submenu sits to the RIGHT of the parent panel, not inside
  // it. The parent panel is ~224px wide from the left edge, so a correctly
  // placed submenu starts well past 200px.
  const openSubX = await page.evaluate(() => {
    const sub = document.querySelector('.st-dropdown-menu__sub-content')
    return sub ? Math.round(sub.getBoundingClientRect().x) : -1
  })
  expect(openSubX, 'submenu should open to the right of the parent panel').toBeGreaterThan(200)

  // Install a per-frame sampler, then close the whole menu. Records any frame
  // where the submenu jumps toward the parent (x < 200) or the parent panel
  // overflows (scrollHeight > clientHeight) — both symptoms of a transform on
  // the content re-anchoring the fixed SubContent.
  await page.evaluate(() => {
    const w = window as unknown as { __bad: string[]; __raf: number }
    w.__bad = []
    const tick = () => {
      const sub = document.querySelector('.st-dropdown-menu__sub-content') as HTMLElement | null
      if (sub) {
        const x = Math.round(sub.getBoundingClientRect().x)
        if (x < 200) w.__bad.push(`sub jumped to x=${x} (state=${sub.getAttribute('data-state')})`)
      }
      const parent = document.querySelector(
        '.st-dropdown-menu__content:not(.st-dropdown-menu__sub-content)',
      ) as HTMLElement | null
      if (parent && parent.scrollHeight > parent.clientHeight + 1) {
        w.__bad.push(
          `parent overflowed sh=${parent.scrollHeight} ch=${parent.clientHeight} (state=${parent.getAttribute('data-state')})`,
        )
      }
      w.__raf = requestAnimationFrame(tick)
    }
    tick()
  })

  // Selecting a leaf item closes the whole menu (parent + sub exit together).
  await page.getByRole('menuitem', { name: 'Email' }).click()
  await page.waitForTimeout(300) // cover the full exit animation

  const bad = await page.evaluate(() => {
    const w = window as unknown as { __bad: string[]; __raf: number }
    cancelAnimationFrame(w.__raf)
    return Array.from(new Set(w.__bad))
  })

  expect(bad, 'no submenu jump / parent overflow during close').toEqual([])
})
