---
'@yasmro/schatten': minor
---

CSS API: Field / FieldSet を `.st-field` / `.st-fieldset` クラス API に
移行（#272 / #154 sweep-7）。**本 sub-issue 完了で全 18 lv1 コンポの
class API が出揃い、v0.9.0 の「消費者 Tailwind 不要化」が達成される**。

- **Field**: `.st-field` (root) + `.st-field__label-row/__label/__required-marker/__info/__description/__error` の 6 sub-element。
  `flexGrow` / `flexShrink` から派生する `--grow/--grow-0/--shrink/--shrink-0`
  4 modifier は CVA 外で `cn()` 経由付与（Badge `--icon-only` / Input
  `--date` precedent）。`flexBasis` は任意 CSS 値を取るため inline
  `style` のまま継続。**Field root に `[data-error]` 属性を新規 emit**
  （FieldSet → Field の collapse 経路を消費者が外部から observability
  できるよう、root 属性として開示）。Field 自身の error 視覚は引き続き
  内部 form input 側で表現（`.st-input-wrapper:has([aria-invalid])`）。
- **FieldSet**: `.st-fieldset` (root `<fieldset>` reset chrome) +
  `.st-fieldset__legend/__description/__children/__error` の 4
  sub-element。`direction="row"` / `wrap` は `__children` 側の 2
  modifier (`--row` / `--wrap`)。header (legend or description) 存在時
  の `margin-top:1rem` 分岐は `.st-fieldset:has(> .st-fieldset__legend)`
  / `:has(> .st-fieldset__description)` で CSS 側に閉じる（Callout
  sweep-2 / Toast sweep-6 の `:has()` precedent 踏襲）。`<fieldset>` の
  ブラウザ既定 border / padding / margin / min-width を root リセット。

### 完了処理（#154 / #58 phase-2 同時クローズ）

- `src/docs/CSSApi.stories.tsx` を全 18 コンポ chrome ベースに書換。
  Section / CodeBlock 等の page chrome は **page-local `<style>` ブロック**
  で吸収（`.cssapi-doc__*` プレフィックス — 公開 `.st-*` 面は増やさない、
  api-stability 配慮）。Field / FieldSet 章を追加し、必須 ARIA 属性
  チェックリストと vanilla HTML markup 例を明文化。末尾「Coming in
  subsequent sweeps」を削除し「Reference (all 18 lv1 components)」体に。
- README から「Tailwind v4 セットアップが必要」記述削除。Quick start /
  Two-layer architecture を「v0.9.0 完了済」体に更新。
- AGENTS.md に「**消費者は Tailwind 不要**」のコールアウトを追加
  （Schatten 内部は Tailwind v4 だが、`import '@yasmro/schatten/schatten.css'`
  1 行で動く旨）。

manifest snapshot: classes +18（Field 11 + FieldSet 7）。
`dataAttributes` / `cssVariables` には新規追加なし（`data-error` /
`data-disabled` は既出のため snapshot 差分なし）。

BREAKING(pre-1.0): 2 コンポが出力する className 文字列が Tailwind
utility 列（`flex flex-col gap-1.5` / `flex flex-col` / `flex-row` /
`flex-wrap` / `mt-4` / `text-base font-bold text-foreground` /
`text-sm text-foreground-muted` / `text-sm text-error` 等）から
semantic class（`st-field`、`st-fieldset st-fieldset__*`）に変更。
**Field root に `data-error="true"` 属性が新規 emit される**（観察可能な
追加 — React Props / `FieldContext` / `FieldSetContext` の shape は不変）。
VRT baseline を持つ消費者は再生成が必要（描画値は token 経由で不変、
sub-pixel diff のみ想定）。

closes #272
closes #154
