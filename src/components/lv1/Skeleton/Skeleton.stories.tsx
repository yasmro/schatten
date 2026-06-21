import type { Meta, StoryObj } from '@storybook/react-vite'
import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
  title: 'Components/lv1/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      description:
        'Utility classes that set the placeholder size and shape (width / height / border-radius).',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Playground: Story = {
  name: 'Playground',
  args: {
    className: 'h-4 w-[200px]',
  },
}

export const Text: Story = {
  name: 'Text',
  render: () => (
    <div className="w-[300px] space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  ),
}

export const Shapes: Story = {
  name: 'Shapes',
  render: () => (
    // Square block placeholders (default corners) at a few sizes — e.g. a
    // thumbnail, a banner, a media tile. Rounding is opt-in via `rounded-*`.
    <div className="flex items-center gap-6">
      <Skeleton className="h-16 w-16" />
      <Skeleton className="h-16 w-40" />
      <Skeleton className="h-24 w-32" />
    </div>
  ),
}

export const Card: Story = {
  name: 'Card',
  render: () => (
    // The container owns the loading announcement; the skeletons are decorative.
    <div role="status" aria-busy="true" className="flex w-[320px] items-center gap-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
      <span className="sr-only">Loading…</span>
    </div>
  ),
}
