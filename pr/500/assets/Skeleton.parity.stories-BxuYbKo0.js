import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{n,t as r}from"./Skeleton-D6kTkr5V.js";var i,a,o,s;e((()=>{n(),i=t(),a={title:`Components/lv1/Skeleton`,component:r,parameters:{layout:`centered`,docs:{description:{component:'Parity stories — React `<Skeleton>` and a hand-written vanilla `<div>` with\nthe matching `.st-skeleton` class chain must render pixel-identical. Backs\nthe VRT in `Skeleton.parity.vrt.spec.ts`.\n\nThe React `<Skeleton>` import pulls in `Skeleton.css` as a side effect, so\nthe `.st-skeleton` rule is loaded for the vanilla half too. The VRT spec\npauses the shimmer before screenshotting so the comparison is a still frame.\n\nNote the vanilla side writes `aria-hidden="true"` by hand — the React layer\nsets it for you, but the framework-agnostic CSS path does not auto-wire ARIA\n(see css-api.md). It does not affect the visual, only the a11y contract.'}}}},o={name:`React vs Vanilla HTML`,render:()=>(0,i.jsxs)(`div`,{className:`grid grid-cols-2 gap-12`,children:[(0,i.jsxs)(`div`,{className:`space-y-6`,children:[(0,i.jsx)(`p`,{className:`mb-2 text-xs text-foreground-muted`,children:`React`}),(0,i.jsxs)(`div`,{className:`w-[240px] space-y-2`,children:[(0,i.jsx)(r,{className:`h-4 w-full`}),(0,i.jsx)(r,{className:`h-4 w-3/4`})]}),(0,i.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,i.jsx)(r,{className:`h-12 w-12 rounded-full`}),(0,i.jsx)(r,{className:`h-6 w-20 rounded-full`}),(0,i.jsx)(r,{className:`h-16 w-24`})]})]}),(0,i.jsxs)(`div`,{className:`space-y-6`,children:[(0,i.jsx)(`p`,{className:`mb-2 text-xs text-foreground-muted`,children:`Vanilla HTML`}),(0,i.jsxs)(`div`,{className:`w-[240px] space-y-2`,children:[(0,i.jsx)(`div`,{className:`st-skeleton h-4 w-full`,"aria-hidden":`true`}),(0,i.jsx)(`div`,{className:`st-skeleton h-4 w-3/4`,"aria-hidden":`true`})]}),(0,i.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,i.jsx)(`div`,{className:`st-skeleton h-12 w-12 rounded-full`,"aria-hidden":`true`}),(0,i.jsx)(`div`,{className:`st-skeleton h-6 w-20 rounded-full`,"aria-hidden":`true`}),(0,i.jsx)(`div`,{className:`st-skeleton h-16 w-24`,"aria-hidden":`true`})]})]})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s=[`Parity`]}))();export{o as Parity,s as __namedExportsOrder,a as default};