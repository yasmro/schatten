import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('renders with different variants', () => {
    const { rerender } = render(<Button variant="secondary">Secondary</Button>)
    expect(screen.getByRole('button')).toHaveClass('border')

    rerender(<Button variant="tertiary">Tertiary</Button>)
    expect(screen.getByRole('button')).not.toHaveClass('border')
  })

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="sm">Small</Button>)
    expect(screen.getByRole('button')).toHaveClass('h-8')

    rerender(<Button size="lg">Large</Button>)
    expect(screen.getByRole('button')).toHaveClass('h-12')
  })

  it('can be disabled', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('renders as child component when asChild is true', () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>,
    )
    expect(screen.getByRole('link', { name: 'Link Button' })).toBeInTheDocument()
  })

  it('renders icon at start position by default', () => {
    render(<Button icon="Search">Search</Button>)
    const button = screen.getByRole('button')
    const contentSpan = button.querySelector(':scope > span:last-child') as HTMLElement
    const svg = contentSpan.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg?.getAttribute('aria-hidden')).toBe('true')
    expect(contentSpan.firstChild).toBe(svg)
  })

  it('renders icon at end position', () => {
    render(
      <Button icon="ArrowRight" iconPosition="end">
        Next
      </Button>,
    )
    const button = screen.getByRole('button')
    const contentSpan = button.querySelector(':scope > span:last-child') as HTMLElement
    const svg = contentSpan.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(contentSpan.lastChild).toBe(svg)
  })

  it('renders icon-only button with square aspect ratio', () => {
    render(<Button icon="Plus" aria-label="Add" />)
    const button = screen.getByRole('button', { name: 'Add' })
    const contentSpan = button.querySelector(':scope > span:last-child') as HTMLElement
    expect(contentSpan.querySelector('svg')).toBeInTheDocument()
    expect(button).toHaveClass('aspect-square')
    expect(button).toHaveClass('px-0')
  })

  it('renders without icon when icon prop is not provided', () => {
    render(<Button>No Icon</Button>)
    const button = screen.getByRole('button')
    const contentSpan = button.querySelector(':scope > span:last-child') as HTMLElement
    expect(contentSpan.querySelector('svg')).not.toBeInTheDocument()
  })

  describe('isLoading', () => {
    it('shows spinner when isLoading is true', () => {
      render(<Button isLoading>Submit</Button>)
      expect(screen.getByRole('status')).toBeInTheDocument()
    })

    it('disables button when isLoading is true', () => {
      render(<Button isLoading>Submit</Button>)
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('hides content when isLoading is true', () => {
      render(<Button isLoading>Submit</Button>)
      const button = screen.getByRole('button')
      const contentSpan = button.querySelector(':scope > span:last-child') as HTMLElement
      expect(contentSpan).toHaveClass('opacity-0')
    })

    it('shows spinner overlay with opacity-100 when loading', () => {
      render(<Button isLoading>Submit</Button>)
      const button = screen.getByRole('button')
      const spinnerSpan = button.querySelector(':scope > span:first-child') as HTMLElement
      expect(spinnerSpan).toHaveClass('opacity-100')
    })

    it('hides spinner when isLoading is false', () => {
      render(<Button>Submit</Button>)
      const button = screen.getByRole('button')
      const spinnerSpan = button.querySelector(':scope > span:first-child') as HTMLElement
      // Spinner overlay exists but is hidden with opacity-0
      expect(spinnerSpan).toHaveClass('opacity-0')
      expect(spinnerSpan).toHaveAttribute('aria-hidden', 'true')
    })

    it('sets aria-busy when isLoading is true', () => {
      render(<Button isLoading>Submit</Button>)
      // aria-busy is the hook the variant uses to restore the variant
      // colours during loading (instead of the disabled token treatment).
      expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true')
    })

    it('does not emit aria-busy when isLoading is false', () => {
      render(<Button>Submit</Button>)
      expect(screen.getByRole('button')).not.toHaveAttribute('aria-busy')
    })

    it('does not fire onClick while loading', async () => {
      const onClick = vi.fn()
      const user = userEvent.setup()
      render(
        <Button isLoading onClick={onClick}>
          Submit
        </Button>,
      )
      await user.click(screen.getByRole('button'))
      // Native `disabled` is still set (`disabled || isLoading`), so the
      // browser blocks click delivery. aria-busy is purely a styling hook
      // and does not bypass the disabled attribute.
      expect(onClick).not.toHaveBeenCalled()
    })
  })
})
