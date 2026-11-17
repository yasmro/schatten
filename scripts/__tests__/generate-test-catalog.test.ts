import { describe, expect, it } from 'vitest'
import {
  aspectStatuses,
  classifySpecTitle,
  componentOf,
  parseUnitName,
  serializeCatalog,
  storyIdsFromSource,
} from '../generate-test-catalog.mjs'

describe('componentOf', () => {
  it('reads the level and name from a component path', () => {
    expect(componentOf('src/components/lv1/Button/Button.test.tsx')).toEqual({
      level: 'lv1',
      name: 'Button',
    })
    expect(componentOf('src/components/lv2/DatePicker/DatePicker.vrt.spec.ts')).toEqual({
      level: 'lv2',
      name: 'DatePicker',
    })
  })

  it('ignores files outside a component directory', () => {
    expect(componentOf('src/docs/Welcome.drift.test.ts')).toBeNull()
    expect(componentOf('src/components/__tests__/radix-type-boundary.test.tsx')).toBeNull()
  })
})

describe('parseUnitName', () => {
  it('drops the top-level describe and keeps the nested ones as the group', () => {
    expect(parseUnitName('Button > isLoading > sets aria-busy')).toEqual({
      group: 'isLoading',
      title: 'sets aria-busy',
    })
    expect(parseUnitName('Select > inside <Field> > disabled > disables the trigger')).toEqual({
      group: 'inside <Field> › disabled',
      title: 'disables the trigger',
    })
  })

  it('leaves the group empty for a test directly under the top-level describe', () => {
    expect(parseUnitName('Button > renders with default props')).toEqual({
      group: '',
      title: 'renders with default props',
    })
  })
})

describe('classifySpecTitle', () => {
  it('reads a screenshot test from the `<Prefix> / <story> / <theme>` title', () => {
    expect(classifySpecTitle('Button / all-variants / dark')).toEqual({
      kind: 'screenshot',
      story: 'all-variants',
      theme: 'dark',
    })
  })

  it('reads an axe test from the trailing `/ a11y`', () => {
    expect(classifySpecTitle('Button / all-variants / light / a11y')).toEqual({
      kind: 'a11y',
      story: 'all-variants',
      theme: 'light',
    })
  })

  it('treats any other title as an interaction test', () => {
    expect(classifySpecTitle('Button / filled variants darken their label on hover')).toEqual({
      kind: 'interaction',
    })
    expect(classifySpecTitle('Toast / close button dismisses on real click')).toEqual({
      kind: 'interaction',
    })
  })
})

describe('storyIdsFromSource', () => {
  it('derives story ids from export names the way Storybook does', () => {
    const source = [
      'export const Playground: Story = {}',
      'export const AllVariants: Story = {}',
      'export const IconOnly = {}',
      'const helper = 1',
      'export default meta',
    ].join('\n')
    expect(storyIdsFromSource(source)).toEqual(['playground', 'all-variants', 'icon-only'])
  })
})

describe('serializeCatalog', () => {
  it('orders components by name and tests by file, keeping the in-file order', () => {
    const catalog = {
      Card: { level: 'lv1', unit: [], screenshots: [], interactions: [] },
      Button: {
        level: 'lv1',
        unit: [
          { file: 'b.test.tsx', group: '', title: 'second file' },
          { file: 'a.test.tsx', group: '', title: 'first in a' },
          { file: 'a.test.tsx', group: '', title: 'second in a' },
        ],
        screenshots: [],
        interactions: [],
      },
    }
    const parsed = JSON.parse(serializeCatalog(catalog))
    expect(Object.keys(parsed)).toEqual(['Button', 'Card'])
    expect(parsed.Button.unit.map((t: { title: string }) => t.title)).toEqual([
      'first in a',
      'second in a',
      'second file',
    ])
  })
})

describe('aspectStatuses', () => {
  type Entry = Parameters<typeof aspectStatuses>[0]

  // A component with every aspect in place: the baseline each test varies.
  function entry(overrides: {
    unit?: unknown[]
    screenshots?: Entry['screenshots']
    interactions?: unknown[]
    aspects?: Partial<Entry['aspects']>
  }): Entry {
    return {
      unit: overrides.unit ?? [{}],
      screenshots: overrides.screenshots ?? [{ screenshot: ['light'], a11y: ['light'] }],
      interactions: overrides.interactions ?? [],
      aspects: {
        behaviour: { required: [{ ok: true }] },
        a11y: { role: 'button', roleTest: true },
        visual: { notInRoster: [{ skip: 'by rule' }] },
        interaction: { required: false },
        parity: { required: true, present: true },
        ...overrides.aspects,
      },
    }
  }

  it('reports every aspect as prepared when the required tests exist', () => {
    expect(aspectStatuses(entry({}))).toEqual({
      behaviour: 'prepared',
      a11y: 'prepared',
      visual: 'prepared',
      interaction: 'na',
      parity: 'prepared',
    })
  })

  it('reports behaviour as missing with no unit test, even when nothing is required', () => {
    const e = entry({ unit: [], aspects: { behaviour: { required: [] } } })
    expect(aspectStatuses(e).behaviour).toBe('missing')
  })

  it('reports behaviour as missing when a required common case is absent', () => {
    const e = entry({ aspects: { behaviour: { required: [{ ok: true }, { ok: false }] } } })
    expect(aspectStatuses(e).behaviour).toBe('missing')
  })

  it('reports accessibility as missing with no axe scan, even without a role contract', () => {
    const e = entry({
      screenshots: [{ screenshot: ['light'], a11y: [] }],
      aspects: { a11y: { role: null, roleTest: null } },
    })
    expect(aspectStatuses(e).a11y).toBe('missing')
  })

  it('reports accessibility as missing when the role + name test is absent', () => {
    const e = entry({ aspects: { a11y: { role: 'button', roleTest: false } } })
    expect(aspectStatuses(e).a11y).toBe('missing')
  })

  it('reports visual as missing for a story skipped without a reason', () => {
    const e = entry({ aspects: { visual: { notInRoster: [{ skip: 'undocumented' }] } } })
    expect(aspectStatuses(e).visual).toBe('missing')
  })

  it('reports interaction as missing only when the component requires one', () => {
    const required = entry({ aspects: { interaction: { required: true } } })
    expect(aspectStatuses(required).interaction).toBe('missing')
    const optional = entry({ interactions: [{}] })
    expect(aspectStatuses(optional).interaction).toBe('prepared')
  })

  it('reports parity as not applicable when the component is exempt', () => {
    const e = entry({ aspects: { parity: { required: false, present: false } } })
    expect(aspectStatuses(e).parity).toBe('na')
  })
})
