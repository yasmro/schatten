import { render, screen } from '@testing-library/react'
import { Check, Search } from 'lucide-react'
import { describe, expect, it } from 'vitest'
import { Icon } from './Icon'

describe('Icon', () => {
  it('renders the passed lucide icon as an svg', () => {
    const { container } = render(<Icon icon={Search} />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  describe('sizes', () => {
    it('applies size classes', () => {
      const { rerender, container } = render(<Icon icon={Search} size="sm" />)
      const getSvg = () => container.querySelector('svg') as SVGElement
      expect(getSvg()).toHaveClass('size-4')

      rerender(<Icon icon={Search} size="lg" />)
      expect(getSvg()).toHaveClass('size-6')
    })

    it('defaults to md size', () => {
      const { container } = render(<Icon icon={Search} />)
      expect(container.querySelector('svg')).toHaveClass('size-5')
    })
  })

  describe('color', () => {
    it('inherits currentColor by default (text-inherit, not a fixed color)', () => {
      const { container } = render(<Icon icon={Search} />)
      const svg = container.querySelector('svg') as SVGElement
      expect(svg).toHaveClass('text-inherit')
      expect(svg).not.toHaveClass('text-foreground')
    })

    it('applies the semantic color token when color is set', () => {
      const { rerender, container } = render(<Icon icon={Search} color="error" />)
      const getSvg = () => container.querySelector('svg') as SVGElement
      expect(getSvg()).toHaveClass('text-error')

      rerender(<Icon icon={Search} color="vermillion" />)
      expect(getSvg()).toHaveClass('text-vermillion')
    })
  })

  describe('accessibility', () => {
    it('is decorative by default — aria-hidden, no role', () => {
      const { container } = render(<Icon icon={Search} />)
      const svg = container.querySelector('svg') as SVGElement
      expect(svg).toHaveAttribute('aria-hidden', 'true')
      expect(svg).not.toHaveAttribute('role')
    })

    it('exposes role="img" with the accessible name when aria-label is set', () => {
      render(<Icon icon={Search} aria-label="Search" />)
      const svg = screen.getByRole('img', { name: 'Search' })
      expect(svg).toBeInTheDocument()
      expect(svg).not.toHaveAttribute('aria-hidden')
    })

    it('lets an explicit aria-hidden override the decorative default', () => {
      const { container } = render(<Icon icon={Search} aria-hidden={false} />)
      expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'false')
    })
  })

  it('forwards className alongside the size class', () => {
    const { container } = render(<Icon icon={Search} className="text-info" />)
    const svg = container.querySelector('svg') as SVGElement
    expect(svg).toHaveClass('size-5')
    expect(svg).toHaveClass('text-info')
  })

  it('forwards arbitrary props like data-* and strokeWidth to the svg', () => {
    render(<Icon icon={Check} data-testid="my-icon" strokeWidth={3} />)
    const svg = screen.getByTestId('my-icon')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('stroke-width', '3')
  })

  it('forwards ref to the underlying svg element', () => {
    const ref = { current: null as SVGSVGElement | null }
    render(<Icon icon={Search} ref={ref} />)
    expect(ref.current).toBeInstanceOf(SVGElement)
  })
})
