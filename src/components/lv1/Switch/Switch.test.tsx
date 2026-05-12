import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Field } from '../Field/Field'
import { Switch } from './Switch'

describe('Switch', () => {
  it('renders an unchecked switch by default', () => {
    render(<Switch aria-label="Notifications" />)
    const sw = screen.getByRole('switch', { name: 'Notifications' })
    expect(sw).toBeInTheDocument()
    expect(sw).toHaveAttribute('data-state', 'unchecked')
  })

  it('renders label and associates it via htmlFor', () => {
    render(<Switch label="Notifications" />)
    const sw = screen.getByRole('switch')
    const label = screen.getByText('Notifications')
    expect(label).toHaveAttribute('for', sw.id)
  })

  describe('sizes', () => {
    it('applies size classes', () => {
      const { rerender } = render(<Switch aria-label="sw" size="sm" />)
      expect(screen.getByRole('switch')).toHaveClass('h-4')

      rerender(<Switch aria-label="sw" size="lg" />)
      expect(screen.getByRole('switch')).toHaveClass('h-6')
    })

    it('defaults to md size', () => {
      render(<Switch aria-label="sw" />)
      expect(screen.getByRole('switch')).toHaveClass('h-5')
    })
  })

  describe('error state', () => {
    it('applies error classes and aria-invalid when isError is true', () => {
      render(<Switch aria-label="sw" isError />)
      const sw = screen.getByRole('switch')
      expect(sw.className).toContain('border-error')
      expect(sw).toHaveAttribute('aria-invalid', 'true')
    })

    it('does not set aria-invalid when isError is false', () => {
      render(<Switch aria-label="sw" />)
      expect(screen.getByRole('switch')).not.toHaveAttribute('aria-invalid')
    })
  })

  describe('disabled', () => {
    it('disables the switch', () => {
      render(<Switch aria-label="sw" disabled />)
      expect(screen.getByRole('switch')).toBeDisabled()
    })

    it('does not fire onCheckedChange when disabled', async () => {
      const onCheckedChange = vi.fn()
      const user = userEvent.setup()
      render(<Switch aria-label="sw" disabled onCheckedChange={onCheckedChange} />)
      await user.click(screen.getByRole('switch'))
      expect(onCheckedChange).not.toHaveBeenCalled()
    })
  })

  describe('controlled / uncontrolled', () => {
    it('respects defaultChecked (uncontrolled)', () => {
      render(<Switch aria-label="sw" defaultChecked />)
      expect(screen.getByRole('switch')).toHaveAttribute('data-state', 'checked')
    })

    it('reflects controlled checked', () => {
      render(<Switch aria-label="sw" checked onCheckedChange={() => {}} />)
      expect(screen.getByRole('switch')).toHaveAttribute('data-state', 'checked')
    })

    it('toggles state and fires onCheckedChange on click', async () => {
      const onCheckedChange = vi.fn()
      const user = userEvent.setup()
      render(<Switch aria-label="sw" onCheckedChange={onCheckedChange} />)
      const sw = screen.getByRole('switch')
      await user.click(sw)
      expect(onCheckedChange).toHaveBeenCalledWith(true)
      expect(sw).toHaveAttribute('data-state', 'checked')
    })

    it('toggles via label click', async () => {
      const onCheckedChange = vi.fn()
      const user = userEvent.setup()
      render(<Switch label="Notifications" onCheckedChange={onCheckedChange} />)
      await user.click(screen.getByText('Notifications'))
      expect(onCheckedChange).toHaveBeenCalledWith(true)
    })
  })

  describe('Field context integration', () => {
    it('inherits isError from Field', () => {
      render(
        <Field label="Notifications" error="Required">
          <Switch aria-label="sw" />
        </Field>,
      )
      const sw = screen.getByRole('switch')
      expect(sw.className).toContain('border-error')
      expect(sw).toHaveAttribute('aria-invalid', 'true')
    })

    it('inherits disabled from Field', () => {
      render(
        <Field label="Notifications" disabled>
          <Switch aria-label="sw" />
        </Field>,
      )
      expect(screen.getByRole('switch')).toBeDisabled()
    })

    it('inherits aria-describedby from Field', () => {
      render(
        <Field label="Notifications" description="Help text">
          <Switch aria-label="sw" />
        </Field>,
      )
      const describedBy = screen.getByRole('switch').getAttribute('aria-describedby')
      expect(describedBy).toContain('-description')
    })

    it('does NOT inherit id from Field (Switch has its own label)', () => {
      render(
        <Field label="Notifications">
          <Switch label="Toggle" />
        </Field>,
      )
      const sw = screen.getByRole('switch')
      const internalLabel = screen.getByText('Toggle')
      expect(internalLabel).toHaveAttribute('for', sw.id)
    })
  })

  it('forwards className to the wrapper', () => {
    const { container } = render(<Switch aria-label="sw" className="custom-class" />)
    expect(container.firstChild as HTMLElement).toHaveClass('custom-class')
  })
})
