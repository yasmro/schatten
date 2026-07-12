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

  it('emits the canonical st-textarea class chain', () => {
    render(<Textarea aria-label="bio" />)
    expect(screen.getByRole('textbox')).toHaveClass('st-textarea', 'st-textarea--md')
  })

  describe('sizes', () => {
    it('applies the size modifier', () => {
      const { rerender } = render(<Textarea aria-label="bio" size="sm" />)
      expect(screen.getByRole('textbox')).toHaveClass('st-textarea--sm')

      rerender(<Textarea aria-label="bio" size="lg" />)
      expect(screen.getByRole('textbox')).toHaveClass('st-textarea--lg')
    })

    it('defaults to md', () => {
      render(<Textarea aria-label="bio" />)
      expect(screen.getByRole('textbox')).toHaveClass('st-textarea--md')
    })
  })

  describe('error state', () => {
    it('sets aria-invalid when isError is true', () => {
      render(<Textarea aria-label="bio" isError />)
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
    })

    it('omits aria-invalid when isError is false', () => {
      render(<Textarea aria-label="bio" />)
      expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-invalid')
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

    it('does not commit typed input when readOnly', async () => {
      const user = userEvent.setup()
      render(<Textarea aria-label="bio" readOnly defaultValue="value" />)
      const ta = screen.getByRole('textbox') as HTMLTextAreaElement
      await user.click(ta)
      await user.keyboard('hello')
      expect(ta.value).toBe('value')
    })

    it('keeps aria-invalid when both readOnly and isError are set', () => {
      // Visual precedence (readOnly > error) is encoded in Textarea.css
      // via CSS source order. Unit-side, the aria-invalid attribute still
      // lands so assistive tech still sees the error — the VRT pins the
      // rendered surface.
      render(<Textarea aria-label="bio" readOnly isError />)
      const ta = screen.getByRole('textbox')
      expect(ta).toHaveAttribute('readonly')
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
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
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

    it('inherits required (aria-required) from Field', () => {
      render(
        <Field label="Bio" required>
          <Textarea />
        </Field>,
      )
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-required', 'true')
    })

    it('keeps the native required attribute when Field is not required', () => {
      render(
        <Field label="Bio">
          <Textarea required />
        </Field>,
      )
      const ta = screen.getByRole('textbox')
      expect(ta).toBeRequired()
      expect(ta).not.toHaveAttribute('aria-required')
    })
  })

  describe('required', () => {
    it('passes a direct required prop through to the native textarea', () => {
      render(<Textarea aria-label="bio" required />)
      expect(screen.getByRole('textbox')).toBeRequired()
    })

    it('does not set aria-required when neither Field nor required is set', () => {
      render(<Textarea aria-label="bio" />)
      expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-required')
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

  it('forwards data-testid to the <textarea> element', () => {
    render(<Textarea aria-label="bio" data-testid="bio-input" />)
    expect(screen.getByTestId('bio-input')).toBe(screen.getByRole('textbox', { name: 'bio' }))
  })
})
