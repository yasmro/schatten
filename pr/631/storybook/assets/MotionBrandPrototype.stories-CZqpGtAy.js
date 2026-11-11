import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-gyy4hOMe.js";import{n as r,t as i}from"./Button-Dk0e_F6u.js";import{n as a,t as o}from"./Dialog-rewXca14.js";import{n as s,t as c}from"./Text-BQujn7l4.js";import{a as l,i as u,o as d,r as f,t as p}from"./Popover-2Rb7mNlZ.js";import{a as m,c as h,i as g,o as _,r as v,s as y}from"./docs-ui-Bpb4n0m6.js";function b({label:e,options:t,value:n,onChange:r}){return(0,S.jsxs)(`fieldset`,{className:`flex flex-wrap items-center gap-3`,children:[(0,S.jsx)(`legend`,{className:`float-left w-28 shrink-0 text-sm font-medium text-foreground`,children:e}),(0,S.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:t.map(e=>(0,S.jsx)(i,{size:`sm`,variant:e.id===n?`primary`:`secondary`,"aria-pressed":e.id===n,onClick:()=>r(e.id),children:e.label},e.id))})]})}var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{x=n(),r(),a(),d(),s(),h(),S=t(),C={title:`Tokens/Motion Prototype`,parameters:{layout:`fullscreen`,docs:{description:{component:`SPIKE — brand motion prototype (dissolve + scale + blur). See #630.

