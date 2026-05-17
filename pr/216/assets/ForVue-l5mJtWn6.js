import{j as e}from"./iframe-CKl8dxHr.js";import{u as r,M as o}from"./blocks-D5YWZK2K.js";import"./preload-helper-DXyjqzuD.js";import"./index-BjoRPERn.js";function s(t){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Getting Started/For Vue"}),`
`,e.jsx(n.h1,{id:"for-vue",children:"For Vue"}),`
`,e.jsxs(n.p,{children:[`Schatten's CSS bundle and CVA variant helpers work in Vue 3 the same way
they work in any non-React framework: import the stylesheet once at
app entry, then bind variant class strings into your templates with
`,e.jsx(n.code,{children:":class"}),"."]}),`
`,e.jsxs(n.p,{children:["This page covers the setup, the ",e.jsx(n.code,{children:"<style scoped>"}),` interaction, and the
v0.14.0 migration path.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"status-v070",children:"Status (v0.7.0)"}),`
`,e.jsxs(n.p,{children:["The matrix is identical to ",e.jsx(n.a,{href:"?path=/docs/getting-started-for-astro--docs",children:"For Astro"}),":"]}),`
`,e.jsxs(n.p,{children:[`| Surface | Today | Stable from |
|---|---|---|
| Design tokens (CSS vars) | Production-ready | v1.0.0 |
| CVA variant helpers (`,e.jsx(n.code,{children:"buttonVariants(...)"}),`, …) | Production-ready bridge | v1.0.0 |
| Class-based component API (`,e.jsx(n.code,{children:'<button class="btn">'}),") | Phantom — selectors exist, CSS rules don't yet | v0.14.0 → v1.0.0 |"]}),`
`,e.jsxs(n.p,{children:["Progress in ",e.jsx(n.a,{href:"https://github.com/yasmro/schatten/issues/58",rel:"nofollow",children:"#58"}),`. Until
v0.14.0 ships, the recommended Vue bridge is `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"buttonVariants(...)"})}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"install",children:"Install"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`pnpm add @yasmro/schatten
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"react"})," / ",e.jsx(n.code,{children:"react-dom"})," peer deps are ",e.jsx(n.strong,{children:"not required"}),` for Layer A
(`,e.jsx(n.code,{children:"schatten.css"})," + ",e.jsx(n.code,{children:"@yasmro/schatten/variants"}),`). They are only needed if
you separately mount React inside Vue (uncommon).`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"setup--global-stylesheet",children:"Setup — global stylesheet"}),`
`,e.jsxs(n.p,{children:["Pick ",e.jsx(n.strong,{children:"one"}),` of the entry-import strategies. Both reach every component
in your tree because CSS custom properties cascade from `,e.jsx(n.code,{children:":root"}),"."]}),`
`,e.jsxs(n.h3,{id:"option-a-import-in-maints",children:["Option A: import in ",e.jsx(n.code,{children:"main.ts"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// src/main.ts
import { createApp } from 'vue'
import '@yasmro/schatten/schatten.css'
import App from './App.vue'

createApp(App).mount('#app')
`})}),`
`,e.jsxs(n.h3,{id:"option-b-import-in-the-root-appvue-unscoped",children:["Option B: import in the root ",e.jsx(n.code,{children:"<App.vue>"})," (unscoped)"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<!-- src/App.vue -->
<script setup lang="ts">
import '@yasmro/schatten/schatten.css'
<\/script>

<template>
  <router-view />
</template>
`})}),`
`,e.jsx(n.p,{children:`Either works. Option A keeps Vue components free of CSS side effects;
Option B colocates the stylesheet with the app root. Schatten doesn't
have a preference.`}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"style-scoped--what-to-expect",children:[e.jsx(n.code,{children:"<style scoped>"})," — what to expect"]}),`
`,e.jsx(n.p,{children:`This is the most common Vue-specific question, so it gets its own
section.`}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Schatten's classes live globally."})," When you import ",e.jsx(n.code,{children:"schatten.css"}),`,
its rules (Tailwind utilities, base reset, animation keyframes) land
in the global stylesheet. They don't go through Vue's `,e.jsx(n.code,{children:"data-v-*"}),`
scoping pipeline.`]}),`
`,e.jsx(n.p,{children:"That means:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"<style scoped>"})," cannot override a Schatten class."]}),` A rule like
`,e.jsx(n.code,{children:".btn--primary { background: pink }"}),` inside a scoped block becomes
`,e.jsx(n.code,{children:".btn--primary[data-v-abc123]"}),`, which doesn't match the Schatten-
emitted element (no `,e.jsx(n.code,{children:"data-v-abc123"})," attribute). Use ",e.jsx(n.code,{children:":deep(...)"}),`
if you intentionally need to override:`,`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<style scoped>
:deep(.btn) {
  /* applies inside this component's subtree */
}
</style>
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"<style scoped>"})," does not conflict with Schatten either."]}),` Your
component-local CSS lives in its own scope; Schatten's lives in the
global scope. They coexist without interfering.`]}),`
`]}),`
`,e.jsxs(n.p,{children:["The general recommendation: keep Schatten styling outside of ",e.jsx(n.code,{children:"scoped"}),`
blocks. Reach for `,e.jsx(n.code,{children:":deep()"}),` only when you have a deliberate reason to
retune Schatten's output in one component.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"layer-a--today-cva-bridge",children:"Layer A — today (CVA bridge)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"buttonVariants(...)"})," returns a class string. Bind it with ",e.jsx(n.code,{children:":class"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<script setup lang="ts">
import { buttonVariants } from '@yasmro/schatten/variants'
<\/script>

<template>
  <!-- Primary button -->
  <button :class="buttonVariants({ variant: 'primary' })">
    Save
  </button>

  <!-- Anchor styled as a secondary button -->
  <a
    href="/docs"
    :class="buttonVariants({ variant: 'secondary', size: 'sm' })"
  >
    Docs
  </a>

  <!-- Link-style action -->
  <a href="/settings" :class="buttonVariants({ variant: 'link' })">
    Settings
  </a>
</template>
`})}),`
`,e.jsxs(n.p,{children:["For a ",e.jsx(n.code,{children:"<RouterLink>"})," or ",e.jsx(n.code,{children:"<NuxtLink>"}),`, pass the variant string to its
`,e.jsx(n.code,{children:":class"})," prop the same way:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<template>
  <RouterLink
    to="/dashboard"
    :class="buttonVariants({ variant: 'primary' })"
  >
    Dashboard
  </RouterLink>
</template>
`})}),`
`,e.jsx(n.h3,{id:"button-variant-vocabulary",children:"Button variant vocabulary"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Button"})," follows ",e.jsx(n.strong,{children:"Pattern A"}),` (single-axis role-based) per
`,e.jsx(n.a,{href:"../../../.claude/rules/component-api-conventions.md",children:e.jsx(n.code,{children:"component-api-conventions.md"})}),":"]}),`
`,e.jsxs(n.p,{children:["| ",e.jsx(n.code,{children:"variant"}),` | Use for |
|---|---|
| `,e.jsx(n.code,{children:"primary"})," ",e.jsx(n.em,{children:"(default)"}),` | Main CTA. Solid brand-accent fill. |
| `,e.jsx(n.code,{children:"secondary"}),` | Outlined neutral. Secondary actions. |
| `,e.jsx(n.code,{children:"tertiary"}),` | Ghost (no border / no bg). Low-priority actions. |
| `,e.jsx(n.code,{children:"destructive"}),` | Delete / remove. Solid vermillion fill. |
| `,e.jsx(n.code,{children:"inverted"}),` | Ghost button on a saturated surface (e.g. inside a solid Toast). |
| `,e.jsx(n.code,{children:"link"})," | Inline text-link styling. |"]}),`
`,e.jsxs(n.p,{children:["Pattern A has ",e.jsxs(n.strong,{children:["no ",e.jsx(n.code,{children:"appearance"})," prop"]}),`. If you find yourself wanting
one for a Button, the role vocabulary is what you want to extend —
open an issue, don't add a second axis locally.`]}),`
`,e.jsxs(n.p,{children:[`The same approach works for every variant function exported from
`,e.jsx(n.code,{children:"@yasmro/schatten/variants"})," (",e.jsx(n.code,{children:"badgeVariants"}),", ",e.jsx(n.code,{children:"inputVariants"}),`,
`,e.jsx(n.code,{children:"calloutVariants"}),", ",e.jsx(n.code,{children:"textVariants"}),", ",e.jsx(n.code,{children:"textareaVariants"}),`,
`,e.jsx(n.code,{children:"selectTriggerVariants"}),", …)."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"layer-a--v0140-onward",children:"Layer A — v0.14.0 onward"}),`
`,e.jsxs(n.p,{children:[`When the data-attribute class API lands in v0.14.0
(`,e.jsx(n.a,{href:"https://github.com/yasmro/schatten/issues/58",rel:"nofollow",children:"#58"}),`), the same Vue
template drops the JS helper:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<template>
  <!-- v0.14.0 onward — no buttonVariants() needed -->
  <button class="btn" data-variant="solid">Save</button>
  <a href="/docs" class="btn" data-variant="outline">Docs</a>
</template>
`})}),`
`,e.jsxs(n.p,{children:["Until then, ",e.jsx(n.code,{children:"buttonVariants(...)"}),` is the supported bridge. The code
above parses today, but the `,e.jsx(n.code,{children:".btn"}),` rule has no declarations attached
in v0.7.0.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tokens--works-everywhere-today",children:"Tokens — works everywhere, today"}),`
`,e.jsx(n.p,{children:`You don't need the variant helpers to consume tokens. Any Vue template
can reference a CSS variable directly:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<template>
  <div
    :style="{
      background: 'var(--color-error-subtle)',
      color: 'var(--color-error)',
      padding: '12px',
    }"
  >
    Something went wrong.
  </div>
</template>
`})}),`
`,e.jsxs(n.p,{children:["For typed pointers, the ",e.jsx(n.code,{children:"tokens"}),` export gives you a value map and
union types:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<script setup lang="ts">
import { tokens } from '@yasmro/schatten/tokens'
<\/script>

<template>
  <div
    :style="{
      background: tokens.color.errorSubtle,
      color: tokens.color.error,
    }"
  >
    Something went wrong.
  </div>
</template>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"see-also",children:"See also"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/yasmro/schatten#quick-start",rel:"nofollow",children:"README — Quick start"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/getting-started-for-astro--docs",children:"For Astro"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/yasmro/schatten/issues/58",rel:"nofollow",children:"#58 — framework-agnostic CSS roadmap"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"../../../.claude/rules/component-api-conventions.md",children:e.jsx(n.code,{children:"component-api-conventions.md"})})," — full variant matrix"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"../../../.claude/rules/api-stability.md",children:e.jsx(n.code,{children:"api-stability.md"})})," — public API contract (effective from v1.0)"]}),`
`]})]})}function l(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{l as default};
