import{j as t}from"./iframe-SY1hDRqu.js";import{c as s,a as i,b as a,T as c}from"./Tooltip-39ZmNXn8.js";import"./preload-helper-CDcSlKkp.js";import"./index-CwAFoGvF.js";import"./index-B4nuSYNN.js";import"./index-BVhHCI--.js";import"./index-DIxptejf.js";import"./index-Cmo99nfL.js";import"./index-DzpQbs1H.js";import"./index-DzG1BpT9.js";import"./index-CCp22-Cg.js";import"./index-CWujfum7.js";import"./index-D0jQRCYI.js";import"./utils-DCADjnpI.js";const _={title:"Components/lv1/Tooltip",component:s,parameters:{layout:"padded",docs:{description:{component:`Parity stories — React \`<Tooltip open>\` and a hand-written
\`<div class="st-tooltip__content" role="tooltip" data-state="instant-open"
  data-side="…" style="position:fixed; …">\` must render pixel-identical.
Backs the VRT in \`Tooltip.parity.vrt.spec.ts\`.

The Radix React build does positioning via the Floating UI–compatible
Popper, which a vanilla consumer cannot replicate without their own JS.
The vanilla side here uses inline \`position: fixed\` with hand-picked
\`top\` / \`left\` values so the parity screenshot still proves the
static visual contract (background / colour / padding / shadow /
arrow) is the same on both sides.

Trigger-side parity is not asserted here — \`TooltipTrigger\` does not
carry a dedicated class (it merges onto its child via Radix asChild),
so there is no class chain to compare against. The Button parity
story (#268 sweep-3) already covers the trigger's \`<Button>\`
appearance.`}}},decorators:[e=>t.jsx(c,{children:t.jsx(e,{})})]};function n({side:e}){const d={top:"translateY(-100%) rotate(180deg)",right:"rotate(-90deg)",bottom:"translateX(-50%)",left:"translateX(-50%) rotate(90deg)"}[e];return t.jsx("svg",{className:"st-tooltip__arrow",width:"10",height:"5",viewBox:"0 0 30 10",preserveAspectRatio:"none",style:{position:"absolute",transform:d},"aria-hidden":"true",children:t.jsx("polygon",{points:"0,0 30,0 15,10"})})}const o={name:"React vs Vanilla HTML",render:()=>t.jsxs("div",{className:"grid grid-cols-2 gap-12 max-w-3xl",children:[t.jsxs("div",{className:"space-y-32",children:[t.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"React"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:64},children:[t.jsxs(i,{open:!0,children:[t.jsx(a,{children:t.jsx("button",{type:"button",className:"st-btn st-btn--secondary st-btn--md",children:"Top"})}),t.jsx(s,{side:"top",children:"Tooltip on top"})]}),t.jsxs(i,{open:!0,children:[t.jsx(a,{children:t.jsx("button",{type:"button",className:"st-btn st-btn--secondary st-btn--md",children:"Bottom"})}),t.jsx(s,{side:"bottom",children:"Tooltip on bottom"})]})]})]}),t.jsxs("div",{className:"space-y-32",children:[t.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"Vanilla HTML"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:64},children:[t.jsxs("div",{style:{position:"relative",minHeight:100},children:[t.jsx("button",{type:"button",className:"st-btn st-btn--secondary st-btn--md",children:"Top"}),t.jsxs("div",{className:"st-tooltip__content",role:"tooltip","data-state":"instant-open","data-side":"top",style:{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%) translateY(-4px)"},children:["Tooltip on top",t.jsx(n,{side:"top"})]})]}),t.jsxs("div",{style:{position:"relative",minHeight:100},children:[t.jsx("button",{type:"button",className:"st-btn st-btn--secondary st-btn--md",children:"Bottom"}),t.jsxs("div",{className:"st-tooltip__content",role:"tooltip","data-state":"instant-open","data-side":"bottom",style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%) translateY(4px)"},children:["Tooltip on bottom",t.jsx(n,{side:"bottom"})]})]})]})]})]})};var r,l,p;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'React vs Vanilla HTML',
  render: () => <div className="grid grid-cols-2 gap-12 max-w-3xl">
      {/* ===== React side ===== */}
      <div className="space-y-32">
        <p className="text-xs mb-2 text-foreground-muted">React</p>

        <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 64
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
       * \`position: fixed\` is used because the parity story sits at the
       * top of a \`padded\` layout — \`top\` / \`left\` values are matched to
       * Radix Popper's placement for the matching React tooltip above.
       * The exact pixel positions will differ slightly run-to-run, but
       * the *content* (background / padding / colour / arrow) is the
       * contract this story proves. The VRT spec pauses animations so
       * the still frame is deterministic. */}
      <div className="space-y-32">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>
        <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 64
      }}>
          <div style={{
          position: 'relative',
          minHeight: 100
        }}>
            <button type="button" className="st-btn st-btn--secondary st-btn--md">
              Top
            </button>
            <div className="st-tooltip__content" role="tooltip" data-state="instant-open" data-side="top" style={{
            position: 'absolute',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%) translateY(-4px)'
          }}>
              Tooltip on top
              <VanillaArrow side="top" />
            </div>
          </div>

          <div style={{
          position: 'relative',
          minHeight: 100
        }}>
            <button type="button" className="st-btn st-btn--secondary st-btn--md">
              Bottom
            </button>
            <div className="st-tooltip__content" role="tooltip" data-state="instant-open" data-side="bottom" style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%) translateY(4px)'
          }}>
              Tooltip on bottom
              <VanillaArrow side="bottom" />
            </div>
          </div>
        </div>
      </div>
    </div>
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const C=["Parity"];export{o as Parity,C as __namedExportsOrder,_ as default};
