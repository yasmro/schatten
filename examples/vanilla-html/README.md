# Vanilla HTML

The purest framework-agnostic path: one `<link>` to `schatten.css`, then
hand-written `.st-*` class chains. No Tailwind, no build step, no JS runtime.

## Run

```sh
# 1. Build the package at the repo root (writes ../../dist/schatten.css)
cd ../.. && pnpm install && pnpm build && cd examples/vanilla-html

# 2. Open the page — a static file, no server required
open index.html         # macOS  (or: xdg-open / just double-click)
```

## What it exercises

- **Theme toggles** — the toolbar toggles Mode (`.dark` class on `<html>`) and
  Special (`data-theme="season--*"` on `<html>`). Both are one attribute write;
  the browser re-resolves every `var()` at the next paint.
- **区分 A/B** — Text, Icon, Button, Badge, Callout, Spinner,
  Input, Textarea, Checkbox, Switch, Radio, Separator, Field, FieldSet, Card,
  Skeleton, Table. Fully functional from the class API + HTML/ARIA attributes.
- **区分 C/D** — Avatar, Tooltip, Select, Toast, Popover, Tabs,
  Dialog, DropdownMenu. Shown as **static class rendering only**; their
  interactive behaviour needs the React layer (see the on-page note).

## CDN vs local dist

The `<head>` carries both `<link>` options (local dist active, CDN commented).
The local path stays the default — this harness verifies *unreleased* dist
changes, which a CDN default would mask behind the published CSS. The CDN
path was smoke-tested against `@0.15.0` (jsdelivr delivery path, byte-identical
to the npm tarball) — see
[docs/verification/framework-agnostic.md](../../docs/verification/framework-agnostic.md)
(#468). Only the `<link>` differs — the markup body is identical, so there is
no drift.

## Consumer wires ARIA

For form controls the class API renders the visual, but the consumer sets the
state attributes themselves (`aria-invalid`, `aria-describedby`,
`<label for>`). The Input and Field samples show the `aria-invalid="true"`
error wiring the React layer would otherwise do for you.
