import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ReactNode } from 'react'
import { Checkbox } from '../components/lv1/Checkbox/Checkbox'
import { Input } from '../components/lv1/Input/Input'
import { Radio, RadioGroup } from '../components/lv1/Radio/Radio'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/lv1/Select/Select'
import { Switch } from '../components/lv1/Switch/Switch'
import { Textarea } from '../components/lv1/Textarea/Textarea'

const meta: Meta = {
  title: 'Foundation/Form States',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

/* ------------------------------------------------------------------ */
/* Layout primitives                                                  */
/* ------------------------------------------------------------------ */

const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-2xl font-bold text-foreground mt-12 mb-2">{children}</h2>
)

const Caption = ({ children }: { children: ReactNode }) => (
  <p className="text-sm text-foreground-muted mb-4 max-w-3xl">{children}</p>
)

const Code = ({ children }: { children: ReactNode }) => (
  <code className="text-xs rounded bg-surface-hover px-1 py-0.5">{children}</code>
)

/* ------------------------------------------------------------------ */
/* State matrix                                                       */
/* ------------------------------------------------------------------ */

type StateKey =
  | 'default'
  | 'filled'
  | 'error'
  | 'disabled'
  | 'disabledValue'
  | 'readOnly'
  | 'readOnlyValue'

const STATE_COLUMNS: { key: StateKey; label: string }[] = [
  { key: 'default', label: 'default' },
  { key: 'filled', label: 'filled' },
  { key: 'error', label: 'error' },
  { key: 'disabled', label: 'disabled' },
  { key: 'disabledValue', label: 'disabled (value)' },
  { key: 'readOnly', label: 'readOnly' },
  { key: 'readOnlyValue', label: 'readOnly (value)' },
]

/**
 * Each component declares how it renders in a given state. Returning `null`
 * means the state is not applicable — `readOnly` only exists on `Input` and
 * `Textarea`, so the other controls render an explicit N/A cell.
 */
type FormRow = {
  name: string
  render: (state: StateKey) => ReactNode | null
}

const DemoSelect = (props: { defaultValue?: string; disabled?: boolean; isError?: boolean }) => (
  <Select defaultValue={props.defaultValue} disabled={props.disabled}>
    <SelectTrigger isError={props.isError}>
      <SelectValue placeholder="Select" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="a">Option A</SelectItem>
      <SelectItem value="b">Option B</SelectItem>
    </SelectContent>
  </Select>
)

const DemoRadioGroup = (props: {
  defaultValue?: string
  disabled?: boolean
  isError?: boolean
}) => (
  <RadioGroup
    defaultValue={props.defaultValue}
    disabled={props.disabled}
    isError={props.isError}
    className="flex-row gap-3"
  >
    <Radio value="a" label="A" />
    <Radio value="b" label="B" />
  </RadioGroup>
)

