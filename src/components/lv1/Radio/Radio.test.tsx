import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Field } from '../Field/Field'
import { Radio, RadioGroup } from './Radio'

describe('RadioGroup', () => {
  it('renders all child radios', () => {
    render(
      <RadioGroup>
        <Radio value="a" label="A" />
        <Radio value="b" label="B" />
        <Radio value="c" label="C" />
      </RadioGroup>,
    )
    expect(screen.getAllByRole('radio')).toHaveLength(3)
  })

  it('selects a single radio at a time (controlled)', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()
    render(
      <RadioGroup value="a" onValueChange={onValueChange}>
        <Radio value="a" label="A" />
        <Radio value="b" label="B" />
      </RadioGroup>,
    )
    const [a, b] = screen.getAllByRole('radio')
    expect(a).toHaveAttribute('data-state', 'checked')
    expect(b).toHaveAttribute('data-state', 'unchecked')

    await user.click(b)
    expect(onValueChange).toHaveBeenCalledWith('b')
  })

  it('respects defaultValue (uncontrolled)', () => {
    render(
      <RadioGroup defaultValue="b">
        <Radio value="a" label="A" />
        <Radio value="b" label="B" />
      </RadioGroup>,
    )
    const [a, b] = screen.getAllByRole('radio')
    expect(a).toHaveAttribute('data-state', 'unchecked')
    expect(b).toHaveAttribute('data-state', 'checked')
  })

  it('propagates disabled to all radios', () => {
    render(
      <RadioGroup disabled>
        <Radio value="a" label="A" />
        <Radio value="b" label="B" />
      </RadioGroup>,
    )
    for (const r of screen.getAllByRole('radio')) {
      expect(r).toBeDisabled()
    }
  })

  it('propagates isError to all radios', () => {
    render(
      <RadioGroup isError>
        <Radio value="a" label="A" />
        <Radio value="b" label="B" />
      </RadioGroup>,
    )
    for (const r of screen.getAllByRole('radio')) {
      expect(r).toHaveAttribute('aria-invalid', 'true')
      expect(r.className).toContain('border-error')
    }
  })

  it('propagates size to child radios', () => {
    render(
      <RadioGroup size="lg">
        <Radio value="a" label="A" />
      </RadioGroup>,
    )
    expect(screen.getByRole('radio')).toHaveClass('size-6')
  })

  it('sets aria-invalid on the group itself when isError', () => {
    const { container } = render(
      <RadioGroup isError>
        <Radio value="a" label="A" />
      </RadioGroup>,
    )
    const group = container.querySelector('[role="radiogroup"]')
    expect(group).toHaveAttribute('aria-invalid', 'true')
  })
})

describe('Radio', () => {
  it('renders label and associates it via htmlFor', () => {
    render(
      <RadioGroup>
        <Radio value="a" label="Option A" />
      </RadioGroup>,
    )
    const radio = screen.getByRole('radio')
    const label = screen.getByText('Option A')
    expect(label).toHaveAttribute('for', radio.id)
  })

  it('per-item size overrides group size', () => {
    render(
      <RadioGroup size="lg">
        <Radio value="a" label="A" size="sm" />
        <Radio value="b" label="B" />
      </RadioGroup>,
    )
    const [a, b] = screen.getAllByRole('radio')
    expect(a).toHaveClass('size-4')
    expect(b).toHaveClass('size-6')
  })

  it('per-item disabled does not affect siblings', () => {
    render(
      <RadioGroup>
        <Radio value="a" label="A" disabled />
        <Radio value="b" label="B" />
      </RadioGroup>,
    )
    const [a, b] = screen.getAllByRole('radio')
    expect(a).toBeDisabled()
    expect(b).not.toBeDisabled()
  })

  it('per-item isError overrides group when explicitly set', () => {
    render(
      <RadioGroup>
        <Radio value="a" label="A" isError />
        <Radio value="b" label="B" />
      </RadioGroup>,
    )
    const [a, b] = screen.getAllByRole('radio')
    expect(a).toHaveAttribute('aria-invalid', 'true')
    expect(b).not.toHaveAttribute('aria-invalid')
  })

  describe('Field context integration', () => {
    it('RadioGroup inherits isError from Field', () => {
      render(
        <Field label="Pick one" error="Required">
          <RadioGroup>
            <Radio value="a" label="A" />
          </RadioGroup>
        </Field>,
      )
      expect(screen.getByRole('radio')).toHaveAttribute('aria-invalid', 'true')
    })

    it('RadioGroup inherits disabled from Field', () => {
      render(
        <Field label="Pick one" disabled>
          <RadioGroup>
            <Radio value="a" label="A" />
          </RadioGroup>
        </Field>,
      )
      expect(screen.getByRole('radio')).toBeDisabled()
    })

    it('RadioGroup inherits aria-describedby from Field', () => {
      const { container } = render(
        <Field label="Pick one" description="Help text">
          <RadioGroup>
            <Radio value="a" label="A" />
          </RadioGroup>
        </Field>,
      )
      const group = container.querySelector('[role="radiogroup"]')
      expect(group?.getAttribute('aria-describedby')).toContain('-description')
    })
  })

  it('forwards className on wrapping div', () => {
    const { container } = render(
      <RadioGroup>
        <Radio value="a" label="A" className="custom-wrap" />
      </RadioGroup>,
    )
    expect(container.querySelector('.custom-wrap')).toBeInTheDocument()
  })
})
