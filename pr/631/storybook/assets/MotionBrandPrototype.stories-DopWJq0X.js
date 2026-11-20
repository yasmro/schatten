import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-B42UfL8Y.js";import{n as r,t as i}from"./Button-Dja0ZOwx.js";import{a,i as o,n as s,r as ee,t as c}from"./Tooltip-C0jUlKdw.js";import{n as l,t as u}from"./Dialog-DKwCCTbe.js";import{c as d,i as f,l as p,n as m,s as h,t as te}from"./Select-B5NBSbYI.js";import{n as g,t as _}from"./Text-puLbPuSp.js";import{a as v,i as y,o as b,r as x,t as S}from"./Popover-BcV6vCmI.js";import{a as C,i as w,n as T,t as E}from"./Toaster-Jot7Vf-L.js";import{a as ne,c as D,i as O,o as k,r as A,s as j}from"./docs-ui-9rnaM_as.js";function M({label:e,options:t,value:n,onChange:r}){return(0,P.jsxs)(`fieldset`,{className:`flex flex-wrap items-center gap-3`,children:[(0,P.jsx)(`legend`,{className:`float-left w-28 shrink-0 text-sm font-medium text-foreground`,children:e}),(0,P.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:t.map(e=>(0,P.jsx)(i,{size:`sm`,variant:e.id===n?`primary`:`secondary`,"aria-pressed":e.id===n,onClick:()=>r(e.id),children:e.label},e.id))})]})}var N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y;function X(){return(X=e((()=>{N=n(),r(),l(),b(),p(),g(),T(),w(),a(),D(),P=t(),F={title:`Tokens/Motion Prototype`,parameters:{layout:`fullscreen`,docs:{description:{component:`SPIKE — brand motion prototype (dissolve + scale + blur). See #630.

