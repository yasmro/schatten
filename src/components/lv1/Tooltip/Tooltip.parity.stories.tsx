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
 * The story therefore shows tooltips as **standalone boxes**, not
 * attached to triggers via Popper. The React side still uses the
 * full `<Tooltip open><TooltipTrigger><TooltipContent>` chain
 * (Radix requires it), but the trigger is a static label rendered
 * inline with the portaled content. The vanilla side simply renders
 * a `<div class="st-tooltip__content">` in normal document flow,
 * with no `data-state` (the open / close animations are intentional
 * scope-out — they'd require either Radix-style runtime state
 * toggling or transform-based positioning that conflicts with the
 * animation system).
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

// Lucide-free inline arrow SVG — matches TooltipPrimitive.Arrow's
// default render shape (10x5 viewBox, fill from CSS class). `side` flips
// the triangle so the point faces the trigger.
function VanillaArrow({ side }: { side: 'top' | 'bottom' }) {
  // Arrow Y-flip for `data-side="top"` (Radix flips it via CSS rotate;
  // here we precompute the SVG path direction so vanilla has no runtime
  // dependency on transform values).
  const points = side === 'top' ? '0,0 30,0 15,10' : '0,10 30,10 15,0'
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
        marginTop: side === 'bottom' ? -1 : 0,
        marginBottom: side === 'top' ? -1 : 0,
      }}
    >
      <polygon points={points} />
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
       * Standard Radix usage — `<Tooltip open>` keeps the content
       * mounted. Buttons act as triggers. Popper positions the content
       * relative to each button. */}
      <div>
        <p className="text-xs mb-4 text-foreground-muted">React</p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 64,
            alignItems: 'flex-start',
          }}
        >
          <Tooltip open>
            <TooltipTrigger>
              <button type="button" className="st-btn st-btn--secondary st-btn--md">
                Top
              </button>
            </TooltipTrigger>
            <TooltipContent side="top">Tooltip on top</TooltipContent>
          </Tooltip>

          <Tooltip open>
            <TooltipTrigger>
              <button type="button" className="st-btn st-btn--secondary st-btn--md">
                Bottom
              </button>
            </TooltipTrigger>
            <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
          </Tooltip>
        </div>
      </div>

      {/* ===== Vanilla HTML side =====
       * Static boxes — no `data-state`, no `position: absolute`, no
       * transform-based positioning. The contract this proves is
       * "the tooltip-content + arrow render the right visual"; the
       * position is whatever document flow gives. */}
      <div>
        <p className="text-xs mb-4 text-foreground-muted">Vanilla HTML</p>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: 64, alignItems: 'flex-start' }}
        >
          <div>
            <div className="st-tooltip__content" role="tooltip" style={{ marginBottom: 4 }}>
              Tooltip on top
              <VanillaArrow side="top" />
            </div>
            <button type="button" className="st-btn st-btn--secondary st-btn--md">
              Top
            </button>
          </div>

          <div>
            <button type="button" className="st-btn st-btn--secondary st-btn--md">
              Bottom
            </button>
            <div className="st-tooltip__content" role="tooltip" style={{ marginTop: 4 }}>
              <VanillaArrow side="bottom" />
              Tooltip on bottom
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
}
