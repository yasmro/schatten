import type { Meta, StoryObj } from '@storybook/react-vite'
import { type ReactNode, useState } from 'react'
import { Button } from '../components/lv1/Button/Button'
import { Callout } from '../components/lv1/Callout/Callout'
import { Dialog } from '../components/lv1/Dialog/Dialog'
import { Field } from '../components/lv1/Field/Field'
import { Input } from '../components/lv1/Input/Input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/lv1/Select/Select'
import { toast } from '../components/lv1/Toast/Toast'
import { Toaster } from '../components/lv1/Toast/Toaster'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../components/lv1/Tooltip/Tooltip'
import {
  CodeBlock,
  DocsTable,
  Lead,
  Note,
  PageTitle,
  SectionTitle,
  SubsectionTitle,
} from './docs-ui'

/*
 * Patterns/Testing — canonical reference for wiring `data-testid` into Schatten
 * components for consumer E2E (Playwright / Cypress / RTL). It demonstrates the
 * contract in `.claude/rules/component-testid-guideline.md` (#106) as live demos:
 * role-first selectors, `...props` pass-through, the compound path (Select), the
 * `asChild` caveat (Tooltip), Portal-rendered content, the curated-props
 * exceptions (Dialog / Toast), Schatten's no-auto-testid policy, and a
 * Playwright / Cypress / RTL selector cheatsheet.
 *
 * Prose is rendered INLINE in each story (the `Patterns/*` convention), NOT via
 * `parameters.docs.description.*`. These hand-built pages run in Canvas with
 * `layout: 'fullscreen'` and carry no `autodocs` tag, so there is no Docs page
 * for `description.*` to render on — inline JSX is the only reliably-visible
 * surface. See storybook-guideline.md "Hand-built docs pages — render prose
 * inline".
 *
 * Ships WITHOUT a `*.vrt.spec.ts` by design: this page composes components whose
 * visual contract is already pinned by their own VRT, and every `Patterns/*`
 * sibling (Form States / Accessibility / Form Composition) is VRT-less too. The
 * subject of this page is the testid plumbing, not a new visual. See
 * vrt-spec-guideline.md "docs / token stories — VRT only when there is a genuine
 * visual contract".
 */
