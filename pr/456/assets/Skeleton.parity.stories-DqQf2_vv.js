import{j as e}from"./iframe-hY9HGYY_.js";import{S as s}from"./Skeleton-DCqTUThg.js";import"./preload-helper-By4XEF-E.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css                 */const c={title:"Components/lv1/Skeleton",component:s,parameters:{layout:"centered",docs:{description:{component:'Parity stories — React `<Skeleton>` and a hand-written vanilla `<div>` with\nthe matching `.st-skeleton` class chain must render pixel-identical. Backs\nthe VRT in `Skeleton.parity.vrt.spec.ts`.\n\nThe React `<Skeleton>` import pulls in `Skeleton.css` as a side effect, so\nthe `.st-skeleton` rule is loaded for the vanilla half too. The VRT spec\npauses the shimmer before screenshotting so the comparison is a still frame.\n\nNote the vanilla side writes `aria-hidden="true"` by hand — the React layer\nsets it for you, but the framework-agnostic CSS path does not auto-wire ARIA\n(see css-api.md). It does not affect the visual, only the a11y contract.'}}}},a={name:"React vs Vanilla HTML",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-12",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsx("p",{className:"mb-2 text-xs text-foreground-muted",children:"React"}),e.jsxs("div",{className:"w-[240px] space-y-2",children:[e.jsx(s,{className:"h-4 w-full"}),e.jsx(s,{className:"h-4 w-3/4"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{className:"h-12 w-12 rounded-full"}),e.jsx(s,{className:"h-6 w-20 rounded-full"}),e.jsx(s,{className:"h-16 w-24"})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("p",{className:"mb-2 text-xs text-foreground-muted",children:"Vanilla HTML"}),e.jsxs("div",{className:"w-[240px] space-y-2",children:[e.jsx("div",{className:"st-skeleton h-4 w-full","aria-hidden":"true"}),e.jsx("div",{className:"st-skeleton h-4 w-3/4","aria-hidden":"true"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"st-skeleton h-12 w-12 rounded-full","aria-hidden":"true"}),e.jsx("div",{className:"st-skeleton h-6 w-20 rounded-full","aria-hidden":"true"}),e.jsx("div",{className:"st-skeleton h-16 w-24","aria-hidden":"true"})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'React vs Vanilla HTML',
  render: () => <div className="grid grid-cols-2 gap-12">
      <div className="space-y-6">
        <p className="mb-2 text-xs text-foreground-muted">React</p>
        <div className="w-[240px] space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <div className="flex items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-16 w-24" />
        </div>
      </div>
      <div className="space-y-6">
        <p className="mb-2 text-xs text-foreground-muted">Vanilla HTML</p>
        <div className="w-[240px] space-y-2">
          <div className="st-skeleton h-4 w-full" aria-hidden="true" />
          <div className="st-skeleton h-4 w-3/4" aria-hidden="true" />
        </div>
        <div className="flex items-center gap-4">
          <div className="st-skeleton h-12 w-12 rounded-full" aria-hidden="true" />
          <div className="st-skeleton h-6 w-20 rounded-full" aria-hidden="true" />
          <div className="st-skeleton h-16 w-24" aria-hidden="true" />
        </div>
      </div>
    </div>
}`,...a.parameters?.docs?.source}}};const o=["Parity"];export{a as Parity,o as __namedExportsOrder,c as default};