Throwaway comparison page for deciding Schatten's signature enter/exit
motion. It does NOT change any component: every override lives in the
<style> block below, scoped under \`html[data-motion-proto]\`, which the
story sets on mount and removes on unmount. Unlayered rules beat
\`@layer components\`, so no specificity escalation is needed.

Five candidates:
- a — current (the shipped keyframes, untouched)
- b — dissolve + scale
- c — dissolve + scale + blur on the way in
- d — dissolve + scale in, blur on the way out (Tooltip / Toast stay a)
- e — b with timing sized to the surface (Tooltip / Toast stay a)

Two adversarial brand reviews rejected c and d (blur read as a lens /
depth metaphor, not as ink on paper), so #630 continues with b / e.

No VRT spec: the contract here is motion over time, which a still frame
cannot show (same reasoning as Tokens/Motion).`}}}},I=[{id:`a`,label:`a — Current`,summary:`Shipped keyframes (fade + scale / slide)`},{id:`b`,label:`b — Dissolve + scale`,summary:`opacity + scale from the scale token`},{id:`c`,label:`c — + Blur`,summary:`opacity + scale + blur, settling into focus`},{id:`d`,label:`d — Blur on exit`,summary:`opacity + scale in; reverse with blur out (Tooltip / Toast stay a)`},{id:`e`,label:`e — Sized timing`,summary:`b, fixed: Dialog 250 / 150ms, Popover · Select 150 / 100ms (ignores timing controls)`}],L={current:{label:`Schatten (current)`,dialogEnter:`200ms`,dialogExit:`150ms`,popoverEnter:`150ms`,popoverExit:`100ms`,easeEnter:`ease-out`,easeExit:`ease-in`},"transitions-dev":{label:`transitions.dev`,dialogEnter:`250ms`,dialogExit:`150ms`,popoverEnter:`250ms`,popoverExit:`150ms`,easeEnter:`cubic-bezier(0.22, 1, 0.36, 1)`,easeExit:`cubic-bezier(0.22, 1, 0.36, 1)`}},R=[`2px`,`3px`,`4px`],z=[`0.96`,`0.97`],B=[`1`,`4`],V=[{id:`preset`,label:`Preset`},{id:`0.5`,label:`×0.5 of enter`},{id:`0.6`,label:`×0.6 of enter`},{id:`0.75`,label:`×0.75 of enter`}],H=[{id:`preset`,label:`Preset`},{id:`ease-in`,label:`ease-in`},{id:`ease-in-out`,label:`ease-in-out`}],U=[{id:`same`,label:`Same as others`},{id:`none`,label:`No blur`}],W=(e,t,n)=>n===`preset`?t:`${Math.round(Number.parseFloat(e)*Number(n))}ms`,G=`
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

/* ---- Select (same timing as Popover; no nested fixed child, so scale is safe) ---- */
html[data-motion-proto="b"] .st-select__content,
html[data-motion-proto="c"] .st-select__content {
  transform-origin: var(--radix-select-content-transform-origin);
}
html[data-motion-proto="b"] .st-select__content[data-state="open"] {
  animation: proto-in-b calc(var(--proto-popover-enter) * var(--proto-slowmo)) var(--proto-ease-enter);
}
html[data-motion-proto="c"] .st-select__content[data-state="open"] {
  animation: proto-in-c calc(var(--proto-popover-enter) * var(--proto-slowmo)) var(--proto-ease-enter);
}
html[data-motion-proto="b"] .st-select__content[data-state="closed"] {
  animation: var(--proto-exit-b) calc(var(--proto-popover-exit) * var(--proto-slowmo)) var(--proto-ease-exit);
}
html[data-motion-proto="c"] .st-select__content[data-state="closed"] {
  animation: var(--proto-exit-c) calc(var(--proto-popover-exit) * var(--proto-slowmo)) var(--proto-ease-exit);
}
html[data-motion-proto="a"] .st-select__content[data-state="open"] {
  animation-duration: calc(150ms * var(--proto-slowmo));
}
html[data-motion-proto="a"] .st-select__content[data-state="closed"] {
  animation-duration: calc(100ms * var(--proto-slowmo));
}

/*
 * ---- Candidate d: no blur on the way in, blur on the way out ----
 * Enter is b (opacity + scale). Exit always plays c's reverse (sharp ->
 * blurred), whatever the "Exit (b/c)" control says, at the exit speed and
 * easing chosen above. Tooltip and Toast keep the shipped motion under d.
 */
html[data-motion-proto="d"] .st-dialog__content[data-state="open"],
html[data-motion-proto] .proto-specimen[data-variant="d"][data-state="open"] {
  animation: proto-in-b calc(var(--proto-dialog-enter) * var(--proto-slowmo)) var(--proto-ease-enter) both;
}
html[data-motion-proto="d"] .st-dialog__content[data-state="closed"],
html[data-motion-proto] .proto-specimen[data-variant="d"][data-state="closed"] {
  animation: proto-out-c calc(var(--proto-dialog-exit) * var(--proto-slowmo)) var(--proto-ease-exit) both;
}
html[data-motion-proto="d"] .st-popover__content {
  transform-origin: var(--radix-popover-content-transform-origin);
}
html[data-motion-proto="d"] .st-popover__content[data-state="open"] {
  animation: proto-in-b calc(var(--proto-popover-enter) * var(--proto-slowmo)) var(--proto-ease-enter);
}
html[data-motion-proto="d"] .st-popover__content[data-state="closed"] {
  animation: proto-out-c calc(var(--proto-popover-exit) * var(--proto-slowmo)) var(--proto-ease-exit);
}
html[data-motion-proto="d"] .st-select__content {
  transform-origin: var(--radix-select-content-transform-origin);
}
html[data-motion-proto="d"] .st-select__content[data-state="open"] {
  animation: proto-in-b calc(var(--proto-popover-enter) * var(--proto-slowmo)) var(--proto-ease-enter);
}
html[data-motion-proto="d"] .st-select__content[data-state="closed"] {
  animation: proto-out-c calc(var(--proto-popover-exit) * var(--proto-slowmo)) var(--proto-ease-exit);
}

/*
 * ---- Candidate e: b with timing sized to the surface ----
 * A fixed proposal: it ignores the timing and exit controls (only scale and
 * slow motion apply). Enter is opacity + scale on the smooth ease-out, exit
 * is a plain fade on ease-in. Overlay-sized surfaces (Dialog) take 250 /
 * 150ms; popover-sized ones (Popover, Select) take 150 / 100ms, the same
 * lengths as today. Tooltip and Toast keep the shipped motion.
 */
html[data-motion-proto="e"] {
  --proto-e-ease-in: cubic-bezier(0.22, 1, 0.36, 1);
}
html[data-motion-proto="e"] .st-dialog__content[data-state="open"],
html[data-motion-proto] .proto-specimen[data-variant="e"][data-state="open"] {
  animation: proto-in-b calc(250ms * var(--proto-slowmo)) cubic-bezier(0.22, 1, 0.36, 1) both;
}
html[data-motion-proto="e"] .st-dialog__content[data-state="closed"],
html[data-motion-proto] .proto-specimen[data-variant="e"][data-state="closed"] {
  animation: proto-fade-out calc(150ms * var(--proto-slowmo)) ease-in both;
}
/* Doubled attribute: matches the specificity of the :not(a) overlay rules above. */
html[data-motion-proto="e"][data-motion-proto] .st-dialog__overlay[data-state="open"] {
  animation: proto-fade-in calc(250ms * var(--proto-slowmo)) var(--proto-e-ease-in);
}
html[data-motion-proto="e"][data-motion-proto] .st-dialog__overlay[data-state="closed"] {
  animation: proto-fade-out calc(150ms * var(--proto-slowmo)) ease-in;
}
html[data-motion-proto="e"] .st-popover__content {
  transform-origin: var(--radix-popover-content-transform-origin);
}
html[data-motion-proto="e"] .st-select__content {
  transform-origin: var(--radix-select-content-transform-origin);
}
html[data-motion-proto="e"] :is(.st-popover__content, .st-select__content)[data-state="open"] {
  animation: proto-in-b calc(150ms * var(--proto-slowmo)) var(--proto-e-ease-in);
}
html[data-motion-proto="e"] :is(.st-popover__content, .st-select__content)[data-state="closed"] {
  animation: proto-fade-out calc(100ms * var(--proto-slowmo)) ease-in;
}

/* ---- Tooltip (its own in / out names, so its blur can be switched off) ---- */
html[data-motion-proto="b"] .st-tooltip__content,
html[data-motion-proto="c"] .st-tooltip__content {
  transform-origin: var(--radix-tooltip-content-transform-origin);
}
html[data-motion-proto="b"] .st-tooltip__content:is([data-state="delayed-open"], [data-state="instant-open"]) {
  animation: proto-in-b calc(var(--proto-popover-enter) * var(--proto-slowmo)) var(--proto-ease-enter);
}
html[data-motion-proto="c"] .st-tooltip__content:is([data-state="delayed-open"], [data-state="instant-open"]) {
  animation: var(--proto-tooltip-in) calc(var(--proto-popover-enter) * var(--proto-slowmo)) var(--proto-ease-enter);
}
html[data-motion-proto="b"] .st-tooltip__content[data-state="closed"] {
  animation: var(--proto-exit-b) calc(var(--proto-popover-exit) * var(--proto-slowmo)) var(--proto-ease-exit);
}
html[data-motion-proto="c"] .st-tooltip__content[data-state="closed"] {
  animation: var(--proto-tooltip-out) calc(var(--proto-popover-exit) * var(--proto-slowmo)) var(--proto-ease-exit);
}
html[data-motion-proto="a"] .st-tooltip__content,
html[data-motion-proto="d"] .st-tooltip__content,
html[data-motion-proto="e"] .st-tooltip__content {
  animation-duration: calc(150ms * var(--proto-slowmo));
}
html[data-motion-proto="a"] .st-tooltip__content[data-state="closed"],
html[data-motion-proto="d"] .st-tooltip__content[data-state="closed"],
html[data-motion-proto="e"] .st-tooltip__content[data-state="closed"] {
  animation-duration: calc(100ms * var(--proto-slowmo));
}

/*
 * ---- Toast ----
 * Sonner owns the slide + fade: a 400ms transition on transform / opacity,
 * keyed on [data-mounted], and it unmounts 200ms after [data-removed]
 * (TIME_BEFORE_UNMOUNT). Sonner also uses transform for stacking (the
 * toasts behind the front one are scaled), so scale is never applied here.
 * Candidate c adds only a filter animation, which Sonner does not touch.
 * The state attributes sit on Sonner's <li>, while .st-toast is the <div>
 * Toast.tsx renders, two wrappers down ([data-content] > [data-title]), so
 * the rules key on the <li> and blur the descendant. Slow motion cannot
 * reach Sonner's timing, so the toast ignores it. Sonner's reduced-motion
 * rule stops animations on [data-sonner-toast] > * only, which does not
 * reach .st-toast, so the blur is declared under no-preference instead.
 */
@keyframes proto-toast-blur-in {
  from { filter: blur(var(--proto-blur)); }
  to   { filter: blur(0); }
}
@keyframes proto-toast-blur-out {
  from { filter: blur(0); }
  to   { filter: blur(var(--proto-blur)); }
}
@media (prefers-reduced-motion: no-preference) {
  html[data-motion-proto="c"] [data-sonner-toast][data-mounted="true"] .st-toast {
    animation: proto-toast-blur-in 400ms var(--proto-ease-enter) both;
  }
  html[data-motion-proto="c"] [data-sonner-toast][data-removed="true"] .st-toast {
    /* "Fade only" leaves the exit to Sonner's own fade (no blur). */
    animation: var(--proto-toast-out) 200ms var(--proto-ease-exit) both;
  }
}

@media (prefers-reduced-motion: reduce) {
  html[data-motion-proto] .st-dialog__content[data-state="open"],
  html[data-motion-proto] .st-popover__content[data-state="open"],
  html[data-motion-proto] .st-select__content[data-state="open"],
  html[data-motion-proto] .st-tooltip__content:is([data-state="delayed-open"], [data-state="instant-open"]),
  html[data-motion-proto] .proto-specimen[data-state="open"] {
    animation: proto-fade-in 150ms linear both;
  }
  html[data-motion-proto] .st-dialog__content[data-state="closed"],
  html[data-motion-proto] .st-popover__content[data-state="closed"],
  html[data-motion-proto] .st-select__content[data-state="closed"],
  html[data-motion-proto] .st-tooltip__content[data-state="closed"],
  html[data-motion-proto] .proto-specimen[data-state="closed"] {
    animation: proto-fade-out 100ms linear both;
  }
}
`,K=({variant:e,state:t,children:n})=>(0,P.jsx)(`div`,{className:`flex h-56 items-center justify-center rounded-xl border border-border bg-surface p-4`,children:(0,P.jsx)(`div`,{className:`proto-specimen w-full max-w-[14rem] border border-border-strong bg-background p-4`,style:{boxShadow:`var(--shadow-modal)`},"data-variant":e,"data-state":t,children:n})}),q=()=>{let[e,t]=(0,N.useState)(`c`),[n,r]=(0,N.useState)(`transitions-dev`),[a,l]=(0,N.useState)(`mirror`),[p,g]=(0,N.useState)(`0.6`),[b,w]=(0,N.useState)(`ease-in`),[T,D]=(0,N.useState)(`3px`),[F,q]=(0,N.useState)(`0.97`),[J,Y]=(0,N.useState)(`1`),[X,re]=(0,N.useState)(`same`),[Z,ie]=(0,N.useState)(`open`),[ae,Q]=(0,N.useState)(!1),[oe,$]=(0,N.useState)(!1);return(0,N.useEffect)(()=>{let e=window.matchMedia(`(prefers-reduced-motion: reduce)`);$(e.matches);let t=e=>$(e.matches);return e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[]),(0,N.useEffect)(()=>{let t=document.documentElement,r=L[n],i={"--proto-blur":T,"--proto-scale":F,"--proto-slowmo":J,"--proto-dialog-enter":r.dialogEnter,"--proto-dialog-exit":W(r.dialogEnter,r.dialogExit,p),"--proto-popover-enter":r.popoverEnter,"--proto-popover-exit":W(r.popoverEnter,r.popoverExit,p),"--proto-ease-enter":r.easeEnter,"--proto-ease-exit":b===`preset`?r.easeExit:b,"--proto-exit-b":a===`mirror`?`proto-out-b`:`proto-fade-out`,"--proto-exit-c":a===`mirror`?`proto-out-c`:`proto-fade-out`,"--proto-toast-out":a===`fade`?`none`:`proto-toast-blur-out`,"--proto-tooltip-in":X===`none`?`proto-in-b`:`proto-in-c`,"--proto-tooltip-out":a===`fade`?`proto-fade-out`:X===`none`?`proto-out-b`:`proto-out-c`};t.setAttribute(`data-motion-proto`,e);for(let[e,n]of Object.entries(i))t.style.setProperty(e,n);return()=>{t.removeAttribute(`data-motion-proto`);for(let e of Object.keys(i))t.style.removeProperty(e)}},[e,n,a,p,b,T,F,J,X]),(0,P.jsxs)(`div`,{className:`mx-auto max-w-4xl px-8 py-12`,children:[(0,P.jsx)(`style`,{children:G}),(0,P.jsx)(ne,{children:`Motion prototype — dissolve, scale, blur`}),(0,P.jsx)(A,{children:`A spike for choosing Schatten's signature enter / exit motion. Surfaces should come into focus as they appear and dissolve into shadow as they leave. Nothing here changes a component — all overrides are scoped to this page and removed when you leave it.`}),oe&&(0,P.jsxs)(O,{children:[(0,P.jsx)(`code`,{children:`prefers-reduced-motion: reduce`}),` is active — every candidate collapses to an opacity-only fade, which is the intended reduced-motion behavior.`]}),(0,P.jsx)(k,{children:`Controls`}),(0,P.jsxs)(`div`,{className:`flex flex-col gap-3 rounded-xl border border-border p-5`,children:[(0,P.jsx)(M,{label:`Candidate`,options:I,value:e,onChange:t}),(0,P.jsx)(M,{label:`Timing (b/c)`,options:Object.keys(L).map(e=>({id:e,label:L[e].label})),value:n,onChange:r}),(0,P.jsx)(M,{label:`Exit (b/c)`,options:[{id:`mirror`,label:`Mirror enter`},{id:`fade`,label:`Fade only`}],value:a,onChange:l}),(0,P.jsx)(M,{label:`Exit speed`,options:V,value:p,onChange:g}),(0,P.jsx)(M,{label:`Exit easing`,options:H,value:b,onChange:w}),(0,P.jsx)(M,{label:`Blur (c)`,options:R.map(e=>({id:e,label:e})),value:T,onChange:D}),(0,P.jsx)(M,{label:`Scale (b/c)`,options:z.map(e=>({id:e,label:e})),value:F,onChange:q}),(0,P.jsx)(M,{label:`Tooltip (c)`,options:U,value:X,onChange:re}),(0,P.jsx)(M,{label:`Slow motion`,options:B.map(e=>({id:e,label:`×${e}`})),value:J,onChange:Y})]}),(0,P.jsx)(k,{children:`Side by side`}),(0,P.jsx)(O,{children:`The three candidates play at once on a dialog-like panel. Timing, exit, blur, scale and slow motion apply to b and c; a always plays the shipped Dialog keyframes.`}),(0,P.jsx)(`div`,{className:`mb-4 mt-4`,children:(0,P.jsx)(i,{onClick:()=>ie(e=>e===`open`?`closed`:`open`),children:Z===`open`?`Play exit`:`Play enter`})}),(0,P.jsx)(`div`,{className:`grid grid-cols-1 gap-4 md:grid-cols-3`,children:I.map(e=>(0,P.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,P.jsxs)(K,{variant:e.id,state:Z,children:[(0,P.jsx)(_,{variant:`heading`,size:`sm`,children:`Save changes?`}),(0,P.jsx)(_,{size:`sm`,color:`muted`,children:`Your edits will be kept in this draft.`})]}),(0,P.jsx)(_,{variant:`label`,size:`sm`,children:e.label}),(0,P.jsx)(_,{size:`sm`,color:`muted`,children:e.summary})]},e.id))}),(0,P.jsx)(k,{children:`Real components`}),(0,P.jsx)(O,{children:`These are the shipped Dialog, Popover, Select, Tooltip and Toast, re-animated by the candidate selected above. DropdownMenu is left out on purpose: its submenu is a nested fixed child, so the panel can take neither transform nor filter.`}),(0,P.jsx)(j,{children:`Dialog`}),(0,P.jsx)(i,{variant:`secondary`,onClick:()=>Q(!0),children:`Open dialog`}),(0,P.jsx)(u,{isOpen:ae,onOpenChange:Q,title:`Save changes?`,description:`Your edits will be kept in this draft.`,actionButton:{label:`Save`,onClick:()=>Q(!1)},cancelButton:{label:`Cancel`}}),(0,P.jsx)(j,{children:`Popover`}),(0,P.jsx)(`div`,{className:`flex flex-wrap gap-3 py-16`,children:[`bottom`,`top`,`right`,`left`].map(e=>(0,P.jsxs)(S,{children:[(0,P.jsx)(v,{children:(0,P.jsxs)(i,{variant:`secondary`,children:[`Open (`,e,`)`]})}),(0,P.jsx)(y,{side:e,children:(0,P.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,P.jsx)(_,{size:`sm`,children:`Filters apply to this view only.`}),(0,P.jsx)(x,{children:(0,P.jsx)(i,{size:`sm`,variant:`secondary`,children:`Close`})})]})})]},e))}),(0,P.jsx)(j,{children:`Select`}),(0,P.jsx)(`div`,{className:`w-56`,children:(0,P.jsxs)(te,{defaultValue:`apple`,children:[(0,P.jsx)(h,{"aria-label":`Fruit`,children:(0,P.jsx)(d,{placeholder:`Pick a fruit`})}),(0,P.jsxs)(m,{children:[(0,P.jsx)(f,{value:`apple`,children:`Apple`}),(0,P.jsx)(f,{value:`banana`,children:`Banana`}),(0,P.jsx)(f,{value:`cherry`,children:`Cherry`})]})]})}),(0,P.jsx)(j,{children:`Tooltip`}),(0,P.jsx)(ee,{delayDuration:100,children:(0,P.jsx)(`div`,{className:`flex flex-wrap gap-3`,children:[`top`,`bottom`].map(e=>(0,P.jsxs)(c,{children:[(0,P.jsx)(o,{children:(0,P.jsxs)(i,{variant:`secondary`,children:[`Hover (`,e,`)`]})}),(0,P.jsx)(s,{side:e,children:`Saved to drafts`})]},e))})}),(0,P.jsx)(j,{children:`Toast`}),(0,P.jsx)(O,{children:`Sonner owns the toast's slide and fade (400ms in, unmounted 200ms after dismiss) and uses transform for stacking, so no candidate scales the toast. Candidate c adds blur only; a and b look the same here. Slow motion does not reach Sonner's timing.`}),(0,P.jsx)(`div`,{className:`mt-4 flex flex-wrap gap-3 pb-32`,children:(0,P.jsx)(i,{variant:`secondary`,onClick:()=>C({title:`Saved`,description:`Your edits are kept in this draft.`}),children:`Show toast`})}),(0,P.jsx)(E,{})]})},J={name:`Prototype`,render:()=>(0,P.jsx)(q,{})},Y=[`Prototype`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Prototype',
  render: () => <PrototypePage />
}`,...J.parameters?.docs?.source}}}})))()}X();export{J as Prototype,Y as __namedExportsOrder,F as default};