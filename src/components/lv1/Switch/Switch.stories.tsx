import type { Meta, StoryObj } from '@storybook/react-vite'
import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
  title: 'Components/lv1/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'Size of the switch.',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: '"sm" | "md" | "lg"' },
        defaultValue: { summary: 'md' },
      },
    },
    label: {
      description: 'Label text displayed next to the switch. Automatically associates via id.',
      control: 'text',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    checked: {
      description: 'Controlled checked state.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    defaultChecked: {
      description: 'Default checked state for uncontrolled usage.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isError: {
      description: 'Displays the switch in an error state with error border and ring.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      description: 'Disables the switch and applies disabled styling.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      description: 'Marks the switch as required for form validation.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Playground: Story = {
  name: 'Playground',
  args: {
    size: 'md',
    label: 'Enable notifications',
    defaultChecked: false,
  },
}

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div className="flex flex-col gap-3">
      <Switch size="sm" label="Small" defaultChecked />
      <Switch size="md" label="Medium" defaultChecked />
      <Switch size="lg" label="Large" defaultChecked />
    </div>
  ),
}

export const States: Story = {
  name: 'States',
  render: () => (
    <div className="flex items-center gap-4">
      {/* Bare state-matrix switches have no visible label by design —
       * aria-label keeps the axe `button-name` rule green without changing
       * a pixel (#345). */}
      <Switch aria-label="Off" />
      <Switch defaultChecked aria-label="On" />
    </div>
  ),
}

export const WithLabels: Story = {
  name: 'With Labels',
  render: () => (
    <div className="flex flex-col gap-3">
      <Switch label="Enable notifications" defaultChecked />
      <Switch label="Dark mode" />
      <Switch label="Unavailable option" disabled />
    </div>
  ),
}

export const ErrorState: Story = {
  name: 'Error',
  render: () => (
    <div className="flex flex-col gap-3">
      <Switch label="Unchecked error" isError />
      <Switch label="Checked error" isError defaultChecked />
    </div>
  ),
}

export const Disabled: Story = {
  name: 'Disabled',
  render: () => (
    <div className="flex flex-col gap-3">
      <Switch label="Disabled unchecked" disabled />
      {/* The next row is the `md` reference (Switch's default size); the two
       * after it put `sm` and `lg` beside it, so all three sizes of
       * `disabled + checked` are visible at once (#531).
       *
       * Why the intersection needs its own baseline: the check icon scales
       * with the track (sm 0.625rem / md 0.75rem / lg 0.875rem), so at `sm`
       * it is a ~1px stroke — and #524 shipped in the first place because a
       * regression that size fits under `maxDiffPixelRatio: 0.01`. Only a
       * frame that actually contains `sm` can catch the next one.
       *
       * Measured on these baselines (#531): the stroke reaches the full
       * `--color-foreground-disabled` value (`gray-500`, `rgb(122,122,122)`)
       * at every size — antialiasing does NOT dilute the `sm` peak — giving
       * 3.83:1 against the light track and 3.53:1 against the dark one, i.e.
       * `sm` is no worse than `md`. Those two numbers are a property of the
       * token pair, not of this story; see the PR for the follow-up on them. */}
      <Switch label="Disabled checked" disabled defaultChecked />
      <Switch size="sm" label="Disabled checked (sm)" disabled defaultChecked />
      <Switch size="lg" label="Disabled checked (lg)" disabled defaultChecked />
    </div>
  ),
}

export const DisabledWithError: Story = {
  name: 'Disabled with error',
  render: () => (
    <div className="flex flex-col gap-3">
      <Switch label="Disabled + error" disabled isError />
      <Switch label="Disabled + error, checked" disabled isError defaultChecked />
    </div>
  ),
}

export const AllStates: Story = {
  name: 'All states (cognitive review)',
  render: () => (
    <div className="grid grid-cols-2 gap-x-8 gap-y-3 items-start">
      <div className="font-medium text-foreground">Enabled</div>
      <div className="font-medium text-foreground">Disabled</div>
      <Switch label="Off" />
      <Switch label="Off (disabled)" disabled />
      <Switch label="On" defaultChecked />
      <Switch label="On (disabled)" defaultChecked disabled />
    </div>
  ),
}
