// Single source of truth for every site → Storybook link (#449 論点 (2) の
// リンク整合の site 側)。Base.astro のヘッダーも components ページの一覧も
// ここを通る。#502 で Storybook の URL が動くときは、この 1 ファイルだけ直す。
//
// Plain .mjs on purpose: the drift gate (scripts/check-storybook-links.mjs)
// runs under bare Node and must import the SAME derivation the pages use —
// a .ts copy would be a second source of truth.

export const STORYBOOK_ORIGIN = 'https://yasmro.github.io/schatten/storybook/'

/**
 * Autodocs URL for an lv1 component.
 *
 * Storybook derives the story slug from the title `Components/lv1/{Name}`
 * via sanitize() — lowercase, non-alphanumerics to `-`. Every lv1 name is
 * plain alphanumeric (the drift gate asserts this), so the slug is just the
 * lowercased name.
 *
 * @param {string} name - lv1 component name, e.g. "Button", "DropdownMenu"
 * @returns {string}
 */
export function storybookDocsUrl(name) {
  return `${STORYBOOK_ORIGIN}?path=/docs/components-lv1-${name.toLowerCase()}--docs`
}
