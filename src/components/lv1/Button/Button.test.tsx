import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ArrowRight, Plus, Search } from 'lucide-react'
import { describe, expect, it, vi } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('emits the canonical st-btn class chain', () => {
    render(
      <Button variant="primary" size="md">
        Save
      </Button>,
    )
    expect(screen.getByRole('button')).toHaveClass('st-btn', 'st-btn--primary', 'st-btn--md')
  })

  it('renders with different variants', () => {
    const { rerender } = render(<Button variant="secondary">Secondary</Button>)
    expect(screen.getByRole('button')).toHaveClass('st-btn--secondary')

    rerender(<Button variant="tertiary">Tertiary</Button>)
    expect(screen.getByRole('button')).toHaveClass('st-btn--tertiary')
    expect(screen.getByRole('button')).not.toHaveClass('st-btn--secondary')
  })

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="sm">Small</Button>)
    expect(screen.getByRole('button')).toHaveClass('st-btn--sm')

    rerender(<Button size="lg">Large</Button>)
    expect(screen.getByRole('button')).toHaveClass('st-btn--lg')
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
    render(<Button icon={Search}>Search</Button>)
    const button = screen.getByRole('button')
    const contentSpan = button.querySelector('.st-btn__content') as HTMLElement
    const svg = contentSpan.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg?.getAttribute('aria-hidden')).toBe('true')
    expect(contentSpan.firstChild).toBe(svg)
  })

  it('renders icon at end position', () => {
    render(
      <Button icon={ArrowRight} iconPosition="end">
        Next
      </Button>,
    )
    const button = screen.getByRole('button')
    const contentSpan = button.querySelector('.st-btn__content') as HTMLElement
    const svg = contentSpan.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(contentSpan.lastChild).toBe(svg)
  })

  it('emits st-btn--icon-only when icon is present without children', () => {
    render(<Button icon={Plus} aria-label="Add" />)
    const button = screen.getByRole('button', { name: 'Add' })
    const contentSpan = button.querySelector('.st-btn__content') as HTMLElement
    expect(contentSpan.querySelector('svg')).toBeInTheDocument()
    expect(button).toHaveClass('st-btn--icon-only')
  })

  it('does not emit st-btn--icon-only when children are present', () => {
    render(<Button icon={Plus}>Add</Button>)
    expect(screen.getByRole('button')).not.toHaveClass('st-btn--icon-only')
  })

  it('renders without icon when icon prop is not provided', () => {
    render(<Button>No Icon</Button>)
    const button = screen.getByRole('button')
    const contentSpan = button.querySelector('.st-btn__content') as HTMLElement
    expect(contentSpan.querySelector('svg')).not.toBeInTheDocument()
  })

  describe('link variant', () => {
    it('emits the size modifier alongside --link (CSS resets non-font axes)', () => {
      render(
        <Button variant="link" size="lg">
          Docs
        </Button>,
      )
      // Verifies the sweep-3 contract: `--link` and `--lg` are both emitted;
      // the CSS rule for .st-btn--link.st-btn--lg only changes font-size.
      expect(screen.getByRole('button')).toHaveClass('st-btn', 'st-btn--link', 'st-btn--lg')
    })

    it('uses a flat DOM (no spinner overlay or content wrapper)', () => {
      render(<Button variant="link">Docs</Button>)
      const button = screen.getByRole('button')
      // Link variant intentionally skips .st-btn__spinner-overlay and
      // .st-btn__content — see Button.tsx early return.
      expect(button.querySelector('.st-btn__spinner-overlay')).toBeNull()
      expect(button.querySelector('.st-btn__content')).toBeNull()
    })

    it('renders icon inline as a direct child', () => {
      render(
        <Button variant="link" icon={ArrowRight} iconPosition="end">
          Next
        </Button>,
      )
      const button = screen.getByRole('button')
      // SVG is a direct child of the button itself (no content wrapper).
      const svg = button.querySelector(':scope > svg')
      expect(svg).toBeInTheDocument()
    })

    it('renders a single-child anchor when asChild is combined with link', () => {
      // Regression: the link branch wrapped children with icon-conditional
      // siblings, so `<Button asChild variant="link">` handed Slot >1 child
      // and threw `React.Children.only`. asChild is now resolved before the
      // link branch, so a single child reaches Slot.
      render(
        <Button asChild variant="link">
          <a href="/docs">Docs</a>
        </Button>,
      )
      const link = screen.getByRole('link', { name: 'Docs' })
      expect(link).toHaveClass('st-btn', 'st-btn--link')
    })
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

    it('keeps content wrapper but lets CSS fade it via [aria-busy]', () => {
      render(<Button isLoading>Submit</Button>)
      const button = screen.getByRole('button')
      const contentSpan = button.querySelector('.st-btn__content') as HTMLElement
      // Opacity is driven by .st-btn[aria-busy="true"] .st-btn__content in
      // Button.css — JSX no longer toggles opacity classes per-state.
      expect(contentSpan).toBeInTheDocument()
      expect(contentSpan.className).not.toContain('opacity-')
    })

    it('keeps spinner overlay span but lets CSS reveal it via [aria-busy]', () => {
      render(<Button>Submit</Button>)
      const button = screen.getByRole('button')
      const spinnerSpan = button.querySelector('.st-btn__spinner-overlay') as HTMLElement
      expect(spinnerSpan).toBeInTheDocument()
      expect(spinnerSpan.className).not.toContain('opacity-')
      expect(spinnerSpan).toHaveAttribute('aria-hidden', 'true')
    })

    it('removes aria-hidden from spinner overlay while loading', () => {
      render(<Button isLoading>Submit</Button>)
      const button = screen.getByRole('button')
      const spinnerSpan = button.querySelector('.st-btn__spinner-overlay') as HTMLElement
      // When loading, the spinner enters the a11y tree.
      expect(spinnerSpan).not.toHaveAttribute('aria-hidden', 'true')
    })

    it('sets aria-busy when isLoading is true', () => {
      render(<Button isLoading>Submit</Button>)
      // aria-busy is the styling hook that CSS uses to restore the variant
      // colours and switch the overlay's opacity.
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
