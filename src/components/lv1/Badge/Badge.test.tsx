import { render, screen } from '@testing-library/react'
import { ArrowRight, Check } from 'lucide-react'
import { describe, expect, it } from 'vitest'
import { Badge } from './Badge'

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>New</Badge>)
    expect(screen.getByText('New')).toBeInTheDocument()
  })

  it('emits the canonical st-badge class chain for default props', () => {
    const { container } = render(<Badge>Tag</Badge>)
    expect(container.firstChild as HTMLElement).toHaveClass(
      'st-badge',
      'st-badge--neutral',
      'st-badge--subtle',
      'st-badge--md',
    )
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
    it('applies the subtle modifier for error variant', () => {
      const { container } = render(
        <Badge variant="error" appearance="subtle">
          Error
        </Badge>,
      )
      const root = container.firstChild as HTMLElement
      expect(root).toHaveClass('st-badge--error', 'st-badge--subtle')
    })

    it('applies the solid modifier for success variant', () => {
      const { container } = render(
        <Badge variant="success" appearance="solid">
          Saved
        </Badge>,
      )
      const root = container.firstChild as HTMLElement
      expect(root).toHaveClass('st-badge--success', 'st-badge--solid')
    })

    it('applies the outline modifier for info variant', () => {
      const { container } = render(
        <Badge variant="info" appearance="outline">
          Info
        </Badge>,
      )
      const root = container.firstChild as HTMLElement
      expect(root).toHaveClass('st-badge--info', 'st-badge--outline')
    })

    it('applies neutral variant + subtle appearance by default', () => {
      const { container } = render(<Badge>Default</Badge>)
      const root = container.firstChild as HTMLElement
      expect(root).toHaveClass('st-badge--neutral', 'st-badge--subtle')
    })

    it('emits both --neutral and --solid when variant=neutral + appearance=solid', () => {
      const { container } = render(
        <Badge variant="neutral" appearance="solid">
          Solid
        </Badge>,
      )
      const root = container.firstChild as HTMLElement
      // The double-class selector `.st-badge--neutral.st-badge--solid` reaches
      // the `--color-solid` token at render time — both modifiers must be
      // present for the rule to match.
      expect(root).toHaveClass('st-badge--neutral', 'st-badge--solid')
    })
  })

  describe('sizes', () => {
    it('applies size modifier classes', () => {
      const { container, rerender } = render(<Badge size="sm">Small</Badge>)
      const getRoot = () => container.firstChild as HTMLElement
      expect(getRoot()).toHaveClass('st-badge--sm')

      rerender(<Badge size="lg">Large</Badge>)
      expect(getRoot()).toHaveClass('st-badge--lg')
    })
  })

  describe('icon', () => {
    it('renders icon at start position by default', () => {
      const { container } = render(<Badge icon={Check}>Done</Badge>)
      const root = container.firstChild as HTMLElement
      const svg = root.querySelector('svg')
      expect(svg).toBeInTheDocument()
      expect(svg?.getAttribute('aria-hidden')).toBe('true')
      expect(root.firstChild).toBe(svg)
    })

    it('renders icon at end position when iconPosition="end"', () => {
      const { container } = render(
        <Badge icon={ArrowRight} iconPosition="end">
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

    it('applies --icon-only modifier when icon is set without children', () => {
      const { container } = render(<Badge icon={Check} aria-label="Done" />)
      const root = container.firstChild as HTMLElement
      expect(root).toHaveClass('st-badge--icon-only')
      expect(root.querySelector('svg')).toBeInTheDocument()
    })

    it('does not apply --icon-only when both icon and children are present', () => {
      const { container } = render(<Badge icon={Check}>Done</Badge>)
      const root = container.firstChild as HTMLElement
      expect(root).not.toHaveClass('st-badge--icon-only')
    })

    it('exposes role="img" so an icon-only badge has a queryable accessible name', () => {
      render(<Badge icon={Check} aria-label="Done" />)
      expect(screen.getByRole('img', { name: 'Done' })).toBeInTheDocument()
    })

    it('respects a consumer-supplied role over the auto role="img"', () => {
      render(<Badge icon={Check} role="status" aria-label="Saved" />)
      expect(screen.getByRole('status', { name: 'Saved' })).toBeInTheDocument()
      expect(screen.queryByRole('img')).not.toBeInTheDocument()
    })

    it('does not set a role when the badge has children', () => {
      const { container } = render(<Badge icon={Check}>Done</Badge>)
      const root = container.firstChild as HTMLElement
      expect(root).not.toHaveAttribute('role')
    })
  })

  it('forwards ref to the root div', () => {
    const ref = { current: null as HTMLDivElement | null }
    render(<Badge ref={ref}>Tag</Badge>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})
