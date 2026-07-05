---
'@yasmro/schatten': minor
---

BREAKING: Radix ベース lv1 (Select / Tooltip / Popover / DropdownMenu / Tabs / Radio / Checkbox / Switch / Separator / Avatar) の公開 Props 型から Radix 継承を全廃 (closes #156)。各 Props は「native 要素の props + curated 再宣言」になり、Radix が型上公開していた未使用 prop は型エラーになる。

Types: 公開シグネチャから `ComponentPropsWithoutRef<typeof *Primitive.*>` / `ComponentRef<…>` を除去し、`forwardRef` の要素型は具象 DOM 型 (`HTMLButtonElement` 等) に変更。新規 export: `SelectProps` / `SelectValueProps` / `SelectItemProps` / `TooltipProps` / `PopoverProps` / `PopoverAnchorProps` / `PopoverCloseProps` / `DropdownMenuProps` / `DropdownMenuSubProps` / `DropdownMenuRadioGroupProps` / `DropdownMenuCheckboxItemProps` / `DropdownMenuRadioItemProps` / `DropdownMenuSubContentProps` / `TabsListProps` / `TabsContentProps`。

公開から外れた主な prop (実需が出たら additive に再公開 — minor):

- 全対象: `dir`、Content 系の `forceMount` / `onEscapeKeyDown` / `onPointerDownOutside` / `onInteractOutside` / collision 系 (`avoidCollisions` / `collisionPadding` / `collisionBoundary` 等)。例外として `PopoverContent` の `onOpenAutoFocus` は既存利用があるため残置。
- `PopoverAnchor` / `PopoverClose`: `asChild` が公開 API から消え、Trigger と同じ「element child → 内部 asChild」方式に統一。`<PopoverClose asChild><Button/></PopoverClose>` は `<PopoverClose><Button/></PopoverClose>` に書き換え (描画結果は同一)。
- `TooltipProviderProps`: Radix 型の全面 re-export から `delayDuration` / `skipDelayDuration` / `disableHoverableContent` / `children` の 4 prop に縮小。

方針の本文は `.claude/rules/api-stability.md` の「Radix type boundary (anti-corruption layer)」を参照。境界は `radix-type-boundary.test.tsx` (drift ガード + @ts-expect-error pin) と、curated props を Radix primitive へ spread する実装自体の typecheck で機械的に維持される。