const meta: Meta = {
  title: 'Patterns/Testing',
  parameters: { layout: 'fullscreen' },
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

const Demo = ({ label, children }: { label: string; children: ReactNode }) => (
  <div className="border border-border rounded-lg p-4 mb-4">
    <h3 className="text-xs font-semibold text-foreground-muted uppercase tracking-wide mb-3">
      {label}
    </h3>
    <div className="flex flex-wrap items-center gap-4">{children}</div>
  </div>
)

/**
 * §0 — Overview. The framing for the whole page: role + accessible name is the
 * first-choice selector; `data-testid` is the fallback hook for elements that
 * role-based queries cannot reach.
 */
export const Overview: Story = {
  name: 'Overview',
  render: () => (
    <Page>
      <PageTitle>Testing</PageTitle>
      <Lead>
        How to make Schatten components addressable from a consumer E2E suite (Playwright / Cypress
        / React Testing Library). The plumbing is deliberately thin: components forward{' '}
        <Code>data-testid</Code> (and every other unknown DOM attribute) onto their root element —
        there is no bespoke <Code>testId</Code> prop to learn.
      </Lead>

      <Callout variant="info" title="Role first, testid second">
        Prefer <Code>{'getByRole(role, { name })'}</Code> with an accessible name. It is stable
        across refactors and doubles as an accessibility check. Reach for <Code>data-testid</Code>{' '}
        only when a role-based query is ambiguous, unstable, or impossible (anonymous wrappers,
        repeated rows).
      </Callout>

      <SectionTitle>What this page covers</SectionTitle>
      <ul className="list-disc pl-6 text-sm text-foreground-muted flex flex-col gap-2">
        <li>
          <strong className="text-foreground">Root pass-through</strong> — testid lands on the
          rendered root via <Code>{'{...props}'}</Code>.
        </li>
        <li>
          <strong className="text-foreground">Compound components</strong> — each sub-part takes its
          own testid (Select).
        </li>
        <li>
          <strong className="text-foreground">asChild caveat</strong> — with an element child the
          testid merges onto the child (Tooltip).
        </li>
        <li>
          <strong className="text-foreground">Portal content</strong> — testid goes on the Content,
          and queries scope from the page (Select / Tooltip).
        </li>
        <li>
          <strong className="text-foreground">Curated-props exceptions</strong> — Dialog and Toast
          do not forward arbitrary attributes; address Dialog by its role, Toast by its rendered
          text.
        </li>
        <li>
          <strong className="text-foreground">Naming &amp; no auto-testid</strong> — the value is
          yours to choose; Schatten never injects one.
        </li>
      </ul>

      <SectionTitle>Contributor contract</SectionTitle>
      <Note>
        The implementer-facing source of truth is{' '}
        <Code>.claude/rules/component-testid-guideline.md</Code>. This page is its live, runnable
        companion — when the rule and this page disagree, the rule wins.
      </Note>
    </Page>
  ),
}

/**
 * §1 — Root pass-through. Every component spreads `...props` onto its root, so
 * `data-testid` (and `data-cy`, `data-test`, …) ride straight through.
 */
export const RootPassThrough: Story = {
  name: '1. data-testid on the root',
  render: () => (
    <Page>
      <PageTitle>1. data-testid on the root</PageTitle>
      <Lead>
        Pass <Code>data-testid</Code> like any other DOM attribute. There is no <Code>testId</Code>{' '}
        prop — the component spreads <Code>{'{...props}'}</Code> onto its rendered root, so the
        attribute appears on the real element. The same mechanism works for <Code>data-cy</Code>,{' '}
        <Code>data-test</Code>, or any custom hook.
      </Lead>

      <Demo label="A button with a testid">
        <Button data-testid="submit-btn">Save</Button>
      </Demo>

      <SectionTitle>Rendered DOM</SectionTitle>
      <Note>
        Inspect the button above — the attribute is on the native <Code>&lt;button&gt;</Code>,
        alongside the public <Code>st-*</Code> classes.
      </Note>
      <CodeBlock>{`<button data-testid="submit-btn" class="st-btn st-btn--primary st-btn--md">
  Save
</button>`}</CodeBlock>

      <SectionTitle>Selecting it</SectionTitle>
      <CodeBlock>{`// Playwright
await page.getByTestId('submit-btn').click()

// …but prefer role + name when it is unambiguous:
await page.getByRole('button', { name: 'Save' }).click()`}</CodeBlock>
    </Page>
  ),
}

/**
 * §2 — Compound components. Each named sub-component forwards its own props, so
 * every part can carry an independent testid. Select is the canonical example.
 */
export const CompoundComponents: Story = {
  name: '2. Compound components',
  render: () => (
    <Page>
      <PageTitle>2. Compound components</PageTitle>
      <Lead>
        Compound components (Select, Tooltip, RadioGroup) are built from named parts, and each part
        forwards its own props. Put a <Code>data-testid</Code> on whichever parts your test needs —
        they are independent. Select is the canonical example.
      </Lead>

      <Demo label="Select with a testid on every part (open it)">
        <Select>
          <SelectTrigger aria-label="Country" data-testid="country-trigger" className="w-56">
            <SelectValue placeholder="Country" />
          </SelectTrigger>
          <SelectContent data-testid="country-content">
            <SelectItem value="jp" data-testid="country-item-jp">
              Japan
            </SelectItem>
            <SelectItem value="us" data-testid="country-item-us">
              United States
            </SelectItem>
          </SelectContent>
        </Select>
      </Demo>

      <CodeBlock>{`<Select>
  <SelectTrigger data-testid="country-trigger">
    <SelectValue placeholder="Country" />
  </SelectTrigger>
  <SelectContent data-testid="country-content">
    <SelectItem value="jp" data-testid="country-item-jp">Japan</SelectItem>
    <SelectItem value="us" data-testid="country-item-us">United States</SelectItem>
  </SelectContent>
</Select>`}</CodeBlock>

      <Note>
        Note: Schatten Dialog is <strong>not</strong> a compound component — it takes structured
        props (<Code>title</Code>, <Code>actionButton</Code>, …) rather than{' '}
        <Code>Dialog.Trigger</Code> / <Code>Dialog.Content</Code> sub-parts. See section 5 for how
        to address it.
      </Note>
    </Page>
  ),
}

/**
 * §3 — asChild caveat. A Trigger whose child is an element merges its props onto
 * that child (Radix Slot), so the testid lands on the child, not on a wrapper.
 */
export const AsChildCaveat: Story = {
  name: '3. asChild trigger caveat',
  render: () => (
    <Page>
      <PageTitle>3. asChild trigger caveat</PageTitle>
      <Lead>
        <Code>TooltipTrigger</Code> switches to Radix <Code>asChild</Code> mode when its child is a
        non-string element (for example a <Code>Button</Code>). In that mode Radix merges props onto
        the child, so a <Code>data-testid</Code> on the trigger ends up on <em>your</em> element,
        not on a Schatten-rendered wrapper. Both cases below resolve with{' '}
        <Code>{"getByTestId('help')"}</Code> — the difference is only where the attribute lands.
      </Lead>

      <Demo label="Text child → Schatten renders the button → testid on it (hover)">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger data-testid="help-text">Hover for help</TooltipTrigger>
            <TooltipContent>Saved drafts stay for 30 days.</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Demo>

      <Demo label="Element child → asChild merges testid onto your Button (hover)">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger data-testid="help-element">
              <Button variant="secondary">Help</Button>
            </TooltipTrigger>
            <TooltipContent>Saved drafts stay for 30 days.</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Demo>

      <CodeBlock>{`// text child → testid on the Schatten-generated <button>
<TooltipTrigger data-testid="help">Hover for help</TooltipTrigger>

// element child → testid merged onto YOUR <Button>
<TooltipTrigger data-testid="help">
  <Button>Help</Button>
</TooltipTrigger>`}</CodeBlock>
    </Page>
  ),
}

/**
 * §4 — Portal content. SelectContent / TooltipContent render into document.body,
 * outside the component subtree. Put the testid on the Content, scope from page.
 */
export const PortalContent: Story = {
  name: '4. Portal-rendered content',
  render: () => (
    <Page>
      <PageTitle>4. Portal-rendered content</PageTitle>
      <Lead>
        <Code>SelectContent</Code>, <Code>TooltipContent</Code>, and similar popups render through a
        Portal into <Code>document.body</Code> — outside <Code>#storybook-root</Code> and outside
        the trigger&apos;s DOM subtree. A selector rooted at the trigger will never reach them by
        DOM traversal.
      </Lead>

      <SectionTitle>Two rules</SectionTitle>
      <ul className="list-disc pl-6 text-sm text-foreground-muted flex flex-col gap-2 mb-4">
        <li>Put the testid on the Content element itself, not on the trigger.</li>
        <li>
          Scope the query from <Code>page</Code> (Playwright) / <Code>screen</Code> (RTL), not from
          a trigger-rooted locator.
        </li>
      </ul>

      <Demo label="Open the select — the listbox is portaled to body">
        <Select>
          <SelectTrigger aria-label="Fruit" data-testid="fruit-trigger" className="w-56">
            <SelectValue placeholder="Pick a fruit" />
          </SelectTrigger>
          <SelectContent data-testid="fruit-content">
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="cherry">Cherry</SelectItem>
          </SelectContent>
        </Select>
      </Demo>

      <CodeBlock>{`// Playwright — open via the trigger, then scope into the portaled content
await page.getByTestId('fruit-trigger').click()
await page
  .getByTestId('fruit-content')
  .getByRole('option', { name: 'Banana' })
  .click()`}</CodeBlock>
    </Page>
  ),
}

function DialogTestidDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button data-testid="delete-open" onClick={() => setOpen(true)}>
        Delete account
      </Button>
      <Dialog
        isOpen={open}
        onOpenChange={setOpen}
        title="Delete account"
        description="This action cannot be undone."
        actionButton={{
          label: 'Delete',
          variant: 'destructive',
          onClick: () => setOpen(false),
        }}
        cancelButton={{ label: 'Cancel' }}
      >
        <p data-testid="delete-message">Are you sure you want to delete your account?</p>
      </Dialog>
    </>
  )
}

