# 公開 CSS 変数は 4 層命名モデルで確定 — セマンティック `--color-*` は名前空間化せず据え置く

- **Status**: Accepted
- **Related**: [#231](https://github.com/yasmro/schatten/issues/231) (本判断),
  [#116](https://github.com/yasmro/schatten/issues/116) (起点: SSR 検証でクラス名カニバルと変数軸の分離が判明),
  [#154](https://github.com/yasmro/schatten/issues/154) (クラス名側カニバルを解決),
  [#185](https://github.com/yasmro/schatten/issues/185) (semantic brand tokens — 完了済み),
  [#239](https://github.com/yasmro/schatten/issues/239) (危険赤 vs 朱の色味分岐 — designer 所掌),
  [#317](https://github.com/yasmro/schatten/issues/317) (dist 脱 Tailwind — `--default-*-font-family` 論点の送り元) /
  [api-stability.md](../../.claude/rules/api-stability.md),
  [theme-architecture.md](../../.claude/rules/theme-architecture.md),
  [css-api.md](../../.claude/rules/css-api.md)

## Context

#154（v0.9.0）で `.st-*` **クラス名**のカニバル（外部 Tailwind との衝突）は解決した。
しかし schatten が `:root` に配る **CSS 変数（トークン）** は別軸で未解決だった:
`--color-background` / `--color-error` / `--color-theme-*` 等のセマンティックトークンは、
自前のデザイントークンを持つ消費者（shadcn ベース等）が同名を定義していると `:root` 上で
last-wins で潰し合う。CSS 変数の改称は api-stability.md 上 1.0 後 `major`。よって 1.0 RC
（契約凍結点）**前に** 公開変数の命名規約を確定する必要があった。

監査時点で命名規約は 3 つ混在していた: 素の generic（`--color-*` `--spacing-*` …）、
`--st-` prefix 済み（`--st-duration-*` `--st-spinner-*`）、`--schatten-` component 内部
（`--schatten-callout-*`、非公開）。加えてプリミティブ（`--blue-500` `--vermillion-*` …）は
dist `:root` に unlayered で出荷されるが manifest 非掲載。`--st-` prefix は既に稼働中で
`.st-` クラス prefix（css-api.md）と揃っており、名前空間 prefix 候補は事実上 `--st-` に確定。

## Decision

### 判断原則

> **衝突は、両者が名前に載せる「意味」が食い違うときだけ有害。値が慣習で一致する
> トークンの衝突は無害（むしろ利点）。**

`--spacing-4`=1rem は Tailwind/consumer と慣習一致で無害・共有が正しい。
`--color-background` は DS ごとに意味が違い有害（shadcn の ≠ Schatten の）。

### 4 層命名モデル（api-stability.md に規約本体を集約）

| 層 | 名前 | 公開 | ルール |
|---|---|---|---|
| 1 プリミティブ | `--blue-500` `--vermillion-*` `--red-*` `--gray-*` … | **非公開**（dist `:root` に出るが manifest 非掲載） | 内部。自由に改称/retune 可。consumer は semantic 層を使う |
| 2 Tailwind 慣習 | `--spacing-*` `--text-*` `--leading-*` `--font-*` `--radius-sm..2xl` `--shadow-sm..xl` | 公開・bare | Tailwind スケール名を維持。値は共有慣習なので衝突は意図的 |
| 3 セマンティック | `--color-*`（surfaces/foregrounds/state/inverted/brand/`--color-theme-*`）、schatten 固有別名 `--radius-control/surface/pill` `--shadow-card/popover/modal/toast` `--z-*` `--motion-*` | 公開・bare | 意味は Schatten 固有。別フル DS と衝突しうる — **名前空間化せず、衝突を文書化して回避側は consumer scoping** |
| 4 schatten 名前空間 | `--st-duration-*` `--st-spinner-*` | 公開・`--st-` | Tailwind 慣習に無い軸（enter/exit timing、spinner cadence）。`.st-` クラス prefix と整合。新規 schatten 固有トークンはここ |

### 確定した個別判断

1. **セマンティック `--color-*` 層 = 据え置き（全 prefix 化しない）。** `--st-color-*` への
   全面 prefix 化は検討の上 **却下**。理由は下記 Rationale。DoD「衝突が機構的に回避 **or**
   回避できないトークンを明示」の **明示側** で満たす: 4 層表がその文書化であり、消費者向け
   回避策（Schatten の `:root` トークンをコンテナ配下に scope する）が緩和策。
2. **`--default-font-family` / `--default-mono-font-family` = 撤去（#317 からの論点、案 (c)）。**
   公開面に残る唯一の Tailwind 規約名で、consumer 自前 Tailwind v4 preflight と `@layer theme`
   内で衝突する。vendored preflight（[preflight.css](../../src/styles/preflight.css)）を
   `var(--font-sans, …)` / `var(--font-mono, …)` 直参照に書換え、2 変数削除。間接層は元々
   `--font-sans` / `--font-mono` を指すだけなので **解決値不変**（同一フォント）。
   manifest −2（129→127）、`CSS API:` changeset。
3. **プリミティブのブランド中立化（`--vermillion-* → --brand-red-*`）= 見送り。** プリミティブは
   manifest 非掲載＝非公開。manifest-authoritative（api-stability.md）に従えば非公開トークンの
   改称は破壊的変更に当たらず「1.0 前必須」の対象外。#185（CLOSED）が公開経路 `--color-vermillion` /
   `--color-indigo` を既に提供済み。色味の分岐は `--vermillion-*` / `--red-*` の primitive 分離で
   表現済み。名前の美観は designer spike #239 の所掌。api-stability.md「What is not public API」に
   プリミティブ CSS 変数を明記して checkpoint を解消。

## Rationale

- **全 prefix 化（案 A / `--st-color-*`）を却下した理由。** 機構的に衝突ゼロになる一方、
  (a) 約50色変数のリネーム + migration ガイド、(b) 全 consumer のトークン名が冗長化、
  (c) layer-2 の「`--spacing-*` / `--text-*` が Tailwind 名を意図的に共有する」利点を破壊。
  有害衝突は「Schatten + 別フル DS を同一 `:root` で併用」の稀ケースのみで、その消費者は
  global rename を全員に強いるより Schatten トークンを scope して自衛できる。コスト/便益が
  見合わない。
- **`--color-theme-*` を bare のまま残す理由（theme-architecture 連動）。** seasonal パレットは
  全て `--color-theme-*` を書き、allowlist は `['--color-theme-*']`。名前空間化すると全 Special
  セレクタと allowlist チェッカに波及し theming 上の便益ゼロ。`data-theme` 切替は属性 mutation で
  同名を paint time に再解決するため影響なし。
- **manifest が公開面の権威。** プリミティブ非公開の根拠はこの一点に尽きる。同じ governance で
  `destructive` / `error` を同値でも別 semantic に保つのと整合。

## Consequences

- (+) 値変更ゼロ・VRT 影響ゼロ（`--default-*` 撤去は解決値不変）。公開 surface は −2 のみ。
- (+) 命名規約が api-stability.md に一本化され、新規トークンの公開/命名判断に指針ができた。
- (−) セマンティック `--color-*` の衝突は機構的にはゼロにならない（稀ケースは consumer scoping で
  自衛）。これは意図した trade-off。
- **持ち越しなし。** プリミティブ改称は行わない確定判断。#239（色味）と CONTRIBUTING.md
  （v0.15.0、本 doc を SSOT として参照）は別トラック。

## Review

- 2026-07-07 — #231 の refinement で 4 層モデル・案 B 採用・#317(c)・プリミティブ据え置きを確定。
  実装は preflight.css / public-tokens.css / manifest（−2）+ ルール文書3本（api-stability /
  theme-architecture / css-api）+ 本 decision log。`CSS API:` changeset 1本（patch）。
