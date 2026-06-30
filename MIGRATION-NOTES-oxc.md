# PoC: Biome → oxc (oxlint + oxfmt) 移行ノート

ブランチ `poc/oxc-migration` で Biome を oxlint(lint) + oxfmt(format) + prettier(CSS/JSON)
に全面置換した実験記録。**マージ前提ではなく、移行の現実コストを可視化するためのもの。**

## 動いた状態（このブランチの到達点）

- `pnpm lint` = `oxlint -c .oxlintrc.json && pnpm format:check` → **exit 0（グリーン）**
- `oxlint-plugins/no-primitive-color.js`（GritQL プラグインの JS 移植）→ 移植テスト **12/12 通過**
- 境界 lint（`no-restricted-imports`、core/variants/themes の React 排除、カスタムメッセージ込み）→ 動作確認済み
- oxfmt の整形差分は **16 ファイルのみ**（258 中）。Biome とほぼ互換

## 速度（実測・ウォーム）

| | 対象 | 実測 |
|---|---|---|
| oxlint | src（TS のみ） | ~0.15s |
| `biome ci .` | TS + CSS + format 全部 | ~0.22s |

**差は約 70ms。** oxc が劇的に速いのは ESLint/Prettier 比であって、Biome 相手では体感差ほぼなし。

## 構成ファイルの対応

| Biome | oxc 置換後 |
|---|---|
| `biome.json` linter | `.oxlintrc.json` |
| `biome.json` formatter | `.oxfmtrc.json`（`oxfmt --migrate=biome` で自動生成）+ `.prettierrc.json`（CSS/JSON） |
| `biome-plugins/no-primitive-color.grit` | `oxlint-plugins/no-primitive-color.js`（ESLint 互換 JS プラグイン、alpha API） |
| `biome-plugins/*.test.ts`（`biome lint` を shell out） | `oxlint-plugins/no-primitive-color.test.ts`（`oxlint` を shell out） |
| lefthook `biome check` ジョブ | `oxlint` + `oxfmt --check` + `prettier --check` の3ジョブ |
| CI `pnpm lint` | 同左（中身が oxc に） |

## ルール対応表

| Biome ルール | oxlint ルール | 備考 |
|---|---|---|
| `correctness/useExhaustiveDependencies` | `react-hooks/exhaustive-deps` | ✅ |
| `correctness/noUnusedImports` / `noUnusedVariables` | `no-unused-vars` | ✅ |
| `style/useImportType` / `useExportType` | `typescript/consistent-type-imports` / `-exports` | ✅ oxlint の方が厳しい（`import()` 型注釈も検出） |
| `style/noNonNullAssertion` | `typescript/no-non-null-assertion` | ✅ |
| `suspicious/noConsole`（allow warn/error） | `no-console`（allow オプション同形） | ✅ |
| `style/noRestrictedImports`（境界・カスタムメッセージ） | `no-restricted-imports`（overrides scope） | ✅ |
| GritQL `no-primitive-color` | 自作 JS プラグイン `schatten/no-primitive-color` | ✅ 移植・テスト通過 |

## 移行で発生した「効いてくる」差分（重要）

### 1. 抑制コメントの非互換 — 全 19 箇所を手書き換え
`biome-ignore` を oxlint は認識しない。`oxlint-disable-next-line <rule>` へ書き換え必須。
さらに **ルール名が違う**ので機械置換できず、1件ずつ対応付けが要る。

### 2. 抑制コメントの「位置」が違う（ハマりどころ）
`react-hooks/exhaustive-deps` を Biome は **hook 呼び出し行**で、oxlint は **最初の未使用 dep 行**で報告する。
そのため `disable-next-line` を hook 行に置いても効かず、`/* oxlint-disable */ … /* oxlint-enable */`
のブロック抑制が必要だった（`ThemeProvider.tsx`）。

### 3. Biome `recommended` の広さ vs oxlint の明示オプトイン
Biome は `recommended: true` で a11y/security/suspicious を**デフォルト ON**。
oxlint はプラグインを明示有効化する設計。パリティを取るため `jsx-a11y` を足すと、
**Biome が一度も指摘しなかった新規違反が ~34 件**発火した：
- `jsx-a11y/control-has-associated-label` 9件（新規）
- `jsx-a11y/prefer-tag-over-role` 21件（うち Biome の `useSemanticElements` 相当 8件 + 新規13件）
- `no-noninteractive-tabindex`, `role-supports-aria-props` ほか

→ 大半はストーリー/パリティ系のデモ markup なので override で scope off、実コンポーネント
（Spinner の `role="status"`、Dialog の scrollable `tabIndex`）は個別に rationale 付き抑制。
**= 移行は「19 個の ignore 移行」では済まず、a11y サーフェス全体の再トリアージになる。**

### 4. 設定スコープの違い
- Biome は `files.includes` で対象を絞る（許可リスト方式）。oxlint は cwd 全 lint + `ignorePatterns`（除外リスト方式）。`scripts/*.mjs` ビルドスクリプトや `examples/` を明示除外しないと `no-console` で落ちる。
- oxlint の `overrides` は厳格で、Biome で書けた `"comment"` 等の任意キーを許さない。

### 5. oxfmt が `.prettierignore` を自動で読む（要注意）
prettier 用に書いた `.prettierignore`（`**/*.ts` 除外）を oxfmt が読み込み、**oxfmt が TS を全スキップ**する事故が発生。`oxfmt --ignore-path .gitignore` で明示分離して解決。oxfmt と prettier の対象は ignore 設定で厳密に分ける必要がある。

## 機能的に「失った」もの

| 失ったもの | 影響 | 代替 |
|---|---|---|
| **CSS の lint**（Biome `css.linter`） | CSS の構文/重複ルール検査が消える | stylelint 別建てが必要（本 PoC では未対応＝prettier の整形のみ） |
| Biome 単一バイナリで lint+format+CSS | ツールが oxlint + oxfmt + prettier の3つに増える | — |
| oxfmt の成熟度 | **0.57.0（1.0 未満）**。公開ライブラリの整形器としては安定性リスク | — |
| oxlint JS プラグイン API | **alpha・semver 対象外**。`no-primitive-color` がこの上に乗る | — |

## まだやってない（完全移行に残る作業）

- CSS lint の stylelint 置換（+ tailwind プラグイン設定）
- 境界 lint のテスト移植（`boundary-no-react.test.ts` は削除済み・未移植）
- ドキュメント全面更新：`CLAUDE.md` / `AGENTS.md` / `.claude/rules/lint-rules-guideline.md` は Biome/GritQL 前提で書かれており、記述・リンクの大規模書き換えが要る
- `.claude/skills/*`（prepare-release 等）の Biome 参照確認

## 結論

技術的には**移行可能**で、グリーンな状態まで到達できた。ただし得られる速度は ~70ms と誤差レベルで、
対価として (a) a11y サーフェス全体の再トリアージ、(b) CSS lint の別建て、(c) alpha/0.x ツールへの依存、
(d) ドキュメント大改修、を負う。**DX 向上目的では割に合わない**というのが PoC の結論。

転用できる学び：**ESLint/Prettier ベースの別プロジェクトなら oxc 第一候補**。Biome から乗り換える
動機は薄い、という線引きが実測で取れた。
