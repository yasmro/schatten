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

  it('emits the canonical st-input-wrapper class chain', () => {
    const { container } = render(<Input aria-label="email" size="md" />)
    const wrapper = container.firstChild as HTMLElement
    expect(wrapper).toHaveClass('st-input-wrapper', 'st-input-wrapper--md')
  })

  it('emits the st-input class on the inner input', () => {
    render(<Input aria-label="email" />)
    expect(screen.getByRole('textbox')).toHaveClass('st-input')
  })

  it('renders the placeholder', () => {
    render(<Input aria-label="email" placeholder="you@example.com" />)
    expect(screen.getByPlaceholderText('you@example.com')).toBeInTheDocument()
  })

  it('respects the type attribute', () => {
    render(<Input aria-label="age" type="number" />)
    expect(screen.getByRole('spinbutton')).toHaveAttribute('type', 'number')
  })

  describe('sizes', () => {
    it('applies size modifier classes on the wrapper', () => {
      const { rerender, container } = render(<Input aria-label="email" size="sm" />)
      expect(container.firstChild).toHaveClass('st-input-wrapper--sm')

      rerender(<Input aria-label="email" size="lg" />)
      expect(container.firstChild).toHaveClass('st-input-wrapper--lg')
    })

    it('defaults to md size', () => {
      const { container } = render(<Input aria-label="email" />)
      expect(container.firstChild).toHaveClass('st-input-wrapper--md')
    })
  })

  describe('error state', () => {
    it('sets aria-invalid on the input when isError is true (border + bg shift driven by CSS)', () => {
      // Visual treatment lives in the
      // .st-input-wrapper:has(.st-input[aria-invalid="true"]) CSS rule —
      // the test pins the attribute that triggers it.
      render(<Input aria-label="email" isError />)
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
    })

    it('does not set aria-invalid when isError is false', () => {
      render(<Input aria-label="email" />)
      expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-invalid')
    })
  })

  describe('disabled', () => {
    it('disables the input', () => {
      render(<Input aria-label="email" disabled />)
      expect(screen.getByRole('textbox')).toBeDisabled()
    })

    it('does not focus the input when wrapper is clicked while disabled', async () => {
      const user = userEvent.setup()
      render(<Input aria-label="email" disabled />)
      const input = screen.getByRole('textbox')
      await user.click(input.parentElement as HTMLElement)
      expect(input).not.toHaveFocus()
    })

    it('still exposes aria-invalid when disabled + isError are both set (visual precedence pinned by VRT)', () => {
      // CSS source order encodes precedence (disabled wins for surface /
      // border / cursor tokens), but aria-invalid stays on so assistive
      // tech sees the error state.
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

    it('does not block typing focus — input is still focusable', async () => {
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

    it('still exposes aria-invalid when readOnly + isError are both set (visual precedence pinned by VRT)', () => {
      render(<Input aria-label="email" readOnly isError />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('readonly')
      expect(input).toHaveAttribute('aria-invalid', 'true')
    })

    it('disabled + readOnly both expose the matching attributes (visual precedence pinned by VRT)', () => {
      render(<Input aria-label="email" disabled readOnly />)
      const input = screen.getByRole('textbox')
      expect(input).toBeDisabled()
      expect(input).toHaveAttribute('readonly')
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
    it('renders textLeft inside .st-input__text-left', () => {
      const { container } = render(<Input aria-label="amount" textLeft="$" />)
      const node = container.querySelector('.st-input__text-left')
      expect(node).toHaveTextContent('$')
    })

    it('renders textRight inside .st-input__text-right', () => {
      const { container } = render(<Input aria-label="amount" textRight="USD" />)
      const node = container.querySelector('.st-input__text-right')
      expect(node).toHaveTextContent('USD')
    })

    it('renders iconLeft with .st-input__icon-left when no textLeft is set', () => {
      const { container } = render(<Input aria-label="search" iconLeft={Search} />)
      const icon = container.querySelector('.st-input__icon-left')
      expect(icon).toBeInTheDocument()
      expect(icon?.tagName.toLowerCase()).toBe('svg')
    })

    it('renders iconRight with .st-input__icon-right when no textRight is set', () => {
      const { container } = render(<Input aria-label="search" iconRight={X} />)
      const icon = container.querySelector('.st-input__icon-right')
      expect(icon).toBeInTheDocument()
    })

    it('hides iconLeft when textLeft is set (text takes priority)', () => {
      const { container } = render(<Input aria-label="amount" textLeft="$" iconLeft={DollarSign} />)
      expect(container.querySelectorAll('svg')).toHaveLength(0)
      expect(container.querySelector('.st-input__text-left')).toHaveTextContent('$')
    })
  })

  describe('date type modifier', () => {
    it('emits st-input--date when type is date', () => {
      const { container } = render(<Input aria-label="dob" type="date" />)
      const input = container.querySelector('input[type="date"]')
      expect(input).toHaveClass('st-input', 'st-input--date')
    })

    it('emits st-input--date for datetime-local / month / week / time', () => {
      const { container, rerender } = render(<Input aria-label="x" type="datetime-local" />)
      expect(container.querySelector('input')).toHaveClass('st-input--date')

      rerender(<Input aria-label="x" type="month" />)
      expect(container.querySelector('input')).toHaveClass('st-input--date')

      rerender(<Input aria-label="x" type="week" />)
      expect(container.querySelector('input')).toHaveClass('st-input--date')

      rerender(<Input aria-label="x" type="time" />)
      expect(container.querySelector('input')).toHaveClass('st-input--date')
    })

    it('does NOT emit st-input--date for non-date types', () => {
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
  })

  it('forwards className to the wrapper', () => {
    const { container } = render(<Input aria-label="email" className="custom-class" />)
    expect(container.firstChild).toHaveClass('st-input-wrapper', 'custom-class')
  })

  it('forwards ref to the input element', () => {
    const ref = { current: null as HTMLInputElement | null }
    render(<Input aria-label="email" ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })
})
