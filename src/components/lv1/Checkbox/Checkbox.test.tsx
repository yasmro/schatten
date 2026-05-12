import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Field } from '../Field/Field'
import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('renders an unchecked checkbox by default', () => {
    render(<Checkbox aria-label="Accept" />)
    const checkbox = screen.getByRole('checkbox', { name: 'Accept' })
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toHaveAttribute('data-state', 'unchecked')
  })

  it('renders label and associates it via htmlFor', () => {
    render(<Checkbox label="Subscribe" />)
    const checkbox = screen.getByRole('checkbox')
    const label = screen.getByText('Subscribe')
    expect(label).toHaveAttribute('for', checkbox.id)
  })

  describe('sizes', () => {
    it('applies size classes', () => {
      const { rerender } = render(<Checkbox aria-label="cb" size="sm" />)
      expect(screen.getByRole('checkbox')).toHaveClass('size-4')

      rerender(<Checkbox aria-label="cb" size="lg" />)
      expect(screen.getByRole('checkbox')).toHaveClass('size-6')
    })

    it('defaults to md size', () => {
      render(<Checkbox aria-label="cb" />)
      expect(screen.getByRole('checkbox')).toHaveClass('size-5')
    })
  })

  describe('error state', () => {
    it('applies error classes and aria-invalid when isError is true', () => {
      render(<Checkbox aria-label="cb" isError />)
      const checkbox = screen.getByRole('checkbox')
      expect(checkbox.className).toContain('border-error')
      expect(checkbox).toHaveAttribute('aria-invalid', 'true')
    })

    it('does not set aria-invalid when isError is false', () => {
      render(<Checkbox aria-label="cb" />)
      expect(screen.getByRole('checkbox')).not.toHaveAttribute('aria-invalid')
    })
  })

  describe('disabled', () => {
    it('disables the checkbox', () => {
      render(<Checkbox aria-label="cb" disabled />)
      expect(screen.getByRole('checkbox')).toBeDisabled()
    })

    it('does not fire onCheckedChange when disabled', async () => {
      const onCheckedChange = vi.fn()
      const user = userEvent.setup()
      render(<Checkbox aria-label="cb" disabled onCheckedChange={onCheckedChange} />)
      await user.click(screen.getByRole('checkbox'))
      expect(onCheckedChange).not.toHaveBeenCalled()
    })
  })

  describe('controlled / uncontrolled', () => {
    it('respects defaultChecked (uncontrolled)', () => {
      render(<Checkbox aria-label="cb" defaultChecked />)
      expect(screen.getByRole('checkbox')).toHaveAttribute('data-state', 'checked')
    })

    it('reflects controlled checked={true}', () => {
      render(<Checkbox aria-label="cb" checked onCheckedChange={() => {}} />)
      expect(screen.getByRole('checkbox')).toHaveAttribute('data-state', 'checked')
    })

    it('reflects controlled checked="indeterminate"', () => {
      render(<Checkbox aria-label="cb" checked="indeterminate" onCheckedChange={() => {}} />)
      expect(screen.getByRole('checkbox')).toHaveAttribute('data-state', 'indeterminate')
    })

    it('toggles state and fires onCheckedChange on click', async () => {
      const onCheckedChange = vi.fn()
      const user = userEvent.setup()
      render(<Checkbox aria-label="cb" onCheckedChange={onCheckedChange} />)
      const checkbox = screen.getByRole('checkbox')
      await user.click(checkbox)
      expect(onCheckedChange).toHaveBeenCalledWith(true)
      expect(checkbox).toHaveAttribute('data-state', 'checked')
    })
  })

  describe('label click', () => {
    it('focuses/toggles when label is clicked', async () => {
      const onCheckedChange = vi.fn()
      const user = userEvent.setup()
      render(<Checkbox label="Subscribe" onCheckedChange={onCheckedChange} />)
      await user.click(screen.getByText('Subscribe'))
      expect(onCheckedChange).toHaveBeenCalledWith(true)
    })
  })

  describe('Field context integration', () => {
    it('inherits isError from Field', () => {
      render(
        <Field label="Terms" error="Required">
          <Checkbox aria-label="cb" />
        </Field>,
      )
      const checkbox = screen.getByRole('checkbox')
      expect(checkbox.className).toContain('border-error')
      expect(checkbox).toHaveAttribute('aria-invalid', 'true')
    })

    it('inherits disabled from Field', () => {
      render(
        <Field label="Terms" disabled>
          <Checkbox aria-label="cb" />
        </Field>,
      )
      expect(screen.getByRole('checkbox')).toBeDisabled()
    })

    it('inherits aria-describedby from Field', () => {
      render(
        <Field label="Terms" description="Help text">
          <Checkbox aria-label="cb" />
        </Field>,
      )
      const describedBy = screen.getByRole('checkbox').getAttribute('aria-describedby')
      expect(describedBy).toContain('-description')
    })

    it('does NOT inherit id from Field (Checkbox has its own label)', () => {
      // Field provides its own id; Checkbox should keep its own unique id so
      // label htmlFor works for the internal label.
      render(
        <Field label="Terms">
          <Checkbox label="Accept" />
        </Field>,
      )
      const checkbox = screen.getByRole('checkbox')
      const internalLabel = screen.getByText('Accept')
      // Internal label points to checkbox's id, not Field's outer label
      expect(internalLabel).toHaveAttribute('for', checkbox.id)
    })

    it('prop isError overrides false Field context when used standalone', () => {
      render(<Checkbox aria-label="cb" isError />)
      expect(screen.getByRole('checkbox')).toHaveAttribute('aria-invalid', 'true')
    })
  })

  it('forwards className to the root element', () => {
    const { container } = render(<Checkbox aria-label="cb" className="custom-class" />)
    const wrapper = container.firstChild as HTMLElement
    expect(wrapper).toHaveClass('custom-class')
  })
})
