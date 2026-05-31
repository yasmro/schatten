import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../components/lv1/Button/Button'
import { Field } from '../components/lv1/Field/Field'
import { Input } from '../components/lv1/Input/Input'
import { Lead, Note, PageTitle, SectionTitle, SubsectionTitle } from './docs-ui'

const meta: Meta = {
  title: 'Tokens/Spacing',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

/**
 * The 4px-base spacing scale, sourced verbatim from `src/core/tokens/spacing.css`.
 *
 * `tier` records whether the token is registered in the `@theme` block of
 * `base.css` (`curated` — a standard Tailwind utility is generated and the
 * value is recommended) or only present as a raw CSS variable (`raw` — used
 * internally by CVA, e.g. half steps and odd intermediate values). Note that
 * Tailwind v4 still resolves an arbitrary integer utility like `p-7` via its
 * dynamic `--spacing` multiplier, so `raw` does not mean "broken" — it means
 * "outside the recommended curated set".
 */
const SPACING_TOKENS = [
  { token: 'px', utility: 'px', value: '1px', px: '1px', tier: 'curated' },
  { token: '0', utility: '0', value: '0', px: '0px', tier: 'curated' },
  { token: '0-5', utility: '0.5', value: '0.125rem', px: '2px', tier: 'raw' },
  { token: '1', utility: '1', value: '0.25rem', px: '4px', tier: 'curated' },
  { token: '1-5', utility: '1.5', value: '0.375rem', px: '6px', tier: 'raw' },
  { token: '2', utility: '2', value: '0.5rem', px: '8px', tier: 'curated' },
  { token: '2-5', utility: '2.5', value: '0.625rem', px: '10px', tier: 'raw' },
  { token: '3', utility: '3', value: '0.75rem', px: '12px', tier: 'curated' },
  { token: '3-5', utility: '3.5', value: '0.875rem', px: '14px', tier: 'raw' },
  { token: '4', utility: '4', value: '1rem', px: '16px', tier: 'curated' },
  { token: '5', utility: '5', value: '1.25rem', px: '20px', tier: 'curated' },
  { token: '6', utility: '6', value: '1.5rem', px: '24px', tier: 'curated' },
  { token: '7', utility: '7', value: '1.75rem', px: '28px', tier: 'raw' },
  { token: '8', utility: '8', value: '2rem', px: '32px', tier: 'curated' },
  { token: '9', utility: '9', value: '2.25rem', px: '36px', tier: 'raw' },
  { token: '10', utility: '10', value: '2.5rem', px: '40px', tier: 'curated' },
  { token: '12', utility: '12', value: '3rem', px: '48px', tier: 'curated' },
  { token: '14', utility: '14', value: '3.5rem', px: '56px', tier: 'raw' },
  { token: '16', utility: '16', value: '4rem', px: '64px', tier: 'curated' },
  { token: '20', utility: '20', value: '5rem', px: '80px', tier: 'curated' },
  { token: '24', utility: '24', value: '6rem', px: '96px', tier: 'curated' },
] as const

const TierBadge = ({ tier }: { tier: 'curated' | 'raw' }) =>
  tier === 'curated' ? (
    <span className="rounded-full bg-success-subtle px-2 py-0.5 text-xs font-medium text-success">
      curated
    </span>
  ) : (
    <span className="rounded-full bg-warning-subtle px-2 py-0.5 text-xs font-medium text-warning">
      raw only
    </span>
  )

const SpacingRow = ({
  token,
  utility,
  value,
  px,
  tier,
}: {
  token: string
  utility: string
  value: string
  px: string
  tier: 'curated' | 'raw'
}) => (
  <div className="flex items-center gap-4 py-3 border-b border-border last:border-b-0">
    <div className="w-32 shrink-0">
      <p className="text-sm font-medium text-foreground font-mono">--spacing-{token}</p>
      <p className="text-xs text-foreground-muted font-mono">
        p-{utility} · gap-{utility}
      </p>
    </div>
    <div className="w-24 shrink-0 text-xs text-foreground-muted font-mono">
      {px} <span className="opacity-60">/ {value}</span>
    </div>
    <div className="w-20 shrink-0">
      <TierBadge tier={tier} />
    </div>
    <div className="flex-1">
      <div className="h-4 bg-theme-500" style={{ width: px }} />
    </div>
  </div>
)

export const SpacingScale: Story = {
  name: 'Spacing Scale',
  render: () => (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Spacing</PageTitle>
      <Lead>
        Schatten's spacing scale is built on a 4px base. The full token set lives in{' '}
        <code>src/core/tokens/spacing.css</code>; the recommended subset is the one registered as
        Tailwind utilities via the <code>@theme</code> block in <code>base.css</code>. Use the scale
        instead of arbitrary pixel values so every layout lands on the same rhythm.
      </Lead>

      <SectionTitle>Full scale</SectionTitle>
      <Note>
        Every <code>--spacing-*</code> token, with its px / rem value and the Tailwind utility it
        maps to. <strong>curated</strong> tokens are registered in <code>@theme</code> and are the
        recommended values; <strong>raw only</strong> tokens (half steps and odd intermediates)
        exist as CSS variables for internal CVA use. An arbitrary utility such as <code>p-7</code>{' '}
        still renders via Tailwind's dynamic <code>--spacing</code> multiplier — "raw only" means
        "outside the recommended set", not "broken".
      </Note>
      <div className="border border-border rounded-xl px-5">
        {SPACING_TOKENS.map((t) => (
          <SpacingRow key={t.token} {...t} />
        ))}
      </div>
    </div>
  ),
}

const RecommendBlock = ({
  heading,
  note,
  values,
}: {
  heading: string
  note: string
  values: { utility: string; px: string }[]
}) => (
  <div className="mb-6">
    <SubsectionTitle>{heading}</SubsectionTitle>
    <Note>{note}</Note>
    <div className="flex flex-wrap items-end gap-4">
      {values.map((v) => (
        <div key={v.utility} className="flex flex-col items-center gap-1">
          <div className="h-6 bg-theme-500" style={{ width: v.px }} />
          <span className="text-xs font-mono text-foreground">{v.utility}</span>
          <span className="text-[10px] font-mono text-foreground-muted">{v.px}</span>
        </div>
      ))}
    </div>
  </div>
)

export const RecommendedScale: Story = {
  name: 'Recommended Scale',
  render: () => (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Recommended scale</PageTitle>
      <Lead>
        Reach for these curated values first. Inner spacing (<code>gap</code>, <code>p-*</code>) and
        outer spacing (<code>m-*</code>, section gaps) use overlapping but distinct subsets.
        Sticking to the curated set keeps spacing consistent across the whole app.
      </Lead>

      <RecommendBlock
        heading="Inner spacing — gap, padding"
        note="Spacing between elements inside a component or a tight group."
        values={[
          { utility: '1 (4px)', px: '4px' },
          { utility: '2 (8px)', px: '8px' },
          { utility: '3 (12px)', px: '12px' },
          { utility: '4 (16px)', px: '16px' },
          { utility: '6 (24px)', px: '24px' },
          { utility: '8 (32px)', px: '32px' },
        ]}
      />

      <RecommendBlock
        heading="Outer spacing — margin, section gaps"
        note="Spacing between components and between page sections."
        values={[
          { utility: '4 (16px)', px: '16px' },
          { utility: '6 (24px)', px: '24px' },
          { utility: '8 (32px)', px: '32px' },
          { utility: '12 (48px)', px: '48px' },
          { utility: '16 (64px)', px: '64px' },
        ]}
      />

      <SubsectionTitle>Avoid — off-scale</SubsectionTitle>
      <Note>
        <code>gap-7</code> / <code>gap-9</code> / <code>gap-11</code> / <code>gap-13</code> render
        fine (Tailwind generates them via the dynamic multiplier) but sit outside the curated set.
        Prefer the nearest curated value so spacing stays uniform.
      </Note>

      <SectionTitle>Live example</SectionTitle>
      <Note>The same Button row at three curated inner-spacing values.</Note>
      <div className="flex flex-col gap-6">
        {(['gap-2', 'gap-4', 'gap-6'] as const).map((g) => (
          <div key={g}>
            <p className="text-xs font-mono text-foreground-muted mb-2">{g}</p>
            <div className={`flex ${g}`}>
              <Button>Save</Button>
              <Button variant="secondary">Cancel</Button>
              <Button variant="tertiary">Reset</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
}

export const Examples: Story = {
  name: 'Examples',
  render: () => (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Do &amp; Don't</PageTitle>
      <Lead>
        Both rows render — the difference is consistency. The left column uses curated values; the
        right column uses off-scale values that drift off the shared rhythm.
      </Lead>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <SubsectionTitle>✅ Curated</SubsectionTitle>
          <Note>
            <code>gap-2 p-4</code>
          </Note>
          <div className="flex gap-2 p-4 rounded-lg border border-success bg-success-subtle">
            <Button>OK</Button>
            <Button variant="secondary">Cancel</Button>
          </div>
        </div>

        <div>
          <SubsectionTitle>❌ Off-scale</SubsectionTitle>
          <Note>
            <code>gap-7 p-9</code>
          </Note>
          <div className="flex gap-7 p-9 rounded-lg border border-warning bg-warning-subtle">
            <Button>OK</Button>
            <Button variant="secondary">Cancel</Button>
          </div>
        </div>
      </div>

      <SectionTitle>Form layout</SectionTitle>
      <Note>
        A field group laid out with curated <code>gap-4</code> between fields and <code>gap-2</code>{' '}
        inside the action row.
      </Note>
      <div className="flex flex-col gap-4 rounded-lg border border-border p-6">
        <Field label="Email" description="We'll never share it.">
          <Input type="email" placeholder="you@example.com" />
        </Field>
        <Field label="Password">
          <Input type="password" placeholder="••••••••" />
        </Field>
        <div className="flex gap-2">
          <Button>Sign in</Button>
          <Button variant="tertiary">Cancel</Button>
        </div>
      </div>
    </div>
  ),
}

export const WhyNoLayoutPrimitives: Story = {
  name: 'Why No Layout Primitives',
  render: () => (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Why no layout primitives</PageTitle>
      <Lead>
        Schatten deliberately does <strong>not</strong> ship <code>Stack</code> /{' '}
        <code>HStack</code> / <code>VStack</code> layout components. Spacing is composed with
        Tailwind utilities directly. This page is the canonical reference for that decision (issue
        #102 closed the proposal to add a <code>spacing-conventions.md</code> rule as wontfix — this
        doc stands in for it).
      </Lead>

      <SectionTitle>AI affinity</SectionTitle>
      <Note>
        <code>&lt;div className="flex gap-4"&gt;</code> is overwhelmingly represented in training
        data, so AI assistants emit correct layout without learning a bespoke component API. A
        custom <code>&lt;Stack gap={4}&gt;</code> would be a vocabulary every tool has to relearn.
      </Note>

      <SectionTitle>Developer experience</SectionTitle>
      <Note>
        There is one fewer component to import and remember. Layout reads inline at the call site
        rather than hiding behind a prop API.
      </Note>

      <SectionTitle>The discipline this depends on</SectionTitle>
      <Note>
        The trade-off is that nothing structurally stops a developer from writing off-scale values (
        <code>gap-7</code>, <code>gap-9</code>). The discipline is to stay within the curated scale
        shown in <em>Recommended Scale</em>, and <strong>this doc is the source of truth</strong>{' '}
        for that rule.
      </Note>

      <SectionTitle>Future revisit</SectionTitle>
      <Note>
        Re-evaluated in Phase 5. If drift toward off-scale values is observed in real AI-generated
        code, layout primitives can be reconsidered then.
      </Note>
    </div>
  ),
}

const HALF_STEPS = [
  { token: '0-5', utility: '0.5', value: '0.125rem', px: '2px' },
  { token: '1-5', utility: '1.5', value: '0.375rem', px: '6px' },
  { token: '2-5', utility: '2.5', value: '0.625rem', px: '10px' },
  { token: '3-5', utility: '3.5', value: '0.875rem', px: '14px' },
] as const

export const HalfSteps: Story = {
  name: 'Half Steps',
  render: () => (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Half steps</PageTitle>
      <Lead>
        The half-step tokens (<code>--spacing-0-5</code> through <code>--spacing-3-5</code>) are{' '}
        <strong>raw only</strong> — they are not registered in <code>@theme</code> and are intended
        for internal CVA use, where a component needs sub-4px optical adjustment (e.g. the gap
        between an icon and its label). Application code normally does not reach for them.
      </Lead>

      <div className="border border-border rounded-xl px-5">
        {HALF_STEPS.map((h) => (
          <SpacingRow
            key={h.token}
            token={h.token}
            utility={h.utility}
            value={h.value}
            px={h.px}
            tier="raw"
          />
        ))}
      </div>
    </div>
  ),
}
