# @yasmro/schatten

## 0.11.0

### Minor Changes

- [#379](https://github.com/yasmro/schatten/pull/379) [`29a272c`](https://github.com/yasmro/schatten/commit/29a272c6eb173733b04c8d894c9be56ebad11b11) Thanks [@yasmro](https://github.com/yasmro)! - feat(lv1): FieldContext に `labelId` を追加 — Field label が self-labelled / group コンポーネントの accessible name になるように ([#345](https://github.com/yasmro/schatten/issues/345))

  - `FieldContextValue` に `labelId?: string` を追加 (additive)。`<Field label>` が描画する `<label>` 要素に id が付き、context 経由で参照できます。
  - `Checkbox` / `Switch` は自前の `label` prop が無く、`aria-label` / `aria-labelledby` の明示指定も無い場合に限り、Field の label を `aria-labelledby` で参照します。`<Field label="Notifications"><Switch /></Field>` がスクリーンリーダーで「Notifications」と読み上げられるようになります (従来は無名 — axe `button-name` 違反)。
  - `RadioGroup` は group root (`role="radiogroup"`) で Field label を `aria-labelledby` 参照します (radiogroup は `htmlFor` では命名できないため)。
  - 優先順位: 明示の `aria-label` / `aria-labelledby` > 自前 `label` > Field の `labelId`。既存の利用形 (自前 label あり / Field 外) の出力 DOM は不変です。
  - 既知の限界: Field label クリックでの focus / toggle 連動は self-labelled コンポーネントでは効きません (SR 名の配線のみ)。

- [#378](https://github.com/yasmro/schatten/pull/378) [`9c8dcd1`](https://github.com/yasmro/schatten/commit/9c8dcd187e4a763e532303bd71f19506f5612b4d) Thanks [@yasmro](https://github.com/yasmro)! - BREAKING: 死蔵されていた `--transition-fast` / `--transition-normal` / `--transition-slow`（CSS 変数）、`tokens.transition.*`、`TransitionToken` 型を削除。[#145](https://github.com/yasmro/schatten/issues/145) で deprecated 化済み・参照ゼロのため、pre-1.0 のうちに削除（[#350](https://github.com/yasmro/schatten/issues/350)）。

  移行表:

  | 旧                                        | 新                                                   |
  | ----------------------------------------- | ---------------------------------------------------- |
  | `var(--transition-fast)`（150ms ease）    | `var(--motion-base)`（150ms）+ easing は自分で指定   |
  | `var(--transition-normal)`（200ms ease）  | `var(--motion-expressive)`（200ms）+ 同上            |
  | `var(--transition-slow)`（300ms ease）    | 対応 step なし — 300ms 直書き、または 200ms へ寄せる |
  | `tokens.transition.*` / `TransitionToken` | `tokens.motion.*` / `MotionToken`                    |

  旧トークンは duration + easing を束ねた値（例 `150ms ease`）、新 `--motion-*` は duration 単体である点に注意（名前の対応も `fast` → `--motion-quick` ではなく `--motion-base`）。

  CSS API: `dist/schatten.css` の tokens layer から上記 3 変数が消える（`@theme` 未登録のため manifest 差分はなし）。再導入は `src/core/tokens/__tests__/no-transition-tokens.test.ts` のソース走査ガードが防ぐ。

- [#348](https://github.com/yasmro/schatten/pull/348) [`1f2538b`](https://github.com/yasmro/schatten/commit/1f2538b2f459c73f2b2a2c95d4881d19c015cf2d) Thanks [@yasmro](https://github.com/yasmro)! - CSS API: 用途別 semantic token を追加（shadow: `--shadow-card/popover/modal/toast`、radius: `--radius-control/surface/pill`、motion: `--motion-quick/base/expressive`）。`@theme` 登録済みで `tokens.ts` からも参照可能（`shadow.card` 等、新規 `motion` セクション + `MotionToken` 型）。

  既存コンポーネントは value-preserving に置換（視覚変更なし・VRT zero diff）: Dialog/Toast/Tooltip/Select の elevation を `--shadow-modal`(=lg)/`--shadow-toast`(=md)/`--shadow-popover`(=md) 経由に、Badge/Radio/Switch の pill を `--radius-pill`(=full) 経由に。standalone CSS 向けに literal fallback 付き。

  motion semantic は死蔵していた `--transition-*` ではなく生きている `--st-duration-*` のエイリアスとして定義。`tokens.ts` の `transition` セクションは `@deprecated` 注記。`--radius-control/surface` は定義のみ（Button/Input 等への角丸適用は別 spike）。

- [#354](https://github.com/yasmro/schatten/pull/354) [`84de0d0`](https://github.com/yasmro/schatten/commit/84de0d00847c0fc40622e12835cb3b117db94afb) Thanks [@yasmro](https://github.com/yasmro)! - feat(tokens): route Select content z-index through the `--z-popover` semantic
  token (was a hard-coded `50`). Visual no-op (50→60, the 51–60 band is otherwise
  empty) but fixes a latent Select-in-Dialog stacking case and removes the last
  hard-coded z-index in a component. Documents the reserved `0–100` z-index band
  in the README.

- [#374](https://github.com/yasmro/schatten/pull/374) [`4a5df43`](https://github.com/yasmro/schatten/commit/4a5df43e50741821cf652dabdb7740afc5730515) Thanks [@yasmro](https://github.com/yasmro)! - feat(theme): seasonal payoff 強化 — `--color-solid` ファミリーを theme ramp の段参照に再配線 ([#150](https://github.com/yasmro/schatten/issues/150))

  - `--color-solid` / `--color-solid-hover` / `--color-solid-foreground` / `--color-solid-foreground-hover` が theme ramp の段 (light: 700/900/100/300、dark: 300/100/800/700) を参照するようになりました。「Mode が段を選び、Special が ramp を供給する」モデルです。seasonal テーマ (`data-theme="season--*"`) を有効にすると、Button primary / Badge・Callout・Toast の neutral × solid が季節色で再着色されます。
  - default の theme scale (`--color-theme-50..950`) の解決先が blue → alabaster (中立 ramp) に変わりました。**Special 非適用時の solid 面の見た目は再配線前と完全に同一** (value-preserving) ですが、`bg-theme-*` ユーティリティや `tokens.theme*` (JS) を直接使っている場合は default 値が blue から warm neutral に変わります。
  - CSS 変数名・`.st-*` クラスの増減はありません (manifest 不変)。seasonal の allowlist (`['--color-theme-*']`) も不変で、Special が solid を直接書くことは引き続き禁止です。
  - 注意: custom property 連鎖の置換は宣言要素 (`:root`) で確定するため、`data-theme` は `<html>` に設定してください (サブツリーの wrapper では solid が再着色されません)。

- [#338](https://github.com/yasmro/schatten/pull/338) [`825a1e5`](https://github.com/yasmro/schatten/commit/825a1e59fd5556dcf3aa1945072910ac2ec6d619) Thanks [@yasmro](https://github.com/yasmro)! - BREAKING: `<Text>` no longer exposes the `asChild` prop. Text's
  polymorphism is already covered by two non-overlapping escape hatches —
  `as` (a closed enum of semantic tags `p` / `span` / `h1`–`h6`) for swapping
  the element, and `textVariants()` for applying Text's classes to an
  arbitrary element — so `asChild` was redundant (it merged nothing beyond
  `className` + spread DOM props, which `textVariants()` does with full
  typing).

  Migration: replace `<Text asChild><a href="…">…</a></Text>` with
  `<a href="…" className={textVariants({ /* variant, size, color, … */ })}>…</a>`.
  `textVariants` is exported from `@yasmro/schatten/variants`.

  Public `asChild` is now `Button` only. See `component-api-conventions.md`
  §"asChild vs `*Variants()` — which to reach for" for the boundary.

- [#351](https://github.com/yasmro/schatten/pull/351) [`0724e64`](https://github.com/yasmro/schatten/commit/0724e64f88949dd71a24c189f22ec344f17969e4) Thanks [@yasmro](https://github.com/yasmro)! - BREAKING: `--text-{body,label,heading}-{xs..2xl}-{size,leading,weight}` の 39 個の
  composite typography 変数を公開サーフェスから撤去。タイポグラフィの shorthand は
  `.st-text--{variant}.st-text--{size}` クラス API（および React `<Text>`）に一本化。

  CSS API: 上記 39 変数を manifest から削除。基底スケール（`--text-*` / `--leading-*`
  / `--font-*`）は存続。独自 CSS で composite 変数を参照していた利用者は、`.st-text`
  クラスへ移行するか基底スケール変数を直接束ねること。視覚は不変（値保存リファクタ）。

### Patch Changes

- [#340](https://github.com/yasmro/schatten/pull/340) [`b2b3658`](https://github.com/yasmro/schatten/commit/b2b365825284c5c16bf7115ce43258676d1ae120) Thanks [@yasmro](https://github.com/yasmro)! - Fix: `<Button asChild variant="link">` no longer throws `React.Children.only
expected to receive a single React element child`. The `link` branch wraps
  `children` with two icon-conditional siblings, so combining it with
  `asChild` handed Radix `Slot` more than one child. The `asChild` path is now
  resolved before the `link` branch, so a single child always reaches `Slot`.
  As with the other `asChild` paths, `icon` / `isLoading` are not projected
  onto the child — author the inner content yourself.

- [#379](https://github.com/yasmro/schatten/pull/379) [`29a272c`](https://github.com/yasmro/schatten/commit/29a272c6eb173733b04c8d894c9be56ebad11b11) Thanks [@yasmro](https://github.com/yasmro)! - fix(lv1): Dialog の本文スクロール領域をキーボードフォーカス可能に ([#345](https://github.com/yasmro/schatten/issues/345))

  `.st-dialog__body` は内容がオーバーフローした時のみ `tabIndex={0}` を持つようになり、focusable な子要素を含まない長文ダイアログでもキーボードでスクロールできます (WCAG 2.1.1 / axe `scrollable-region-focusable`)。オーバーフローしていない通常のダイアログには tab stop を追加しません。focus ring は Button と同じ ring トークンの 2 段 box-shadow です。CSS クラス・属性セレクタの増減はありません (manifest 不変)。

- [#386](https://github.com/yasmro/schatten/pull/386) [`45f2fe4`](https://github.com/yasmro/schatten/commit/45f2fe4d6835746b899b9befb74ce600396ed8e1) Thanks [@yasmro](https://github.com/yasmro)! - docs(a11y): ハンドビルド docs ページの table を共有 `DocsTable` に集約し、`<th scope="col">` を構造的に強制 (closes [#384](https://github.com/yasmro/schatten/issues/384))

  `Accessibility` / `Testing` が二重定義していた `RefTable` を `docs-ui.tsx` の `DocsTable` に統合し、`scope` 欠落・`<th>`/`<td>` 不整合を構造で防ぐ。`CompositionWithAsChild` の比較表も `DocsTable` 化、`CSSApi` の bespoke table には `scope="col"` を直書き。`scope` 欠落は axe の WCAG 2.1 A/AA タグでは検出されないため、per-page axe spec ではなくコンポーネント + `docs-ui.test.tsx` で担保する方針を `vrt-spec-guideline.md` に明文化。docs / internal のみで公開 API は不変。

- [#334](https://github.com/yasmro/schatten/pull/334) [`f3b68f6`](https://github.com/yasmro/schatten/commit/f3b68f68bd15ab9a379878191307bbb8bb6f0328) Thanks [@yasmro](https://github.com/yasmro)! - docs(perf): record measured Lighthouse scores for
  `examples/lighthouse-100/` (nextjs + vanilla) and fix three issues the
  real measurement surfaced so both examples genuinely score
  100/100/100/100. Closes [#304](https://github.com/yasmro/schatten/issues/304).

  - Both examples now establish the page surface from Schatten tokens
    (`background-color: var(--color-background)` /
    `color: var(--color-foreground)` on `<body>`). Without it, a
    dark-mode host flipped `--color-foreground` to a light value while
    the body stayed white, failing the color-contrast a11y audit.
  - vanilla `prepare-css.mjs` now flattens the token `@import` graph
    before inlining it. The entry files are only `@import` directives;
    pasting them verbatim into an inline `<style>` left the tokens
    unresolved, so they never loaded. It also emits a valid `robots.txt`
    (previously `serve -s` fell through to `index.html`, a −9 on SEO).
  - Both examples ship an inline SVG favicon so the browser's automatic
    `/favicon.ico` request never 404s (a Best Practices console error).

  No public API surface change — examples / docs only.

- [#365](https://github.com/yasmro/schatten/pull/365) [`fc05c57`](https://github.com/yasmro/schatten/commit/fc05c57148aaabbfe83389f34824399e57f8d924) Thanks [@yasmro](https://github.com/yasmro)! - docs(storybook): `Patterns/Accessibility` ストーリーを追加 (closes [#139](https://github.com/yasmro/schatten/issues/139))

  WCAG 2.1 AA を目標水準に、フォーカス可視性 / ARIA 規約 / コントラスト /
  キーボード操作 / スクリーンリーダ対応 / 自動テスト (axe・addon-a11y) を
  live demo 付きで 7 section にまとめた docs story。最も近い兄弟
  `Patterns/Form States` に倣い VRT spec は持たない (dev-time の addon-a11y で
  検証)。公開 API (props / CSS class / CSS variable) の変更なし。

- [#369](https://github.com/yasmro/schatten/pull/369) [`a89167b`](https://github.com/yasmro/schatten/commit/a89167bacf2d356e43c36f5178af5715df2c1c01) Thanks [@yasmro](https://github.com/yasmro)! - docs(storybook): `Patterns/Layout` ストーリーを追加 (closes [#142](https://github.com/yasmro/schatten/issues/142))

  Stack / HStack / VStack を採用せず Tailwind utility で直接組むためのレシピ集
  (Flex 横+縦 / Grid / Container max-width / Responsive)。不採用の根拠は
  `Tokens/Spacing › Why No Layout Primitives` に委ね prose で相互リンク。Container は
  Tailwind v4 で廃止された `max-w-screen-*` を避け、content 幅スケールと breakpoint
  変数参照 (`max-w-(--breakpoint-*)`) の両系統を提示。兄弟 `Patterns/*` docs 同様
  VRT spec は持たない。公開 API (React props / CSS class / CSS variable / types) は不変。

- [#371](https://github.com/yasmro/schatten/pull/371) [`38ee0cd`](https://github.com/yasmro/schatten/commit/38ee0cdf30f3adc23992bc831a312c872b2f7aef) Thanks [@yasmro](https://github.com/yasmro)! - docs(storybook): `Patterns/Testing` ストーリーを追加 (closes [#143](https://github.com/yasmro/schatten/issues/143))。consumer の
  E2E (Playwright / Cypress / RTL) 向けに `data-testid` の受け渡し契約を live demo で
  実演する — root pass-through / compound (Select) / asChild caveat (Tooltip) /
  Portal content / curated-props 例外 (Dialog・Toast) / flat Field の form ケース /
  命名は利用者責任 / no-auto-testid。`component-testid-guideline.md` ([#106](https://github.com/yasmro/schatten/issues/106)) から本
  ストーリーへの pointer を追加。最も近い兄弟 `Patterns/Form States` に倣い VRT spec
  は持たない。公開 API (React props / CSS class / CSS variable / types) の変更なし。

- [#380](https://github.com/yasmro/schatten/pull/380) [`7bf2444`](https://github.com/yasmro/schatten/commit/7bf2444491f3e46dc5c7d1773da1a8d07723d730) Thanks [@yasmro](https://github.com/yasmro)! - docs(storybook): `Providers/*` ストーリーを docs IA 7 グループ内の `Theming/*` へ移設

  `Providers/ThemeProvider` / `Providers/ThemeInitScript` は [#320](https://github.com/yasmro/schatten/issues/320) で確定した
  7 グループ IA (storybook-guideline §Story title taxonomy) の外側に 8 番目の
  トップレベルを作っていた。両者は Mode × Special のランタイム機構なので
  決定表「Anything about Mode × Special → Theming」に従い
  `Theming/ThemeProvider` / `Theming/ThemeInitScript` へ retitle。
  旧 story ID (`providers-*`) への参照は VRT spec / Welcome deep link /
  storySort のいずれにも存在しないことを確認済み。公開 API の変更なし。

- [#381](https://github.com/yasmro/schatten/pull/381) [`30e1694`](https://github.com/yasmro/schatten/commit/30e1694a4f4d63ba287b5d2b602cd201a2f8ebb2) Thanks [@yasmro](https://github.com/yasmro)! - docs(storybook): `Theming/Seasonal Showcase` ストーリーを追加 (closes [#151](https://github.com/yasmro/schatten/issues/151))

  8 季節 × solid 面 ([#150](https://github.com/yasmro/schatten/issues/150) の rung model payoff) を魅せる showcase。
  Eight Seasons (8 季節カード × light/dark) / Side by Side (任意 2 季節対比) /
  Dashboard Mockup (lv1 のみで組んだ実画面) / Auto Season (`getCurrentSeason()`
  の date デモ) の 4 stories。per-cell スコープの substitution freeze 対策は
  ThemeAudit から共有 helper (`scoped-theme-css.ts`) に昇格し、季節表示メタを
  `SEASONAL_THEME_METADATA` 由来の SSOT に統合 (ThemeAudit の winter-deep
  表示「深紅・墨」→ 実 ramp hue 255 に一致する「藍色・濃紺」へ修正)。
  公開 API (props / CSS class / CSS variable) の変更なし。

- [#338](https://github.com/yasmro/schatten/pull/338) [`825a1e5`](https://github.com/yasmro/schatten/commit/825a1e59fd5556dcf3aa1945072910ac2ec6d619) Thanks [@yasmro](https://github.com/yasmro)! - Types: `SelectTrigger` no longer accepts `asChild`. The prop was leaking
  through Radix's `SelectPrimitive.Trigger` type inheritance (the interface
  only omitted `size`), even though Select triggers are form controls that
  fall under the `asChild` hard exclusion in `component-architecture.md §3`.
  The interface now omits `'size' | 'asChild'`, closing the unintended
  surface. No runtime behavior change — `asChild` was never a documented or
  supported prop on `SelectTrigger`.

- [#347](https://github.com/yasmro/schatten/pull/347) [`bc26bde`](https://github.com/yasmro/schatten/commit/bc26bdeb0e7ed2062e86a6b038040e15b2d342d3) Thanks [@yasmro](https://github.com/yasmro)! - Storybook に `@storybook/addon-a11y` を導入し、dev 時に各 story の a11y 違反を
  パネル表示する。axe の scan 面は VRT (`@axe-core/playwright`, [#147](https://github.com/yasmro/schatten/issues/147)) と同じ
  WCAG 2.1 A/AA タグに pin し、Phase 1 は observe-only (`test: 'todo'`)。

- [#355](https://github.com/yasmro/schatten/pull/355) [`385551f`](https://github.com/yasmro/schatten/commit/385551f635c2a96505368ec96341518793d4324b) Thanks [@yasmro](https://github.com/yasmro)! - docs(storybook): `Tokens/Elevation` ストーリーを追加。shadow primitive scale
  (sm/md/lg/xl) と semantic elevation token (popover/modal/toast/card) を、用途名 →
  primitive→ 消費 component の対応・適用済み/定義のみの区別付きで視覚化し、使い分け
  ガイドと dark mode での挙動を整理した。公開 API は不変。

- [#363](https://github.com/yasmro/schatten/pull/363) [`f431588`](https://github.com/yasmro/schatten/commit/f4315882845ef0c046e21d5e108b830b59dd878d) Thanks [@yasmro](https://github.com/yasmro)! - docs(storybook): `Tokens/Iconography` ストーリーを追加。lucide-react の採用理由、
  `Icon` の `icon`（コンポーネント渡し）/ `size` / `color` API、コンポーネント渡しに
  よる tree-shake と typo の build error 化、代表アイコンギャラリー、a11y（装飾 vs
  意味あり）、NG パターンを整理した。公開 API（React props / CSS class /
  CSS variables / types）は不変。

- [#362](https://github.com/yasmro/schatten/pull/362) [`ae6a586`](https://github.com/yasmro/schatten/commit/ae6a5862c091aeb07c266e2bc4ef83862441d447) Thanks [@yasmro](https://github.com/yasmro)! - docs(storybook): `Tokens/Motion` ストーリーを追加。共有 duration scale
  (`--st-duration-fast/base/slow` = 100/150/200ms) を用途名・semantic alias
  (`--motion-*`)・消費 component 付きで可視化し、各値を体感できるインタラクティブ
  demo (prefers-reduced-motion 自己対応) を載せた。`--motion-*` は applied 0 の
  define-only として明示し、用途別ガイドと設計原則 (reduced-motion 必須 / loop は
  component CSS / 不要 animation 禁止) を整理。時間 token は静止 PNG に写らないため
  VRT は付けず、値は `Motion.drift.test.ts` + `resolution.test.ts` で pin。可視化
  対象 token は [#145](https://github.com/yasmro/schatten/issues/145) で追加済のため公開 API は不変。

- [#352](https://github.com/yasmro/schatten/pull/352) [`709394c`](https://github.com/yasmro/schatten/commit/709394cf74d3b7ee3a5bd195024c8db2946235d3) Thanks [@yasmro](https://github.com/yasmro)! - docs(storybook): `Tokens/Spacing` ストーリーを追加。4px base scale の全 token
  を curated (@theme 登録) / raw-only の区分付きで視覚化し、推奨スケール・
  Do&Don't・Layout primitives 不採用の根拠・half step の内部 CVA 用途を整理した。
  公開 API（React props / CSS class / CSS variables / types）は不変。

- [#377](https://github.com/yasmro/schatten/pull/377) [`5bf6b5a`](https://github.com/yasmro/schatten/commit/5bf6b5a0d347b079353f2e82c7fbd6fa5612cdce) Thanks [@yasmro](https://github.com/yasmro)! - docs(storybook): Welcome に Patterns 節を新設し、全 6 Patterns ページ
  (Accessibility / Composition with asChild / Form Composition / Form States /
  Layout / Testing) へのリンクカードを追加 (closes [#364](https://github.com/yasmro/schatten/issues/364))。7 グループ IA ([#320](https://github.com/yasmro/schatten/issues/320) /
  [#332](https://github.com/yasmro/schatten/issues/332)) の入口が Welcome から完結する。あわせて `navigateToStory` に `viewMode`
  引数を追加し、autodocs を持たない Canvas ストーリーへの既存 deep link 5 本
  (CSS API / Theme Audit / Patterns Accessibility / Tokens Color / Typography)
  が「No Preview」になる不具合を修正。公開 API (React props / CSS class /
  CSS variable / types) の変更なし。

## 0.8.0

### Minor Changes

- [#236](https://github.com/yasmro/schatten/pull/236) [`4cc34a1`](https://github.com/yasmro/schatten/commit/4cc34a1436a0f7ea7625af7c88205f8ab26ac9f4) Thanks [@yasmro](https://github.com/yasmro)! - CSS API: introduce brand-named semantic tokens `--color-vermillion` (朱) and
  `--color-indigo` (藍), each with a `-foreground` pair. They expose the two
  Schatten brand colors at the semantic layer — naming the _color itself_ rather
  than a meaning — so consumers and internal code reference `--color-vermillion`
  instead of the `--vermillion-*` primitive scale. Registered in the Tailwind
  `@theme`, so `text-vermillion` / `bg-vermillion` / `text-indigo` / `bg-indigo`
  utilities are available.

  Both brand colors share one shade rule: `-600` in light, `-400` in dark, with
  the `-foreground` pair `paper-white` (light) / `paper-white-inverted` (dark).
  This is the only pair where every `*-foreground`-on-base solid pairing clears
  WCAG AA for normal text in both hues — vermillion 4.86 (light) / 6.84 (dark),
  indigo 7.03 (light) / 5.73 (dark). A 1-step shift (`-600`/`-500`) would fail
  indigo dark and `-500`/`-400` would fail vermillion light, because the two hue
  ramps differ; the AA-safe shade is therefore mode-driven, not 1-step-driven.

  BREAKING: the `--color-accent` / `--color-accent-foreground` semantic tokens are
  removed, and `Text`'s `color` prop no longer accepts `"accent"`. With the
  Pattern B `accent` tone already gone ([#205](https://github.com/yasmro/schatten/issues/205)), `--color-accent`'s only consumer
  was `Text` — rather than keep a redundant role token aliasing vermillion, brand
  color on `Text` now goes through the new brand-named tokens directly.

  Migration:

  - `<Text color="accent">` → `<Text color="vermillion">`. `Text` also gains
    `color="indigo"` for the second brand color.
  - Replace `bg-accent` / `text-accent` / `var(--color-accent)` (and the
    `-foreground` variants) with the `vermillion` equivalent.
  - The `tokens` export drops `tokens.color.accent` / `tokens.color.accentForeground`;
    use `tokens.color.vermillion` / `.vermillionForeground` (or `.indigo` /
    `.indigoForeground`) instead.

  This is settled now (pre-1.0) deliberately: `api-stability.md` freezes CSS
  variable names as BREAKING from v1.0.0, so the brand-named tokens land in
  v0.8.0 to bake before the contract goes live. Closes [#185](https://github.com/yasmro/schatten/issues/185).

- [#232](https://github.com/yasmro/schatten/pull/232) [`18a172e`](https://github.com/yasmro/schatten/commit/18a172e0e1ad1d5487254dcb838759d7ea8731c5) Thanks [@yasmro](https://github.com/yasmro)! - CSS API: add the `--indigo-*` primitive color scale (`--indigo-50` … `--indigo-950`),
  a traditional Japanese indigo (藍) intended as the second brand color alongside
  vermillion (朱). Registered in the Tailwind `@theme` so `bg-indigo-*` / `text-indigo-*`
  utilities are available, and shown in the Foundation/Color story next to the
  vermillion scale.

  This is purely additive — `--blue-*` is untouched and stays pinned to the
  `info` semantic. The indigo scale is hue-shifted toward purple (hue 265) and
  more saturated than `blue`, giving a deeper, darker character. OKLCH values and
  WCAG AA contrast were verified in [#181](https://github.com/yasmro/schatten/issues/181): solid treatment reaches 4.78 (light, on
  `-500`) and 5.73 (dark, on `-400`).

  Semantic-layer integration (`--color-indigo`) lands separately in [#185](https://github.com/yasmro/schatten/issues/185).

- [#223](https://github.com/yasmro/schatten/pull/223) [`2a23290`](https://github.com/yasmro/schatten/commit/2a232904191d589b961097081d3f11730f9bac8b) Thanks [@yasmro](https://github.com/yasmro)! - BREAKING: `lucide-react` is now an **optional peer dependency** instead of a
  bundled `dependency`, and the `icon` props on `Button`, `Badge`, `Input`, and
  `Dialog` accept a Lucide **icon component** instead of a string name.

  Why: `Button` / `Badge` / `Input` imported the whole icon barrel from
  `lucide-react` (`import { icons }`) and resolved icons dynamically
  (`icons[name]`). A dynamic lookup is not statically analyzable, so consumer
  bundlers could not tree-shake it — importing _any_ schatten component pulled
  all 1952 Lucide icon modules (~1.37 MB of unminified icon source) into the
  consumer bundle. schatten's own `dist` now contains zero whole-barrel imports.

  Migration:

  - Install `lucide-react` yourself when you use schatten's React components —
    it is now a peer dependency (`pnpm add lucide-react`). `Toast`, `Callout`,
    `Select`, `Field`, and `Dialog` render Lucide icons internally, and
    `Button` / `Badge` / `Input` accept Lucide icons via `icon` props. It is
    declared `optional` in `peerDependenciesMeta` only so that Layer A
    (CSS / token-only) consumers are not warned about it.
  - Pass the icon **component** imported from `lucide-react`, not a name string:

    ```tsx
    // Before
    import { Button } from "@yasmro/schatten";
    <Button icon="Search" />;

    // After
    import { Search } from "lucide-react";
    import { Button } from "@yasmro/schatten";
    <Button icon={Search} />;
    ```

    This applies to `Button` / `Badge` `icon`, `Input` `iconLeft` / `iconRight`,
    and `Dialog`'s `actionButton.icon` / `cancelButton.icon` /
    `subActionButton.icon`.

  Types: the `IconName` type export (previously `keyof typeof icons`) is removed.
  Icon props are now typed as `LucideIcon` — import that type from `lucide-react`
  if you need it.

- [#240](https://github.com/yasmro/schatten/pull/240) [`236948e`](https://github.com/yasmro/schatten/commit/236948e21e31da7611fd27f9d4225d36fe562d83) Thanks [@yasmro](https://github.com/yasmro)! - CSS API: add the `--red-*` primitive color scale (`--red-50` … `--red-950`) and
  repoint the `error` / `destructive` semantics off `vermillion` onto it.

  `vermillion` previously backed both the brand 朱 (`--color-vermillion`) and the
  danger colors (`--color-error` / `--color-destructive`), so retuning brand
  vermillion would drag every error state along (and vice versa). The new `red`
  scale is a dedicated danger primitive — `error` / `destructive` now reference
  `--red-*`, while `--color-vermillion` keeps referencing `--vermillion-*`.

  `red` is a **value-identical copy** of `vermillion` today (hue 22, same L/C at
  every shade), so this is a governance seam, not a visual change — **no token
  value moves and VRT snapshots are unchanged**. The split exists purely to make
  brand 朱 and danger red independently retunable. Whether danger red _should_
  diverge in hue from brand vermillion is a designer-owned call tracked in design
  spike [#239](https://github.com/yasmro/schatten/issues/239).

  Registered in the Tailwind `@theme` so `bg-red-*` / `text-red-*` utilities are
  available, and shown in the Foundation/Color story next to the vermillion scale.

### Patch Changes

- [#228](https://github.com/yasmro/schatten/pull/228) [`63e1744`](https://github.com/yasmro/schatten/commit/63e1744d9960f7532ff933d4ab1a1796abf18b93) Thanks [@yasmro](https://github.com/yasmro)! - Make the `components/lv1` barrel tree-shakeable. `tsup` now builds each lv1
  component as its own ESM entry with code splitting, instead of bundling all 17
  components into one shared chunk. A consumer importing a single component drops
  ~81 % — `import { Button }` goes from ~48 KB to ~9.7 KB (minified + brotlied).

  No public API change: the `package.json#exports` map is unchanged (same `.`
  and `./components/lv1` entry points), and consumers write imports exactly as
  before. CJS keeps the single-barrel build (`require()` does not tree-shake).
  See `docs/decisions/2026-05-lv1-barrel-tree-shaking.md` for the root-cause
  analysis and the alternatives that were rejected.

- [#223](https://github.com/yasmro/schatten/pull/223) [`2a23290`](https://github.com/yasmro/schatten/commit/2a232904191d589b961097081d3f11730f9bac8b) Thanks [@yasmro](https://github.com/yasmro)! - Normalize the `package.json` `sideEffects` field to `["*.css", "**/*.css"]`.
  This declares that only CSS imports carry side effects, so consumer bundlers
  can tree-shake unused component exports more aggressively. No public API
  change.

- [#220](https://github.com/yasmro/schatten/pull/220) [`68b0be2`](https://github.com/yasmro/schatten/commit/68b0be2b23e12d70759e55d7bff67784c1a5e098) Thanks [@yasmro](https://github.com/yasmro)! - Add the `no-primitive-color` Biome GritQL linter plugin. It bans Tailwind
  primitive color utility classes (`bg-red-500`, `text-gray-700`,
  `ring-vermillion-600`, …) in component JSX, enforcing the
  state-token-guideline contract that components consume only Layer-2 semantic
  tokens. Scoped to `src/components/**/*.tsx` (stories and tests are exempt).
  Internal tooling only — no change to the published package surface.

- [#225](https://github.com/yasmro/schatten/pull/225) [`94ecae0`](https://github.com/yasmro/schatten/commit/94ecae0a0162fb40b9ac2aff7fc3a8e9ec320ddf) Thanks [@yasmro](https://github.com/yasmro)! - SSR (Next.js App Router) support: the React component build now carries a
  `'use client'` directive at the top of every emitted bundle.

  Why: `src/` declares zero `'use client'` directives, so importing Schatten
  components from a Next.js App Router **Server Component** failed the build —
  the bundled output relies on client-only React features (hooks, context,
  Radix event wiring) that a Server Component cannot run.

  The directive is injected via tsup's `banner.js` on the React build group
  only. `dist/components/index.{js,cjs}` and `dist/components/lv1/index.{js,cjs}`
  (and their shared chunk) now start with `'use client';`. The framework-agnostic
  build groups — `variants` / `tokens` / `themes/seasonal` — are intentionally
  left untouched so non-React consumers (Astro, plain CSS) are not marked
  client-only. Type definitions (`.d.ts`) are unaffected.

## 0.7.0

### Minor Changes

- [#205](https://github.com/yasmro/schatten/pull/205) [`192b6ab`](https://github.com/yasmro/schatten/commit/192b6ab271bacf84dad80d596d022348588d4a0b) Thanks [@yasmro](https://github.com/yasmro)! - BREAKING: Pattern B (Badge / Callout / Toast) prop name and variant vocabulary
  unification per [`component-api-conventions.md`](.claude/rules/component-api-conventions.md).
  Closes [#108](https://github.com/yasmro/schatten/issues/108).

  **Prop rename**: `treatment` → `appearance` on `Badge`, `Callout`, `Toast`
  (and `ToastInput`).

  ```diff
  - <Badge treatment="subtle">Active</Badge>
  + <Badge appearance="subtle">Active</Badge>

  - <Callout treatment="solid" variant="error">Failed</Callout>
  + <Callout appearance="solid" variant="error">Failed</Callout>

  - toast({ title: 'Saved', treatment: 'subtle' })
  + toast({ title: 'Saved', appearance: 'subtle' })
  ```

  **Variant rename**: `variant="default"` → `variant="neutral"`. Pure rename —
  all `default` callsites map 1:1 to `neutral` regardless of appearance, and
  the visual is unchanged.

  ```diff
  - <Badge variant="default" treatment="solid">tag</Badge>
  + <Badge variant="neutral" appearance="solid">tag</Badge>
  ```

  **Pattern B has no `accent` tone.** During the review of [PR #205](https://github.com/yasmro/schatten/pull/205)
  we found that `accent + solid` and `neutral + solid` were visually serving
  the same role (non-state filled chip). The `accent` tone has therefore
  been dropped — Pattern B's tone vocabulary is now `neutral / success /
error / warning / info`. Brand expression on Pattern B happens through
  state variants (e.g. `error` is vermillion) or the theme layer (Mode ×
  Special), not a dedicated tone.

  **Appearance values are unchanged**: `solid` / `subtle` / `outline` (Badge)
  and `solid` / `subtle` (Callout / Toast) are kept as-is because they
  already align 1:1 with the semantic token suffixes (`bg-{state}-subtle`,
  `bg-{state}`) and CSS class names — renaming would have introduced a
  translation layer between props and tokens.

  **Type renames**: `CalloutTreatment` → `CalloutAppearance`,
  `ToastTreatment` → `ToastAppearance`. `CalloutVariant` / `ToastVariant`
  narrow to `'neutral' | 'success' | 'error' | 'warning' | 'info'`.

  **Visuals unchanged**: every previously valid combination produces the
  same CSS classes as before. VRT snapshots only update where story content
  labels changed (e.g. "default" labels became "neutral", the `accent`
  column is removed from playground matrices).

  **Not in this release** (intentionally deferred):

  - Pattern B appearance value renames (`solid` → `filled`, etc.) — declined
    to preserve token / prop alignment.
  - Spinner `variant="inverted"` removal — kept as a small out-of-pattern
    special case.
  - `--color-solid` token rename — entangled with Pattern A Button primary,
    to be addressed as a separate issue.

- [#217](https://github.com/yasmro/schatten/pull/217) [`2a3ed83`](https://github.com/yasmro/schatten/commit/2a3ed83e1550139a66e2409ac49504b0a857a61e) Thanks [@yasmro](https://github.com/yasmro)! - feat(theme): seasonal Special themes now declare an explicit token allowlist
  per [`theme-architecture.md`](.claude/rules/theme-architecture.md) ("Allowlist
  mechanism"). Closes [#114](https://github.com/yasmro/schatten/issues/114).

  **New exports** from `@yasmro/schatten/themes/seasonal`:

  - `SeasonalThemeId` — full `data-theme` value type
    (`'season--spring-early' | … | 'season--winter-deep'`), matching the
    attribute emitted by `getSeasonAttribute()` / `applySeasonTheme()`.
  - `SeasonalThemeMetadata` — `{ name, allowedTokens, description? }`. The
    per-theme contract for which CSS custom properties this theme may
    override.
  - `SEASONAL_THEME_METADATA` — `Record<SeasonalThemeId, SeasonalThemeMetadata>`
    covering all eight shipped seasonal palettes. Today every theme allows
    only `--color-theme-*`; Mode-owned tokens (surfaces, foregrounds,
    borders, disabled/readOnly) and `--color-info-*` are explicitly out of
    bounds.

  **Per-theme CSS comments** in
  [`src/themes/seasonal/themes.css`](src/themes/seasonal/themes.css) now
  state each block's allowlist next to the selector, mirroring the
  machine-readable contract.

  **Phase 5 placeholder**: [`scripts/check-theme-allowlist.mjs`](scripts/check-theme-allowlist.mjs)
  is a no-op stub. Mechanical enforcement (fail the build when a Special
  overrides a token outside its allowlist) will ship in a later release
  sharing the scan pipeline with
  [#200](https://github.com/yasmro/schatten/issues/200).

  **No runtime change**: existing seasonal themes already only override
  `--color-theme-*`. This change pins the contract — it does not move any
  pixels.

- [#218](https://github.com/yasmro/schatten/pull/218) [`36afa8e`](https://github.com/yasmro/schatten/commit/36afa8e6436d78de8e892d2a109880dd126cfdea) Thanks [@yasmro](https://github.com/yasmro)! - feat(docs): add `Foundation/ThemeAudit` Storybook story for 16-pattern visual verification.

  Implements the audit story called for in
  [`theme-architecture.md` §"v0.7.0 migration plan"](.claude/rules/theme-architecture.md#v070-migration-plan):
  the Mode (light/dark) × Special (8 seasonal) matrix is now visible in a single
  viewport, and pinned by VRT.

  Closes [#115](https://github.com/yasmro/schatten/issues/115).

  **Stories** (under `src/docs/foundations/ThemeAudit.stories.tsx`)

  - **Overview (16 patterns)** — 8 Specials × 2 Modes grid in one render.
    Rows = Special palette, columns = Mode. Regressions to any of the 16 cells
    surface in one screenshot.
  - **Per Special** — argTypes-driven, single-cell inspection of one (Special,
    Mode) at a time. Bypasses the Storybook toolbar so the URL `args=` selector
    is the only source of theming (this is what the VRT spec drives).
  - **Cascade Verification** — table showing canonical tokens against four
    scenarios (light/dark × none/spring-early), so the two-axis ownership
    contract is empirically observable: theme-\* tokens move along the Special
    axis, foreground / background / border / disabled along the Mode axis,
    and `--color-info` stays pinned to blue everywhere.

  **VRT** — `src/docs/foundations/ThemeAudit.vrt.spec.ts` ships 18 baselines:
  overview (full grid), 16 per-special cells, and the cascade table.

  **Implementation note** — the overview renders every Special in the same
  viewport by injecting a one-line transform of the production seasonal CSS
  (`:root[data-theme=...]` → `.theme-audit-cell[data-theme=...]`), loaded via
  Vite's `?raw` import. Zero parallel CSS to maintain: when
  [`src/themes/seasonal/themes.css`](src/themes/seasonal/themes.css) changes,
  the audit story picks the update up automatically.

  **Consumer impact** — none. Storybook-only docs surface; nothing changes in
  `dist/` or the public component / token APIs.

### Patch Changes

- [#210](https://github.com/yasmro/schatten/pull/210) [`67149e2`](https://github.com/yasmro/schatten/commit/67149e25400591124b2d27c2d9e9f20994e19468) Thanks [@yasmro](https://github.com/yasmro)! - chore(build): drop the empty `./components/lv2` exports entry until lv2 lands.

  `src/components/lv2/index.ts` is still `export {}` and the matching
  `package.json#exports["./components/lv2"]` plus the `tsup` entry were
  exposing an empty surface to consumers — a signal that "an API is here but
  incomplete." Until lv2 components ship in v0.9.0, the cleaner posture is
  to not advertise the sub-path at all.

  Closes [#110](https://github.com/yasmro/schatten/issues/110).

  **Changes**

  - `package.json#exports["./components/lv2"]` is removed. The remaining
    entries (`.`, `./components`, `./components/lv1`, …) are unchanged.
  - `tsup.config.ts` no longer lists `components/lv2/index` as an entry, so
    `pnpm build` does not emit `dist/components/lv2/`.
  - `src/components/lv2/index.ts` is **kept** as `export {}` — it's the
    placeholder that v0.9.0 will populate when the first lv2 lands. Removing
    the file would force re-creating it (and re-wiring the tsup / exports
    config) later for no gain today.

  **Restoration plan (v0.9.0)**

  When the first lv2 components (`FormField`, …) ship, re-add the
  `./components/lv2` exports entry and the `components/lv2/index` tsup entry
  in the same change.

  **Consumer impact**

  Effectively none — `import … from '@yasmro/schatten/components/lv2'`
  previously resolved to an empty module, so no real callsite exists. Anyone
  who somehow had that import will get a clear resolution error pointing
  back at this changeset rather than a silent empty import.

- [#207](https://github.com/yasmro/schatten/pull/207) [`99a613b`](https://github.com/yasmro/schatten/commit/99a613b119744f35f15d5cef22ca43fc3d571658) Thanks [@yasmro](https://github.com/yasmro)! - fix(build): root entry (`.`) now resolves to the components bundle, plus
  build-hygiene cleanup.

  Until now, `package.json#exports["."]` only declared `style`, so
  `import { Button } from '@yasmro/schatten'` failed (`ERR_PACKAGE_PATH_NOT_EXPORTED`).
  This was a build-config oversight, not a deliberate design choice — the
  sub-path entries (`./components/lv1`, `./variants`, …) continued to work.

  Closes [#109](https://github.com/yasmro/schatten/issues/109).

  **Resolution after this fix**

  ```ts
  import { Button } from "@yasmro/schatten"; // ✅ now works
  import { Button } from "@yasmro/schatten/components/lv1"; // ✅ still works
  import "@yasmro/schatten/schatten.css"; // ✅ still works
  ```

  **Primary changes**

  - `exports["."]` gains `types` / `import` / `require` entries pointing at
    `dist/components/index.{d.ts,js,cjs}` so the root specifier resolves to
    the full lv1 surface. `style` is reordered above the JS conditions so
    bundlers that use the `style` pipeline still pick up `dist/schatten.css`
    (Node's conditional-exports resolution short-circuits at the first
    matching condition).
  - Top-level `main` / `module` / `types` are repointed at the components
    bundle, replacing stale `./dist/index.{js,d.ts}` paths that never
    existed in `dist/`.
  - `src/components/index.ts` no longer re-exports the (currently empty)
    lv2 barrel, so the root entry has no transitive dependency on lv2. The
    `./components/lv2` sub-path entry is unchanged — its removal is scoped
    to the next issue.

  **Build-hygiene additions (in scope for this fix)**

  - `sideEffects: ["**/*.css", "./dist/**/*.css"]` declared so bundlers can
    tree-shake unused components from the new root entry. No Schatten
    module has top-level DOM / timer / network side effects.
  - `types` conditions are split into `import` / `require` sub-conditions
    pointing at `.d.ts` / `.d.cts` respectively. Without this split,
    publint warned that `types` would be interpreted as ESM under the
    `require` condition.
  - `publint` is added as a dev dependency with a `pnpm lint:pkg` script,
    to mechanize the four classes of bug uncovered while triaging this
    issue (missing JS conditions, condition-order conflicts, non-existent
    `main` paths, dual-format `types` mismatch).
  - The pre-existing `clean: true` on the first `tsup` config block is
    moved to a top-level `pnpm clean:dist` (rimraf) step. Running clean
    from one config inside a parallel `defineConfig([…])` array was
    racing with the other configs' DTS emit and silently wiping
    `dist/themes/seasonal/index.d.{ts,cts}`. Both files now persist after
    build.
  - CSS-only export entries (`./schatten.css`, `./core/tokens`,
    `./themes/default`, `./themes/seasonal/themes.css`) are collapsed to
    string-form values — they resolved identically under `import` and
    `require`, so the conditional wrapper added noise.
  - README is updated to recommend `import { Button } from '@yasmro/schatten'`
    as the canonical form, with the sub-path imports documented as the
    bundle-size-sensitive alternative.

  No public API surface changes — this is strictly an additive fix to make
  the documented convenience entry resolve, plus the build-hygiene
  follow-ups it surfaced.

## 0.6.0

### Minor Changes

- [#202](https://github.com/yasmro/schatten/pull/202) [`55b5e5d`](https://github.com/yasmro/schatten/commit/55b5e5d1cf6fb3ac3c0d8961e9ee2bb83cc700c7) Thanks [@yasmro](https://github.com/yasmro)! - feat(lv1): add `readOnly` styling to `Input` and `Textarea` (closes [#183](https://github.com/yasmro/schatten/issues/183))

  `Input` and `Textarea` now render with a warm-tinted, non-interactive
  surface when `readOnly` is set, using the
  [`--color-surface-readonly`](src/core/tokens/semantic.css) /
  [`--color-border-readonly`](src/core/tokens/semantic.css) tokens
  introduced in [#180](https://github.com/yasmro/schatten/issues/180). Until now the two components forwarded the HTML
  `readonly` attribute but were visually indistinguishable from the
  editable default, which made the "this value is informational, not
  editable" intent invisible to users.

  The styling intentionally differs from `disabled`:

  |                 | `disabled`                         | `readOnly`                                |
  | --------------- | ---------------------------------- | ----------------------------------------- |
  | Surface         | Cool gray (`bg-surface-disabled`)  | Warm tint (`bg-surface-readonly`)         |
  | Foreground      | Muted (`text-foreground-disabled`) | Normal — the value stays readable         |
  | Cursor          | `cursor-not-allowed`               | `cursor-text`                             |
  | Focus           | Not focusable                      | Focusable, value is selectable / copyable |
  | Form submission | Value omitted                      | Value submitted                           |

  ### Priority when states stack

  The wrapper (`Input`) and the textarea element (`Textarea`) use the same
  priority chain via `cn()` + `tailwind-merge`:

  ```
  disabled  >  readOnly  >  isError
  ```

  - `readOnly + isError` → readOnly surface wins visually, but
    `aria-invalid="true"` is still emitted so assistive tech sees the error.
  - `disabled + readOnly` → disabled wins visually (stronger constraint).

  This mirrors the existing `disabled > isError` policy from [#182](https://github.com/yasmro/schatten/issues/182).

  ### Out of scope

  - `Field` does not yet propagate `readOnly` through `FieldContext` — that
    is tracked separately. Consumers wanting field-driven readOnly should
    pass `readOnly` directly to `Input` / `Textarea` for now.
  - `Select` (HTML has no `readonly` attribute on `<select>`),
    `Checkbox` / `Radio` / `Switch` (UX intent of read-only is unclear for
    binary controls) are intentionally not included.

  Stories added per component: `ReadOnly`, `Disabled vs ReadOnly`,
  `ReadOnly with error`. VRT specs cover all three across light / dark.

- [#197](https://github.com/yasmro/schatten/pull/197) [`7d49b5a`](https://github.com/yasmro/schatten/commit/7d49b5a8fd5ecf3cabf58e4bdb10fec049867346) Thanks [@yasmro](https://github.com/yasmro)! - feat(tokens): add non-interactive state semantic tokens (`disabled` / `readOnly`)

  Adds five new semantic CSS variables in
  [`semantic.css`](src/core/tokens/semantic.css) and registers them with
  Tailwind v4 via [`base.css`](src/core/tokens/base.css), so form-control
  authors can express `disabled` and `readOnly` through token names instead
  of the current cross-component `cursor-not-allowed opacity-50` pattern.

  The two non-interactive states have intentionally different visual
  directions:

  |                 | `disabled`                 | `readOnly`                                        |
  | --------------- | -------------------------- | ------------------------------------------------- |
  | Intent          | This control is not usable | The value is informational, the control is static |
  | Form submission | Value is not submitted     | Value is submitted                                |
  | Focus           | Not focusable              | Focusable                                         |
  | Visual          | Muted / faded (cool gray)  | Subtle / static (warm tint)                       |

  Tokens added:

  ```css
  /* disabled — surface + foreground + border */
  --color-surface-disabled
  --color-foreground-disabled
  --color-border-disabled

  /* readOnly — surface + border (foreground stays normal so the value stays readable) */
  --color-surface-readonly
  --color-border-readonly
  ```

  All five are defined in both modes (`:root`, `@media (prefers-color-scheme: dark)`,
  and `.dark`). Tailwind utilities — `bg-surface-disabled`,
  `text-foreground-disabled`, `border-border-disabled`, `bg-surface-readonly`,
  `border-border-readonly` — are generated via the
  [`@theme`](src/core/tokens/base.css) registration.

  The tokens follow the existing 3-layer hierarchy
  ([state-token-guideline.md](.claude/rules/state-token-guideline.md)): they
  sit at the semantic layer and reference primitives. They are NOT state
  semantic tokens in the `error`/`success`/… sense — there is no `hover` slot —
  so they do not follow the 4-token shape.

  A new "Non-Interactive States" + "Disabled vs ReadOnly (a11y audit)"
  section is added to `Foundation/Color` so designers can verify both
  modes visually.

  This change is additive — no component currently consumes the tokens, so
  no VRT impact. Component-side adoption (replacing `opacity-50` and
  introducing readOnly styling on Input/Textarea) lands in separate
  follow-up issues.

  Also updates two rule docs to acknowledge the new category:

  - [`state-token-guideline.md`](.claude/rules/state-token-guideline.md) gains
    a "Non-interactive state tokens" section explaining the 3 / 2-slot shape,
    why there is no `hover` slot, and why `disabled` / `readOnly` use cool
    and warm hue families respectively.
  - [`theme-architecture.md`](.claude/rules/theme-architecture.md) pins the
    five new tokens to the Mode axis and forbids Specials from overriding
    them — disabled means the same thing regardless of season or brand.

  A new [`docs/decisions/`](docs/decisions/) directory is introduced for
  design decision logs, with
  [`2026-05-non-interactive-state-tokens.md`](docs/decisions/2026-05-non-interactive-state-tokens.md)
  as its first entry. The log captures the alternatives considered (lightness
  shifts, pattern overlays, dashed borders) and explains why hue family was
  the chosen differentiator.

  Closes [#180](https://github.com/yasmro/schatten/issues/180). Follow-ups: [#198](https://github.com/yasmro/schatten/issues/198) (designer-review step), [#199](https://github.com/yasmro/schatten/issues/199) (Form States
  foundation page), [#200](https://github.com/yasmro/schatten/issues/200) (semantic→primitive resolve test).

- [#201](https://github.com/yasmro/schatten/pull/201) [`3dad419`](https://github.com/yasmro/schatten/commit/3dad419b38601ad3128b5680c4f2acec9ae92fc4) Thanks [@yasmro](https://github.com/yasmro)! - refactor(lv1): replace `opacity-50` disabled treatment with semantic disabled tokens (system-wide sweep)

  Adopts the non-interactive state tokens introduced in [#197](https://github.com/yasmro/schatten/issues/197)
  (`--color-surface-disabled`, `--color-foreground-disabled`,
  `--color-border-disabled`) across all seven lv1 form / action components
  that previously expressed disabled via the cross-cutting
  `cursor-not-allowed opacity-50` pattern.

  `cursor-not-allowed` is preserved. `opacity-50` is removed entirely
  from the lv1 surface — the disabled look now flows through the same
  semantic token layer as every other Schatten chrome decision, instead
  of a global alpha multiplier.

  ## Per-component mapping

  | Component                                    | Disabled treatment now applies                                                                                                                                                                                                    |
  | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `Input`                                      | wrapper: `bg-surface-disabled` + `border-border-disabled` + `text-foreground-disabled`; `<input>`: `text-foreground-disabled`                                                                                                     |
  | `Textarea`                                   | `bg-surface-disabled` + `border-border-disabled` + `text-foreground-disabled`                                                                                                                                                     |
  | `Select` (trigger)                           | `bg-surface-disabled` + `border-border-disabled` + `text-foreground-disabled`                                                                                                                                                     |
  | `Select` (item)                              | `text-foreground-disabled` only — items are rows inside a popup; recolouring the surface would make disabled items more prominent than enabled ones                                                                               |
  | `Checkbox`                                   | Root: `bg-surface-disabled` + `border-border-disabled` + `text-foreground-disabled`; indicator switched to `text-current` so the check-mark inherits the muted foreground                                                         |
  | `Radio`                                      | Root: same triple as Checkbox; indicator dot switched to `bg-current` so it inherits the muted foreground                                                                                                                         |
  | `Switch`                                     | Root: `bg-surface-disabled` + `border-border-disabled`, doubled with `disabled:data-[state=checked]:*` so the disabled tone wins over the checked tone; thumb: `group-disabled:bg-foreground-disabled` (also doubled for checked) |
  | `Button` (filled — `primary`, `destructive`) | `bg-surface-disabled` + `text-foreground-disabled`                                                                                                                                                                                |
  | `Button` (`secondary`)                       | `border-border-disabled` + `text-foreground-disabled`                                                                                                                                                                             |
  | `Button` (`tertiary`, `inverted`, `link`)    | `text-foreground-disabled`                                                                                                                                                                                                        |

  External-label adjacencies (`<label>` rendered by `Checkbox` /
  `Radio` / `Switch` alongside the control) also moved from
  `opacity-50` to `text-foreground-disabled` for consistency.

  ## Why

  - **Semantic over alpha.** `opacity-50` is a blunt instrument: it
    dims everything in the subtree uniformly, including focus rings,
    borders, and any nested icons. With tokens, each piece of the
    control reads its disabled colour from a named slot, so designers
    and theme authors can retune the disabled aesthetic at one place.
  - **Theme-safe.** The five non-interactive tokens are pinned to the
    Mode axis (see [theme-architecture.md](.claude/rules/theme-architecture.md))
    — Specials cannot override them. A seasonal palette that brand-tints
    the disabled state would be semantically wrong, and the token system
    enforces this mechanically.
  - **Better dark-mode behaviour.** A 50%-alpha element on a dark
    background loses too much luminance contrast against the surround.
    Disabled-state tokens use mode-specific primitives, so the muted
    feel is intentional in both Modes rather than being whatever
    alpha-50 happens to produce.

  ## Priority over `isError`

  When a form control is both `disabled` and `isError`, the disabled
  visual now wins via Tailwind's `disabled:` modifier specificity
  (`:disabled` pseudo-class adds one specificity over the unscoped
  `bg-error-subtle` / `border-error`). This matches the user's mental
  model: an unusable control should not advertise validation state.

  ## VRT impact

  Disabled-state baselines regenerated for `Button`, `Input`, `Select`,
  `Switch`, `Textarea`, and `FieldSet` (the latter renders disabled
  child inputs). `Checkbox` and `Radio` disabled snapshots came out
  pixel-identical to their old `opacity-50` baselines under the
  existing 1% diff threshold — the visual delta on a 5-pixel control
  is below that bound. `Button`'s `loading-*` snapshots also
  regenerated because `isLoading` internally sets `disabled`.

  Closes [#182](https://github.com/yasmro/schatten/issues/182). Depends on [#197](https://github.com/yasmro/schatten/issues/197) (token definitions).

### Patch Changes

- [#194](https://github.com/yasmro/schatten/pull/194) [`1ba6462`](https://github.com/yasmro/schatten/commit/1ba6462861ac0aa44ef1ccdce9ca4ca519cbc0b3) Thanks [@yasmro](https://github.com/yasmro)! - docs(rule): add `.claude/rules/component-architecture.md` (lv1/lv2 folders, compound vs flat, `asChild` no-new-additions default, polymorphic `as` not adopted, unified context consumption, one-way dependency direction, lv1-local `.css` allowlist)

  Codifies the component-level design choices that have been implicit until now.
  Complements [`component-api-conventions.md`](.claude/rules/component-api-conventions.md)
  (added in [#192](https://github.com/yasmro/schatten/issues/192), which holds the authoritative public prop API shape).

  - **lv1 vs lv2 folders**: lv1 is single-responsibility primitives, lv2 is
    composition. The promotion criterion ("when does a recurring composition
    become an lv2?") is intentionally deferred — it will be defined as a
    follow-up rule when the first lv2 lands (~v0.9.0).
  - **Compound vs flat**: Radix-wrapping components ship as compound (mirror
    Radix part names one-to-one to preserve ref / context / aria wires);
    self-built primitives ship as flat. Self-built composition belongs in lv2,
    not in a compound lv1. `Toast`'s imperative API is called out as the
    notification-class special case.
  - **`asChild` — no new lv1 additions by default**. Cross-references
    `component-api-conventions.md` for the authoritative adoption list and
    the 3 criteria. Adds two further constraints on top: form inputs and
    portal content must never expose `asChild`, regardless of how the 3
    criteria appear to fit. The variants-function pattern (`buttonVariants` /
    `textVariants` from `@yasmro/schatten/variants`) is documented as the
    preferred alternative for "render as a different element" needs.
  - **Polymorphic `as` prop is not adopted** as a general pattern. Carved
    exception: `Text` exposes a fixed enumeration
    `as?: 'p' | 'span' | 'h1'…'h6'` — the union is closed, the attribute
    surface is uniform, and inference cost is zero.
  - **Context consumption is unified into one rule**: every form lv1 reads
    `isError` / `disabled` / `describedBy` from `FieldContext` with prop
    fallback. Only externally-labelled components (`Input`, `Textarea`,
    `Select`) additionally consume `field.id`. `FieldSetContext` is consumed
    only by `Field`, which collapses-and-re-provides — form lv1s never read
    `FieldSetContext` directly.
  - **Dependency direction is strictly one-way**:
    `lib` / `contexts` / `variants` → `lv1` → `lv2`. `lv1 → lv2` is forbidden
    (an lv1 needing an lv2 is misclassified); `lv1 → other lv1` is allowed
    (e.g. `Dialog` embedding `Button` in its action row); barrel-export
    laundering (reaching `lib` via `lv1/index.ts`) is forbidden.
  - **lv1-local `.css` allowlist**: only for things Tailwind / CVA cannot
    express — `@keyframes`, `animation-play-state` conditional on data-state,
    `prefers-reduced-motion`, component-scoped CSS variables. The four
    existing files (Tooltip.css, Dialog.css, Toast.css, Spinner.css) are all
    animation-only and comply.

  The rule is referenced from CLAUDE.md / AGENTS.md and the `review-pr`
  command checklist.

  No public API or component behaviour changes.

- [#196](https://github.com/yasmro/schatten/pull/196) [`2952fb5`](https://github.com/yasmro/schatten/commit/2952fb5bfdabc1cecd55ac25437c9ab2901a44e7) Thanks [@yasmro](https://github.com/yasmro)! - chore(hook): add `.claude/settings.json` hooks for lv1 edit-time checks

  Adds two non-blocking Claude Code hooks so test/vrt-less `lv1` additions
  get caught at edit time (AI or human), without relying on post-hoc CI.

  - **PostToolUse(Edit|Write|MultiEdit)** → [`scripts/check-lv1-companions.mjs`](scripts/check-lv1-companions.mjs).
    When the edit lands on `src/components/lv1/{X}/{X}.tsx`, verifies that
    `{X}.test.tsx` and `{X}.vrt.spec.ts` exist as siblings; surfaces a
    system-reminder via `hookSpecificOutput.additionalContext` if missing.
  - **Stop** → [`scripts/check-lv1-export-integrity.mjs`](scripts/check-lv1-export-integrity.mjs).
    Diffs `lv1` component directories against the `from './...'` re-exports
    in `src/components/lv1/index.ts` (both directions, so orphan exports
    are flagged too).

  Both scripts read the Claude Code stdin JSON contract
  (`tool_input.file_path`, `$CLAUDE_PROJECT_DIR`), exit `0` always, and
  emit messages via `additionalContext` so they reach Claude as a
  system-reminder. node-only, no shell dependencies — works on Windows.
  Complements (does not replace) the existing lefthook pre-commit step.

  Repo-tooling change only — no source, no published artifact change.

  Closes [#107](https://github.com/yasmro/schatten/issues/107).

- [#195](https://github.com/yasmro/schatten/pull/195) [`8e35e30`](https://github.com/yasmro/schatten/commit/8e35e3024bfd79980522d2f618ac2588342a9f57) Thanks [@yasmro](https://github.com/yasmro)! - refactor(tokens): rename `--color-primary-*` → `--color-theme-*` (and `bg-primary-*` utilities → `bg-theme-*`)

  The CSS variable that drives the Special-axis color scale is renamed from
  `--color-primary-*` to `--color-theme-*`, matching the `data-theme` attribute
  that controls it. The legacy `--color-primary-*` name conflated "the brand's
  primary color" with "the slot the active theme drives" — the new name fixes
  the conflation. See [`.claude/rules/theme-architecture.md`](.claude/rules/theme-architecture.md)
  (PR [#189](https://github.com/yasmro/schatten/issues/189)) for the full Mode × Special two-axis model.

  Changes:

  - [`src/core/tokens/semantic.css`](src/core/tokens/semantic.css) — the default
    chain `--color-primary-50..950: var(--blue-*)` becomes `--color-theme-50..950`.
  - [`src/core/tokens/base.css`](src/core/tokens/base.css) — Tailwind v4 `@theme`
    registration updated, so `bg-theme-500` / `text-theme-600` / etc. are the
    generated utility classes.
  - [`src/themes/default/colors.css`](src/themes/default/colors.css) — default
    theme references the new names.
  - [`src/themes/seasonal/themes.css`](src/themes/seasonal/themes.css) — eight
    seasonal palettes (88 declarations + the transition list) use the new names.
  - [`src/tokens.ts`](src/tokens.ts) — the TS-typed `tokens.color` export renames
    `primary50..primary950` keys to `theme50..theme950`, pointing at
    `var(--color-theme-*)`.
  - [`src/docs/Color.stories.tsx`](src/docs/Color.stories.tsx) — the "Primary"
    scale subsection becomes "Theme" and uses `bg-theme-*` utilities.

  This is a breaking change for any consumer that references `--color-primary-*`,
  `bg-primary-*` / `text-primary-*` / `border-primary-*` utility classes, or the
  `tokens.color.primary*` TS keys. Migrate via:

  ```diff
  - background-color: var(--color-primary-500);
  + background-color: var(--color-theme-500);

  - <div className="bg-primary-500" />
  + <div className="bg-theme-500" />

  - const fill = tokens.color.primary500
  + const fill = tokens.color.theme500
  ```

  The `info` semantic is unaffected — it remains pinned to `blue-*` directly,
  independent of the theme scale. Action-component `variant="primary"` (on
  `Button`) is also unaffected — that's a _role_ name, not a token name.

  Out of scope (lands in v0.7.0): allowlist enforcement, 16-pattern audit story,
  and the matching `data-season` → `data-theme` rename (shipped separately).

- [#195](https://github.com/yasmro/schatten/pull/195) [`8e35e30`](https://github.com/yasmro/schatten/commit/8e35e3024bfd79980522d2f618ac2588342a9f57) Thanks [@yasmro](https://github.com/yasmro)! - refactor(themes): rename `data-season` → `data-theme` with `season--*` value prefix

  The seasonal theming attribute is renamed from `data-season="<name>"` to the
  unified `data-theme="season--<name>"`, matching the Mode × Special two-axis
  model documented in [`.claude/rules/theme-architecture.md`](.claude/rules/theme-architecture.md)
  (PR [#189](https://github.com/yasmro/schatten/issues/189)). The single `data-theme` attribute is now the channel for _every_
  Special theme (seasonal, brand, vendor, one-off) — the family is encoded in
  the value, not in a proliferation of attribute names.

  Changes:

  - [`src/themes/seasonal/themes.css`](src/themes/seasonal/themes.css) — the eight
    `:root[data-season="X"]` selectors become `:root[data-theme="season--X"]`.
  - [`src/themes/seasonal/index.ts`](src/themes/seasonal/index.ts) — `applySeasonTheme`
    / `getSeasonAttribute` / `removeSeasonTheme` keep their function names; only
    the underlying attribute name + value transform change.
  - [`.storybook/preview.tsx`](.storybook/preview.tsx) — the Storybook theme toolbar
    decorator follows the same transform.
  - [`src/docs/Color.stories.tsx`](src/docs/Color.stories.tsx) — text reference updated.

  This is a breaking change for any consumer that targets `[data-season=...]` in
  their own CSS, or sets the attribute manually. Migrate via:

  ```diff
  - <html data-season="spring-early">
  + <html data-theme="season--spring-early">
  ```

  Consumers using the SDK helpers (`applySeasonTheme`, `getSeasonAttribute`,
  `removeSeasonTheme`) require no code change — the new attribute is applied
  transparently.

  Out of scope (lands in v0.7.0): allowlist enforcement, 16-pattern (8 Specials
  × 2 Modes) Storybook audit story.

- [#190](https://github.com/yasmro/schatten/pull/190) [`e3f3db3`](https://github.com/yasmro/schatten/commit/e3f3db3c794cceb6db179181be45b7e1efbb553d) Thanks [@yasmro](https://github.com/yasmro)! - docs(rule): add `.claude/rules/testing-guideline.md`

  The repo had VRT conventions written down ([vrt-spec-guideline.md](.claude/rules/vrt-spec-guideline.md))
  but no equivalent rule for **unit tests**, even though 16 `lv1` components
  shipped with ~290 test cases across them. The conventions were enforced by
  PR review and "follow Button.test.tsx style" — fine for humans, but a thin
  contract for AI-assisted contributions and new contributors.

  New rule codifies:

  - **Responsibility split** with [vrt-spec-guideline](.claude/rules/vrt-spec-guideline.md):
    unit tests assert behavior + a11y wiring, VRT specs assert pixels.
  - **Required cases per component type** — Form / Compound / Action / Display.
    Form-input components must cover controlled+uncontrolled, error state, and
    Field-context propagation; compound components must cover open/close
    transitions and portal rendering; action components must cover handler
    firing and `asChild`.
  - **Writing style** — BDD-style `it` names, `describe` as the Given
    container, typed factories for non-trivial setup, no `// Arrange / Act /
Assert` labels (tests are too small to benefit).
  - **What NOT to test** — Radix internals, Tailwind class strings verbatim,
    coverage as a number, Storybook stories.
  - **Canonical examples** cross-linked to real test files:
    [`BasicSelect`](src/components/lv1/Select/Select.test.tsx) (typed
    factory), [`ContextConsumer`](src/components/lv1/Field/Field.test.tsx)
    (context wiring helper),
    [`Controlled`](src/components/lv1/Dialog/Dialog.test.tsx) (stateful
    wrapper), [`renderTooltip`](src/components/lv1/Tooltip/Tooltip.test.tsx)
    (provider wrapper).

  Linked from CLAUDE.md `Guidelines` and AGENTS.md `Required reading` + Resource
  Map, alongside the other rule files. No source / test changes; existing tests
  already match the codified conventions.

  Closes [#103](https://github.com/yasmro/schatten/issues/103).

- [#189](https://github.com/yasmro/schatten/pull/189) [`3cab2a4`](https://github.com/yasmro/schatten/commit/3cab2a4fad5cbbd2356b246e95d1d4e12c158fa3) Thanks [@yasmro](https://github.com/yasmro)! - docs(rule): add `.claude/rules/theme-architecture.md` (Mode × Special two-axis model)

  Theming is now modelled as two independent **exclusive** axes: **Mode**
  (`light` / `dark`) owns the base layer (surfaces, foregrounds, borders, state
  shade-shifts); **Special** (`<none>` / `season--*` / brand themes / customer
  palettes) owns the expressive layer — the **`--color-theme-*` scale**,
  optionally `accent`. At most one Special is active at a time, set via
  `data-theme="<value>"` on `<html>`.

  The cascade resolves as `Special > Mode > base semantic` — Specials win on
  specificity (single-attribute selector beats `:root` / `.dark`), not on
  stylesheet load order.

  The new rule documents:

  - The two-axis model and which tokens each axis owns
  - Cascade rules (specificity-based, with load order as tie-breaker for the
    stylesheet chain only)
  - A **token allowlist** mechanism — each Special declares which tokens it may
    override (design only; enforcement lint lands in v0.7.0)
  - DOM application: `.dark` for Mode, single `data-theme` attribute for Special
  - A **`data-theme` value convention**: `<theme>` for one-offs or
    `<theme>--<subtheme>` for families (e.g. `season--spring-early`,
    `brand--acme`, `halloween`). One attribute, one value namespace, no
    `data-season` / `data-event` / `data-brand` proliferation.
  - A mapping table for the eight existing seasonal palettes, showing both the
    canonical `data-theme` form (`season--spring-early`) and the legacy
    `data-season` form
  - Process for adding a new Special today (pre-v0.7.0)

  **Deprecations** (both rename in v0.7.0 alongside the allowlist enforcement
  and the 8 × 2 = 16-pattern Storybook audit story):

  - `data-season="<name>"` → `data-theme="season--<name>"`. Family encoded in
    the value, not in a separate attribute.
  - `--color-primary-*` / `bg-primary-*` → `--color-theme-*` / `bg-theme-*`.
    The token name now matches the attribute that drives it (`data-theme`),
    removing the "primary brand color" vs "theme-driven slot" conflation.

  New code MUST use the canonical names (`data-theme`, `--color-theme-*`,
  `bg-theme-*`); do not introduce new `data-season` or `*-primary-*` usage.

  No public API or component behaviour changes in this PR — only the rule.

## 0.5.0

### Minor Changes

- [#172](https://github.com/yasmro/schatten/pull/172) [`19bcdda`](https://github.com/yasmro/schatten/commit/19bcddaa28f2583d312617d7de1048d610b7cb4a) Thanks [@yasmro](https://github.com/yasmro)! - Add TSDoc on `Props` interfaces for every lv1 component, so IDE hover and
  AI coding assistants (Copilot, Cursor, v0, Claude Code, …) surface the same
  descriptions that Storybook's Docs tab does.

  Each prop now carries a `/** ... */` comment with a `@default` tag and, for
  enum props (`variant` / `size` / `treatment`), a bullet list of per-option
  purposes. Inherited HTML standard props (`onClick`, `className`, …) are
  intentionally left undocumented.

  **Convention** (now codified in `.claude/rules/storybook-guideline.md`):
  TSDoc on the Props interface is the **source of truth** for prop docs.
  `argTypes.description` is a secondary surface that mirrors TSDoc for
  Storybook's Docs tab. When the two disagree, TSDoc wins.

  Affected components (all 17 lv1):
  Badge, Button, Callout, Checkbox, Dialog, Field, FieldSet, Input, Radio
  (+ RadioGroup), Select (SelectTrigger / SelectContent), Separator, Spinner,
  Switch, Text, Textarea, Toast (ToastInput / ToastAction) + Toaster, Tooltip
  (TooltipContent).

- [#171](https://github.com/yasmro/schatten/pull/171) [`1ca9c6b`](https://github.com/yasmro/schatten/commit/1ca9c6be05ef70dd0c088d8fc4799d51ca97a942) Thanks [@yasmro](https://github.com/yasmro)! - feat(tokens): export TS-typed design tokens via `@yasmro/schatten/tokens`

  Adds `src/tokens.ts` that re-exports all semantic CSS custom properties as a hierarchical `as const` object, plus `*Token` literal-union types per category (color, spacing, radius, shadow, transition, zIndex, font, fontSize, lineHeight, fontWeight, letterSpacing). CSS remains the single source of truth — this is a thin pointer layer so AI / IDE completion can surface the available tokens.

  Prefer Tailwind utilities for everyday styling; reach for `tokens` only for inline style or CSS-in-JS.

  ```ts
  import { tokens } from "@yasmro/schatten/tokens";

  <div
    style={{ background: tokens.color.errorSubtle, color: tokens.color.error }}
  />;
  ```

### Patch Changes

- [#177](https://github.com/yasmro/schatten/pull/177) [`025e98e`](https://github.com/yasmro/schatten/commit/025e98e5d104a3e25af90eee4d004547677d7eb4) Thanks [@yasmro](https://github.com/yasmro)! - chore(lint): strengthen Biome rules on top of `recommended`

  [biome.json](biome.json) previously enabled only `recommended: true`. That
  left a few classes of bug uncaught — stale `useEffect` deps, unused imports
  left over from refactors, value-imports for type-only symbols, stray
  `console.log` shipped to consumers. None of those are caught by
  `recommended`, but all are mechanical to enforce.

  The internal codebase already followed these conventions, so enabling the
  rules produced **zero violations**.

  Rules added (see [.claude/rules/lint-rules-guideline.md](.claude/rules/lint-rules-guideline.md)
  for the rationale on each):

  - `correctness/useExhaustiveDependencies` — `error`
  - `correctness/noUnusedImports` — `error`
  - `correctness/noUnusedVariables` — `error`
  - `style/useImportType` — `error`
  - `style/useExportType` — `error`
  - `style/noNonNullAssertion` — `warn`
  - `suspicious/noConsole` — `error` with `allow: ["warn", "error"]` (the two
    variants the library uses to flag developer misuse — e.g. Button's
    `isLoading + asChild` warning)

  Also aligned the `$schema` URL to the installed Biome version (`2.4.14`),
  silencing the schema-mismatch info on every `pnpm lint` run.

  No public API change.

- [#175](https://github.com/yasmro/schatten/pull/175) [`aa77924`](https://github.com/yasmro/schatten/commit/aa7792491de8f1e23ed2484c70a35d12916b5381) Thanks [@yasmro](https://github.com/yasmro)! - chore(types): typecheck stories and tests via a dedicated `tsconfig.test.json`

  `tsconfig.json` previously excluded `**/*.stories.tsx` and `**/*.test.tsx`,
  which meant `pnpm typecheck` skipped them and let type errors slip past CI.
  The dist build needs that exclude (so generated `.d.ts` files don't pick up
  story/test types), but typecheck does not — and the gap masked real bugs.

  This split separates the two concerns:

  - `tsconfig.json` — dist build target (still excludes stories/test), unchanged
    for `tsup`.
  - `tsconfig.test.json` (new) — extends `tsconfig.json` but includes stories,
    tests, and `vitest.setup.ts` (the latter pulls in
    `@testing-library/jest-dom/vitest` so matcher type augmentation is visible).
  - `pnpm typecheck` now runs against `tsconfig.test.json`.

  Bugs surfaced and fixed while turning typecheck back on:

  - `Badge.stories.tsx` used `icon="AlertCircle"`, which is a deprecated
    lucide-react alias that is **not** present in the `icons` object. The
    story rendered no icon at runtime. Updated to `"CircleAlert"` and refreshed
    the matching JSDoc / argTypes examples on `BadgeProps.icon`.
  - `Tooltip.stories.tsx` declared an `argTypes` entry for `hideArrow`, a prop
    that does not exist on `TooltipContentProps`. Removed the stale entry.

  No public API change.

- [#176](https://github.com/yasmro/schatten/pull/176) [`423e3d6`](https://github.com/yasmro/schatten/commit/423e3d63314538a2a818a6b46d3cc226510bd7b7) Thanks [@yasmro](https://github.com/yasmro)! - test: add unit tests for 8 lv1 components

  Add `*.test.tsx` for the 8 lv1 components that previously only had VRT coverage:
  Badge, Checkbox, Radio (+ RadioGroup), Select, Spinner, Switch, Text, Textarea.
  VRT keeps the look in check; unit tests now cover the logic that VRT cannot
  catch — props handling, `aria-*` attributes, keyboard / click events, controlled
  vs. uncontrolled state, and `<Field>` / `<RadioGroup>` context propagation.

  For Radix-backed components (Checkbox / Radio / Select / Switch), tests focus
  on the Schatten wrapping layer (variant classes, `isError`, `disabled`, context
  inheritance) rather than re-testing Radix internals.

  Adds a `scrollIntoView` polyfill to `vitest.setup.ts` so jsdom can run Radix
  Select tests that open the dropdown.

  No public API change.

- [#179](https://github.com/yasmro/schatten/pull/179) [`d7d066c`](https://github.com/yasmro/schatten/commit/d7d066c5ce862d297dae708897e984185364ef81) Thanks [@yasmro](https://github.com/yasmro)! - test(vrt): add VRT specs for Field, FieldSet, Tooltip

  Three lv1 components — Field, FieldSet, Tooltip — previously had no visual
  regression coverage, leaving token changes or Tailwind upgrades free to
  silently break their appearance. Each now has a `*.vrt.spec.ts` plus
  baseline snapshots in light and dark themes.

  - **Field** covers `WithInput`, `WithSelect`, `WithTooltip`, `Required`,
    `ErrorState`, and `Disabled` to lock down label / description / error /
    required-marker positioning across the common children (Input, Select,
    Tooltip-info-icon).
  - **FieldSet** covers `Address`, `ErrorState`, `Disabled`, and
    `ErrorPropagation` to lock down legend / description / nested-field
    layout and the visual surface of context-propagated `disabled` / `isError`.
  - **Tooltip** uses Portals into `document.body`, so VRT screenshots the full
    page rather than `#storybook-root`. Three new `Open / *` stories
    (`OpenAllSides`, `OpenLongContent`, `OpenRichContent`) pin `<Tooltip open>`
    so the popover is always rendered — animations are paused before snapshot.

  `.claude/rules/vrt-spec-guideline.md` gains a new "Components rendered into
  a Portal" section documenting the three strategies (pinned `open` + full-page
  screenshot / `container` prop / click-to-open in spec) and when to reach for
  each.

## 0.4.0

### Minor Changes

- [#66](https://github.com/yasmro/schatten/pull/66) [`14a2a88`](https://github.com/yasmro/schatten/commit/14a2a88253d1212dbd37c5d9b949ddd7b626408c) Thanks [@yasmro](https://github.com/yasmro)! - Add `Dialog` component — modal overlay for confirmations, form input, and
  detail views. The API is **flat**: state, header, and footer are passed as
  props; only the body is `children`.

  ```tsx
  <Dialog
    isOpen={isOpen}
    onOpenChange={setIsOpen}
    title="Delete account"
    description="This action cannot be undone."
    actionButton={{
      label: "Delete",
      variant: "destructive",
      onClick: handleDelete,
      isLoading: isDeleting,
    }}
    cancelButton={{ label: "Cancel" }}
    subActionButton={{ label: "Save as draft", onClick: handleDraft }}
  >
    <p>All data will be permanently removed.</p>
  </Dialog>
  ```

  **Highlights:**

  - **Controlled-only** open state — parent owns `isOpen` / `onOpenChange`.
    No `<DialogTrigger>`; any button can open the dialog.
  - **Per-slot `isLoading`** — set `isLoading: true` on `actionButton` or
    `subActionButton` to show a spinner on that button. Dialog disables
    the other footer buttons (and close ✕) and blocks ESC / overlay click
    / close ✕ dismissal while _any_ footer button is loading. Parent owns
    the state; symmetric with `Button.isLoading`.
  - **Three footer slots** with constrained variants:
    - `actionButton` (required): `primary | destructive`
    - `cancelButton` (optional): `secondary` (fixed)
    - `subActionButton` (optional): `tertiary` (fixed)
  - **Responsive footer layout**:
    - Desktop: `[SubAction] ────── [Cancel] [Action]`
    - Mobile: `[Action] / [Cancel] / ── separator ── / [SubAction]`
      (separator only when `subActionButton` is present)
  - **Long body content** scrolls inside the dialog automatically — Content
    caps at `calc(100vh - 2rem)` and the body region is the only scrolling
    surface (header / footer stay pinned).
  - **Built on** `@radix-ui/react-dialog` for focus trap, scroll lock, and
    a11y wiring (`aria-modal`, `aria-labelledby`, `aria-describedby`).

- [#65](https://github.com/yasmro/schatten/pull/65) [`4719c9c`](https://github.com/yasmro/schatten/commit/4719c9cd412fae571b3c4cb31c8d69222b8a0e19) Thanks [@yasmro](https://github.com/yasmro)! - Unify naming of "inverted" color treatment across tokens, primitives, and
  component variants. Previously the codebase had three forms — `inverse`
  (semantic tokens, Spinner variant), `inverted` (Button / Text / Callout /
  Toast variants), and the `-inv` suffix (primitive variables) — for the
  same concept. They are now all `inverted`.

  **Token renames** (Tailwind utilities, CSS custom properties):

  - `--color-inverse-foreground{,-muted,-subtle}` →
    `--color-inverted-foreground{,-muted,-subtle}`
  - Tailwind utilities: `bg-inverse-foreground` / `text-inverse-foreground`
    / `border-inverse-foreground` (and `-muted` / `-subtle` variants) →
    `bg-inverted-foreground` etc.

  **Component variant renames:**

  - `Spinner` `variant="inverse"` → `variant="inverted"`

  **Primitive renames** (internal — components should not consume these
  directly per the layer rules in `state-token-guideline.md`):

  - `--ink-{black,dark,medium,light,subtle}-inv` →
    `--ink-{...}-inverted`
  - `--paper-{white,warm,cream}-inv` → `--paper-{...}-inverted`

  Other component variant names (`Button` `variant="inverted"`, `Text`
  `color="inverted" | "inverted-muted" | "inverted-subtle"`) were already
  on the `inverted` form and are unchanged.

- [#75](https://github.com/yasmro/schatten/pull/75) [`23d816e`](https://github.com/yasmro/schatten/commit/23d816e5478ca310d6c2469befaf7d034836ac35) Thanks [@dependabot](https://github.com/apps/dependabot)! - Upgrade `tailwind-merge` from v2 to v3 for native Tailwind CSS v4
  alignment. Public API is unchanged; the internal `cn()` utility
  (`twMerge(clsx(...))`) continues to work exactly as before.

  **Consumer impact:** the bundled `tailwind-merge` peer/runtime
  resolution shifts from `^2.x` to `^3.x`. Apps that import
  `tailwind-merge` directly alongside `@yasmro/schatten` will now
  resolve to v3 — review the [tailwind-merge v3 migration notes](https://github.com/dcastil/tailwind-merge/releases/tag/v3.0.0)
  if you rely on advanced configuration (custom validators,
  `extendTailwindMerge`, etc.). Default `twMerge` behavior is
  preserved.

## 0.3.0

### Minor Changes

- [#61](https://github.com/yasmro/schatten/pull/61) [`dd169b3`](https://github.com/yasmro/schatten/commit/dd169b3ae9858ede756970f3a2294e4428e626a7) Thanks [@yasmro](https://github.com/yasmro)! - Add Callout component — inline status block for contextual notices, form
  warnings, and page-level announcements.

  - Same five variants (`default | success | error | warning | info`) and two
    treatments (`subtle` / `solid`) as Toast, sharing the state semantic
    tokens and variant icons (`Info` / `CircleCheck` / `TriangleAlert` /
    `CircleAlert`).
  - Renders inline (no portal, no auto-dismiss). Pass `onClose` to render a
    close button; omit it for a static, non-dismissible callout.
  - `action` accepts a free-form `ReactNode` so consumers can drop in a
    Button, link, or richer affordance — Callouts often persist on screen
    and may need more than the imperative `{label, onClick}` shape Toast
    uses.
  - Forwards refs and arbitrary HTML attributes (incl. `role`/`aria-*`) so
    consumers can opt into ARIA live regions for dynamic notices.

- [#64](https://github.com/yasmro/schatten/pull/64) [`ed586d8`](https://github.com/yasmro/schatten/commit/ed586d8b729d9c133991653b99f9a8ba52d1dab3) Thanks [@yasmro](https://github.com/yasmro)! - Add Separator component — visual divider for splitting content into
  sections, grouping menu items, or separating sidebar regions.

  - Built on `@radix-ui/react-separator` (Radix UI primitive).
  - Supports both `horizontal` (default) and `vertical` orientations.
  - `decorative` defaults to `true` so the divider is hidden from
    assistive technologies; pass `decorative={false}` to expose it as a
    semantic divider via `role="separator"` with the appropriate
    `aria-orientation`.
  - Styled with the `border` semantic token so it picks up theme + dark
    mode mappings automatically.

  Also bumps the dark-mode `--color-border` mapping from `gray-800` to
  `gray-700` so divider lines (the documented purpose of `--color-border`)
  stay visible against the `paper-warm-inv` background. Light mode is
  unchanged. No other lv1 component uses `border-border` directly — they
  all use `border-border-strong` — so the visual impact is limited to
  Separator and the dark-mode neutral-color audit cards in
  `Foundation/Color`.

- [#63](https://github.com/yasmro/schatten/pull/63) [`a0523bd`](https://github.com/yasmro/schatten/commit/a0523bdad0602dafc7ded9699c791fc7e744a2f6) Thanks [@yasmro](https://github.com/yasmro)! - Restructure Badge around state semantics, and extend state colors to
  Text — finishing the rollout that began with PR [#59](https://github.com/yasmro/schatten/issues/59) (state tokens) and
  continued with Toast and Callout.

  ### Badge — restructured (BREAKING)

  Badge now mirrors Toast / Callout's two-axis API:

  - **`variant`**: `default` | `success` | `error` | `warning` | `info`
    (state semantic, default `default`)
  - **`treatment`**: `subtle` | `solid` | `outline` (default `subtle` —
    picked because soft state tags blend better in list rows and tables;
    reach for `solid` when a Badge needs to stand out)
  - **`size`**: unchanged (`sm` | `md` | `lg`, default `md`)

  Badge is now state-oriented — there is no `destructive` variant. Use
  `<Badge variant="error">` for "failed/invalid" tags. For destructive
  _actions_, continue using `<Button variant="destructive">`.

  **Migration:**

  | Before                             | After                                                 |
  | ---------------------------------- | ----------------------------------------------------- |
  | `<Badge>` / `variant="primary"`    | `<Badge treatment="solid">` (filled neutral)          |
  | `<Badge variant="secondary">`      | `<Badge>` (default+subtle is the new default)         |
  | `<Badge variant="outline">`        | `<Badge treatment="outline">`                         |
  | `<Badge variant="destructive">`    | `<Badge variant="error" treatment="solid">`           |
  | `<Badge variant="success">` (etc.) | `<Badge variant="success" treatment="solid">` for the |
  |                                    | old filled look, or omit `treatment` for the new soft |
  |                                    | default                                               |

  The new shape unlocks combinations that weren't previously possible —
  e.g. `variant="error" treatment="subtle"` for a soft "Failed" tag in
  list rows, or `variant="success" treatment="outline"` for an ambient
  indicator.

  ### Text — extended

  Extends the `color` prop along three dimensions:

  - **Foreground hierarchy** — adds `subtle` for tertiary text (faintest
    of `default` / `muted` / `subtle`), so callsites can stop reaching
    for ad-hoc `text-foreground-subtle` className overrides.
  - **State** — adds `error`, `success`, `warning`, `info` for inline
    status text (form errors, success notes, beta callouts).
  - **Inverted hierarchy** — adds `inverted`, `inverted-muted`, and
    `inverted-subtle` (resolving to `text-inverse-foreground[-muted]
[-subtle]`) for placing Text on saturated surfaces such as a solid
    Toast / Callout or a primary-colored fill. Mirrors Button's
    `inverted` naming and the `default` / `muted` / `subtle` shape.

  ### Token corrections

  The existing `--color-foreground-subtle` token was previously mapped to
  `--ink-medium`, which made it visually _more_ prominent than
  `--color-foreground-muted` despite the docs labelling it as "tertiary
  text". This release re-maps `foreground-subtle` to a new
  `--ink-subtle` primitive (`sumi-300` light / `alabaster-600` dark) so
  the hierarchy is consistent: `default` > `muted` > `subtle` in both
  modes.

  Two new semantic tokens — `--color-inverse-foreground-muted` and
  `--color-inverse-foreground-subtle` — back the new Text inverted
  colors.

  ### Knock-on fix

  The `Button` `link` variant previously faded to `text-foreground-subtle`
  on hover. Because the corrected `subtle` is now a much fainter tier,
  that hover felt like the text was disappearing. Switched to
  `text-foreground-muted` and replaced the abrupt `hover:no-underline`
  with `hover:decoration-transparent` so the underline animates out
  alongside the existing color transition.

- [#59](https://github.com/yasmro/schatten/pull/59) [`a3eed42`](https://github.com/yasmro/schatten/commit/a3eed422f3d9c2db3c97496127565a7ea9f5e0a0) Thanks [@yasmro](https://github.com/yasmro)! - Add full state semantic tokens (`error`, `success`, `warning`, `info`), each with `{ base, hover, foreground, subtle }`.

  - New tokens: `error-*`, `info-*`, plus completed `success-foreground` / `success-subtle` / `warning-foreground` / `warning-subtle`.
  - Form components (`Input`, `Textarea`, `Select`, `Field`) now reference `error-*` instead of `destructive-*`. `destructive` remains for destructive actions (Button, Badge). `error` and `destructive` share vermillion under the hood, so visuals are unchanged.
  - `success` and `warning` base shades shifted from `500/400` to `600/500` (light/dark) for consistency with `destructive` / `error` / `info`. No component currently surfaces these visually outside Storybook docs.

- [#60](https://github.com/yasmro/schatten/pull/60) [`18a68c2`](https://github.com/yasmro/schatten/commit/18a68c207878ad5802a785da3b353f06ac299371) Thanks [@yasmro](https://github.com/yasmro)! - Add Toast component for transient, non-blocking notifications. Closes [#45](https://github.com/yasmro/schatten/issues/45).

  - Imperative API: `toast({ title, description, variant, treatment, duration, action })` callable from anywhere (no React context required). `useToast()` returns `{ toasts, toast, dismiss, dismissAll }` for hook-based access.
  - Mount `<Toaster position="bottom-center" />` once at the app root.
  - 5 variants — `default | success | error | warning | info` — mapped to the new state semantic tokens.
  - 2 treatments — `subtle` (default, soft colored background) and `solid` (filled saturated background) — selectable per toast.
  - Action button rendered from a simple `{ label, onClick, altText? }` shape; users do not need to wrap their own Button.
  - Always-visible icon-only close button (tertiary).
  - 6 viewport positions: top/bottom × left/center/right.
  - Dissolve enter/exit animation (opacity + subtle scale) defined in Toast.css; respects `prefers-reduced-motion`.
  - New peer dependency: `@radix-ui/react-toast`.

  The `vitest.setup.ts` now polyfills `Element.prototype.{has,set,release}PointerCapture` so jsdom-based tests can render Radix components that use Pointer Events.

## 0.2.1

### Patch Changes

- Fix: FieldSet `disabled` prop now propagates to all child Field components via context.

## 0.2.0

### Minor Changes

- ## New Components

  - **Field**: Form field wrapper with label, description, error, and tooltip support
  - **FieldSet**: Group multiple Field components with shared layout and error state
  - **Tooltip**: Radix-based tooltip component

  ## Enhancements

  - Field: Add `tooltip` prop for supplementary information with info icon
  - Input: Click on wrapper padding now focuses the input
  - Input: Show text cursor on wrapper hover

  ## Developer Experience

  - Add `/review-pr` command for structured PR self-review
  - Add `mergeRefs` utility for combining refs
  - Add Field context guideline documentation

## 0.1.0

### Minor Changes

- Add standalone CSS build with Lightning CSS

  - Add pre-compiled CSS distribution (`schatten.css`) that works without build tools
  - Users can link directly via CDN for zero-config usage
  - Uses Lightning CSS for bundling and minification
