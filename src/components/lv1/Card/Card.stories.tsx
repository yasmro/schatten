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
}

export default meta
type Story = StoryObj<typeof Card>

/**
 * Interactive single instance. Card has no schatten-specific props — it is a
 * neutral surface composed from its sub-parts — so the controls cover only the
 * standard DOM attributes.
 */
export const Playground: Story = {
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
