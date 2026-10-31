import { describe, expect, it } from 'vitest'
import {
  baselinePath,
  type StoryEntry,
  SYSTEM_WIDE_STORIES,
  selectStories,
  selectVisualFiles,
} from '../capture-review-shots.mjs'

// Unit tests for the pure helpers behind `pnpm review:shots`. Booting Storybook
// and Playwright is the CLI's job; which stories a diff maps to is the part
// that can silently go wrong (the reviewer would judge the wrong images).

function story(id: string, title: string, importPath: string, type = 'story'): StoryEntry {
  return { id, title, type, importPath }
}

const button = './src/components/lv1/Button/Button.stories.tsx'
const badge = './src/components/lv1/Badge/Badge.stories.tsx'
const color = './src/docs/Color.stories.tsx'

const entries: StoryEntry[] = [
  story('components-lv1-button--docs', 'Components/lv1/Button', button, 'docs'),
  story('components-lv1-button--playground', 'Components/lv1/Button', button),
  story('components-lv1-button--all-variants', 'Components/lv1/Button', button),
  story('components-lv1-button--sizes', 'Components/lv1/Button', button),
  story('components-lv1-button--icons', 'Components/lv1/Button', button),
  story('components-lv1-button--parity', 'Components/lv1/Button', button),
  story('components-lv1-badge--variants', 'Components/lv1/Badge', badge),
  story('tokens-color--colors', 'Tokens/Color', color),
  story(
    'theming-seasonal-showcase--eight-seasons',
    'Theming/Seasonal Showcase',
    './src/docs/foundations/SeasonalShowcase.stories.tsx',
  ),
]

const ids = (stories: StoryEntry[]) => stories.map((s) => s.id)

describe('selectVisualFiles', () => {
  it('keeps component, variant, token, and docs sources', () => {
    const files = [
      'src/components/lv1/Button/Button.css',
      'src/components/lv2/DatePicker/DatePicker.tsx',
      'src/variants/button.ts',
      'src/core/tokens/semantic.css',
      'src/themes/seasonal/themes.css',
      'src/docs/Color.stories.tsx',
      'src/components/lv1/Button/__snapshots__/sizes-light.png',
    ]
    expect(selectVisualFiles(files)).toEqual(files)
  })

  it('drops tests, specs, and non-rendering files', () => {
    expect(
      selectVisualFiles([
        'src/components/lv1/Button/Button.test.tsx',
        'src/components/lv1/Button/Button.vrt.spec.ts',
        'src/docs/Motion.drift.test.ts',
        'src/core/tokens/__tests__/resolution.test.ts',
        '.claude/commands/review-pr.md',
        'scripts/audit-coverage.mjs',
        'README.md',
      ]),
    ).toEqual([])
  })
})

describe('selectStories', () => {
  it('maps a component file to the stories in the same directory', () => {
    const { selected } = selectStories(['src/components/lv1/Button/Button.css'], entries)
    expect(ids(selected)).toEqual([
      'components-lv1-button--all-variants',
      'components-lv1-button--sizes',
    ])
  })

  it('reports stories past the per-title cap as omitted only when they were matched', () => {
    const { omitted } = selectStories(['src/components/lv1/Button/Button.css'], entries)
    expect(ids(omitted)).toEqual(['components-lv1-button--icons'])
  })

  it('skips playground, parity, and docs entries', () => {
    const { selected, omitted } = selectStories(['src/components/lv1/Button/Button.tsx'], entries)
    const seen = ids([...selected, ...omitted])
    expect(seen).not.toContain('components-lv1-button--playground')
    expect(seen).not.toContain('components-lv1-button--parity')
    expect(seen).not.toContain('components-lv1-button--docs')
  })

  it('maps a variants file to its component case-insensitively', () => {
    const { selected } = selectStories(['src/variants/badge.ts'], entries)
    expect(ids(selected)).toEqual(['components-lv1-badge--variants'])
  })

  it('maps a re-baselined snapshot back to its component', () => {
    const { selected } = selectStories(
      ['src/components/lv1/Badge/__snapshots__/variants-light.png'],
      entries,
    )
    expect(ids(selected)).toEqual(['components-lv1-badge--variants'])
  })

  it('maps a docs story only to itself', () => {
    const { selected } = selectStories(['src/docs/Color.stories.tsx'], entries)
    expect(ids(selected)).toEqual(['tokens-color--colors'])
  })

  it('maps token and theme files to the system-wide stories', () => {
    const { selected } = selectStories(['src/core/tokens/semantic.css'], entries)
    expect(ids(selected).sort()).toEqual([...SYSTEM_WIDE_STORIES].sort())
  })

  it('gives every title its first story before any title gets a second', () => {
    const { selected } = selectStories(
      ['src/components/lv1/Button/Button.css', 'src/components/lv1/Badge/Badge.css'],
      entries,
      { limit: 2 },
    )
    expect(ids(selected)).toEqual([
      'components-lv1-button--all-variants',
      'components-lv1-badge--variants',
    ])
  })

  it('returns nothing when no story matches', () => {
    const { selected } = selectStories(['src/components/lv1/Ghost/Ghost.tsx'], entries)
    expect(selected).toEqual([])
  })
})

describe('baselinePath', () => {
  it('follows the {story}-{theme}.png snapshot convention', () => {
    expect(
      baselinePath(story('components-lv1-button--all-variants', 'Button', button), 'dark'),
    ).toBe('src/components/lv1/Button/__snapshots__/all-variants-dark.png')
  })
})
