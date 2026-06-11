import type { Meta, StoryObj } from '@storybook/react-vite'
import { Text } from '../../components/lv1/Text'
import { buildThemeInitScript } from '../../theme-init'
import { ThemeInitScript } from './ThemeInitScript'

const meta: Meta<typeof ThemeInitScript> = {
  title: 'Theming/ThemeInitScript',
  component: ThemeInitScript,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Renders the synchronous FOUC-avoidance `<script>` for `<head>`. It applies the persisted Mode (`.dark`) and Special (`data-theme`) before first paint, so an SSR page never flashes the light/default theme. The component output is an invisible `<script>` — the panel below shows the exact bytes it emits for the chosen `storageKey`.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    nonce: {
      description: 'CSP nonce forwarded to the rendered `<script>` element.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    storageKey: {
      description: 'localStorage key the snippet reads. Must match the Provider.',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'schatten-theme' },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof ThemeInitScript>

export const Playground: Story = {
  args: {
    storageKey: 'schatten-theme',
  },
  render: (args) => (
    <div className="flex flex-col gap-2 max-w-[640px]">
      <Text variant="label">Emitted snippet</Text>
      <pre className="text-xs whitespace-pre-wrap break-all p-3 rounded border border-border bg-surface">
        {buildThemeInitScript(args.storageKey ?? 'schatten-theme')}
      </pre>
      {/* The actual component output is an invisible <script>. */}
      <ThemeInitScript {...args} />
    </div>
  ),
}
