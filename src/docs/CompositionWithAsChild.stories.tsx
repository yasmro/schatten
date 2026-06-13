import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowRight } from 'lucide-react'
import { Button } from '../components/lv1/Button/Button'
import { Text } from '../components/lv1/Text/Text'
import { buttonVariants } from '../variants/button'
import { textVariants } from '../variants/text'
import { CodeBlock, Lead, Note, PageTitle, SectionTitle } from './docs-ui'

/*
 * Patterns: asChild / *Variants() / as の使い分け。narrative（escape-hatch
 * table / decision tree / anti-patterns）は先頭の `Overview` story に inline
 * JSX として描画する。`layout: 'fullscreen'` かつ autodocs 非保持のため
 * `parameters.docs.description.*` は Canvas に出ず dormant になる ── 規約は
 * storybook-guideline.md「Hand-built docs pages — render prose inline」。
 */
const meta: Meta = {
  title: 'Patterns/Composition with asChild',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

const Block = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="border border-border rounded-lg p-4">
    <h3 className="text-xs font-semibold text-foreground-muted uppercase tracking-wide mb-3">
      {title}
    </h3>
    <div className="flex flex-wrap items-center gap-3">{children}</div>
  </div>
)

/**
 * Landing page for the three escape hatches. The narrative (comparison table /
 * decision tree / anti-patterns) is rendered inline here so it is visible in
 * Canvas — see storybook-guideline.md "Hand-built docs pages — render prose
 * inline".
 */
export const Overview: Story = {
  name: 'Overview',
  render: () => (
    <div className="mx-auto max-w-3xl px-8 py-12">
      <PageTitle>Composition with asChild</PageTitle>
      <Lead>
        Schatten offers three escape hatches for "render this styling on a different element". They
        are not interchangeable — reach for the narrowest one that fits. (The contributor-facing
        contract lives in <code className="text-xs">component-api-conventions.md</code> and{' '}
        <code className="text-xs">component-architecture.md</code>.)
      </Lead>

      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th scope="col" className="text-left font-semibold text-foreground py-2 pr-4 align-top">
              Escape hatch
            </th>
            <th scope="col" className="text-left font-semibold text-foreground py-2 pr-4 align-top">
              What you get
            </th>
            <th scope="col" className="text-left font-semibold text-foreground py-2 pr-4 align-top">
              Where it works
            </th>
            <th scope="col" className="text-left font-semibold text-foreground py-2 align-top">
              Available on
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border align-top">
            <td className="py-2 pr-4 text-foreground-muted">
              <code className="text-xs">asChild</code> (Radix <code className="text-xs">Slot</code>)
            </td>
            <td className="py-2 pr-4 text-foreground-muted">
              The component's resolved <code className="text-xs">className</code>{' '}
              <strong>plus its forwarded props / ref</strong> merged onto a single child — the child{' '}
              <em>becomes</em> the component
            </td>
            <td className="py-2 pr-4 text-foreground-muted">React only</td>
            <td className="py-2 text-foreground-muted">
              <strong>
                <code className="text-xs">Button</code> only
              </strong>
            </td>
          </tr>
          <tr className="border-b border-border align-top">
            <td className="py-2 pr-4 text-foreground-muted">
              <code className="text-xs">*Variants()</code> (
              <code className="text-xs">buttonVariants()</code> /{' '}
              <code className="text-xs">textVariants()</code>)
            </td>
            <td className="py-2 pr-4 text-foreground-muted">
              <strong>Only the class string</strong> — your element keeps its full native typing
            </td>
            <td className="py-2 pr-4 text-foreground-muted">
              Any context: React, SSR HTML, email, framework{' '}
              <code className="text-xs">&lt;Link&gt;</code>
            </td>
            <td className="py-2 text-foreground-muted">
              <code className="text-xs">Button</code>, <code className="text-xs">Text</code>
            </td>
          </tr>
          <tr className="border-b border-border last:border-b-0 align-top">
            <td className="py-2 pr-4 text-foreground-muted">
              <code className="text-xs">as</code> (closed tag enum)
            </td>
            <td className="py-2 pr-4 text-foreground-muted">
              Swaps the rendered semantic tag (<code className="text-xs">p</code> /{' '}
              <code className="text-xs">span</code> / <code className="text-xs">h1</code>–
              <code className="text-xs">h6</code>)
            </td>
            <td className="py-2 pr-4 text-foreground-muted">React only</td>
            <td className="py-2 text-foreground-muted">
              <strong>
                <code className="text-xs">Text</code> only
              </strong>
            </td>
          </tr>
        </tbody>
      </table>

      <Note>
        This table is the consumer-facing companion to the contributor contract in{' '}
        <code className="text-xs">component-api-conventions.md §"asChild vs *Variants()"</code> —
        keep that doc as the source of truth if the two ever drift.
      </Note>

      <SectionTitle>Decision tree</SectionTitle>
      <ol className="list-decimal flex flex-col gap-2 pl-6 text-sm text-foreground-muted">
        <li>
          <strong>Just need a different semantic tag on Text?</strong> (e.g. render a paragraph as
          an <code className="text-xs">&lt;h2&gt;</code>) → use <code className="text-xs">as</code>.
        </li>
        <li>
          <strong>Only want the class string on your own element?</strong> (framework{' '}
          <code className="text-xs">&lt;Link&gt;</code>, server-rendered HTML, email) → use{' '}
          <code className="text-xs">*Variants()</code>. Your element keeps its own typing.
        </li>
        <li>
          <strong>Want your element to behave as the Button</strong> — forward Button's events / ref
          / class onto it (the shadcn idiom)? → use <code className="text-xs">asChild</code>.
        </li>
      </ol>

      <SectionTitle>asChild does not project inner content</SectionTitle>
      <Note>
        In <code className="text-xs">asChild</code> mode Button renders{' '}
        <strong>
          only <code className="text-xs">children</code>
        </strong>{' '}
        — its <code className="text-xs">icon</code> and <code className="text-xs">isLoading</code>{' '}
        are <em>not</em> rendered. <code className="text-xs">asChild</code> makes your element a
        button-styled, button-behaving element; it does not stamp Button's icon / spinner internals
        onto your child. Author any icon inside your own child.
      </Note>

      <SectionTitle>Anti-patterns</SectionTitle>
      <CodeBlock>{`// ✗ Text no longer exposes asChild (removed in v0.11.0).
<Text asChild><a href="/x">Link</a></Text>
// ✓ Use textVariants() on your element instead:
<a href="/x" className={textVariants({ variant: 'body' })}>Link</a>

// ✗ Form inputs and Select trigger never take asChild (hard exclusion).
<SelectTrigger asChild>…</SelectTrigger>

// ✗ asChild does not add an icon — icon is dropped here:
<Button asChild icon={ArrowRight}><a href="/x">Go</a></Button>
// ✓ Author the icon inside your child:
<Button asChild><a href="/x">Go <ArrowRight aria-hidden /></a></Button>`}</CodeBlock>
    </div>
  ),
}

