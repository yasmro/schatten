import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './Card'

/**
 * Parity story — the React `<Card>` compound and a hand-written vanilla `<div>`
 * tree carrying the matching `.st-card*` class chain must render
 * pixel-identical. Backs the VRT in `Card.parity.vrt.spec.ts`.
 *
 * The React `<Card>` import pulls in `Card.css` as a side effect, so the
 * `.st-card*` rules are loaded for the vanilla half too.
 *
 * The footer here holds plain text rather than a `<Button>` so the comparison
 * stays scoped to Card's own surface — Button parity is proven separately.
 */
const meta: Meta<typeof Card> = {
  title: 'Components/lv1/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Parity: Story = {
  name: 'React vs Vanilla HTML',
  render: () => (
    <div className="grid grid-cols-2 gap-12">
      <div>
        <p className="mb-2 text-xs text-foreground-muted">React</p>
        <Card className="w-[280px]">
          <CardHeader>
            <CardTitle>Card title</CardTitle>
            <CardDescription>A short supporting description.</CardDescription>
          </CardHeader>
          <CardContent>Main content goes here.</CardContent>
          <CardFooter>Footer</CardFooter>
        </Card>
      </div>
      <div>
        <p className="mb-2 text-xs text-foreground-muted">Vanilla HTML</p>
        <div className="st-card st-card--filled w-[280px]">
          <div className="st-card__header">
            <div className="st-card__title">Card title</div>
            <div className="st-card__description">A short supporting description.</div>
          </div>
          <div className="st-card__content">Main content goes here.</div>
          <div className="st-card__footer">Footer</div>
        </div>
      </div>
    </div>
  ),
}