const FORM_ROWS: FormRow[] = [
  {
    name: 'Input',
    render: (s) => {
      switch (s) {
        case 'default':
          return <Input placeholder="Placeholder" />
        case 'filled':
          return <Input defaultValue="Filled value" />
        case 'error':
          return <Input defaultValue="Invalid value" isError />
        case 'disabled':
          return <Input placeholder="Placeholder" disabled />
        case 'disabledValue':
          return <Input defaultValue="Filled value" disabled />
        case 'readOnly':
          return <Input placeholder="(empty)" readOnly />
        case 'readOnlyValue':
          return <Input defaultValue="Read-only value" readOnly />
      }
    },
  },
  {
    name: 'Textarea',
    render: (s) => {
      switch (s) {
        case 'default':
          return <Textarea placeholder="Placeholder" rows={2} />
        case 'filled':
          return <Textarea defaultValue="Filled value" rows={2} />
        case 'error':
          return <Textarea defaultValue="Invalid value" rows={2} isError />
        case 'disabled':
          return <Textarea placeholder="Placeholder" rows={2} disabled />
        case 'disabledValue':
          return <Textarea defaultValue="Filled value" rows={2} disabled />
        case 'readOnly':
          return <Textarea placeholder="(empty)" rows={2} readOnly />
        case 'readOnlyValue':
          return <Textarea defaultValue="Read-only value" rows={2} readOnly />
      }
    },
  },
  {
    name: 'Select',
    render: (s) => {
      switch (s) {
        case 'default':
          return <DemoSelect />
        case 'filled':
          return <DemoSelect defaultValue="a" />
        case 'error':
          return <DemoSelect isError />
        case 'disabled':
          return <DemoSelect disabled />
        case 'disabledValue':
          return <DemoSelect defaultValue="a" disabled />
        default:
          return null
      }
    },
  },
  {
    name: 'Checkbox',
    render: (s) => {
      switch (s) {
        case 'default':
          return <Checkbox label="Label" />
        case 'filled':
          return <Checkbox label="Label" defaultChecked />
        case 'error':
          return <Checkbox label="Label" isError />
        case 'disabled':
          return <Checkbox label="Label" disabled />
        case 'disabledValue':
          return <Checkbox label="Label" disabled defaultChecked />
        default:
          return null
      }
    },
  },
  {
    name: 'Radio',
    render: (s) => {
      switch (s) {
        case 'default':
          return <DemoRadioGroup />
        case 'filled':
          return <DemoRadioGroup defaultValue="b" />
        case 'error':
          return <DemoRadioGroup isError />
        case 'disabled':
          return <DemoRadioGroup disabled />
        case 'disabledValue':
          return <DemoRadioGroup defaultValue="b" disabled />
        default:
          return null
      }
    },
  },
  {
    name: 'Switch',
    render: (s) => {
      switch (s) {
        case 'default':
          return <Switch label="Label" />
        case 'filled':
          return <Switch label="Label" defaultChecked />
        case 'error':
          return <Switch label="Label" isError />
        case 'disabled':
          return <Switch label="Label" disabled />
        case 'disabledValue':
          return <Switch label="Label" disabled defaultChecked />
        default:
          return null
      }
    },
  },
]

const NotApplicable = () => <span className="text-xs text-foreground-subtle italic">— n/a</span>

const StateMatrix = () => (
  <div className="overflow-x-auto rounded-lg border border-border">
    <div
      className="grid min-w-[1100px]"
      style={{ gridTemplateColumns: `140px repeat(${STATE_COLUMNS.length}, 1fr)` }}
    >
      {/* header row */}
      <div className="border-border border-b bg-surface-hover px-3 py-2 text-xs font-semibold text-foreground-muted">
        Component
      </div>
      {STATE_COLUMNS.map((col) => (
        <div
          key={col.key}
          className="border-border border-b border-l bg-surface-hover px-3 py-2 text-xs font-semibold text-foreground-muted"
        >
          {col.label}
        </div>
      ))}

      {/* component rows */}
      {FORM_ROWS.map((row) => (
        <div key={row.name} className="contents">
          <div className="border-border border-b px-3 py-4 text-sm font-medium text-foreground flex items-center">
            {row.name}
          </div>
          {STATE_COLUMNS.map((col) => {
            const node = row.render(col.key)
            return (
              <div
                key={col.key}
                className="border-border border-b border-l px-3 py-4 flex items-center"
              >
                {node ?? <NotApplicable />}
              </div>
            )
          })}
        </div>
      ))}
    </div>
  </div>
)

/* ------------------------------------------------------------------ */
/* Interactive states (hover / focus)                                 */
/* ------------------------------------------------------------------ */

