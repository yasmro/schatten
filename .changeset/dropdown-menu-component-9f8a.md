---
'@yasmro/schatten': minor
---

feat(lv1): add DropdownMenu component (Radix-based compound, closes #41)

トリガーからメニューを表示する複合コンポーネント。`@radix-ui/react-dropdown-menu`
ラッパー。`DropdownMenuItem`(`variant` `default`/`destructive`、`inset`、`icon`)、
`CheckboxItem`、`RadioGroup`/`RadioItem`、`Sub*`(サブメニュー)、`Label` /
`Separator` / `Group` / `Shortcut` をフルセットで同梱。`区分 D`(JS 必須)のため
parity は持たず、manifest + class API unit test + React VRT で契約を担保。

CSS API: adds `.st-dropdown-menu__content` / `__sub-content` / `__item` /
`__item--destructive` / `__item--inset` / `__item-icon` / `__checkbox-item` /
`__radio-item` / `__item-indicator` / `__label` / `__label--inset` /
`__separator` / `__group` / `__shortcut` / `__sub-trigger` /
`__sub-trigger-chevron`, served at `@yasmro/schatten/css/dropdownmenu`.