function ToastTestidDemo() {
  return (
    <>
      <Button onClick={() => toast({ title: 'Saved successfully', variant: 'success' })}>
        Save
      </Button>
      <Toaster />
    </>
  )
}

/**
 * §5 — Curated-props exceptions. Dialog and Toast expose a curated prop surface
 * (no `...rest` pass-through). Address their children / their role instead.
 */
export const CuratedPropsExceptions: Story = {
  name: '5. Curated-props components',
  render: () => (
    <Page>
      <PageTitle>5. Curated-props components</PageTitle>
      <Lead>
        A few high-level components take a curated prop surface and do <strong>not</strong> spread
        unknown attributes onto their content. For these, address the children you pass in, or query
        by role + accessible name.
      </Lead>

      <SubsectionTitle>Dialog — put the testid on your children</SubsectionTitle>
      <Note>
        Dialog renders structured props (<Code>title</Code>, <Code>actionButton</Code>,{' '}
        <Code>cancelButton</Code>) and its <Code>children</Code> in the body — it does not forward a{' '}
        <Code>data-testid</Code> onto its Content. Put testids on the elements you author, and use{' '}
        <Code>{"getByRole('dialog', { name })"}</Code> for the frame (Radix sets{' '}
        <Code>role=&quot;dialog&quot;</Code> and links the title as its name).
      </Note>
      <Demo label="Open the dialog (rendered into a Portal)">
        <DialogTestidDemo />
      </Demo>
      <CodeBlock>{`<Dialog title="Delete account" isOpen={open} onOpenChange={setOpen}
  actionButton={{ label: 'Delete', variant: 'destructive', onClick }}>
  <p data-testid="delete-message">Are you sure?</p>
</Dialog>

// Playwright
await page.getByRole('dialog', { name: 'Delete account' })   // the frame
await page.getByTestId('delete-message')                     // your children`}</CodeBlock>

      <SubsectionTitle>Toast — imperative, so query by text</SubsectionTitle>
      <Note>
        Toasts are created by the imperative <Code>{'toast({ … })'}</Code> call, which takes no JSX
        — there is no element to hang a <Code>data-testid</Code> on. The visible toast carries{' '}
        <strong>no role</strong> either: Sonner (the renderer since v0.14.0) announces toast content
        through its own visually-hidden live region, not via <Code>role=&quot;status&quot;</Code> on
        the toast element. Query by the rendered text, or by Sonner's{' '}
        <Code>[data-sonner-toast]</Code> wrapper when you need the toast element itself.
      </Note>
      <Demo label="Fire a toast">
        <ToastTestidDemo />
      </Demo>
      <CodeBlock>{`toast({ title: 'Saved successfully', variant: 'success' })

// Playwright — query the rendered title text
await expect(page.getByText('Saved successfully')).toBeVisible()

// The toast element itself (Sonner-owned wrapper)
page.locator('li[data-sonner-toast]')`}</CodeBlock>
    </Page>
  ),
}

