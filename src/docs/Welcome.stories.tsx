import type { Meta, StoryObj } from '@storybook/react-vite'
import { CircleCheck } from 'lucide-react'
import { Badge } from '../components/lv1/Badge'
import { Button } from '../components/lv1/Button'
import { Callout } from '../components/lv1/Callout'
import { Checkbox } from '../components/lv1/Checkbox'
import { Field } from '../components/lv1/Field'
import { FieldSet } from '../components/lv1/FieldSet'
import { Input } from '../components/lv1/Input'
import { Radio, RadioGroup } from '../components/lv1/Radio'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/lv1/Select'
import { Spinner } from '../components/lv1/Spinner'
import { Switch } from '../components/lv1/Switch'
import { Text } from '../components/lv1/Text'
import { Textarea } from '../components/lv1/Textarea'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../components/lv1/Tooltip'
import { WELCOME_DEEP_LINKS, type WelcomeDeepLink } from './Welcome.links'

const meta: Meta = {
  title: 'Welcome',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

/**
 * `viewMode` must match the target entry's type in the Storybook index:
 * `'docs'` for autodocs pages (the lv1 component catalog), `'story'` for
 * Canvas-only stories (Tokens / Theming / CSS API / Patterns). Sending a
 * story entry through `/docs/` renders "No Preview".
 */
const navigateToStory = (
  e: React.MouseEvent,
  storyPath: string,
  suffix = 'docs',
  viewMode: 'docs' | 'story' = 'docs',
) => {
  e.preventDefault()
  const targetPath = `/${viewMode}/${storyPath}--${suffix}`
  const top = window.parent !== window ? window.parent : window
  const url = new URL(top.location.href)
  url.searchParams.set('path', targetPath)
  top.location.href = url.toString()
}

/** Build the `href` + `onClick` pair for a deep-link card from a manifest entry. */
const deepLinkProps = (link: WelcomeDeepLink) => ({
  href: `/${link.viewMode}/${link.slug}--${link.suffix}`,
  onClick: (e: React.MouseEvent) => navigateToStory(e, link.slug, link.suffix, link.viewMode),
})

const ComponentCard = ({
  name,
  description,
  children,
  storyPath,
}: {
  name: string
  description: string
  children: React.ReactNode
  storyPath: string
}) => (
  <a
    href={`/docs/${storyPath}--docs`}
    onClick={(e) => navigateToStory(e, storyPath)}
    className="group block border border-border rounded-xl overflow-hidden no-underline transition-shadow duration-200 hover:shadow-md"
  >
    {/* biome-ignore lint/a11y/useKeyWithClickEvents: preview area blocks parent link navigation */}
    {/* biome-ignore lint/a11y/noStaticElementInteractions: intentional click trap to prevent card navigation */}
    <div
      className="flex items-center justify-center h-40 bg-surface"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
      }}
    >
      {children}
    </div>
    <div className="px-4 py-3 border-t border-border">
      <p className="text-sm font-semibold text-vermillion group-hover:underline">{name}</p>
      <p className="text-xs text-foreground-muted mt-0.5">{description}</p>
    </div>
  </a>
)

/**
 * Text-only link card — unlike `ComponentCard` it has no interactive preview.
 * Used by the "Engineering discipline" and "Patterns" sections — internal
 * links route through `navigateToStory`, the external `.claude/rules/` link
 * opens GitHub in a new tab.
 */
const TextLinkCard = ({
  title,
  description,
  href,
  onClick,
  external = false,
}: {
  title: string
  description: string
  href: string
  onClick?: (e: React.MouseEvent) => void
  external?: boolean
}) => (
  <a
    href={href}
    onClick={onClick}
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    className="group block h-full border border-border rounded-xl p-5 no-underline transition-shadow duration-200 hover:shadow-md"
  >
    <p className="text-sm font-semibold text-vermillion group-hover:underline">
      {title}
      {external && (
        <>
          <span aria-hidden className="ml-1 text-foreground-muted">
            ↗
          </span>
          <span className="sr-only"> (opens in a new tab)</span>
        </>
      )}
    </p>
    <p className="text-xs text-foreground-muted mt-1.5 leading-relaxed">{description}</p>
  </a>
)

/** Preview glyphs for the Tokens cards, keyed by deep-link slug. */
const TOKEN_PREVIEWS: Record<string, React.ReactNode> = {
  'tokens-color': (
    <div className="flex gap-1">
      {['bg-solid', 'bg-foreground-muted', 'bg-vermillion', 'bg-destructive'].map((c) => (
        <div key={c} className={`w-8 h-8 rounded-lg ${c}`} />
      ))}
    </div>
  ),
  'tokens-typography': (
    <div className="flex flex-col items-center gap-1">
      <span className="text-2xl font-bold text-foreground">Aa</span>
      <span className="text-xs text-foreground-muted">Hanken Grotesk</span>
    </div>
  ),
}