const InteractiveStates = () => (
  <div className="grid grid-cols-2 gap-4 max-w-2xl">
    <div className="rounded-lg border border-border p-4">
      <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground-muted mb-1">
        hover
      </h3>
      <p className="text-xs text-foreground-subtle mb-3">
        Pointer pseudo-state — move the cursor over the control. Storybook cannot pin a hover
        snapshot, so it is shown here as a live control rather than a static cell.
      </p>
      <Input placeholder="Hover me" />
    </div>
    <div className="rounded-lg border border-border p-4">
      <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground-muted mb-1">
        focused
      </h3>
      <p className="text-xs text-foreground-subtle mb-3">
        Keyboard / programmatic focus — the field below is <Code>autoFocus</Code>ed on mount so the{' '}
        <Code>ring</Code> token is visible. Tab between controls to see it elsewhere.
      </p>
      <Input placeholder="Focused on mount" autoFocus />
    </div>
  </div>
)

/* ------------------------------------------------------------------ */
/* State tokens consumed                                              */
/* ------------------------------------------------------------------ */

const TOKEN_ROWS: {
  state: string
  surface: string
  foreground: string
  border: string
  other: string
}[] = [
  {
    state: 'default / filled',
    surface: 'background',
    foreground: 'foreground',
    border: 'border',
    other: '—',
  },
  {
    state: 'focused',
    surface: 'background',
    foreground: 'foreground',
    border: 'border',
    other: 'ring · ring-offset',
  },
  {
    state: 'error',
    surface: 'error-subtle (Input / Textarea / Checkbox / Radio)',
    foreground: 'foreground',
    border: 'border-error',
    other: 'ring-error (on focus)',
  },
  {
    state: 'disabled',
    surface: 'surface-disabled',
    foreground: 'foreground-disabled',
    border: 'border-disabled',
    other: '—',
  },
  {
    state: 'readOnly',
    surface: 'surface-readonly',
    foreground: 'foreground (value stays readable)',
    border: 'border-readonly',
    other: '—',
  },
]

