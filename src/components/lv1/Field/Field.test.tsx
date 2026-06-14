import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useFieldContext } from '../../../contexts/field'
import { TooltipProvider } from '../Tooltip/Tooltip'
import { Field } from './Field'

// Test component to verify context values
function ContextConsumer() {
  const context = useFieldContext()
  return (
    <div data-testid="context-consumer">
      <span data-testid="context-id">{context?.id}</span>
      <span data-testid="context-labelId">{context?.labelId ?? 'undefined'}</span>
      <span data-testid="context-isError">{String(context?.isError)}</span>
      <span data-testid="context-disabled">{String(context?.disabled)}</span>
      <span data-testid="context-describedBy">{context?.describedBy ?? 'undefined'}</span>
    </div>
  )
}

describe('Field', () => {
  it('renders label and children', () => {
    render(
      <Field label="Email">
        <input type="email" data-testid="input" />
      </Field>,
    )
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByTestId('input')).toBeInTheDocument()
  })

  it('renders description when provided', () => {
    render(
      <Field label="Email" description="Enter your email address">
        <input />
      </Field>,
    )
    expect(screen.getByText('Enter your email address')).toBeInTheDocument()
  })

  it('renders error message when provided', () => {
    render(
      <Field label="Email" error="Invalid email">
        <input />
      </Field>,
    )
    expect(screen.getByText('Invalid email')).toBeInTheDocument()
  })

  it('shows both description and error when both are present', () => {
    render(
      <Field label="Email" description="Enter your email" error="Invalid email">
        <input />
      </Field>,
    )
    expect(screen.getByText('Enter your email')).toBeInTheDocument()
    expect(screen.getByText('Invalid email')).toBeInTheDocument()
  })

  it('shows required indicator when required is true', () => {
    render(
      <Field label="Email" required>
        <input />
      </Field>,
    )
    expect(screen.getByText('*')).toBeInTheDocument()
  })

  describe('FieldContext', () => {
    it('provides id to children via context', () => {
      render(
        <Field label="Email">
          <ContextConsumer />
        </Field>,
      )
      const id = screen.getByTestId('context-id').textContent
      expect(id).toBeTruthy()
      expect(id?.length).toBeGreaterThan(0)
    })

    it('provides labelId pointing at the rendered label element', () => {
      render(
        <Field label="Email">
          <ContextConsumer />
        </Field>,
      )
      const labelId = screen.getByTestId('context-labelId').textContent
      expect(labelId).toContain('-label')
      expect(screen.getByText('Email')).toHaveAttribute('id', labelId)
    })

    it('provides labelId as undefined when no label is set', () => {
      render(
        <Field>
          <ContextConsumer />
        </Field>,
      )
      expect(screen.getByTestId('context-labelId').textContent).toBe('undefined')
    })

    it('provides isError=true when error prop is set', () => {
      render(
        <Field label="Email" error="Invalid">
          <ContextConsumer />
        </Field>,
      )
      expect(screen.getByTestId('context-isError').textContent).toBe('true')
    })

    it('provides isError=false when no error', () => {
      render(
        <Field label="Email">
          <ContextConsumer />
        </Field>,
      )
      expect(screen.getByTestId('context-isError').textContent).toBe('false')
    })

    it('provides isError from isError prop even without error message', () => {
      render(
        <Field label="Email" isError>
          <ContextConsumer />
        </Field>,
      )
      expect(screen.getByTestId('context-isError').textContent).toBe('true')
    })

    it('provides disabled=true when disabled prop is set', () => {
      render(
        <Field label="Email" disabled>
          <ContextConsumer />
        </Field>,
      )
      expect(screen.getByTestId('context-disabled').textContent).toBe('true')
    })

    it('provides disabled=false by default', () => {
      render(
        <Field label="Email">
          <ContextConsumer />
        </Field>,
      )
      expect(screen.getByTestId('context-disabled').textContent).toBe('false')
    })

    it('provides describedBy with description id when description is set', () => {
      render(
        <Field label="Email" description="Help text">
          <ContextConsumer />
        </Field>,
      )
      const describedBy = screen.getByTestId('context-describedBy').textContent
      expect(describedBy).toContain('-description')
    })

    it('provides describedBy with error id when error is set', () => {
      render(
        <Field label="Email" error="Error text">
          <ContextConsumer />
        </Field>,
      )
      const describedBy = screen.getByTestId('context-describedBy').textContent
      expect(describedBy).toContain('-error')
    })

    it('provides describedBy with both ids when both are set', () => {
      render(
        <Field label="Email" description="Help" error="Error">
          <ContextConsumer />
        </Field>,
      )
      const describedBy = screen.getByTestId('context-describedBy').textContent
      expect(describedBy).toContain('-description')
      expect(describedBy).toContain('-error')
    })
  })

  describe('accessibility', () => {
    it('associates label with input via htmlFor', () => {
      render(
        <Field label="Email">
          <ContextConsumer />
        </Field>,
      )
      const label = screen.getByText('Email')
      const id = screen.getByTestId('context-id').textContent
      expect(label).toHaveAttribute('for', id)
    })

    it('sets data-disabled attribute when disabled', () => {
      const { container } = render(
        <Field label="Email" disabled>
          <input />
        </Field>,
      )
      const fieldDiv = container.firstChild as HTMLElement
      expect(fieldDiv).toHaveAttribute('data-disabled', 'true')
    })
  })

  describe('flex layout props', () => {
    it('applies grow modifier when flexGrow is 1', () => {
      const { container } = render(
        <Field label="Email" flexGrow={1}>
          <input />
        </Field>,
      )
      const fieldDiv = container.firstChild as HTMLElement
      expect(fieldDiv).toHaveClass('st-field--grow')
    })

    it('applies grow-0 modifier when flexGrow is 0', () => {
      const { container } = render(
        <Field label="Email" flexGrow={0}>
          <input />
        </Field>,
      )
      const fieldDiv = container.firstChild as HTMLElement
      expect(fieldDiv).toHaveClass('st-field--grow-0')
    })

    it('does not apply grow modifier by default', () => {
      const { container } = render(
        <Field label="Email">
          <input />
        </Field>,
      )
      const fieldDiv = container.firstChild as HTMLElement
      expect(fieldDiv).not.toHaveClass('st-field--grow')
      expect(fieldDiv).not.toHaveClass('st-field--grow-0')
    })

    it('applies shrink-0 modifier when flexShrink is 0', () => {
      const { container } = render(
        <Field label="Email" flexShrink={0}>
          <input />
        </Field>,
      )
      const fieldDiv = container.firstChild as HTMLElement
      expect(fieldDiv).toHaveClass('st-field--shrink-0')
    })

    it('applies shrink modifier when flexShrink is 1', () => {
      const { container } = render(
        <Field label="Email" flexShrink={1}>
          <input />
        </Field>,
      )
      const fieldDiv = container.firstChild as HTMLElement
      expect(fieldDiv).toHaveClass('st-field--shrink')
    })

    it('does not apply shrink modifier by default', () => {
      const { container } = render(
        <Field label="Email">
          <input />
        </Field>,
      )
      const fieldDiv = container.firstChild as HTMLElement
      expect(fieldDiv).not.toHaveClass('st-field--shrink')
      expect(fieldDiv).not.toHaveClass('st-field--shrink-0')
    })

    it('applies flexBasis via inline style', () => {
      const { container } = render(
        <Field label="Email" flexBasis="200px">
          <input />
        </Field>,
      )
      const fieldDiv = container.firstChild as HTMLElement
      expect(fieldDiv).toHaveStyle({ flexBasis: '200px' })
    })

    it('does not apply flexBasis style by default', () => {
      const { container } = render(
        <Field label="Email">
          <input />
        </Field>,
      )
      const fieldDiv = container.firstChild as HTMLElement
      expect(fieldDiv.style.flexBasis).toBe('')
    })

    it('combines multiple flex props', () => {
      const { container } = render(
        <Field label="Email" flexGrow={1} flexShrink={0} flexBasis="50%">
          <input />
        </Field>,
      )
      const fieldDiv = container.firstChild as HTMLElement
      expect(fieldDiv).toHaveClass('st-field--grow')
      expect(fieldDiv).toHaveClass('st-field--shrink-0')
      expect(fieldDiv).toHaveStyle({ flexBasis: '50%' })
    })
  })

  describe('class API', () => {
    it('emits .st-field on the root', () => {
      const { container } = render(
        <Field label="Email">
          <input />
        </Field>,
      )
      expect(container.firstChild).toHaveClass('st-field')
    })

    it('emits .st-field__label-row / __label / __description / __error / __required-marker', () => {
      const { container } = render(
        <Field label="Email" description="Help" error="Bad" required>
          <input />
        </Field>,
      )
      expect(container.querySelector('.st-field__label-row')).toBeInTheDocument()
      expect(container.querySelector('.st-field__label')).toBeInTheDocument()
      expect(container.querySelector('.st-field__description')).toBeInTheDocument()
      expect(container.querySelector('.st-field__error')).toBeInTheDocument()
      const marker = container.querySelector('.st-field__required-marker')
      expect(marker).toHaveTextContent('*')
    })

    it('emits .st-field__info when tooltip is provided', () => {
      const { container } = render(
        <TooltipProvider>
          <Field label="Email" tooltip="more info">
            <input />
          </Field>
        </TooltipProvider>,
      )
      expect(container.querySelector('.st-field__info')).toBeInTheDocument()
    })

    it('does not emit .st-field__info when tooltip is absent', () => {
      const { container } = render(
        <Field label="Email">
          <input />
        </Field>,
      )
      expect(container.querySelector('.st-field__info')).not.toBeInTheDocument()
    })

    it('emits data-error on the root when isError is true', () => {
      const { container } = render(
        <Field label="Email" isError>
          <input />
        </Field>,
      )
      expect(container.firstChild).toHaveAttribute('data-error', 'true')
    })

    it('emits data-error when error message is set', () => {
      const { container } = render(
        <Field label="Email" error="Invalid">
          <input />
        </Field>,
      )
      expect(container.firstChild).toHaveAttribute('data-error', 'true')
    })

    it('does NOT emit data-error when isError is false', () => {
      const { container } = render(
        <Field label="Email">
          <input />
        </Field>,
      )
      expect(container.firstChild).not.toHaveAttribute('data-error')
    })
  })
})
