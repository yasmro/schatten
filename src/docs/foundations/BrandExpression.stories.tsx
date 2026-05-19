import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ReactNode } from 'react'
import { Badge } from '../../components/lv1/Badge'
import { Button } from '../../components/lv1/Button'
import { Callout } from '../../components/lv1/Callout'
// Reuse the production seasonal CSS verbatim. Rewriting `:root[data-theme=...]`
// → `.brand-expression-cell[data-theme=...]` scopes each Special palette to a
// per-cell wrapper instead of `<html>`, so the page can show several Specials
// at once. Mirrors the technique in ThemeAudit.stories.tsx.
import seasonalCssRaw from '../../themes/seasonal/themes.css?raw'

const SCOPED_SEASONAL_CSS = seasonalCssRaw.replace(/:root\[/g, '.brand-expression-cell[')

function ScopedSeasonalStyles() {
  return <style>{SCOPED_SEASONAL_CSS}</style>
}

type Mode = 'light' | 'dark'

/**
 * A theming context wrapper. The `dark` class drives Mode-owned tokens and the
 * optional `data-theme` drives the Special (seasonal) theme scale — both
 * scoped to this subtree so multiple combinations can coexist on one page.
 */
function Cell({ mode, special, children }: { mode: Mode; special?: string; children: ReactNode }) {
  return (
    <div
      className={`brand-expression-cell ${mode === 'dark' ? 'dark' : ''} flex-1 rounded-lg border border-border bg-background p-4`}
      data-theme={special}
    >
      <div className="mb-3 flex items-center gap-2 text-xs">
        <span className="rounded bg-surface px-1.5 py-0.5 font-mono text-foreground-subtle uppercase">
          {mode}
        </span>
        {special && <span className="font-mono text-foreground-subtle">{special}</span>}
      </div>
      {children}
    </div>
  )
}

/** Renders the same content side by side in a light Cell and a dark Cell. */
function DualMode({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3 lg:flex-row">
      <Cell mode="light">{children}</Cell>
      <Cell mode="dark">{children}</Cell>
    </div>
  )
}

function Section({
  index,
  title,
  children,
}: {
  index: number
  title: string
  children: ReactNode
}) {
  return (
    <section className="mt-8 first:mt-0">
      <h2 className="mb-1 flex items-baseline gap-2 font-semibold text-foreground text-xl">
        <span className="font-mono text-foreground-subtle text-sm">
          {String(index).padStart(2, '0')}
        </span>
        {title}
      </h2>
      {children}
    </section>
  )
}

/* ── Channel 1 — brand-named tokens ────────────────────────────────── */

function BrandSwatches() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="flex flex-col gap-0.5 rounded-md bg-vermillion p-3">
        <span className="font-semibold text-sm text-vermillion-foreground">朱 Vermillion</span>
        <span className="font-mono text-vermillion-foreground text-xs opacity-90">
          bg-vermillion
        </span>
      </div>
      <div className="flex flex-col gap-0.5 rounded-md bg-indigo p-3">
        <span className="font-semibold text-indigo-foreground text-sm">藍 Indigo</span>
        <span className="font-mono text-indigo-foreground text-xs opacity-90">bg-indigo</span>
      </div>
    </div>
  )
}

/* ── Channel 2 — Pattern A (Button) ────────────────────────────────── */

const BUTTON_VARIANTS = ['primary', 'secondary', 'tertiary', 'destructive', 'link'] as const

function PatternAButtons() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        {BUTTON_VARIANTS.map((variant) => (
          <Button key={variant} variant={variant} size="sm">
            {variant}
          </Button>
        ))}
      </div>
      {/* `inverted` is designed for placement on a saturated surface. */}
      <div className="flex items-center gap-2 rounded-md bg-solid p-2">
        <span className="text-solid-foreground text-xs">on bg-solid →</span>
        <Button variant="inverted" size="sm">
          inverted
        </Button>
      </div>
    </div>
  )
}

/* ── Channel 3 — Pattern B (Badge / Callout) ───────────────────────── */

const TONES = ['neutral', 'success', 'error', 'warning', 'info'] as const

