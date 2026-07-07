---
'@yasmro/schatten': patch
---

Drop the `tailwind-merge` dependency. Since the CVA output and component JSX
now emit only `.st-*` BEM classes (post `.st-*` sweep / dist de-Tailwind),
`cn()` had no conflicting Tailwind utilities to dedupe — `twMerge` was a no-op
passthrough over `.st-*` classes. `cn()` now wraps `clsx` alone, producing
byte-identical output while removing a runtime dependency from consumers'
installs. `cn` is internal (not part of the public API surface), so this is
non-breaking.

Scoped as `patch`: `cn` is not public API and the class-string output is
identical, so nothing consumers rely on within the contract changes. Any
consumer that depended on `tailwind-merge` being transitively installed via
`@yasmro/schatten` was relying on out-of-contract behavior and should declare
it as a direct dependency.
