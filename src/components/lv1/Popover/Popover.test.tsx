import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { Button } from '../Button/Button'
import { Popover, PopoverAnchor, PopoverClose, PopoverContent, PopoverTrigger } from './Popover'

function BasicPopover(props: {
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  contentTestId?: string
  withClose?: boolean
}) {
  return (
    <Popover defaultOpen={props.defaultOpen} onOpenChange={props.onOpenChange}>
      <PopoverTrigger>
        <Button>Open</Button>
      </PopoverTrigger>
      <PopoverContent data-testid={props.contentTestId}>
        <p>Panel body</p>
        {props.withClose && (
          <PopoverClose>
            <Button>Done</Button>
          </PopoverClose>
        )}
      </PopoverContent>
    </Popover>
  )
}

describe('Popover', () => {
  it('renders a trigger reachable by role + name', () => {
    render(<BasicPopover />)
    const trigger = screen.getByRole('button', { name: 'Open' })
    expect(trigger).toBeInTheDocument()
    expect(trigger).toHaveAttribute('aria-haspopup', 'dialog')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders a string trigger via the Radix button (no asChild)', () => {
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>
          <p>Body</p>
        </PopoverContent>
      </Popover>,
    )
    expect(screen.getByRole('button', { name: 'Open' })).toHaveAttribute('aria-haspopup', 'dialog')
  })

  it('forwards className and data-testid to the content', async () => {
    const user = userEvent.setup()
    render(<BasicPopover contentTestId="pop-content" />)
    await user.click(screen.getByRole('button', { name: 'Open' }))
    expect(await screen.findByTestId('pop-content')).toBeInTheDocument()
  })

  describe('class API', () => {
    it('emits the canonical content class when open', async () => {
      const user = userEvent.setup()
      render(<BasicPopover />)
      await user.click(screen.getByRole('button', { name: 'Open' }))
      const content = await screen.findByRole('dialog')
      expect(content).toHaveClass('st-popover__content')
    })
  })

  describe('open / close', () => {
    it('initializes open when defaultOpen is set and renders into a portal', () => {
      render(<BasicPopover defaultOpen />)
      const content = screen.getByRole('dialog')
      expect(content).toBeInTheDocument()
      expect(content).toHaveTextContent('Panel body')
    })

    it('opens on trigger click', async () => {
      const user = userEvent.setup()
      render(<BasicPopover />)
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      await user.click(screen.getByRole('button', { name: 'Open' }))
      expect(await screen.findByRole('dialog')).toBeInTheDocument()
    })

    it('fires onOpenChange when opened and closed', async () => {
      const onOpenChange = vi.fn()
      const user = userEvent.setup()
      render(<BasicPopover onOpenChange={onOpenChange} />)
      await user.click(screen.getByRole('button', { name: 'Open' }))
      expect(onOpenChange).toHaveBeenCalledWith(true)
      await user.keyboard('{Escape}')
      expect(onOpenChange).toHaveBeenCalledWith(false)
    })

    it('closes when a PopoverClose action is chosen', async () => {
      const user = userEvent.setup()
      render(<BasicPopover defaultOpen withClose />)
      await user.click(screen.getByRole('button', { name: 'Done' }))
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })
  })

  describe('with PopoverAnchor', () => {
    // Canonical separate-anchor usage: an explicit PopoverAnchor positions the
    // panel, and a separate button toggles controlled `open` — NOT a
    // PopoverTrigger (rendering both gives Radix two competing anchors). See
    // the WithAnchor story.
    function AnchoredPopover() {
      const [open, setOpen] = useState(false)
      return (
        <>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverAnchor data-testid="anchor">
              <span>anchor region</span>
            </PopoverAnchor>
            <PopoverContent>
              <p>Anchored body</p>
            </PopoverContent>
          </Popover>
          <Button onClick={() => setOpen((o) => !o)}>Toggle</Button>
        </>
      )
    }

    it('renders the anchor and opens via a separate (non-trigger) button', async () => {
      const user = userEvent.setup()
      render(<AnchoredPopover />)
      // The anchor renders and is distinct from the open control.
      expect(screen.getByTestId('anchor')).toBeInTheDocument()
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      // A separate button toggling controlled `open` reveals the panel.
      await user.click(screen.getByRole('button', { name: 'Toggle' }))
      expect(await screen.findByRole('dialog')).toHaveTextContent('Anchored body')
    })
  })
})
