<!--
Base your PR on `develop` (not `main`). Title follows Conventional Commits,
e.g. `feat(lv1): …`, `fix(tokens): …`, `docs: …`.
See CONTRIBUTING.md for the full flow.
-->

## What

<!-- What does this change, in 2–3 sentences? -->

## Why

<!-- Why is it needed? Link the issue this resolves. -->

closes #

## Related rules

<!-- List any .claude/rules/*.md you relied on, if relevant. -->

## Checklist

- [ ] Branch is based on `develop`
- [ ] `pnpm lint` passes
- [ ] `pnpm typecheck` passes
- [ ] `pnpm test --run` passes
- [ ] `pnpm test:vrt` passes (baselines committed for any new spec)
- [ ] a11y contract satisfied — `pnpm test:a11y` green (for component changes)
- [ ] New lv1 ships its full companion set (stories / test / VRT / class-API CSS / index re-export)
- [ ] Changeset added — or the `no-changeset` label applied for internal-only work
