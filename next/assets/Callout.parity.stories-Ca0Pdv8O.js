import{j as t}from"./iframe-DeZqYZze.js";import{C as e}from"./Callout-zRjpI8_v.js";import"./preload-helper-CrztxVc4.js";import"./utils-HnQPFlDo.js";import"./index-BekUCMdb.js";/* empty css                */import"./circle-alert-DeqOiQii.js";import"./createLucideIcon-B7sve0Jk.js";import"./triangle-alert-DlYVKVyf.js";import"./info-BYkkFwnb.js";import"./x-DmQlQik-.js";const _={title:"Components/lv1/Callout",component:e,parameters:{layout:"padded",docs:{description:{component:"Parity stories — React `<Callout>` and a hand-written vanilla `<div>`\nwith the matching `.st-callout` class chain must render pixel-identical.\nBacks the VRT in `Callout.parity.vrt.spec.ts`.\n\nThe vanilla side reproduces the icon + title + body structure using the\nsub-element classes (`.st-callout__icon` / `__title` / `__body`). The\nClose button is omitted from parity coverage because it depends on\nButton's class chain (which lands in sweep-3) — parity for that button\nwill be covered by Button.parity.stories.tsx.\n\nLucide icon SVG bodies are inlined here, pinned to lucide-react@1.x\n(currently 1.14.0). When the dep is bumped, re-verify the paths match\nthe Lucide source."}}}},l=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"st-callout__icon","aria-hidden":"true",children:[t.jsx("circle",{cx:"12",cy:"12",r:"10"}),t.jsx("path",{d:"M12 16v-4"}),t.jsx("path",{d:"M12 8h.01"})]}),a=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"st-callout__icon","aria-hidden":"true",children:[t.jsx("circle",{cx:"12",cy:"12",r:"10"}),t.jsx("path",{d:"m9 12 2 2 4-4"})]}),o=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"st-callout__icon","aria-hidden":"true",children:[t.jsx("circle",{cx:"12",cy:"12",r:"10"}),t.jsx("line",{x1:"12",x2:"12",y1:"8",y2:"12"}),t.jsx("line",{x1:"12",x2:"12.01",y1:"16",y2:"16"})]}),s={name:"React vs Vanilla HTML",render:()=>t.jsxs("div",{className:"grid grid-cols-2 gap-12 max-w-5xl",children:[t.jsxs("div",{className:"space-y-3",children:[t.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"React"}),t.jsx(e,{variant:"neutral",title:"Neutral subtle",children:"The quick brown fox jumps over the lazy dog."}),t.jsx(e,{variant:"success",title:"Saved",children:"Changes have been persisted."}),t.jsx(e,{variant:"error",appearance:"solid",title:"Failed",children:"Could not connect to the upstream."}),t.jsx(e,{variant:"info",children:"Title-less body — runs centered alongside the icon."})]}),t.jsxs("div",{className:"space-y-3",children:[t.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"Vanilla HTML"}),t.jsxs("div",{className:"st-callout st-callout--neutral st-callout--subtle",children:[t.jsx(l,{}),t.jsxs("div",{className:"st-callout__content",children:[t.jsx("div",{className:"st-callout__title",children:"Neutral subtle"}),t.jsx("div",{className:"st-callout__body",children:"The quick brown fox jumps over the lazy dog."})]})]}),t.jsxs("div",{className:"st-callout st-callout--success st-callout--subtle",children:[t.jsx(a,{}),t.jsxs("div",{className:"st-callout__content",children:[t.jsx("div",{className:"st-callout__title",children:"Saved"}),t.jsx("div",{className:"st-callout__body",children:"Changes have been persisted."})]})]}),t.jsxs("div",{className:"st-callout st-callout--error st-callout--solid",children:[t.jsx(o,{}),t.jsxs("div",{className:"st-callout__content",children:[t.jsx("div",{className:"st-callout__title",children:"Failed"}),t.jsx("div",{className:"st-callout__body",children:"Could not connect to the upstream."})]})]}),t.jsxs("div",{className:"st-callout st-callout--info st-callout--subtle",children:[t.jsx(l,{}),t.jsx("div",{className:"st-callout__content",children:t.jsx("div",{className:"st-callout__body",children:"Title-less body — runs centered alongside the icon."})})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
          <InfoSvg />
          <div className="st-callout__content">
            <div className="st-callout__title">Neutral subtle</div>
            <div className="st-callout__body">The quick brown fox jumps over the lazy dog.</div>
          </div>
        </div>
        <div className="st-callout st-callout--success st-callout--subtle">
          <CheckSvg />
          <div className="st-callout__content">
            <div className="st-callout__title">Saved</div>
            <div className="st-callout__body">Changes have been persisted.</div>
          </div>
        </div>
        <div className="st-callout st-callout--error st-callout--solid">
          <AlertSvg />
          <div className="st-callout__content">
            <div className="st-callout__title">Failed</div>
            <div className="st-callout__body">Could not connect to the upstream.</div>
          </div>
        </div>
        <div className="st-callout st-callout--info st-callout--subtle">
          <InfoSvg />
          <div className="st-callout__content">
            <div className="st-callout__body">
              Title-less body — runs centered alongside the icon.
            </div>
          </div>
        </div>
      </div>
    </div>
}`,...s.parameters?.docs?.source}}};const j=["Parity"];export{s as Parity,j as __namedExportsOrder,_ as default};