/**
 * Tokens-section card — same chrome as `ComponentCard` but its preview is a
 * static glyph (no interactive click-trap) and its link routes through the
 * `WELCOME_DEEP_LINKS` manifest.
 */
const TokenCard = ({ link }: { link: WelcomeDeepLink }) => (
  <a
    {...deepLinkProps(link)}
    className="group block border border-border rounded-xl overflow-hidden no-underline transition-shadow duration-200 hover:shadow-md"
  >
    <div className="flex items-center justify-center h-40 bg-surface">
      {TOKEN_PREVIEWS[link.slug]}
    </div>
    <div className="px-4 py-3 border-t border-border">
      <p className="text-sm font-semibold text-vermillion group-hover:underline">{link.title}</p>
      <p className="text-xs text-foreground-muted mt-0.5">{link.description}</p>
    </div>
  </a>
)

const engineeringLinks = WELCOME_DEEP_LINKS.filter((l) => l.section === 'engineering')
const tokenLinks = WELCOME_DEEP_LINKS.filter((l) => l.section === 'tokens')
const patternsLinks = WELCOME_DEEP_LINKS.filter((l) => l.section === 'patterns')

export const Overview: Story = {
  name: 'Overview',
  render: () => (
    <div className="max-w-4xl mx-auto px-8 py-16">
      {/* 1. Hero */}
      <div className="mb-16">
        <h1 className="text-5xl font-bold text-foreground mb-3 tracking-tight">Schatten</h1>
        <p className="text-lg text-foreground-muted leading-relaxed">
          A design system inspired by Japanese calligraphy — ink on paper.
          <br />
          Built with React, Tailwind CSS, Radix UI, and class-variance-authority.
        </p>
      </div>

      {/* 2. What & Why — the evaluator's "what is this / why does it exist" */}
      <div className="mb-16">
        <h2 className="text-xl font-bold text-foreground mb-4">What is Schatten?</h2>
        <p className="text-sm text-foreground-muted leading-relaxed">
          Schatten is a React component library built on the conventions of{' '}
          <a
            href="https://ui.shadcn.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-info underline"
          >
            shadcn/ui
          </a>{' '}
          (Radix UI primitives + class-variance-authority + a <code>cn</code> utility), restyled
          around a Japanese visual language — <em>sumi</em> ink, <em>washi</em> paper, and a
          vermillion seal — with a runtime seasonal theme system based on the twenty-four solar
          terms (<span className="font-serif">二十四節気</span>).
        </p>
        <p className="text-sm text-foreground-muted leading-relaxed mt-3">
          It is a portfolio and learning project. As much as a set of components, it is an exhibit
          of <em>how</em> a design system is operated — the rules, the contracts, and the tests that
          keep it honest.
        </p>
      </div>

      {/* 3. Concept — the aesthetic "why", condensed */}
      <div className="mb-16">
        <h2 className="text-xl font-bold text-foreground mb-6">Concept</h2>
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-base font-semibold text-foreground mb-2">
              Schatten — the beauty in shadows
            </h3>
            <p className="text-sm text-foreground-muted leading-relaxed">
              "Schatten" is the German word for "shadow." Inspired by Jun'ichiro Tanizaki's{' '}
              <em>In Praise of Shadows</em> (<span className="font-serif">陰翳礼讃</span>), the
              system finds beauty in restraint rather than bold decoration — letting content stand
              forward through whitespace and muted tones.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground mb-2">
              Ink &amp; Paper — the foundation
            </h3>
            <p className="text-sm text-foreground-muted leading-relaxed">
              The color system is built on the metaphor of <em>sumi</em> (ink) on <em>washi</em>{' '}
              (paper): the warmth of handmade paper, the depth of layered ink, and the vermillion
              seal of a calligrapher's signature. Light and dark modes are two sides of the same
              sheet.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground mb-2">
              Restraint as expression
            </h3>
            <p className="text-sm text-foreground-muted leading-relaxed">
              A restrained UI is a deliberate choice to let the work speak. Minimal color, subtle
              transitions, and typographic precision create a quiet confidence.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Engineering discipline — the differentiators an evaluator can inspect */}
      <div className="mb-16">
        <h2 className="text-xl font-bold text-foreground mb-2">Engineering discipline</h2>
        <p className="text-sm text-foreground-muted leading-relaxed mb-6">
          The parts worth inspecting are less the components themselves than how they are governed.
          Four places to look:
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <TextLinkCard
            title="Rule-driven operation"
            description="Every architectural decision lives in a versioned contract under .claude/rules/ that both human and AI contributors follow — component API shapes, the token hierarchy, the a11y contract."
            href="https://github.com/yasmro/schatten/tree/main/.claude/rules"
            external
          />
          {engineeringLinks.map((link) => (
            <TextLinkCard
              key={link.title}
              title={link.title}
              description={link.description}
              {...deepLinkProps(link)}
            />
          ))}
        </div>
      </div>

      {/* 5. Component catalog */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">UI Components</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <ComponentCard
            name="Button"
            description="Triggers actions and events."
            storyPath="components-lv1-button"
          >
            <Button>Button</Button>
          </ComponentCard>

          <ComponentCard
            name="Badge"
            description="Displays a status or label."
            storyPath="components-lv1-badge"
          >
            <div className="flex gap-2">
              <Badge>Default</Badge>
              <Badge variant="success" appearance="subtle">
                Active
              </Badge>
              <Badge appearance="outline">Outline</Badge>
            </div>
          </ComponentCard>

          <ComponentCard
            name="Spinner"
            description="Indicates a loading state."
            storyPath="components-lv1-spinner"
          >
            <Spinner />
          </ComponentCard>

          <ComponentCard
            name="Text"
            description="Renders styled text content."
            storyPath="components-lv1-text"
          >
            <Text variant="heading" size="lg">
              Heading
            </Text>
          </ComponentCard>

          <ComponentCard
            name="Tooltip"
            description="Displays additional info on hover."
            storyPath="components-lv1-tooltip"
          >
            <TooltipProvider>
              <Tooltip defaultOpen>
                <TooltipTrigger>
                  <Button variant="secondary">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>Helpful info</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </ComponentCard>

          <ComponentCard
            name="Toast"
            description="Transient notifications with variants."
            storyPath="components-lv1-toast"
          >
            <div className="relative flex w-44 items-start gap-2 border border-success bg-success-subtle p-3 pr-8 text-xs text-success shadow-sm">
              <CircleCheck className="mt-0.5 size-4 shrink-0" aria-hidden />
              <div className="flex flex-col gap-0.5">
                <div className="font-semibold leading-tight">Saved</div>
                <div className="leading-snug opacity-90">Your changes have been saved.</div>
              </div>
              <span
                aria-hidden
                className="absolute top-1 right-1 inline-flex size-5 items-center justify-center"
              >
                ×
              </span>
            </div>
          </ComponentCard>

          <ComponentCard
            name="Callout"
            description="Inline contextual notices."
            storyPath="components-lv1-callout"
          >
            <div className="w-48 scale-90">
              <Callout variant="info" title="Heads up">
                A beta feature.
              </Callout>
            </div>
          </ComponentCard>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">Form Components</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <ComponentCard
            name="Field"
            description="Wraps inputs with label and error."
            storyPath="components-lv1-field"
          >
            <Field label="Email" description="Your email address.">
              <Input placeholder="you@example.com" className="w-40" />
            </Field>
          </ComponentCard>

          <ComponentCard
            name="FieldSet"
            description="Groups related form fields."
            storyPath="components-lv1-fieldset"
          >
            <FieldSet legend="Contact">
              <Field label="Email">
                <Input placeholder="you@example.com" className="w-40" />
              </Field>
            </FieldSet>
          </ComponentCard>

          <ComponentCard
            name="Input"
            description="Accepts user text input."
            storyPath="components-lv1-input"
          >
            <Input placeholder="Enter text..." className="w-40" />
          </ComponentCard>

          <ComponentCard
            name="Textarea"
            description="Multi-line text input."
            storyPath="components-lv1-textarea"
          >
            <Textarea placeholder="Write something..." className="w-40" rows={2} />
          </ComponentCard>

          <ComponentCard
            name="Select"
            description="Picks one option from a list."
            storyPath="components-lv1-select"
          >
            <Select defaultValue="apple">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
              </SelectContent>
            </Select>
          </ComponentCard>

          <ComponentCard
            name="Checkbox"
            description="Toggles a boolean value."
            storyPath="components-lv1-checkbox"
          >
            <div className="flex flex-col gap-2">
              <Checkbox label="Option A" defaultChecked />
              <Checkbox label="Option B" />
            </div>
          </ComponentCard>

          <ComponentCard
            name="Radio"
            description="Selects one option from a group."
            storyPath="components-lv1-radio"
          >
            <RadioGroup defaultValue="a">
              <Radio value="a" label="Option A" />
              <Radio value="b" label="Option B" />
            </RadioGroup>
          </ComponentCard>

          <ComponentCard
            name="Switch"
            description="Toggles between on and off."
            storyPath="components-lv1-switch"
          >
            <Switch label="Enable" defaultChecked />
          </ComponentCard>
        </div>
      </div>

      {/* 6. Tokens (was "Foundation" — renamed to the new IA vocabulary, #336 deferred) */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-foreground mb-4">Tokens</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {tokenLinks.map((link) => (
            <TokenCard key={link.slug} link={link} />
          ))}
        </div>
      </div>

      {/* 7. Patterns */}
      <div>
        <h2 className="text-xl font-bold text-foreground mb-2">Patterns</h2>
        <p className="text-sm text-foreground-muted leading-relaxed mb-6">
          Cross-component recipes and principles — how the primitives compose in practice.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {patternsLinks.map((link) => (
            <TextLinkCard
              key={link.title}
              title={link.title}
              description={link.description}
              {...deepLinkProps(link)}
            />
          ))}
        </div>
      </div>
    </div>
  ),
}
