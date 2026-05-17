import{j as n}from"./iframe-CKl8dxHr.js";import{u as r,M as a}from"./blocks-D5YWZK2K.js";import"./preload-helper-DXyjqzuD.js";import"./index-BjoRPERn.js";function t(s){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Getting Started/For Astro"}),`
`,n.jsx(e.h1,{id:"for-astro",children:"For Astro"}),`
`,n.jsx(e.p,{children:`Schatten works in Astro without any React runtime: import the CSS bundle
once, and either use the CVA variant helpers to compose class strings, or
drop into a React island when you need the typed component layer.`}),`
`,n.jsx(e.p,{children:"This page covers the two paths and where they meet."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"status-v070",children:"Status (v0.7.0)"}),`
`,n.jsxs(e.p,{children:["Schatten ships ",n.jsx(e.strong,{children:"two consumer surfaces"}),` today. They are at different
maturity levels in v0.7.0 — be aware which you are using:`]}),`
`,n.jsxs(e.p,{children:[`| Surface | What ships today | When it stabilizes |
|---|---|---|
| `,n.jsx(e.strong,{children:"Design tokens"})," (CSS vars: ",n.jsx(e.code,{children:"--color-theme-600"}),", ",n.jsx(e.code,{children:"--color-foreground"}),", …) | Production-ready | Stable from ",n.jsx(e.strong,{children:"v1.0.0"}),` |
| `,n.jsx(e.strong,{children:"CVA variant helpers"})," (",n.jsx(e.code,{children:"buttonVariants(...)"}),", ",n.jsx(e.code,{children:"inputVariants(...)"}),", …) | Production-ready bridge | Stable from ",n.jsx(e.strong,{children:"v1.0.0"}),` |
| `,n.jsx(e.strong,{children:"Class-based component API"})," (",n.jsx(e.code,{children:'<button class="btn" data-variant="solid">'}),") | Phantom — the ",n.jsx(e.code,{children:".btn"})," selector is referenced internally but has no CSS rules yet | Lands in ",n.jsx(e.strong,{children:"v0.14.0"}),", stable from ",n.jsx(e.strong,{children:"v1.0.0"})," |"]}),`
`,n.jsxs(e.p,{children:["Progress is tracked in ",n.jsx(e.a,{href:"https://github.com/yasmro/schatten/issues/58",rel:"nofollow",children:"#58"}),`.
Until v0.14.0 ships, the `,n.jsxs(e.strong,{children:["recommended Astro bridge is ",n.jsx(e.code,{children:"buttonVariants(...)"})]}),`
(see "Layer A — today" below).`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"install",children:"Install"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sh",children:`pnpm add @yasmro/schatten
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"react"})," / ",n.jsx(e.code,{children:"react-dom"}),` peer deps are only required if you use React
islands (see `,n.jsx(e.a,{href:"#react-island-mixing",children:"React island mixing"}),` below). For a
pure Astro / SSR-only setup, the CSS bundle alone has no runtime
dependencies.`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"setup--global-stylesheet",children:"Setup — global stylesheet"}),`
`,n.jsx(e.p,{children:"Import the CSS bundle once at your app's shared layout:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-astro",children:`---
// src/layouts/Layout.astro
import '@yasmro/schatten/schatten.css'
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>My Astro site</title>
  </head>
  <body>
    <slot />
  </body>
</html>
`})}),`
`,n.jsx(e.p,{children:"The bundle ships:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Primitive scales (",n.jsx(e.code,{children:"--vermillion-*"}),", ",n.jsx(e.code,{children:"--green-*"}),", ",n.jsx(e.code,{children:"--blue-*"}),", …)"]}),`
`,n.jsxs(e.li,{children:["Semantic tokens (",n.jsx(e.code,{children:"--color-foreground"}),", ",n.jsx(e.code,{children:"--color-error"}),", ",n.jsx(e.code,{children:"--color-theme-*"}),", …)"]}),`
`,n.jsx(e.li,{children:"Tailwind utilities used by Schatten's CVA strings"}),`
`,n.jsx(e.li,{children:"Component animation keyframes (Spinner, Toast)"}),`
`]}),`
`,n.jsxs(e.p,{children:["The package declares ",n.jsx(e.code,{children:'"sideEffects": ["**/*.css"]'}),`, so the CSS import is
not tree-shaken away.`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"layer-a--today-cva-bridge",children:"Layer A — today (CVA bridge)"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"buttonVariants(...)"}),` (and its siblings) return a Tailwind class string
that you can apply to any element — including a plain Astro `,n.jsx(e.code,{children:"<button>"}),`,
an Astro `,n.jsx(e.code,{children:"<a>"}),", or a ",n.jsx(e.code,{children:"<NextLink>"}),"-style framework link."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-astro",children:`---
import '@yasmro/schatten/schatten.css'
import { buttonVariants } from '@yasmro/schatten/variants'
---

<!-- Plain button, primary -->
<button class={buttonVariants({ variant: 'primary' })}>Save</button>

<!-- An <a> styled as a secondary button -->
<a
  href="/docs"
  class={buttonVariants({ variant: 'secondary', size: 'sm' })}
>
  Docs
</a>

<!-- Link-style action -->
<a href="/settings" class={buttonVariants({ variant: 'link' })}>
  Settings
</a>
`})}),`
`,n.jsx(e.h3,{id:"button-variant-vocabulary",children:"Button variant vocabulary"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Button"})," follows ",n.jsx(e.strong,{children:"Pattern A"}),` (single-axis role-based) per
`,n.jsx(e.a,{href:"../../../.claude/rules/component-api-conventions.md",children:n.jsx(e.code,{children:"component-api-conventions.md"})}),`.
The full vocabulary:`]}),`
`,n.jsxs(e.p,{children:["| ",n.jsx(e.code,{children:"variant"}),` | Use for |
|---|---|
| `,n.jsx(e.code,{children:"primary"})," ",n.jsx(e.em,{children:"(default)"}),` | Main CTA. Solid brand-accent fill. |
| `,n.jsx(e.code,{children:"secondary"}),` | Outlined neutral. Secondary actions. |
| `,n.jsx(e.code,{children:"tertiary"}),` | Ghost (no border / no bg). Low-priority actions. |
| `,n.jsx(e.code,{children:"destructive"}),` | Delete / remove. Solid vermillion fill. |
| `,n.jsx(e.code,{children:"inverted"}),` | Ghost button intended for placement on a saturated surface (e.g. inside a solid Toast). |
| `,n.jsx(e.code,{children:"link"})," | Inline text-link styling. |"]}),`
`,n.jsxs(e.p,{children:["Pattern A has ",n.jsxs(e.strong,{children:["no ",n.jsx(e.code,{children:"appearance"})," prop"]}),`. If you reach for one, the role
vocabulary is what you want to extend — open an issue rather than
inventing a second axis locally.`]}),`
`,n.jsxs(e.p,{children:[`The same approach works for the other variant functions exported from
`,n.jsx(e.code,{children:"@yasmro/schatten/variants"}),": ",n.jsx(e.code,{children:"badgeVariants"}),", ",n.jsx(e.code,{children:"inputVariants"}),`,
`,n.jsx(e.code,{children:"inputWrapperVariants"}),", ",n.jsx(e.code,{children:"calloutVariants"}),", ",n.jsx(e.code,{children:"textVariants"}),`,
`,n.jsx(e.code,{children:"textareaVariants"}),", ",n.jsx(e.code,{children:"selectTriggerVariants"}),", and others."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"react-island-mixing",children:"React island mixing"}),`
`,n.jsx(e.p,{children:`When a piece of UI needs interactivity that's awkward to express in
Astro alone (a dialog, a tooltip, a controlled form input), mount it as
a React island. Schatten's React layer composes the same tokens, so the
visual output is identical to the CVA bridge.`}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-astro",children:`---
// src/pages/index.astro
import '@yasmro/schatten/schatten.css'
import { Button } from '@yasmro/schatten'
import { buttonVariants } from '@yasmro/schatten/variants'
---

<Layout>
  {/* React island — hydrates on the client */}
  <Button client:load variant="primary">Sign up</Button>

  {/* Pure Astro — no JS shipped */}
  <a
    href="/learn-more"
    class={buttonVariants({ variant: 'secondary' })}
  >
    Learn more
  </a>
</Layout>
`})}),`
`,n.jsx(e.p,{children:"Two practical notes:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Pick the cheaper option per element."}),` Static-looking surfaces
(badges, callouts that don't dismiss, headings) cost nothing as
CVA-styled markup. Reach for an island only when you actually need
the React lifecycle (event handlers, state, Radix-driven portal
components like `,n.jsx(e.code,{children:"Dialog"})," / ",n.jsx(e.code,{children:"Tooltip"})," / ",n.jsx(e.code,{children:"Select"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Hydration strategy is your call."})," ",n.jsx(e.code,{children:"client:load"}),", ",n.jsx(e.code,{children:"client:idle"}),`,
`,n.jsx(e.code,{children:"client:visible"}),", ",n.jsx(e.code,{children:'client:only="react"'}),` all work. Schatten does not
prescribe one.`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"layer-a--v0140-onward",children:"Layer A — v0.14.0 onward"}),`
`,n.jsxs(e.p,{children:[`When the data-attribute class API lands in v0.14.0
(`,n.jsx(e.a,{href:"https://github.com/yasmro/schatten/issues/58",rel:"nofollow",children:"#58"}),`), the same Astro
snippet drops the JS helper entirely:`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-astro",children:`---
import '@yasmro/schatten/schatten.css'
---

<!-- v0.14.0 onward — no buttonVariants() needed -->
<button class="btn" data-variant="solid">Save</button>
<a href="/docs" class="btn" data-variant="outline">Docs</a>
`})}),`
`,n.jsxs(e.p,{children:["Until then, ",n.jsx(e.code,{children:"buttonVariants(...)"}),` is the supported bridge — the code
above will compile and parse today, but the `,n.jsx(e.code,{children:".btn"}),` rule has no
declarations attached. Use the CVA helper for now and migrate when
v0.14.0 ships.`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"tokens--works-everywhere-today",children:"Tokens — works everywhere, today"}),`
`,n.jsx(e.p,{children:`You don't need the variant helpers to consume the design tokens. Any
Astro file can reference a CSS variable directly:`}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-astro",children:`<div style="background: var(--color-error-subtle); color: var(--color-error); padding: 12px;">
  Something went wrong.
</div>
`})}),`
`,n.jsxs(e.p,{children:["For typed pointers, the ",n.jsx(e.code,{children:"tokens"}),` export gives you a value map and union
types:`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-astro",children:`---
import { tokens } from '@yasmro/schatten/tokens'
---

<div style={\`background: \${tokens.color.errorSubtle}; color: \${tokens.color.error};\`}>
  Something went wrong.
</div>
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"see-also",children:"See also"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/yasmro/schatten#quick-start",rel:"nofollow",children:"README — Quick start"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/yasmro/schatten/issues/58",rel:"nofollow",children:"#58 — framework-agnostic CSS roadmap"})}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"../../../.claude/rules/component-api-conventions.md",children:n.jsx(e.code,{children:"component-api-conventions.md"})})," — full variant matrix"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"../../../.claude/rules/api-stability.md",children:n.jsx(e.code,{children:"api-stability.md"})})," — public API contract (effective from v1.0)"]}),`
`]})]})}function d(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{d as default};
