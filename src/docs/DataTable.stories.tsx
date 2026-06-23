import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from '@tanstack/react-table'
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react'
import { type ReactNode, useState } from 'react'
import { Button } from '../components/lv1/Button/Button'
import { Callout } from '../components/lv1/Callout/Callout'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/lv1/Table/Table'
import {
  CodeBlock,
  DocsTable,
  Lead,
  Note,
  PageTitle,
  SectionTitle,
  SubsectionTitle,
} from './docs-ui'

/*
 * Patterns/Data Table — the canonical answer to "lv1 Table has no sort, so how
 * do I add it?". Table is presentational-only by design (#152): it ships the
 * chrome (`.st-table*`, density, zebra / border / hover) and holds NO sort /
 * filter / pagination logic. This page demonstrates the intended seam — compose
 * a headless logic layer (TanStack Table v8) on top, keep the look on Schatten's
 * side — exactly like shadcn/ui's "Data Table" doc.
 *
 * Schatten does NOT bundle TanStack: `@tanstack/react-table` is a devDependency
 * here (imported only so this page can render a live demo), never a prod / peer
 * dependency. Consumers install whichever headless lib they prefer.
 *
 * Prose is rendered INLINE in each story (the `Patterns/*` convention), NOT via
 * `parameters.docs.description.*`: these hand-built pages run in Canvas with
 * `layout: 'fullscreen'` and no `autodocs` tag, so there is no Docs page for
 * `description.*` to render on. See storybook-guideline.md "Hand-built docs
 * pages — render prose inline".
 *
 * Ships WITHOUT a `*.vrt.spec.ts` by design — every `Patterns/*` sibling (Form
 * States / Accessibility / Testing) is VRT-less, and the subject here is the
 * composition seam, not a new visual contract. See vrt-spec-guideline.md "docs
 * / token stories — VRT only when there is a genuine visual contract".
 */
const meta: Meta = {
  title: 'Patterns/Data Table',
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj

const Page = ({ children }: { children: ReactNode }) => (
  <div className="max-w-3xl mx-auto px-8 py-12">{children}</div>
)

const Code = ({ children }: { children: ReactNode }) => (
  <code className="rounded bg-surface px-1 py-0.5 font-mono text-[0.85em] text-foreground">
    {children}
  </code>
)

// ---------------------------------------------------------------------------
// Live demo: lv1 Table + TanStack Table sorting.
// ---------------------------------------------------------------------------

type Person = { name: string; email: string; amount: number }

const DATA: Person[] = [
  { name: 'Aoi Tanaka', email: 'aoi@example.com', amount: 1200 },
  { name: 'Ren Suzuki', email: 'ren@example.com', amount: 350 },
  { name: 'Yui Sato', email: 'yui@example.com', amount: 980 },
  { name: 'Haru Ito', email: 'haru@example.com', amount: 4500 },
  { name: 'Mio Kato', email: 'mio@example.com', amount: 75 },
]

const columns: ColumnDef<Person>[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'email', header: 'Email' },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ getValue }) => `$${(getValue() as number).toLocaleString()}`,
  },
]

// Columns that read as numbers are end-aligned. The headless lib owns the data;
// alignment is a presentational choice the consumer makes on the Schatten side.
const NUMERIC = new Set(['amount'])

// Map TanStack's sort state (`false | 'asc' | 'desc'`) onto the ARIA `aria-sort`
// token. The consumer puts this on the <th> (TableHead forwards `...props`);
// Schatten Table never sets `aria-sort` itself.
const ariaSort = (sorted: false | 'asc' | 'desc') =>
  sorted === 'asc' ? 'ascending' : sorted === 'desc' ? 'descending' : 'none'

function SortableTableDemo() {
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data: DATA,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <Table hoverable>
      <TableCaption>Team members — click a column header to sort.</TableCaption>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              const sorted = header.column.getIsSorted()
              const align = NUMERIC.has(header.column.id) ? 'end' : 'start'
              return (
                <TableHead key={header.id} align={align} aria-sort={ariaSort(sorted)}>
                  {/* a11y: the click target is a real <button> (Tab-reachable,
                      Enter/Space), NOT an onClick on the bare <th>. `aria-sort`
                      stays on the <th>. */}
                  <Button
                    variant="tertiary"
                    size="sm"
                    icon={sorted === 'asc' ? ArrowUp : sorted === 'desc' ? ArrowDown : ArrowUpDown}
                    iconPosition="end"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </Button>
                </TableHead>
              )
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id} align={NUMERIC.has(cell.column.id) ? 'end' : 'start'}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

/**
 * §0 — Overview. The division of labour: lv1 Table is presentational chrome; a
 * headless logic layer (TanStack Table) owns sort / filter / pagination state.
 */
