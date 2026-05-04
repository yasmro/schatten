import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from '../components/lv1/Badge'
import { Button } from '../components/lv1/Button'
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

const meta: Meta = {
  title: 'Welcome',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

const navigateToStory = (e: React.MouseEvent, storyPath: string, suffix = 'docs') => {
  e.preventDefault()
  const targetPath = `/docs/${storyPath}--${suffix}`
  const top = window.parent !== window ? window.parent : window
  const url = new URL(top.location.href)
  url.searchParams.set('path', targetPath)
  top.location.href = url.toString()
}

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
      <p className="text-sm font-semibold text-accent group-hover:underline">{name}</p>
      <p className="text-xs text-foreground-muted mt-0.5">{description}</p>
    </div>
  </a>
)

export const Overview: Story = {
  name: 'Overview',
  render: () => (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <div className="mb-16">
        <h1 className="text-5xl font-bold text-foreground mb-3 tracking-tight">Schatten</h1>
        <p className="text-lg text-foreground-muted leading-relaxed">
          A design system inspired by Japanese calligraphy — ink on paper.
          <br />
          Built with React, Tailwind CSS, Radix UI, and class-variance-authority.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-xl font-bold text-foreground mb-6">Concept</h2>
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-base font-semibold text-foreground mb-2">
              Schatten — the beauty in shadows
            </h3>
            <p className="text-sm text-foreground-muted leading-relaxed">
              "Schatten" is the German word for "shadow." Inspired by Jun'ichiro Tanizaki's{' '}
              <em>In Praise of Shadows</em> (<span className="font-serif">陰翳礼讃</span>), this
              design system finds beauty not in light, but in the subtle interplay of shadow and
              restraint. Rather than commanding attention with bold decoration and animation, we let
              the content itself stand forward — through whitespace, muted tones, and quiet
              refinement.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground mb-2">
              Ink &amp; Paper — the foundation
            </h3>
            <p className="text-sm text-foreground-muted leading-relaxed">
              The color system is built on the metaphor of <em>sumi</em> (ink) on <em>washi</em>{' '}
              (paper). The warmth of handmade paper, the depth of layered ink, and the vermillion
              seal of a calligrapher's signature — these are not decorations but the DNA of every
              token and component. Light and dark modes are simply two sides of the same sheet.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground mb-2">
              Restraint as expression
            </h3>
            <p className="text-sm text-foreground-muted leading-relaxed">
              A restrained UI is not a lack of design — it is a deliberate choice to let the work
              speak. Minimal color, subtle transitions, and typographic precision create a quiet
              confidence. The design recedes so the content can resonate.
            </p>
          </div>
        </div>
      </div>

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
              <Badge variant="outline">Outline</Badge>
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

      <div>
        <h2 className="text-xl font-bold text-foreground mb-4">Foundation</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <a
            href="/docs/foundation-color--colors"
            onClick={(e) => navigateToStory(e, 'foundation-color', 'colors')}
            className="group block border border-border rounded-xl overflow-hidden no-underline transition-shadow duration-200 hover:shadow-md"
          >
            <div className="flex items-center justify-center h-40 bg-surface">
              <div className="flex gap-1">
                {['bg-solid', 'bg-foreground-muted', 'bg-accent', 'bg-destructive'].map((c) => (
                  <div key={c} className={`w-8 h-8 rounded-lg ${c}`} />
                ))}
              </div>
            </div>
            <div className="px-4 py-3 border-t border-border">
              <p className="text-sm font-semibold text-accent group-hover:underline">Color</p>
              <p className="text-xs text-foreground-muted mt-0.5">Color tokens and scales.</p>
            </div>
          </a>

          <a
            href="/docs/foundation-typography--typography"
            onClick={(e) => navigateToStory(e, 'foundation-typography', 'typography')}
            className="group block border border-border rounded-xl overflow-hidden no-underline transition-shadow duration-200 hover:shadow-md"
          >
            <div className="flex items-center justify-center h-40 bg-surface">
              <div className="flex flex-col items-center gap-1">
                <span className="text-2xl font-bold text-foreground">Aa</span>
                <span className="text-xs text-foreground-muted">Hanken Grotesk</span>
              </div>
            </div>
            <div className="px-4 py-3 border-t border-border">
              <p className="text-sm font-semibold text-accent group-hover:underline">Typography</p>
              <p className="text-xs text-foreground-muted mt-0.5">Font scales and text styles.</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  ),
}
