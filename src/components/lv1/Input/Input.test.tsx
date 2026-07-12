import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DollarSign, Search, X } from 'lucide-react'
import { describe, expect, it, vi } from 'vitest'
import { Field } from '../Field/Field'
import { Input } from './Input'

describe('Input', () => {
  it('renders an <input> element', () => {
    render(<Input aria-label="email" />)
    const input = screen.getByRole('textbox', { name: 'email' })
    expect(input.tagName.toLowerCase()).toBe('input')
  })

  it('renders the placeholder', () => {
    render(<Input aria-label="email" placeholder="you@example.com" />)
    expect(screen.getByPlaceholderText('you@example.com')).toBeInTheDocument()
  })

  it('respects the type attribute', () => {
    render(<Input aria-label="age" type="number" />)
    expect(screen.getByRole('spinbutton')).toHaveAttribute('type', 'number')
  })

  it('emits the canonical st-input-wrapper class chain', () => {
    const { container } = render(<Input aria-label="email" />)
    expect(container.firstChild).toHaveClass('st-input-wrapper', 'st-input-wrapper--md')
  })

  it('emits st-input on the inner input', () => {
    render(<Input aria-label="email" />)
    expect(screen.getByRole('textbox')).toHaveClass('st-input')
  })

  describe('sizes', () => {
    it('applies the size modifier to the wrapper', () => {
      const { rerender, container } = render(<Input aria-label="email" size="sm" />)
      expect(container.firstChild).toHaveClass('st-input-wrapper--sm')

      rerender(<Input aria-label="email" size="lg" />)
      expect(container.firstChild).toHaveClass('st-input-wrapper--lg')
    })

    it('defaults to md', () => {
      const { container } = render(<Input aria-label="email" />)
      expect(container.firstChild).toHaveClass('st-input-wrapper--md')
    })
  })

  describe('error state', () => {
    it('sets aria-invalid on the inner input when isError is true', () => {
      render(<Input aria-label="email" isError />)
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
    })

    it('omits aria-invalid when isError is false', () => {
      render(<Input aria-label="email" />)
      expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-invalid')
    })
  })

  describe('disabled', () => {
    it('disables the input', () => {
      render(<Input aria-label="email" disabled />)
      expect(screen.getByRole('textbox')).toBeDisabled()
    })

    it('does not focus the input when the wrapper is clicked while disabled', async () => {
      const user = userEvent.setup()
      render(<Input aria-label="email" disabled />)
      const input = screen.getByRole('textbox')
      await user.click(input.parentElement as HTMLElement)
      expect(input).not.toHaveFocus()
    })

    it('keeps aria-invalid on the input when both disabled and isError are set', () => {
      // Visual precedence (disabled > error) lives in Input.css via
      // `.st-input-wrapper:has(.st-input:disabled)` overriding the error
      // surface in source order; the VRT pins the rendered result. Unit
      // side, the input still announces the error to assistive tech via
      // aria-invalid — that wiring is what matters here.
      render(<Input aria-label="email" disabled isError />)
      const input = screen.getByRole('textbox')
      expect(input).toBeDisabled()
      expect(input).toHaveAttribute('aria-invalid', 'true')
    })
  })

  describe('readOnly', () => {
    it('marks the input as readonly', () => {
      render(<Input aria-label="email" readOnly defaultValue="value" />)
      expect(screen.getByRole('textbox')).toHaveAttribute('readonly')
    })

    it('keeps the input focusable when readOnly', async () => {
      const user = userEvent.setup()
      render(<Input aria-label="email" readOnly defaultValue="value" />)
      const input = screen.getByRole('textbox')
      await user.click(input)
      expect(input).toHaveFocus()
    })

    it('does not commit typed input when readOnly', async () => {
      const user = userEvent.setup()
      render(<Input aria-label="email" readOnly defaultValue="value" />)
      const input = screen.getByRole('textbox') as HTMLInputElement
      await user.click(input)
      await user.keyboard('hello')
      expect(input.value).toBe('value')
    })

    it('keeps aria-invalid on the input when both readOnly and isError are set', () => {
      // Visual precedence (readOnly > error) is CSS source order on the
      // wrapper. The aria-invalid attribute still lands so assistive tech
      // is not muted.
      render(<Input aria-label="email" readOnly isError />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('readonly')
      expect(input).toHaveAttribute('aria-invalid', 'true')
    })
  })

  describe('change handling', () => {
    it('fires onChange while typing', async () => {
      const onChange = vi.fn()
      const user = userEvent.setup()
      render(<Input aria-label="email" onChange={onChange} />)
      await user.type(screen.getByRole('textbox'), 'hi')
      expect(onChange).toHaveBeenCalled()
      expect(screen.getByRole('textbox')).toHaveValue('hi')
    })

    it('respects defaultValue (uncontrolled)', () => {
      render(<Input aria-label="email" defaultValue="initial" />)
      expect(screen.getByRole('textbox')).toHaveValue('initial')
    })
  })

  describe('adornments', () => {
    it('renders textLeft / textRight with sub-element classes', () => {
      render(<Input aria-label="amount" textLeft="$" textRight="USD" />)
      expect(screen.getByText('$')).toHaveClass('st-input__text-left')
      expect(screen.getByText('USD')).toHaveClass('st-input__text-right')
    })

    it('renders leading and trailing icons with sub-element classes', () => {
      const { container } = render(<Input aria-label="search" iconLeft={Search} iconRight={X} />)
      const svgs = container.querySelectorAll('svg')
      expect(svgs).toHaveLength(2)
      expect(svgs[0]).toHaveClass('st-input__icon-left')
      expect(svgs[1]).toHaveClass('st-input__icon-right')
    })

    it('hides iconLeft when textLeft is set (text takes priority)', () => {
      const { container } = render(<Input aria-label="amount" textLeft="$" iconLeft={DollarSign} />)
      // Only the text adornment renders; icon is suppressed.
      expect(container.querySelectorAll('svg')).toHaveLength(0)
      expect(screen.getByText('$')).toBeInTheDocument()
    })
  })

  describe('date type', () => {
    it('emits the st-input--date derived modifier when type is date', () => {
      const { container } = render(<Input aria-label="dob" type="date" />)
      const input = container.querySelector('input')
      expect(input).toHaveClass('st-input', 'st-input--date')
    })

    it('also emits it for datetime-local / month / week / time', () => {
      const { container, rerender } = render(<Input aria-label="t" type="datetime-local" />)
      expect(container.querySelector('input')).toHaveClass('st-input--date')
      rerender(<Input aria-label="t" type="month" />)
      expect(container.querySelector('input')).toHaveClass('st-input--date')
      rerender(<Input aria-label="t" type="week" />)
      expect(container.querySelector('input')).toHaveClass('st-input--date')
      rerender(<Input aria-label="t" type="time" />)
      expect(container.querySelector('input')).toHaveClass('st-input--date')
    })

    it('omits st-input--date for non-date types', () => {
      render(<Input aria-label="email" type="email" />)
      expect(screen.getByRole('textbox')).not.toHaveClass('st-input--date')
    })
  })

  describe('Field context integration', () => {
    it('uses Field id', () => {
      render(
        <Field label="Email">
          <Input />
        </Field>,
      )
      const input = screen.getByRole('textbox')
      const label = screen.getByText('Email')
      expect(label).toHaveAttribute('for', input.id)
    })

    it('inherits isError from Field', () => {
      render(
        <Field label="Email" error="Required">
          <Input />
        </Field>,
      )
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
    })

    it('inherits disabled from Field', () => {
      render(
        <Field label="Email" disabled>
          <Input />
        </Field>,
      )
      expect(screen.getByRole('textbox')).toBeDisabled()
    })

    it('inherits aria-describedby from Field', () => {
      render(
        <Field label="Email" description="We never share your address">
          <Input />
        </Field>,
      )
      const describedBy = screen.getByRole('textbox').getAttribute('aria-describedby')
      expect(describedBy).toContain('-description')
    })

    it('inherits required (aria-required) from Field', () => {
      render(
        <Field label="Email" required>
          <Input />
        </Field>,
      )
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-required', 'true')
    })

    it('keeps the native required attribute when Field is not required', () => {
      // announce-only: Field.required is false here, so no field-derived
      // aria-required, but a direct `required` prop stays on the native input.
      render(
        <Field label="Email">
          <Input required />
        </Field>,
      )
      const input = screen.getByRole('textbox')
      expect(input).toBeRequired()
      expect(input).not.toHaveAttribute('aria-required')
    })
  })

  describe('required', () => {
    it('passes a direct required prop through to the native input', () => {
      render(<Input aria-label="email" required />)
      expect(screen.getByRole('textbox')).toBeRequired()
    })

    it('does not set aria-required when neither Field nor required is set', () => {
      render(<Input aria-label="email" />)
      expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-required')
    })
  })

  it('forwards className to the wrapper', () => {
    const { container } = render(<Input aria-label="email" className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('forwards ref to the input element', () => {
    const ref = { current: null as HTMLInputElement | null }
    render(<Input aria-label="email" ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })

  it('forwards data-testid to the <input> element', () => {
    render(<Input aria-label="email" data-testid="email-input" />)
    expect(screen.getByTestId('email-input')).toBe(screen.getByRole('textbox', { name: 'email' }))
  })
})