export const Overview: Story = {
  name: 'Overview',
  render: () => (
    <Page>
      <PageTitle>Data Table</PageTitle>
      <Lead>
        lv1 <Code>Table</Code> is <strong>presentational only</strong> — it ships the markup and the{' '}
        <Code>.st-table*</Code> chrome (density, zebra, border, hover) and holds <strong>no</strong>{' '}
        sort / filter / pagination logic. To build a data table, compose a <em>headless</em> logic
        layer on top: it owns the state and the row model, Schatten owns the look. This is the same
        split shadcn/ui uses for its Data Table.
      </Lead>

      <Callout variant="warning" title="Schatten does not bundle a table logic library">
        <Code>@tanstack/react-table</Code> is used on this page purely to render the live demo — it
        is a <Code>devDependency</Code>, never a production or peer dependency. Bring your own
        headless layer (TanStack Table, react-table, or a hand-rolled <Code>map</Code>) and{' '}
        <Code>npm install</Code> it yourself.
      </Callout>

      <SectionTitle>Who owns what</SectionTitle>
      <DocsTable
        headers={['Concern', 'Owner', 'How']}
        rows={[
          {
            key: 'markup',
            cells: [
              'Markup, density, zebra / border / hover',
              'Schatten Table',
              <span key="c">
                <Code>{'<Table striped hoverable>'}</Code> + parts
              </span>,
            ],
          },
          {
            key: 'state',
            cells: [
              'Sort / filter / pagination state',
              'Headless lib',
              <Code key="c">useReactTable(…)</Code>,
            ],
          },
          {
            key: 'aria',
            cells: [
              'aria-sort, row data-state',
              'You (pass-through)',
              <span key="c">
                <Code>{'<TableHead aria-sort=…>'}</Code> — Table forwards{' '}
                <Code>{'{...props}'}</Code>
              </span>,
            ],
          },
        ]}
      />

      <SectionTitle>Why sort is not built into lv1</SectionTitle>
      <ul className="list-disc pl-6 text-sm text-foreground-muted flex flex-col gap-2">
        <li>
          <strong className="text-foreground">shadcn parity</strong> — a presentational primitive
          plus bring-your-own logic keeps the API small and the data flow explicit.
        </li>
        <li>
          <strong className="text-foreground">lv1 / lv2 split</strong> — a batteries-included{' '}
          <Code>DataTable</Code> is a composition, so it belongs in lv2 (post-1.0), not in the lv1
          primitive.
        </li>
        <li>
          <strong className="text-foreground">no forced dependency</strong> — baking in one headless
          lib would impose it on every consumer. The seam lets you pick.
        </li>
      </ul>
    </Page>
  ),
}

/**
 * §1 — Sorting (live). State lives in TanStack's `useReactTable`; the toggle is
 * a real <button> inside the <th>, and `aria-sort` is forwarded onto the <th>.
 */
export const Sorting: Story = {
  name: '1. Sorting',
  render: () => (
    <Page>
      <PageTitle>1. Sorting</PageTitle>
      <Lead>
        Hold the sort state in <Code>useReactTable</Code> with <Code>getSortedRowModel()</Code>,
        then render the sorted rows through Schatten <Code>Table</Code> parts. The header&apos;s
        sort toggle is a real <Code>{'<Button>'}</Code> inside the <Code>{'<th>'}</Code> (keyboard
        operable), and <Code>aria-sort</Code> rides onto the <Code>{'<th>'}</Code> via{' '}
        <Code>TableHead</Code>&apos;s <Code>{'{...props}'}</Code> pass-through.
      </Lead>

      <div className="mb-6">
        <SortableTableDemo />
      </div>

      <SectionTitle>The wiring</SectionTitle>
      <CodeBlock>{`import {
  type ColumnDef, type SortingState,
  flexRender, getCoreRowModel, getSortedRowModel, useReactTable,
} from '@tanstack/react-table'
import {
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption,
} from '@yasmro/schatten'
import { Button } from '@yasmro/schatten'
import { ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-react'

const ariaSort = (s: false | 'asc' | 'desc') =>
  s === 'asc' ? 'ascending' : s === 'desc' ? 'descending' : 'none'

function DataTable({ data, columns }) {
  const [sorting, setSorting] = useState([])
  const table = useReactTable({
    data, columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <Table hoverable>
      <TableHeader>
        {table.getHeaderGroups().map((hg) => (
          <TableRow key={hg.id}>
            {hg.headers.map((header) => {
              const sorted = header.column.getIsSorted()
              return (
                {/* aria-sort on the <th>; the click target is a real <button> */}
                <TableHead key={header.id} aria-sort={ariaSort(sorted)}>
                  <Button
                    variant="tertiary" size="sm" iconPosition="end"
                    icon={sorted === 'asc' ? ArrowUp : sorted === 'desc' ? ArrowDown : ArrowUpDown}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </Button>
                </TableHead>
              )
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}`}</CodeBlock>

      <Callout variant="info" title="aria-sort is yours to wire">
        Schatten <Code>Table</Code> never sets <Code>aria-sort</Code> — it would have to own sort
        state to know the value, and it deliberately does not. You set it from the headless
        lib&apos;s state, and because <Code>TableHead</Code> forwards <Code>{'{...props}'}</Code>,
        it lands on the native <Code>{'<th>'}</Code>. Keep it on the cell, not on the inner button:
        only one column should be non-<Code>none</Code> at a time.
      </Callout>
    </Page>
  ),
}

