import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { describe, expect, it, vi } from 'vitest'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './Table'

/** A complete, valid table so cell / row roles resolve and DOM nesting is clean. */
function Sample(props: React.ComponentProps<typeof Table>) {
  return (
    <Table {...props}>
      <TableCaption data-testid="caption">Users</TableCaption>
      <TableHeader data-testid="header">
        <TableRow data-testid="head-row">
          <TableHead data-testid="head">Name</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody data-testid="body">
        <TableRow data-testid="row">
          <TableCell data-testid="cell">Taro</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

describe('Table', () => {
  describe('structure', () => {
    it('renders each part as the right element with its block class', () => {
      render(<Sample data-testid="table" />)
      const table = screen.getByTestId('table')
      expect(table.tagName).toBe('TABLE')
      expect(table).toHaveClass('st-table', 'st-table--md')

      expect(screen.getByTestId('caption').tagName).toBe('CAPTION')
      expect(screen.getByTestId('caption')).toHaveClass('st-table__caption')
      expect(screen.getByTestId('header').tagName).toBe('THEAD')
      expect(screen.getByTestId('header')).toHaveClass('st-table__header')
      expect(screen.getByTestId('body').tagName).toBe('TBODY')
      expect(screen.getByTestId('body')).toHaveClass('st-table__body')
      expect(screen.getByTestId('row').tagName).toBe('TR')
      expect(screen.getByTestId('row')).toHaveClass('st-table__row')
      expect(screen.getByTestId('head').tagName).toBe('TH')
      expect(screen.getByTestId('head')).toHaveClass('st-table__head', 'st-table__head--start')
      expect(screen.getByTestId('cell').tagName).toBe('TD')
      expect(screen.getByTestId('cell')).toHaveClass('st-table__cell', 'st-table__cell--start')
    })

    it('wraps the table in a .st-table-scroll container; className + props land on the table', () => {
      render(<Table data-testid="table" className="custom" aria-label="x" />)
      const table = screen.getByTestId('table')
      expect(table.tagName).toBe('TABLE')
      expect(table).toHaveClass('st-table', 'custom')
      expect(table.parentElement).toHaveClass('st-table-scroll')
    })
  })

  describe('ref forwarding', () => {
    it('forwards refs to the underlying table elements', () => {
      const table = createRef<HTMLTableElement>()
      const caption = createRef<HTMLTableCaptionElement>()
      const head = createRef<HTMLTableCellElement>()
      const cell = createRef<HTMLTableCellElement>()
      render(
        <Table ref={table}>
          <TableCaption ref={caption}>Users</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead ref={head}>Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell ref={cell}>Taro</TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      )
      expect(table.current?.tagName).toBe('TABLE')
      expect(caption.current?.tagName).toBe('CAPTION')
      expect(head.current?.tagName).toBe('TH')
      expect(cell.current?.tagName).toBe('TD')
    })
  })

  describe('accessibility', () => {
    it('is named by its caption', () => {
      render(<Sample />)
      expect(screen.getByRole('table', { name: 'Users' })).toBeInTheDocument()
    })

    it('is named by aria-label when no caption is present', () => {
      render(
        <Table aria-label="Members">
          <TableBody>
            <TableRow>
              <TableCell>Taro</TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      )
      expect(screen.getByRole('table', { name: 'Members' })).toBeInTheDocument()
    })

    it('exposes columnheader and cell roles', () => {
      render(<Sample />)
      const table = screen.getByRole('table')
      expect(within(table).getByRole('columnheader', { name: 'Name' })).toBeInTheDocument()
      expect(within(table).getByRole('cell', { name: 'Taro' })).toBeInTheDocument()
    })
  })

  describe('treatments', () => {
    it('applies size / striped / bordered / hoverable modifiers when set', () => {
      render(<Table data-testid="t" size="lg" striped bordered hoverable />)
      expect(screen.getByTestId('t')).toHaveClass(
        'st-table',
        'st-table--lg',
        'st-table--striped',
        'st-table--bordered',
        'st-table--hoverable',
      )
    })

    it('omits the treatment modifiers by default', () => {
      render(<Table data-testid="t" />)
      const t = screen.getByTestId('t')
      expect(t).toHaveClass('st-table', 'st-table--md')
      expect(t).not.toHaveClass('st-table--striped', 'st-table--bordered', 'st-table--hoverable')
    })
  })

  describe('align', () => {
    it('emits the alignment modifier on head and cell', () => {
      render(
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead align="center" data-testid="h">
                H
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell align="end" data-testid="c">
                C
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      )
      expect(screen.getByTestId('h')).toHaveClass('st-table__head--center')
      expect(screen.getByTestId('c')).toHaveClass('st-table__cell--end')
    })
  })

  describe('selected', () => {
    it('sets data-state="selected" when selected', () => {
      render(
        <Table>
          <TableBody>
            <TableRow selected data-testid="r">
              <TableCell>x</TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      )
      expect(screen.getByTestId('r')).toHaveAttribute('data-state', 'selected')
    })

    it('omits data-state when not selected', () => {
      render(
        <Table>
          <TableBody>
            <TableRow data-testid="r">
              <TableCell>x</TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      )
      expect(screen.getByTestId('r')).not.toHaveAttribute('data-state')
    })
  })

  describe('pass-through contract', () => {
    it('forwards behavioural hooks (onClick / aria-sort) on a header cell', async () => {
      const user = userEvent.setup()
      const onClick = vi.fn()
      render(
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead data-testid="h" aria-sort="ascending" onClick={onClick}>
                Name
              </TableHead>
            </TableRow>
          </TableHeader>
        </Table>,
      )
      const head = screen.getByTestId('h')
      expect(head).toHaveAttribute('aria-sort', 'ascending')
      await user.click(head)
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })
})