/**
 * `asChild` — make a non-`<button>` element behave as a Button. Radix
 * `Slot` merges Button's `className` and forwards its props / ref onto the
 * single child. The child authors its own inner content (including any
 * icon), because Button renders only `children` in `asChild` mode.
 */
export const ButtonAsLink: Story = {
  name: 'asChild — Button as a link',
  render: () => (
    <div className="p-8">
      <SectionTitle>asChild — Button as a link</SectionTitle>
      <Note>
        {'<Button asChild><a href="…">…</a></Button>'} — the anchor receives Button styling and
        forwarded props / ref. The icon is authored inside the anchor;{' '}
        <code className="text-xs">asChild</code> does not project Button's{' '}
        <code className="text-xs">icon</code> prop.
      </Note>
      <Block title="Rendered">
        <Button asChild>
          <a href="#button-as-link">Primary link</a>
        </Button>
        <Button asChild variant="secondary">
          <a href="#button-as-link">Secondary link</a>
        </Button>
        <Button asChild>
          <a href="#button-as-link">
            With icon <ArrowRight aria-hidden="true" />
          </a>
        </Button>
      </Block>
    </div>
  ),
}

/**
 * `buttonVariants()` — only the class string. The consumer's element keeps
 * its full native typing, and it works in any context (SSR HTML, email,
 * framework Link) because nothing React-specific is involved.
 */
export const LinkWithButtonVariants: Story = {
  name: 'buttonVariants() — class only',
  render: () => (
    <div className="p-8">
      <SectionTitle>buttonVariants() — class only</SectionTitle>
      <Note>
        {'<a className={buttonVariants({ variant })}>…</a>'} — identical DOM, no prop forwarding,
        fully typed. Works outside React too (server-rendered HTML, email).
      </Note>
      <Block title="Rendered">
        <a href="#link-variants" className={buttonVariants({ variant: 'primary' })}>
          Primary
        </a>
        <a href="#link-variants" className={buttonVariants({ variant: 'secondary' })}>
          Secondary
        </a>
        <a href="#link-variants" className={buttonVariants({ variant: 'destructive', size: 'sm' })}>
          Destructive sm
        </a>
      </Block>
    </div>
  ),
}

/**
 * `Text` polymorphism — `as` swaps the semantic tag; `textVariants()` puts
 * Text styling on an arbitrary element. `Text` does **not** expose
 * `asChild` (removed in v0.11.0).
 */
export const TextPolymorphism: Story = {
  name: 'Text — as vs textVariants()',
  render: () => (
    <div className="p-8">
      <SectionTitle>Text — as vs textVariants()</SectionTitle>
      <Note>`as` for a semantic tag swap; `textVariants()` for an arbitrary element.</Note>
      <div className="flex flex-col gap-4">
        <Block title="as — semantic tag swap">
          <Text as="h2" variant="heading" size="lg">
            Heading rendered as &lt;h2&gt;
          </Text>
          <Text as="span" color="muted">
            Body rendered as &lt;span&gt;
          </Text>
        </Block>
        <Block title="textVariants() — styling on an arbitrary element">
          <a href="#text-variants" className={textVariants({ variant: 'body', color: 'info' })}>
            An anchor styled with textVariants()
          </a>
        </Block>
      </div>
    </div>
  ),
}
