import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ReactNode } from 'react'
import { Badge } from '../../components/lv1/Badge'
import { Button } from '../../components/lv1/Button'
import { Callout } from '../../components/lv1/Callout'
import { Field } from '../../components/lv1/Field'
import { Input } from '../../components/lv1/Input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/lv1/Select'
import { Text } from '../../components/lv1/Text'
import semanticCssRaw from '../../core/tokens/semantic.css?raw'
import { getCurrentSeason, type SeasonalThemeId } from '../../themes/seasonal'
import seasonalCssRaw from '../../themes/seasonal/themes.css?raw'
import { CodeBlock, Lead, Note, PageTitle, SectionTitle } from '../docs-ui'
// Per-cell theme scoping (seasonal palette rewrite + solid-family
// re-declaration against the substitution freeze) is shared with the
// Theme Audit story — see scoped-theme-css.ts for the mechanism.
// The `?raw` sources are injected here because Vitest resolves `?raw` CSS
// imports to an empty string (the drift test feeds readFileSync instead).
import { buildScopedThemeCss, SEASONAL_DISPLAY } from './scoped-theme-css'

const SHOWCASE_CSS = buildScopedThemeCss('.seasonal-showcase-cell', {
  semanticCss: semanticCssRaw,
  seasonalCss: seasonalCssRaw,
})

const MODES = ['light', 'dark'] as const
type Mode = (typeof MODES)[number]

const SEASON_IDS = SEASONAL_DISPLAY.map((s) => s.id)
const RAMP_RUNGS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const

function ScopedStyles() {
  return <style>{SHOWCASE_CSS}</style>
}

/**
 * A scoped theme context: `data-theme` + the re-declared solid family apply
 * only inside this wrapper, so eight seasons can sit on one screen without
 * touching `<html>`. Padding is left to the caller (the dashboard mockup
 * needs a full-bleed cell).
 */
function SeasonCell({
  mode,
  season,
  className = '',
  children,
}: {
  mode: Mode
  season: SeasonalThemeId | null
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={`seasonal-showcase-cell ${mode === 'dark' ? 'dark' : ''} rounded-lg border border-border bg-background ${className}`}
      data-theme={season ?? undefined}
    >
      {children}
    </div>
  )
}

/** The 11-rung theme ramp the active Special supplies. Decorative. */
function RampStrip() {
  return (
    <div className="flex gap-1" aria-hidden="true">
      {RAMP_RUNGS.map((rung) => (
        <span
          key={rung}
          className="h-5 flex-1 rounded-sm border border-border"
          style={{ backgroundColor: `var(--color-theme-${rung})` }}
          title={`theme-${rung}`}
        />
      ))}
    </div>
  )
}

/**
 * The payoff surface (#150): Button `primary` and the neutral × solid
 * Badge / Callout ride the seasonal ramp, while `destructive` stays pinned
 * to red — the moving / not-moving contrast is the point of the showcase.
 */
function SolidSample() {
  return (
    <div className="flex flex-col gap-3">
      <RampStrip />
      <div className="flex flex-wrap items-center gap-2">
        <Button variant="primary" size="sm">
          Primary
        </Button>
        <Button variant="secondary" size="sm">
          Secondary
        </Button>
        <Button variant="destructive" size="sm">
          Delete
        </Button>
        <Badge variant="neutral" appearance="solid">
          Neutral
        </Badge>
      </div>
      <Callout variant="neutral" appearance="solid" title="Seasonal surface">
        Solid surfaces ride the active seasonal ramp.
      </Callout>
    </div>
  )
}

