---
'@yasmro/schatten': minor
---

Toast の内部実装を `@radix-ui/react-toast` から [sonner](https://sonner.emilkowal.ski/) に置き換え、loading 機能を追加 (#318)。stacking / swipe / enter-exit / auto-dismiss は Sonner が所有し、各 toast の中身は Schatten が `toast.custom()` で描画する — 実コンポーネント (`Icon` / `Spinner` / `Button`) と `.st-toast*` クラスを使い、`Callout` と構造的に一致させた。

新機能 (additive):

- `toast.loading(input)` — spinner 表示・自動 dismiss 無効の loading toast。
- `toast.promise(promise, { loading, success, error, finally? })` — promise から loading→success/error を自動遷移。戻り値の `.unwrap()` で元の promise を取り戻して成功後の副作用 (遷移など) を繋げる。
- `<Toaster>` に additive な `expand` / `visibleToasts` props。
- `ToastFn` / `ToastPromiseOptions` / `ToastPromiseHandle` 型を公開。

BREAKING (pre-1.0):

- CSS API: viewport クラス `.st-toaster` と `.st-toaster--{6 position}` を撤去 (位置決めは `<Toaster position>` prop → Sonner に一本化)。`[data-swipe]` 状態属性を撤去 (swipe は Sonner 所有)。`.st-toast` の `[data-state]` 駆動 enter/exit アニメーションを撤去 (Sonner 所有)。新規 sub-element クラス `.st-toast__action` (action / close `<Button>` のスロット) を追加。
- Types: 公開 hook `useToast()` と型 `ToastData` を撤去 (自前 store を廃止)。

維持される surface: `toast()` の signature・`ToastInput` 全プロパティ・`ToastVariant` / `ToastAppearance` union・per-toast の `.st-toast--{tone}` / `.st-toast--{shape}` クラス・`.st-toast__{icon,content,title,description}` sub-element。action / close は実 lv1 `<Button>`、title / description のタイポグラフィは `Callout` と一致。

依存: `@radix-ui/react-toast` を削除、`sonner@2.0.7` を exact pin で追加 (Sonner は視覚契約に影響しうるため、api-stability の visual-contract-affecting 表 / prepare-release の dep 表に登録済み)。
