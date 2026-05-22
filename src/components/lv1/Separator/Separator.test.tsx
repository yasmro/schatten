import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Separator } from './Separator'

describe('Separator', () => {
  it('renders horizontally by default', () => {
    render(<Separator data-testid="sep" />)
    const sep = screen.getByTestId('sep')
    expect(sep).toBeInTheDocument()
    expect(sep).toHaveAttribute('data-orientation', 'horizontal')
  })

  it('renders vertically when orientation="vertical"', () => {
    render(<Separator data-testid="sep" orientation="vertical" />)
    const sep = screen.getByTestId('sep')
    expect(sep).toHaveAttribute('data-orientation', 'vertical')
  })

  it('is decorative by default (aria-hidden, no role)', () => {
    render(<Separator data-testid="sep" />)
    const sep = screen.getByTestId('sep')
    expect(sep).toHaveAttribute('role', 'none')
    expect(screen.queryByRole('separator')).not.toBeInTheDocument()
  })

  it('exposes role="separator" when decorative={false}', () => {
    render(<Separator decorative={false} />)
    expect(screen.getByRole('separator')).toBeInTheDocument()
  })

  it('forwards aria-orientation when non-decorative and vertical', () => {
    render(<Separator decorative={false} orientation="vertical" />)
    expect(screen.getByRole('separator')).toHaveAttribute('aria-orientation', 'vertical')
  })

  it('applies custom className', () => {
    render(<Separator data-testid="sep" className="custom-class" />)
    expect(screen.getByTestId('sep')).toHaveClass('custom-class')
  })

  it('emits the canonical st-separator class chain (horizontal by default)', () => {
    render(<Separator data-testid="sep" />)
    expect(screen.getByTestId('sep')).toHaveClass('st-separator', 'st-separator--horizontal')
  })

  it('emits the st-separator--vertical modifier when orientation="vertical"', () => {
    render(<Separator data-testid="sep" orientation="vertical" />)
    expect(screen.getByTestId('sep')).toHaveClass('st-separator', 'st-separator--vertical')
    expect(screen.getByTestId('sep')).not.toHaveClass('st-separator--horizontal')
  })
})
