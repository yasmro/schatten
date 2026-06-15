import type { Meta, StoryObj } from '@storybook/react-vite'
import { Lock, User, Users } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Components/lv1/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      description: 'Orientation of the tabs. Affects arrow-key direction and layout.',
      control: 'inline-radio',
      options: ['horizontal', 'vertical'],
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    activationMode: {
      description: 'Whether a tab activates on focus (automatic) or on Enter/Space (manual).',
      control: 'inline-radio',
      options: ['automatic', 'manual'],
      table: {
        type: { summary: '"automatic" | "manual"' },
        defaultValue: { summary: 'automatic' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Playground: Story = {
  name: 'Playground',
  args: {
    orientation: 'horizontal',
    activationMode: 'automatic',
  },
  render: (args) => (
    <Tabs defaultValue="account" {...args} style={{ width: 360 }}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Manage your account details and email.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
      <TabsContent value="team">Invite and manage team members.</TabsContent>
    </Tabs>
  ),
}

/**
 * The default horizontal "line" treatment — the active tab is underlined with
 * the foreground color, inactive tabs sit muted.
 */
export const Default: Story = {
  name: 'Default',
  render: () => (
    <Tabs defaultValue="account" style={{ width: 360 }}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Manage your account details and email.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
      <TabsContent value="team">Invite and manage team members.</TabsContent>
    </Tabs>
  ),
}

/**
 * A leading icon can be injected into each tab via the `icon` prop (a Lucide
 * component). The icon is `aria-hidden`, so the tab's accessible name stays the
 * label text.
 */
export const WithIcons: Story = {
  name: 'With Icons',
  render: () => (
    <Tabs defaultValue="account" style={{ width: 400 }}>
      <TabsList>
        <TabsTrigger value="account" icon={User}>
          Account
        </TabsTrigger>
        <TabsTrigger value="password" icon={Lock}>
          Password
        </TabsTrigger>
        <TabsTrigger value="team" icon={Users}>
          Team
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">Manage your account details and email.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
      <TabsContent value="team">Invite and manage team members.</TabsContent>
    </Tabs>
  ),
}

/**
 * Vertical orientation places the tablist beside the panels; arrow keys move
 * Up/Down. The active indicator shifts to the trailing edge of the list.
 */
export const Vertical: Story = {
  name: 'Vertical',
  render: () => (
    <Tabs defaultValue="account" orientation="vertical" style={{ width: 420 }}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Manage your account details and email.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
      <TabsContent value="team">Invite and manage team members.</TabsContent>
    </Tabs>
  ),
}

/**
 * When the tabs exceed the container width they scroll horizontally (the
 * scrollbar is hidden — scroll via trackpad / touch / Shift+wheel). Selecting a
 * tab that is off-screen scrolls it into view. The active indicator tracks the
 * selected tab as the list scrolls.
 */
export const ManyTabs: Story = {
  name: 'Many Tabs (scroll)',
  render: () => (
    <Tabs defaultValue="tab-1" style={{ width: 320 }}>
      <TabsList>
        {Array.from({ length: 12 }, (_, i) => `tab-${i + 1}`).map((value, i) => (
          <TabsTrigger key={value} value={value}>
            Section {i + 1}
          </TabsTrigger>
        ))}
      </TabsList>
      {Array.from({ length: 12 }, (_, i) => `tab-${i + 1}`).map((value, i) => (
        <TabsContent key={value} value={value}>
          Content for section {i + 1}.
        </TabsContent>
      ))}
    </Tabs>
  ),
}

/**
 * A disabled tab is skipped by keyboard navigation and cannot be activated.
 */
export const DisabledTab: Story = {
  name: 'Disabled Tab',
  render: () => (
    <Tabs defaultValue="account" style={{ width: 360 }}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password" disabled>
          Password
        </TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Manage your account details and email.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
      <TabsContent value="team">Invite and manage team members.</TabsContent>
    </Tabs>
  ),
}
