import type { Meta, StoryObj } from '@storybook/react-vite'
import { useEffect, useState } from 'react'
import { Lead, Note, PageTitle, SectionTitle } from './docs-ui'

const meta: Meta = {
  title: 'Tokens/Motion',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

/**
 * The shared enter/exit duration scale, sourced verbatim from
 * `src/core/tokens/animation.css`. Three perceptually-distinct steps
 * (fast 100ms / base 150ms / slow 200ms) registered in the public-token
 * registrar (`src/styles/public-tokens.css`) and listed in the public manifest.
 *
 * `motion` is the semantic alias (`--motion-*`) layered over each step; `use`
 * is the intent the step is reached for. The literal `value` is pinned against
 * `animation.css` by `Motion.drift.test.ts` (the tiles below resolve `var()`,
 * but the printed table is a hand-copy with no other source of truth).
 */
const DURATION_SCALE = [
  { token: 'fast', value: '100ms', motion: 'quick', use: 'Popover-tier exit' },
  { token: 'base', value: '150ms', motion: 'base', use: 'Popover-tier enter, overlay-tier exit' },
  { token: 'slow', value: '200ms', motion: 'expressive', use: 'Overlay-tier enter, feedback' },
] as const

/**
 * The easing curves, sourced verbatim from `src/core/tokens/animation.css`.
 * `value` is pinned against the CSS by `Motion.drift.test.ts`.
 */
const EASING_SCALE = [
  {
    token: 'smooth-out',
    value: 'cubic-bezier(0.22, 1, 0.36, 1)',
    use: 'Enter — reaches a readable state early',
  },
  { token: 'in', value: 'ease-in', use: 'Exit — leaves without lingering' },
] as const

/**
 * The semantic (用途別) motion tokens, sourced verbatim from
 * `src/core/tokens/animation.css`. Each is an alias over a `--st-duration-*`
 * or `--st-ease-*` step; the alias mapping is pinned by `resolution.test.ts`,
 * and `motion-token-usage.test.ts` keeps component CSS on this layer.
 *
 * `quick` / `base` / `expressive` predate the tiers (#145). `base` and
 * `expressive` sit define-only — an accepted, visualized state (see
 * css-api.md "Define-only single-value semantic tokens are allowed").
 */
const SEMANTIC_MOTION = [
  {
    name: 'overlay-enter',
    alias: 'st-duration-slow',
    status: 'applied',
    usedBy: 'Dialog (overlay + content) — the modal tier',
  },
  { name: 'overlay-exit', alias: 'st-duration-base', status: 'applied', usedBy: 'Dialog' },
  {
    name: 'popover-enter',
    alias: 'st-duration-base',
    status: 'applied',
    usedBy: 'Popover, Select, Tooltip, DropdownMenu — every non-modal surface',
  },
  {
    name: 'popover-exit',
    alias: 'st-duration-fast',
    status: 'applied',
    usedBy: 'Popover, Select, Tooltip, DropdownMenu',
  },
  {
    name: 'ease-enter',
    alias: 'st-ease-smooth-out',
    status: 'applied',
    usedBy: 'Dialog, Popover, Select enter',
  },
  {
    name: 'ease-exit',
    alias: 'st-ease-in',
    status: 'applied',
    usedBy: 'Dialog, Popover, Select exit',
  },
  {
    name: 'feedback',
    alias: 'st-duration-slow',
    status: 'applied',
    usedBy: 'Hover / color / state changes, Switch thumb, Tabs indicator, Button loading',
  },
  { name: 'quick', alias: 'st-duration-fast', status: 'applied', usedBy: 'Table row hover' },
  { name: 'base', alias: 'st-duration-base', status: 'defined-only', usedBy: '—' },
  { name: 'expressive', alias: 'st-duration-slow', status: 'defined-only', usedBy: '—' },
] as const

const StatusBadge = ({ status }: { status: 'applied' | 'defined-only' }) =>
  status === 'applied' ? (
    <span className="rounded-full bg-success-subtle px-2 py-0.5 text-xs font-medium text-success-emphasis">
      applied
    </span>
  ) : (
    <span className="rounded-full bg-warning-subtle px-2 py-0.5 text-xs font-medium text-warning-emphasis">
      defined only
    </span>
  )

/**
 * Interactive timing demo. A single toggle drives all three knobs at once, so
 * the faster step settles visibly before the slower one — the difference a
 * still screenshot can't convey (which is why this page ships no VRT spec).
 *
 * Honours `prefers-reduced-motion` itself: under `reduce` the transition is
 * dropped and a notice is shown, practising design principle #1 below.
 */
const DurationDemo = () => {
  const [on, setOn] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <div className="rounded-xl border border-border p-6">
      <button
        type="button"
        onClick={() => setOn((v) => !v)}
        className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        {on ? 'Reset knobs' : 'Run transition'}
      </button>

      {reduced && (
        <Note>
          <code>prefers-reduced-motion: reduce</code> is active — the demo runs without a
          transition, so motion is never forced on you.
        </Note>
      )}

      <div className="mt-5 flex flex-col gap-4">
        {DURATION_SCALE.map((d) => (
          <div key={d.token} className="flex items-center gap-4">
            <span className="w-40 shrink-0 text-xs font-mono text-foreground">
              --st-duration-{d.token}
            </span>
            <div className="relative h-8 flex-1 overflow-hidden rounded-lg border border-border bg-surface">
              <div
                aria-hidden="true"
                className="absolute top-1 h-6 w-6 rounded bg-theme-500"
                style={{
                  left: on ? 'calc(100% - 1.75rem)' : '0.25rem',
                  transition: reduced ? 'none' : `left var(--st-duration-${d.token}) ease`,
                }}
              />
            </div>
            <span className="w-16 shrink-0 text-right text-xs font-mono text-foreground-muted tabular-nums">
              {d.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export const DurationScale: Story = {
  name: 'Duration Scale',
  render: () => (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Motion</PageTitle>
      <Lead>
        Schatten centralizes enter/exit timing in a three-step duration scale, defined in{' '}
        <code>src/core/tokens/animation.css</code> and registered as part of the public token
        surface via the public-token registrar (<code>src/styles/public-tokens.css</code>).
        Components reference the scale — or its semantic <code>--motion-*</code> aliases (see{' '}
        <strong>Semantic Tokens</strong>) — never a hardcoded millisecond value.
      </Lead>

      <SectionTitle>Duration scale</SectionTitle>
      <Note>
        The raw <code>--st-duration-*</code> steps. <code>fast</code> / <code>base</code> /{' '}
        <code>slow</code> are perceptually distinct; reach for a semantic <code>--motion-*</code>{' '}
        alias in usage. Press <strong>Run transition</strong> to feel the difference — the faster
        knob settles before the slower one.
      </Note>

      <DurationDemo />

      <div className="mt-6 border border-border rounded-xl px-5">
        {DURATION_SCALE.map((d) => (
          <div
            key={d.token}
            className="flex items-center gap-4 py-3 border-b border-border last:border-b-0"
          >
            <p className="w-44 shrink-0 text-sm font-medium text-foreground font-mono">
              --st-duration-{d.token}
            </p>
            <code className="w-16 shrink-0 text-xs text-foreground-muted tabular-nums">
              {d.value}
            </code>
            <code className="w-32 shrink-0 text-xs text-foreground-muted">
              → --motion-{d.motion}
            </code>
            <p className="flex-1 text-sm text-foreground-muted">{d.use}</p>
          </div>
        ))}
      </div>

      <SectionTitle>Easing</SectionTitle>
      <Note>
        Enter/exit motion pairs a duration with one of two curves. They take the <code>--st-</code>{' '}
        prefix because Tailwind v4 already owns the bare <code>--ease-out</code> /{' '}
        <code>--ease-in</code> names with different curves.
      </Note>
      <div className="mt-6 border border-border rounded-xl px-5">
        {EASING_SCALE.map((e) => (
          <div
            key={e.token}
            className="flex items-center gap-4 py-3 border-b border-border last:border-b-0"
          >
            <p className="w-44 shrink-0 text-sm font-medium text-foreground font-mono">
              --st-ease-{e.token}
            </p>
            <code className="w-56 shrink-0 text-xs text-foreground-muted">{e.value}</code>
            <p className="flex-1 text-sm text-foreground-muted">{e.use}</p>
          </div>
        ))}
      </div>
    </div>
  ),
}

export const SemanticTokens: Story = {
  name: 'Semantic Tokens',
  render: () => (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Semantic tokens</PageTitle>
      <Lead>
        Components reference these intent-named tokens, never the raw scales. Each is an alias over
        a <code>--st-duration-*</code> or <code>--st-ease-*</code> step — the table reads as{' '}
        <strong>purpose → which step → which component uses it</strong>. Enter/exit timing comes in
        two tiers, chosen by whether the surface is modal: <code>overlay</code> for modal surfaces,{' '}
        <code>popover</code> for every other surface that opens and closes.
      </Lead>

      <div className="border border-border rounded-xl px-5">
        {SEMANTIC_MOTION.map((m) => (
          <div
            key={m.name}
            className="flex items-center gap-4 py-4 border-b border-border last:border-b-0"
          >
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground font-mono">--motion-{m.name}</p>
              <p className="text-xs text-foreground-muted font-mono">= --{m.alias}</p>
              <p className="text-xs text-foreground-muted mt-1">{m.usedBy}</p>
            </div>
            <div className="w-28 shrink-0">
              <StatusBadge status={m.status} />
            </div>
          </div>
        ))}
      </div>

      <SectionTitle>Define-only is intentional</SectionTitle>
      <Note>
        <code>--motion-base</code> and <code>--motion-expressive</code> are{' '}
        <strong>defined but not applied</strong>: they predate the enter/exit tiers, and their old
        consumers moved to the tier tokens. They keep their names (renaming a public variable is a
        major change) and wait for a natural consumer. This mirrors <code>--radius-control</code> in{' '}
        <strong>Tokens/Radius</strong> and <code>--shadow-card</code> in{' '}
        <strong>Tokens/Elevation</strong> — a single-value semantic token may sit define-only (see
        css-api.md).
      </Note>
    </div>
  ),
}

const GuideRow = ({ surface, token, note }: { surface: string; token: string; note: string }) => (
  <div className="flex items-start gap-4 py-3 border-b border-border last:border-b-0">
    <p className="w-28 shrink-0 text-sm font-medium text-foreground">{surface}</p>
    <code className="w-44 shrink-0 text-xs text-foreground-muted">{token}</code>
    <p className="flex-1 text-sm text-foreground-muted">{note}</p>
  </div>
)

export const UsageGuide: Story = {
  name: 'Usage Guide',
  render: () => (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Usage guide</PageTitle>
      <Lead>
        Pick a duration by what the motion is <em>for</em>, not by an absolute millisecond count.
        The named step already encodes the right pace.
      </Lead>

      <SectionTitle>By intent</SectionTitle>
      <div className="border border-border rounded-xl px-5 mb-8">
        <GuideRow
          surface="Modal enter / exit"
          token="--motion-overlay-*"
          note="Dialog (and a future Sheet): surfaces that stop input. 200ms in, 150ms out."
        />
        <GuideRow
          surface="Other surfaces"
          token="--motion-popover-*"
          note="Popover, Select, Tooltip, DropdownMenu — every non-modal surface that opens and closes. 150ms in, 100ms out."
        />
        <GuideRow
          surface="Enter / exit curve"
          token="--motion-ease-enter / -exit"
          note="Pair with either tier. Enter reaches a readable state early; exit leaves without lingering."
        />
        <GuideRow
          surface="Feedback"
          token="--motion-feedback"
          note="Hover, color and state changes, the Switch thumb, the Tabs indicator. 200ms."
        />
        <GuideRow
          surface="Looping"
          token="--st-spinner-*"
          note="Continuous loops (spinner ripple) use component-scoped timing, distinct from the enter/exit tiers."
        />
      </div>

      <SectionTitle>Design principles</SectionTitle>
      <Note>
        <strong>Pick by intent, not by number.</strong> Choose the tier the surface belongs to —
        modal or not — and let the token carry the milliseconds. Component CSS references only{' '}
        <code>--motion-*</code>, never <code>--st-duration-*</code> / <code>--st-ease-*</code>, and
        never a literal time (<code>motion-token-usage.test.ts</code> checks all three).
      </Note>
      <Note>
        <strong>Open surfaces fade; they do not slide, zoom or blur.</strong> Dialog, Popover and
        Select use opacity only. A zoom of 0.97 was too small to see, and blur read as a lens /
        depth effect rather than ink on paper (#630). Tooltip keeps its short slide.
      </Note>
      <Note>
        <strong>Exit is shorter than enter.</strong> Closing should never hold the user up.
      </Note>
      <Note>
        <strong>Respect prefers-reduced-motion.</strong> Every component with an enter/exit
        animation turns it off under <code>@media (prefers-reduced-motion: reduce)</code>; the
        Switch thumb jumps instead of sliding. New motion must do the same.
      </Note>
      <Note>
        <strong>Always repeat the value as a fallback.</strong> Write{' '}
        <code>var(--motion-feedback, 200ms)</code>, not <code>var(--motion-feedback)</code>: the
        per-component CSS subpaths ship no tokens.
      </Note>
      <Note>
        <strong>Loop animations live in component CSS.</strong> Continuous loops (spinner) are
        authored as <code>@keyframes</code> in the component's own <code>.css</code>, not as a
        motion token — see component-architecture §7.
      </Note>

      <SectionTitle>Removed: --transition-*</SectionTitle>
      <Note>
        The older <code>--transition-fast</code> / <code>-normal</code> / <code>-slow</code> and{' '}
        <code>tokens.transition.*</code> / <code>TransitionToken</code> were deprecated in v0.10.0
        and <strong>removed</strong> in v0.11.0. Use <code>--motion-*</code> (or{' '}
        <code>tokens.motion.*</code>) instead. Note the old values bundled an easing (e.g.{' '}
        <code>150ms ease</code>) while the motion tokens are duration-only — specify your own
        easing: <code>fast</code> → <code>--motion-base</code>, <code>normal</code> →{' '}
        <code>--motion-expressive</code>, <code>slow</code> (300ms) has no direct step.
      </Note>
    </div>
  ),
}
