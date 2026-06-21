---
'@yasmro/schatten': minor
---

Add `Skeleton` — a shimmering placeholder shown while content is loading. Size
and shape are className-driven (`<Skeleton className="h-4 w-[200px]" />`); the
shimmer is disabled under `prefers-reduced-motion`. Decorative by default
(`aria-hidden`) — announce loading on the container via `role="status"` /
`aria-busy`.

CSS API: new `.st-skeleton` class, also published per-component at
`@yasmro/schatten/css/skeleton`.
