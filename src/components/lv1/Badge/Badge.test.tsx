import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Badge } from './Badge'

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>New</Badge>)
    expect(screen.getByText('New')).toBeInTheDocument()
  })

  it('forwards className to the root element', () => {
    const { container } = render(<Badge className="custom-class">Tag</Badge>)
    const root = container.firstChild as HTMLElement
    expect(root).toHaveClass('custom-class')
  })

  it('forwards data-* and other HTML attributes', () => {
    const { container } = render(
      <Badge data-testid="my-badge" role="status">
        Tag
      </Badge>,
    )
    const root = container.firstChild as HTMLElement
    expect(root.getAttribute('data-testid')).toBe('my-badge')
    expect(root.getAttribute('role')).toBe('status')
  })

  describe('variants × appearance', () => {
    it('applies subtle appearance classes for error variant', () => {
      const { container } = render(
        <Badge variant="error" appearance="subtle">
          Error
        </Badge>,
      )
      const root = container.firstChild as HTMLElement
      expect(root.className).toContain('bg-error-subtle')
      expect(root.className).toContain('text-error')
      expect(root.className).toContain('border-error')
    })

    it('applies solid appearance classes for success variant', () => {
      const { container } = render(
        <Badge variant="success" appearance="solid">
          Saved
        </Badge>,
      )
      const root = container.firstChild as HTMLElement
      expect(root.className).toContain('bg-success')
      expect(root.className).toContain('text-success-foreground')
      expect(root.className).toContain('border-transparent')
    })

    it('applies outline appearance classes for info variant', () => {
      const { container } = render(
        <Badge variant="info" appearance="outline">
          Info
        </Badge>,
      )
      const root = container.firstChild as HTMLElement
      expect(root.className).toContain('text-info')
      expect(root.className).toContain('border-info')
    })

    it('applies neutral variant + subtle appearance by default', () => {
      const { container } = render(<Badge>Default</Badge>)
      const root = container.firstChild as HTMLElement
      expect(root.className).toContain('bg-surface-hover')
      expect(root.className).toContain('border-border-strong')
    })

    it('applies muted fill when neutral + solid is passed', () => {
      const { container } = render(
        <Badge variant="neutral" appearance="solid">
          Muted
        </Badge>,
      )
      const root = container.firstChild as HTMLElement
      // neutral + solid is the only "non-state filled chip" — uses
      // `--color-foreground-muted` (mode-aware mid-tone gray) with
      // inverted-foreground text.
      expect(root.className).toContain('bg-foreground-muted')
      expect(root.className).toContain('text-inverted-foreground')
    })
  })

  describe('sizes', () => {
    it('applies size classes', () => {
      const { container, rerender } = render(<Badge size="sm">Small</Badge>)
      const getRoot = () => container.firstChild as HTMLElement
      expect(getRoot().className).toContain('text-[10px]')

      rerender(<Badge size="lg">Large</Badge>)
      expect(getRoot().className).toContain('text-sm')
    })
  })

  describe('icon', () => {
    it('renders icon at start position by default', () => {
      const { container } = render(<Badge icon="Check">Done</Badge>)
      const root = container.firstChild as HTMLElement
      const svg = root.querySelector('svg')
      expect(svg).toBeInTheDocument()
      expect(svg?.getAttribute('aria-hidden')).toBe('true')
      expect(root.firstChild).toBe(svg)
    })

    it('renders icon at end position when iconPosition="end"', () => {
      const { container } = render(
        <Badge icon="ArrowRight" iconPosition="end">
          Next
        </Badge>,
      )
      const root = container.firstChild as HTMLElement
      const svg = root.querySelector('svg')
      expect(svg).toBeInTheDocument()
      expect(root.lastChild).toBe(svg)
    })

    it('renders without icon when icon prop is not provided', () => {
      const { container } = render(<Badge>No icon</Badge>)
      const root = container.firstChild as HTMLElement
      expect(root.querySelector('svg')).not.toBeInTheDocument()
    })

    it('applies icon-only square layout when icon is set without children', () => {
      const { container } = render(<Badge icon="Check" aria-label="Done" />)
      const root = container.firstChild as HTMLElement
      expect(root.className).toContain('aspect-square')
      expect(root.className).toContain('p-1')
      expect(root.querySelector('svg')).toBeInTheDocument()
    })

    it('does not apply icon-only layout when both icon and children are present', () => {
      const { container } = render(<Badge icon="Check">Done</Badge>)
      const root = container.firstChild as HTMLElement
      expect(root.className).not.toContain('aspect-square')
    })
  })

  it('forwards ref to the root div', () => {
    const ref = { current: null as HTMLDivElement | null }
    render(<Badge ref={ref}>Tag</Badge>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})
