import type { Meta, StoryObj } from '@storybook/react-vite'
import { Check } from 'lucide-react'
import { Badge } from './Badge'

/**
 * Parity stories — React `<Badge>` and a hand-written vanilla `<div>` with
 * the matching `.st-badge` class chain must render pixel-identical. Backs
 * the VRT in `Badge.parity.vrt.spec.ts`.
 *
 * The vanilla side reproduces every tone × appearance combination plus an
 * icon-only case (`.st-badge--icon-only` modifier is conditionally emitted
 * by Badge.tsx outside CVA).
 */
const meta: Meta<typeof Badge> = {
  title: 'Components/lv1/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Badge>

// Inline `<Check>` SVG body — kept as raw markup so the vanilla half doesn't
// pull React / Lucide and can be lifted into a non-React project unchanged.
// Pinned to lucide-react@1.x (currently 1.14.0). When the dep is bumped,
// re-verify the path below still matches the Lucide source.
const CheckVanilla = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const VARIANTS = ['neutral', 'success', 'error', 'warning', 'info'] as const
const APPEARANCES = ['subtle', 'solid', 'outline'] as const

export const Parity: Story = {
  name: 'React vs Vanilla HTML',
  render: () => (
    <div className="grid grid-cols-2 gap-12">
      <div className="space-y-3">
        <p className="text-xs mb-2 text-foreground-muted">React</p>
        {APPEARANCES.map((appearance) => (
          <div key={appearance} className="flex flex-wrap items-center gap-3">
            <span className="w-20 text-xs font-mono text-foreground-muted">{appearance}</span>
            {VARIANTS.map((variant) => (
              <Badge key={`${variant}-${appearance}`} variant={variant} appearance={appearance}>
                {variant}
              </Badge>
            ))}
          </div>
        ))}
        <div className="flex items-center gap-3 pt-2">
          <span className="w-20 text-xs font-mono text-foreground-muted">sizes</span>
          <Badge size="sm">small</Badge>
          <Badge size="md">medium</Badge>
          <Badge size="lg">large</Badge>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-20 text-xs font-mono text-foreground-muted">icon</span>
          <Badge variant="success" icon={Check}>
            Done
          </Badge>
          <Badge variant="success" icon={Check} aria-label="Done" />
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>
        {APPEARANCES.map((appearance) => (
          <div key={appearance} className="flex flex-wrap items-center gap-3">
            <span className="w-20 text-xs font-mono text-foreground-muted">{appearance}</span>
            {VARIANTS.map((variant) => (
              <div
                key={`${variant}-${appearance}`}
                className={`st-badge st-badge--${variant} st-badge--${appearance} st-badge--md`}
              >
                {variant}
              </div>
            ))}
          </div>
        ))}
        <div className="flex items-center gap-3 pt-2">
          <span className="w-20 text-xs font-mono text-foreground-muted">sizes</span>
          <div className="st-badge st-badge--neutral st-badge--subtle st-badge--sm">small</div>
          <div className="st-badge st-badge--neutral st-badge--subtle st-badge--md">medium</div>
          <div className="st-badge st-badge--neutral st-badge--subtle st-badge--lg">large</div>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-20 text-xs font-mono text-foreground-muted">icon</span>
          <div className="st-badge st-badge--success st-badge--subtle st-badge--md">
            <CheckVanilla />
            Done
          </div>
          {/* role="img" mirrors the React `<Badge>` icon-only auto-role: a bare
              <div> (role generic) can't hold an accessible name, so aria-label
              would be dropped from the a11y tree without it. */}
          <div
            className="st-badge st-badge--success st-badge--subtle st-badge--md st-badge--icon-only"
            role="img"
            aria-label="Done"
          >
            <CheckVanilla />
          </div>
        </div>
      </div>
    </div>
  ),
}
