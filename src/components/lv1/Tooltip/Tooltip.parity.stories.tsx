import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './Tooltip'

/**
 * Parity story — React `<TooltipContent>` and a hand-written
 * `<div class="st-tooltip__content">` must produce **the same visual
 * box** (background / foreground colour / padding / font / shadow /
 * arrow fill). Backs the VRT in `Tooltip.parity.vrt.spec.ts`.
 *
 * **Scope: content visual only, NOT positioning.**
 *
 * Radix React Tooltip portals its content into `document.body` and
 * uses Popper / Floating UI to compute the screen position relative
 * to the trigger. A vanilla consumer cannot replicate that without
 * their own JS (see #297, phase-5). What Schatten's class API DOES
 * give them is the *appearance* — the `.st-tooltip__content` rule
 * paints any element it lands on with the right surface treatment,
 * regardless of where that element sits in the DOM.
 *
 * The story uses `side="bottom"` (only) so the React tooltip portal
 * never overlaps the column header. The vanilla side renders a
 * static `<div class="st-tooltip__content">` below its trigger via
 * normal document flow — no `data-state`, no `position: absolute`,
 * no transform-based positioning (the open / close animations are
 * intentional scope-out — they'd require either Radix-style runtime
 * state toggling or transform-based positioning that conflicts
 * with the animation system).
 *
 * The four `side` variants (top / right / bottom / left) are covered
 * by the existing `Tooltip.vrt.spec.ts` `Sides` story.
 */
const meta: Meta<typeof TooltipContent> = {
  title: 'Components/lv1/Tooltip',
  component: TooltipContent,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof TooltipContent>

// Inline arrow SVG matching TooltipPrimitive.Arrow's default render
// (10x5 viewBox, fill from CSS class). For `side="bottom"` the arrow
// sits at the top of the tooltip box, point facing up toward the trigger.
function VanillaArrowBottom() {
  return (
    <svg
      className="st-tooltip__arrow"
      width="10"
      height="5"
      viewBox="0 0 30 10"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{
        display: 'block',
        marginInline: 'auto',
        marginTop: -1,
      }}
    >
      <polygon points="0,10 30,10 15,0" />
    </svg>
  )
}

export const Parity: Story = {
  name: 'React vs Vanilla HTML',
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 64,
        maxWidth: 720,
      }}
    >
      {/* ===== React side =====
       * Standard Radix usage with `<Tooltip open>` and `side="bottom"`.
       * The portal lands below the trigger, so it never overlaps the
       * column header above. */}
      <div>
        <p className="text-xs mb-4 text-foreground-muted">React</p>
        <div style={{ paddingBottom: 64 }}>
          <Tooltip open>
            <TooltipTrigger>
              <button type="button" className="st-btn st-btn--secondary st-btn--md">
                Trigger
              </button>
            </TooltipTrigger>
            <TooltipContent side="bottom">Tooltip content</TooltipContent>
          </Tooltip>
        </div>
      </div>

      {/* ===== Vanilla HTML side =====
       * Button + tooltip-content stacked in normal document flow.
       * No `data-state`, no `position: absolute`, no transform —
       * proving the class API alone produces the right visual box. */}
      <div>
        <p className="text-xs mb-4 text-foreground-muted">Vanilla HTML</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <button type="button" className="st-btn st-btn--secondary st-btn--md">
            Trigger
          </button>
          <div className="st-tooltip__content" role="tooltip" style={{ marginTop: 4 }}>
            <VanillaArrowBottom />
            Tooltip content
          </div>
        </div>
      </div>
    </div>
  ),
}