/**
 * §6 — Form fields. The flat Field API wraps a labelled input; put the testid on
 * the input element you pass as children.
 */
export const FormFields: Story = {
  name: '6. Form fields',
  render: () => (
    <Page>
      <PageTitle>6. Form fields</PageTitle>
      <Lead>
        Compose a labelled field with the flat <Code>Field</Code> API and put the{' '}
        <Code>data-testid</Code> on the input you pass as children. Field wires the label,
        description, and error state around it; the input is still a plain DOM element that forwards{' '}
        the attribute.
      </Lead>

      <Demo label="Field + Input with a testid">
        <Field label="Email" error="Enter a valid email address." className="w-72">
          <Input type="email" data-testid="email-input" defaultValue="not-an-email" />
        </Field>
      </Demo>

      <CodeBlock>{`<Field label="Email" error={emailError}>
  <Input type="email" data-testid="email-input" />
</Field>

// Playwright
await page.getByTestId('email-input').fill('foo@example.com')`}</CodeBlock>
    </Page>
  ),
}

/**
 * §7 — Naming & no auto-testid. The value is the consumer's call; Schatten never
 * injects a testid of its own.
 */
export const NamingAndNoAutoTestid: Story = {
  name: '7. Naming & no auto-testid',
  render: () => (
    <Page>
      <PageTitle>7. Naming &amp; no auto-testid</PageTitle>
      <Lead>
        Choosing testid values is the consuming product&apos;s responsibility, not Schatten&apos;s.
        This page only describes the plumbing — where the attribute lands and how it survives a
        Portal boundary. The naming scheme is yours.
      </Lead>

      <SectionTitle>A recommendation, not a rule</SectionTitle>
      <Note>
        A feature-scoped, purpose-suffixed shape reads well and avoids collisions —{' '}
        <Code>{'{feature}-{purpose}'}</Code>, e.g. <Code>signup-email-input</Code> or{' '}
        <Code>dashboard-user-menu</Code>. <Code>camelCase</Code> and <Code>kebab-case</Code> both
        work; pick one and keep it consistent across your codebase. Reserve testids for elements
        that role + accessible name cannot already address.
      </Note>

      <SectionTitle>Schatten never injects a testid</SectionTitle>
      <Callout variant="warning" title="No library-supplied testids">
        Schatten does not emit <Code>data-testid</Code> from inside the library — no fixed testids
        on internal Slots or Portals, no values derived from <Code>displayName</Code>, no{' '}
        <Code>testing</Code>-flag toggles. A library-supplied testid would pollute your namespace
        and force you to dodge reserved names. The single source of truth is you.
      </Callout>
      <Note>
        Runtime <Code>data-*</Code> attributes that Radix emits for behaviour / styling (
        <Code>data-state</Code>, <Code>data-disabled</Code>, <Code>data-side</Code>) are a separate
        concern — they are not testids and are safe to rely on for state-scoped assertions.
      </Note>
    </Page>
  ),
}

