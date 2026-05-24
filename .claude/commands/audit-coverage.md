# audit-coverage

lv1 全コンポーネントについて、必須 companion ファイル (test / VRT spec /
class-API CSS / `__snapshots__/` baseline / `index.ts` re-export、区分 A/B
ならさらに `*.parity.stories.tsx` / `*.parity.vrt.spec.ts`) の過不足を
一括スキャンする。

既存の hook (`scripts/check-lv1-companions.mjs` の編集トリガー、
`scripts/check-lv1-export-integrity.mjs` のセッション終了トリガー) は
**当該 1 件のみ** を警告ベースで見ているのに対し、本コマンドは **任意の
タイミングで全 lv1** の充足度をまとめて可視化する。

## Usage

```
/project:audit-coverage
```

引数なし。

## Flow

1. `pnpm audit:coverage` を Bash で実行し、`stdout` を取得する。
2. 受け取ったレポート (markdown) をそのままユーザに渡す。
   - レポートは「集計ヘッダ → 全 lv1 のテーブル → 不足ファイル一覧 → 推奨
     アクション」の順で並んでいる。**順序を変えたり、要約に圧縮したりしない**
     — ユーザはテーブルを直接読みたいケースが多い。
3. 不足が **あった** 場合のみ、末尾で「次にやること」を 1〜3 行に絞って
   案内する。判断分岐:
   - 新規 lv1 を追加して companion を忘れた → `/add-lv1-component` のスキャ
     フォールドを案内、または `scripts/check-lv1-companions.mjs` の
     hook 出力を再確認するよう示唆。
   - 既存 lv1 に VRT が抜けた → `/add-vrt-spec` を案内し、その後の
     baseline 生成は **必ず手動** ([vrt-spec-guideline](../rules/vrt-spec-guideline.md)
     "Re-baselining" 参照) と添える。
   - `__snapshots__/` baseline が無い → `pnpm test:vrt -- --grep "{Name}"`
     を一度回して `__snapshots__/*.png` を作る (ただし「blind update
     禁止」の前提を必ず注意する)。
   - barrel export drift → `src/components/lv1/index.ts` への `export
     { ... } from './{Name}'` 追記を案内。
   - `Orphaned exports` セクションがあれば、`index.ts` 側の export 行を
     消すか、消えたディレクトリを復活させるかをユーザに尋ねる。
4. **新規ブランチ作成や `pnpm test:vrt:update` を勝手に走らせない**。本
   コマンドは「現状把握」までで終わる。

## Bash で走らせる正規ルート

```bash
pnpm audit:coverage          # markdown 表 (人間向け、既定)
pnpm audit:coverage --check  # 不足検出時 exit 1 (CI 用)
pnpm audit:coverage --json   # AuditReport の JSON (machine-readable)
```

`--format=plain` も対応 (tab 区切り)。JSON schema は
[scripts/audit-coverage.mjs](../../scripts/audit-coverage.mjs) のヘッダ
コメント参照。

## 出力の読み方

各セルの意味:

| 記号 | 意味 |
|---|---|
| ✓ | 期待されるファイル / re-export が存在する |
| ✗ | 期待されるが不在 — action required |
| — | 期待されない (区分 C/D の `Dialog` / `Select` / `Toast` / `Tooltip` の parity 列) |
| n/a | 上位列 (`tsx`) が `✗` のため判定不能 |

`tsx` が無いディレクトリは WIP scaffold か別用途の可能性が高いので、他列
は cascade で `n/a` にして「真に欠落 = 1 セル」に絞っている。

## Gotchas

- **lv2 はスコープ外** (post-1.0 で再評価)。`src/components/lv2/` が存在
  すれば「out of scope」と末尾に注意書きが出るだけで、ディレクトリ数
  カウントすらしない。
- **区分 A/B vs C/D** は [scripts/audit-coverage.mjs](../../scripts/audit-coverage.mjs)
  冒頭の `PARITY_EXEMPT` で hard-code。新規 lv1 を追加するたびに、その
  コンポが parity 不要 (区分 C/D) なら `PARITY_EXEMPT` を更新する必要が
  ある。判定基準は [vrt-spec-guideline.md §"Parity stories — when to
  write one, when to skip"](../rules/vrt-spec-guideline.md)。
- **`pnpm audit:coverage` は read-only**。ファイル生成 / 編集 / VRT
  baseline 更新は一切しない。
