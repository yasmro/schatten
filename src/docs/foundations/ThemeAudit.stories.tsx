import type { Meta, StoryObj } from '@storybook/react-vite'
import { useId } from 'react'
import { Badge } from '../../components/lv1/Badge'
import { Button } from '../../components/lv1/Button'
import { Callout } from '../../components/lv1/Callout'
// Load production seasonal CSS as a raw string. Rewriting `:root[data-theme=...]`
// → `.theme-audit-cell[data-theme=...]` is the single line that lets us scope a
// Special palette to a per-cell wrapper instead of `<html>`. The transform reuses
// the production source, so seasonal palette changes propagate to the audit story
// automatically — no parallel CSS to keep in sync.
import seasonalCssRaw from '../../themes/seasonal/themes.css?raw'

const SPECIALS = [
  { name: 'season--spring-early', label: 'Spring Early', jpn: '桜色・薄紅' },
  { name: 'season--spring-late', label: 'Spring Late', jpn: '若草色・萌黄' },
  { name: 'season--summer-early', label: 'Summer Early', jpn: '萌葱色・常磐色' },
  { name: 'season--summer-peak', label: 'Summer Peak', jpn: '朱色・柿色' },
  { name: 'season--autumn-early', label: 'Autumn Early', jpn: '浅葱色・薄藍' },
  { name: 'season--autumn-late', label: 'Autumn Late', jpn: '山吹色・飴色' },
  { name: 'season--winter-early', label: 'Winter Early', jpn: '銀鼠・薄墨' },
  { name: 'season--winter-deep', label: 'Winter Deep', jpn: '深紅・墨' },
] as const

const MODES = ['light', 'dark'] as const
type Mode = (typeof MODES)[number]
type SpecialName = (typeof SPECIALS)[number]['name']

const SCOPED_SEASONAL_CSS = seasonalCssRaw.replace(/:root\[/g, '.theme-audit-cell[')

function ScopedSeasonalStyles() {
  return <style>{SCOPED_SEASONAL_CSS}</style>
}

function ShowcaseRow() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="primary" size="sm">
        Primary
      </Button>
      <Button variant="secondary" size="sm">
        Secondary
      </Button>
      <Badge variant="neutral" appearance="solid">
        Neutral
      </Badge>
      <Badge variant="success" appearance="subtle">
        Success
      </Badge>
      <span className="size-4 rounded bg-theme-500" aria-hidden="true" />
      <span className="size-4 rounded bg-theme-200" aria-hidden="true" />
      <span className="size-4 rounded bg-theme-700" aria-hidden="true" />
    </div>
  )
}

function ThemeCell({ mode, special }: { mode: Mode; special: SpecialName | null }) {
  const isDark = mode === 'dark'
  return (
    <div
      className={`theme-audit-cell ${isDark ? 'dark' : ''} flex flex-col gap-3 rounded-lg border border-border bg-background p-4`}
      data-theme={special ?? undefined}
    >
      <div className="flex items-center justify-between text-xs">
        <span className="font-mono text-foreground-muted">{special ?? '(no theme)'}</span>
        <span className="rounded bg-surface px-1.5 py-0.5 font-mono text-foreground-subtle uppercase">
          {mode}
        </span>
      </div>
      <ShowcaseRow />
      <Callout variant="info" appearance="subtle" title="Info">
        Theme scale and Mode tokens combine here.
      </Callout>
    </div>
  )
}

