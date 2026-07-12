import type { Meta, StoryObj } from '@storybook/react-vite'
import { Lead, Note, PageTitle, SectionTitle } from './docs-ui'

const meta: Meta = {
  title: 'Tokens/Radius',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

/**
 * The primitive border-radius scale, sourced verbatim from
 * `src/core/tokens/spacing.css`.
 *
 * All steps are registered in the public-token registrar
 * (`src/styles/public-tokens.css`) and are listed in the public manifest.
 * `none` … `2xl` are the discrete steps; `full` (9999px) renders as a pill /
 * circle on any element narrower than it is tall.
 */
const PRIMITIVE_RADII = [
  { token: 'none', value: '0' },
  { token: 'sm', value: '0.125rem' },
  { token: 'md', value: '0.375rem' },
  { token: 'lg', value: '0.5rem' },
  { token: 'xl', value: '0.75rem' },
  { token: '2xl', value: '1rem' },
  { token: 'full', value: '9999px' },
] as const

/**
 * The semantic (用途別) radius tokens, sourced verbatim from
 * `src/core/tokens/spacing.css`. Each is a value-preserving alias over a
 * primitive step — no visual change, just an intent-named handle.
 *
 * `status` records whether the token is actually consumed by a component today
 * (`applied`) or defined for forward use but not yet wired to any surface
 * (`defined-only`). `--radius-control` / `--radius-surface` are define-only on
 * purpose: Button / Input / Dialog / Select content render square today, and
 * rounding them is a visual change deferred to a designer spike (#145). This is
 * an accepted, visualized state — see css-api.md "Define-only single-value
 * semantic tokens are allowed".
 */
const SEMANTIC_RADII = [
  {
    name: 'pill',
    alias: 'full',
    status: 'applied',
    usedBy: 'Badge / Radio / Switch',
  },
  {
    name: 'control',
    alias: 'md',
    status: 'defined-only',
    usedBy: '— (future: Button / Input — square today, #145)',
  },
  {
    name: 'surface',
    alias: 'lg',
    status: 'defined-only',
    usedBy: '— (future: Dialog / Select content — square today, #145)',
  },
] as const

const StatusBadge = ({ status }: { status: 'applied' | 'defined-only' }) =>
  status === 'applied' ? (
    <span className="rounded-full bg-success-subtle px-2 py-0.5 text-xs font-medium text-success">
      applied
    </span>
  ) : (
    <span className="rounded-full bg-warning-subtle px-2 py-0.5 text-xs font-medium text-warning">
      defined only
    </span>
  )

/** A surface tile whose corners are rounded by the supplied radius. */
const RadiusTile = ({ radius, label }: { radius: string; label: string }) => (
  <div className="flex flex-col items-center gap-3">
    <div
      className="h-24 w-24 bg-surface border border-border-strong"
      style={{ borderRadius: radius }}
      aria-hidden="true"
    />
    <span className="text-xs font-mono text-foreground">{label}</span>
  </div>
)

export const RadiusScale: Story = {
  name: 'Radius Scale',
  render: () => (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Radius</PageTitle>
      <Lead>
        Schatten expresses corner rounding with a discrete radius scale, defined in{' '}
        <code>src/core/tokens/spacing.css</code> and registered in the public-token registrar (
        <code>src/styles/public-tokens.css</code>). Reach for a <em>semantic</em> token (see{' '}
        <strong>Semantic tokens</strong>) in components, not the raw step.
      </Lead>

      <SectionTitle>Primitive scale</SectionTitle>
      <Note>
        The raw <code>--radius-*</code> steps. <code>--radius-full</code> is a sentinel (9999px)
        that rounds any element into a pill / circle; the others are fixed lengths.
      </Note>

      <div className="flex flex-wrap gap-8 p-8 bg-background">
        {PRIMITIVE_RADII.map((r) => (
          <RadiusTile key={r.token} radius={r.value} label={`--radius-${r.token}`} />
        ))}
      </div>

      <div className="mt-6 border border-border rounded-xl px-5">
        {PRIMITIVE_RADII.map((r) => (
          <div
            key={r.token}
            className="flex items-baseline gap-4 py-3 border-b border-border last:border-b-0"
          >
            <p className="w-28 shrink-0 text-sm font-medium text-foreground font-mono">
              --radius-{r.token}
            </p>
            <code className="flex-1 text-xs text-foreground-muted break-all">{r.value}</code>
          </div>
        ))}
      </div>
    </div>
  ),
}

export const RadiusSemantic: Story = {
  name: 'Semantic Tokens',
  render: () => (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Semantic tokens</PageTitle>
      <Lead>
        Components reference these intent-named tokens, not the raw scale. Each is a
        value-preserving alias over a primitive step — the table reads as{' '}
        <strong>purpose → which primitive → which component uses it</strong>. Tokens marked{' '}
        <em>defined only</em> exist for forward use but are not wired to any surface yet.
      </Lead>

      <div className="border border-border rounded-xl px-5">
        {SEMANTIC_RADII.map((r) => (
          <div
            key={r.name}
            className="flex items-center gap-4 py-4 border-b border-border last:border-b-0"
          >
            <div className="w-40 shrink-0 flex items-center justify-center py-2 bg-background">
              <div
                className="h-16 w-16 bg-surface border border-border-strong"
                style={{ borderRadius: `var(--radius-${r.name})` }}
                aria-hidden="true"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground font-mono">--radius-{r.name}</p>
              <p className="text-xs text-foreground-muted font-mono">= --radius-{r.alias}</p>
              <p className="text-xs text-foreground-muted mt-1">{r.usedBy}</p>
            </div>
            <div className="w-28 shrink-0">
              <StatusBadge status={r.status} />
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
}

const GuideRow = ({ surface, token, note }: { surface: string; token: string; note: string }) => (
  <div className="flex items-start gap-4 py-3 border-b border-border last:border-b-0">
    <p className="w-28 shrink-0 text-sm font-medium text-foreground">{surface}</p>
    <code className="w-40 shrink-0 text-xs text-foreground-muted">{token}</code>
    <p className="flex-1 text-sm text-foreground-muted">{note}</p>
  </div>
)

export const RadiusUsage: Story = {
  name: 'Usage Guide',
  render: () => (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Usage guide</PageTitle>
      <Lead>
        Pick a radius by what the surface <em>is</em>, not by an absolute corner size. The semantic
        token for each surface type already encodes the right step.
      </Lead>

      <SectionTitle>By surface type</SectionTitle>
      <div className="border border-border rounded-xl px-5 mb-8">
        <GuideRow
          surface="Pill"
          token="--radius-pill"
          note="Fully-rounded chips and toggles. (Alias of --radius-full; applied to Badge / Radio / Switch.)"
        />
        <GuideRow
          surface="Control"
          token="--radius-control"
          note="Buttons and text inputs. (Alias of --radius-md; not yet applied — Button / Input render square today.)"
        />
        <GuideRow
          surface="Surface"
          token="--radius-surface"
          note="Larger floating surfaces. (Alias of --radius-lg; not yet applied — Dialog / Select content render square today.)"
        />
      </div>

      <SectionTitle>Define-only is intentional</SectionTitle>
      <Note>
        <code>--radius-control</code> and <code>--radius-surface</code> are{' '}
        <strong>defined but not yet applied</strong>: today's components render square corners.
        Rounding them is a visual change deferred to a designer spike (#145), so the tokens wait for
        that consumer rather than being applied piecemeal. This mirrors <code>--shadow-card</code>{' '}
        in <strong>Tokens/Elevation</strong> — a single-value semantic token may sit define-only
        until its natural consumer lands.
      </Note>
    </div>
  ),
}
