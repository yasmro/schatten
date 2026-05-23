import{j as t}from"./iframe-BafFJTUc.js";import{c as s,a as r,b as l,T as d}from"./Tooltip-C8nY6LZx.js";import"./preload-helper-CDcSlKkp.js";import"./index-CNEwYz-t.js";import"./index-16UfL80H.js";import"./index-CY3Qarri.js";import"./index-URVsFQNe.js";import"./index-CFDZuC2i.js";import"./index-B1KiPDNn.js";import"./index-Bvey8x0w.js";import"./index-2umr104e.js";import"./index-BXBs4R76.js";import"./index-Bt9vX11F.js";import"./utils-DCADjnpI.js";const _={title:"Components/lv1/Tooltip",component:s,parameters:{layout:"padded",docs:{description:{component:`Parity story — React \`<TooltipContent>\` and a hand-written
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

The story uses \`side="bottom"\` (only) so the React tooltip portal
never overlaps the column header. The vanilla side renders a
static \`<div class="st-tooltip__content">\` below its trigger via
normal document flow — no \`data-state\`, no \`position: absolute\`,
no transform-based positioning (the open / close animations are
intentional scope-out — they'd require either Radix-style runtime
state toggling or transform-based positioning that conflicts
with the animation system).

The four \`side\` variants (top / right / bottom / left) are covered
by the existing \`Tooltip.vrt.spec.ts\` \`Sides\` story.`}}},decorators:[a=>t.jsx(d,{children:t.jsx(a,{})})]};function p(){return t.jsx("svg",{className:"st-tooltip__arrow",width:"10",height:"5",viewBox:"0 0 30 10",preserveAspectRatio:"none","aria-hidden":"true",style:{display:"block",marginInline:"auto",marginTop:-1},children:t.jsx("polygon",{points:"0,10 30,10 15,0"})})}const e={name:"React vs Vanilla HTML",render:()=>t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,maxWidth:720},children:[t.jsxs("div",{children:[t.jsx("p",{className:"text-xs mb-4 text-foreground-muted",children:"React"}),t.jsx("div",{style:{paddingBottom:64},children:t.jsxs(r,{open:!0,children:[t.jsx(l,{children:t.jsx("button",{type:"button",className:"st-btn st-btn--secondary st-btn--md",children:"Trigger"})}),t.jsx(s,{side:"bottom",children:"Tooltip content"})]})})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-xs mb-4 text-foreground-muted",children:"Vanilla HTML"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[t.jsx("button",{type:"button",className:"st-btn st-btn--secondary st-btn--md",children:"Trigger"}),t.jsxs("div",{className:"st-tooltip__content",role:"tooltip",style:{marginTop:4},children:[t.jsx(p,{}),"Tooltip content"]})]})]})]})};var o,n,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'React vs Vanilla HTML',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 64,
    maxWidth: 720
  }}>
      {/* ===== React side =====
       * Standard Radix usage with \`<Tooltip open>\` and \`side="bottom"\`.
       * The portal lands below the trigger, so it never overlaps the
       * column header above. */}
      <div>
        <p className="text-xs mb-4 text-foreground-muted">React</p>
        <div style={{
        paddingBottom: 64
      }}>
          <Tooltip open>
            <TooltipTrigger>
              <button type="button" className="st-btn st-btn--secondary st-btn--md">
                Trigger
              </button>
            </TooltipTrigger>
            <TooltipContent side="bottom">Tooltip content</TooltipContent>
          </Tooltip>
        </div>
      </div>

      {/* ===== Vanilla HTML side =====
       * Button + tooltip-content stacked in normal document flow.
       * No \`data-state\`, no \`position: absolute\`, no transform —
       * proving the class API alone produces the right visual box. */}
      <div>
        <p className="text-xs mb-4 text-foreground-muted">Vanilla HTML</p>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}>
          <button type="button" className="st-btn st-btn--secondary st-btn--md">
            Trigger
          </button>
          <div className="st-tooltip__content" role="tooltip" style={{
          marginTop: 4
        }}>
            <VanillaArrowBottom />
            Tooltip content
          </div>
        </div>
      </div>
    </div>
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const N=["Parity"];export{e as Parity,N as __namedExportsOrder,_ as default};
