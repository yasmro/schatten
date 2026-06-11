import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Badge } from '../../components/lv1/Badge'
import { Button } from '../../components/lv1/Button'
import { Text } from '../../components/lv1/Text'
import { ThemeProvider } from './ThemeProvider'
import type { SpecialThemeId, ThemeModeSetting } from './theme-context'
import { useTheme } from './useTheme'

const meta: Meta<typeof ThemeProvider> = {
  title: 'Theming/ThemeProvider',
  component: ThemeProvider,
  parameters: {
    layout: 'centered',
    // The Storybook `preview.tsx` decorator also writes to `<html>`.
    // Provider stories take precedence — they're documenting the same
    // mutation surface. The `disableGlobalThemeDecorator` parameter is
    // read by the decorator (added in preview.tsx) and short-circuits
    // its <html> mutation when true.
    disableGlobalThemeDecorator: true,
  },
  tags: ['autodocs'],
  argTypes: {
    defaultMode: {
      description: 'Initial color-mode setting.',
      control: 'select',
      options: ['light', 'dark', 'system'],
      table: {
        type: { summary: '"light" | "dark" | "system"' },
        defaultValue: { summary: 'system' },
      },
    },
    defaultSpecial: {
      description: 'Initial Special theme. "auto-seasonal" resolves the current date\'s season.',
      control: 'select',
      options: [
        null,
        'auto-seasonal',
        'season--spring-early',
        'season--spring-late',
        'season--summer-early',
        'season--summer-peak',
        'season--autumn-early',
        'season--autumn-late',
        'season--winter-early',
        'season--winter-deep',
      ],
      table: {
        type: { summary: 'SpecialThemeId | "auto-seasonal" | null' },
        defaultValue: { summary: 'null' },
      },
    },
    storageKey: {
      description: 'localStorage key. Pass null to disable persistence.',
      control: 'text',
      table: {
        type: { summary: 'string | null' },
        defaultValue: { summary: 'schatten-theme' },
      },
    },
    disableTransitionOnChange: {
      description: 'Suppress CSS transitions during a mode/special change.',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
  },
}

export default meta

type Story = StoryObj<typeof ThemeProvider>

function ThemePanel() {
  const { mode, modeSetting, special, setMode, setSpecial, isHydrated } = useTheme()
  const modeOptions: ThemeModeSetting[] = ['light', 'dark', 'system']
  const specialOptions: (SpecialThemeId | null)[] = [
    null,
    'season--spring-early',
    'season--spring-late',
    'season--summer-early',
    'season--summer-peak',
    'season--autumn-early',
    'season--autumn-late',
    'season--winter-early',
    'season--winter-deep',
  ]
  return (
    <div className="flex flex-col gap-4 p-6 rounded-lg border border-border bg-surface min-w-[420px]">
      <div className="flex flex-col gap-1">
        <Text variant="label">State</Text>
        <div className="flex flex-wrap gap-2">
          <Badge>mode: {mode}</Badge>
          <Badge>setting: {modeSetting}</Badge>
          <Badge>special: {special ?? 'none'}</Badge>
          <Badge variant={isHydrated ? 'success' : 'warning'}>
            hydrated: {isHydrated ? 'yes' : 'no'}
          </Badge>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <Text variant="label">Mode</Text>
        <div className="flex gap-2">
          {modeOptions.map((m) => (
            <Button
              key={m}
              variant={modeSetting === m ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setMode(m)}
            >
              {m}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <Text variant="label">Special</Text>
        <div className="flex flex-wrap gap-2">
          {specialOptions.map((s) => (
            <Button
              key={s ?? 'none'}
              variant={special === s ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setSpecial(s)}
            >
              {s ?? 'none'}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <Text variant="label">Theme scale preview</Text>
        <div className="flex gap-1">
          {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
            <div
              key={shade}
              className="size-8 rounded border border-border"
              style={{ backgroundColor: `var(--color-theme-${shade})` }}
              title={`theme-${shade}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export const Playground: Story = {
  args: {
    defaultMode: 'system',
    defaultSpecial: null,
    storageKey: 'schatten-theme-storybook',
    disableTransitionOnChange: false,
  },
  render: (args) => (
    <ThemeProvider {...args}>
      <ThemePanel />
    </ThemeProvider>
  ),
}

export const WithControls: Story = {
  name: 'With Controls',
  render: () => (
    <ThemeProvider defaultMode="light" storageKey="schatten-theme-storybook-controls">
      <ThemePanel />
    </ThemeProvider>
  ),
}

export const SystemModeFollows: Story = {
  name: 'System Mode Follows',
  parameters: {
    docs: {
      description: {
        story:
          'When `defaultMode="system"`, the Provider subscribes to `matchMedia("(prefers-color-scheme: dark)")`. Toggle your OS dark mode setting while this story is open — the Mode chip should follow.',
      },
    },
  },
  render: () => (
    <ThemeProvider defaultMode="system" storageKey={null}>
      <ThemePanel />
    </ThemeProvider>
  ),
}

export const AutoSeasonal: Story = {
  name: 'Auto Seasonal',
  parameters: {
    docs: {
      description: {
        story:
          'When `defaultSpecial="auto-seasonal"`, the current date is mapped to a seasonal palette via `getCurrentSeason()`.',
      },
    },
  },
  render: () => (
    <ThemeProvider defaultSpecial="auto-seasonal" storageKey={null}>
      <ThemePanel />
    </ThemeProvider>
  ),
}

/**
 * Demonstrates that `useTheme()` updates do NOT trigger Schatten lv1
 * components to re-render in JSX — they re-paint via CSS cascade only.
 * Use the `setMode` buttons; the static Button / Badge below redraws
 * with the new tokens with no React reconciliation.
 */
export const PaintWithoutReactReRender: Story = {
  name: 'Paint Without Re-Render',
  render: () => {
    function Inner() {
      const [counter] = useState(() => Math.floor(Math.random() * 10000))
      return (
        <div className="flex flex-col gap-4 p-6 rounded-lg border border-border bg-surface">
          <Text>
            Inner component mounted with random id <strong>{counter}</strong>. Switch theme above —
            this number does NOT change, proving the JSX subtree did not re-render.
          </Text>
          <div className="flex gap-2">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
          </div>
        </div>
      )
    }
    return (
      <ThemeProvider defaultMode="light" storageKey={null}>
        <div className="flex flex-col gap-4">
          <ThemePanel />
          <Inner />
        </div>
      </ThemeProvider>
    )
  },
}
