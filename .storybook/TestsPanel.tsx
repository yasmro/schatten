// The manager bundle compiles JSX with the classic runtime and maps `react` to
// the manager's own copy, so React must be in scope (the automatic runtime
// would bundle a second React and fail at render).
// biome-ignore lint/correctness/noUnusedImports: classic JSX runtime in the manager bundle needs React in scope
import React, { type ReactNode } from 'react'
import { AddonPanel } from 'storybook/internal/components'
import { useStorybookApi, useStorybookState } from 'storybook/manager-api'
import { styled } from 'storybook/theming'
import catalog from '../src/docs/__generated__/test-catalog.json'

/*
 * The "Tests" tab in the addon panel (#641). For the component being viewed it
 * lists, per quality aspect of docs/quality-definition.md, which tests exist
 * and which are missing; the story being viewed gets its own VRT / axe line at
 * the top. Aspect names and order follow that document — rename both together.
 *
 * Data comes from `src/docs/__generated__/test-catalog.json`, written by
 * `pnpm update:test-catalog` (test titles and static source checks only;
 * nothing runs here). So the tab answers stage 1 of the document ("are the
 * required tests prepared?"), not stage 2 ("do they pass?" — CI) or stage 3
 * ("are they enough?" — a reviewer reading the titles).
 */

const QUALITY_DEFINITION_URL =
  'https://github.com/yasmro/schatten/blob/develop/docs/quality-definition.md'

type UnitTest = { file: string; group: string; title: string }
type Screenshot = { file: string; story: string; screenshot: string[]; a11y: string[] }
type Interaction = { file: string; title: string }
// `status` is decided by `aspectStatuses()` in the generator (unit-tested);
// this tab only renders it.
type AspectStatus = 'prepared' | 'missing' | 'na'
type Aspects = {
  behaviour: { required: { case: string; ok: boolean }[]; status: AspectStatus }
  a11y: {
    role: string | null
    roleTest: boolean | null
    exceptions: string[]
    status: AspectStatus
  }
  visual: {
    notInRoster: { story: string; skip: 'by rule' | 'documented' | 'undocumented' }[]
    status: AspectStatus
  }
  interaction: { required: boolean; status: AspectStatus }
  parity: { required: boolean; present: boolean; status: AspectStatus }
}
type Entry = {
  level: string
  unit: UnitTest[]
  screenshots: Screenshot[]
  interactions: Interaction[]
  aspects: Aspects
}

type Status = AspectStatus | 'library'

// Status is spelled out in text as well as colour (css-api.md: colour alone is not enough).
const STATUS: Record<Status, { label: string; tone: 'positive' | 'warning' | 'muted' }> = {
  prepared: { label: '✓ Prepared', tone: 'positive' },
  missing: { label: '! Missing', tone: 'warning' },
  na: { label: '– Not applicable', tone: 'muted' },
  library: { label: '◎ Library-wide', tone: 'muted' },
}

const Wrapper = styled.div(({ theme }) => ({
  padding: '12px 16px',
  fontSize: theme.typography.size.s2,
  color: theme.color.defaultText,
  lineHeight: 1.6,
}))

const Heading = styled.h3(({ theme }) => ({
  margin: '16px 0 6px',
  fontSize: theme.typography.size.s2,
  fontWeight: theme.typography.weight.bold,
  '&:first-of-type': { marginTop: 0 },
}))

const Muted = styled.span(({ theme }) => ({ color: theme.textMutedColor }))

const Pill = styled.span<{ tone: 'positive' | 'warning' | 'muted' }>(({ theme, tone }) => ({
  display: 'inline-block',
  whiteSpace: 'nowrap',
  fontWeight: theme.typography.weight.bold,
  color:
    tone === 'positive'
      ? theme.color.positiveText
      : tone === 'warning'
        ? theme.color.warningText
        : theme.textMutedColor,
}))

const Table = styled.table(({ theme }) => ({
  borderCollapse: 'collapse',
  width: '100%',
  'th, td': {
    textAlign: 'left',
    verticalAlign: 'top',
    padding: '6px 12px 6px 0',
    borderBottom: `1px solid ${theme.appBorderColor}`,
  },
  th: { fontWeight: theme.typography.weight.bold },
  ul: { margin: 0, paddingLeft: 16 },
  details: { marginTop: 4 },
  summary: { cursor: 'pointer', color: theme.textMutedColor },
}))

const fileName = (path: string) => path.split('/').at(-1)

