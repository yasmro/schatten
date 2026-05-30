import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../components/lv1/Button/Button'
import { Checkbox } from '../components/lv1/Checkbox/Checkbox'
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
import { Textarea } from '../components/lv1/Textarea/Textarea'

const meta: Meta = {
  title: 'Patterns/Form States',
  parameters: {
    layout: 'fullscreen',
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

const ComponentBlock = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="border border-border rounded-lg p-4">
    <h3 className="text-xs font-semibold text-foreground-muted uppercase tracking-wide mb-3">
      {title}
    </h3>
    <div className="flex flex-col gap-3">{children}</div>
  </div>
)

const StateMatrix = () => (
  <div className="grid grid-cols-2 gap-4">
    <ComponentBlock title="Enabled">
      <Input placeholder="Input" />
      <Textarea placeholder="Textarea" rows={2} />
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="a">Option A</SelectItem>
        </SelectContent>
      </Select>
      <div className="flex gap-3">
        <Checkbox label="Checkbox" />
        <Checkbox label="Checked" defaultChecked />
      </div>
      <RadioGroup defaultValue="b" className="flex-row gap-3">
        <Radio value="a" label="Radio A" />
        <Radio value="b" label="Radio B" />
      </RadioGroup>
      <div className="flex gap-3">
        <Switch label="Switch off" />
        <Switch label="Switch on" defaultChecked />
      </div>
      <div className="flex gap-2 flex-wrap">
        <Button size="sm">Primary</Button>
        <Button size="sm" variant="secondary">
          Secondary
        </Button>
        <Button size="sm" variant="tertiary">
          Tertiary
        </Button>
        <Button size="sm" variant="destructive">
          Destructive
        </Button>
        <Button size="sm" variant="link">
          Link
        </Button>
      </div>
    </ComponentBlock>

    <ComponentBlock title="Disabled">
      <Input placeholder="Input" disabled />
      <Textarea placeholder="Textarea" rows={2} disabled />
      <Select disabled>
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="a">Option A</SelectItem>
        </SelectContent>
      </Select>
      <div className="flex gap-3">
        <Checkbox label="Checkbox" disabled />
        <Checkbox label="Checked" disabled defaultChecked />
      </div>
      <RadioGroup defaultValue="b" disabled className="flex-row gap-3">
        <Radio value="a" label="Radio A" />
        <Radio value="b" label="Radio B" />
      </RadioGroup>
      <div className="flex gap-3">
        <Switch label="Switch off" disabled />
        <Switch label="Switch on" disabled defaultChecked />
      </div>
      <div className="flex gap-2 flex-wrap">
        <Button size="sm" disabled>
          Primary
        </Button>
        <Button size="sm" variant="secondary" disabled>
          Secondary
        </Button>
        <Button size="sm" variant="tertiary" disabled>
          Tertiary
        </Button>
        <Button size="sm" variant="destructive" disabled>
          Destructive
        </Button>
        <Button size="sm" variant="link" disabled>
          Link
        </Button>
      </div>
    </ComponentBlock>
  </div>
)

const PriorityMatrix = () => (
  <div className="grid grid-cols-3 gap-4">
    <ComponentBlock title="isError only">
      <Input placeholder="Input" isError />
      <Textarea placeholder="Textarea" rows={2} isError />
      <div className="flex gap-3">
        <Checkbox label="Checkbox" isError />
        <Switch label="Switch" isError />
      </div>
    </ComponentBlock>

    <ComponentBlock title="disabled only">
      <Input placeholder="Input" disabled />
      <Textarea placeholder="Textarea" rows={2} disabled />
      <div className="flex gap-3">
        <Checkbox label="Checkbox" disabled />
        <Switch label="Switch" disabled />
      </div>
    </ComponentBlock>

    <ComponentBlock title="disabled + isError">
      <Input placeholder="Input" disabled isError />
      <Textarea placeholder="Textarea" rows={2} disabled isError />
      <div className="flex gap-3">
        <Checkbox label="Checkbox" disabled isError />
        <Switch label="Switch" disabled isError />
      </div>
    </ComponentBlock>
  </div>
)

export const Audit: Story = {
  name: 'Disabled audit',
  render: () => (
    <div className="max-w-5xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-foreground mb-4">Form states audit</h1>
      <p className="text-base text-foreground-muted mb-8">
        Side-by-side enabled vs. disabled rendering for every lv1 form / action component. Toggle
        the Storybook theme between light and dark to verify both Modes; the underlying tokens (
        <code className="text-xs">--color-surface-disabled</code>,{' '}
        <code className="text-xs">--color-foreground-disabled</code>,{' '}
        <code className="text-xs">--color-border-disabled</code>) shift between Modes independently.
      </p>

      <SectionTitle>Enabled vs. Disabled</SectionTitle>
      <Caption>
        Disabled controls reuse the same role / shape language as their enabled counterpart — an
        outlined secondary stays outlined, a tertiary ghost stays ghost. Only the colour slots are
        remapped to the non-interactive token family.
      </Caption>
      <StateMatrix />

      <SectionTitle>Priority: disabled vs. isError</SectionTitle>
      <Caption>
        When a control is simultaneously <code className="text-xs">disabled</code> and{' '}
        <code className="text-xs">isError</code>, the disabled visual wins. The control is no longer
        actionable, so advertising validation state would be misleading. The control still emits{' '}
        <code className="text-xs">aria-invalid="true"</code> for assistive tech.
      </Caption>
      <PriorityMatrix />
    </div>
  ),
}