const meta: Meta = {
  title: 'Theming/Seasonal Showcase',
  // Hidden from the sidebar while the Theming docs IA is being reworked.
  // File / story index / VRT (id-driven iframe URLs) stay live — `!dev`
  // only drops it from the dev sidebar. Remove the tag to restore.
  tags: ['!dev'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

/**
 * One card per season: the 11-rung ramp plus every solid surface, in both
 * Modes. All eight seasons land in a single screen, so this story doubles
 * as the one-snapshot VRT pin for "every season re-tints solid".
 */
export const EightSeasons: Story = {
  name: 'Eight Seasons',
  render: () => (
    <div className="p-6">
      <ScopedStyles />
      <div className="mx-auto max-w-6xl">
        <PageTitle>Seasonal Showcase</PageTitle>
        <Lead>
          Schatten ships eight seasonal palettes based on the 24 solar terms (二十四節気) and
          Japanese traditional colors. A Special supplies the theme ramp and the Mode picks the
          rungs, so every solid surface — Button primary, the neutral solid Badge and Callout —
          re-tints per season, while destructive red and info blue stay pinned.
        </Lead>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {SEASONAL_DISPLAY.map((s) => (
            <section key={s.id} className="flex flex-col gap-2 rounded-xl border border-border p-4">
              <header className="flex flex-wrap items-baseline gap-2">
                <h2 className="font-semibold text-foreground text-lg">{s.label}</h2>
                <span className="text-foreground-muted text-xs">
                  {s.term} · {s.colors}
                </span>
                <span className="ml-auto font-mono text-foreground-muted text-xs">{s.id}</span>
              </header>
              {MODES.map((m) => (
                <SeasonCell key={m} mode={m} season={s.id} className="p-4">
                  <SolidSample />
                </SeasonCell>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  ),
}

/**
 * Any two seasons, same component stack, side by side. Args bypass the
 * toolbar globals (like Theme Audit's Per Special) so the VRT spec can
 * drive the combination deterministically via the URL.
 */
export const SideBySide: Story = {
  name: 'Side by Side',
  argTypes: {
    seasonA: {
      description: 'Season applied to the left cell.',
      control: 'select',
      options: SEASON_IDS,
      table: {
        type: { summary: 'SeasonalThemeId' },
        defaultValue: { summary: 'season--spring-early' },
      },
    },
    seasonB: {
      description: 'Season applied to the right cell.',
      control: 'select',
      options: SEASON_IDS,
      table: {
        type: { summary: 'SeasonalThemeId' },
        defaultValue: { summary: 'season--winter-deep' },
      },
    },
    mode: {
      description: 'Mode for both cells (independent of the toolbar).',
      control: 'select',
      options: ['light', 'dark'],
      table: {
        type: { summary: '"light" | "dark"' },
        defaultValue: { summary: 'light' },
      },
    },
  },
  args: {
    seasonA: 'season--spring-early',
    seasonB: 'season--winter-deep',
    mode: 'light',
  },
  render: (args) => {
    const { seasonA, seasonB, mode } = args as {
      seasonA: SeasonalThemeId
      seasonB: SeasonalThemeId
      mode: Mode
    }
    return (
      <div className="p-6">
        <ScopedStyles />
        <div className="mx-auto max-w-5xl">
          <PageTitle>Side by Side</PageTitle>
          <Lead>
            Pick any two seasons and compare the identical component stack under each ramp. The
            default pair — spring-early (hue 12) vs winter-deep (hue 255) — is the widest hue
            contrast the eight palettes offer.
          </Lead>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {(
              [
                ['left', seasonA],
                ['right', seasonB],
              ] as const
            ).map(([slot, id]) => {
              const display = SEASONAL_DISPLAY.find((s) => s.id === id)
              return (
                <div key={slot} className="flex flex-col gap-2">
                  <header className="flex flex-wrap items-baseline gap-2">
                    <h2 className="font-semibold text-base text-foreground">{display?.label}</h2>
                    <span className="text-foreground-muted text-xs">{display?.colors}</span>
                    <span className="ml-auto font-mono text-foreground-muted text-xs">{id}</span>
                  </header>
                  <SeasonCell mode={mode} season={id} className="p-4">
                    <SolidSample />
                  </SeasonCell>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  },
}

const NAV_ITEMS = ['Overview', 'Reports', 'Audiences', 'Settings'] as const

const STATS = [
  { label: 'Sessions', value: '24.3k', delta: '+12.4%', tone: 'success' },
  { label: 'Sign-ups', value: '1,208', delta: '+3.1%', tone: 'success' },
  { label: 'Churn', value: '0.8%', delta: '-0.2%', tone: 'error' },
] as const

/**
 * A full dashboard built from lv1 components only. Seasonal accents flow
 * through `bg-solid` / `text-solid-foreground` (header mark, active nav
 * item, primary buttons, Pro badge) — nothing here hard-codes a seasonal
 * color. State surfaces (success / error deltas, the info Callout) stay
 * pinned by design. Deterministic on purpose: no dynamic data, no Spinner,
 * no Toast.
 */
function Dashboard() {
  return (
    <div className="flex min-h-[600px] flex-col">
      <header className="flex flex-wrap items-center gap-3 border-border border-b px-6 py-3">
        <span className="size-6 rounded bg-solid" aria-hidden="true" />
        <Text variant="heading" as="span" size="md">
          Schatten Analytics
        </Text>
        <Badge variant="neutral" appearance="solid">
          Pro
        </Badge>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="secondary" size="sm">
            Export
          </Button>
          <Button variant="primary" size="sm">
            New report
          </Button>
        </div>
      </header>
      <div className="flex flex-1">
        <nav aria-label="Dashboard sections" className="w-44 border-border border-r p-3">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item, i) => (
              <li key={item}>
                <a
                  href="#overview"
                  aria-current={i === 0 ? 'page' : undefined}
                  className={
                    i === 0
                      ? 'block rounded bg-solid px-3 py-1.5 font-medium text-sm text-solid-foreground'
                      : 'block rounded px-3 py-1.5 text-foreground-muted text-sm hover:bg-surface-hover'
                  }
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <main className="flex flex-1 flex-col gap-4 p-6">
          <Text variant="heading" as="h2" size="lg" id="overview">
            Overview
          </Text>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-start gap-1 rounded-lg border border-border bg-surface p-4"
              >
                <Text variant="label" as="span" size="sm" color="muted">
                  {stat.label}
                </Text>
                <Text variant="heading" as="span" size="xl">
                  {stat.value}
                </Text>
                <Badge variant={stat.tone} appearance="subtle">
                  {stat.delta}
                </Badge>
              </div>
            ))}
          </div>
          <Callout variant="info" appearance="subtle" title="Pinned colors">
            State colors stay put: info is always blue and destructive is always red, whichever
            season is active.
          </Callout>
          <section className="flex max-w-xl flex-col gap-3 rounded-lg border border-border bg-surface p-4">
            <Text variant="heading" as="h3" size="sm">
              New report
            </Text>
            <Field label="Report name">
              <Input placeholder="Q2 retention" />
            </Field>
            <Field label="Period">
              <Select defaultValue="quarter">
                <SelectTrigger>
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">Last week</SelectItem>
                  <SelectItem value="quarter">Last quarter</SelectItem>
                  <SelectItem value="year">Last year</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <div className="flex gap-2">
              <Button variant="primary" size="sm">
                Create
              </Button>
              <Button variant="tertiary" size="sm">
                Cancel
              </Button>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

/**
 * How a whole page wears one season. The args bypass the toolbar globals so
 * the VRT spec drives season × mode via the URL; the representative VRT
 * pair (spring-early / winter-deep) pins composition drift — per-season
 * color values are already pinned by Theme Audit's per-special snapshots.
 */
export const DashboardMockup: Story = {
  name: 'Dashboard Mockup',
  argTypes: {
    season: {
      description: 'Seasonal palette applied to the whole mockup.',
      control: 'select',
      options: ['none', ...SEASON_IDS],
      table: {
        type: { summary: 'SeasonalThemeId | "none"' },
        defaultValue: { summary: 'season--spring-early' },
      },
    },
    mode: {
      description: 'Mode for the mockup (independent of the toolbar).',
      control: 'select',
      options: ['light', 'dark'],
      table: {
        type: { summary: '"light" | "dark"' },
        defaultValue: { summary: 'light' },
      },
    },
  },
  args: {
    season: 'season--spring-early',
    mode: 'light',
  },
  render: (args) => {
    const { season, mode } = args as { season: string; mode: Mode }
    return (
      <div className="p-6">
        <ScopedStyles />
        <div className="mx-auto max-w-6xl">
          <PageTitle>Dashboard Mockup</PageTitle>
          <Lead>
            A complete page built from lv1 components, wearing one seasonal ramp. The season flows
            through the solid family only — switch the season arg and watch the header mark, active
            nav item, primary buttons and Pro badge re-tint while state colors hold still.
          </Lead>
          <SeasonCell
            mode={mode}
            season={season === 'none' ? null : (season as SeasonalThemeId)}
            className="overflow-hidden"
          >
            <Dashboard />
          </SeasonCell>
        </div>
      </div>
    )
  },
}

// Fixed default for the date control — `Date.now()` would make the render
// non-deterministic. Apr 1 resolves to spring-late in every timezone.
const AUTO_SEASON_DEFAULT_DATE = Date.UTC(2026, 3, 1)

/**
 * The auto-season demo: `getCurrentSeason(date)` maps a date onto the eight
 * solar-term periods. VRT skips this story — the season rendering is pinned
 * by Eight Seasons, and the date → season mapping is pinned by
 * `src/themes/seasonal/index.test.ts`.
 */
export const AutoSeason: Story = {
  name: 'Auto Season',
  argTypes: {
    date: {
      description: 'Date to resolve into a season. Set it to today to preview the live behavior.',
      control: 'date',
      table: { type: { summary: 'Date' } },
    },
    mode: {
      description: 'Mode for the preview cell (independent of the toolbar).',
      control: 'select',
      options: ['light', 'dark'],
      table: {
        type: { summary: '"light" | "dark"' },
        defaultValue: { summary: 'light' },
      },
    },
  },
  args: {
    date: AUTO_SEASON_DEFAULT_DATE,
    mode: 'light',
  },
  render: (args) => {
    const { date: raw, mode } = args as { date: number | string; mode: Mode }
    // The date control round-trips as a ms timestamp, but a URL-driven arg
    // can arrive as a string — numeric strings are timestamps, anything
    // else (e.g. an ISO date) goes to the Date constructor as-is.
    const date = new Date(
      typeof raw === 'string' ? (Number.isNaN(Number(raw)) ? raw : Number(raw)) : raw,
    )
    const season = getCurrentSeason(date)
    const id: SeasonalThemeId = `season--${season}`
    const display = SEASONAL_DISPLAY.find((s) => s.id === id)
    return (
      <div className="p-6">
        <ScopedStyles />
        <div className="mx-auto max-w-3xl">
          <PageTitle>Auto Season</PageTitle>
          <Lead>
            <code>getCurrentSeason(date)</code> maps any date onto the eight solar-term periods —
            drag the date control and watch the resolved palette change.
          </Lead>
          <div className="mb-4 flex flex-wrap items-baseline gap-2">
            <Text variant="heading" as="h2" size="md">
              {display?.label}
            </Text>
            <span className="text-foreground-muted text-sm">
              {display?.term} · {display?.colors}
            </span>
            <span className="ml-auto font-mono text-foreground-muted text-xs">{id}</span>
          </div>
          <SeasonCell mode={mode} season={id} className="p-4">
            <SolidSample />
          </SeasonCell>
          <SectionTitle>Wiring it up</SectionTitle>
          <Note>
            Browser: call <code>applySeasonTheme()</code> once on load. SSR: spread{' '}
            <code>getSeasonAttribute()</code> onto the root element so the attribute is there before
            first paint. With the React provider, pass <code>defaultSpecial="auto-seasonal"</code>{' '}
            instead.
          </Note>
          <CodeBlock>{`import { applySeasonTheme, getSeasonAttribute } from '@yasmro/schatten/themes/seasonal'
import { ThemeProvider } from '@yasmro/schatten/providers'

// Browser — sets data-theme="season--…" on <html>
applySeasonTheme()

// SSR (Astro / Next.js) — render the attribute before first paint
<html {...getSeasonAttribute()}>

// React — the provider resolves the season for you
<ThemeProvider defaultSpecial="auto-seasonal">…</ThemeProvider>`}</CodeBlock>
        </div>
      </div>
    )
  },
}