/**
 * §2 — Filtering & Pagination (code-only). Same seam, different row models.
 */
export const FilteringAndPagination: Story = {
  name: '2. Filtering & Pagination',
  render: () => (
    <Page>
      <PageTitle>2. Filtering &amp; Pagination</PageTitle>
      <Lead>
        Filtering and pagination ride the exact same seam as sorting — add the matching row model
        and drive a Schatten control (<Code>Input</Code>, <Code>Button</Code>) off the table
        instance. Shown as code so you can lift the bits you need; the render side is unchanged from
        section 1.
      </Lead>

      <SubsectionTitle>Filtering</SubsectionTitle>
      <CodeBlock>{`import { getFilteredRowModel } from '@tanstack/react-table'

const [globalFilter, setGlobalFilter] = useState('')
const table = useReactTable({
  data, columns,
  state: { globalFilter },
  onGlobalFilterChange: setGlobalFilter,
  getCoreRowModel: getCoreRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
})

// Drive it with a Schatten Input:
<Input
  value={globalFilter}
  onChange={(e) => setGlobalFilter(e.target.value)}
  placeholder="Filter…"
/>`}</CodeBlock>

      <SubsectionTitle>Pagination</SubsectionTitle>
      <CodeBlock>{`import { getPaginationRowModel } from '@tanstack/react-table'

const table = useReactTable({
  data, columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
})

// table.getRowModel().rows is already the current page. Page with Buttons:
<Button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
  Previous
</Button>
<Button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
  Next
</Button>`}</CodeBlock>

      <Note>
        The render loop (<Code>getHeaderGroups()</Code> / <Code>getRowModel().rows</Code>) is
        identical to section 1 — only the row models and the controls differ. Compose as many row
        models as you need; they layer in the order TanStack documents.
      </Note>
    </Page>
  ),
}

/**
 * §3 — Virtualization (pointer only). Out of scope for this recipe; link out.
 */
export const Virtualization: Story = {
  name: '3. Virtualization',
  render: () => (
    <Page>
      <PageTitle>3. Virtualization</PageTitle>
      <Lead>
        For very large datasets, render only the visible rows with a virtualizer. This is out of
        scope for this recipe — the seam is the same (Schatten <Code>Table</Code> parts for the
        chrome, a headless layer for the windowing).
      </Lead>

      <Note>
        Reach for{' '}
        <a
          className="text-info underline"
          href="https://tanstack.com/virtual/latest"
          target="_blank"
          rel="noreferrer"
        >
          <Code>@tanstack/react-virtual</Code>
        </a>{' '}
        and feed its measured rows into <Code>TableBody</Code>. Note the native{' '}
        <Code>{'<table>'}</Code> layout constrains some virtualization techniques; consult the
        virtualizer&apos;s table guide before committing to an approach.
      </Note>
    </Page>
  ),
}

/**
 * §4 — Other options. The seam is logic-lib-agnostic; only the render side is
 * Schatten's.
 */
export const OtherOptions: Story = {
  name: '4. Other options',
  render: () => (
    <Page>
      <PageTitle>4. Other options</PageTitle>
      <Lead>
        TanStack Table is one choice, not the only one. The seam is the same for any logic layer:
        whatever produces your rows, you render them through Schatten <Code>Table</Code> parts and
        forward state attributes (<Code>aria-sort</Code>, row <Code>data-state</Code>) yourself.
      </Lead>

      <DocsTable
        headers={['Logic layer', 'What changes', 'What stays the same']}
        rows={[
          {
            key: 'tanstack',
            cells: [
              <Code key="c">@tanstack/react-table</Code>,
              'Row model API (this page)',
              'Schatten Table parts render the rows',
            ],
          },
          {
            key: 'react-table',
            cells: [
              <Code key="c">react-table (v7)</Code>,
              'Hook API (getTableProps, …)',
              'Same Table parts, same aria-sort wiring',
            ],
          },
          {
            key: 'manual',
            cells: [
              'Plain array + map',
              'You sort / filter in JS',
              'Same Table parts; set aria-sort from your own state',
            ],
          },
        ]}
      />

      <Note>
        Whichever you pick, the rule from <Code>component-architecture.md</Code> §8 holds: if a row
        is clickable, put a real control (button / link) inside the cell — never an{' '}
        <Code>onClick</Code> on a bare <Code>{'<tr>'}</Code>. Table&apos;s{' '}
        <Code>{'<TableRow selected>'}</Code> is presentational (<Code>data-state="selected"</Code>)
        and does not imply interactivity.
      </Note>
    </Page>
  ),
}
