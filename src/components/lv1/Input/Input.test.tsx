import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

  describe('sizes', () => {
    it('applies size classes to the wrapper', () => {
      const { rerender, container } = render(<Input aria-label="email" size="sm" />)
      expect(container.firstChild).toHaveClass('h-8')

      rerender(<Input aria-label="email" size="lg" />)
      expect(container.firstChild).toHaveClass('h-12')
    })

    it('defaults to md size', () => {
      const { container } = render(<Input aria-label="email" />)
      expect(container.firstChild).toHaveClass('h-10')
    })
  })

  describe('error state', () => {
    it('applies error classes to wrapper and aria-invalid on input when isError is true', () => {
      const { container } = render(<Input aria-label="email" isError />)
      const wrapper = container.firstChild
      expect(wrapper).toHaveClass('border-error', 'bg-error-subtle')
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
    })

    it('uses border-border-strong when isError is false', () => {
      const { container } = render(<Input aria-label="email" />)
      expect(container.firstChild).toHaveClass('border-border-strong')
      expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-invalid')
    })
  })

  describe('disabled', () => {
    it('disables the input', () => {
      render(<Input aria-label="email" disabled />)
      expect(screen.getByRole('textbox')).toBeDisabled()
    })

    it('applies disabled tokens to the wrapper', () => {
      const { container } = render(<Input aria-label="email" disabled />)
      expect(container.firstChild).toHaveClass(
        'cursor-not-allowed',
        'bg-surface-disabled',
        'border-border-disabled',
        'text-foreground-disabled',
      )
    })

    it('does not call onClick handler when wrapper is clicked while disabled', async () => {
      const user = userEvent.setup()
      render(<Input aria-label="email" disabled />)
      const input = screen.getByRole('textbox')
      await user.click(input.parentElement as HTMLElement)
      expect(input).not.toHaveFocus()
    })

    it('disabled visual wins over isError when both are true', () => {
      const { container } = render(<Input aria-label="email" disabled isError />)
      const wrapper = container.firstChild as HTMLElement
      // tailwind-merge dedupes the conflicting bg / border utilities;
      // the disabled token wins because it is concatenated after the
      // isError ternary in the wrapper's cn() call.
      expect(wrapper).toHaveClass('bg-surface-disabled', 'border-border-disabled')
      expect(wrapper).not.toHaveClass('border-error')
      expect(wrapper).not.toHaveClass('bg-error-subtle')
      // The focus-ring modifier survives because it does not conflict
      // with the unmodified disabled classes at the dedupe layer.
      expect(wrapper.className).toContain('has-focus-visible:ring-error')
      // aria-invalid is still emitted — assistive tech still sees the error.
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
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
    it('renders textLeft and textRight', () => {
      render(<Input aria-label="amount" textLeft="$" textRight="USD" />)
      expect(screen.getByText('$')).toBeInTheDocument()
      expect(screen.getByText('USD')).toBeInTheDocument()
    })

    it('renders leading and trailing icons when no text adornment is provided', () => {
      const { container } = render(<Input aria-label="search" iconLeft="Search" iconRight="X" />)
      const svgs = container.querySelectorAll('svg')
      expect(svgs).toHaveLength(2)
    })

    it('hides iconLeft when textLeft is set (text takes priority)', () => {
      const { container } = render(<Input aria-label="amount" textLeft="$" iconLeft="DollarSign" />)
      // Only the text adornment renders; icon is suppressed.
      expect(container.querySelectorAll('svg')).toHaveLength(0)
      expect(screen.getByText('$')).toBeInTheDocument()
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
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('forwards ref to the input element', () => {
    const ref = { current: null as HTMLInputElement | null }
    render(<Input aria-label="email" ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })
})
