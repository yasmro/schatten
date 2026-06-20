import type { Meta, StoryObj } from '@storybook/react-vite'
import { Settings } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { Text } from '../Text/Text'
import {
  Popover,
  PopoverAnchor,
  PopoverClose,
  PopoverContent,
  type PopoverContentProps,
  PopoverTrigger,
} from './Popover'

const meta: Meta<typeof PopoverContent> = {
  title: 'Components/lv1/Popover',
  component: PopoverContent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    side: {
      description: 'The preferred side of the trigger to render the popover against.',
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      table: {
        type: { summary: '"top" | "right" | "bottom" | "left"' },
        defaultValue: { summary: 'bottom' },
      },
    },
    align: {
      description: 'The alignment against the trigger.',
      control: 'select',
      options: ['start', 'center', 'end'],
      table: {
        type: { summary: '"start" | "center" | "end"' },
        defaultValue: { summary: 'center' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof PopoverContent>

export const Playground: Story = {
  name: 'Playground',
  args: {
    side: 'bottom',
    align: 'center',
  },
  render: (args: PopoverContentProps) => (
    <Popover>
      <PopoverTrigger>
        <Button variant="secondary">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent {...args}>
        <Text>Place any content inside the panel.</Text>
      </PopoverContent>
    </Popover>
  ),
}

/* Shared parameters for the open-by-default VRT stories: the content is
 * portaled into document.body, so disable the docs render (it would float
 * over the page) and the known Radix `aria-hidden-focus` behavior. */
const openParams = {
  layout: 'padded' as const,
  docs: { disable: true },
  a11y: { config: { rules: [{ id: 'aria-hidden-focus', enabled: false }] } },
}

/**
 * A settings panel with a heading, form controls, and a close action — the
 * canonical "click to reveal editable content" use case. Pinned `defaultOpen`
 * so VRT can capture the portaled content in one frame.
 */
export const SettingsPanel: Story = {
  name: 'Settings Panel (VRT)',
  parameters: openParams,
  render: () => (
    <Popover defaultOpen>
      <PopoverTrigger>
        <Button variant="secondary" icon={Settings}>
          Settings
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <div className="flex flex-col gap-3">
          <Text variant="heading" size="sm">
            Dimensions
          </Text>
          <div className="flex flex-col gap-2">
            <label className="flex items-center justify-between gap-4 text-sm" htmlFor="pop-w">
              Width
              <Input id="pop-w" defaultValue="100%" className="w-32" />
            </label>
            <label className="flex items-center justify-between gap-4 text-sm" htmlFor="pop-h">
              Height
              <Input id="pop-h" defaultValue="auto" className="w-32" />
            </label>
          </div>
          <div className="flex justify-end gap-2">
            <PopoverClose asChild>
              <Button variant="tertiary" size="sm">
                Cancel
              </Button>
            </PopoverClose>
            <PopoverClose asChild>
              <Button size="sm">Save</Button>
            </PopoverClose>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

/**
 * Plain informational panel — minimal content, default placement.
 */
export const Info: Story = {
  name: 'Info (VRT)',
  parameters: openParams,
  render: () => (
    <Popover defaultOpen>
      <PopoverTrigger>
        <Button variant="tertiary">About</Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <Text>
          Popover renders click-triggered content over the page. Press Escape or click outside to
          dismiss.
        </Text>
      </PopoverContent>
    </Popover>
  ),
}

/**
 * All four `side` placements, pinned open. Triggers are stacked in a column
 * with generous spacing so each portaled panel opens clear of its neighbours
 * (`left` / `right` extend horizontally; `top` / `bottom` diverge vertically).
 */
export const Placements: Story = {
  name: 'Placements (VRT)',
  parameters: openParams,
  render: () => (
    <div className="flex flex-col items-center gap-32 py-16">
      {(['left', 'top', 'bottom', 'right'] as const).map((side) => (
        <Popover key={side} defaultOpen>
          <PopoverTrigger>
            <Button variant="secondary">side: {side}</Button>
          </PopoverTrigger>
          {/* Four non-modal popovers open at once: prevent each panel from
           * grabbing focus on open, otherwise one opening counts as an
           * "outside" event that dismisses the others. */}
          <PopoverContent side={side} className="w-40" onOpenAutoFocus={(e) => e.preventDefault()}>
            <Text>Opens on {side}.</Text>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  ),
}

/**
 * `PopoverAnchor` decouples the positioning reference from the open trigger:
 * the panel is positioned against the bordered anchor box, while a **separate**
 * button toggles the controlled `open` state. Note this pattern uses
 * controlled `open` rather than `PopoverTrigger` — rendering both an explicit
 * `PopoverAnchor` and a `PopoverTrigger` gives Radix two competing anchors and
 * the content loses its positioning reference. Interactive (not in the VRT
 * roster); the anchor wiring is pinned by the unit test.
 */
export const WithAnchor: Story = {
  name: 'With Anchor',
  parameters: { docs: { disable: true } },
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <div className="flex flex-col items-center gap-6 py-8">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverAnchor asChild>
            <div className="rounded border border-border-strong px-6 py-3 text-sm text-foreground-muted">
              Positioning anchor
            </div>
          </PopoverAnchor>
          <PopoverContent side="bottom" className="w-56">
            <Text>Positioned against the anchor box, not the toggle button.</Text>
          </PopoverContent>
        </Popover>
        <Button variant="secondary" onClick={() => setOpen((o) => !o)}>
          Toggle (separate button)
        </Button>
      </div>
    )
  },
}

/**
 * Controlled open state via `open` / `onOpenChange`.
 */
export const Controlled: Story = {
  name: 'Controlled',
  parameters: { docs: { disable: true } },
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          <Button variant="secondary">{open ? 'Close' : 'Open'} popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <Text>Controlled content.</Text>
        </PopoverContent>
      </Popover>
    )
  },
}
