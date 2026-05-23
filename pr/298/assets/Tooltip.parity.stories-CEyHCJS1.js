import{j as t}from"./iframe-BTV1vD4-.js";import{c as n,a as s,b as i,T as c}from"./Tooltip-BLgkYQgW.js";import"./preload-helper-CDcSlKkp.js";import"./index-CwgIhbUx.js";import"./index-CMD5Jceh.js";import"./index-CKv5oJZm.js";import"./index-B4PQyXSF.js";import"./index-Cgt1dHyK.js";import"./index-BouUKjyD.js";import"./index-UHFlnWMj.js";import"./index-Bl-KeOUK.js";import"./index-CIps4nFI.js";import"./index-CAvseclz.js";import"./utils-DCADjnpI.js";const R={title:"Components/lv1/Tooltip",component:n,parameters:{layout:"padded",docs:{description:{component:`Parity story — React \`<TooltipContent>\` and a hand-written
\`<div class="st-tooltip__content">\` must produce **the same visual
box** (background / foreground colour / padding / font / shadow /
arrow fill). Backs the VRT in \`Tooltip.parity.vrt.spec.ts\`.

**Scope: content visual only, NOT positioning.**

Radix React Tooltip portals its content into \`document.body\` and
uses Popper / Floating UI to compute the screen position relative
to the trigger. A vanilla consumer cannot replicate that without
their own JS (see #297, phase-5). What Schatten's class API DOES
give them is the *appearance* — the \`.st-tooltip__content\` rule
paints any element it lands on with the right surface treatment,
regardless of where that element sits in the DOM.

The story therefore shows tooltips as **standalone boxes**, not
attached to triggers via Popper. The React side still uses the
full \`<Tooltip open><TooltipTrigger><TooltipContent>\` chain
(Radix requires it), but the trigger is a static label rendered
inline with the portaled content. The vanilla side simply renders
a \`<div class="st-tooltip__content">\` in normal document flow,
with no \`data-state\` (the open / close animations are intentional
scope-out — they'd require either Radix-style runtime state
toggling or transform-based positioning that conflicts with the
animation system).`}}},decorators:[o=>t.jsx(c,{children:t.jsx(o,{})})]};function a({side:o}){const d=o==="top"?"0,0 30,0 15,10":"0,10 30,10 15,0";return t.jsx("svg",{className:"st-tooltip__arrow",width:"10",height:"5",viewBox:"0 0 30 10",preserveAspectRatio:"none","aria-hidden":"true",style:{display:"block",marginInline:"auto",marginTop:o==="bottom"?-1:0,marginBottom:o==="top"?-1:0},children:t.jsx("polygon",{points:d})})}const e={name:"React vs Vanilla HTML",render:()=>t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,maxWidth:720},children:[t.jsxs("div",{children:[t.jsx("p",{className:"text-xs mb-4 text-foreground-muted",children:"React"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:64,alignItems:"flex-start"},children:[t.jsxs(s,{open:!0,children:[t.jsx(i,{children:t.jsx("button",{type:"button",className:"st-btn st-btn--secondary st-btn--md",children:"Top"})}),t.jsx(n,{side:"top",children:"Tooltip on top"})]}),t.jsxs(s,{open:!0,children:[t.jsx(i,{children:t.jsx("button",{type:"button",className:"st-btn st-btn--secondary st-btn--md",children:"Bottom"})}),t.jsx(n,{side:"bottom",children:"Tooltip on bottom"})]})]})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-xs mb-4 text-foreground-muted",children:"Vanilla HTML"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:64,alignItems:"flex-start"},children:[t.jsxs("div",{children:[t.jsxs("div",{className:"st-tooltip__content",role:"tooltip",style:{marginBottom:4},children:["Tooltip on top",t.jsx(a,{side:"top"})]}),t.jsx("button",{type:"button",className:"st-btn st-btn--secondary st-btn--md",children:"Top"})]}),t.jsxs("div",{children:[t.jsx("button",{type:"button",className:"st-btn st-btn--secondary st-btn--md",children:"Bottom"}),t.jsxs("div",{className:"st-tooltip__content",role:"tooltip",style:{marginTop:4},children:[t.jsx(a,{side:"bottom"}),"Tooltip on bottom"]})]})]})]})]})};var r,l,p;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'React vs Vanilla HTML',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 64,
    maxWidth: 720
  }}>
      {/* ===== React side =====
       * Standard Radix usage — \`<Tooltip open>\` keeps the content
       * mounted. Buttons act as triggers. Popper positions the content
       * relative to each button. */}
      <div>
        <p className="text-xs mb-4 text-foreground-muted">React</p>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 64,
        alignItems: 'flex-start'
      }}>
          <Tooltip open>
            <TooltipTrigger>
              <button type="button" className="st-btn st-btn--secondary st-btn--md">
                Top
              </button>
            </TooltipTrigger>
            <TooltipContent side="top">Tooltip on top</TooltipContent>
          </Tooltip>

          <Tooltip open>
            <TooltipTrigger>
              <button type="button" className="st-btn st-btn--secondary st-btn--md">
                Bottom
              </button>
            </TooltipTrigger>
            <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
          </Tooltip>
        </div>
      </div>

      {/* ===== Vanilla HTML side =====
       * Static boxes — no \`data-state\`, no \`position: absolute\`, no
       * transform-based positioning. The contract this proves is
       * "the tooltip-content + arrow render the right visual"; the
       * position is whatever document flow gives. */}
      <div>
        <p className="text-xs mb-4 text-foreground-muted">Vanilla HTML</p>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 64,
        alignItems: 'flex-start'
      }}>
          <div>
            <div className="st-tooltip__content" role="tooltip" style={{
            marginBottom: 4
          }}>
              Tooltip on top
              <VanillaArrow side="top" />
            </div>
            <button type="button" className="st-btn st-btn--secondary st-btn--md">
              Top
            </button>
          </div>

          <div>
            <button type="button" className="st-btn st-btn--secondary st-btn--md">
              Bottom
            </button>
            <div className="st-tooltip__content" role="tooltip" style={{
            marginTop: 4
          }}>
              <VanillaArrow side="bottom" />
              Tooltip on bottom
            </div>
          </div>
        </div>
      </div>
    </div>
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const B=["Parity"];export{e as Parity,B as __namedExportsOrder,R as default};
