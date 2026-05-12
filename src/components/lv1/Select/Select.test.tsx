import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Field } from '../Field/Field'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './Select'

function BasicSelect(props: {
  defaultValue?: string
  value?: string
  onValueChange?: (v: string) => void
  isError?: boolean
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
}) {
  return (
    <Select
      defaultValue={props.defaultValue}
      value={props.value}
      onValueChange={props.onValueChange}
    >
      <SelectTrigger isError={props.isError} disabled={props.disabled} size={props.size}>
        <SelectValue placeholder="Pick a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="cherry" disabled>
          Cherry
        </SelectItem>
      </SelectContent>
    </Select>
  )
}

describe('Select', () => {
  it('renders trigger with placeholder when no value is selected', () => {
    render(<BasicSelect />)
    const trigger = screen.getByRole('combobox')
    expect(trigger).toBeInTheDocument()
    expect(trigger).toHaveTextContent('Pick a fruit')
  })

  it('shows the selected value text when defaultValue is set', () => {
    render(<BasicSelect defaultValue="apple" />)
    expect(screen.getByRole('combobox')).toHaveTextContent('Apple')
  })

  describe('sizes', () => {
    it('applies size classes to the trigger', () => {
      const { rerender } = render(<BasicSelect size="sm" />)
      expect(screen.getByRole('combobox')).toHaveClass('h-8')

      rerender(<BasicSelect size="lg" />)
      expect(screen.getByRole('combobox')).toHaveClass('h-12')
    })

    it('defaults to md size', () => {
      render(<BasicSelect />)
      expect(screen.getByRole('combobox')).toHaveClass('h-10')
    })
  })

  describe('error state', () => {
    it('applies error classes and aria-invalid when isError', () => {
      render(<BasicSelect isError />)
      const trigger = screen.getByRole('combobox')
      expect(trigger.className).toContain('border-error')
      expect(trigger).toHaveAttribute('aria-invalid', 'true')
    })

    it('does not set aria-invalid when isError is false', () => {
      render(<BasicSelect />)
      expect(screen.getByRole('combobox')).not.toHaveAttribute('aria-invalid')
    })
  })

  describe('disabled', () => {
    it('disables the trigger', () => {
      render(<BasicSelect disabled />)
      expect(screen.getByRole('combobox')).toBeDisabled()
    })
  })

  describe('open / close / select', () => {
    it('opens content on trigger click and shows items', async () => {
      const user = userEvent.setup()
      render(<BasicSelect />)
      await user.click(screen.getByRole('combobox'))
      // Radix renders items in a portal once open.
      expect(await screen.findByRole('option', { name: 'Apple' })).toBeInTheDocument()
      expect(screen.getByRole('option', { name: 'Banana' })).toBeInTheDocument()
    })

    it('selecting an item fires onValueChange', async () => {
      const onValueChange = vi.fn()
      const user = userEvent.setup()
      render(<BasicSelect onValueChange={onValueChange} />)
      await user.click(screen.getByRole('combobox'))
      const banana = await screen.findByRole('option', { name: 'Banana' })
      await user.click(banana)
      expect(onValueChange).toHaveBeenCalledWith('banana')
    })

    it('marks disabled items with data-disabled and skips them on selection', async () => {
      const onValueChange = vi.fn()
      const user = userEvent.setup()
      render(<BasicSelect onValueChange={onValueChange} />)
      await user.click(screen.getByRole('combobox'))
      const cherry = await screen.findByRole('option', { name: 'Cherry' })
      expect(cherry).toHaveAttribute('data-disabled')
      await user.click(cherry)
      // Radix swallows the click on disabled items.
      expect(onValueChange).not.toHaveBeenCalled()
    })
  })

  describe('Field context integration', () => {
    it('uses Field id on the trigger', () => {
      render(
        <Field label="Fruit">
          <BasicSelect />
        </Field>,
      )
      const trigger = screen.getByRole('combobox')
      const label = screen.getByText('Fruit')
      expect(label).toHaveAttribute('for', trigger.id)
    })

    it('inherits isError from Field', () => {
      render(
        <Field label="Fruit" error="Required">
          <BasicSelect />
        </Field>,
      )
      const trigger = screen.getByRole('combobox')
      expect(trigger.className).toContain('border-error')
      expect(trigger).toHaveAttribute('aria-invalid', 'true')
    })

    it('inherits disabled from Field', () => {
      render(
        <Field label="Fruit" disabled>
          <BasicSelect />
        </Field>,
      )
      expect(screen.getByRole('combobox')).toBeDisabled()
    })

    it('inherits aria-describedby from Field', () => {
      render(
        <Field label="Fruit" description="Help text">
          <BasicSelect />
        </Field>,
      )
      const describedBy = screen.getByRole('combobox').getAttribute('aria-describedby')
      expect(describedBy).toContain('-description')
    })
  })
})
