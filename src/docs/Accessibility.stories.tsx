import type { Meta, StoryObj } from '@storybook/react-vite'
import { Search } from 'lucide-react'
import { type ReactNode, useState } from 'react'
import { Button } from '../components/lv1/Button/Button'
import { Callout } from '../components/lv1/Callout/Callout'
import { Checkbox } from '../components/lv1/Checkbox/Checkbox'
import { Dialog } from '../components/lv1/Dialog/Dialog'
import { Field } from '../components/lv1/Field/Field'
import { Input } from '../components/lv1/Input/Input'
import { Radio, RadioGroup } from '../components/lv1/Radio/Radio'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/lv1/Select/Select'
import { Switch } from '../components/lv1/Switch/Switch'
import { Text } from '../components/lv1/Text/Text'
import { Lead, Note, PageTitle, SectionTitle, SubsectionTitle } from './docs-ui'

/*
 * Patterns/Accessibility — narrative + conventions doc for Schatten's a11y
 * contract (target: WCAG 2.1 AA): focus visibility, ARIA conventions, color
 * contrast, keyboard support, screen-reader support, and the automated-testing
 * setup (axe + addon-a11y).
 *
 * Intentionally ships WITHOUT a `*.vrt.spec.ts` (and no __snapshots__). The
 * page is prose plus LIVE lv1 components whose own visuals are already
 * pixel-locked by their component VRT specs, by `Tokens/Color`, and by the
 * paired `@axe-core/playwright` a11y suite. A docs-side VRT would only
 * re-shoot already-pinned visuals, and `:focus-visible` cannot be captured
 * reliably in a gallery. This mirrors the sibling `Patterns/Form States`,
 * which also carries no VRT. Trade-off (recorded, not silent): this page is
 * therefore NOT in the CI `pnpm test:a11y` run — its own a11y is verified at
 * dev time through the Storybook addon-a11y panel (the same axe surface). See
 * `.claude/rules/vrt-spec-guideline.md` ("docs / token stories — VRT only when
 * there's a genuine visual contract").
 */
