import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../Button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './Card'

const meta: Meta<typeof Card> = {
  title: 'Components/lv1/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      description: 'Background treatment — filled surface vs transparent.',
      control: 'inline-radio',
      options: ['filled', 'plain'],
      table: {
        type: { summary: '"filled" | "plain"' },
        defaultValue: { summary: 'filled' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Card>

/**
 * Interactive single instance — toggle `variant` (filled / plain) in the
 * Controls panel.
 */
export const Playground: Story = {
  args: { variant: 'filled' },
  render: (args) => (
    <Card {...args} className="w-[320px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent>Choose how you want to be notified about activity.</CardContent>
      <CardFooter>
        <Button variant="primary">Save</Button>
        <Button variant="tertiary">Cancel</Button>
      </CardFooter>
    </Card>
  ),
}

/** Full composition — header (title + description), content, and footer actions. */
export const Composition: Story = {
  name: 'Composition',
  render: () => (
    <Card className="w-[320px]">
      <CardHeader>
        <CardTitle>Project settings</CardTitle>
        <CardDescription>Manage your project name and visibility.</CardDescription>
      </CardHeader>
      <CardContent>Updating these values affects every collaborator on the project.</CardContent>
      <CardFooter>
        <Button variant="primary">Save changes</Button>
        <Button variant="tertiary">Discard</Button>
      </CardFooter>
    </Card>
  ),
}

/**
 * Content-only card — no header / footer. Exercises the `:first-child` padding
 * rule so the single region keeps its top padding.
 */
export const ContentOnly: Story = {
  name: 'Content Only',
  render: () => (
    <Card className="w-[320px]">
      <CardContent>
        A bare card with a single content region — useful as a plain panel or widget shell.
      </CardContent>
    </Card>
  ),
}

/** Background treatments side by side — `filled` (default) vs `plain`. */
export const Variants: Story = {
  name: 'Variants',
  render: () => (
    <div className="flex gap-6">
      <Card variant="filled" className="w-[260px]">
        <CardHeader>
          <CardTitle>Filled</CardTitle>
          <CardDescription>Surface fill with shadow.</CardDescription>
        </CardHeader>
        <CardContent>The default treatment — a raised card.</CardContent>
      </Card>
      <Card variant="plain" className="w-[260px]">
        <CardHeader>
          <CardTitle>Plain</CardTitle>
          <CardDescription>Transparent, border only.</CardDescription>
        </CardHeader>
        <CardContent>No fill or shadow — the page shows through.</CardContent>
      </Card>
    </div>
  ),
}
