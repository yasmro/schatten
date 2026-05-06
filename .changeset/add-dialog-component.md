---
'@yasmro/schatten': minor
---

Add `Dialog` component — modal overlay for confirmations, form input, and
detail views. The API is **flat**: state, header, and footer are passed as
props; only the body is `children`.

```tsx
<Dialog
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  isLoading={isLoading}
  title="Delete account"
  description="This action cannot be undone."
  actionButton={{ label: 'Delete', variant: 'destructive', onClick: handleDelete }}
  cancelButton={{ label: 'Cancel' }}
  subActionButton={{ label: 'Save as draft', onClick: handleDraft }}
>
  <p>All data will be permanently removed.</p>
</Dialog>
```

**Highlights:**

- **Controlled-only** open state — parent owns `isOpen` / `onOpenChange`.
  No `<DialogTrigger>`; any button can open the dialog.
- **`isLoading` orchestration** — when true, the action button shows a
  spinner, cancel / sub-action are disabled, and ESC / overlay click /
  close ✕ are blocked. Parent owns the state.
- **Three footer slots** with constrained variants:
  - `actionButton` (required): `primary | destructive`
  - `cancelButton` (optional): `secondary` (fixed)
  - `subActionButton` (optional): `tertiary` (fixed)
- **Responsive footer layout**:
  - Desktop: `[SubAction] ────── [Cancel] [Action]`
  - Mobile: `[Action] / [SubAction] / ── separator ── / [Cancel]`
    (separator only when `subActionButton` is present)
- **Built on** `@radix-ui/react-dialog` for focus trap, scroll lock, and
  a11y wiring.
