---
'@yasmro/schatten': minor
---

CSS API: state token に `emphasis` rung を新設し、淡背景/白地の色文字を WCAG 2.1 AA small-text 4.5:1 に引き上げ (#344 Phase B / #147 Phase 2)。

state token の 4-token 形（`base` / `hover` / `foreground` / `subtle`）を **5-token 形**に拡張し、5 state（`error` / `success` / `warning` / `info` / `destructive`）それぞれに `--color-{state}-emphasis` を追加。

- **新トークン**: `--color-{state}-emphasis`（light `-700` / dark `-400`）= 「淡背景・白地の読みやすい色文字」専用。`base`（`-600`/`-500`）は塗り・ボーダー・アイコンが兼用していたが、文字としては subtle(`-50`)・白地で 4.2〜4.4:1 と AA small-text 4.5 未達だった。`emphasis` は文字役を `base` から分離し、塗りを暗くせずに AA を満たす。値は `hover` と一致するが意味が別（文字 vs インタラクティブ塗り）— `destructive` vs `error` と同じ same-value / distinct-name 方針。
- **コンポーネント影響**: 非 solid 面の色文字を `base` → `emphasis` に統一 — Callout / Toast / Badge の `subtle`（および Badge `outline`）の色文字、`Text color="error|success|warning|info"` の standalone、`Field` / `FieldSet` の error メッセージ・required `*`、`DropdownMenu` の destructive item。塗り・ボーダー・`foreground`（solid の白文字）・`subtle` 背景は不変。
- **solid は意図的に据え置き**: 「白文字・鮮やかな塗り・4.5:1」の trilemma は `-600`/`-500` 塗りでは同時成立しないため、solid は高強調treatの AA 例外として維持（意味は色のみでなくアイコン＋ラベルで担保 / WCAG 1.4.1）。`inverted-foreground-muted`/`-subtle`（彩色塗り上の淡い白系文字）も同根で incidental/large 専用と明文化。
- `--color-destructive-emphasis` は `DropdownMenu` destructive item（メニュー面の赤テキスト）が消費。`Button(destructive)` は solid（白 `foreground`）のため emphasis 非消費。
- manifest に CSS 変数 5 件を追加（クラス・状態属性は不変）。`resolution.test.ts` に leaf 解決と `state emphasis WCAG contrast` の AA テストを追加。
- VRT baseline は **色文字が閾値を超えて変化する分だけ**を faithful 再撮影（Badge / Callout subtle 系 / Toast subtle 系 / Text colors・state-colors・parity の計 33 件 + Color story の emphasis swatch 行追加 2 件）。Callout/Toast の solid 系・neutral は byte 一致で不変。CSSApi / CSSApiDist 等の集約 docs は emphasis 変化が `maxDiffPixelRatio` (1%) 閾値以下で既存 baseline のまま pass（docs の fullPage 再撮影は sub-pixel ノイズを持つため、guideline の mirror trap を避け再撮影しない）。コントラスト保証は `resolution.test.ts` の AA テストが担保。
