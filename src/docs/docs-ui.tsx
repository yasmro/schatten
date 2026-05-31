import type { ReactNode } from 'react'

/*
 * Shared prose primitives for the `Tokens/*` docs stories (Spacing, Elevation,
 * and future Radius / Motion pages). These carry no public API surface — they
 * exist only to keep the docs pages typographically consistent without each
 * page re-declaring the same five helpers.
 *
 * This file is NOT a `*.stories.tsx`, so Storybook does not load it as stories
 * (`.storybook/main.ts` globs `*.stories.@(ts|tsx)` only). It is plain JSX
 * imported by the story files.
 */

export const PageTitle = ({ children }: { children: ReactNode }) => (
  <h1 className="text-4xl font-bold text-foreground mb-4">{children}</h1>
)

export const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-2xl font-bold text-foreground mt-8 mb-2">{children}</h2>
)

export const SubsectionTitle = ({ children }: { children: ReactNode }) => (
  <h3 className="text-base font-semibold text-foreground mt-6 mb-3">{children}</h3>
)

export const Lead = ({ children }: { children: ReactNode }) => (
  <p className="text-base text-foreground-muted leading-relaxed mb-8">{children}</p>
)

export const Note = ({ children }: { children: ReactNode }) => (
  <p className="text-sm text-foreground-muted mb-3">{children}</p>
)
