import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Field } from '../Field/Field'
import { Textarea } from './Textarea'

describe('Textarea', () => {
  it('renders a <textarea> element', () => {
    render(<Textarea aria-label="bio" />)
    const ta = screen.getByRole('textbox', { name: 'bio' })
    expect(ta.tagName.toLowerCase()).toBe('textarea')
  })

  it('renders the placeholder', () => {
    render(<Textarea aria-label="bio" placeholder="Tell us about yourself" />)
    expect(screen.getByPlaceholderText('Tell us about yourself')).toBeInTheDocument()
  })

  it('respects the rows attribute', () => {
    render(<Textarea aria-label="bio" rows={6} />)
    expect(screen.getByRole('textbox')).toHaveAttribute('rows', '6')
  })

  describe('sizes', () => {
    it('applies size classes', () => {
      const { rerender } = render(<Textarea aria-label="bio" size="sm" />)
      expect(screen.getByRole('textbox')).toHaveClass('text-xs')

      rerender(<Textarea aria-label="bio" size="lg" />)
      expect(screen.getByRole('textbox')).toHaveClass('text-base')
    })

    it('defaults to md size', () => {
      render(<Textarea aria-label="bio" />)
      expect(screen.getByRole('textbox')).toHaveClass('text-sm')
    })
  })

  describe('error state', () => {
    it('applies error classes and aria-invalid when isError is true', () => {
      render(<Textarea aria-label="bio" isError />)
      const ta = screen.getByRole('textbox')
      expect(ta.className).toContain('border-error')
      expect(ta.className).toContain('bg-error-subtle')
      expect(ta).toHaveAttribute('aria-invalid', 'true')
    })

    it('uses border-border-strong (no error) when isError is false', () => {
      render(<Textarea aria-label="bio" />)
      const ta = screen.getByRole('textbox')
      expect(ta.className).toContain('border-border-strong')
      expect(ta).not.toHaveAttribute('aria-invalid')
    })
  })

  describe('disabled', () => {
    it('disables the textarea', () => {
      render(<Textarea aria-label="bio" disabled />)
      expect(screen.getByRole('textbox')).toBeDisabled()
    })
  })

  describe('readOnly', () => {
    it('marks the textarea as readonly', () => {
      render(<Textarea aria-label="bio" readOnly defaultValue="value" />)
      expect(screen.getByRole('textbox')).toHaveAttribute('readonly')
    })

    it('applies readOnly tokens to the textarea', () => {
      render(<Textarea aria-label="bio" readOnly />)
      const ta = screen.getByRole('textbox')
      expect(ta.className).toContain('bg-surface-readonly')
      expect(ta.className).toContain('border-border-readonly')
    })

    it('does not commit typed input when readOnly', async () => {
      const user = userEvent.setup()
      render(<Textarea aria-label="bio" readOnly defaultValue="value" />)
      const ta = screen.getByRole('textbox') as HTMLTextAreaElement
      await user.click(ta)
      await user.keyboard('hello')
      expect(ta.value).toBe('value')
    })

    it('readOnly visual wins over isError when both are true', () => {
      render(<Textarea aria-label="bio" readOnly isError />)
      const ta = screen.getByRole('textbox')
      // tailwind-merge dedupes conflicting bg / border utilities; readOnly
      // is concatenated after the isError ternary so its tokens win, while
      // the unconflicting focus-visible:ring-error survives. aria-invalid
      // is still emitted so assistive tech sees the error.
      expect(ta.className).toContain('bg-surface-readonly')
      expect(ta.className).toContain('border-border-readonly')
      expect(ta.className).not.toContain('bg-error-subtle')
      expect(ta.className).not.toContain('border-error')
      expect(ta.className).toContain('focus-visible:ring-error')
      expect(ta).toHaveAttribute('aria-invalid', 'true')
    })
  })

  describe('change handling', () => {
    it('fires onChange while typing', async () => {
      const onChange = vi.fn()
      const user = userEvent.setup()
      render(<Textarea aria-label="bio" onChange={onChange} />)
      await user.type(screen.getByRole('textbox'), 'hi')
      expect(onChange).toHaveBeenCalled()
      expect(screen.getByRole('textbox')).toHaveValue('hi')
    })
  })

  describe('Field context integration', () => {
    it('uses Field id', () => {
      render(
        <Field label="Bio">
          <Textarea />
        </Field>,
      )
      const ta = screen.getByRole('textbox')
      const label = screen.getByText('Bio')
      expect(label).toHaveAttribute('for', ta.id)
    })

    it('inherits isError from Field', () => {
      render(
        <Field label="Bio" error="Required">
          <Textarea />
        </Field>,
      )
      const ta = screen.getByRole('textbox')
      expect(ta.className).toContain('border-error')
      expect(ta).toHaveAttribute('aria-invalid', 'true')
    })

    it('inherits disabled from Field', () => {
      render(
        <Field label="Bio" disabled>
          <Textarea />
        </Field>,
      )
      expect(screen.getByRole('textbox')).toBeDisabled()
    })

    it('inherits aria-describedby from Field', () => {
      render(
        <Field label="Bio" description="Help text">
          <Textarea />
        </Field>,
      )
      const describedBy = screen.getByRole('textbox').getAttribute('aria-describedby')
      expect(describedBy).toContain('-description')
    })
  })

  it('forwards className', () => {
    render(<Textarea aria-label="bio" className="custom-class" />)
    expect(screen.getByRole('textbox')).toHaveClass('custom-class')
  })

  it('forwards ref to the textarea element', () => {
    const ref = { current: null as HTMLTextAreaElement | null }
    render(<Textarea aria-label="bio" ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement)
  })
})
