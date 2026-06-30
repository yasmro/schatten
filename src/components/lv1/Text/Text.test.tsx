import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Text } from './Text'

describe('Text', () => {
  it('renders children as text', () => {
    render(<Text>Hello</Text>)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('emits the canonical st-text class chain for default props', () => {
    render(<Text data-testid="t">Hello</Text>)
    expect(screen.getByTestId('t')).toHaveClass(
      'st-text',
      'st-text--body',
      'st-text--sans',
      'st-text--md',
      'st-text--default',
    )
  })

  describe('default element', () => {
    it('renders <p> for variant="body" by default', () => {
      const { container } = render(<Text>Body</Text>)
      expect(container.firstElementChild?.tagName.toLowerCase()).toBe('p')
    })

    it('renders <p> for variant="heading" by default (caller must pass `as`)', () => {
      const { container } = render(<Text variant="heading">Title</Text>)
      expect(container.firstElementChild?.tagName.toLowerCase()).toBe('p')
    })

    it('renders <label> for variant="label" by default', () => {
      const { container } = render(<Text variant="label">Field</Text>)
      expect(container.firstElementChild?.tagName.toLowerCase()).toBe('label')
    })
  })

  describe('as prop', () => {
    it.each(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p'] as const)(
      'renders an <%s> element when as="%s"',
      (tag) => {
        const { container } = render(
          <Text variant="heading" as={tag}>
            Heading
          </Text>,
        )
        expect(container.firstElementChild?.tagName.toLowerCase()).toBe(tag)
      },
    )
  })

  describe('color', () => {
    it('applies semantic color modifier classes', () => {
      const { container, rerender } = render(<Text color="error">x</Text>)
      const getEl = () => container.firstElementChild as HTMLElement
      expect(getEl()).toHaveClass('st-text--error')

      rerender(<Text color="success">x</Text>)
      expect(getEl()).toHaveClass('st-text--success')

      rerender(<Text color="muted">x</Text>)
      expect(getEl()).toHaveClass('st-text--muted')

      rerender(<Text color="inherit">x</Text>)
      expect(getEl()).toHaveClass('st-text--inherit')
    })

    it('applies brand color modifier classes', () => {
      const { container, rerender } = render(<Text color="vermillion">x</Text>)
      const getEl = () => container.firstElementChild as HTMLElement
      expect(getEl()).toHaveClass('st-text--vermillion')

      rerender(<Text color="indigo">x</Text>)
      expect(getEl()).toHaveClass('st-text--indigo')
    })
  })

  describe('family', () => {
    it('defaults to the sans modifier', () => {
      const { container } = render(<Text>x</Text>)
      expect(container.firstElementChild).toHaveClass('st-text--sans')
    })

    it('applies the serif modifier when family="serif"', () => {
      const { container } = render(<Text family="serif">x</Text>)
      const el = container.firstElementChild as HTMLElement
      expect(el).toHaveClass('st-text--serif')
      expect(el).not.toHaveClass('st-text--sans')
    })
  })

  describe('leading', () => {
    it('applies a leading override modifier', () => {
      const { container, rerender } = render(<Text leading="relaxed">x</Text>)
      const getEl = () => container.firstElementChild as HTMLElement
      expect(getEl()).toHaveClass('st-text--leading-relaxed')

      rerender(<Text leading="none">x</Text>)
      expect(getEl()).toHaveClass('st-text--leading-none')
    })

    it('emits no leading modifier by default', () => {
      const { container } = render(<Text>x</Text>)
      expect(container.firstElementChild?.className).not.toMatch(/st-text--leading-/)
    })

    it('composes orthogonally with variant, size, and family', () => {
      const { container } = render(
        <Text variant="heading" family="serif" size="lg" leading="relaxed" as="h2">
          x
        </Text>,
      )
      expect(container.firstElementChild).toHaveClass(
        'st-text--heading',
        'st-text--serif',
        'st-text--lg',
        'st-text--leading-relaxed',
      )
    })
  })

  describe('align', () => {
    it('applies alignment modifier classes', () => {
      const { container, rerender } = render(<Text align="center">x</Text>)
      const getEl = () => container.firstElementChild as HTMLElement
      expect(getEl()).toHaveClass('st-text--align-center')

      rerender(<Text align="right">x</Text>)
      expect(getEl()).toHaveClass('st-text--align-right')
    })
  })

  describe('truncate', () => {
    it('applies the truncate modifier when truncate is true', () => {
      const { container } = render(<Text truncate>long</Text>)
      expect(container.firstElementChild).toHaveClass('st-text--truncate')
    })

    it('does not apply the truncate modifier by default', () => {
      const { container } = render(<Text>short</Text>)
      expect(container.firstElementChild).not.toHaveClass('st-text--truncate')
    })
  })

  it('forwards className', () => {
    const { container } = render(<Text className="custom-class">x</Text>)
    expect(container.firstElementChild).toHaveClass('custom-class')
  })

  it('forwards arbitrary HTML attributes', () => {
    const { container } = render(
      <Text data-testid="t" id="my-id">
        x
      </Text>,
    )
    const el = container.firstElementChild as HTMLElement
    expect(el.getAttribute('data-testid')).toBe('t')
    expect(el.id).toBe('my-id')
  })
})
