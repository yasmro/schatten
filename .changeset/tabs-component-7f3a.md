---
'@yasmro/schatten': minor
---

CSS API: Tabs コンポーネント（lv1）を追加。`@radix-ui/react-tabs` ベースの
compound（`Tabs` / `TabsList` / `TabsTrigger` / `TabsContent`）。`.st-tabs` /
`.st-tabs__list` / `.st-tabs__trigger` / `.st-tabs__content` クラスと、
アクティブ表示の `[data-state="active"]`・縦横レイアウトの `[data-orientation]`
state hook を新規公開（closes #44）。

単一スタイルの line 型（アクティブ tab を foreground 下線、非アクティブを muted）。
`orientation`（horizontal/vertical）と `activationMode`（automatic/manual）を
公開 API として持つ。orientation のスタイル分岐は、List/Trigger が Root の値を
prop で受け取れない compound 構造のため Radix の `[data-orientation]` 属性
セレクタで行う（css-api.md §state に compound 例外として明文化）。
