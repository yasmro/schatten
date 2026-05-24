import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useFieldContext } from '../../../contexts/field'
import { useFieldSetContext } from '../../../contexts/fieldset'
import { Field } from '../Field/Field'
import { Input } from '../Input/Input'
import { FieldSet } from './FieldSet'

// Test component to verify FieldSetContext values
function FieldSetContextConsumer() {
  const context = useFieldSetContext()
  return (
    <div data-testid="fieldset-context-consumer">
      <span data-testid="fieldset-context-isError">{String(context?.isError ?? 'null')}</span>
    </div>
  )
}

// Test component to verify FieldContext values within FieldSet
function FieldContextConsumer() {
  const context = useFieldContext()
  return (
    <div data-testid="field-context-consumer">
      <span data-testid="field-context-isError">{String(context?.isError)}</span>
      <span data-testid="field-context-disabled">{String(context?.disabled)}</span>
    </div>
  )
}

describe('FieldSet', () => {
  it('renders legend and children', () => {
    render(
      <FieldSet legend="Personal Info">
        <input data-testid="input" />
      </FieldSet>,
    )
    expect(screen.getByText('Personal Info')).toBeInTheDocument()
    expect(screen.getByTestId('input')).toBeInTheDocument()
  })

  it('renders description when provided', () => {
    render(
      <FieldSet legend="Personal Info" description="Enter your details">
        <input />
      </FieldSet>,
    )
    expect(screen.getByText('Enter your details')).toBeInTheDocument()
  })

  it('renders error message when provided', () => {
    render(
      <FieldSet legend="Date Range" error="Invalid date range">
        <input />
      </FieldSet>,
    )
    expect(screen.getByText('Invalid date range')).toBeInTheDocument()
  })

  describe('FieldSetContext', () => {
    it('provides isError=true when error prop is set', () => {
      render(
        <FieldSet legend="Test" error="Error message">
          <FieldSetContextConsumer />
        </FieldSet>,
      )
      expect(screen.getByTestId('fieldset-context-isError').textContent).toBe('true')
    })

    it('provides isError=false when no error', () => {
      render(
        <FieldSet legend="Test">
          <FieldSetContextConsumer />
        </FieldSet>,
      )
      expect(screen.getByTestId('fieldset-context-isError').textContent).toBe('false')
    })

    it('provides isError from isError prop even without error message', () => {
      render(
        <FieldSet legend="Test" isError>
          <FieldSetContextConsumer />
        </FieldSet>,
      )
      expect(screen.getByTestId('fieldset-context-isError').textContent).toBe('true')
    })

    it('returns null when used outside of FieldSet', () => {
      render(<FieldSetContextConsumer />)
      expect(screen.getByTestId('fieldset-context-isError').textContent).toBe('null')
    })
  })

  describe('disabled state', () => {
    it('sets disabled attribute on fieldset element', () => {
      const { container } = render(
        <FieldSet legend="Test" disabled>
          <input data-testid="input" />
        </FieldSet>,
      )
      const fieldset = container.querySelector('fieldset')
      expect(fieldset).toHaveAttribute('disabled')
    })

    it('sets data-disabled attribute when disabled', () => {
      const { container } = render(
        <FieldSet legend="Test" disabled>
          <input />
        </FieldSet>,
      )
      const fieldset = container.querySelector('fieldset')
      expect(fieldset).toHaveAttribute('data-disabled', 'true')
    })

    it('does not set disabled attribute by default', () => {
      const { container } = render(
        <FieldSet legend="Test">
          <input />
        </FieldSet>,
      )
      const fieldset = container.querySelector('fieldset')
      expect(fieldset).not.toHaveAttribute('disabled')
    })
  })

  describe('Field integration', () => {
    it('Field receives isError from FieldSet context', () => {
      render(
        <FieldSet legend="Test" isError>
          <Field label="Name">
            <FieldContextConsumer />
          </Field>
        </FieldSet>,
      )
      expect(screen.getByTestId('field-context-isError').textContent).toBe('true')
    })

    it('Field isError prop takes precedence over FieldSet context', () => {
      render(
        <FieldSet legend="Test" isError>
          <Field label="Name" isError={false}>
            <FieldContextConsumer />
          </Field>
        </FieldSet>,
      )
      expect(screen.getByTestId('field-context-isError').textContent).toBe('false')
    })

    it('Field error prop takes precedence over FieldSet context', () => {
      render(
        <FieldSet legend="Test" isError={false}>
          <Field label="Name" error="Field error">
            <FieldContextConsumer />
          </Field>
        </FieldSet>,
      )
      expect(screen.getByTestId('field-context-isError').textContent).toBe('true')
    })
  })

  describe('accessibility', () => {
    it('uses semantic fieldset and legend elements', () => {
      const { container } = render(
        <FieldSet legend="Personal Info">
          <input />
        </FieldSet>,
      )
      expect(container.querySelector('fieldset')).toBeInTheDocument()
      expect(container.querySelector('legend')).toBeInTheDocument()
    })

    it('sets aria-describedby with description id when description is set', () => {
      const { container } = render(
        <FieldSet legend="Test" description="Help text">
          <input />
        </FieldSet>,
      )
      const fieldset = container.querySelector('fieldset')
      const describedBy = fieldset?.getAttribute('aria-describedby')
      expect(describedBy).toContain('-description')
    })

    it('sets aria-describedby with error id when error is set', () => {
      const { container } = render(
        <FieldSet legend="Test" error="Error text">
          <input />
        </FieldSet>,
      )
      const fieldset = container.querySelector('fieldset')
      const describedBy = fieldset?.getAttribute('aria-describedby')
      expect(describedBy).toContain('-error')
    })

    it('sets aria-describedby with both ids when both are set', () => {
      const { container } = render(
        <FieldSet legend="Test" description="Help" error="Error">
          <input />
        </FieldSet>,
      )
      const fieldset = container.querySelector('fieldset')
      const describedBy = fieldset?.getAttribute('aria-describedby')
      expect(describedBy).toContain('-description')
      expect(describedBy).toContain('-error')
    })

    it('does not set aria-describedby when neither description nor error is set', () => {
      const { container } = render(
        <FieldSet legend="Test">
          <input />
        </FieldSet>,
      )
      const fieldset = container.querySelector('fieldset')
      expect(fieldset).not.toHaveAttribute('aria-describedby')
    })

    it('sets data-error attribute when isError is true', () => {
      const { container } = render(
        <FieldSet legend="Test" isError>
          <input />
        </FieldSet>,
      )
      const fieldset = container.querySelector('fieldset')
      expect(fieldset).toHaveAttribute('data-error', 'true')
    })

    it('sets aria-invalid when isError is true', () => {
      const { container } = render(
        <FieldSet legend="Test" isError>
          <input />
        </FieldSet>,
      )
      const fieldset = container.querySelector('fieldset')
      expect(fieldset).toHaveAttribute('aria-invalid', 'true')
    })

    it('does not set aria-invalid when isError is false', () => {
      const { container } = render(
        <FieldSet legend="Test">
          <input />
        </FieldSet>,
      )
      const fieldset = container.querySelector('fieldset')
      expect(fieldset).not.toHaveAttribute('aria-invalid')
    })

    it('legend is direct first child of fieldset (HTML spec compliance)', () => {
      const { container } = render(
        <FieldSet legend="Test" description="Description">
          <input />
        </FieldSet>,
      )
      const fieldset = container.querySelector('fieldset')
      const firstChild = fieldset?.firstElementChild
      expect(firstChild?.tagName.toLowerCase()).toBe('legend')
    })
  })

  describe('standalone Field', () => {
    it('Field works without FieldSet', () => {
      render(
        <Field label="Email">
          <FieldContextConsumer />
        </Field>,
      )
      expect(screen.getByTestId('field-context-isError').textContent).toBe('false')
      expect(screen.getByTestId('field-context-disabled').textContent).toBe('false')
    })

    it('standalone Field with error has isError=true', () => {
      render(
        <Field label="Email" error="Invalid email">
          <FieldContextConsumer />
        </Field>,
      )
      expect(screen.getByTestId('field-context-isError').textContent).toBe('true')
    })
  })

  describe('nested FieldSet', () => {
    it('inner FieldSet creates its own context', () => {
      render(
        <FieldSet legend="Outer" isError>
          <FieldSet legend="Inner">
            <FieldSetContextConsumer />
          </FieldSet>
        </FieldSet>,
      )
      // Inner FieldSet has its own context with isError=false
      expect(screen.getByTestId('fieldset-context-isError').textContent).toBe('false')
    })

    it('inner FieldSet can override parent isError', () => {
      render(
        <FieldSet legend="Outer" isError={false}>
          <FieldSet legend="Inner" isError>
            <FieldSetContextConsumer />
          </FieldSet>
        </FieldSet>,
      )
      expect(screen.getByTestId('fieldset-context-isError').textContent).toBe('true')
    })
  })

  describe('Input integration', () => {
    it('Input receives isError through FieldSet → Field chain', () => {
      render(
        <FieldSet legend="Test" isError>
          <Field label="Name">
            <Input data-testid="input" />
          </Field>
        </FieldSet>,
      )
      const input = screen.getByTestId('input')
      // Input wrapper should have error styles (aria-invalid is on the input element)
      expect(input).toHaveAttribute('aria-invalid', 'true')
    })

    it('Field isError prop overrides FieldSet context for Input', () => {
      render(
        <FieldSet legend="Test" isError>
          <Field label="Name" isError={false}>
            <Input data-testid="input" />
          </Field>
        </FieldSet>,
      )
      const input = screen.getByTestId('input')
      // Field's isError=false overrides FieldSet's isError=true
      expect(input).not.toHaveAttribute('aria-invalid')
    })
  })

  describe('className', () => {
    it('applies className to fieldset element', () => {
      const { container } = render(
        <FieldSet legend="Test" className="custom-class">
          <input />
        </FieldSet>,
      )
      const fieldset = container.querySelector('fieldset')
      expect(fieldset).toHaveClass('custom-class')
    })
  })

  describe('description and error', () => {
    it('shows both description and error when both are provided', () => {
      render(
        <FieldSet legend="Test" description="Help text" error="Error text">
          <input />
        </FieldSet>,
      )
      expect(screen.getByText('Help text')).toBeInTheDocument()
      expect(screen.getByText('Error text')).toBeInTheDocument()
    })
  })

  describe('layout props', () => {
    it('applies --row modifier on __children when direction is row', () => {
      const { container } = render(
        <FieldSet legend="Test" direction="row">
          <input />
        </FieldSet>,
      )
      const childrenWrapper = container.querySelector('.st-fieldset__children')
      expect(childrenWrapper).toHaveClass('st-fieldset__children--row')
    })

    it('does NOT emit a direction modifier when direction is column (default)', () => {
      const { container } = render(
        <FieldSet legend="Test">
          <input />
        </FieldSet>,
      )
      const childrenWrapper = container.querySelector('.st-fieldset__children')
      expect(childrenWrapper).not.toHaveClass('st-fieldset__children--row')
    })

    it('applies --wrap modifier on __children when wrap is true', () => {
      const { container } = render(
        <FieldSet legend="Test" wrap>
          <input />
        </FieldSet>,
      )
      const childrenWrapper = container.querySelector('.st-fieldset__children')
      expect(childrenWrapper).toHaveClass('st-fieldset__children--wrap')
    })

    it('does not apply --wrap by default', () => {
      const { container } = render(
        <FieldSet legend="Test">
          <input />
        </FieldSet>,
      )
      const childrenWrapper = container.querySelector('.st-fieldset__children')
      expect(childrenWrapper).not.toHaveClass('st-fieldset__children--wrap')
    })

    it('combines direction and wrap modifiers', () => {
      const { container } = render(
        <FieldSet legend="Test" direction="row" wrap>
          <input />
        </FieldSet>,
      )
      const childrenWrapper = container.querySelector('.st-fieldset__children')
      expect(childrenWrapper).toHaveClass('st-fieldset__children--row')
      expect(childrenWrapper).toHaveClass('st-fieldset__children--wrap')
    })
  })

  describe('optional legend', () => {
    it('renders without legend when not provided', () => {
      const { container } = render(
        <FieldSet>
          <input data-testid="input" />
        </FieldSet>,
      )
      expect(container.querySelector('legend')).not.toBeInTheDocument()
      expect(screen.getByTestId('input')).toBeInTheDocument()
    })

    // NB: header-spacing (`margin-top: 1rem` on __children when legend or
    // description is present) is structural CSS — :has(> .st-fieldset__legend)
    // / :has(> .st-fieldset__description) in FieldSet.css. JSDOM doesn't lay
    // out CSS so we can't observe the computed margin here; the structural
    // contract (legend / description / children are direct children of root)
    // is pinned by the `class API` block below, and the visual outcome is
    // pinned by VRT.
  })

  describe('class API', () => {
    it('emits .st-fieldset on the root <fieldset>', () => {
      const { container } = render(
        <FieldSet legend="x">
          <input />
        </FieldSet>,
      )
      expect(container.querySelector('fieldset')).toHaveClass('st-fieldset')
    })

    it('emits .st-fieldset__legend / __description / __children / __error', () => {
      const { container } = render(
        <FieldSet legend="L" description="D" error="E">
          <input />
        </FieldSet>,
      )
      expect(container.querySelector('.st-fieldset__legend')).toBeInTheDocument()
      expect(container.querySelector('.st-fieldset__description')).toBeInTheDocument()
      expect(container.querySelector('.st-fieldset__children')).toBeInTheDocument()
      expect(container.querySelector('.st-fieldset__error')).toBeInTheDocument()
    })

    it('places legend / description / children / error as direct children of the root fieldset', () => {
      // Pins the `:has(> .st-fieldset__legend)` and
      // `:has(> .st-fieldset__description)` selectors in FieldSet.css —
      // a future wrapper insertion would break the structural margin-top
      // rule, which this test catches.
      const { container } = render(
        <FieldSet legend="L" description="D" error="E">
          <input />
        </FieldSet>,
      )
      const fs = container.querySelector('fieldset')
      if (!fs) throw new Error('fieldset not rendered')
      expect(fs.querySelector(':scope > .st-fieldset__legend')).toBeInTheDocument()
      expect(fs.querySelector(':scope > .st-fieldset__description')).toBeInTheDocument()
      expect(fs.querySelector(':scope > .st-fieldset__children')).toBeInTheDocument()
      expect(fs.querySelector(':scope > .st-fieldset__error')).toBeInTheDocument()
    })
  })

  describe('3-layer propagation (FieldSet → Field → input)', () => {
    it('propagates [data-error] from FieldSet root to Field root via context', () => {
      const { container } = render(
        <FieldSet legend="x" isError>
          <Field label="y">
            <Input data-testid="i" />
          </Field>
        </FieldSet>,
      )
      expect(container.querySelector('fieldset.st-fieldset')).toHaveAttribute('data-error', 'true')
      expect(container.querySelector('.st-field')).toHaveAttribute('data-error', 'true')
      expect(screen.getByTestId('i')).toHaveAttribute('aria-invalid', 'true')
    })

    it('propagates [data-disabled] through FieldSet → Field → input chain', () => {
      const { container } = render(
        <FieldSet legend="x" disabled>
          <Field label="y">
            <Input data-testid="i" />
          </Field>
        </FieldSet>,
      )
      expect(container.querySelector('fieldset.st-fieldset')).toHaveAttribute(
        'data-disabled',
        'true',
      )
      expect(container.querySelector('.st-field')).toHaveAttribute('data-disabled', 'true')
      // native fieldset disabled cascade reaches the input through React's
      // explicit `disabled` prop on the form control.
      expect(screen.getByTestId('i')).toBeDisabled()
    })
  })
})
