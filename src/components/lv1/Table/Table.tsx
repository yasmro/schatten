import {
  forwardRef,
  type HTMLAttributes,
  type TdHTMLAttributes,
  type ThHTMLAttributes,
} from 'react'
import { cn } from '../../../lib/utils'
import { type TableVariants, tableVariants } from '../../../variants/table'
import './Table.css'

/** Text alignment shared by header and data cells. */
export type TableAlign = 'start' | 'center' | 'end'

export interface TableProps extends HTMLAttributes<HTMLTableElement>, TableVariants {
  /**
   * Cell density (padding + font-size). Applied on the root and cascaded to
   * every cell via `.st-table--{size} .st-table__cell`.
   * @default 'md'
   */
  size?: TableVariants['size']
  /**
   * Zebra-stripe the body rows (odd rows get a subtle surface tint).
   * Orthogonal to `bordered` — both may be set together.
   * @default false
   */
  striped?: TableVariants['striped']
  /**
   * Draw a border around every cell. Orthogonal to `striped`.
   * @default false
   */
  bordered?: TableVariants['bordered']
  /**
   * Tint body rows on hover. Presentational only — does NOT imply the rows are
   * interactive; add a real control (button / link) yourself if they are.
   * @default false
   */
  hoverable?: TableVariants['hoverable']
}

/**
 * A semantic `<table>` for tabular data — **presentational only**. Table ships
 * the chrome (`.st-table*` classes, density, zebra / border / hover
 * treatments) and holds **no** sort / filter / pagination / virtualization
 * logic, by design (#152). Compose a headless logic layer (TanStack Table,
 * react-table, or your own) on top: every behavioural hook (`<th onClick>` /
 * `aria-sort`, row `data-state` / `aria-selected`) passes straight through
 * `...props`, so Table never swallows it.
 *
 * Compound primitive (no Radix, pure native elements): compose it from
 * {@link TableHeader} / {@link TableBody} / {@link TableRow} /
 * {@link TableHead} / {@link TableCell} / {@link TableCaption}. All parts
 * forward `...props` and `ref` to their element.
 *
 * ```tsx
 * <Table striped hoverable>
 *   <TableCaption>Team members</TableCaption>
 *   <TableHeader>
 *     <TableRow>
 *       <TableHead>Name</TableHead>
 *       <TableHead align="end">Role</TableHead>
 *     </TableRow>
 *   </TableHeader>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>Taro</TableCell>
 *       <TableCell align="end"><Badge>admin</Badge></TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 * ```
 *
 * **Horizontal scroll.** Table renders inside a fixed `.st-table-scroll`
 * container (`overflow-x: auto`) so wide tables scroll on narrow viewports.
 * `ref`, `...props`, and `className` all land on the inner `<table>`; the
 * container is internal chrome with no consumer hooks in v1.
 *
 * **Accessibility.** The native `<table>` carries the right roles; give it an
 * accessible name with a {@link TableCaption} (preferred) or by passing
 * `aria-label` / `aria-labelledby` (forwarded to the `<table>`). Table is not
 * interactive on its own — if you make rows clickable, put a real control
 * (button / link) inside, never an `onClick` on a bare `<tr>`.
 */
export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ size = 'md', striped, bordered, hoverable, className, ...props }, ref) => (
    <div className="st-table-scroll">
      <table
        ref={ref}
        className={cn(tableVariants({ size, striped, bordered, hoverable }), className)}
        {...props}
      />
    </div>
  ),
)
Table.displayName = 'Table'

/** Header row group (`<thead>`) of a {@link Table}. */
export const TableHeader = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn('st-table__header', className)} {...props} />
))
TableHeader.displayName = 'TableHeader'

/** Body row group (`<tbody>`) of a {@link Table}. */
export const TableBody = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn('st-table__body', className)} {...props} />
))
TableBody.displayName = 'TableBody'

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  /**
   * Visually marks the row as selected (emits `data-state="selected"` and the
   * highlight). **Presentational only**: it does NOT set `aria-selected`, which
   * is valid ARIA only inside a `role="grid"` / `treegrid`. Building a
   * selectable grid? Supply the grid role + `aria-selected` yourself —
   * `...props` passes straight through.
   * @default false
   */
  selected?: boolean
}

/** A table row (`<tr>`). */
export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ selected, className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn('st-table__row', className)}
      data-state={selected ? 'selected' : undefined}
      {...props}
    />
  ),
)
TableRow.displayName = 'TableRow'

export interface TableHeadProps extends Omit<ThHTMLAttributes<HTMLTableCellElement>, 'align'> {
  /**
   * Text alignment of the header cell.
   * @default 'start'
   */
  align?: TableAlign
}

/**
 * A header cell (`<th>`). For robust header association in multi-dimensional
 * tables, pass `scope="col"` (or `scope="row"` for row headers) — Table does
 * not set it automatically, keeping `...props` pass-through clean.
 */
export const TableHead = forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ align = 'start', className, ...props }, ref) => (
    <th
      ref={ref}
      className={cn('st-table__head', `st-table__head--${align}`, className)}
      {...props}
    />
  ),
)
TableHead.displayName = 'TableHead'

export interface TableCellProps extends Omit<TdHTMLAttributes<HTMLTableCellElement>, 'align'> {
  /**
   * Text alignment of the cell.
   * @default 'start'
   */
  align?: TableAlign
}

/** A data cell (`<td>`). */
export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ align = 'start', className, ...props }, ref) => (
    <td
      ref={ref}
      className={cn('st-table__cell', `st-table__cell--${align}`, className)}
      {...props}
    />
  ),
)
TableCell.displayName = 'TableCell'

/**
 * A table caption (`<caption>`) — the preferred source of the table's
 * accessible name. Rendered above the table body.
 */
export const TableCaption = forwardRef<
  HTMLTableCaptionElement,
  HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption ref={ref} className={cn('st-table__caption', className)} {...props} />
))
TableCaption.displayName = 'TableCaption'
