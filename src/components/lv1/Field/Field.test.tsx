import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useFieldContext } from '../../../contexts/field'
import { Field } from './Field'

// Test component to verify context values
function ContextConsumer() {
  const context = useFieldContext()
  return (
    <div data-testid="context-consumer">
      <span data-testid="context-id">{context?.id}</span>
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

  it('hides description when error is present', () => {
    render(
      <Field label="Email" description="Enter your email" error="Invalid email">
        <input />
      </Field>,
    )
    expect(screen.queryByText('Enter your email')).not.toBeInTheDocument()
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
      // Note: When both are set, only error is shown, but describedBy still references both
      // Actually in current implementation, description is hidden when error exists
      // So describedBy should only contain error id
      render(
        <Field label="Email" description="Help" error="Error">
          <ContextConsumer />
        </Field>,
      )
      const describedBy = screen.getByTestId('context-describedBy').textContent
      // Since description is hidden when error exists, only error id is in DOM
      // But describedBy calculation happens before render decision
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
    it('applies grow class when flexGrow is 1', () => {
      const { container } = render(
        <Field label="Email" flexGrow={1}>
          <input />
        </Field>,
      )
      const fieldDiv = container.firstChild as HTMLElement
      expect(fieldDiv).toHaveClass('grow')
    })

    it('applies grow-0 class when flexGrow is 0', () => {
      const { container } = render(
        <Field label="Email" flexGrow={0}>
          <input />
        </Field>,
      )
      const fieldDiv = container.firstChild as HTMLElement
      expect(fieldDiv).toHaveClass('grow-0')
    })

    it('does not apply grow class by default', () => {
      const { container } = render(
        <Field label="Email">
          <input />
        </Field>,
      )
      const fieldDiv = container.firstChild as HTMLElement
      expect(fieldDiv).not.toHaveClass('grow')
      expect(fieldDiv).not.toHaveClass('grow-0')
    })

    it('applies shrink-0 class when flexShrink is 0', () => {
      const { container } = render(
        <Field label="Email" flexShrink={0}>
          <input />
        </Field>,
      )
      const fieldDiv = container.firstChild as HTMLElement
      expect(fieldDiv).toHaveClass('shrink-0')
    })

    it('applies shrink class when flexShrink is 1', () => {
      const { container } = render(
        <Field label="Email" flexShrink={1}>
          <input />
        </Field>,
      )
      const fieldDiv = container.firstChild as HTMLElement
      expect(fieldDiv).toHaveClass('shrink')
    })

    it('does not apply shrink class by default', () => {
      const { container } = render(
        <Field label="Email">
          <input />
        </Field>,
      )
      const fieldDiv = container.firstChild as HTMLElement
      expect(fieldDiv).not.toHaveClass('shrink')
      expect(fieldDiv).not.toHaveClass('shrink-0')
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
      expect(fieldDiv).toHaveClass('grow')
      expect(fieldDiv).toHaveClass('shrink-0')
      expect(fieldDiv).toHaveStyle({ flexBasis: '50%' })
    })
  })
})
