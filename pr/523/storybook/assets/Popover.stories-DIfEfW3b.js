import{r as p,j as e}from"./iframe-Xg9OlWT7.js";import{B as v}from"./Button-BjOB-xXC.js";import{I as V}from"./Input-Bb5Nmwc2.js";import{T as x}from"./Text-BQMTAxK8.js";import{u as Q,c as w}from"./index-DvwAwcW5.js";import{u as B,c as X}from"./index-dugmFnsH.js";import{c as Y}from"./index-CGbo7B-D.js";import{P as ee,D as oe}from"./index-DII7jJAY.js";import{h as te,R as re,u as ne,F as se}from"./Combination-Bxiqybq0.js";import{u as ae}from"./index-D2FFdyH4.js";import{c as M,R as pe,A as q,C as ie}from"./index-B_bXNULa.js";import{P as z}from"./index-BFK0Qorl.js";import{P as W}from"./index-CWacIgmS.js";import{a as ce}from"./utils-HnQPFlDo.js";/* empty css                */import{S as le}from"./settings-DqxHyyHg.js";import"./preload-helper-C0RihfT0.js";import"./index-BekUCMdb.js";/* empty css               */import"./Spinner-B1SfegpT.js";/* empty css                */import"./field-OzJLqZTY.js";/* empty css              *//* empty css             */import"./index-Cl8YOkXk.js";import"./index-DPUr1-wL.js";import"./index-cvAIH5kW.js";import"./index-CMzY-nxs.js";import"./createLucideIcon-hlaq9SXF.js";var de=Object.defineProperty,m=(o,t)=>de(o,"name",{value:t,configurable:!0}),I="Popover",[$,no]=Y(I,[M]),k=M(),[me,f]=$(I),ue=m(o=>{const{__scopePopover:t,children:n,open:r,defaultOpen:i,onOpenChange:s,modal:a=!1}=o,c=k(t),l=p.useRef(null),[C,P]=p.useState(!1),[F,g]=Q({prop:r,defaultProp:i??!1,onChange:s,caller:I});return e.jsx(pe,{...c,children:e.jsx(me,{scope:t,contentId:ae(),triggerRef:l,open:F,onOpenChange:g,onOpenToggle:p.useCallback(()=>g(y=>!y),[g]),hasCustomAnchor:C,onCustomAnchorAdd:p.useCallback(()=>P(!0),[]),onCustomAnchorRemove:p.useCallback(()=>P(!1),[]),modal:a,children:n})})},"Popover"),ve="PopoverAnchor",he=p.forwardRef(m(function(t,n){const{__scopePopover:r,...i}=t,s=f(ve,r),a=k(r),{onCustomAnchorAdd:c,onCustomAnchorRemove:l}=s;return p.useEffect(()=>(c(),()=>l()),[c,l]),e.jsx(q,{...a,...i,ref:n})},"PopoverAnchor")),fe="PopoverTrigger",Pe=p.forwardRef(m(function(t,n){const{__scopePopover:r,...i}=t,s=f(fe,r),a=k(r),c=B(n,s.triggerRef),l=e.jsx(W.button,{type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.open?s.contentId:void 0,"data-state":E(s.open),...i,ref:c,onClick:w(t.onClick,s.onOpenToggle)});return s.hasCustomAnchor?l:e.jsx(q,{asChild:!0,...a,children:l})},"PopoverTrigger")),L="PopoverPortal",[ge,xe]=$(L,{forceMount:void 0}),Ce=m(o=>{const{__scopePopover:t,forceMount:n,children:r,container:i}=o,s=f(L,t);return e.jsx(ge,{scope:t,forceMount:n,children:e.jsx(z,{present:n||s.open,children:e.jsx(ee,{asChild:!0,container:i,children:r})})})},"PopoverPortal"),T="PopoverContent",ye=p.forwardRef(m(function(t,n){const r=xe(T,t.__scopePopover),{forceMount:i=r.forceMount,...s}=t,a=f(T,t.__scopePopover);return e.jsx(z,{present:i||a.open,children:a.modal?e.jsx(Ne,{...s,ref:n}):e.jsx(je,{...s,ref:n})})},"PopoverContent")),be=X("PopoverContent.RemoveScroll"),Ne=p.forwardRef(m(function(t,n){const r=f(T,t.__scopePopover),i=p.useRef(null),s=B(n,i),a=p.useRef(!1);return p.useEffect(()=>{const c=i.current;if(c)return te(c)},[]),e.jsx(re,{as:be,allowPinchZoom:!0,children:e.jsx(H,{...t,ref:s,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:w(t.onCloseAutoFocus,c=>{c.preventDefault(),a.current||r.triggerRef.current?.focus()}),onPointerDownOutside:w(t.onPointerDownOutside,c=>{const l=c.detail.originalEvent,C=l.button===0&&l.ctrlKey===!0,P=l.button===2||C;a.current=P},{checkForDefaultPrevented:!1}),onFocusOutside:w(t.onFocusOutside,c=>c.preventDefault(),{checkForDefaultPrevented:!1})})})},"PopoverContentModal")),je=p.forwardRef(m(function(t,n){const r=f(T,t.__scopePopover),i=p.useRef(!1),s=p.useRef(!1);return e.jsx(H,{...t,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{t.onCloseAutoFocus?.(a),a.defaultPrevented||(i.current||r.triggerRef.current?.focus(),a.preventDefault()),i.current=!1,s.current=!1},onInteractOutside:a=>{t.onInteractOutside?.(a),a.defaultPrevented||(i.current=!0,a.detail.originalEvent.type==="pointerdown"&&(s.current=!0));const c=a.target;r.triggerRef.current?.contains(c)&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&s.current&&a.preventDefault()}})},"PopoverContentNonModal")),H=p.forwardRef(m(function(t,n){const{__scopePopover:r,trapFocus:i,onOpenAutoFocus:s,onCloseAutoFocus:a,disableOutsidePointerEvents:c,onEscapeKeyDown:l,onPointerDownOutside:C,onFocusOutside:P,onInteractOutside:F,...g}=t,y=f(T,r),J=k(r);return ne(),e.jsx(se,{asChild:!0,loop:!0,trapped:i,onMountAutoFocus:s,onUnmountAutoFocus:a,children:e.jsx(oe,{asChild:!0,disableOutsidePointerEvents:c,onInteractOutside:F,onEscapeKeyDown:l,onPointerDownOutside:C,onFocusOutside:P,onDismiss:()=>y.onOpenChange(!1),deferPointerDownOutside:!0,children:e.jsx(ie,{"data-state":E(y.open),role:"dialog",id:y.contentId,...J,...g,ref:n,style:{...g.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})},"PopoverContentImpl")),_e="PopoverClose",Oe=p.forwardRef(m(function(t,n){const{__scopePopover:r,...i}=t,s=f(_e,r);return e.jsx(W.button,{type:"button",...i,ref:n,onClick:w(t.onClick,()=>s.onOpenChange(!1))})},"PopoverClose"));function E(o){return o?"open":"closed"}m(E,"getState");var we=ue,G=he,U=Pe,Te=Ce,K=ye,Z=Oe;const u=o=>e.jsx(we,{...o});u.displayName="Popover";const S=p.forwardRef(({children:o,...t},n)=>{const r=typeof o=="string"||typeof o=="number";return e.jsx(G,{ref:n,asChild:!r,...t,children:o})});S.displayName=G.displayName;const h=p.forwardRef(({children:o,...t},n)=>{const r=typeof o=="string"||typeof o=="number";return e.jsx(U,{ref:n,asChild:!r,...t,children:o})});h.displayName=U.displayName;const d=p.forwardRef(({className:o,align:t="center",sideOffset:n=8,container:r,...i},s)=>e.jsx(Te,{container:r,children:e.jsx(K,{ref:s,align:t,sideOffset:n,className:ce("st-popover__content",o),...i})}));d.displayName=K.displayName;const R=p.forwardRef(({children:o,...t},n)=>{const r=typeof o=="string"||typeof o=="number";return e.jsx(Z,{ref:n,asChild:!r,...t,children:o})});R.displayName=Z.displayName;try{u.displayName="Popover",u.__docgenInfo={description:"Click-triggered popover root. Unlike `Tooltip`, Radix Popover has no\n`Provider`, so the root wraps `PopoverPrimitive.Root` directly.",displayName:"Popover",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx",methods:[],props:{open:{defaultValue:null,declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"}],description:"Controlled open state.",name:"open",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"},required:!1,tags:{},type:{name:"boolean"}},defaultOpen:{defaultValue:null,declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"}],description:"Initial open state (uncontrolled).",name:"defaultOpen",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"},required:!1,tags:{},type:{name:"boolean"}},onOpenChange:{defaultValue:null,declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"}],description:"Fired when the open state changes.",name:"onOpenChange",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"},required:!1,tags:{},type:{name:"((open: boolean) => void)"}},modal:{defaultValue:{value:"false"},declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"}],description:"Whether the popover traps focus and locks scroll.\n\nDefaults to `false` — Popover is non-modal: the rest of the page stays\ninteractive, there is no scroll lock, and Tab can leave the panel. Set\n`modal` when a focus trap + scroll lock is required.",name:"modal",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"},required:!1,tags:{default:"false"},type:{name:"boolean"}}},tags:{}}}catch{}try{S.displayName="PopoverAnchor",S.__docgenInfo={description:"Optional positioning anchor. Render it around the element the content should\nbe positioned against when that element is not the `PopoverTrigger`.\n\nLike the triggers, `asChild` is not part of the public API — an element\nchild is merged onto directly (internal `asChild`), while a text child gets\nRadix's own `<div>` wrapper.",displayName:"PopoverAnchor",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx",methods:[],props:{},tags:{}}}catch{}try{R.displayName="PopoverClose",R.__docgenInfo={description:"Closes the popover. Like the triggers, `asChild` is not part of the public\nAPI — wrap a `<Button>` (element child) and the close behaviour merges onto\nit, while a string child lets Radix render its own `<button>`.",displayName:"PopoverClose",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx",methods:[],props:{},tags:{}}}catch{}try{d.displayName="PopoverContent",d.__docgenInfo={description:"",displayName:"PopoverContent",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx",methods:[],props:{side:{defaultValue:{value:"'bottom'"},declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"}],description:"The preferred side of the trigger to render the popover against.",name:"side",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"},required:!1,tags:{default:"'bottom'"},type:{name:"enum",raw:'"left" | "right" | "top" | "bottom"',value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},align:{defaultValue:{value:"center"},declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"}],description:"The alignment against the trigger.",name:"align",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"},required:!1,tags:{default:"'center'"},type:{name:"enum",raw:'"end" | "start" | "center"',value:[{value:'"end"'},{value:'"start"'},{value:'"center"'}]}},sideOffset:{defaultValue:{value:"8"},declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"}],description:"Distance from the trigger, in pixels.",name:"sideOffset",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"},required:!1,tags:{default:"8"},type:{name:"number"}},onOpenAutoFocus:{defaultValue:null,declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"}],description:"Fired when focus moves into the panel on open. Call\n`event.preventDefault()` to keep focus where it was — e.g. when several\nnon-modal popovers are pinned open at once.",name:"onOpenAutoFocus",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"},required:!1,tags:{},type:{name:"((event: Event) => void)"}},container:{defaultValue:null,declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"}],description:`Custom container element for the portal. Useful for rendering inside a
Dialog or Drawer.`,name:"container",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"},required:!1,tags:{},type:{name:"Element | DocumentFragment | null"}}},tags:{}}}catch{}try{h.displayName="PopoverTrigger",h.__docgenInfo={description:"",displayName:"PopoverTrigger",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx",methods:[],props:{},tags:{}}}catch{}const so={title:"Components/lv1/Popover",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{side:{description:"The preferred side of the trigger to render the popover against.",control:"select",options:["top","right","bottom","left"],table:{type:{summary:'"top" | "right" | "bottom" | "left"'},defaultValue:{summary:"bottom"}}},align:{description:"The alignment against the trigger.",control:"select",options:["start","center","end"],table:{type:{summary:'"start" | "center" | "end"'},defaultValue:{summary:"center"}}}}},A={name:"Playground",args:{side:"bottom",align:"center"},render:o=>e.jsxs(u,{children:[e.jsx(h,{children:e.jsx(v,{variant:"secondary",children:"Open popover"})}),e.jsx(d,{...o,children:e.jsx(x,{children:"Place any content inside the panel."})})]})},D={layout:"padded",docs:{disable:!0},a11y:{config:{rules:[{id:"aria-hidden-focus",enabled:!1}]}}},b={name:"Settings Panel (VRT)",parameters:D,render:()=>e.jsxs(u,{defaultOpen:!0,children:[e.jsx(h,{children:e.jsx(v,{variant:"secondary",icon:le,children:"Settings"})}),e.jsx(d,{className:"w-72",children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(x,{variant:"heading",size:"sm",children:"Dimensions"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("label",{className:"flex items-center justify-between gap-4 text-sm",htmlFor:"pop-w",children:["Width",e.jsx(V,{id:"pop-w",defaultValue:"100%",className:"w-32"})]}),e.jsxs("label",{className:"flex items-center justify-between gap-4 text-sm",htmlFor:"pop-h",children:["Height",e.jsx(V,{id:"pop-h",defaultValue:"auto",className:"w-32"})]})]}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(R,{children:e.jsx(v,{variant:"tertiary",size:"sm",children:"Cancel"})}),e.jsx(R,{children:e.jsx(v,{size:"sm",children:"Save"})})]})]})})]})},N={name:"Info (VRT)",parameters:D,render:()=>e.jsxs(u,{defaultOpen:!0,children:[e.jsx(h,{children:e.jsx(v,{variant:"tertiary",children:"About"})}),e.jsx(d,{className:"w-64",children:e.jsx(x,{children:"Popover renders click-triggered content over the page. Press Escape or click outside to dismiss."})})]})},j={name:"Placements (VRT)",parameters:D,render:()=>e.jsx("div",{className:"flex flex-col items-center gap-32 py-16",children:["left","top","bottom","right"].map(o=>e.jsxs(u,{defaultOpen:!0,children:[e.jsx(h,{children:e.jsxs(v,{variant:"secondary",children:["side: ",o]})}),e.jsx(d,{side:o,className:"w-40",onOpenAutoFocus:t=>t.preventDefault(),children:e.jsxs(x,{children:["Opens on ",o,"."]})})]},o))})},_={name:"With Anchor",parameters:{docs:{disable:!0}},render:()=>{const[o,t]=p.useState(!0);return e.jsxs("div",{className:"flex flex-col items-center gap-6 py-8",children:[e.jsxs(u,{open:o,onOpenChange:t,children:[e.jsx(S,{children:e.jsx("div",{className:"rounded border border-border-strong px-6 py-3 text-sm text-foreground-muted",children:"Positioning anchor"})}),e.jsx(d,{side:"bottom",className:"w-56",children:e.jsx(x,{children:"Positioned against the anchor box, not the toggle button."})})]}),e.jsx(v,{variant:"secondary",onClick:()=>t(n=>!n),children:"Toggle (separate button)"})]})}},O={name:"Controlled",parameters:{docs:{disable:!0}},render:()=>{const[o,t]=p.useState(!1);return e.jsxs(u,{open:o,onOpenChange:t,children:[e.jsx(h,{children:e.jsxs(v,{variant:"secondary",children:[o?"Close":"Open"," popover"]})}),e.jsx(d,{children:e.jsx(x,{children:"Controlled content."})})]})}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:'A settings panel with a heading, form controls, and a close action — the\ncanonical "click to reveal editable content" use case. Pinned `defaultOpen`\nso VRT can capture the portaled content in one frame.',...b.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:"Plain informational panel — minimal content, default placement.",...N.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:"All four `side` placements, pinned open. Triggers are stacked in a column\nwith generous spacing so each portaled panel opens clear of its neighbours\n(`left` / `right` extend horizontally; `top` / `bottom` diverge vertically).",...j.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:"`PopoverAnchor` decouples the positioning reference from the open trigger:\nthe panel is positioned against the bordered anchor box, while a **separate**\nbutton toggles the controlled `open` state. Note this pattern uses\ncontrolled `open` rather than `PopoverTrigger` — rendering both an explicit\n`PopoverAnchor` and a `PopoverTrigger` gives Radix two competing anchors and\nthe content loses its positioning reference. Interactive (not in the VRT\nroster); the anchor wiring is pinned by the unit test.",..._.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:"Controlled open state via `open` / `onOpenChange`.",...O.parameters?.docs?.description}}};const ao=["Playground","SettingsPanel","Info","Placements","WithAnchor","Controlled"];export{O as Controlled,N as Info,j as Placements,A as Playground,b as SettingsPanel,_ as WithAnchor,ao as __namedExportsOrder,so as default};