function PatternBSurfaces() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-1.5">
        {TONES.map((tone) => (
          <Badge key={tone} variant={tone} appearance="solid">
            {tone}
          </Badge>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {TONES.map((tone) => (
          <Badge key={tone} variant={tone} appearance="subtle">
            {tone}
          </Badge>
        ))}
      </div>
      <Callout variant="info" appearance="subtle" title="No accent tone">
        Pattern B tones are state-only — brand emphasis flows through the Special layer below.
      </Callout>
    </div>
  )
}

/* ── Channel 4 — the Special theme layer ───────────────────────────── */

const BRAND_SPECIALS = [
  { name: undefined, label: '(no Special)' },
  { name: 'season--spring-early', label: 'spring-early · 桜色' },
  { name: 'season--summer-peak', label: 'summer-peak · 朱色' },
  { name: 'season--winter-early', label: 'winter-early · 薄藍' },
] as const

// Literal class strings — Tailwind's JIT scanner cannot see `bg-theme-${n}`.
const THEME_SHADES = [
  'bg-theme-100',
  'bg-theme-300',
  'bg-theme-500',
  'bg-theme-700',
  'bg-theme-900',
] as const

function ThemeScaleStrip() {
  return (
    <div className="flex flex-col gap-2">
      {BRAND_SPECIALS.map((s) => (
        <Cell key={s.label} mode="light" special={s.name}>
          <div className="flex items-center gap-3">
            <span className="w-40 shrink-0 font-mono text-foreground-muted text-xs">{s.label}</span>
            <div className="flex gap-1">
              {THEME_SHADES.map((shade) => (
                <span key={shade} className={`size-7 rounded ${shade}`} aria-hidden="true" />
              ))}
            </div>
            <Badge variant="neutral" appearance="outline" className="ml-auto">
              <span className="size-2.5 rounded-full bg-theme-500" aria-hidden="true" />
              bg-theme-500
            </Badge>
          </div>
        </Cell>
      ))}
    </div>
  )
}

const meta: Meta = {
  title: 'Foundation/BrandExpression',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

/**
 * One-screen synthesis of how Schatten surfaces brand color — the deliverable
 * of the v0.8.0 brand-expression release (#206, orchestrating #181 / #185).
 *
 * Brand color reaches the UI through two deliberate channels, never by
 * accident:
 *
 * 1. **Brand-named tokens** (`--color-vermillion` / `--color-indigo`) — opt-in,
 *    consumed directly (`bg-vermillion`, `bg-indigo`) for explicit emphasis.
 *    They are not wired into any component default.
 * 2. **The Special theme layer** — `data-theme="…"` retunes `--color-theme-*`,
 *    so every component that consumes `bg-theme-*` shifts palette with no
 *    code change. Pattern B (Badge / Callout / Toast) has no `accent` tone, so
 *    its brand expression flows entirely through this layer.
 *
 * Pattern A (Button) and Pattern B render here under both Modes so the base
 * layer (Mode) and the expressive layer (Special) can be inspected together.
 */
export const Overview: Story = {
  name: 'Overview',
  parameters: {
    docs: {
      description: {
        story:
          'Brand-named tokens, Pattern A, Pattern B and the Special theme layer on one screen, each rendered in light and dark. See theme-architecture.md for the Mode × Special model.',
      },
    },
  },
  render: () => (
    <div className="p-6">
      <ScopedSeasonalStyles />
      <div className="mx-auto max-w-5xl">
        <header className="mb-6">
          <h1 className="mb-2 font-bold text-3xl text-foreground">Brand Expression</h1>
          <p className="text-foreground-muted text-sm leading-relaxed">
            朱 (vermillion) and 藍 (indigo) are the Schatten brand colors. This page shows the two
            channels they reach the UI through, alongside Pattern A / Pattern B components under
            both Modes.
          </p>
        </header>

        <Section index={1} title="Brand-named tokens — 朱 / 藍">
          <p className="mb-3 text-foreground-muted text-sm">
            Direct, opt-in emphasis. Same hue in light and dark; only the shade shifts (
            <code className="rounded bg-surface-hover px-1 font-mono text-xs">-600</code> →{' '}
            <code className="rounded bg-surface-hover px-1 font-mono text-xs">-400</code>) to keep
            the <code className="rounded bg-surface-hover px-1 font-mono text-xs">-foreground</code>{' '}
            pairing above WCAG AA.
          </p>
          <DualMode>
            <BrandSwatches />
          </DualMode>
        </Section>

        <Section index={2} title="Pattern A — Button (role-based)">
          <p className="mb-3 text-foreground-muted text-sm">
            Single-axis{' '}
            <code className="rounded bg-surface-hover px-1 font-mono text-xs">variant</code> roles.{' '}
            <code className="rounded bg-surface-hover px-1 font-mono text-xs">primary</code> carries
            the main interactive fill (
            <code className="rounded bg-surface-hover px-1 font-mono text-xs">--color-solid</code>).
          </p>
          <DualMode>
            <PatternAButtons />
          </DualMode>
        </Section>

        <Section index={3} title="Pattern B — Badge / Callout (tone × appearance)">
          <p className="mb-3 text-foreground-muted text-sm">
            Two-axis state surfaces. Tones are state-only (
            <code className="rounded bg-surface-hover px-1 font-mono text-xs">neutral</code> /
            success / error / warning / info) — there is no brand{' '}
            <code className="rounded bg-surface-hover px-1 font-mono text-xs">accent</code> tone
            (removed in #108 / #205). Toast shares this vocabulary.
          </p>
          <DualMode>
            <PatternBSurfaces />
          </DualMode>
        </Section>

        <Section index={4} title="Special theme layer — brand-via-palette">
          <p className="mb-3 text-foreground-muted text-sm">
            A Special overrides only{' '}
            <code className="rounded bg-surface-hover px-1 font-mono text-xs">--color-theme-*</code>
            . Components consuming{' '}
            <code className="rounded bg-surface-hover px-1 font-mono text-xs">bg-theme-*</code> pick
            up the palette automatically — this is Pattern B&apos;s brand-expression path. See
            Foundation/ThemeAudit for the full 8 × 2 matrix.
          </p>
          <ThemeScaleStrip />
        </Section>
      </div>
    </div>
  ),
}

/**
 * Pattern A and Pattern B components at full vocabulary, in light and dark.
 * Where Overview is the narrative, this story is the reference matrix — every
 * Button role and every Badge tone × appearance, so a brand / Mode regression
 * in any single combination is visible in one screen.
 */
export const ComponentMatrix: Story = {
  name: 'Component Matrix',
  parameters: {
    docs: {
      description: {
        story:
          'Full Pattern A (Button) and Pattern B (Badge) vocabulary under both Modes — the reference matrix complementing the Overview narrative.',
      },
    },
  },
  render: () => (
    <div className="p-6">
      <ScopedSeasonalStyles />
      <div className="mx-auto max-w-5xl">
        <header className="mb-6">
          <h1 className="mb-2 font-bold text-3xl text-foreground">Component Matrix</h1>
          <p className="text-foreground-muted text-sm leading-relaxed">
            Pattern A and Pattern B at full vocabulary, light and dark.
          </p>
        </header>

        <Section index={1} title="Button — all roles">
          <DualMode>
            <div className="flex flex-wrap items-center gap-2">
              {(['primary', 'secondary', 'tertiary', 'destructive', 'link'] as const).map((v) => (
                <Button key={v} variant={v}>
                  {v}
                </Button>
              ))}
            </div>
          </DualMode>
        </Section>

        <Section index={2} title="Badge — tone × appearance">
          <DualMode>
            <div className="flex flex-col gap-2">
              {(['solid', 'outline', 'subtle'] as const).map((appearance) => (
                <div key={appearance} className="flex flex-wrap items-center gap-1.5">
                  <span className="w-16 font-mono text-foreground-subtle text-xs">
                    {appearance}
                  </span>
                  {TONES.map((tone) => (
                    <Badge key={tone} variant={tone} appearance={appearance}>
                      {tone}
                    </Badge>
                  ))}
                </div>
              ))}
            </div>
          </DualMode>
        </Section>

        <Section index={3} title="Callout — tone × appearance">
          <DualMode>
            <div className="flex flex-col gap-2">
              {TONES.map((tone) => (
                <Callout key={tone} variant={tone} appearance="subtle" title={tone}>
                  {tone} callout — subtle appearance.
                </Callout>
              ))}
            </div>
          </DualMode>
        </Section>
      </div>
    </div>
  ),
}