const Rows = ({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) => (
  <Table>
    <thead>
      <tr>
        {headers.map((h) => (
          <th key={h} scope="col">
            {h}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((cells, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static rows, never reordered
        <tr key={i}>
          {cells.map((c, j) => (
            <td key={headers[j]}>{c}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </Table>
)

const StatusPill = ({ status }: { status: Status }) => (
  <Pill tone={STATUS[status].tone}>{STATUS[status].label}</Pill>
)

const Details = ({ label, children }: { label: string; children: ReactNode }) => (
  <details>
    <summary>{label}</summary>
    {children}
  </details>
)

const List = ({ items }: { items: ReactNode[] }) => (
  <ul>
    {items.map((item, i) => (
      // biome-ignore lint/suspicious/noArrayIndexKey: static list, never reordered
      <li key={i}>{item}</li>
    ))}
  </ul>
)

function groupBy<T>(items: T[], key: (item: T) => string) {
  const groups = new Map<string, T[]>()
  for (const item of items) groups.set(key(item), [...(groups.get(key(item)) ?? []), item])
  return [...groups]
}

/** One row per quality aspect: [aspect, status, evidence]. */
function aspectRows(entry: Entry): ReactNode[][] {
  const { aspects: a } = entry
  const shots = entry.screenshots.reduce((n, s) => n + s.screenshot.length, 0)
  const axe = entry.screenshots.reduce((n, s) => n + s.a11y.length, 0)

  return [
    [
      '1. Behaviour',
      <StatusPill key="s" status={a.behaviour.status} />,
      <>
        {entry.unit.length} unit tests (jsdom).{' '}
        {a.behaviour.required.map((r) => `${r.ok ? '✓' : '✗'} ${r.case}`).join(' · ')}
        <Details label="Test titles">
          <List
            items={groupBy(entry.unit, (t) => t.group).map(([group, tests]) => (
              <>
                <strong>{group || '(no describe)'}</strong>
                <List items={tests.map((t) => t.title)} />
              </>
            ))}
          />
        </Details>
      </>,
    ],
    [
      '2. Accessibility',
      <StatusPill key="s" status={a.a11y.status} />,
      <>
        {a.a11y.role
          ? `${a.a11y.roleTest ? '✓' : '✗'} getByRole('${a.a11y.role}', { name })`
          : 'No role + name contract on the root (named through a part or Field).'}{' '}
        · {axe} axe scans (WCAG 2.1 A/AA)
        {a.a11y.exceptions.length > 0 && (
          <> · documented exception: {a.a11y.exceptions.join(', ')}</>
        )}
      </>,
    ],
    [
      '3. Visual',
      <StatusPill key="s" status={a.visual.status} />,
      <>
        {shots} screenshots across {new Set(entry.screenshots.map((s) => s.story)).size} stories.
        {a.visual.notInRoster.length > 0 && (
          <Details label={`${a.visual.notInRoster.length} stories outside the VRT roster`}>
            <List
              items={a.visual.notInRoster.map((s) => (
                <>
                  {s.story} —{' '}
                  {s.skip === 'undocumented' ? <strong>no reason given</strong> : s.skip}
                </>
              ))}
            />
          </Details>
        )}
      </>,
    ],
    [
      '4. Real-browser interaction',
      <StatusPill key="s" status={a.interaction.status} />,
      <>
        {a.interaction.required
          ? 'Required (JS-driven component). '
          : 'Not required (static or browser-handled). '}
        {entry.interactions.length} Playwright interaction tests.
        {entry.interactions.length > 0 && (
          <Details label="Test titles">
            <List
              items={entry.interactions.map((t) => t.title.split(' / ').slice(1).join(' / '))}
            />
          </Details>
        )}
      </>,
    ],
    [
      '5. CSS-only parity',
      <StatusPill key="s" status={a.parity.status} />,
      a.parity.required
        ? `${a.parity.present ? '✓' : '✗'} React vs vanilla HTML screenshot`
        : entry.level === 'lv2'
          ? 'lv2 is React-only.'
          : 'JS-driven (class C/D): covered by the manifest and the class-API unit test.',
    ],
    [
      '6. Public API',
      <StatusPill key="s" status="library" />,
      'Typecheck, Radix type boundary, CSS variable registrar, ESM-only check, size-limit, manifest diff, changeset — checked for the whole library in CI.',
    ],
    [
      '7. Theme & state colour',
      <StatusPill key="s" status="library" />,
      'resolution.test, solid-contrast.test, state-color-inheritance.test — checked for the whole library in CI.',
    ],
  ]
}

const TestsContent = () => {
  const api = useStorybookApi()
  const { storyId } = useStorybookState()
  const story = storyId ? api.getCurrentStoryData() : undefined
  if (!story) return <Muted>No story selected.</Muted>

  const component = story.title.split('/').at(-1) ?? ''
  const entry = (catalog as unknown as Record<string, Entry>)[component]
  if (!entry) return <Muted>No tests are catalogued for “{story.title}”.</Muted>

  const storySlug = story.id.split('--')[1]
  const forStory = entry.screenshots.filter((s) => s.story === storySlug)
  const skipped = entry.aspects.visual.notInRoster.find((s) => s.story === storySlug)

  return (
    <>
      <Heading>This story — {story.name}</Heading>
      {forStory.length > 0 ? (
        forStory.map((s) => (
          <div key={s.file}>
            Screenshot: {s.screenshot.join(' / ') || '—'} · axe: {s.a11y.join(' / ') || '—'}{' '}
            <Muted>({fileName(s.file)})</Muted>
          </div>
        ))
      ) : (
        <Muted>
          Not in the VRT roster
          {skipped
            ? ` — ${skipped.skip === 'undocumented' ? 'no reason given' : skipped.skip}`
            : ''}
          .
        </Muted>
      )}

      <Heading>{component} — quality by aspect</Heading>
      <Rows headers={['Aspect', 'Status', 'Evidence']} rows={aspectRows(entry)} />
      <p>
        <Muted>
          “Prepared” is stage 1 of the{' '}
          <a href={QUALITY_DEFINITION_URL} target="_blank" rel="noreferrer">
            quality definition
          </a>
          : the required tests exist. Whether they pass is CI (stage 2); whether they are enough is
          a reviewer's call (stage 3) — read the test titles.
        </Muted>
      </p>
    </>
  )
}

export const TestsPanel = ({ active }: { active?: boolean }) => (
  <AddonPanel active={!!active}>
    <Wrapper>{active ? <TestsContent /> : null}</Wrapper>
  </AddonPanel>
)
