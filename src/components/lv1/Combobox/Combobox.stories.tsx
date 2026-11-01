import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Field } from '../Field'
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxValue,
} from './Combobox'

const FRUITS = ['Apple', 'Banana', 'Blueberry', 'Cherry', 'Grape', 'Mango', 'Orange', 'Peach']

const meta: Meta<typeof ComboboxTrigger> = {
  title: 'Components/lv1/Combobox',
  component: ComboboxTrigger,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Single-select dropdown with a search field inside the panel. Use `Select` when the options are few enough to scan, and `Combobox` when the user needs to search them.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'Size of the combobox trigger.',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: '"sm" | "md" | "lg"' },
        defaultValue: { summary: 'md' },
      },
    },
    isError: {
      description: 'Displays the combobox trigger in an error state with error border and ring.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      description: 'Disables the combobox and applies disabled styling.',
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
type Story = StoryObj<typeof ComboboxTrigger>

const Panel = () => (
  <ComboboxContent>
    <ComboboxInput placeholder="Search fruit" />
    <ComboboxList>
      {FRUITS.map((fruit) => (
        <ComboboxItem key={fruit} value={fruit.toLowerCase()}>
          {fruit}
        </ComboboxItem>
      ))}
    </ComboboxList>
    <ComboboxEmpty>No results</ComboboxEmpty>
  </ComboboxContent>
)

export const Playground: Story = {
  name: 'Playground',
  args: {
    size: 'md',
    isError: false,
    disabled: false,
    'aria-label': 'Fruit',
  },
  render: (args) => (
    <Combobox>
      <ComboboxTrigger {...args}>
        <ComboboxValue placeholder="Select a fruit" />
      </ComboboxTrigger>
      <Panel />
    </Combobox>
  ),
}

/** All size options, with one selected value. */
export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div className="flex flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Combobox key={size} defaultValue="apple">
          <ComboboxTrigger size={size} aria-label={`${size} combobox`}>
            <ComboboxValue placeholder="Select a fruit" />
          </ComboboxTrigger>
          <Panel />
        </Combobox>
      ))}
    </div>
  ),
}

/** Error and disabled, standalone and through `Field`. */
export const States: Story = {
  name: 'States',
  render: () => (
    <div className="flex flex-col gap-4">
      <Field label="Error" error="Pick a fruit.">
        <Combobox>
          <ComboboxTrigger>
            <ComboboxValue placeholder="Select a fruit" />
          </ComboboxTrigger>
          <Panel />
        </Combobox>
      </Field>
      <Field label="Disabled" disabled>
        <Combobox defaultValue="apple">
          <ComboboxTrigger>
            <ComboboxValue placeholder="Select a fruit" />
          </ComboboxTrigger>
          <Panel />
        </Combobox>
      </Field>
    </div>
  ),
}

/** Open panel with groups, a separator, a selected and a disabled option. */
export const OpenContent: Story = {
  name: 'Open Content',
  render: () => (
    <Combobox defaultOpen defaultValue="apple">
      <ComboboxTrigger aria-label="Fruit">
        <ComboboxValue placeholder="Select a fruit" />
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput placeholder="Search fruit" />
        <ComboboxList>
          <ComboboxGroup>
            <ComboboxLabel>Pome</ComboboxLabel>
            <ComboboxItem value="apple">Apple</ComboboxItem>
            <ComboboxItem value="pear" disabled>
              Pear
            </ComboboxItem>
          </ComboboxGroup>
          <ComboboxSeparator />
          <ComboboxGroup>
            <ComboboxLabel>Stone</ComboboxLabel>
            <ComboboxItem value="cherry">Cherry</ComboboxItem>
            <ComboboxItem value="peach">Peach</ComboboxItem>
          </ComboboxGroup>
        </ComboboxList>
        <ComboboxEmpty>No results</ComboboxEmpty>
      </ComboboxContent>
    </Combobox>
  ),
}

/** Options fetched elsewhere: `filter={false}` plus `onSearchChange`. */
export const ServerSearch: Story = {
  name: 'Server Search',
  render: function ServerSearchStory() {
    const [search, setSearch] = useState('')
    const results = FRUITS.filter((fruit) => fruit.toLowerCase().startsWith(search.toLowerCase()))
    return (
      <Combobox filter={false} onSearchChange={setSearch}>
        <ComboboxTrigger aria-label="Fruit">
          <ComboboxValue placeholder="Select a fruit" />
        </ComboboxTrigger>
        <ComboboxContent>
          <ComboboxInput placeholder="Starts with…" />
          <ComboboxList>
            {results.map((fruit) => (
              <ComboboxItem key={fruit} value={fruit.toLowerCase()}>
                {fruit}
              </ComboboxItem>
            ))}
          </ComboboxList>
          <ComboboxEmpty>No results</ComboboxEmpty>
        </ComboboxContent>
      </Combobox>
    )
  },
}
