# `--color-solid` ファミリーは theme ramp の「段 (rung)」を参照する

- **Status**: Accepted
- **Related**: [#150](https://github.com/yasmro/schatten/issues/150) (本判断),
  [#349](https://github.com/yasmro/schatten/issues/349) (`--shadow-card` define-only 据え置き),
  [#151](https://github.com/yasmro/schatten/issues/151) (Seasonal Showcase — 本判断の payoff を見せる側) /
  [theme-architecture.md](../../.claude/rules/theme-architecture.md),
  [state-token-guideline.md](../../.claude/rules/state-token-guideline.md),
  [component-api-conventions.md](../../.claude/rules/component-api-conventions.md)

## Context

#150 の原案は「seasonal テーマの影響面を `--color-accent-*` / `--shadow-card` まで
拡張する」だったが、両方とも成立しない:

- **accent**: `--color-accent-*` は token 系に存在せず、Pattern B に accent tone を
  置かないことは 2026-05-17 review で決定済み (component-api-conventions.md)。
- **shadow**: #349 が「`--shadow-card` は lv2 Card まで define-only 据え置き」で
  close。消費先が無い以上、seasonal が上書きしても画面には何も出ない。

一方で調査により本当の問題が判明した: **`--color-theme-*` を消費する lv1
コンポーネントがゼロ**（消費者は docs story と `tokens.ts` の JS export のみ）。
つまり seasonal テーマを切り替えても実コンポーネントは 1px も変わらず、
「ボタン色だけ変わる」という原案の現状認識すら実態より楽観的だった。

## Decision

**`--color-solid` ファミリー (4 token) を theme ramp の段参照に再配線する。**

```css
:root {  /* Mode: light は 700-on-100 の段を選ぶ */
  --color-solid: var(--color-theme-700);
  --color-solid-hover: var(--color-theme-900);
  --color-solid-foreground: var(--color-theme-100);
  --color-solid-foreground-hover: var(--color-theme-300);
}
.dark {  /* Mode: dark は 300-on-800 の段を選ぶ */
  --color-solid: var(--color-theme-300);
  --color-solid-hover: var(--color-theme-100);
  --color-solid-foreground: var(--color-theme-800);
  --color-solid-foreground-hover: var(--color-theme-700);
}
```

あわせて **default の theme ramp を blue → alabaster（中立 ramp）に変更**する。
段番号は旧 alabaster 直参照と 1:1 なので、Special 非適用時の computed value は
全 Mode で再配線前と完全一致（value-preserving seam、#238/#239 と同じ方式）。

役割分担は「**Mode が段を選び、Special が ramp を供給する**」。二軸は異なる
token に書き込む（Mode は `--color-solid*`、Special は `--color-theme-*`）ため、
specificity の衝突が構造的に発生しない。allowlist（`SEASONAL_THEME_METADATA` の
`['--color-theme-*']`）と `FORBIDDEN_SPECIAL_TOKENS` は一切変更しない。

## Rationale

- **規約に一切触れずに季節 payoff を作れる。** Special の所有範囲（allowlist）を
  広げる Option A は two-axis モデルの作り直しになる。solid を ramp の段参照に
  するだけで、Special の影響が「間接的に」solid へ流れる — 規約は不変のまま、
  seasonal 切替が Button primary / Badge・Callout・Toast の neutral × solid を
  一斉に再着色する。
- **「default ramp = 中立」はブランド文法と整合する。** Schatten の resting
  look は墨・胡粉のニュートラル + 朱/藍のブランドアクセント。「Special が無い
  = 表現レイヤーは無色。季節が ramp に色を吹き込む」という読みは、blue を
  default にしていた旧状態（コンポーネント消費者ゼロの飾り）より一貫する。
  `info` は blue primitive 直参照で独立しているため影響なし（むしろ docs 上の
  「theme も info も青」という紛らわしさが解消）。
- **コントラストが季節横断で構造的に安定する。** 全 seasonal ramp が同一の
  L ladder（700 = L 0.46、100 = L 0.96 等）を共有するため、fg-on-solid の
  コントラスト構造は hue に依らずほぼ一定（概算 6.4:1、AA 余裕）。
- **foreground も ramp 内（tinted）**: 「桜色ボタンにほんのり桜がかった白文字」。
  fg だけ alabaster 固定にするとペアリングの一貫性が崩れるため不採用
  （2026-06-10 確定、論点 3）。

## Consequences

- (+) seasonal 切替に初めて実コンポーネントの payoff が生まれる（#151 showcase が
  これを見せる）。
- (+) 公開 surface の名前変化ゼロ（manifest 不変）。default 見た目の変化ゼロ
  （素の VRT が green であることが seam の証明）。
- (−) default `--color-theme-*` の解決先が blue → alabaster に変わる。`tokens.ts`
  の `themeN` JS 値・`bg-theme-*` utility・docs の swatch は default で無彩色化
  （pre-1.0、changeset で告知）。
- (−) **substitution freeze**: custom property 内の `var()` は宣言要素で置換が
  確定するため、`data-theme` は `<html>` 以外では solid を再着色できない。
  本番経路（`:root[data-theme]`）は無影響だが、セル単位のテーマサンドボックス
  (Theme Audit story) は solid ファミリーをセルスコープで再宣言する必要がある
  （story 側は production semantic.css からの抽出で複製ゼロ）。
- **季節 hue × state color の意味衝突は受容**（2026-06-10 確定、論点 4）:
  winter-deep (hue 0) / spring-early (12) / summer-peak (45) は destructive red
  (22) と同系。色のみに依存しない規約（icon + label 必須）で a11y 契約は維持
  され、Theme Audit に solid × destructive 隣接比較を常設して可視化する。
  彩度ブースト spike には「state hue との最小距離」を design constraint として
  課す。
- **持ち越し**: 彩度ブースト spike（chroma boost / L 微調整 / hue 距離制約、
  designer-owned）。着手は #151 showcase で実物を見てから。

## Review

- 2026-06-10 — #150 の refinement で 7 論点を確定し本判断を記録。
  `themes/default/colors.css` は当初「削除して一本化」としたが、
  `./themes/default` が公開 export subpath（`dist/themes/default/index.css`、
  CSSApiDist VRT が固定）であるため **値同期 + resolution.test.ts の mirror
  テストで drift 防御** に補正した。
