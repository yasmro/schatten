import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowRight } from 'lucide-react'
import { Button } from '../components/lv1/Button/Button'
import { Text } from '../components/lv1/Text/Text'
import { buttonVariants } from '../variants/button'
import { textVariants } from '../variants/text'

/**
 * # Composition with `asChild`
 *
 * Schatten gives consumers **three** ways to put component styling on an
 * element that isn't the component's default tag. They are not
 * interchangeable — this page is the decision tree for picking the right
 * one. (The contributor-facing contract lives in
 * `component-api-conventions.md` and `component-architecture.md`.)
 */
const meta: Meta = {
  title: 'Patterns/Composition with asChild',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          'Schatten offers **three escape hatches** for "render this styling on a different element". Reach for the narrowest one that fits.',
          '',
          '| Escape hatch | What you get | Where it works | Available on |',
          '|---|---|---|---|',
          "| **`asChild`** (Radix `Slot`) | The component's resolved `className` **plus its forwarded props / ref** merged onto a **single child** — the child *becomes* the component | React only | **`Button` only** |",
          '| **`*Variants()`** (`buttonVariants()` / `textVariants()`) | **Only the class string** — your element keeps its full native typing | Any context: React, SSR HTML, email, framework `<Link>` | `Button`, `Text` |',
          '| **`as`** (closed tag enum) | Swaps the rendered semantic tag (`p` / `span` / `h1`–`h6`) | React only | **`Text` only** |',
          '',
          '## Decision tree',
          '',
          '1. **Just need a different semantic tag on `Text`?** (e.g. render a paragraph as an `<h2>`) → use **`as`**.',
          '2. **Only want the class string on your own element?** (framework `<Link>`, server-rendered HTML, email) → use **`*Variants()`**. Your element keeps its own typing.',
          "3. **Want your element to *behave as* the Button** — forward Button's events / ref / class onto it (the shadcn idiom)? → use **`asChild`**.",
          '',
          '## `asChild` does **not** project inner content',
          '',
          "In `asChild` mode Button renders **only `children`** — its `icon` and `isLoading` are *not* rendered. `asChild` makes your element a button-styled, button-behaving element; it does **not** stamp Button's icon / spinner internals onto your child. Author any icon inside your own child.",
          '',
          '## Anti-patterns',
          '',
          '```tsx',
          '// ✗ Text no longer exposes asChild (removed in v0.11.0).',
          '<Text asChild><a href="/x">Link</a></Text>',
          '// ✓ Use textVariants() on your element instead:',
          '<a href="/x" className={textVariants({ variant: \'body\' })}>Link</a>',
          '',
          '// ✗ Form inputs and Select trigger never take asChild (hard exclusion).',
          '<SelectTrigger asChild>…</SelectTrigger>',
          '',
          '// ✗ asChild does not add an icon — icon is dropped here:',
          '<Button asChild icon={ArrowRight}><a href="/x">Go</a></Button>',
          '// ✓ Author the icon inside your child:',
          '<Button asChild><a href="/x">Go <ArrowRight aria-hidden /></a></Button>',
          '```',
        ].join('\n'),
      },
    },
  },
}

export default meta
type Story = StoryObj

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-bold text-foreground mt-8 mb-2">{children}</h2>
)

const Caption = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm text-foreground-muted mb-4">{children}</p>
)

const Block = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="border border-border rounded-lg p-4">
    <h3 className="text-xs font-semibold text-foreground-muted uppercase tracking-wide mb-3">
      {title}
    </h3>
    <div className="flex flex-wrap items-center gap-3">{children}</div>
  </div>
)

/**
 * `asChild` — make a non-`<button>` element behave as a Button. Radix
 * `Slot` merges Button's `className` and forwards its props / ref onto the
 * single child. The child authors its own inner content (including any
 * icon), because Button renders only `children` in `asChild` mode.
 */
export const ButtonAsLink: Story = {
  name: 'asChild — Button as a link',
  parameters: {
    docs: {
      description: {
        story:
          "Use `asChild` when an anchor (or framework `<Link>`) should *behave as* a Button — events, ref, and classes are forwarded onto your element. Note the icon is authored inside the anchor; `asChild` does not project Button's `icon` prop.",
      },
    },
  },
  render: () => (
    <div className="p-8">
      <SectionTitle>asChild — Button as a link</SectionTitle>
      <Caption>
        {'<Button asChild><a href="…">…</a></Button>'} — the anchor receives Button styling and
        forwarded props.
      </Caption>
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
  parameters: {
    docs: {
      description: {
        story:
          'Use `buttonVariants()` when you want only the Button look on your own element — no prop forwarding, fully-typed. Works outside React too (server-rendered HTML, email).',
      },
    },
  },
  render: () => (
    <div className="p-8">
      <SectionTitle>buttonVariants() — class only</SectionTitle>
      <Caption>
        {'<a className={buttonVariants({ variant })}>…</a>'} — identical DOM, no prop forwarding.
      </Caption>
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
  parameters: {
    docs: {
      description: {
        story:
          'Render Text as a different semantic tag with `as`, or apply Text styling to an arbitrary element with `textVariants()`. These two cover everything the removed `asChild` did.',
      },
    },
  },
  render: () => (
    <div className="p-8">
      <SectionTitle>Text — as vs textVariants()</SectionTitle>
      <Caption>`as` for a semantic tag swap; `textVariants()` for an arbitrary element.</Caption>
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
