import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ReactNode } from 'react'
import { CodeBlock, Lead, Note, PageTitle, SectionTitle, SubsectionTitle } from './docs-ui'

/*
 * Patterns/Layout — recipe catalog for composing layout with Tailwind utilities
 * directly, since Schatten ships no Stack / HStack / VStack primitives. The
 * *rationale* for that decision is NOT repeated here — it lives in
 * `Tokens/Spacing › Why No Layout Primitives`, and this page cross-links to it
 * in prose (no JS navigation). This page owns only the recipes: Flex (row +
 * column), Grid, Container / max-width, and Responsive.
 *
 * Intentionally ships WITHOUT a `*.vrt.spec.ts`, matching the sibling
 * `Patterns/*` prose docs (Accessibility, Form States, Form Composition,
 * Composition with asChild). The recipes are generic Tailwind flex/grid
 * arrangements, not a Schatten-specific visual contract; the one real contract
 * (the spacing scale) is already pixel-pinned by `Tokens/Spacing`'s VRT. Adding
 * VRT here would only grow the bulk-re-baseline set on every Tailwind/Vite bump
 * for no contract a screenshot is the right tool to pin. See
 * `.claude/rules/vrt-spec-guideline.md` ("docs / token stories — VRT only when
 * there's a genuine visual contract").
 */
