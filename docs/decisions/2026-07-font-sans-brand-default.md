# `--font-sans` のブランドスタックを dist の live default にする（unlayered 上書きの撤去）

- **Status**: Accepted
- **Related**: [#275](https://github.com/yasmro/schatten/pull/275) (entry.css 新設 — 上書きの carry-over 元),
  [#317](https://github.com/yasmro/schatten/issues/317) (lightningcss 化 — registrar 手写し時に温存),
  [#33](https://github.com/yasmro/schatten/pull/33) (standalone CSS — 上書きの本来の出自),
  [#184](https://github.com/yasmro/schatten/issues/184) (cap-height 補正 — ブランドフォント前提の設計) /
  [api-stability.md](../../.claude/rules/api-stability.md),
  [css-api.md](../../.claude/rules/css-api.md)

## Context

`dist/schatten.css` で `--font-sans` と `--font-serif` の既定挙動が非対称だった:

- `--font-serif` — `@layer theme` レジストラ
  ([public-tokens.css](../../src/styles/public-tokens.css)) のブランドスタック
  (`"EB Garamond", "Noto Serif JP", fallback`) がそのまま有効。consumer がフォントを
  ロードすればブランド描画、しなければ末尾の system stack へ自然にフォールバック
  (**load-to-activate**)。
- `--font-sans` — [entry.css](../../src/styles/entry.css) 末尾の unlayered
  `:root { --font-sans: var(--font-sans-fallback) }` が @layer theme を常に上書き
  (unlayered > layered)。レジストラのブランドスタック
  (`"Hanken Grotesk", "LINE Seed JP", …`) は **dead default** で、consumer が
  Google Fonts をロードしても `--font-sans` を自分で再宣言しない限り届かない。
  発見の経緯: apps/docs (#449 Phase 2) でフォント注入しても system 描画のままだった。

履歴を遡ると、この unlayered 宣言は **意図した opt-in 契約ではなく carry-over**:

1. #33 の standalone `src/schatten.css` では、ブランドスタックは Tailwind `@theme`
   専用ファイル (`themes/default/fonts.css`) にあり no-build エントリから import
   不能。unlayered `:root` 宣言が `--font-sans` の**唯一の定義**として必須だった。
2. #275 で Tailwind コンパイラ経由になり `@layer theme` にブランドスタックが
   入った時点で、この行は「必須の定義」から「意図しない上書き」に変質。
3. #317 の registrar 手写し時もそのまま温存。コメントは「これら(複数形)は inert
   defaults」と書いたが、実際に inert なのは sans だけで serif は live — 非対称の
   認識自体が不正確だった。

さらに dist 以外の全面が「sans もブランドが既定」を前提にしていた:

- Storybook (globals.css → base.css → fonts.css の @theme 順) では sans もブランド
  スタックが有効で、preview-head.html が Google Fonts をロードするため、**全 VRT
  baseline は Hanken Grotesk / LINE Seed JP で撮影**されている。
- `Tokens/Typography` ストーリーはブランド sans を "Default typeface for UI and
  body text" として文書化。
- reset.css の `font-size-adjust: cap-height 0.7` (#184) は「EB Garamond /
  Hanken Grotesk を CJK 高さへ持ち上げる」補正で、ブランドフォント前提。

## Decision

**entry.css の unlayered `--font-sans` 上書きを撤去し、serif と同じ
load-to-activate（ブランドスタックが live default、フォント未ロード時は stack
末尾の system fallback へ自然に落ちる）に統一する。** serif 側を opt-in 化する
逆方向は採らない。

- consumer の上書き recipe (`:root { --font-sans: "Your Font",
  var(--font-sans-fallback) }`) は unlayered > `@layer theme` なので従来どおり有効。
- 対称契約は [build-css.test.ts](../../scripts/__tests__/build-css.test.ts) の
  「declared once, in @layer theme only」テストで機械固定（`--font-sans:` /
  `--font-serif:` とも dist 内に宣言はちょうど 1 箇所）。

## Rationale

- **dist だけが少数派だった。** Storybook / VRT baseline / Typography ストーリー /
  registrar 宣言 / cap-height 補正のすべてが「ブランド sans が既定」を前提。実挙動を
  ドキュメントに合わせるより、dist を設計意図に合わせる方が変更面が小さく一貫する。
- **フォント未ロードの consumer には視覚的 no-op。** font-family マッチングは
  ロード済み/インストール済みフェイスへだけ解決するので、ブランドフォントを持たない
  環境では従来と同一描画。挙動が変わるのは「フォントをロードしたのに届かなかった」
  ケース（= 今回のバグ報告の形）だけ。
- **semver**: 変数名・上書き機構という *contract surface* は不変で、named slot の
  値が変わるだけ（api-stability.md の「value at the named slot」条項）。`minor` +
  `CSS API:` prefix で CHANGELOG に明記する。ローカルに Hanken Grotesk 等を
  インストール済みのユーザーでは描画が変わり得る点も CHANGELOG に記載。

## Consequences

- manifest (`cssVariables`) は変数名の集合なので不変 — `pnpm check:manifest` 緑。
- `CSSApiDist.vrt.spec.ts` の baseline は CI runner にブランドフォントが無いため
  不変（zero diff で通過することを確認済み）。
- レジストラの「inert defaults」コメントは実態（live defaults）に修正済み。
