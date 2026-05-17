---
---

Run the Storybook Preview and VRT workflows on `develop`-targeted PRs, not
just `main` (CI config only — no consumer-facing change, hence an empty
changeset). `ci.yml` already triggered on `[main, develop]`; the
`storybook-preview.yml` and `vrt.yml` workflows were left on `[main]` when the
repo moved to a develop-based flow, so develop PRs got no Storybook preview
and no visual-regression check.
