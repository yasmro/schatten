import{j as e}from"./iframe-DJFZS-ui.js";import{C as s}from"./Callout-Dop8-h9-.js";import"./preload-helper-By2mdhBQ.js";import"./utils-DCADjnpI.js";import"./index-CkIaN0ex.js";/* empty css                */import"./circle-alert-B9ncPUXW.js";import"./createLucideIcon-Ctrno5Bx.js";import"./triangle-alert-CyAY4WB-.js";import"./info-DEWf-8ML.js";import"./Button-BIXGU5D7.js";import"./index-Cp3rEOZ0.js";import"./index-C-j6ZBwa.js";import"./Spinner-BvZnJbDG.js";/* empty css                */import"./x-UjqbHOQD.js";const C={title:"Components/lv1/Callout",component:s,parameters:{layout:"padded",docs:{description:{component:"Parity stories — React `<Callout>` and a hand-written vanilla `<div>`\nwith the matching `.st-callout` class chain must render pixel-identical.\nBacks the VRT in `Callout.parity.vrt.spec.ts`.\n\nThe vanilla side reproduces the icon + title + body structure using the\nsub-element classes (`.st-callout__icon` / `__title` / `__body`). The\nClose button is omitted from parity coverage because it depends on\nButton's class chain (which lands in sweep-3) — parity for that button\nwill be covered by Button.parity.stories.tsx.\n\nLucide icon SVG bodies are inlined here, pinned to lucide-react@1.x\n(currently 1.14.0). When the dep is bumped, re-verify the paths match\nthe Lucide source."}}}},l=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"st-callout__icon","aria-hidden":"true",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M12 16v-4"}),e.jsx("path",{d:"M12 8h.01"})]}),c=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"st-callout__icon","aria-hidden":"true",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"m9 12 2 2 4-4"})]}),r=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"st-callout__icon","aria-hidden":"true",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",x2:"12",y1:"8",y2:"12"}),e.jsx("line",{x1:"12",x2:"12.01",y1:"16",y2:"16"})]}),t={name:"React vs Vanilla HTML",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-12 max-w-5xl",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"React"}),e.jsx(s,{variant:"neutral",title:"Neutral subtle",children:"The quick brown fox jumps over the lazy dog."}),e.jsx(s,{variant:"success",title:"Saved",children:"Changes have been persisted."}),e.jsx(s,{variant:"error",appearance:"solid",title:"Failed",children:"Could not connect to the upstream."}),e.jsx(s,{variant:"info",children:"Title-less body — runs centered alongside the icon."})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"Vanilla HTML"}),e.jsx("div",{className:"st-callout st-callout--neutral st-callout--subtle",children:e.jsxs("div",{className:"flex gap-3 items-start",children:[e.jsx(l,{}),e.jsxs("div",{className:"flex min-w-0 flex-1 flex-col gap-1",children:[e.jsx("div",{className:"st-callout__title",children:"Neutral subtle"}),e.jsx("div",{className:"st-callout__body",children:"The quick brown fox jumps over the lazy dog."})]})]})}),e.jsx("div",{className:"st-callout st-callout--success st-callout--subtle",children:e.jsxs("div",{className:"flex gap-3 items-start",children:[e.jsx(c,{}),e.jsxs("div",{className:"flex min-w-0 flex-1 flex-col gap-1",children:[e.jsx("div",{className:"st-callout__title",children:"Saved"}),e.jsx("div",{className:"st-callout__body",children:"Changes have been persisted."})]})]})}),e.jsx("div",{className:"st-callout st-callout--error st-callout--solid",children:e.jsxs("div",{className:"flex gap-3 items-start",children:[e.jsx(r,{}),e.jsxs("div",{className:"flex min-w-0 flex-1 flex-col gap-1",children:[e.jsx("div",{className:"st-callout__title",children:"Failed"}),e.jsx("div",{className:"st-callout__body",children:"Could not connect to the upstream."})]})]})}),e.jsx("div",{className:"st-callout st-callout--info st-callout--subtle",children:e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx(l,{}),e.jsx("div",{className:"flex min-w-0 flex-1 flex-col gap-1",children:e.jsx("div",{className:"st-callout__body",children:"Title-less body — runs centered alongside the icon."})})]})})]})]})};var a,i,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'React vs Vanilla HTML',
  render: () => <div className="grid grid-cols-2 gap-12 max-w-5xl">
      <div className="space-y-3">
        <p className="text-xs mb-2 text-foreground-muted">React</p>
        <Callout variant="neutral" title="Neutral subtle">
          The quick brown fox jumps over the lazy dog.
        </Callout>
        <Callout variant="success" title="Saved">
          Changes have been persisted.
        </Callout>
        <Callout variant="error" appearance="solid" title="Failed">
          Could not connect to the upstream.
        </Callout>
        <Callout variant="info">Title-less body — runs centered alongside the icon.</Callout>
      </div>
      <div className="space-y-3">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>
        <div className="st-callout st-callout--neutral st-callout--subtle">
          <div className="flex gap-3 items-start">
            <InfoSvg />
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <div className="st-callout__title">Neutral subtle</div>
              <div className="st-callout__body">The quick brown fox jumps over the lazy dog.</div>
            </div>
          </div>
        </div>
        <div className="st-callout st-callout--success st-callout--subtle">
          <div className="flex gap-3 items-start">
            <CheckSvg />
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <div className="st-callout__title">Saved</div>
              <div className="st-callout__body">Changes have been persisted.</div>
            </div>
          </div>
        </div>
        <div className="st-callout st-callout--error st-callout--solid">
          <div className="flex gap-3 items-start">
            <AlertSvg />
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <div className="st-callout__title">Failed</div>
              <div className="st-callout__body">Could not connect to the upstream.</div>
            </div>
          </div>
        </div>
        <div className="st-callout st-callout--info st-callout--subtle">
          <div className="flex gap-3 items-center">
            <InfoSvg />
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <div className="st-callout__body">
                Title-less body — runs centered alongside the icon.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
}`,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const k=["Parity"];export{t as Parity,k as __namedExportsOrder,C as default};
