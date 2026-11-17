import { describe, expect, it } from 'vitest'
import {
  classifySpecTitle,
  componentOf,
  parseUnitName,
  serializeCatalog,
  skipReason,
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

describe('skipReason', () => {
  const spec = [
    'const stories = [',
    "  'all-variants',",
    "  // 'states' — visual covered by 'full-matrix'",
    '] as const',
  ].join('\n')

  it('treats Playground as skipped by rule', () => {
    expect(skipReason('playground', spec)).toBe('by rule')
    expect(skipReason('playground-story', spec)).toBe('by rule')
  })

  it('accepts a story named in a skip comment', () => {
    expect(skipReason('states', spec)).toBe('documented')
  })

  it('flags a story that is neither in the roster nor named in a comment', () => {
    expect(skipReason('solid-treatments', spec)).toBe('undocumented')
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
