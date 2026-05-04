import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../Button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './Tooltip'

const meta: Meta<typeof TooltipContent> = {
  title: 'Components/lv1/Tooltip',
  component: TooltipContent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider delayDuration={100}>
        <Story />
      </TooltipProvider>
    ),
  ],
  argTypes: {
    side: {
      description: 'The preferred side of the trigger to render the tooltip.',
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      table: {
        type: { summary: '"top" | "right" | "bottom" | "left"' },
        defaultValue: { summary: 'top' },
      },
    },
    sideOffset: {
      description: 'Distance in pixels from the trigger.',
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '4' },
      },
    },
    align: {
      description: 'The preferred alignment against the trigger.',
      control: 'select',
      options: ['start', 'center', 'end'],
      table: {
        type: { summary: '"start" | "center" | "end"' },
        defaultValue: { summary: 'center' },
      },
    },
    alignOffset: {
      description: 'An offset in pixels from the "start" or "end" alignment options.',
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    children: {
      description: 'Content to display in the tooltip.',
      control: 'text',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof TooltipContent>

export const Playground: Story = {
  name: 'Playground',
  args: {
    children: 'This is helpful information.',
    side: 'top',
    sideOffset: 4,
    align: 'center',
  },
  render: (args) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="secondary">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent {...args} />
    </Tooltip>
  ),
}

export const Sides: Story = {
  name: 'Sides',
  render: () => (
    <div className="flex gap-8">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">Tooltip on top</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">Tooltip on right</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">Tooltip on left</TooltipContent>
      </Tooltip>
    </div>
  ),
}

export const WithIconButton: Story = {
  name: 'With Icon Button',
  render: () => (
    <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button icon="Info" aria-label="Information" />
        </TooltipTrigger>
        <TooltipContent>View more information</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button icon="Settings" aria-label="Settings" />
        </TooltipTrigger>
        <TooltipContent>Open settings</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button icon="Trash2" variant="destructive" aria-label="Delete" />
        </TooltipTrigger>
        <TooltipContent>Delete item</TooltipContent>
      </Tooltip>
    </div>
  ),
}

export const WithDisabledButton: Story = {
  name: 'With Disabled Button',
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        {/* biome-ignore lint/a11y/useSemanticElements: Wrapper for disabled button tooltip */}
        <span role="button" tabIndex={0}>
          <Button disabled style={{ pointerEvents: 'none' }}>
            Disabled Button
          </Button>
        </span>
      </TooltipTrigger>
      <TooltipContent>This action is currently unavailable</TooltipContent>
    </Tooltip>
  ),
}

export const RichContent: Story = {
  name: 'Rich Content',
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="secondary">Hover for details</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <p className="font-bold">Keyboard Shortcut</p>
        <p className="text-foreground-muted">
          Press <kbd className="px-1 bg-surface-hover rounded">Ctrl</kbd> +{' '}
          <kbd className="px-1 bg-surface-hover rounded">S</kbd> to save
        </p>
      </TooltipContent>
    </Tooltip>
  ),
}
