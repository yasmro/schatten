import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Button } from '../Button/Button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './DropdownMenu'

function BasicMenu(props: {
  onSelect?: () => void
  itemDisabled?: boolean
  contentTestId?: string
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button>Options</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent data-testid={props.contentTestId}>
        <DropdownMenuItem onSelect={props.onSelect}>Edit</DropdownMenuItem>
        <DropdownMenuItem disabled={props.itemDisabled} onSelect={props.onSelect}>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

describe('DropdownMenu', () => {
  it('renders a trigger reachable by role + name', () => {
    render(<BasicMenu />)
    const trigger = screen.getByRole('button', { name: 'Options' })
    expect(trigger).toBeInTheDocument()
    expect(trigger).toHaveAttribute('aria-haspopup', 'menu')
  })

  it('forwards className and data-testid to the rendered parts', async () => {
    const user = userEvent.setup()
    render(<BasicMenu contentTestId="menu-content" />)
    await user.click(screen.getByRole('button', { name: 'Options' }))
    expect(await screen.findByTestId('menu-content')).toBeInTheDocument()
  })

  describe('class API', () => {
    it('emits the canonical content + item classes when open', async () => {
      const user = userEvent.setup()
      render(<BasicMenu />)
      await user.click(screen.getByRole('button', { name: 'Options' }))
      const menu = await screen.findByRole('menu')
      expect(menu).toHaveClass('st-dropdown-menu__content')
      expect(screen.getByRole('menuitem', { name: 'Edit' })).toHaveClass('st-dropdown-menu__item')
    })

    it('adds the destructive modifier for variant="destructive"', async () => {
      const user = userEvent.setup()
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button>Open</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      )
      await user.click(screen.getByRole('button', { name: 'Open' }))
      const item = await screen.findByRole('menuitem', { name: 'Delete' })
      expect(item).toHaveClass('st-dropdown-menu__item', 'st-dropdown-menu__item--destructive')
    })
  })

  describe('open / close / select', () => {
    it('opens the menu on trigger click and shows items', async () => {
      const user = userEvent.setup()
      render(<BasicMenu />)
      await user.click(screen.getByRole('button', { name: 'Options' }))
      expect(await screen.findByRole('menuitem', { name: 'Edit' })).toBeInTheDocument()
      expect(screen.getByRole('menuitem', { name: 'Delete' })).toBeInTheDocument()
    })

    it('fires onSelect when an item is chosen', async () => {
      const onSelect = vi.fn()
      const user = userEvent.setup()
      render(<BasicMenu onSelect={onSelect} />)
      await user.click(screen.getByRole('button', { name: 'Options' }))
      await user.click(await screen.findByRole('menuitem', { name: 'Edit' }))
      expect(onSelect).toHaveBeenCalledTimes(1)
    })

    it('does not fire onSelect for a disabled item', async () => {
      const onSelect = vi.fn()
      const user = userEvent.setup()
      render(<BasicMenu onSelect={onSelect} itemDisabled />)
      await user.click(screen.getByRole('button', { name: 'Options' }))
      const deleteItem = await screen.findByRole('menuitem', { name: 'Delete' })
      expect(deleteItem).toHaveAttribute('data-disabled')
      await user.click(deleteItem)
      expect(onSelect).not.toHaveBeenCalled()
    })
  })

  describe('checkbox item', () => {
    it('renders role=menuitemcheckbox and fires onCheckedChange', async () => {
      const onCheckedChange = vi.fn()
      const user = userEvent.setup()
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button>View</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuCheckboxItem checked={false} onCheckedChange={onCheckedChange}>
              Status Bar
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      )
      await user.click(screen.getByRole('button', { name: 'View' }))
      const item = await screen.findByRole('menuitemcheckbox', { name: 'Status Bar' })
      expect(item).toHaveAttribute('aria-checked', 'false')
      await user.click(item)
      expect(onCheckedChange).toHaveBeenCalledWith(true)
    })
  })

  describe('radio group', () => {
    it('renders role=menuitemradio and fires onValueChange', async () => {
      const onValueChange = vi.fn()
      const user = userEvent.setup()
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button>Position</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioGroup value="top" onValueChange={onValueChange}>
              <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>,
      )
      await user.click(screen.getByRole('button', { name: 'Position' }))
      const bottom = await screen.findByRole('menuitemradio', { name: 'Bottom' })
      await user.click(bottom)
      expect(onValueChange).toHaveBeenCalledWith('bottom')
    })
  })

  describe('submenu', () => {
    it('opens the sub-content with its class chain on sub-trigger hover', async () => {
      const user = userEvent.setup()
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button>More</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Invite</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>,
      )
      await user.click(screen.getByRole('button', { name: 'More' }))
      const subTrigger = await screen.findByRole('menuitem', { name: 'Share' })
      expect(subTrigger).toHaveClass('st-dropdown-menu__item', 'st-dropdown-menu__sub-trigger')

      await user.hover(subTrigger)
      const subItem = await screen.findByRole('menuitem', { name: 'Email' })
      expect(subItem).toBeInTheDocument()
      // The sub-content panel carries both the shared content class and its
      // own sub-content modifier.
      const subContent = subItem.closest('.st-dropdown-menu__sub-content')
      expect(subContent).not.toBeNull()
      expect(subContent).toHaveClass('st-dropdown-menu__content')
    })
  })

  describe('separator', () => {
    it('renders a separator role', async () => {
      const user = userEvent.setup()
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button>Open</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>One</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Two</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>,
      )
      await user.click(screen.getByRole('button', { name: 'Open' }))
      await screen.findByRole('menuitem', { name: 'One' })
      expect(screen.getByRole('separator')).toHaveClass('st-dropdown-menu__separator')
    })
  })

  it('forwards ref to the trigger', () => {
    const ref = { current: null as HTMLButtonElement | null }
    render(
      <DropdownMenu>
        <DropdownMenuTrigger ref={ref}>Options</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Edit</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    )
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })
})