const TokenTable = () => (
  <div className="overflow-x-auto rounded-lg border border-border">
    <table className="w-full min-w-[720px] text-sm">
      <thead>
        <tr className="bg-surface-hover text-left text-xs font-semibold text-foreground-muted">
          <th className="px-3 py-2">State</th>
          <th className="px-3 py-2">Surface token</th>
          <th className="px-3 py-2">Foreground token</th>
          <th className="px-3 py-2">Border token</th>
          <th className="px-3 py-2">Other</th>
        </tr>
      </thead>
      <tbody>
        {TOKEN_ROWS.map((row) => (
          <tr key={row.state} className="border-border border-t">
            <td className="px-3 py-2 font-medium text-foreground">{row.state}</td>
            <td className="px-3 py-2 text-foreground-muted">
              <code className="text-xs">{row.surface}</code>
            </td>
            <td className="px-3 py-2 text-foreground-muted">
              <code className="text-xs">{row.foreground}</code>
            </td>
            <td className="px-3 py-2 text-foreground-muted">
              <code className="text-xs">{row.border}</code>
            </td>
            <td className="px-3 py-2 text-foreground-muted">
              <code className="text-xs">{row.other}</code>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

/* ------------------------------------------------------------------ */
/* Anti-patterns                                                      */
/* ------------------------------------------------------------------ */

const AntiPatterns = () => (
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 max-w-3xl">
    <div className="rounded-lg border border-success bg-success-subtle p-4">
      <h3 className="text-sm font-semibold text-success mb-1">✓ Do</h3>
      <p className="text-xs text-foreground-muted mb-3">
        Drive the disabled look from semantic tokens — <Code>bg-surface-disabled</Code> +{' '}
        <Code>text-foreground-disabled</Code> + <Code>border-border-disabled</Code>. Disabled and
        readOnly stay visually distinct.
      </p>
      <Input placeholder="Disabled (tokens)" disabled />
    </div>
    <div className="rounded-lg border border-error bg-error-subtle p-4">
      <h3 className="text-sm font-semibold text-error mb-1">✗ Don't</h3>
      <p className="text-xs text-foreground-muted mb-3">
        Fade an enabled control with <Code>opacity-50</Code> alone. It conflates disabled with
        readOnly, dims the value below legibility, and skips <Code>aria-disabled</Code>.
      </p>
      <Input placeholder="opacity-50 (wrong)" className="opacity-50" />
    </div>
  </div>
)

/* ------------------------------------------------------------------ */
/* Priority                                                           */
/* ------------------------------------------------------------------ */

const PriorityMatrix = () => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-3xl">
    {(
      [
        { title: 'isError only', isError: true, disabled: false },
        { title: 'disabled only', isError: false, disabled: true },
        { title: 'disabled + isError', isError: true, disabled: true },
      ] as const
    ).map((cfg) => (
      <div key={cfg.title} className="rounded-lg border border-border p-4">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground-muted mb-3">
          {cfg.title}
        </h3>
        <div className="flex flex-col gap-3">
          <Input placeholder="Input" isError={cfg.isError} disabled={cfg.disabled} />
          <div className="flex gap-3">
            <Checkbox label="Checkbox" isError={cfg.isError} disabled={cfg.disabled} />
            <Switch label="Switch" isError={cfg.isError} disabled={cfg.disabled} />
          </div>
        </div>
      </div>
    ))}
  </div>
)

/* ------------------------------------------------------------------ */
/* Story                                                              */
/* ------------------------------------------------------------------ */

export const FormStates: Story = {
  name: 'Form states',
  render: () => (
    <div className="max-w-6xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-foreground mb-4">Form states</h1>
      <p className="text-base text-foreground-muted mb-2 max-w-3xl">
        Every state a form <code className="text-xs">lv1</code> can be in, in one place. Use it to
        design the state-transition story of a control and to review state-touching PRs side by
        side. Toggle the Storybook theme between light and dark to verify both Modes — the
        non-interactive tokens shift per Mode independently.
      </p>
      <p className="text-sm text-foreground-subtle mb-8 max-w-3xl">
        The raw token swatches live in <strong>Foundation → Color</strong> ("Non-Interactive
        States"). This page is the applied counterpart — the same tokens, rendered on real controls.
      </p>

      <SectionTitle>Form lv1 state matrix</SectionTitle>
      <Caption>
        Six form controls × seven states. <Code>readOnly</Code> only exists on <Code>Input</Code>{' '}
        and <Code>Textarea</Code> — the other controls render an explicit n/a cell. "filled" means a
        value is present (checked / selected for the boolean controls).
      </Caption>
      <StateMatrix />

      <SectionTitle>Interactive states (hover / focus)</SectionTitle>
      <Caption>
        Hover and focus are runtime pseudo-states — Storybook cannot capture them in a static grid,
        so they are shown here as live controls. Focus consumes the <Code>ring</Code> /{' '}
        <Code>ring-offset</Code> tokens; the error variant swaps the ring to <Code>ring-error</Code>
        .
      </Caption>
      <InteractiveStates />

      <SectionTitle>State tokens consumed</SectionTitle>
      <Caption>
        Which semantic token each state pulls from. Components reference these names only — never
        primitive scales — so a Mode or token re-tune lands everywhere at once. See{' '}
        <Code>.claude/rules/state-token-guideline.md</Code>.
      </Caption>
      <TokenTable />

      <SectionTitle>Priority: disabled vs. isError</SectionTitle>
      <Caption>
        When a control is simultaneously <Code>disabled</Code> and <Code>isError</Code>, the
        disabled visual wins — an unusable control should not advertise validation state. The
        control still emits <Code>aria-invalid="true"</Code> for assistive tech.
      </Caption>
      <PriorityMatrix />

      <SectionTitle>Anti-patterns</SectionTitle>
      <Caption>
        The non-interactive token system exists precisely to prevent the <Code>opacity-50</Code>{' '}
        shortcut, which collapses the disabled / readOnly distinction the tokens are designed to
        keep apart.
      </Caption>
      <AntiPatterns />
    </div>
  ),
}
