# review-pr

PR をセルフレビューし、デザインシステムとして堅牢かチェックする。

## Usage

```
/project:review-pr [PR番号]
```

引数がない場合は現在のブランチの PR をレビューする。

## Review Checklist

### 1. コード品質

- [ ] TypeScript の型定義が適切か
- [ ] 不要なコード・コメントが残っていないか
- [ ] 命名規則が既存コードと一貫しているか (`isError` not `invalid`, etc.)

### 2. コンポーネント設計

- [ ] Props API が直感的で一貫しているか
- [ ] `.claude/rules/component-architecture.md` に準拠しているか
  - lv1 / lv2 の配置が責務分離に沿っているか
  - compound vs flat の選択が妥当か (Radix wrap → compound, 自前 → flat, 自前合成は lv2)
  - **新規に `asChild` prop が追加されていないか** (lv1 では不採用、`buttonVariants` / `textVariants` を使う代替パターンへ)
  - 依存方向が一方向か (`lv1 → lv2` 禁止、`barrel 経由` 禁止、新規 `lib/` utility は 2 consumer 必要)
  - 新規ファイルとして `.css` が増えていないか — 増えている場合は Tailwind/CVA で表現困難な理由があるか
- [ ] Context 連携パターンに従っているか (`.claude/rules/field-context-guideline.md` 参照)
  - 内部ラベルありコンポーネント: `field?.id` を使わない
  - 内部ラベルなしコンポーネント: `field?.id` を使う
- [ ] Fallback パターン: `field?.value ?? propValue ?? defaultValue`
- [ ] standalone / Field 内両方で動作するか

### 3. デザインシステムの堅牢性

- [ ] デザイントークン (CSS 変数) を使用しているか (ハードコード値を避ける)
- [ ] 既存コンポーネントと variant/size の命名が一貫しているか
- [ ] CVA パターンに従っているか (`src/variants/` に定義)
- [ ] 類似コンポーネントと Props API が統一されているか
  - 例: `isError`, `disabled`, `size` の命名と型
- [ ] スペーシング・タイポグラフィが Tailwind のスケールに沿っているか
- [ ] ダークモード対応: `text-foreground`, `bg-background` などセマンティックカラーを使用
- [ ] 破壊的変更がないか (既存 API の互換性)

### 4. アクセシビリティ (a11y)

- [ ] `aria-*` 属性が適切に設定されているか
- [ ] `aria-describedby` で description/error がリンクされているか
- [ ] `aria-invalid` がエラー時に設定されているか
- [ ] キーボード操作が可能か
- [ ] フォーカス管理が適切か

### 5. Storybook

- [ ] `Playground` story が最初にあるか
- [ ] `argTypes` の description が正確か (実際の挙動と一致)
- [ ] 必要なパターンが網羅されているか (variants, sizes, states)
- [ ] 英語で記述されているか

### 6. テスト

- [ ] 主要な機能にテストがあるか
- [ ] Context 連携のテストがあるか
- [ ] エッジケースが考慮されているか

### 7. ドキュメント

- [ ] PR body が最新の実装を反映しているか
- [ ] 必要に応じて Claude rules が更新されているか

## Instructions

1. `gh pr view [番号]` で PR 情報を取得
2. `gh pr diff [番号]` で変更内容を確認
3. 上記チェックリストに沿ってレビュー
4. 問題があれば具体的な修正提案を行う
5. 問題なければ "LGTM" と報告

$ARGUMENTS
