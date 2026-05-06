import { render, screen } from '@testing-library/react'
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
      actionButton={{ label: 'Confirm' }}
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

  it('uses primary action variant by default', () => {
    render(<Controlled />)
    const action = screen.getByRole('button', { name: 'Confirm' })
    // Button primary variant uses bg-solid utility class
    expect(action.className).toContain('bg-solid')
  })

  it('uses destructive action variant when specified', () => {
    render(<Controlled actionButton={{ label: 'Delete', variant: 'destructive' }} />)
    const action = screen.getByRole('button', { name: 'Delete' })
    expect(action.className).toContain('bg-destructive')
  })
})
