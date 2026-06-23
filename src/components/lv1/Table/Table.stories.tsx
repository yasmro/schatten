import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './Table'

const meta: Meta<typeof Table> = {
  title: 'Components/lv1/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      description: 'Cell density (padding + font-size).',
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: '"sm" | "md" | "lg"' },
        defaultValue: { summary: 'md' },
      },
    },
    striped: {
      description: 'Zebra-stripe the body rows. Orthogonal to bordered.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    bordered: {
      description: 'Draw a border around every cell. Orthogonal to striped.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    hoverable: {
      description: 'Tint body rows on hover (presentational only).',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof Table>

const PEOPLE = [
  { name: 'Taro Tanaka', email: 'tanaka@example.com', role: 'Admin' },
  { name: 'Hanako Sato', email: 'sato@example.com', role: 'Editor' },
  { name: 'Ken Suzuki', email: 'suzuki@example.com', role: 'Viewer' },
] as const

/** A reusable 3-column body for the demos. */
function DemoTable(args: React.ComponentProps<typeof Table>) {
  return (
    <div className="w-[520px]">
      <Table {...args}>
        <TableCaption>Team members</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead align="end">Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {PEOPLE.map((p) => (
            <TableRow key={p.email}>
              <TableCell>{p.name}</TableCell>
              <TableCell>{p.email}</TableCell>
              <TableCell align="end">{p.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

/**
 * Interactive single instance — toggle `size` / `striped` / `bordered` /
 * `hoverable` in the Controls panel.
 */
export const Playground: Story = {
  args: { size: 'md', striped: false, bordered: false, hoverable: false },
  render: (args) => <DemoTable {...args} />,
}

/**
 * The orthogonal treatments. `striped` and `bordered` are independent booleans,
 * so they compose — the fourth table is both at once.
 */
export const Treatments: Story = {
  name: 'Treatments',
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-2 text-xs text-foreground-muted">Default</p>
        <DemoTable />
      </div>
      <div>
        <p className="mb-2 text-xs text-foreground-muted">Striped</p>
        <DemoTable striped />
      </div>
      <div>
        <p className="mb-2 text-xs text-foreground-muted">Bordered</p>
        <DemoTable bordered />
      </div>
      <div>
        <p className="mb-2 text-xs text-foreground-muted">Striped + Bordered</p>
        <DemoTable striped bordered />
      </div>
    </div>
  ),
}

/** Cell density — `sm` / `md` / `lg`. */
export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-2 text-xs text-foreground-muted">sm</p>
        <DemoTable size="sm" />
      </div>
      <div>
        <p className="mb-2 text-xs text-foreground-muted">md</p>
        <DemoTable size="md" />
      </div>
      <div>
        <p className="mb-2 text-xs text-foreground-muted">lg</p>
        <DemoTable size="lg" />
      </div>
    </div>
  ),
}

/**
 * Hover a body row to see the tint. (Resting state matches the default table;
 * the effect is only visible on pointer hover.)
 */
export const Hoverable: Story = {
  name: 'Hoverable',
  render: () => <DemoTable hoverable />,
}

/**
 * `selected` highlights a row via `data-state="selected"` — a theme-tinted
 * surface (a different token from the neutral hover / stripe tint) plus a left
 * accent bar, so it stays distinct even on a striped or hoverable table. The
 * highlight fades in (respecting `prefers-reduced-motion`) and picks up a
 * Special's brand hue.
 */
export const SelectedRow: Story = {
  name: 'Selected Row',
  render: () => (
    <div className="w-[520px]">
      <Table>
        <TableCaption>Team members</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead align="end">Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{PEOPLE[0].name}</TableCell>
            <TableCell>{PEOPLE[0].email}</TableCell>
            <TableCell align="end">{PEOPLE[0].role}</TableCell>
          </TableRow>
          <TableRow selected>
            <TableCell>{PEOPLE[1].name}</TableCell>
            <TableCell>{PEOPLE[1].email}</TableCell>
            <TableCell align="end">{PEOPLE[1].role}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{PEOPLE[2].name}</TableCell>
            <TableCell>{PEOPLE[2].email}</TableCell>
            <TableCell align="end">{PEOPLE[2].role}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
}
