import type { Meta, StoryObj } from '@storybook/react-vite'
import { FolderOpen, Inbox, Plus, Search } from 'lucide-react'
import { Button } from '../../lv1/Button'
import { EmptyState } from './EmptyState'

const meta: Meta<typeof EmptyState> = {
  title: 'Components/lv2/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    icon: {
      description: 'Decorative Lucide icon shown above the title. Pass the component itself.',
      control: false,
      table: { type: { summary: 'LucideIcon' } },
    },
    title: {
      description: 'Heading text, rendered as a heading through `Text`.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    description: {
      description: 'Supporting copy below the title. Inline content only.',
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    action: {
      description: 'The next step — one `Button`, or several wrapped in a fragment.',
      control: false,
      table: { type: { summary: 'ReactNode' } },
    },
    headingLevel: {
      description: 'Heading level of the title. The consumer decides the page outline.',
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      table: {
        type: { summary: '1 | 2 | 3 | 4 | 5 | 6' },
        defaultValue: { summary: '2' },
      },
    },
    size: {
      description: 'Overall scale — icon size, type size and spacing.',
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: '"sm" | "md" | "lg"' },
        defaultValue: { summary: 'md' },
      },
    },
    align: {
      description: 'Horizontal placement of the content.',
      control: 'inline-radio',
      options: ['center', 'start'],
      table: {
        type: { summary: '"center" | "start"' },
        defaultValue: { summary: 'center' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof EmptyState>

/** Interactive single instance — adjust the props in the Controls panel. */
export const Playground: Story = {
  args: {
    icon: Inbox,
    title: 'No messages yet',
    description: 'New messages will appear here.',
    action: <Button variant="primary">Send a message</Button>,
    size: 'md',
    align: 'center',
  },
  render: (args) => (
    <div className="w-[480px]">
      <EmptyState {...args} />
    </div>
  ),
}

/** `sm` for a card or table body, `md` for a panel, `lg` for a whole page. */
export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div className="flex w-[560px] flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <EmptyState
          key={size}
          size={size}
          icon={Inbox}
          title="No messages yet"
          description="New messages will appear here."
          action={<Button variant="primary">Send a message</Button>}
        />
      ))}
    </div>
  ),
}

/** `center` is the default; `start` suits a left-aligned layout. */
export const Alignments: Story = {
  name: 'Alignments',
  render: () => (
    <div className="flex w-[480px] flex-col gap-4">
      {(['center', 'start'] as const).map((align) => (
        <EmptyState
          key={align}
          align={align}
          icon={Search}
          title="No results found"
          description="Try a different search term or remove a filter."
          action={
            <>
              <Button variant="primary">Clear filters</Button>
              <Button variant="secondary">Start over</Button>
            </>
          }
        />
      ))}
    </div>
  ),
}

/**
 * Every part but `title` is optional. The row of three buttons also pins that
 * a `Button` icon inside `action` keeps its own size, and that a long
 * description stays at a readable line length.
 */
export const Compositions: Story = {
  name: 'Compositions',
  render: () => (
    <div className="flex w-[640px] flex-col gap-4">
      <EmptyState title="Nothing to show" />
      <EmptyState title="No files" description="Files you upload will appear here." />
      <EmptyState icon={FolderOpen} title="This folder is empty" headingLevel={3} />
      <EmptyState
        icon={FolderOpen}
        title="This folder is empty"
        description="Upload a file or create a new document to get started. Everything you add to this folder is shared with the people who already have access to it."
        action={
          <>
            <Button variant="primary" icon={Plus}>
              New document
            </Button>
            <Button variant="secondary">Upload a file</Button>
            <Button variant="tertiary">Learn more</Button>
          </>
        }
      />
    </div>
  ),
}