const meta: Meta = {
  title: 'Theming/Theme Audit',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

/**
 * 8 Specials × 2 Modes = 16 cells. Each cell is a scoped theme context, so
 * seasonal palettes and dark mode compose visually without affecting the
 * surrounding Storybook chrome. Mode-owned tokens (background, foreground,
 * border) must shift between rows; Special-owned tokens (`--color-theme-*`)
 * must shift between columns. Any allowlist violation (e.g. a Special
 * overriding `--color-foreground`) shows up immediately here.
 */
export const Overview: Story = {
  name: 'Overview (16 patterns)',
  parameters: {
    docs: {
      description: {
        story:
          '8 Specials × 2 Modes = 16 patterns. Rows = Special (seasonal palette); columns = Mode (light/dark). Use this grid to verify orthogonality and to spot regressions when a new Special is added.',
      },
    },
  },
  render: () => (
    <div className="theme-audit-overview p-6">
      <ScopedSeasonalStyles />
      <header className="mx-auto mb-6 max-w-6xl">
        <h1 className="mb-2 font-bold text-3xl text-foreground">Theme Composition Audit</h1>
        <p className="text-foreground-muted text-sm leading-relaxed">
          Mode (light/dark) and Special (seasonal palette) are independent axes. This grid renders
          every combination so visual regressions across the matrix can be spotted in one screen.
        </p>
      </header>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-2">
        {SPECIALS.map((s) => (
          <div key={s.name} className="contents">
            <div className="col-span-2 mt-4 flex items-baseline gap-2 first:mt-0">
              <h2 className="font-semibold text-base text-foreground">{s.label}</h2>
              <span className="text-foreground-muted text-xs">{s.jpn}</span>
              <span className="ml-auto font-mono text-foreground-subtle text-xs">{s.name}</span>
            </div>
            {MODES.map((m) => (
              <ThemeCell key={`${s.name}-${m}`} mode={m} special={s.name} />
            ))}
          </div>
        ))}
      </div>
    </div>
  ),
}

/**
 * Renders the showcase for one Special × one Mode at a time, both selected via
 * argTypes. The Storybook Theme / Season toolbar is intentionally bypassed
 * here — this story is for inspecting a single combination in isolation, and
 * the VRT spec drives the 16 patterns by varying these args via the URL
 * (`&args=special:...;mode:...`).
 */
export const PerSpecial: Story = {
  name: 'Per Special',
  argTypes: {
    special: {
      description: 'Which Special palette to apply on this story.',
      control: 'select',
      options: ['none', ...SPECIALS.map((s) => s.name)],
      table: {
        type: { summary: `${SPECIALS.map((s) => `"${s.name}"`).join(' | ')} | "none"` },
        defaultValue: { summary: 'none' },
      },
    },
    mode: {
      description: 'Mode for this story (independent of the toolbar).',
      control: 'select',
      options: ['light', 'dark'],
      table: {
        type: { summary: '"light" | "dark"' },
        defaultValue: { summary: 'light' },
      },
    },
  },
  args: {
    special: 'none',
    mode: 'light',
  },
  render: (args) => {
    const { special, mode } = args as { special: string; mode: Mode }
    return (
      <div className="p-6">
        <ScopedSeasonalStyles />
        <div className="mx-auto max-w-3xl">
          <ThemeCell mode={mode} special={special === 'none' ? null : (special as SpecialName)} />
        </div>
      </div>
    )
  },
}

const CASCADE_TOKENS = [
  { name: '--color-theme-500', owner: 'Special', purpose: 'Theme scale mid-tone' },
  { name: '--color-theme-200', owner: 'Special', purpose: 'Theme scale tint' },
  { name: '--color-background', owner: 'Mode', purpose: 'Page background' },
  { name: '--color-surface', owner: 'Mode', purpose: 'Card / container' },
  { name: '--color-foreground', owner: 'Mode', purpose: 'Primary text' },
  { name: '--color-border', owner: 'Mode', purpose: 'Default border' },
  {
    name: '--color-surface-disabled',
    owner: 'Mode',
    purpose: 'Disabled (Specials must not override)',
  },
  { name: '--color-info', owner: 'Pinned', purpose: 'Pinned to blue; never moves with Special' },
] as const

const CASCADE_SCENARIOS = [
  { id: 'l-none', label: 'light · (none)', mode: 'light', special: null },
  { id: 'l-spring', label: 'light · spring-early', mode: 'light', special: 'season--spring-early' },
  { id: 'd-none', label: 'dark · (none)', mode: 'dark', special: null },
  { id: 'd-spring', label: 'dark · spring-early', mode: 'dark', special: 'season--spring-early' },
] as const

function CascadeTable() {
  const labelId = useId()

  return (
    <div>
      <h2 id={labelId} className="mb-2 font-semibold text-foreground text-xl">
        Cascade verification
      </h2>
      <p className="mb-4 text-foreground-muted text-sm leading-relaxed">
        Each column is a sample point: a wrapper with the indicated Mode class and{' '}
        <code className="rounded bg-surface-hover px-1 font-mono">data-theme</code>. Per the
        two-axis model, Mode-owned tokens (background, foreground, border, disabled) must change
        between the light/dark columns; Special-owned tokens (
        <code className="rounded bg-surface-hover px-1 font-mono">--color-theme-*</code>) must
        change between the (none) / (spring-early) columns;{' '}
        <code className="rounded bg-surface-hover px-1 font-mono">--color-info</code> must remain
        pinned to blue everywhere.
      </p>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table aria-labelledby={labelId} className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-surface-hover text-left">
              <th className="px-3 py-2 font-mono font-semibold text-foreground">token</th>
              <th className="px-3 py-2 font-semibold text-foreground">owner</th>
              {CASCADE_SCENARIOS.map((s) => (
                <th key={s.id} className="px-3 py-2 font-mono text-foreground text-xs">
                  {s.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {CASCADE_TOKENS.map((t) => (
              <tr key={t.name} className="border-border border-t">
                <td className="px-3 py-2 font-mono text-foreground text-xs">{t.name}</td>
                <td className="px-3 py-2">
                  <span
                    className={`rounded px-1.5 py-0.5 font-mono text-xs ${
                      t.owner === 'Special'
                        ? 'bg-theme-100 text-theme-900'
                        : t.owner === 'Mode'
                          ? 'bg-info-subtle text-info'
                          : 'bg-warning-subtle text-warning'
                    }`}
                  >
                    {t.owner}
                  </span>
                  <div className="text-foreground-muted text-xs">{t.purpose}</div>
                </td>
                {CASCADE_SCENARIOS.map((s) => (
                  <td key={s.id} className="px-3 py-2">
                    <div
                      className={`theme-audit-cell ${s.mode === 'dark' ? 'dark' : ''} inline-flex items-center gap-2 rounded border border-border bg-background p-1`}
                      data-theme={s.special ?? undefined}
                    >
                      <span
                        className="inline-block size-5 rounded border border-border"
                        style={{ background: `var(${t.name})` }}
                        aria-hidden="true"
                      />
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/**
 * For each canonical token, renders a color swatch inside a scoped wrapper
 * (Mode class + `data-theme`) across four scenarios — light/no-Special,
 * light/spring-early, dark/no-Special, dark/spring-early. The browser's CSS
 * cascade resolves `var(--color-X)` per scenario, so the swatch colors
 * empirically prove which axis each token follows: Special-owned tokens shift
 * between the (none) and (spring-early) columns; Mode-owned tokens shift
 * between the light and dark columns; `--color-info` stays pinned to blue.
 */
export const CascadeVerification: Story = {
  name: 'Cascade Verification',
  render: () => (
    <div className="p-6">
      <ScopedSeasonalStyles />
      <div className="mx-auto max-w-5xl">
        <CascadeTable />
      </div>
    </div>
  ),
}
