---
'@yasmro/schatten': minor
---

Add Toast component for transient, non-blocking notifications. Closes #45.

- Imperative API: `toast({ title, description, variant, treatment, duration, action })` callable from anywhere (no React context required). `useToast()` returns `{ toasts, toast, dismiss, dismissAll }` for hook-based access.
- Mount `<Toaster position="bottom-center" />` once at the app root.
- 5 variants — `default | success | error | warning | info` — mapped to the new state semantic tokens.
- 2 treatments — `subtle` (default, soft colored background) and `solid` (filled saturated background) — selectable per toast.
- Action button rendered from a simple `{ label, onClick, altText? }` shape; users do not need to wrap their own Button.
- Always-visible icon-only close button (tertiary).
- 6 viewport positions: top/bottom × left/center/right.
- Dissolve enter/exit animation (opacity + subtle scale) defined in Toast.css; respects `prefers-reduced-motion`.
- New peer dependency: `@radix-ui/react-toast`.

The `vitest.setup.ts` now polyfills `Element.prototype.{has,set,release}PointerCapture` so jsdom-based tests can render Radix components that use Pointer Events.
