import{j as e,r as p}from"./iframe-1HP2SBUK.js";import{B as m}from"./Button-DXeccucx.js";import{I as D}from"./Input-C6bXRmjG.js";import{T as g}from"./Text-4nGK04fg.js";import{u as ne,c as w}from"./index-EhR8fFcx.js";import{u as V,c as se}from"./index-BmnMUvJ9.js";import{c as ae}from"./index-BN7IJQPt.js";import{P as pe,D as ie}from"./index-BA3m6A5x.js";import{h as ce,R as le,u as de,F as me}from"./Combination-QVZapgjb.js";import{u as ue}from"./index-CV-cOW53.js";import{R as ve,a as B,c as M,C as he,A as fe}from"./index-BvOMIvVs.js";import{P as q}from"./index-B2eE7hd1.js";import{P as W}from"./index-2RKHmWXn.js";import{a as ge}from"./utils-HnQPFlDo.js";/* empty css                */import{S as Pe}from"./settings-Ck0NGxwu.js";import"./preload-helper-C3pcFZG-.js";import"./index-BekUCMdb.js";/* empty css               */import"./Spinner-BJUznhjH.js";/* empty css                */import"./field-BJcB_iDq.js";/* empty css              *//* empty css             */import"./index-gbSK16r-.js";import"./index-B8x0jayz.js";import"./index-CGzDUQ0S.js";import"./index-CX3Zeger.js";import"./createLucideIcon-DHdrB-oO.js";var k="Popover",[z]=ae(k,[M]),_=M(),[xe,v]=z(k),$=o=>{const{__scopePopover:t,children:r,open:n,defaultOpen:s,onOpenChange:a,modal:i=!1}=o,c=_(t),P=p.useRef(null),[x,T]=p.useState(!1),[R,h]=ne({prop:n,defaultProp:s??!1,onChange:a,caller:k});return e.jsx(ve,{...c,children:e.jsx(xe,{scope:t,contentId:ue(),triggerRef:P,open:R,onOpenChange:h,onOpenToggle:p.useCallback(()=>h(F=>!F),[h]),hasCustomAnchor:x,onCustomAnchorAdd:p.useCallback(()=>T(!0),[]),onCustomAnchorRemove:p.useCallback(()=>T(!1),[]),modal:i,children:r})})};$.displayName=k;var L="PopoverAnchor",H=p.forwardRef((o,t)=>{const{__scopePopover:r,...n}=o,s=v(L,r),a=_(r),{onCustomAnchorAdd:i,onCustomAnchorRemove:c}=s;return p.useEffect(()=>(i(),()=>c()),[i,c]),e.jsx(B,{...a,...n,ref:t})});H.displayName=L;var G="PopoverTrigger",U=p.forwardRef((o,t)=>{const{__scopePopover:r,...n}=o,s=v(G,r),a=_(r),i=V(t,s.triggerRef),c=e.jsx(W.button,{type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.open?s.contentId:void 0,"data-state":Y(s.open),...n,ref:i,onClick:w(o.onClick,s.onOpenToggle)});return s.hasCustomAnchor?c:e.jsx(B,{asChild:!0,...a,children:c})});U.displayName=G;var E="PopoverPortal",[Ce,ye]=z(E,{forceMount:void 0}),K=o=>{const{__scopePopover:t,forceMount:r,children:n,container:s}=o,a=v(E,t);return e.jsx(Ce,{scope:t,forceMount:r,children:e.jsx(q,{present:r||a.open,children:e.jsx(pe,{asChild:!0,container:s,children:n})})})};K.displayName=E;var f="PopoverContent",Z=p.forwardRef((o,t)=>{const r=ye(f,o.__scopePopover),{forceMount:n=r.forceMount,...s}=o,a=v(f,o.__scopePopover);return e.jsx(q,{present:n||a.open,children:a.modal?e.jsx(Ne,{...s,ref:t}):e.jsx(je,{...s,ref:t})})});Z.displayName=f;var be=se("PopoverContent.RemoveScroll"),Ne=p.forwardRef((o,t)=>{const r=v(f,o.__scopePopover),n=p.useRef(null),s=V(t,n),a=p.useRef(!1);return p.useEffect(()=>{const i=n.current;if(i)return ce(i)},[]),e.jsx(le,{as:be,allowPinchZoom:!0,children:e.jsx(J,{...o,ref:s,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:w(o.onCloseAutoFocus,i=>{i.preventDefault(),a.current||r.triggerRef.current?.focus()}),onPointerDownOutside:w(o.onPointerDownOutside,i=>{const c=i.detail.originalEvent,P=c.button===0&&c.ctrlKey===!0,x=c.button===2||P;a.current=x},{checkForDefaultPrevented:!1}),onFocusOutside:w(o.onFocusOutside,i=>i.preventDefault(),{checkForDefaultPrevented:!1})})})}),je=p.forwardRef((o,t)=>{const r=v(f,o.__scopePopover),n=p.useRef(!1),s=p.useRef(!1);return e.jsx(J,{...o,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{o.onCloseAutoFocus?.(a),a.defaultPrevented||(n.current||r.triggerRef.current?.focus(),a.preventDefault()),n.current=!1,s.current=!1},onInteractOutside:a=>{o.onInteractOutside?.(a),a.defaultPrevented||(n.current=!0,a.detail.originalEvent.type==="pointerdown"&&(s.current=!0));const i=a.target;r.triggerRef.current?.contains(i)&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&s.current&&a.preventDefault()}})}),J=p.forwardRef((o,t)=>{const{__scopePopover:r,trapFocus:n,onOpenAutoFocus:s,onCloseAutoFocus:a,disableOutsidePointerEvents:i,onEscapeKeyDown:c,onPointerDownOutside:P,onFocusOutside:x,onInteractOutside:T,...R}=o,h=v(f,r),F=_(r);return de(),e.jsx(me,{asChild:!0,loop:!0,trapped:n,onMountAutoFocus:s,onUnmountAutoFocus:a,children:e.jsx(ie,{asChild:!0,disableOutsidePointerEvents:i,onInteractOutside:T,onEscapeKeyDown:c,onPointerDownOutside:P,onFocusOutside:x,onDismiss:()=>h.onOpenChange(!1),deferPointerDownOutside:!0,children:e.jsx(he,{"data-state":Y(h.open),role:"dialog",id:h.contentId,...F,...R,ref:t,style:{...R.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),Q="PopoverClose",X=p.forwardRef((o,t)=>{const{__scopePopover:r,...n}=o,s=v(Q,r);return e.jsx(W.button,{type:"button",...n,ref:t,onClick:w(o.onClick,()=>s.onOpenChange(!1))})});X.displayName=Q;var we="PopoverArrow",Oe=p.forwardRef((o,t)=>{const{__scopePopover:r,...n}=o,s=_(r);return e.jsx(fe,{...s,...n,ref:t})});Oe.displayName=we;function Y(o){return o?"open":"closed"}var _e=$,ee=H,oe=U,Te=K,te=Z,re=X;const d=o=>e.jsx(_e,{...o});d.displayName="Popover";const S=p.forwardRef(({children:o,...t},r)=>{const n=typeof o=="string"||typeof o=="number";return e.jsx(ee,{ref:r,asChild:!n,...t,children:o})});S.displayName=ee.displayName;const u=p.forwardRef(({children:o,...t},r)=>{const n=typeof o=="string"||typeof o=="number";return e.jsx(oe,{ref:r,asChild:!n,...t,children:o})});u.displayName=oe.displayName;const l=p.forwardRef(({className:o,align:t="center",sideOffset:r=8,container:n,...s},a)=>e.jsx(Te,{container:n,children:e.jsx(te,{ref:a,align:t,sideOffset:r,className:ge("st-popover__content",o),...s})}));l.displayName=te.displayName;const O=p.forwardRef(({children:o,...t},r)=>{const n=typeof o=="string"||typeof o=="number";return e.jsx(re,{ref:r,asChild:!n,...t,children:o})});O.displayName=re.displayName;try{d.displayName="Popover",d.__docgenInfo={description:"Click-triggered popover root. Unlike `Tooltip`, Radix Popover has no\n`Provider`, so the root wraps `PopoverPrimitive.Root` directly.",displayName:"Popover",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx",methods:[],props:{open:{defaultValue:null,declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"}],description:"Controlled open state.",name:"open",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"},required:!1,tags:{},type:{name:"boolean"}},defaultOpen:{defaultValue:null,declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"}],description:"Initial open state (uncontrolled).",name:"defaultOpen",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"},required:!1,tags:{},type:{name:"boolean"}},onOpenChange:{defaultValue:null,declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"}],description:"Fired when the open state changes.",name:"onOpenChange",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"},required:!1,tags:{},type:{name:"((open: boolean) => void)"}},modal:{defaultValue:{value:"false"},declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"}],description:"Whether the popover traps focus and locks scroll.\n\nDefaults to `false` — Popover is non-modal: the rest of the page stays\ninteractive, there is no scroll lock, and Tab can leave the panel. Set\n`modal` when a focus trap + scroll lock is required.",name:"modal",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"},required:!1,tags:{default:"false"},type:{name:"boolean"}}},tags:{}}}catch{}try{S.displayName="PopoverAnchor",S.__docgenInfo={description:"Optional positioning anchor. Render it around the element the content should\nbe positioned against when that element is not the `PopoverTrigger`.\n\nLike the triggers, `asChild` is not part of the public API — an element\nchild is merged onto directly (internal `asChild`), while a text child gets\nRadix's own `<div>` wrapper.",displayName:"PopoverAnchor",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx",methods:[],props:{},tags:{}}}catch{}try{O.displayName="PopoverClose",O.__docgenInfo={description:"Closes the popover. Like the triggers, `asChild` is not part of the public\nAPI — wrap a `<Button>` (element child) and the close behaviour merges onto\nit, while a string child lets Radix render its own `<button>`.",displayName:"PopoverClose",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx",methods:[],props:{},tags:{}}}catch{}try{l.displayName="PopoverContent",l.__docgenInfo={description:"",displayName:"PopoverContent",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx",methods:[],props:{side:{defaultValue:{value:"'bottom'"},declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"}],description:"The preferred side of the trigger to render the popover against.",name:"side",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"},required:!1,tags:{default:"'bottom'"},type:{name:"enum",raw:'"left" | "right" | "top" | "bottom"',value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},align:{defaultValue:{value:"center"},declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"}],description:"The alignment against the trigger.",name:"align",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"},required:!1,tags:{default:"'center'"},type:{name:"enum",raw:'"center" | "end" | "start"',value:[{value:'"center"'},{value:'"end"'},{value:'"start"'}]}},sideOffset:{defaultValue:{value:"8"},declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"}],description:"Distance from the trigger, in pixels.",name:"sideOffset",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"},required:!1,tags:{default:"8"},type:{name:"number"}},onOpenAutoFocus:{defaultValue:null,declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"}],description:"Fired when focus moves into the panel on open. Call\n`event.preventDefault()` to keep focus where it was — e.g. when several\nnon-modal popovers are pinned open at once.",name:"onOpenAutoFocus",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"},required:!1,tags:{},type:{name:"((event: Event) => void)"}},container:{defaultValue:null,declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"}],description:`Custom container element for the portal. Useful for rendering inside a
Dialog or Drawer.`,name:"container",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"},required:!1,tags:{},type:{name:"Element | DocumentFragment | null"}}},tags:{}}}catch{}try{u.displayName="PopoverTrigger",u.__docgenInfo={description:"",displayName:"PopoverTrigger",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx",methods:[],props:{},tags:{}}}catch{}const no={title:"Components/lv1/Popover",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{side:{description:"The preferred side of the trigger to render the popover against.",control:"select",options:["top","right","bottom","left"],table:{type:{summary:'"top" | "right" | "bottom" | "left"'},defaultValue:{summary:"bottom"}}},align:{description:"The alignment against the trigger.",control:"select",options:["start","center","end"],table:{type:{summary:'"start" | "center" | "end"'},defaultValue:{summary:"center"}}}}},A={name:"Playground",args:{side:"bottom",align:"center"},render:o=>e.jsxs(d,{children:[e.jsx(u,{children:e.jsx(m,{variant:"secondary",children:"Open popover"})}),e.jsx(l,{...o,children:e.jsx(g,{children:"Place any content inside the panel."})})]})},I={layout:"padded",docs:{disable:!0},a11y:{config:{rules:[{id:"aria-hidden-focus",enabled:!1}]}}},C={name:"Settings Panel (VRT)",parameters:I,render:()=>e.jsxs(d,{defaultOpen:!0,children:[e.jsx(u,{children:e.jsx(m,{variant:"secondary",icon:Pe,children:"Settings"})}),e.jsx(l,{className:"w-72",children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(g,{variant:"heading",size:"sm",children:"Dimensions"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("label",{className:"flex items-center justify-between gap-4 text-sm",htmlFor:"pop-w",children:["Width",e.jsx(D,{id:"pop-w",defaultValue:"100%",className:"w-32"})]}),e.jsxs("label",{className:"flex items-center justify-between gap-4 text-sm",htmlFor:"pop-h",children:["Height",e.jsx(D,{id:"pop-h",defaultValue:"auto",className:"w-32"})]})]}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(O,{children:e.jsx(m,{variant:"tertiary",size:"sm",children:"Cancel"})}),e.jsx(O,{children:e.jsx(m,{size:"sm",children:"Save"})})]})]})})]})},y={name:"Info (VRT)",parameters:I,render:()=>e.jsxs(d,{defaultOpen:!0,children:[e.jsx(u,{children:e.jsx(m,{variant:"tertiary",children:"About"})}),e.jsx(l,{className:"w-64",children:e.jsx(g,{children:"Popover renders click-triggered content over the page. Press Escape or click outside to dismiss."})})]})},b={name:"Placements (VRT)",parameters:I,render:()=>e.jsx("div",{className:"flex flex-col items-center gap-32 py-16",children:["left","top","bottom","right"].map(o=>e.jsxs(d,{defaultOpen:!0,children:[e.jsx(u,{children:e.jsxs(m,{variant:"secondary",children:["side: ",o]})}),e.jsx(l,{side:o,className:"w-40",onOpenAutoFocus:t=>t.preventDefault(),children:e.jsxs(g,{children:["Opens on ",o,"."]})})]},o))})},N={name:"With Anchor",parameters:{docs:{disable:!0}},render:()=>{const[o,t]=p.useState(!0);return e.jsxs("div",{className:"flex flex-col items-center gap-6 py-8",children:[e.jsxs(d,{open:o,onOpenChange:t,children:[e.jsx(S,{children:e.jsx("div",{className:"rounded border border-border-strong px-6 py-3 text-sm text-foreground-muted",children:"Positioning anchor"})}),e.jsx(l,{side:"bottom",className:"w-56",children:e.jsx(g,{children:"Positioned against the anchor box, not the toggle button."})})]}),e.jsx(m,{variant:"secondary",onClick:()=>t(r=>!r),children:"Toggle (separate button)"})]})}},j={name:"Controlled",parameters:{docs:{disable:!0}},render:()=>{const[o,t]=p.useState(!1);return e.jsxs(d,{open:o,onOpenChange:t,children:[e.jsx(u,{children:e.jsxs(m,{variant:"secondary",children:[o?"Close":"Open"," popover"]})}),e.jsx(l,{children:e.jsx(g,{children:"Controlled content."})})]})}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    side: 'bottom',
    align: 'center'
  },
  render: (args: PopoverContentProps) => <Popover>
      <PopoverTrigger>
        <Button variant="secondary">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent {...args}>
        <Text>Place any content inside the panel.</Text>
      </PopoverContent>
    </Popover>
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Settings Panel (VRT)',
  parameters: openParams,
  render: () => <Popover defaultOpen>
      <PopoverTrigger>
        <Button variant="secondary" icon={Settings}>
          Settings
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <div className="flex flex-col gap-3">
          <Text variant="heading" size="sm">
            Dimensions
          </Text>
          <div className="flex flex-col gap-2">
            <label className="flex items-center justify-between gap-4 text-sm" htmlFor="pop-w">
              Width
              <Input id="pop-w" defaultValue="100%" className="w-32" />
            </label>
            <label className="flex items-center justify-between gap-4 text-sm" htmlFor="pop-h">
              Height
              <Input id="pop-h" defaultValue="auto" className="w-32" />
            </label>
          </div>
          <div className="flex justify-end gap-2">
            <PopoverClose>
              <Button variant="tertiary" size="sm">
                Cancel
              </Button>
            </PopoverClose>
            <PopoverClose>
              <Button size="sm">Save</Button>
            </PopoverClose>
          </div>
        </div>
      </PopoverContent>
    </Popover>
}`,...C.parameters?.docs?.source},description:{story:'A settings panel with a heading, form controls, and a close action — the\ncanonical "click to reveal editable content" use case. Pinned `defaultOpen`\nso VRT can capture the portaled content in one frame.',...C.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Info (VRT)',
  parameters: openParams,
  render: () => <Popover defaultOpen>
      <PopoverTrigger>
        <Button variant="tertiary">About</Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <Text>
          Popover renders click-triggered content over the page. Press Escape or click outside to
          dismiss.
        </Text>
      </PopoverContent>
    </Popover>
}`,...y.parameters?.docs?.source},description:{story:"Plain informational panel — minimal content, default placement.",...y.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Placements (VRT)',
  parameters: openParams,
  render: () => <div className="flex flex-col items-center gap-32 py-16">
      {(['left', 'top', 'bottom', 'right'] as const).map(side => <Popover key={side} defaultOpen>
          <PopoverTrigger>
            <Button variant="secondary">side: {side}</Button>
          </PopoverTrigger>
          {/* Four non-modal popovers open at once: prevent each panel from
           * grabbing focus on open, otherwise one opening counts as an
           * "outside" event that dismisses the others. */}
          <PopoverContent side={side} className="w-40" onOpenAutoFocus={e => e.preventDefault()}>
            <Text>Opens on {side}.</Text>
          </PopoverContent>
        </Popover>)}
    </div>
}`,...b.parameters?.docs?.source},description:{story:"All four `side` placements, pinned open. Triggers are stacked in a column\nwith generous spacing so each portaled panel opens clear of its neighbours\n(`left` / `right` extend horizontally; `top` / `bottom` diverge vertically).",...b.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'With Anchor',
  parameters: {
    docs: {
      disable: true
    }
  },
  render: () => {
    const [open, setOpen] = useState(true);
    return <div className="flex flex-col items-center gap-6 py-8">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverAnchor>
            <div className="rounded border border-border-strong px-6 py-3 text-sm text-foreground-muted">
              Positioning anchor
            </div>
          </PopoverAnchor>
          <PopoverContent side="bottom" className="w-56">
            <Text>Positioned against the anchor box, not the toggle button.</Text>
          </PopoverContent>
        </Popover>
        <Button variant="secondary" onClick={() => setOpen(o => !o)}>
          Toggle (separate button)
        </Button>
      </div>;
  }
}`,...N.parameters?.docs?.source},description:{story:"`PopoverAnchor` decouples the positioning reference from the open trigger:\nthe panel is positioned against the bordered anchor box, while a **separate**\nbutton toggles the controlled `open` state. Note this pattern uses\ncontrolled `open` rather than `PopoverTrigger` — rendering both an explicit\n`PopoverAnchor` and a `PopoverTrigger` gives Radix two competing anchors and\nthe content loses its positioning reference. Interactive (not in the VRT\nroster); the anchor wiring is pinned by the unit test.",...N.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Controlled',
  parameters: {
    docs: {
      disable: true
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          <Button variant="secondary">{open ? 'Close' : 'Open'} popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <Text>Controlled content.</Text>
        </PopoverContent>
      </Popover>;
  }
}`,...j.parameters?.docs?.source},description:{story:"Controlled open state via `open` / `onOpenChange`.",...j.parameters?.docs?.description}}};const so=["Playground","SettingsPanel","Info","Placements","WithAnchor","Controlled"];export{j as Controlled,y as Info,b as Placements,A as Playground,C as SettingsPanel,N as WithAnchor,so as __namedExportsOrder,no as default};
