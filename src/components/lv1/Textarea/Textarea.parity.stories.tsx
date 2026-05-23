import type { Meta, StoryObj } from '@storybook/react-vite'
import { Textarea } from './Textarea'

/**
 * Parity stories — React `<Textarea>` and a hand-written vanilla
 * `<textarea class="st-textarea st-textarea--md">` must render
 * pixel-identical. Backs the VRT in `Textarea.parity.vrt.spec.ts`.
 *
 * Covered combinations:
 * - 3 sizes (sm / md / lg)
 * - error / disabled / readOnly
 * - readOnly + isError (precedence: readOnly visual wins, aria-invalid stays)
 *
 * Vanilla side carries `aria-invalid`, `disabled`, `readonly` manually —
 * the CSS targets attributes only, so vanilla HTML consumers must set them.
 */
const meta: Meta<typeof Textarea> = {
  title: 'Components/lv1/Textarea',
  component: Textarea,
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof Textarea>

type VanillaProps = {
  size: 'sm' | 'md' | 'lg'
  isError?: boolean
  disabled?: boolean
  readOnly?: boolean
  defaultValue?: string
  placeholder?: string
}

const VanillaTextarea = ({
  size,
  isError,
  disabled,
  readOnly,
  defaultValue,
  placeholder,
}: VanillaProps) => (
  <textarea
    className={`st-textarea st-textarea--${size}`}
    aria-invalid={isError ? 'true' : undefined}
    disabled={disabled}
    readOnly={readOnly}
    defaultValue={defaultValue}
    placeholder={placeholder}
    rows={3}
  />
)

export const Parity: Story = {
  name: 'React vs Vanilla HTML',
  render: () => (
    <div className="grid grid-cols-2 gap-12 max-w-6xl">
      <div className="space-y-4">
        <p className="text-xs mb-2 text-foreground-muted">React</p>
        <Textarea size="sm" placeholder="Small" rows={3} />
        <Textarea size="md" placeholder="Medium" rows={3} />
        <Textarea size="lg" placeholder="Large" rows={3} />
        <Textarea isError defaultValue="Error state" rows={3} />
        <Textarea disabled defaultValue="Disabled" rows={3} />
        <Textarea readOnly defaultValue="Read-only" rows={3} />
        <Textarea readOnly isError defaultValue="ReadOnly + error" rows={3} />
      </div>
      <div className="space-y-4">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>
        <VanillaTextarea size="sm" placeholder="Small" />
        <VanillaTextarea size="md" placeholder="Medium" />
        <VanillaTextarea size="lg" placeholder="Large" />
        <VanillaTextarea size="md" isError defaultValue="Error state" />
        <VanillaTextarea size="md" disabled defaultValue="Disabled" />
        <VanillaTextarea size="md" readOnly defaultValue="Read-only" />
        <VanillaTextarea size="md" readOnly isError defaultValue="ReadOnly + error" />
      </div>
    </div>
  ),
}
