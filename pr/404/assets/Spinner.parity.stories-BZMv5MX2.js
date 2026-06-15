import{j as e}from"./iframe-BTReaLz-.js";import{S as s}from"./Spinner-CIvE_BDA.js";import"./preload-helper-DEYMk7Xz.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css                */const o={title:"Components/lv1/Spinner",component:s,parameters:{layout:"centered",docs:{description:{component:"Parity stories — React `<Spinner>` and a hand-written vanilla SVG with\nthe matching `.st-spinner` / `.st-spinner__*` class chain must render\npixel-identical. Backs the VRT in `Spinner.parity.vrt.spec.ts`.\n\nThe vanilla side reproduces both spinner types (default rotating circle\nand ripple) using the same SVG geometry the React side emits. The VRT\nspec pauses CSS animations before screenshotting so the comparison is a\nstill-frame match."}}}},n=({className:r})=>e.jsxs("div",{className:r,role:"status",children:[e.jsxs("svg",{className:"st-spinner__rotor",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[e.jsx("circle",{className:"st-spinner__track",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"3"}),e.jsx("path",{className:"st-spinner__arc",d:"M22 12a10 10 0 0 0-10-10",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round"})]}),e.jsx("span",{className:"sr-only",children:"Loading"})]}),i=({className:r})=>e.jsxs("div",{className:r,role:"status",children:[e.jsxs("svg",{viewBox:"0 0 72 72",fill:"none","aria-hidden":"true",children:[e.jsx("circle",{className:"st-spinner__dot",cx:"36",cy:"36",r:"2.6"}),e.jsx("circle",{className:"st-spinner__ripple-1",cx:"36",cy:"36",r:"10",stroke:"currentColor",strokeWidth:"1.4"}),e.jsx("circle",{className:"st-spinner__ripple-2",cx:"36",cy:"36",r:"10",stroke:"currentColor",strokeWidth:"1.2"})]}),e.jsx("span",{className:"sr-only",children:"Loading"})]}),a={name:"React vs Vanilla HTML",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-12",children:[e.jsxs("div",{className:"space-y-8",children:[e.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"React"}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(s,{size:"sm"}),e.jsx(s,{size:"md"}),e.jsx(s,{size:"lg"})]}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(s,{type:"ripple",size:"sm"}),e.jsx(s,{type:"ripple",size:"md"}),e.jsx(s,{type:"ripple",size:"lg"})]}),e.jsxs("div",{className:"flex items-center gap-6 rounded-md bg-solid p-4",children:[e.jsx(s,{variant:"inverted"}),e.jsx(s,{variant:"inverted",type:"ripple"})]})]}),e.jsxs("div",{className:"space-y-8",children:[e.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"Vanilla HTML"}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(n,{className:"st-spinner st-spinner--default st-spinner--sm"}),e.jsx(n,{className:"st-spinner st-spinner--default st-spinner--md"}),e.jsx(n,{className:"st-spinner st-spinner--default st-spinner--lg"})]}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(i,{className:"st-spinner st-spinner--default st-spinner--sm"}),e.jsx(i,{className:"st-spinner st-spinner--default st-spinner--md"}),e.jsx(i,{className:"st-spinner st-spinner--default st-spinner--lg"})]}),e.jsxs("div",{className:"flex items-center gap-6 rounded-md bg-solid p-4",children:[e.jsx(n,{className:"st-spinner st-spinner--inverted st-spinner--md"}),e.jsx(i,{className:"st-spinner st-spinner--inverted st-spinner--md"})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'React vs Vanilla HTML',
  render: () => <div className="grid grid-cols-2 gap-12">
      <div className="space-y-8">
        <p className="text-xs mb-2 text-foreground-muted">React</p>
        <div className="flex items-center gap-6">
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </div>
        <div className="flex items-center gap-6">
          <Spinner type="ripple" size="sm" />
          <Spinner type="ripple" size="md" />
          <Spinner type="ripple" size="lg" />
        </div>
        <div className="flex items-center gap-6 rounded-md bg-solid p-4">
          <Spinner variant="inverted" />
          <Spinner variant="inverted" type="ripple" />
        </div>
      </div>
      <div className="space-y-8">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>
        <div className="flex items-center gap-6">
          <DefaultVanilla className="st-spinner st-spinner--default st-spinner--sm" />
          <DefaultVanilla className="st-spinner st-spinner--default st-spinner--md" />
          <DefaultVanilla className="st-spinner st-spinner--default st-spinner--lg" />
        </div>
        <div className="flex items-center gap-6">
          <RippleVanilla className="st-spinner st-spinner--default st-spinner--sm" />
          <RippleVanilla className="st-spinner st-spinner--default st-spinner--md" />
          <RippleVanilla className="st-spinner st-spinner--default st-spinner--lg" />
        </div>
        <div className="flex items-center gap-6 rounded-md bg-solid p-4">
          <DefaultVanilla className="st-spinner st-spinner--inverted st-spinner--md" />
          <RippleVanilla className="st-spinner st-spinner--inverted st-spinner--md" />
        </div>
      </div>
    </div>
}`,...a.parameters?.docs?.source}}};const x=["Parity"];export{a as Parity,x as __namedExportsOrder,o as default};
