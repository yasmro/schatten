import type { Meta, StoryObj } from '@storybook/react-vite'
import { DocsTable, Lead, Note, PageTitle, SectionTitle } from '../../docs/docs-ui'

const meta: Meta = {
  title: 'PoC/DateCalendar/Overview',
  parameters: { layout: 'fullscreen' },
}
export default meta

const row = (key: string, ...cells: string[]) => ({ key, cells })

export const Overview: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-4 p-8 max-w-5xl">
      <PageTitle>PoC #566 — DateCalendar: self-built vs react-day-picker</PageTitle>
      <Lead>
        Throwaway proof of concept for issue #566. Nothing under PoC/ ships; the draft PR exists so
        the behaviour can be compared in Storybook. See “Implementation” for side-by-side behaviour
        and “Value Type” for the public value type question.
      </Lead>

      <SectionTitle>Measured results</SectionTitle>
      <DocsTable
        caption="Measured comparison of the two implementations"
        headers={['Aspect', 'Self (Date + Intl)', 'react-day-picker v10.0.2']}
        rows={[
          row('axe', 'axe (WCAG 2.1 A/AA, light + dark)', '0 violations', '0 violations'),
          row(
            'kbd',
            'Keyboard (arrows, month crossing, PageUp/Down, Home/End, Enter)',
            'All pass',
            'All pass',
          ),
          row(
            'size',
            'components/lv1 (all), budget 64 KB',
            '58.9 KB (+1.3 KB)',
            '75.83 KB (+18.3 KB, over budget)',
          ),
          row('deps', 'Runtime dependencies', 'None', 'date-fns ^4, @date-fns/tz'),
          row(
            'range',
            'Range state as data-* attributes',
            'Native',
            'Class names only — needs a Day override',
          ),
          row('loc', 'Locale', 'String → Intl', 'date-fns Locale object (ja ≈ 9.9 KB)'),
          row(
            'cons',
            'Range min/max days',
            'Invalid ends disabled up front',
            'Invalid click silently restarts the range',
          ),
          row('extra', 'Beyond #567 scope', 'Not built (animation, multiple)', 'Built in'),
          row(
            'reuse',
            'Month matrix reusable for a future EventCalendar',
            'Yes (pure, React-free)',
            'No',
          ),
          row(
            'bugs',
            'Bugs found while building',
            'Focus/state desync; fa-IR non-Gregorian digits (both fixed)',
            '—',
          ),
        ]}
      />

      <SectionTitle>Value type (Date vs ISO string), measured in 4 time zones</SectionTitle>
      <DocsTable
        caption="Value returned after clicking Sep 6 2026"
        headers={[
          'Approach',
          'Tokyo',
          'Los Angeles',
          'Santiago (no 00:00 on Sep 6)',
          'Kiritimati (UTC+14)',
        ]}
        rows={[
          row(
            'iso',
            'ISO string (self, or rdp + wrapper)',
            '2026-09-06',
            '2026-09-06',
            '2026-09-06',
            '2026-09-06',
          ),
          row(
            'date',
            'Raw Date → JSON / toISOString',
            '2026-09-05',
            '2026-09-06',
            '2026-09-06 (01:00)',
            '2026-09-05',
          ),
          row(
            'tz',
            'rdp timeZone + plain local Date',
            'August shown, no Sep 6 cell',
            'OK',
            'OK',
            'August shown, no Sep 6 cell',
          ),
        ]}
      />
      <Note>
        Other libraries: React Aria / Ark / Chakra use a dedicated plain-date type
        (@internationalized/date); Mantine returns 'YYYY-MM-DD' strings; MUI X uses date-library
        adapters; shadcn/ui wraps react-day-picker (Date).
      </Note>
    </div>
  ),
}
