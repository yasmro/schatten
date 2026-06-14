import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './Select'

const meta: Meta<typeof SelectTrigger> = {
  title: 'Components/lv1/Select',
  component: SelectTrigger,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'Size of the select trigger.',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: '"sm" | "md" | "lg"' },
        defaultValue: { summary: 'md' },
      },
    },
    isError: {
      description: 'Displays the select trigger in an error state with error border and ring.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      description: 'Disables the select and applies disabled styling.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-56">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof SelectTrigger>

export const Playground: Story = {
  name: 'Playground',
  args: {
    size: 'md',
    isError: false,
    disabled: false,
  },
  render: (args) => (
    <Select>
      <SelectTrigger {...args}>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="cherry">Cherry</SelectItem>
        <SelectItem value="grape">Grape</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div className="flex flex-col gap-4">
      {/* role="combobox" gets no accessible name from its content, so every
       * standalone trigger carries aria-label (the real-usage alternative is
       * a wrapping <Field label> — see SelectTriggerProps TSDoc) (#345). */}
      <Select>
        <SelectTrigger size="sm" aria-label="Small select">
          <SelectValue placeholder="Small" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger size="md" aria-label="Medium select">
          <SelectValue placeholder="Medium" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger size="lg" aria-label="Large select">
          <SelectValue placeholder="Large" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const WithGroups: Story = {
  name: 'With Groups',
  render: () => (
    <Select>
      <SelectTrigger aria-label="Food">
        <SelectValue placeholder="Select a food" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="cherry">Cherry</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="broccoli">Broccoli</SelectItem>
          <SelectItem value="spinach">Spinach</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const ErrorState: Story = {
  name: 'Error',
  render: () => (
    <div className="flex flex-col gap-4">
      <Select>
        <SelectTrigger isError aria-label="Error state">
          <SelectValue placeholder="Error state" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="apple">
        <SelectTrigger isError aria-label="Error state with value">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const Disabled: Story = {
  name: 'Disabled',
  render: () => (
    <div className="flex flex-col gap-4">
      <Select disabled>
        <SelectTrigger aria-label="Disabled">
          <SelectValue placeholder="Disabled" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
        </SelectContent>
      </Select>
      <Select disabled defaultValue="apple">
        <SelectTrigger aria-label="Disabled with value">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const DisabledWithError: Story = {
  name: 'Disabled with error',
  render: () => (
    <div className="flex flex-col gap-4">
      <Select disabled>
        <SelectTrigger isError aria-label="Disabled with error">
          <SelectValue placeholder="Disabled + error" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
        </SelectContent>
      </Select>
      <Select disabled defaultValue="apple">
        <SelectTrigger isError aria-label="Disabled error with value">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const ManyItems: Story = {
  name: 'Many Items',
  render: () => {
    const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`)
    return (
      <Select>
        <SelectTrigger aria-label="Items">
          <SelectValue placeholder="50 items" />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  },
}

export const LongText: Story = {
  name: 'Long Text',
  render: () => (
    <Select>
      <SelectTrigger aria-label="Option">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="short">Short</SelectItem>
        <SelectItem value="medium">A medium length option label</SelectItem>
        <SelectItem value="long">
          This is a very long option label that might cause layout issues in the dropdown
        </SelectItem>
        <SelectItem value="longer">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua
        </SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const DisabledItems: Story = {
  name: 'Disabled Items',
  render: () => (
    <Select>
      <SelectTrigger aria-label="Availability">
        <SelectValue placeholder="Some items disabled" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana" disabled>
          Banana (sold out)
        </SelectItem>
        <SelectItem value="cherry">Cherry</SelectItem>
        <SelectItem value="grape" disabled>
          Grape (sold out)
        </SelectItem>
      </SelectContent>
    </Select>
  ),
}

/**
 * Content sub-element coverage in one frame — pins `defaultOpen` so VRT
 * can capture the portaled content (label / item / separator / group /
 * disabled item / item-indicator) in a single screenshot.
 *
 * The other stories above (Sizes / ErrorState / Disabled / …) keep
 * their trigger-only focus on purpose — each one verifies a specific
 * axis (size, error, disabled), and overloading them with content
 * would blur the visual diff.
 *
 * Hidden from Docs (`docs.disable: true`) because Radix portals the
 * open content into `document.body`, which on the docs page floats
 * over the surrounding story descriptions and confuses readers. The
 * story is still mounted for the dedicated story URL — which is what
 * VRT targets — so this only suppresses the docs-tab rendering.
 */
export const OpenContent: Story = {
  name: 'Open Content (VRT)',
  parameters: {
    layout: 'padded',
    docs: { disable: true },
    // Known Radix behavior, not fixable from Schatten: while open, Radix
    // hides the rest of the page via aria-hidden but leaves the trigger
    // focusable (focus is trapped in the listbox, so there is no real
    // keyboard escape). Mirrors the same disable in Select.vrt.spec.ts.
    a11y: { config: { rules: [{ id: 'aria-hidden-focus', enabled: false }] } },
  },
  render: () => (
    <Select defaultOpen>
      <SelectTrigger aria-label="Choose">
        <SelectValue placeholder="Choose" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="broccoli" disabled>
            Broccoli (sold out)
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}
