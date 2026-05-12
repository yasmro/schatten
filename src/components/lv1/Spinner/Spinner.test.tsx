import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('renders with role="status"', () => {
    render(<Spinner />)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('renders a visually-hidden default label "Loading"', () => {
    render(<Spinner />)
    const labelEl = screen.getByText('Loading')
    expect(labelEl).toBeInTheDocument()
    expect(labelEl).toHaveClass('sr-only')
  })

  it('renders a custom label', () => {
    render(<Spinner label="Fetching data" />)
    expect(screen.getByText('Fetching data')).toBeInTheDocument()
    expect(screen.queryByText('Loading')).not.toBeInTheDocument()
  })

  describe('type', () => {
    it('renders the default (spinning circle) SVG by default', () => {
      const { container } = render(<Spinner data-testid="s" />)
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
      expect(svg?.classList.contains('animate-spin')).toBe(true)
    })

    it('renders the ripple variant when type="ripple"', () => {
      const { container } = render(<Spinner type="ripple" />)
      // The ripple variant has dot + 2 concentric ripples; check for the
      // unique class names rather than counting SVG children, which can
      // change with future tweaks.
      expect(container.querySelector('.schatten-spinner-dot')).toBeInTheDocument()
      expect(container.querySelectorAll('.schatten-spinner-ripple')).toHaveLength(2)
    })
  })

  describe('sizes', () => {
    it('applies size classes', () => {
      const { rerender, container } = render(<Spinner size="sm" />)
      const getRoot = () => container.firstChild as HTMLElement
      expect(getRoot()).toHaveClass('size-4')

      rerender(<Spinner size="lg" />)
      expect(getRoot()).toHaveClass('size-8')
    })

    it('defaults to md size', () => {
      const { container } = render(<Spinner />)
      expect(container.firstChild as HTMLElement).toHaveClass('size-6')
    })
  })

  describe('variants', () => {
    it('uses text-foreground for default variant', () => {
      const { container } = render(<Spinner />)
      expect(container.firstChild as HTMLElement).toHaveClass('text-foreground')
    })

    it('uses text-inverted-foreground for inverted variant', () => {
      const { container } = render(<Spinner variant="inverted" />)
      expect(container.firstChild as HTMLElement).toHaveClass('text-inverted-foreground')
    })
  })

  it('marks the inner SVG as aria-hidden', () => {
    const { container } = render(<Spinner />)
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })

  it('forwards className', () => {
    const { container } = render(<Spinner className="custom-class" />)
    expect(container.firstChild as HTMLElement).toHaveClass('custom-class')
  })

  it('forwards arbitrary props like data-* to the root', () => {
    render(<Spinner data-testid="my-spinner" />)
    expect(screen.getByTestId('my-spinner')).toBeInTheDocument()
  })

  it('forwards ref to the root div', () => {
    const ref = { current: null as HTMLDivElement | null }
    render(<Spinner ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})
