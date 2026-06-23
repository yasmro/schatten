import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar } from './Avatar'

// A deterministic inline image (no network) so VRT screenshots are stable —
// a flat indigo SVG with a simple "person" glyph. Chromium loads this data URI
// in `<img src>` directly.
const IMAGE_SRC =
  "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='96'%20height='96'%3E%3Crect%20width='96'%20height='96'%20fill='%234f46e5'/%3E%3Ccircle%20cx='48'%20cy='38'%20r='17'%20fill='%23c7d2fe'/%3E%3Crect%20x='20'%20y='60'%20width='56'%20height='34'%20rx='17'%20fill='%23c7d2fe'/%3E%3C/svg%3E"

const meta: Meta<typeof Avatar> = {
  title: 'Components/lv1/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      description: 'Image URL. Falls back to the `fallback` initials when absent or failed.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    alt: {
      description: 'Alt text / accessible name shown while the image is visible.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    fallback: {
      description: 'Initials shown when there is no image or it fails to load (string only).',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    size: {
      description: 'Size of the avatar.',
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: '"sm" | "md" | "lg"' },
        defaultValue: { summary: 'md' },
      },
    },
    delayMs: {
      description:
        'Delay (ms) before showing the fallback, to avoid an initials flash on fast loads.',
      control: 'number',
      table: { type: { summary: 'number' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Playground: Story = {
  name: 'Playground',
  args: {
    src: IMAGE_SRC,
    alt: 'John Doe',
    fallback: 'JD',
    size: 'md',
  },
}

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar src={IMAGE_SRC} alt="John Doe" fallback="JD" size="sm" />
      <Avatar src={IMAGE_SRC} alt="John Doe" fallback="JD" size="md" />
      <Avatar src={IMAGE_SRC} alt="John Doe" fallback="JD" size="lg" />
    </div>
  ),
}

export const WithImage: Story = {
  name: 'With Image',
  render: () => <Avatar src={IMAGE_SRC} alt="Alice Anderson" fallback="AA" size="lg" />,
}

export const Fallback: Story = {
  name: 'Fallback (initials)',
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar fallback="JD" size="sm" />
      <Avatar fallback="AB" size="md" />
      <Avatar fallback="CD" size="lg" />
    </div>
  ),
}

export const WithBrokenImage: Story = {
  name: 'With Broken Image',
  // A 404 src exercises the image→fallback swap; the VRT interaction test
  // (Avatar.vrt.spec.ts) asserts the initials surface and the <img> drops.
  render: () => (
    <Avatar src="/this-avatar-image-does-not-exist.png" alt="Broken" fallback="JD" size="lg" />
  ),
}
