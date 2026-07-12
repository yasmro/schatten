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
  { token: 'fast', value: '100ms', motion: 'quick', use: 'Hover, exit transitions' },
  { token: 'base', value: '150ms', motion: 'base', use: 'Default, enter transitions' },
  { token: 'slow', value: '200ms', motion: 'expressive', use: 'Dialog / drawer enter' },
] as const

/**
 * The semantic (用途別) motion tokens, sourced verbatim from
 * `src/core/tokens/animation.css`. Each is a value-preserving alias over a
 * `--st-duration-*` step — no new timing, just an intent-named handle. The
 * alias mapping is pinned by `resolution.test.ts`.
 *
 * All three are `defined-only`: no component references `--motion-*` yet
 * (hover transitions are still hardcoded). This is an accepted, visualized
 * state — see css-api.md "Define-only single-value semantic tokens are
 * allowed" and the same treatment of `--radius-control` / `--shadow-card`.
 */
const SEMANTIC_MOTION = [
  {
    name: 'quick',
    alias: 'fast',
    status: 'defined-only',
    usedBy: '— (future: hover feedback — hardcoded today)',
  },
  {
    name: 'base',
    alias: 'base',
    status: 'defined-only',
    usedBy: '— (future: default interactions — hardcoded today)',
  },
  {
    name: 'expressive',
    alias: 'slow',
    status: 'defined-only',
    usedBy: '— (future: dialog / drawer — enter uses --st-duration-slow today)',
  },
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
    </div>
  ),
}

export const SemanticTokens: Story = {
  name: 'Semantic Tokens',
  render: () => (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Semantic tokens</PageTitle>
      <Lead>
        Components reference these intent-named tokens, not the raw scale. Each is a
        value-preserving alias over a <code>--st-duration-*</code> step — the table reads as{' '}
        <strong>purpose → which duration step → which component uses it</strong>. All three are{' '}
        <em>defined only</em> today: nothing references <code>--motion-*</code> yet.
      </Lead>

      <div className="border border-border rounded-xl px-5">
        {SEMANTIC_MOTION.map((m) => (
          <div
            key={m.name}
            className="flex items-center gap-4 py-4 border-b border-border last:border-b-0"
          >
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground font-mono">--motion-{m.name}</p>
              <p className="text-xs text-foreground-muted font-mono">= --st-duration-{m.alias}</p>
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
        The <code>--motion-*</code> aliases are <strong>defined but not yet applied</strong>:
        component hover transitions are still hardcoded, and unifying them onto the motion scale is
        a separate spike. The tokens wait for that consumer rather than being wired in piecemeal.
        This mirrors <code>--radius-control</code> in <strong>Tokens/Radius</strong> and{' '}
        <code>--shadow-card</code> in <strong>Tokens/Elevation</strong> — a single-value semantic
        token may sit define-only until its natural consumer lands (see css-api.md).
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
          surface="Hover / exit"
          token="--motion-quick"
          note="Lightweight feedback that should feel near-instant. (Alias of --st-duration-fast.)"
        />
        <GuideRow
          surface="Default / enter"
          token="--motion-base"
          note="The default for most enter transitions and focus rings. (Alias of --st-duration-base.)"
        />
        <GuideRow
          surface="Dialog / drawer"
          token="--motion-expressive"
          note="Larger surfaces sliding in; slightly slower reads as deliberate. (Alias of --st-duration-slow.)"
        />
        <GuideRow
          surface="Looping"
          token="--st-spinner-*"
          note="Continuous loops (spinner ripple) use component-scoped timing, distinct from the enter/exit scale."
        />
      </div>

      <SectionTitle>Design principles</SectionTitle>
      <Note>
        <strong>Respect prefers-reduced-motion.</strong> Every animated component disables motion
        under <code>@media (prefers-reduced-motion: reduce)</code> — see <code>Toast.css</code>,{' '}
        <code>Dialog.css</code>, <code>Tooltip.css</code>. New motion must do the same; the demo on
        the <strong>Duration Scale</strong> page does it too.
      </Note>
      <Note>
        <strong>Loop animations live in component CSS.</strong> Continuous loops (spinner) are
        authored as <code>@keyframes</code> in the component's own <code>.css</code>, not as a
        transition token — see component-architecture §7.
      </Note>
      <Note>
        <strong>Interactive feedback uses transition; enter/exit uses the scale.</strong> Reach for
        a <code>transition</code> on hover/focus state; reach for <code>--st-duration-*</code> on
        the mount/unmount keyframes.
      </Note>
      <Note>
        <strong>Don't animate without a reason.</strong> Motion should communicate a state change.
        If a transition doesn't help the user understand what changed, leave it out.
      </Note>

      <SectionTitle>Not yet tokenized</SectionTitle>
      <Note>
        Component <em>hover</em> transitions are still <strong>hardcoded</strong> today (e.g. Badge
        at 150ms, others at 200ms) and do not yet reference <code>--motion-*</code>. Folding them
        onto the motion scale is a separate spike. <em>Enter/exit</em> animations (Tooltip / Dialog
        / Toast) already consume <code>--st-duration-*</code>.
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
