import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../Select'
import { Dialog, type DialogProps } from './Dialog'

type ControlledOverrides = Partial<Omit<DialogProps, 'isOpen' | 'onOpenChange'>>

const Controlled = ({
  initialOpen = true,
  ...overrides
}: ControlledOverrides & { initialOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(initialOpen)
  return (
    <Dialog
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      title="Test dialog"
      // Provide an explicit (no-op) onClick so the dev warning for
      // missing onClick doesn't fire across the whole test file.
      actionButton={{ label: 'Confirm', onClick: () => {} }}
      {...overrides}
    />
  )
}

function WithSelect() {
  return (
    <Controlled>
      <Select>
        <SelectTrigger aria-label="Fruit">
          <SelectValue placeholder="Pick a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>
    </Controlled>
  )
}

describe('Dialog', () => {
  it('renders title and description', () => {
    render(<Controlled description="Subtitle here" />)
    expect(screen.getByText('Test dialog')).toBeInTheDocument()
    expect(screen.getByText('Subtitle here')).toBeInTheDocument()
  })

  it('renders body children', () => {
    render(
      <Controlled>
        <p>Body content</p>
      </Controlled>,
    )
    expect(screen.getByText('Body content')).toBeInTheDocument()
  })

  describe('body scroll focusability', () => {
    it('does not make the body a tab stop when content fits', () => {
      // jsdom reports scrollHeight = clientHeight = 0 → not scrollable.
      render(
        <Controlled>
          <p>Short content</p>
        </Controlled>,
      )
      expect(document.querySelector('.st-dialog__body')).not.toHaveAttribute('tabindex')
    })

    it('makes the body focusable when content overflows', () => {
      // Simulate overflow — jsdom has no layout, so pin the two metrics the
      // Body effect compares.
      const scrollHeight = vi
        .spyOn(HTMLElement.prototype, 'scrollHeight', 'get')
        .mockReturnValue(400)
      const clientHeight = vi
        .spyOn(HTMLElement.prototype, 'clientHeight', 'get')
        .mockReturnValue(200)
      try {
        render(
          <Controlled>
            <p>Long content</p>
          </Controlled>,
        )
        expect(document.querySelector('.st-dialog__body')).toHaveAttribute('tabindex', '0')
      } finally {
        scrollHeight.mockRestore()
        clientHeight.mockRestore()
      }
    })
  })

  it('does not render when isOpen is false', () => {
    render(<Controlled initialOpen={false} />)
    expect(screen.queryByText('Test dialog')).not.toBeInTheDocument()
  })

  it('renders only the action button by default', () => {
    render(<Controlled />)
    expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Cancel' })).not.toBeInTheDocument()
  })

  it('renders cancelButton and subActionButton when provided', () => {
    render(
      <Controlled
        cancelButton={{ label: 'Cancel' }}
        subActionButton={{ label: 'Save as draft' }}
      />,
    )
    expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Save as draft' })).toBeInTheDocument()
  })

  it('calls actionButton.onClick when clicked', async () => {
    const onClick = vi.fn()
    const user = userEvent.setup()
    render(<Controlled actionButton={{ label: 'Confirm', onClick }} />)

    await user.click(screen.getByRole('button', { name: 'Confirm' }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('closes the dialog when cancelButton is clicked', async () => {
    const user = userEvent.setup()
    render(<Controlled cancelButton={{ label: 'Cancel' }} />)

    await user.click(screen.getByRole('button', { name: 'Cancel' }))
    expect(screen.queryByText('Test dialog')).not.toBeInTheDocument()
  })

  it('also calls cancelButton.onClick when provided', async () => {
    const onClick = vi.fn()
    const user = userEvent.setup()
    render(<Controlled cancelButton={{ label: 'Cancel', onClick }} />)

    await user.click(screen.getByRole('button', { name: 'Cancel' }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('calls subActionButton.onClick when clicked', async () => {
    const onClick = vi.fn()
    const user = userEvent.setup()
    render(<Controlled subActionButton={{ label: 'Save as draft', onClick }} />)

    await user.click(screen.getByRole('button', { name: 'Save as draft' }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('renders close (X) button by default', () => {
    render(<Controlled />)
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument()
  })

  it('hides close (X) button when isCloseButtonVisible is false', () => {
    render(<Controlled isCloseButtonVisible={false} />)
    expect(screen.queryByRole('button', { name: 'Close' })).not.toBeInTheDocument()
  })

  it('closes when close (X) button is clicked', async () => {
    const user = userEvent.setup()
    render(<Controlled />)

    await user.click(screen.getByRole('button', { name: 'Close' }))
    expect(screen.queryByText('Test dialog')).not.toBeInTheDocument()
  })

  it('disables cancel / sub-action / close ✕ when actionButton is loading', () => {
    render(
      <Controlled
        actionButton={{ label: 'Confirm', onClick: () => {}, isLoading: true }}
        cancelButton={{ label: 'Cancel' }}
        subActionButton={{ label: 'Save as draft' }}
      />,
    )
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Save as draft' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Close' })).toBeDisabled()
  })

  it('disables action / cancel / close ✕ when subActionButton is loading', () => {
    render(
      <Controlled
        actionButton={{ label: 'Confirm', onClick: () => {} }}
        cancelButton={{ label: 'Cancel' }}
        subActionButton={{ label: 'Save as draft', isLoading: true }}
      />,
    )
    expect(screen.getByRole('button', { name: 'Confirm' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Close' })).toBeDisabled()
  })

  it('blocks ESC key dismissal when actionButton is loading', async () => {
    const user = userEvent.setup()
    render(<Controlled actionButton={{ label: 'Confirm', onClick: () => {}, isLoading: true }} />)

    await user.keyboard('{Escape}')
    expect(screen.getByText('Test dialog')).toBeInTheDocument()
  })

  it('blocks ESC key dismissal when subActionButton is loading', async () => {
    const user = userEvent.setup()
    render(
      <Controlled
        actionButton={{ label: 'Confirm', onClick: () => {} }}
        subActionButton={{ label: 'Save as draft', isLoading: true }}
      />,
    )

    await user.keyboard('{Escape}')
    expect(screen.getByText('Test dialog')).toBeInTheDocument()
  })

  it('closes on ESC when no footer button is loading', async () => {
    const user = userEvent.setup()
    render(<Controlled />)

    await user.keyboard('{Escape}')
    expect(screen.queryByText('Test dialog')).not.toBeInTheDocument()
  })

  // Radix tracks which layer an ESC / outside click belongs to through
  // module-level context in @radix-ui/react-dismissable-layer. When Dialog
  // and Select resolve two copies of it, both layers handle the same ESC and
  // the Dialog closes along with the Select. That happened in the published
  // dist (react-dialog sat in devDependencies and was bundled) and in this
  // repo whenever react-dialog lagged behind the other Radix packages.
  describe('with a Select open inside the body', () => {
    it('closes only the Select on ESC', async () => {
      const user = userEvent.setup()
      render(<WithSelect />)

      await user.click(screen.getByRole('combobox', { name: 'Fruit' }))
      expect(await screen.findByRole('listbox')).toBeInTheDocument()

      await user.keyboard('{Escape}')
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
      expect(screen.getByRole('dialog', { name: 'Test dialog' })).toBeInTheDocument()
    })

    it('stays open after an option is picked', async () => {
      const user = userEvent.setup()
      render(<WithSelect />)

      await user.click(screen.getByRole('combobox', { name: 'Fruit' }))
      await user.click(await screen.findByRole('option', { name: 'Banana' }))

      expect(screen.getByRole('combobox', { name: 'Fruit' })).toHaveTextContent('Banana')
      expect(screen.getByRole('dialog', { name: 'Test dialog' })).toBeInTheDocument()
    })
  })

  it('blocks overlay click dismissal when a footer button is loading', () => {
    render(<Controlled actionButton={{ label: 'Confirm', onClick: () => {}, isLoading: true }} />)

    const overlay = document.querySelector('.st-dialog__overlay')
    if (!overlay) throw new Error('overlay element not found')

    fireEvent.pointerDown(overlay)
    fireEvent.pointerUp(overlay)

    expect(screen.getByText('Test dialog')).toBeInTheDocument()
  })

  it('uses primary action variant by default', () => {
    render(<Controlled />)
    const action = screen.getByRole('button', { name: 'Confirm' })
    // After #268 sweep-3 the bg-solid utility lives inside the .st-btn--primary
    // CSS rule — the JSX-visible signal is the modifier class itself.
    expect(action.className).toContain('st-btn--primary')
  })

  it('uses destructive action variant when specified', () => {
    render(
      <Controlled actionButton={{ label: 'Delete', variant: 'destructive', onClick: () => {} }} />,
    )
    const action = screen.getByRole('button', { name: 'Delete' })
    expect(action.className).toContain('st-btn--destructive')
  })

  it('renders the body inside .st-dialog__body so the scroll cap rule applies', () => {
    // After #271 sweep-6 the height cap + overflow-y are encoded in the
    // `.st-dialog__body` rule (Dialog.css), not as JSX-side Tailwind utilities.
    // The JSX surface we can assert is the class chain itself.
    render(
      <Controlled>
        <p data-testid="dialog-body">long content</p>
      </Controlled>,
    )
    const body = screen.getByTestId('dialog-body').parentElement
    expect(body).toHaveClass('st-dialog__body')
  })

  it('warns in development when actionButton.onClick is undefined', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    render(<Controlled actionButton={{ label: 'Confirm' }} />)
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('actionButton.onClick'))
    warn.mockRestore()
  })

  it('does not warn when actionButton.onClick is provided', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    render(<Controlled actionButton={{ label: 'Confirm', onClick: () => {} }} />)
    expect(warn).not.toHaveBeenCalled()
    warn.mockRestore()
  })

  it('emits the canonical st-dialog__* sub-element classes', () => {
    // Open dialog with description + body + close button + cancel button so
    // every sub-element except subAction is exercised.
    render(
      <Controlled description="Helpful subtitle" cancelButton={{ label: 'Cancel' }}>
        <p>Body content</p>
      </Controlled>,
    )
    expect(document.querySelector('.st-dialog__overlay')).not.toBeNull()
    expect(document.querySelector('.st-dialog__content')).not.toBeNull()
    expect(document.querySelector('.st-dialog__header')).not.toBeNull()
    expect(document.querySelector('.st-dialog__title')).not.toBeNull()
    expect(document.querySelector('.st-dialog__description')).not.toBeNull()
    expect(document.querySelector('.st-dialog__body')).not.toBeNull()
    expect(document.querySelector('.st-dialog__footer')).not.toBeNull()
    expect(document.querySelector('.st-dialog__close')).not.toBeNull()
  })

  describe('footer layout classes (#575)', () => {
    const renderFull = () =>
      render(
        <Controlled
          cancelButton={{ label: 'Cancel' }}
          subActionButton={{ label: 'Delete', onClick: () => {} }}
        />,
      )

    it('marks each footer button with its sub-element class', () => {
      renderFull()
      expect(screen.getByRole('button', { name: 'Confirm' })).toHaveClass('st-dialog__action')
      expect(screen.getByRole('button', { name: 'Cancel' })).toHaveClass('st-dialog__cancel')
      expect(screen.getByRole('button', { name: 'Delete' })).toHaveClass('st-dialog__sub-action')
    })

    it('marks the separator with both the Dialog and Separator classes', () => {
      renderFull()
      const separator = document.querySelector('.st-dialog__separator')
      expect(separator).toHaveClass('st-separator')
    })

    it('keeps the footer DOM order action → cancel → separator → sub-action', () => {
      // The focus trap relies on this order (action gets initial focus);
      // the visual order is recovered by `order` in Dialog.css.
      renderFull()
      const footer = document.querySelector('.st-dialog__footer')
      const order = Array.from(footer?.children ?? []).map(
        (child) => Array.from(child.classList).find((c) => c.startsWith('st-dialog__')) ?? '',
      )
      expect(order).toEqual([
        'st-dialog__action',
        'st-dialog__cancel',
        'st-dialog__separator',
        'st-dialog__sub-action',
      ])
    })

    it('emits no Tailwind order utilities on the footer children', () => {
      renderFull()
      const footer = document.querySelector('.st-dialog__footer')
      for (const child of Array.from(footer?.children ?? [])) {
        for (const className of Array.from(child.classList)) {
          expect(className.startsWith('st-'), className).toBe(true)
        }
      }
    })

    it('omits the separator when there is no sub-action', () => {
      render(<Controlled cancelButton={{ label: 'Cancel' }} />)
      expect(document.querySelector('.st-dialog__separator')).toBeNull()
      expect(document.querySelector('.st-dialog__sub-action')).toBeNull()
    })
  })

  it('exposes the dialog frame by role + accessible name (from title)', () => {
    render(<Controlled />)
    expect(screen.getByRole('dialog', { name: 'Test dialog' })).toBeInTheDocument()
  })
})
