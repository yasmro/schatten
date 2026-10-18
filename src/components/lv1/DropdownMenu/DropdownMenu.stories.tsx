import type { Meta, StoryObj } from '@storybook/react-vite'
import { Copy, Edit, LogOut, Settings, Share, Trash, User, UserPlus } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../Button/Button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './DropdownMenu'

const meta: Meta<typeof DropdownMenuItem> = {
  title: 'Components/lv1/DropdownMenu',
  component: DropdownMenuItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Visual role of the item.',
      control: 'select',
      options: ['default', 'destructive'],
      table: {
        type: { summary: '"default" | "destructive"' },
        defaultValue: { summary: 'default' },
      },
    },
    disabled: {
      description: 'Disables the item.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof DropdownMenuItem>

export const Playground: Story = {
  name: 'Playground',
  args: {
    variant: 'default',
    disabled: false,
  },
  render: (args) => (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="secondary">Options</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem {...args} icon={Edit}>
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem icon={Copy}>Duplicate</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem icon={Trash} variant="destructive">
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
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
 * Action menu covering icons, shortcuts, separator, a group + label, a
 * disabled item, and a destructive item — pinned `defaultOpen` so VRT can
 * capture the portaled content in one frame.
 */
export const ActionMenu: Story = {
  name: 'Action Menu (VRT)',
  parameters: openParams,
  render: () => (
    <DropdownMenu defaultOpen>
      <DropdownMenuTrigger>
        <Button variant="secondary">Actions</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem icon={Edit}>
          Edit
          <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem icon={Copy}>
          Duplicate
          <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
        </DropdownMenuItem>
        {/* Disabled + shortcut: the shortcut must recede with the item. */}
        <DropdownMenuItem icon={Settings} disabled>
          Settings
          <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem icon={Trash} variant="destructive">
          Delete
          <DropdownMenuShortcut>⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

/**
 * User menu — group + label + separator, plain and destructive items.
 */
export const UserMenu: Story = {
  name: 'User Menu (VRT)',
  parameters: openParams,
  render: () => (
    <DropdownMenu defaultOpen>
      <DropdownMenuTrigger>
        <Button variant="tertiary">My Account</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>alice@example.com</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem icon={User}>Profile</DropdownMenuItem>
          <DropdownMenuItem icon={Settings}>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem icon={LogOut} variant="destructive">
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

/**
 * Checkbox and radio items in one menu — covers both indicator slots.
 */
export const CheckboxAndRadio: Story = {
  name: 'Checkbox & Radio (VRT)',
  parameters: openParams,
  render: () => (
    <DropdownMenu defaultOpen>
      <DropdownMenuTrigger>
        <Button variant="secondary">View</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked>Status Bar</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={false}>Activity Bar</DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuRadioGroup value="bottom">
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

/**
 * Submenu — the parent menu is pinned open; the VRT spec hovers the
 * sub-trigger to open the nested panel (Radix `Sub` opens on hover/focus,
 * which `defaultOpen` does not reliably reproduce in a static frame).
 */
export const Submenu: Story = {
  name: 'Submenu (VRT)',
  parameters: openParams,
  render: () => (
    <DropdownMenu defaultOpen>
      <DropdownMenuTrigger>
        <Button variant="secondary">More</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem icon={UserPlus}>Invite</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger icon={Share}>Share</DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-48">
            <DropdownMenuItem>Email</DropdownMenuItem>
            <DropdownMenuItem>Copy link</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        {/* Disabled sub-trigger: its chevron must recede with the item. */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger icon={Share} disabled>
            Export
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-48">
            <DropdownMenuItem>CSV</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
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
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger>
          <Button variant="secondary">{open ? 'Close' : 'Open'} menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Action</DropdownMenuItem>
          <DropdownMenuItem>Another action</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}