Throwaway comparison page for deciding Schatten's signature enter/exit
motion. It does NOT change any component: every override lives in the
<style> block below, scoped under \`html[data-motion-proto]\`, which the
story sets on mount and removes on unmount. Unlayered rules beat
\`@layer components\`, so no specificity escalation is needed.

Three candidates:
- a — current (the shipped keyframes, untouched)
- b — dissolve + scale
- c — dissolve + scale + blur

No VRT spec: the contract here is motion over time, which a still frame
cannot show (same reasoning as Tokens/Motion).`}}}},w=[{id:`a`,label:`a — Current`,summary:`Shipped keyframes (fade + scale / slide)`},{id:`b`,label:`b — Dissolve + scale`,summary:`opacity + scale from the scale token`},{id:`c`,label:`c — + Blur`,summary:`opacity + scale + blur, settling into focus`}],T={current:{label:`Schatten (current)`,dialogEnter:`200ms`,dialogExit:`150ms`,popoverEnter:`150ms`,popoverExit:`100ms`,easeEnter:`ease-out`,easeExit:`ease-in`},"transitions-dev":{label:`transitions.dev`,dialogEnter:`250ms`,dialogExit:`150ms`,popoverEnter:`250ms`,popoverExit:`150ms`,easeEnter:`cubic-bezier(0.22, 1, 0.36, 1)`,easeExit:`cubic-bezier(0.22, 1, 0.36, 1)`}},E=[`2px`,`3px`,`4px`],D=[`0.96`,`0.97`],O=[`1`,`4`],k=[{id:`preset`,label:`Preset`},{id:`0.5`,label:`×0.5 of enter`},{id:`0.6`,label:`×0.6 of enter`},{id:`0.75`,label:`×0.75 of enter`}],A=[{id:`preset`,label:`Preset`},{id:`ease-in`,label:`ease-in`},{id:`ease-in-out`,label:`ease-in-out`}],j=(e,t,n)=>n===`preset`?t:`${Math.round(Number.parseFloat(e)*Number(n))}ms`,M=`
@keyframes proto-in-b {
  from { opacity: 0; transform: scale(var(--proto-scale)); }
  to   { opacity: 1; transform: scale(1); }
}
@keyframes proto-out-b {
  from { opacity: 1; transform: scale(1); }
  to   { opacity: 0; transform: scale(var(--proto-scale)); }
}
@keyframes proto-in-c {
  from { opacity: 0; transform: scale(var(--proto-scale)); filter: blur(var(--proto-blur)); }
  to   { opacity: 1; transform: scale(1); filter: blur(0); }
}
@keyframes proto-out-c {
  from { opacity: 1; transform: scale(1); filter: blur(0); }
  to   { opacity: 0; transform: scale(var(--proto-scale)); filter: blur(var(--proto-blur)); }
}
@keyframes proto-fade-in  { from { opacity: 0; } to { opacity: 1; } }
@keyframes proto-fade-out { from { opacity: 1; } to { opacity: 0; } }

/* ---- Dialog (specimens always play their own variant) ---- */
html[data-motion-proto="b"] .st-dialog__content[data-state="open"],
html[data-motion-proto] .proto-specimen[data-variant="b"][data-state="open"] {
  animation: proto-in-b calc(var(--proto-dialog-enter) * var(--proto-slowmo)) var(--proto-ease-enter) both;
}
html[data-motion-proto="c"] .st-dialog__content[data-state="open"],
html[data-motion-proto] .proto-specimen[data-variant="c"][data-state="open"] {
  animation: proto-in-c calc(var(--proto-dialog-enter) * var(--proto-slowmo)) var(--proto-ease-enter) both;
}
html[data-motion-proto="b"] .st-dialog__content[data-state="closed"],
html[data-motion-proto] .proto-specimen[data-variant="b"][data-state="closed"] {
  animation: var(--proto-exit-b) calc(var(--proto-dialog-exit) * var(--proto-slowmo)) var(--proto-ease-exit) both;
}
html[data-motion-proto="c"] .st-dialog__content[data-state="closed"],
html[data-motion-proto] .proto-specimen[data-variant="c"][data-state="closed"] {
  animation: var(--proto-exit-c) calc(var(--proto-dialog-exit) * var(--proto-slowmo)) var(--proto-ease-exit) both;
}
html[data-motion-proto]:not([data-motion-proto="a"]) .st-dialog__overlay[data-state="open"] {
  animation: proto-fade-in calc(var(--proto-dialog-enter) * var(--proto-slowmo)) var(--proto-ease-enter);
}
html[data-motion-proto]:not([data-motion-proto="a"]) .st-dialog__overlay[data-state="closed"] {
  animation: proto-fade-out calc(var(--proto-dialog-exit) * var(--proto-slowmo)) var(--proto-ease-exit);
}

/* Specimen a = the shipped Dialog keyframes at the shipped timing. */
html[data-motion-proto] .proto-specimen[data-variant="a"][data-state="open"] {
  animation: dialog-content-zoom-in calc(200ms * var(--proto-slowmo)) ease-out both;
}
html[data-motion-proto] .proto-specimen[data-variant="a"][data-state="closed"] {
  animation: dialog-content-zoom-out calc(150ms * var(--proto-slowmo)) ease-in both;
}

/* ---- Popover (scale grows from the trigger side) ---- */
html[data-motion-proto="b"] .st-popover__content,
html[data-motion-proto="c"] .st-popover__content {
  transform-origin: var(--radix-popover-content-transform-origin);
}
html[data-motion-proto="b"] .st-popover__content[data-state="open"] {
  animation: proto-in-b calc(var(--proto-popover-enter) * var(--proto-slowmo)) var(--proto-ease-enter);
}
html[data-motion-proto="c"] .st-popover__content[data-state="open"] {
  animation: proto-in-c calc(var(--proto-popover-enter) * var(--proto-slowmo)) var(--proto-ease-enter);
}
html[data-motion-proto="b"] .st-popover__content[data-state="closed"] {
  animation: var(--proto-exit-b) calc(var(--proto-popover-exit) * var(--proto-slowmo)) var(--proto-ease-exit);
}
html[data-motion-proto="c"] .st-popover__content[data-state="closed"] {
  animation: var(--proto-exit-c) calc(var(--proto-popover-exit) * var(--proto-slowmo)) var(--proto-ease-exit);
}
/* Shipped popover timing also follows slow-mo so a / b / c compare fairly. */
html[data-motion-proto="a"] .st-popover__content {
  animation-duration: calc(150ms * var(--proto-slowmo));
}
html[data-motion-proto="a"] .st-popover__content[data-state="closed"] {
  animation-duration: calc(100ms * var(--proto-slowmo));
}
html[data-motion-proto="a"] .st-dialog__content[data-state="open"],
html[data-motion-proto="a"] .st-dialog__overlay[data-state="open"] {
  animation-duration: calc(200ms * var(--proto-slowmo));
}
html[data-motion-proto="a"] .st-dialog__content[data-state="closed"],
html[data-motion-proto="a"] .st-dialog__overlay[data-state="closed"] {
  animation-duration: calc(150ms * var(--proto-slowmo));
}

@media (prefers-reduced-motion: reduce) {
  html[data-motion-proto] .st-dialog__content[data-state="open"],
  html[data-motion-proto] .st-popover__content[data-state="open"],
  html[data-motion-proto] .proto-specimen[data-state="open"] {
    animation: proto-fade-in 150ms linear both;
  }
  html[data-motion-proto] .st-dialog__content[data-state="closed"],
  html[data-motion-proto] .st-popover__content[data-state="closed"],
  html[data-motion-proto] .proto-specimen[data-state="closed"] {
    animation: proto-fade-out 100ms linear both;
  }
}
`,N=({variant:e,state:t,children:n})=>(0,S.jsx)(`div`,{className:`flex h-56 items-center justify-center rounded-xl border border-border bg-surface p-4`,children:(0,S.jsx)(`div`,{className:`proto-specimen w-full max-w-[14rem] border border-border-strong bg-background p-4`,style:{boxShadow:`var(--shadow-modal)`},"data-variant":e,"data-state":t,children:n})}),P=()=>{let[e,t]=(0,x.useState)(`c`),[n,r]=(0,x.useState)(`transitions-dev`),[a,s]=(0,x.useState)(`mirror`),[d,h]=(0,x.useState)(`0.6`),[C,P]=(0,x.useState)(`ease-in`),[F,I]=(0,x.useState)(`3px`),[L,R]=(0,x.useState)(`0.97`),[z,B]=(0,x.useState)(`1`),[V,H]=(0,x.useState)(`open`),[U,W]=(0,x.useState)(!1),[G,K]=(0,x.useState)(!1);return(0,x.useEffect)(()=>{let e=window.matchMedia(`(prefers-reduced-motion: reduce)`);K(e.matches);let t=e=>K(e.matches);return e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[]),(0,x.useEffect)(()=>{let t=document.documentElement,r=T[n],i={"--proto-blur":F,"--proto-scale":L,"--proto-slowmo":z,"--proto-dialog-enter":r.dialogEnter,"--proto-dialog-exit":j(r.dialogEnter,r.dialogExit,d),"--proto-popover-enter":r.popoverEnter,"--proto-popover-exit":j(r.popoverEnter,r.popoverExit,d),"--proto-ease-enter":r.easeEnter,"--proto-ease-exit":C===`preset`?r.easeExit:C,"--proto-exit-b":a===`mirror`?`proto-out-b`:`proto-fade-out`,"--proto-exit-c":a===`mirror`?`proto-out-c`:`proto-fade-out`};t.setAttribute(`data-motion-proto`,e);for(let[e,n]of Object.entries(i))t.style.setProperty(e,n);return()=>{t.removeAttribute(`data-motion-proto`);for(let e of Object.keys(i))t.style.removeProperty(e)}},[e,n,a,d,C,F,L,z]),(0,S.jsxs)(`div`,{className:`mx-auto max-w-4xl px-8 py-12`,children:[(0,S.jsx)(`style`,{children:M}),(0,S.jsx)(m,{children:`Motion prototype — dissolve, scale, blur`}),(0,S.jsx)(v,{children:`A spike for choosing Schatten's signature enter / exit motion. Surfaces should come into focus as they appear and dissolve into shadow as they leave. Nothing here changes a component — all overrides are scoped to this page and removed when you leave it.`}),G&&(0,S.jsxs)(g,{children:[(0,S.jsx)(`code`,{children:`prefers-reduced-motion: reduce`}),` is active — every candidate collapses to an opacity-only fade, which is the intended reduced-motion behavior.`]}),(0,S.jsx)(_,{children:`Controls`}),(0,S.jsxs)(`div`,{className:`flex flex-col gap-3 rounded-xl border border-border p-5`,children:[(0,S.jsx)(b,{label:`Candidate`,options:w,value:e,onChange:t}),(0,S.jsx)(b,{label:`Timing (b/c)`,options:Object.keys(T).map(e=>({id:e,label:T[e].label})),value:n,onChange:r}),(0,S.jsx)(b,{label:`Exit (b/c)`,options:[{id:`mirror`,label:`Mirror enter`},{id:`fade`,label:`Fade only`}],value:a,onChange:s}),(0,S.jsx)(b,{label:`Exit speed`,options:k,value:d,onChange:h}),(0,S.jsx)(b,{label:`Exit easing`,options:A,value:C,onChange:P}),(0,S.jsx)(b,{label:`Blur (c)`,options:E.map(e=>({id:e,label:e})),value:F,onChange:I}),(0,S.jsx)(b,{label:`Scale (b/c)`,options:D.map(e=>({id:e,label:e})),value:L,onChange:R}),(0,S.jsx)(b,{label:`Slow motion`,options:O.map(e=>({id:e,label:`×${e}`})),value:z,onChange:B})]}),(0,S.jsx)(_,{children:`Side by side`}),(0,S.jsx)(g,{children:`The three candidates play at once on a dialog-like panel. Timing, exit, blur, scale and slow motion apply to b and c; a always plays the shipped Dialog keyframes.`}),(0,S.jsx)(`div`,{className:`mb-4 mt-4`,children:(0,S.jsx)(i,{onClick:()=>H(e=>e===`open`?`closed`:`open`),children:V===`open`?`Play exit`:`Play enter`})}),(0,S.jsx)(`div`,{className:`grid grid-cols-1 gap-4 md:grid-cols-3`,children:w.map(e=>(0,S.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,S.jsxs)(N,{variant:e.id,state:V,children:[(0,S.jsx)(c,{variant:`heading`,size:`sm`,children:`Save changes?`}),(0,S.jsx)(c,{size:`sm`,color:`muted`,children:`Your edits will be kept in this draft.`})]}),(0,S.jsx)(c,{variant:`label`,size:`sm`,children:e.label}),(0,S.jsx)(c,{size:`sm`,color:`muted`,children:e.summary})]},e.id))}),(0,S.jsx)(_,{children:`Real components`}),(0,S.jsx)(g,{children:`These are the shipped Dialog and Popover, re-animated by the candidate selected above.`}),(0,S.jsx)(y,{children:`Dialog`}),(0,S.jsx)(i,{variant:`secondary`,onClick:()=>W(!0),children:`Open dialog`}),(0,S.jsx)(o,{isOpen:U,onOpenChange:W,title:`Save changes?`,description:`Your edits will be kept in this draft.`,actionButton:{label:`Save`,onClick:()=>W(!1)},cancelButton:{label:`Cancel`}}),(0,S.jsx)(y,{children:`Popover`}),(0,S.jsx)(`div`,{className:`flex flex-wrap gap-3 py-16`,children:[`bottom`,`top`,`right`,`left`].map(e=>(0,S.jsxs)(p,{children:[(0,S.jsx)(l,{children:(0,S.jsxs)(i,{variant:`secondary`,children:[`Open (`,e,`)`]})}),(0,S.jsx)(u,{side:e,children:(0,S.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,S.jsx)(c,{size:`sm`,children:`Filters apply to this view only.`}),(0,S.jsx)(f,{children:(0,S.jsx)(i,{size:`sm`,variant:`secondary`,children:`Close`})})]})})]},e))})]})},F={name:`Prototype`,render:()=>(0,S.jsx)(P,{})},I=[`Prototype`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Prototype',
  render: () => <PrototypePage />
}`,...F.parameters?.docs?.source}}}})))()}L();export{F as Prototype,I as __namedExportsOrder,C as default};