/**
 * §8 — Selector cheatsheet. The same intent across Playwright, Cypress, and
 * React Testing Library, with role-first as the default.
 */
export const FrameworkSelectors: Story = {
  name: '8. Selector cheatsheet',
  render: () => (
    <Page>
      <PageTitle>8. Selector cheatsheet</PageTitle>
      <Lead>
        The same intent expressed across the three common test runners. Reach for the role-based row
        first; fall back to the testid row when role + name cannot disambiguate.
      </Lead>

      <DocsTable
        headers={['Intent', 'Playwright', 'Cypress', 'React Testing Library']}
        rows={[
          {
            key: 'role',
            cells: [
              'By role + name (first choice)',
              <Code key="c">{"page.getByRole('button', { name })"}</Code>,
              <Code key="c">{"cy.findByRole('button', { name })"}</Code>,
              <Code key="c">{"screen.getByRole('button', { name })"}</Code>,
            ],
          },
          {
            key: 'testid',
            cells: [
              'By testid (fallback)',
              <Code key="c">{"page.getByTestId('x')"}</Code>,
              <Code key="c">{'cy.get(\'[data-testid="x"]\')'}</Code>,
              <Code key="c">{"screen.getByTestId('x')"}</Code>,
            ],
          },
          {
            key: 'portal',
            cells: [
              'Portal content',
              'Scope from page',
              'Document-wide by default',
              <span key="c">
                <Code>screen</Code> (not <Code>within</Code>)
              </span>,
            ],
          },
        ]}
      />

      <Note>
        Cypress is shown for reference only — Schatten does not depend on it. The role-based queries
        come from Testing Library&apos;s queries (built into Playwright and{' '}
        <Code>@testing-library/cypress</Code>).
      </Note>
    </Page>
  ),
}
