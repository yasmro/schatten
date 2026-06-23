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

/**
 * Parity story — the React `<Table>` compound and a hand-written vanilla
 * `<table>` tree carrying the matching `.st-table*` class chain must render
 * pixel-identical. Backs the VRT in `Table.parity.vrt.spec.ts`.
 *
 * The React `<Table>` import pulls in `Table.css` as a side effect, so the
 * `.st-table*` rules are loaded for the vanilla half too. Both halves use
 * `striped bordered` so the treatment descendant selectors are exercised.
 */
const meta: Meta<typeof Table> = {
  title: 'Components/lv1/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Table>

export const Parity: Story = {
  name: 'React vs Vanilla HTML',
  render: () => (
    <div className="grid grid-cols-2 gap-12">
      <div>
        <p className="mb-2 text-xs text-foreground-muted">React</p>
        <div className="w-[320px]">
          <Table striped bordered>
            <TableCaption>Team members</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead align="end">Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Taro Tanaka</TableCell>
                <TableCell align="end">Admin</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Hanako Sato</TableCell>
                <TableCell align="end">Editor</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs text-foreground-muted">Vanilla HTML</p>
        <div className="w-[320px]">
          <div className="st-table-scroll">
            <table className="st-table st-table--md st-table--striped st-table--bordered">
              <caption className="st-table__caption">Team members</caption>
              <thead className="st-table__header">
                <tr className="st-table__row">
                  <th className="st-table__head st-table__head--start">Name</th>
                  <th className="st-table__head st-table__head--end">Role</th>
                </tr>
              </thead>
              <tbody className="st-table__body">
                <tr className="st-table__row">
                  <td className="st-table__cell st-table__cell--start">Taro Tanaka</td>
                  <td className="st-table__cell st-table__cell--end">Admin</td>
                </tr>
                <tr className="st-table__row">
                  <td className="st-table__cell st-table__cell--start">Hanako Sato</td>
                  <td className="st-table__cell st-table__cell--end">Editor</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  ),
}