const meta: Meta = {
  title: 'Patterns/Accessibility',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

const Page = ({ children }: { children: ReactNode }) => (
  <div className="max-w-3xl mx-auto px-8 py-12">{children}</div>
)

const Code = ({ children }: { children: ReactNode }) => (
  <code className="rounded bg-surface px-1 py-0.5 font-mono text-[0.85em] text-foreground">
    {children}
  </code>
)

const CodeBlock = ({ children }: { children: ReactNode }) => (
  <pre className="my-3 overflow-x-auto whitespace-pre-wrap rounded-lg border border-border bg-surface p-4 font-mono text-xs text-foreground">
    {children}
  </pre>
)

const Demo = ({ label, children }: { label: string; children: ReactNode }) => (
  <div className="border border-border rounded-lg p-4 mb-4">
    <h3 className="text-xs font-semibold text-foreground-muted uppercase tracking-wide mb-3">
      {label}
    </h3>
    <div className="flex flex-wrap items-center gap-4">{children}</div>
  </div>
)

type TableRow = { key: string; cells: ReactNode[] }

const RefTable = ({ headers, rows }: { headers: string[]; rows: TableRow[] }) => (
  <div className="overflow-x-auto mb-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="border-b border-border">
          {headers.map((h) => (
            <th key={h} className="text-left font-semibold text-foreground py-2 pr-4 align-top">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.key} className="border-b border-border last:border-b-0 align-top">
            {row.cells.map((cell, idx) => (
              <td key={headers[idx]} className="py-2 pr-4 text-foreground-muted">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

/**
 * §1 — Goal level. Schatten targets WCAG 2.1 AA and ships a stable a11y
 * surface (role + accessible name + keyboard + `aria-*`) on every lv1.
 */
export const Overview: Story = {
  name: 'Overview',
  render: () => (
    <Page>
      <PageTitle>Accessibility</PageTitle>
      <Lead>
        Schatten targets <strong>WCAG 2.1 AA</strong>. Every lv1 component ships a stable
        accessibility surface — an explicit role, a queryable accessible name, keyboard operability,
        and <Code>aria-*</Code> state wiring — so that consuming apps can select components by{' '}
        <Code>getByRole(role, {'{ name }'})</Code> instead of by class names or DOM structure. This
        page is the cross-cutting reference for that contract; the per-area detail lives in the
        sibling sections.
      </Lead>

      <SectionTitle>Principles at a glance</SectionTitle>
      <Note>
        Each principle below maps to its own section in this page (see the sidebar under{' '}
        <Code>Patterns/Accessibility</Code>).
      </Note>
      <ul className="list-disc pl-6 text-sm text-foreground-muted flex flex-col gap-2">
        <li>
          <strong className="text-foreground">Focus visibility</strong> — every interactive element
          renders a visible focus ring on keyboard focus.
        </li>
        <li>
          <strong className="text-foreground">ARIA conventions</strong> — error / busy / description
          state is expressed through standard attributes, often wired automatically by{' '}
          <Code>Field</Code>.
        </li>
        <li>
          <strong className="text-foreground">Color contrast</strong> — text and UI affordances meet
          the AA contrast lines in both Modes.
        </li>
        <li>
          <strong className="text-foreground">Keyboard</strong> — all interactive elements are
          reachable and operable from the keyboard; compound widgets follow their ARIA pattern.
        </li>
        <li>
          <strong className="text-foreground">Screen reader</strong> — decorative icons are hidden;
          meaning is carried by text and role, never by color alone.
        </li>
        <li>
          <strong className="text-foreground">Automated testing</strong> — axe runs in every VRT
          spec and in the Storybook a11y panel.
        </li>
      </ul>

      <SectionTitle>Contributor contracts</SectionTitle>
      <Note>
        The authoritative, implementer-facing sources of truth are{' '}
        <Code>.claude/rules/component-architecture.md §8</Code> (the a11y contract every lv1 must
        satisfy), <Code>.claude/rules/field-context-guideline.md</Code> (how form state and
        descriptions are wired), and <Code>.claude/rules/state-token-guideline.md</Code> (the
        contrast-audited state tokens).
      </Note>

      <SectionTitle>Out of scope</SectionTitle>
      <Note>
        WCAG <strong>AAA</strong> and a dedicated high-contrast mode are future work (Phase 5).
        Internationalization (i18n) of component copy is also out of scope for this page.
      </Note>
    </Page>
  ),
}

/**
 * §2 — Focus visibility. The ring is a `box-shadow` authored per component in
 * `.st-{block}:focus-visible`, driven by `--color-ring` / `--color-ring-offset`.
 */
export const FocusVisibility: Story = {
  name: 'Focus visibility',
  render: () => (
    <Page>
      <PageTitle>Focus visibility</PageTitle>
      <Lead>
        Every interactive component renders a visible focus ring when it receives{' '}
        <strong>keyboard</strong> focus. The ring is keyed to <Code>:focus-visible</Code>, not{' '}
        <Code>:focus</Code>, so a plain mouse click does not flash a ring — only keyboard navigation
        (or other non-pointer focus) shows it.
      </Lead>

      <SectionTitle>Try it</SectionTitle>
      <Note>
        Press <Code>Tab</Code> to move focus across the row below and watch the ring appear. Toggle
        the Storybook <strong>Theme</strong> toolbar between light and dark — the ring stays visible
        in both Modes.
      </Note>
      <Demo label="Tab through these">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="link">Link</Button>
        <Input placeholder="Input" className="w-40" />
        <Checkbox label="Checkbox" />
        <Switch label="Switch" />
        <Select>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="a">Option A</SelectItem>
            <SelectItem value="b">Option B</SelectItem>
          </SelectContent>
        </Select>
      </Demo>

      <SectionTitle>How it is implemented</SectionTitle>
      <Note>
        The ring is a <Code>box-shadow</Code> authored in each component&apos;s own{' '}
        <Code>.st-&#123;block&#125;:focus-visible</Code> rule (not a utility baked into a CVA base
        class). It reads two semantic tokens: <Code>--color-ring</Code> (ink-black in light,
        inverted in dark) and <Code>--color-ring-offset</Code> (the surface gap), so the indicator
        re-colors automatically per Mode.
      </Note>
      <CodeBlock>{`/* Button.css */
.st-btn:focus-visible {
  box-shadow:
    0 0 0 2px var(--color-ring-offset),
    0 0 0 4px var(--color-ring);
}`}</CodeBlock>
      <Note>
        Never strip this ring to fit a layout. If it clashes with a saturated surface, override the
        ring color for contrast — do not remove the indicator.
      </Note>
    </Page>
  ),
}

/**
 * §3 — ARIA conventions. State surfaces through standard attributes; `Field`
 * wires most of them. Note the deliberate `aria-required` gap.
 */
export const AriaConventions: Story = {
  name: 'ARIA conventions',
  render: () => (
    <Page>
      <PageTitle>ARIA conventions</PageTitle>
      <Lead>
        State is expressed through standard ARIA / HTML attributes, not bespoke classes. The same
        attribute that drives the visual also announces the state to assistive tech, so the two can
        never drift apart. Inside a <Code>Field</Code>, most of this wiring is automatic.
      </Lead>

      <SectionTitle>Required attributes by component</SectionTitle>
      <RefTable
        headers={['Component', 'Attribute', 'Source']}
        rows={[
          {
            key: 'form-invalid',
            cells: [
              'Input / Textarea / Select / Checkbox / Switch / Radio',
              <Code key="c">aria-invalid</Code>,
              'Set from isError (or inherited from Field).',
            ],
          },
          {
            key: 'form-describedby',
            cells: [
              'Form inputs',
              <Code key="c">aria-describedby</Code>,
              'Field links its description / error ids automatically.',
            ],
          },
          {
            key: 'btn-label',
            cells: [
              'Button (icon-only)',
              <Code key="c">aria-label</Code>,
              'Author-supplied — a button with no text needs a name.',
            ],
          },
          {
            key: 'btn-busy',
            cells: [
              'Button (loading)',
              <Code key="c">aria-busy</Code>,
              'Set automatically while isLoading is true.',
            ],
          },
          {
            key: 'dialog',
            cells: [
              'Dialog',
              <span key="c">
                <Code>role=&quot;dialog&quot;</Code> · <Code>aria-modal</Code> ·{' '}
                <Code>aria-labelledby</Code> · <Code>aria-describedby</Code>
              </span>,
              'Provided by Radix (title → labelledby, description → describedby).',
            ],
          },
          {
            key: 'tooltip',
            cells: [
              'Tooltip',
              <Code key="c">aria-describedby</Code>,
              'Radix links the trigger to the tooltip content.',
            ],
          },
        ]}
      />

      <SectionTitle>The one gap: required</SectionTitle>
      <Callout variant="warning" title="Field does not propagate aria-required">
        <Code>Field</Code> renders the visual required marker (<Code>*</Code>) next to the label,
        but it does <strong>not</strong> set <Code>aria-required</Code> on the input. Set{' '}
        <Code>required</Code> on the input element yourself — the native attribute implies{' '}
        <Code>aria-required</Code> for assistive tech. This is a known, deliberate gap (see
        component-architecture §8); when Field gains propagation, this note goes away.
      </Callout>

      <SectionTitle>Live wiring</SectionTitle>
      <Note>
        Inspect the rendered DOM: the invalid input carries{' '}
        <Code>aria-invalid=&quot;true&quot;</Code> and an <Code>aria-describedby</Code> pointing at
        the error text; the icon-only button exposes its name via <Code>aria-label</Code>; the
        loading button sets <Code>aria-busy</Code>.
      </Note>
      <Demo label="aria-invalid + aria-describedby (via Field)">
        <Field label="Email" error="Enter a valid email address." className="w-72">
          <Input type="email" defaultValue="not-an-email" />
        </Field>
      </Demo>
      <Demo label="aria-label (icon-only Button)">
        <Button icon={Search} aria-label="Search" />
        <Text color="muted" size="sm">
          getByRole(&apos;button&apos;, &#123; name: &apos;Search&apos; &#125;) resolves this.
        </Text>
      </Demo>
      <Demo label="aria-busy (loading Button)">
        <Button isLoading>Saving</Button>
      </Demo>
    </Page>
  ),
}

/**
 * §4 — Color contrast. The AA lines, with a pointer to the audited swatch
 * matrices in Tokens/Color and an honest note about the #344 backlog.
 */
export const Contrast: Story = {
  name: 'Contrast',
  render: () => (
    <Page>
      <PageTitle>Color contrast</PageTitle>
      <Lead>
        Color is never the only signal, and where it carries meaning it meets the WCAG AA contrast
        lines in both Modes.
      </Lead>

      <SectionTitle>The lines</SectionTitle>
      <RefTable
        headers={['Surface', 'Minimum ratio', 'Applies to']}
        rows={[
          {
            key: 'text',
            cells: ['Body text', '4.5 : 1', 'Normal-size foreground text on its background.'],
          },
          {
            key: 'large',
            cells: ['Large text', '3 : 1', '18pt+ (or 14pt bold) — headings and lead text.'],
          },
          {
            key: 'ui',
            cells: [
              'UI components',
              '3 : 1',
              'Borders, focus rings, and other non-text affordances.',
            ],
          },
        ]}
      />

      <SectionTitle>State tokens</SectionTitle>
      <Note>
        The semantic state tokens (<Code>error</Code> / <Code>success</Code> / <Code>warning</Code>{' '}
        / <Code>info</Code>) are <em>designed</em> to clear AA against their paired surfaces in
        light and dark. A backlog of borderline cases is being worked off (tracked in issue #344),
        so treat the audit — not this prose — as ground truth. The full, mode-toggle-able swatch
        matrices live in <Code>Tokens/Color</Code> under &quot;Filled / Subtle / Disabled vs
        ReadOnly Treatments (a11y audit)&quot;.
      </Note>

      <SubsectionTitle>Worked example — body text (≥ 4.5 : 1)</SubsectionTitle>
      <Note>
        A safe foreground pairing on a neutral surface. Toggle the Theme toolbar to confirm both
        Modes hold.
      </Note>
      <div className="rounded-lg border border-border bg-surface p-6 flex flex-col gap-1">
        <p className="text-foreground">
          <Code>text-foreground</Code> on <Code>bg-surface</Code> — primary body text.
        </p>
        <p className="text-foreground-muted">
          <Code>text-foreground-muted</Code> on <Code>bg-surface</Code> — secondary text, still AA.
        </p>
      </div>
    </Page>
  ),
}

function KeyboardDialogDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Dialog
        isOpen={open}
        onOpenChange={setOpen}
        title="Keyboard navigation"
        description="Tab cycles focus within the dialog; Esc closes it."
        actionButton={{ label: 'Confirm', onClick: () => setOpen(false) }}
        cancelButton={{ label: 'Cancel' }}
      >
        <Text>Focus is trapped here while the dialog is open. Press Esc to close.</Text>
      </Dialog>
    </>
  )
}

/**
 * §5 — Keyboard. Reachability + per-widget key maps. Compound widgets delegate
 * to Radix; the contract is "don't break it".
 */
export const Keyboard: Story = {
  name: 'Keyboard interaction',
  render: () => (
    <Page>
      <PageTitle>Keyboard interaction</PageTitle>
      <Lead>
        Every interactive element is reachable with <Code>Tab</Code> / <Code>Shift+Tab</Code> and
        operable from the keyboard. Compound widgets follow their established ARIA keyboard pattern
        — implemented by Radix, so the contract on our side is simply{' '}
        <strong>not to break it</strong> (no swallowing <Code>onKeyDown</Code>, no stealing focus).
      </Lead>

      <SectionTitle>Key map</SectionTitle>
      <RefTable
        headers={['Widget', 'Keys']}
        rows={[
          {
            key: 'all',
            cells: ['All interactive elements', <Code key="c">Tab</Code>],
          },
          {
            key: 'dialog',
            cells: [
              'Dialog',
              <span key="c">
                <Code>Esc</Code> closes · <Code>Tab</Code> cycles focus within (trap)
              </span>,
            ],
          },
          {
            key: 'tooltip',
            cells: ['Tooltip / Popover', <Code key="c">Esc</Code>],
          },
          {
            key: 'select',
            cells: [
              'Select / Menu',
              <span key="c">
                <Code>↑</Code> <Code>↓</Code> navigate · <Code>Enter</Code> confirm
              </span>,
            ],
          },
          {
            key: 'radio',
            cells: [
              'Radio group',
              <span key="c">
                <Code>←</Code> <Code>→</Code> / <Code>↑</Code> <Code>↓</Code> move selection
              </span>,
            ],
          },
        ]}
      />

      <SectionTitle>Try it</SectionTitle>
      <Note>
        Operate each widget below without a mouse: open the dialog and press <Code>Esc</Code>; arrow
        through the select and the radio group.
      </Note>
      <Demo label="Dialog — Esc to close, Tab trap">
        <KeyboardDialogDemo />
      </Demo>
      <Demo label="Select — arrow keys + Enter">
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Pick a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="cherry">Cherry</SelectItem>
          </SelectContent>
        </Select>
      </Demo>
      <Demo label="Radio group — arrow keys">
        <RadioGroup defaultValue="a" className="flex-row gap-4">
          <Radio value="a" label="Option A" />
          <Radio value="b" label="Option B" />
          <Radio value="c" label="Option C" />
        </RadioGroup>
      </Demo>
    </Page>
  ),
}

/**
 * §6 — Screen reader. Decorative icons are hidden; meaning rides on text + role,
 * never on color alone. Loading uses aria-busy + a polite live region.
 */
export const ScreenReader: Story = {
  name: 'Screen reader support',
  render: () => (
    <Page>
      <PageTitle>Screen reader support</PageTitle>
      <Lead>
        What a sighted user reads from layout and color, a screen-reader user must get from the
        accessibility tree. Two rules carry most of the weight: hide decorations, and never let
        color be the only carrier of meaning.
      </Lead>

      <SectionTitle>Decorative icons are hidden</SectionTitle>
      <Note>
        Every purely-decorative icon (the icon inside a Button, Badge, Callout, the Checkbox mark,
        the Switch knob, the Spinner) carries <Code>aria-hidden=&quot;true&quot;</Code>, so it is
        not announced. Do not add a meaningless <Code>aria-label</Code> to a decorative icon — that
        just adds noise. An icon is only named when it is itself the control (e.g. an icon-only
        Button, or Field&apos;s info trigger with{' '}
        <Code>aria-label=&quot;More information&quot;</Code>).
      </Note>

      <SectionTitle>Meaning is not color alone</SectionTitle>
      <Note>
        State surfaces pair a color shift with a non-color signal: a labeled icon and visible text
        for sighted users, and a role + accessible name for assistive tech. In the callout below the
        variant icon is <Code>aria-hidden</Code> — the meaning is carried by the title and body
        text, so it survives even if the color shift is not perceived.
      </Note>
      <Callout variant="success" title="Saved" className="mb-4">
        Your changes were saved. The meaning is in this text, not in the green tint.
      </Callout>

      <SectionTitle>Loading announces politely</SectionTitle>
      <Note>
        Asynchronous progress uses <Code>aria-busy</Code> on the control plus an{' '}
        <Code>aria-live=&quot;polite&quot;</Code> region so the change is announced without
        interrupting. The Button below sets <Code>aria-busy</Code> while loading and hides its
        spinner from the a11y tree.
      </Note>
      <Demo label="Loading">
        <Button isLoading>Submitting</Button>
      </Demo>
    </Page>
  ),
}

/**
 * §7 — Automated testing. axe in every VRT spec (#147) + the addon-a11y panel
 * (#148), pinned to the WCAG 2.1 A/AA tag set. Phase 1 is observe-only (#346).
 */
export const AutomatedTesting: Story = {
  name: 'Automated testing',
  render: () => (
    <Page>
      <PageTitle>Automated testing</PageTitle>
      <Lead>
        The a11y contract is enforced by two complementary axe surfaces — one in CI, one at dev time
        — pinned to the same rule set so &quot;green in the panel&quot; maps to &quot;green in
        CI&quot;.
      </Lead>

      <SectionTitle>axe in every VRT spec</SectionTitle>
      <Note>
        Each lv1 <Code>*.vrt.spec.ts</Code> pairs every screenshot with an{' '}
        <Code>@axe-core/playwright</Code> scan (as a separate test, so a visual failure never masks
        an a11y failure). Always pin the WCAG tag set, or axe also runs best-practice rules that
        flag the Storybook iframe itself on every story.
      </Note>
      <CodeBlock>{`const results = await new AxeBuilder({ page })
  .include('#storybook-root')
  .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
  .analyze()

expect(results.violations).toEqual([])`}</CodeBlock>

      <SectionTitle>The addon-a11y panel</SectionTitle>
      <Note>
        Storybook&apos;s <Code>addon-a11y</Code> runs the same axe surface against the rendered
        story in the <strong>Accessibility</strong> panel — the dev-time companion to the CI
        assertion. Because it scans after the theme decorator applies <Code>.dark</Code> /{' '}
        <Code>data-theme</Code>, toggling the Theme toolbar surfaces dark-mode and seasonal contrast
        issues for free.
      </Note>

      <SectionTitle>Run it</SectionTitle>
      <CodeBlock>{`pnpm test:a11y    # playwright --grep a11y          → a11y only
pnpm test:vrt     # playwright --grep-invert a11y    → screenshots only`}</CodeBlock>

      <SectionTitle>Status: observe-only (Phase 1)</SectionTitle>
      <Note>
        The CI a11y job currently <strong>observes</strong> rather than blocks (it surfaces
        violations in the job summary while a backlog of pre-existing issues is worked off), and the
        addon&apos;s <Code>test</Code> flag is <Code>todo</Code>. Promotion to a blocking gate is
        tracked in issue #346.
      </Note>
    </Page>
  ),
}
