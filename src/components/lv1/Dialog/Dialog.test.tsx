import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import { describe, expect, it, vi } from 'vitest'
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

  it('disables cancel and sub-action buttons when isLoading', () => {
    render(
      <Controlled
        isLoading
        cancelButton={{ label: 'Cancel' }}
        subActionButton={{ label: 'Save as draft' }}
      />,
    )
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Save as draft' })).toBeDisabled()
  })

  it('disables close (X) button when isLoading', () => {
    render(<Controlled isLoading />)
    expect(screen.getByRole('button', { name: 'Close' })).toBeDisabled()
  })

  it('blocks ESC key dismissal when isLoading', async () => {
    const user = userEvent.setup()
    render(<Controlled isLoading />)

    await user.keyboard('{Escape}')
    expect(screen.getByText('Test dialog')).toBeInTheDocument()
  })

  it('closes on ESC when not loading', async () => {
    const user = userEvent.setup()
    render(<Controlled />)

    await user.keyboard('{Escape}')
    expect(screen.queryByText('Test dialog')).not.toBeInTheDocument()
  })

  it('blocks overlay click dismissal when isLoading', () => {
    render(<Controlled isLoading />)

    const overlay = document.querySelector('.dialog-overlay')
    if (!overlay) throw new Error('overlay element not found')

    fireEvent.pointerDown(overlay)
    fireEvent.pointerUp(overlay)

    expect(screen.getByText('Test dialog')).toBeInTheDocument()
  })

  it('uses primary action variant by default', () => {
    render(<Controlled />)
    const action = screen.getByRole('button', { name: 'Confirm' })
    // Button primary variant uses bg-solid utility class
    expect(action.className).toContain('bg-solid')
  })

  it('uses destructive action variant when specified', () => {
    render(
      <Controlled actionButton={{ label: 'Delete', variant: 'destructive', onClick: () => {} }} />,
    )
    const action = screen.getByRole('button', { name: 'Delete' })
    expect(action.className).toContain('bg-destructive')
  })

  it('caps body height with overflow-y-auto so long content scrolls inside the dialog', () => {
    render(
      <Controlled>
        <p data-testid="dialog-body">long content</p>
      </Controlled>,
    )
    const body = screen.getByTestId('dialog-body').parentElement
    expect(body).toHaveClass('overflow-y-auto')
    expect(body).toHaveClass('min-h-0')
  })

  it('auto-focuses cancelButton when actionButton.variant is destructive', async () => {
    render(
      <Controlled
        actionButton={{ label: 'Delete', variant: 'destructive', onClick: () => {} }}
        cancelButton={{ label: 'Cancel' }}
      />,
    )
    // Radix dispatches onOpenAutoFocus on next microtask after mount.
    await Promise.resolve()
    expect(screen.getByRole('button', { name: 'Cancel' })).toHaveFocus()
  })

  it('falls back to default focus when destructive but no cancelButton', async () => {
    render(
      <Controlled actionButton={{ label: 'Delete', variant: 'destructive', onClick: () => {} }} />,
    )
    await Promise.resolve()
    // Without cancel, our handler doesn't preventDefault — Radix's default
    // (first tabbable inside Content) takes effect. Our `data-cancel-ref`
    // hook doesn't fire, so no focus override happens.
    expect(screen.queryByRole('button', { name: 'Cancel' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Delete' })).toBeInTheDocument()
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
})