const meta: Meta = {
  title: 'Patterns/Layout',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

const Page = ({ children }: { children: ReactNode }) => (
  <div className="max-w-3xl mx-auto px-8 py-12">{children}</div>
)

/** Neutral demo box — semantic tokens only, so it stays theme-aware in light/dark. */
const Box = ({ children }: { children?: ReactNode }) => (
  <div className="flex h-12 min-w-12 items-center justify-center rounded-md border border-border bg-surface px-3 text-sm font-medium text-foreground-muted">
    {children}
  </div>
)

/** A labelled recipe: the className string above, the live result below. */
const Recipe = ({ code, children }: { code: string; children: ReactNode }) => (
  <div className="mb-6">
    <CodeBlock>{code}</CodeBlock>
    <div className="rounded-lg border border-dashed border-border p-4">{children}</div>
  </div>
)

export const FlexRecipes: Story = {
  name: 'Flex (Row & Column)',
  render: () => (
    <Page>
      <PageTitle>Layout</PageTitle>
      <Lead>
        Schatten deliberately ships no <code>Stack</code> / <code>HStack</code> /{' '}
        <code>VStack</code> components — layout is composed directly with Tailwind utilities. For
        the reasoning behind that decision, see{' '}
        <code>Tokens/Spacing › Why No Layout Primitives</code>. This page is the recipe catalog for
        the patterns you reach for most.
      </Lead>

      <SectionTitle>Horizontal — flex-row</SectionTitle>

      <SubsectionTitle>Centered, with gap</SubsectionTitle>
      <Recipe code={`<div className="flex items-center gap-2">…</div>`}>
        <div className="flex items-center gap-2">
          <Box>A</Box>
          <Box>B</Box>
          <Box>C</Box>
        </div>
      </Recipe>

      <SubsectionTitle>Space between</SubsectionTitle>
      <Recipe code={`<div className="flex items-center justify-between gap-2">…</div>`}>
        <div className="flex items-center justify-between gap-2">
          <Box>Logo</Box>
          <Box>Nav</Box>
          <Box>Profile</Box>
        </div>
      </Recipe>

      <SubsectionTitle>Wrap</SubsectionTitle>
      <Recipe code={`<div className="flex flex-wrap gap-2">…</div>`}>
        <div className="flex flex-wrap gap-2">
          {['1', '2', '3', '4', '5', '6', '7', '8'].map((n) => (
            <Box key={n}>{n}</Box>
          ))}
        </div>
      </Recipe>

      <SectionTitle>Vertical — flex-col</SectionTitle>

      <SubsectionTitle>Stacked, with gap</SubsectionTitle>
      <Recipe code={`<div className="flex flex-col gap-4">…</div>`}>
        <div className="flex flex-col gap-4">
          <Box>First</Box>
          <Box>Second</Box>
          <Box>Third</Box>
        </div>
      </Recipe>

      <SubsectionTitle>Centered column</SubsectionTitle>
      <Recipe code={`<div className="flex flex-col items-center gap-4">…</div>`}>
        <div className="flex flex-col items-center gap-4">
          <Box>First</Box>
          <Box>Second</Box>
        </div>
      </Recipe>

      <Note>
        Keep <code>gap</code> on the curated scale (<code>gap-2</code> / <code>gap-4</code> /{' '}
        <code>gap-6</code> / <code>gap-8</code>). The full scale and the off-scale values to avoid
        live in <code>Tokens/Spacing</code>.
      </Note>
    </Page>
  ),
}

export const GridRecipes: Story = {
  name: 'Grid',
  render: () => (
    <Page>
      <PageTitle>Grid</PageTitle>
      <Lead>
        CSS grid via Tailwind utilities. Use the same curated <code>gap</code> scale as flex.
      </Lead>

      <SubsectionTitle>Two columns</SubsectionTitle>
      <Recipe code={`<div className="grid grid-cols-2 gap-4">…</div>`}>
        <div className="grid grid-cols-2 gap-4">
          {['1', '2', '3', '4'].map((n) => (
            <Box key={n}>{n}</Box>
          ))}
        </div>
      </Recipe>

      <SubsectionTitle>Auto-fit — responsive without breakpoints</SubsectionTitle>
      <Note>
        <code>auto-fit</code> + <code>minmax()</code> fits as many columns as the width allows, then
        wraps — no breakpoint prefixes needed. Resize the preview to watch the column count change.
      </Note>
      <Recipe
        code={`<div className="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-4">…</div>`}
      >
        <div className="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-4">
          {['A', 'B', 'C', 'D', 'E'].map((n) => (
            <Box key={n}>{n}</Box>
          ))}
        </div>
      </Recipe>
    </Page>
  ),
}

/** A centered, max-width-constrained bar — visualizes one container width. */
const WidthBar = ({ width, label }: { width: string; label: string }) => (
  <div className={`${width} mx-auto`}>
    <div className="rounded-md border border-border bg-surface px-3 py-2 text-center text-xs font-mono text-foreground-muted">
      {label}
    </div>
  </div>
)

export const ContainerMaxWidth: Story = {
  name: 'Container / max-width',
  render: () => (
    <Page>
      <PageTitle>Container &amp; max-width</PageTitle>
      <Lead>
        Tailwind v4 removed the old <code>max-w-screen-*</code> utilities. There are two
        replacements, for two different intents.
      </Lead>

      <SectionTitle>Content width — the common case</SectionTitle>
      <Note>
        Fixed rem widths centered with <code>mx-auto</code>. This is what every docs page here uses
        (<code>max-w-3xl mx-auto</code>). The scale continues up to <code>max-w-4xl</code> /{' '}
        <code>max-w-6xl</code> /<code>max-w-7xl</code> for wider layouts.
      </Note>
      <div className="flex flex-col gap-2">
        <WidthBar width="max-w-sm" label="max-w-sm · 24rem" />
        <WidthBar width="max-w-md" label="max-w-md · 28rem" />
        <WidthBar width="max-w-lg" label="max-w-lg · 32rem" />
        <WidthBar width="max-w-xl" label="max-w-xl · 36rem" />
        <WidthBar width="max-w-2xl" label="max-w-2xl · 42rem" />
      </div>

      <SectionTitle>Breakpoint reference — the special case</SectionTitle>
      <Note>
        <code>max-w-(--breakpoint-sm)</code> resolves to the breakpoint value itself (a Tailwind v4
        theme variable). Reach for this only when the container width must line up with a
        breakpoint; otherwise prefer the content-width scale above.
      </Note>
      <Recipe code={`<div className="max-w-(--breakpoint-sm) mx-auto">…</div>`}>
        <WidthBar width="max-w-(--breakpoint-sm)" label="max-w-(--breakpoint-sm) · 40rem" />
      </Recipe>
    </Page>
  ),
}

export const Responsive: Story = {
  name: 'Responsive',
  render: () => (
    <Page>
      <PageTitle>Responsive</PageTitle>
      <Lead>
        Tailwind's <code>sm:</code> / <code>md:</code> / <code>lg:</code> breakpoint prefixes switch
        layout by viewport. Breakpoints follow the Tailwind v4 defaults (<code>sm</code> 40rem,{' '}
        <code>md</code> 48rem, <code>lg</code> 64rem). Resize the preview to see the switch.
      </Lead>

      <SubsectionTitle>Stack on mobile, row on desktop</SubsectionTitle>
      <Recipe code={`<div className="flex flex-col md:flex-row gap-4">…</div>`}>
        <div className="flex flex-col md:flex-row gap-4">
          <Box>Sidebar</Box>
          <Box>Main</Box>
        </div>
      </Recipe>

      <SubsectionTitle>Responsive grid columns</SubsectionTitle>
      <Recipe
        code={`<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">…</div>`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {['1', '2', '3', '4', '5', '6'].map((n) => (
            <Box key={n}>{n}</Box>
          ))}
        </div>
      </Recipe>
    </Page>
  ),
}
