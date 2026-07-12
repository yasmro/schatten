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

  it('emits the canonical st-checkbox class chain', () => {
    render(<Checkbox aria-label="cb" />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toHaveClass('st-checkbox', 'st-checkbox--md')
  })

  it('wraps the checkbox in .st-checkbox-wrapper', () => {
    const { container } = render(<Checkbox aria-label="cb" />)
    expect(container.firstChild).toHaveClass('st-checkbox-wrapper')
  })

  it('renders label and associates it via htmlFor', () => {
    render(<Checkbox label="Subscribe" />)
    const checkbox = screen.getByRole('checkbox')
    const label = screen.getByText('Subscribe')
    expect(label).toHaveAttribute('for', checkbox.id)
    expect(label).toHaveClass('st-checkbox-wrapper__label')
  })

  describe('sizes', () => {
    it('applies size modifier classes', () => {
      const { rerender } = render(<Checkbox aria-label="cb" size="sm" />)
      expect(screen.getByRole('checkbox')).toHaveClass('st-checkbox--sm')

      rerender(<Checkbox aria-label="cb" size="lg" />)
      expect(screen.getByRole('checkbox')).toHaveClass('st-checkbox--lg')
    })

    it('defaults to md size', () => {
      render(<Checkbox aria-label="cb" />)
      expect(screen.getByRole('checkbox')).toHaveClass('st-checkbox--md')
    })
  })

  describe('error state', () => {
    it('sets aria-invalid when isError is true (border + bg shift driven by CSS)', () => {
      render(<Checkbox aria-label="cb" isError />)
      const checkbox = screen.getByRole('checkbox')
      // Visual treatment lives in the .st-checkbox[aria-invalid="true"]
      // CSS rule — the test pins the attribute that triggers it.
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

  describe('indicator visibility', () => {
    it('renders the indicator as a child of .st-checkbox (CSS hides when unchecked)', () => {
      render(<Checkbox aria-label="cb" defaultChecked />)
      const checkbox = screen.getByRole('checkbox')
      const indicator = checkbox.querySelector('.st-checkbox__indicator')
      // Indicator is forceMount-rendered. The unchecked-state hiding is
      // driven by CSS (.st-checkbox[data-state="unchecked"] .st-checkbox__indicator
      // { display: none }), so the element is present in either state.
      expect(indicator).toBeInTheDocument()
    })

    it('JSX no longer carries data-[state=unchecked]:hidden utility', () => {
      render(<Checkbox aria-label="cb" />)
      const checkbox = screen.getByRole('checkbox')
      const indicator = checkbox.querySelector('.st-checkbox__indicator')
      expect(indicator?.className).not.toContain('data-[state=unchecked]:hidden')
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

    it('takes its accessible name from the Field label when it has no own label', () => {
      render(
        <Field label="Terms">
          <Checkbox />
        </Field>,
      )
      expect(screen.getByRole('checkbox', { name: 'Terms' })).toBeInTheDocument()
    })

    it('prefers its own label over the Field label for naming', () => {
      render(
        <Field label="Terms">
          <Checkbox label="Accept" />
        </Field>,
      )
      const checkbox = screen.getByRole('checkbox', { name: 'Accept' })
      expect(checkbox).not.toHaveAttribute('aria-labelledby')
    })

    it('prefers an explicit aria-label over the Field label', () => {
      render(
        <Field label="Terms">
          <Checkbox aria-label="Custom name" />
        </Field>,
      )
      expect(screen.getByRole('checkbox', { name: 'Custom name' })).toBeInTheDocument()
    })

    it('prop isError overrides false Field context when used standalone', () => {
      render(<Checkbox aria-label="cb" isError />)
      expect(screen.getByRole('checkbox')).toHaveAttribute('aria-invalid', 'true')
    })

    it('inherits required (aria-required) from Field', () => {
      render(
        <Field label="Terms" required>
          <Checkbox aria-label="cb" />
        </Field>,
      )
      expect(screen.getByRole('checkbox')).toHaveAttribute('aria-required', 'true')
    })

    it('does not clobber a direct required prop when Field is not required', () => {
      // Regression guard: Field.required is false here, so we must inject
      // nothing — emitting aria-required={undefined} would override the value
      // Radix sets on the button from the `required` prop (PR #428).
      render(
        <Field label="Terms">
          <Checkbox aria-label="cb" required />
        </Field>,
      )
      expect(screen.getByRole('checkbox')).toHaveAttribute('aria-required', 'true')
    })
  })

  describe('required', () => {
    it('reflects a direct required prop as aria-required (Radix)', () => {
      render(<Checkbox aria-label="cb" required />)
      expect(screen.getByRole('checkbox')).toHaveAttribute('aria-required', 'true')
    })

    it('does not set aria-required when neither Field nor required is set', () => {
      render(<Checkbox aria-label="cb" />)
      expect(screen.getByRole('checkbox')).not.toHaveAttribute('aria-required')
    })
  })

  it('forwards className to the wrapper element', () => {
    const { container } = render(<Checkbox aria-label="cb" className="custom-class" />)
    const wrapper = container.firstChild as HTMLElement
    expect(wrapper).toHaveClass('st-checkbox-wrapper', 'custom-class')
  })

  it('forwards ref to the checkbox control', () => {
    const ref = { current: null as HTMLButtonElement | null }
    render(<Checkbox aria-label="cb" ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })

  it('forwards data-testid to the checkbox control', () => {
    render(<Checkbox aria-label="cb" data-testid="accept" />)
    expect(screen.getByTestId('accept')).toBe(screen.getByRole('checkbox', { name: 'cb' }))
  })
})
