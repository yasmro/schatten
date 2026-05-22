import type { Meta, StoryObj } from '@storybook/react-vite'
import { Text } from './Text'

/**
 * Parity stories — React `<Text>` and a hand-written vanilla HTML element
 * with the same `.st-text` class chain must render pixel-identical. Backs
 * the VRT in `Text.parity.vrt.spec.ts`.
 */
const meta: Meta<typeof Text> = {
  title: 'Components/lv1/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Text>

export const Parity: Story = {
  name: 'React vs Vanilla HTML',
  render: () => (
    <div className="grid grid-cols-2 gap-12">
      <div className="space-y-3 w-64">
        <p className="text-xs mb-2 text-foreground-muted">React</p>
        <Text variant="heading" size="lg" as="h2">
          Heading lg
        </Text>
        <Text>Default body md.</Text>
        <Text color="muted">Muted body md.</Text>
        <Text color="error" size="sm">
          Error sm
        </Text>
        <Text variant="label" size="sm">
          Label sm
        </Text>
        <Text color="vermillion">Vermillion brand</Text>
        <Text align="right">Right-aligned</Text>
        <Text truncate>
          A very long line that should be truncated when it overflows the container width.
        </Text>
      </div>
      <div className="space-y-3 w-64">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>
        <h2 className="st-text st-text--heading st-text--lg st-text--default">Heading lg</h2>
        <p className="st-text st-text--body st-text--md st-text--default">Default body md.</p>
        <p className="st-text st-text--body st-text--md st-text--muted">Muted body md.</p>
        <p className="st-text st-text--body st-text--sm st-text--error">Error sm</p>
        {/* biome-ignore lint/a11y/noLabelWithoutControl: parity story — visually demonstrates `.st-text--label` typography against the React side, not a real form label */}
        <label className="st-text st-text--label st-text--sm st-text--default">Label sm</label>
        <p className="st-text st-text--body st-text--md st-text--vermillion">Vermillion brand</p>
        <p className="st-text st-text--body st-text--md st-text--default st-text--align-right">
          Right-aligned
        </p>
        <p className="st-text st-text--body st-text--md st-text--default st-text--truncate">
          A very long line that should be truncated when it overflows the container width.
        </p>
      </div>
    </div>
  ),
}
