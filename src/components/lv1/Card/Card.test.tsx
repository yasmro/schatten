import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './Card'

const PARTS = [
  { name: 'Card', Comp: Card, cls: 'st-card' },
  { name: 'CardHeader', Comp: CardHeader, cls: 'st-card__header' },
  { name: 'CardTitle', Comp: CardTitle, cls: 'st-card__title' },
  { name: 'CardDescription', Comp: CardDescription, cls: 'st-card__description' },
  { name: 'CardContent', Comp: CardContent, cls: 'st-card__content' },
  { name: 'CardFooter', Comp: CardFooter, cls: 'st-card__footer' },
] as const

describe('Card', () => {
  describe.each(PARTS)('$name', ({ Comp, cls }) => {
    it('renders its block class and forwards className + children + data-testid', () => {
      render(
        <Comp className="custom" data-testid="el">
          content
        </Comp>,
      )
      const el = screen.getByTestId('el')
      expect(el).toHaveClass(cls, 'custom')
      expect(el).toHaveTextContent('content')
    })

    it('forwards ref to its DOM node', () => {
      const ref = createRef<HTMLDivElement>()
      render(<Comp ref={ref} data-testid="el" />)
      expect(ref.current).toBe(screen.getByTestId('el'))
    })
  })

  describe('composition', () => {
    it('renders header / content / footer as direct children of the root', () => {
      // The `:first-child` padding rule in Card.css depends on the header /
      // content / footer being direct children of `.st-card`, so this pins the
      // structure against a future wrapper being inserted.
      render(
        <Card data-testid="card">
          <CardHeader data-testid="header">
            <CardTitle>Title</CardTitle>
            <CardDescription>Description</CardDescription>
          </CardHeader>
          <CardContent data-testid="content">Body</CardContent>
          <CardFooter data-testid="footer">Actions</CardFooter>
        </Card>,
      )
      const card = screen.getByTestId('card')
      expect(card.children).toHaveLength(3)
      expect(screen.getByTestId('header').parentElement).toBe(card)
      expect(screen.getByTestId('content').parentElement).toBe(card)
      expect(screen.getByTestId('footer').parentElement).toBe(card)
    })
  })

  describe('accessibility', () => {
    it('is queryable as a labelled region when role + aria-labelledby are set', () => {
      render(
        <Card role="region" aria-labelledby="card-title">
          <CardHeader>
            <CardTitle id="card-title">Account settings</CardTitle>
          </CardHeader>
        </Card>,
      )
      expect(screen.getByRole('region', { name: 'Account settings' })).toBeInTheDocument()
    })

    it('exposes no implicit role by default', () => {
      render(<Card data-testid="card">content</Card>)
      // A bare Card is a generic container — it must not claim a landmark role.
      expect(screen.queryByRole('region')).not.toBeInTheDocument()
    })
  })
})
