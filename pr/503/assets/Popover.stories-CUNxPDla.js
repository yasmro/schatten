import{r as a,j as e}from"./iframe-CiFZLCq2.js";import{B as h}from"./Button-BXB0TBs8.js";import{I as z}from"./Input-DUzF51kv.js";import{T as x}from"./Text-DJP8cJ8D.js";import{u as te,c as O}from"./index-BfWbjkmT.js";import{u as W,c as re}from"./index-DtCP0OF1.js";import{c as ne}from"./index-C7jgZnxO.js";import{c as L,P as se,a as H,b as ae,D as ie,d as pe}from"./index-BlYN84T3.js";import{u as ce,F as le}from"./index-Bu1_NzcO.js";import{u as V}from"./index-DRKMtJ9z.js";import{P as $}from"./index-CGb6UcSx.js";import{P as G}from"./index-4eJN-vOI.js";import{h as de,R as ue}from"./Combination-CeLMtunx.js";import{a as me}from"./utils-HnQPFlDo.js";/* empty css                */import{S as ve}from"./settings-CWU5yH5K.js";import"./preload-helper-Bp5kW4KX.js";import"./index-BekUCMdb.js";/* empty css               */import"./Spinner-CboD85pk.js";/* empty css                */import"./field-DA8DxYO0.js";/* empty css              *//* empty css             */import"./index-BDHi-Ikf.js";import"./index-D8wovsk2.js";import"./index-Dkpqcvmh.js";import"./index-D8lzI4Ve.js";import"./createLucideIcon-JKg5cw6L.js";var he=Object.defineProperty,d=(t,o)=>he(t,"name",{value:o,configurable:!0}),B="Popover",[U,to]=ne(B,[L]),k=L(),[fe,P]=U(B),Pe=d(t=>{const{__scopePopover:o,children:n,open:r,defaultOpen:p,onOpenChange:s,modal:i=!1}=t,c=k(o),l=a.useRef(null),[C,g]=a.useState(!1),[F,R]=a.useState(0),[A,m]=a.useState(0),[D,E]=te({prop:r,defaultProp:p??!1,onChange:s,caller:B});return e.jsx(se,{...c,children:e.jsx(fe,{scope:o,contentId:V(),titleId:V(),descriptionId:V(),titlePresent:F>0,descriptionPresent:A>0,setTitleCount:R,setDescriptionCount:m,triggerRef:l,open:D,onOpenChange:E,onOpenToggle:a.useCallback(()=>E(oe=>!oe),[E]),hasCustomAnchor:C,onCustomAnchorAdd:a.useCallback(()=>g(!0),[]),onCustomAnchorRemove:a.useCallback(()=>g(!1),[]),modal:i,children:n})})},"Popover"),ge="PopoverAnchor",K=a.forwardRef(d(function(o,n){const{__scopePopover:r,...p}=o,s=P(ge,r),i=k(r),{onCustomAnchorAdd:c,onCustomAnchorRemove:l}=s;return a.useEffect(()=>(c(),()=>l()),[c,l]),e.jsx(H,{...i,...p,ref:n})},"PopoverAnchor")),xe="PopoverTrigger",Z=a.forwardRef(d(function(o,n){const{__scopePopover:r,...p}=o,s=P(xe,r),i=k(r),c=W(n,s.triggerRef),l=e.jsx(G.button,{type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.open?s.contentId:void 0,"data-state":M(s.open),...p,ref:c,onClick:O(o.onClick,s.onOpenToggle)});return s.hasCustomAnchor?l:e.jsx(H,{asChild:!0,...i,children:l})},"PopoverTrigger")),J="PopoverPortal",[Ce,ye]=U(J,{forceMount:void 0}),be=d(t=>{const{__scopePopover:o,forceMount:n,children:r,container:p}=t,s=P(J,o);return e.jsx(Ce,{scope:o,forceMount:n,children:e.jsx($,{present:n||s.open,children:e.jsx(ae,{asChild:!0,container:p,children:r})})})},"PopoverPortal"),w="PopoverContent",Q=a.forwardRef(d(function(o,n){const r=ye(w,o.__scopePopover),{forceMount:p=r.forceMount,...s}=o,i=P(w,o.__scopePopover);return e.jsx($,{present:p||i.open,children:i.modal?e.jsx(je,{...s,ref:n}):e.jsx(_e,{...s,ref:n})})},"PopoverContent")),Ne=re("PopoverContent.RemoveScroll"),je=a.forwardRef(d(function(o,n){const r=P(w,o.__scopePopover),p=a.useRef(null),s=W(n,p),i=a.useRef(!1);return a.useEffect(()=>{const c=p.current;if(c)return de(c)},[]),e.jsx(ue,{as:Ne,allowPinchZoom:!0,children:e.jsx(X,{...o,ref:s,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:O(o.onCloseAutoFocus,c=>{c.preventDefault(),i.current||r.triggerRef.current?.focus()}),onPointerDownOutside:O(o.onPointerDownOutside,c=>{const l=c.detail.originalEvent,C=l.button===0&&l.ctrlKey===!0,g=l.button===2||C;i.current=g},{checkForDefaultPrevented:!1}),onFocusOutside:O(o.onFocusOutside,c=>c.preventDefault(),{checkForDefaultPrevented:!1})})})},"PopoverContentModal")),_e=a.forwardRef(d(function(o,n){const r=P(w,o.__scopePopover),p=a.useRef(!1),s=a.useRef(!1);return e.jsx(X,{...o,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:i=>{o.onCloseAutoFocus?.(i),i.defaultPrevented||(p.current||r.triggerRef.current?.focus(),i.preventDefault()),p.current=!1,s.current=!1},onInteractOutside:i=>{o.onInteractOutside?.(i),i.defaultPrevented||(p.current=!0,i.detail.originalEvent.type==="pointerdown"&&(s.current=!0));const c=i.target;r.triggerRef.current?.contains(c)&&i.preventDefault(),i.detail.originalEvent.type==="focusin"&&s.current&&i.preventDefault()}})},"PopoverContentNonModal")),X=a.forwardRef(d(function(o,n){const{__scopePopover:r,trapFocus:p,onOpenAutoFocus:s,onCloseAutoFocus:i,disableOutsidePointerEvents:c,onEscapeKeyDown:l,onPointerDownOutside:C,onFocusOutside:g,onInteractOutside:F,"aria-describedby":R,...A}=o,m=P(w,r),D=k(r);return ce(),e.jsx(le,{asChild:!0,loop:!0,trapped:p,onMountAutoFocus:s,onUnmountAutoFocus:i,children:e.jsx(ie,{asChild:!0,disableOutsidePointerEvents:c,onInteractOutside:F,onEscapeKeyDown:l,onPointerDownOutside:C,onFocusOutside:g,onDismiss:()=>m.onOpenChange(!1),deferPointerDownOutside:!0,children:e.jsx(pe,{"data-state":M(m.open),role:"dialog",id:m.contentId,"aria-labelledby":m.titlePresent?m.titleId:void 0,"aria-describedby":m.descriptionPresent?ee(R,m.descriptionId):R,...D,...A,ref:n,style:{...A.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})},"PopoverContentImpl")),Oe="PopoverClose",Y=a.forwardRef(d(function(o,n){const{__scopePopover:r,...p}=o,s=P(Oe,r);return e.jsx(G.button,{type:"button",...p,ref:n,onClick:O(o.onClick,()=>s.onOpenChange(!1))})},"PopoverClose"));function M(t){return t?"open":"closed"}d(M,"getState");function ee(...t){const o=new Set;for(const n of t)if(typeof n=="string")for(const r of String(n).trim().split(/\s+/))r&&o.add(r);return o.size>0?Array.from(o).join(" "):void 0}d(ee,"concatAriaDescribedby");const v=t=>e.jsx(Pe,{...t});v.displayName="Popover";const I=a.forwardRef(({children:t,...o},n)=>{const r=typeof t=="string"||typeof t=="number";return e.jsx(K,{ref:n,asChild:!r,...o,children:t})});I.displayName=K.displayName;const f=a.forwardRef(({children:t,...o},n)=>{const r=typeof t=="string"||typeof t=="number";return e.jsx(Z,{ref:n,asChild:!r,...o,children:t})});f.displayName=Z.displayName;const u=a.forwardRef(({className:t,align:o="center",sideOffset:n=8,container:r,...p},s)=>e.jsx(be,{container:r,children:e.jsx(Q,{ref:s,align:o,sideOffset:n,className:me("st-popover__content",t),...p})}));u.displayName=Q.displayName;const T=a.forwardRef(({children:t,...o},n)=>{const r=typeof t=="string"||typeof t=="number";return e.jsx(Y,{ref:n,asChild:!r,...o,children:t})});T.displayName=Y.displayName;try{v.displayName="Popover",v.__docgenInfo={description:"Click-triggered popover root. Unlike `Tooltip`, Radix Popover has no\n`Provider`, so the root wraps `PopoverPrimitive.Root` directly.",displayName:"Popover",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx",methods:[],props:{open:{defaultValue:null,declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"}],description:"Controlled open state.",name:"open",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"},required:!1,tags:{},type:{name:"boolean"}},defaultOpen:{defaultValue:null,declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"}],description:"Initial open state (uncontrolled).",name:"defaultOpen",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"},required:!1,tags:{},type:{name:"boolean"}},onOpenChange:{defaultValue:null,declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"}],description:"Fired when the open state changes.",name:"onOpenChange",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"},required:!1,tags:{},type:{name:"((open: boolean) => void)"}},modal:{defaultValue:{value:"false"},declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"}],description:"Whether the popover traps focus and locks scroll.\n\nDefaults to `false` — Popover is non-modal: the rest of the page stays\ninteractive, there is no scroll lock, and Tab can leave the panel. Set\n`modal` when a focus trap + scroll lock is required.",name:"modal",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"},required:!1,tags:{default:"false"},type:{name:"boolean"}}},tags:{}}}catch{}try{I.displayName="PopoverAnchor",I.__docgenInfo={description:"Optional positioning anchor. Render it around the element the content should\nbe positioned against when that element is not the `PopoverTrigger`.\n\nLike the triggers, `asChild` is not part of the public API — an element\nchild is merged onto directly (internal `asChild`), while a text child gets\nRadix's own `<div>` wrapper.",displayName:"PopoverAnchor",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx",methods:[],props:{},tags:{}}}catch{}try{T.displayName="PopoverClose",T.__docgenInfo={description:"Closes the popover. Like the triggers, `asChild` is not part of the public\nAPI — wrap a `<Button>` (element child) and the close behaviour merges onto\nit, while a string child lets Radix render its own `<button>`.",displayName:"PopoverClose",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx",methods:[],props:{},tags:{}}}catch{}try{u.displayName="PopoverContent",u.__docgenInfo={description:"",displayName:"PopoverContent",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx",methods:[],props:{side:{defaultValue:{value:"'bottom'"},declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"}],description:"The preferred side of the trigger to render the popover against.",name:"side",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"},required:!1,tags:{default:"'bottom'"},type:{name:"enum",raw:'"top" | "bottom" | "left" | "right"',value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},align:{defaultValue:{value:"center"},declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"}],description:"The alignment against the trigger.",name:"align",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"},required:!1,tags:{default:"'center'"},type:{name:"enum",raw:'"start" | "center" | "end"',value:[{value:'"start"'},{value:'"center"'},{value:'"end"'}]}},sideOffset:{defaultValue:{value:"8"},declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"}],description:"Distance from the trigger, in pixels.",name:"sideOffset",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"},required:!1,tags:{default:"8"},type:{name:"number"}},onOpenAutoFocus:{defaultValue:null,declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"}],description:"Fired when focus moves into the panel on open. Call\n`event.preventDefault()` to keep focus where it was — e.g. when several\nnon-modal popovers are pinned open at once.",name:"onOpenAutoFocus",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"},required:!1,tags:{},type:{name:"((event: Event) => void)"}},container:{defaultValue:null,declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"}],description:`Custom container element for the portal. Useful for rendering inside a
Dialog or Drawer.`,name:"container",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"},required:!1,tags:{},type:{name:"Element | DocumentFragment | null"}}},tags:{}}}catch{}try{f.displayName="PopoverTrigger",f.__docgenInfo={description:"",displayName:"PopoverTrigger",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx",methods:[],props:{},tags:{}}}catch{}const ro={title:"Components/lv1/Popover",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{side:{description:"The preferred side of the trigger to render the popover against.",control:"select",options:["top","right","bottom","left"],table:{type:{summary:'"top" | "right" | "bottom" | "left"'},defaultValue:{summary:"bottom"}}},align:{description:"The alignment against the trigger.",control:"select",options:["start","center","end"],table:{type:{summary:'"start" | "center" | "end"'},defaultValue:{summary:"center"}}}}},S={name:"Playground",args:{side:"bottom",align:"center"},render:t=>e.jsxs(v,{children:[e.jsx(f,{children:e.jsx(h,{variant:"secondary",children:"Open popover"})}),e.jsx(u,{...t,children:e.jsx(x,{children:"Place any content inside the panel."})})]})},q={layout:"padded",docs:{disable:!0},a11y:{config:{rules:[{id:"aria-hidden-focus",enabled:!1}]}}},y={name:"Settings Panel (VRT)",parameters:q,render:()=>e.jsxs(v,{defaultOpen:!0,children:[e.jsx(f,{children:e.jsx(h,{variant:"secondary",icon:ve,children:"Settings"})}),e.jsx(u,{className:"w-72",children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(x,{variant:"heading",size:"sm",children:"Dimensions"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("label",{className:"flex items-center justify-between gap-4 text-sm",htmlFor:"pop-w",children:["Width",e.jsx(z,{id:"pop-w",defaultValue:"100%",className:"w-32"})]}),e.jsxs("label",{className:"flex items-center justify-between gap-4 text-sm",htmlFor:"pop-h",children:["Height",e.jsx(z,{id:"pop-h",defaultValue:"auto",className:"w-32"})]})]}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(T,{children:e.jsx(h,{variant:"tertiary",size:"sm",children:"Cancel"})}),e.jsx(T,{children:e.jsx(h,{size:"sm",children:"Save"})})]})]})})]})},b={name:"Info (VRT)",parameters:q,render:()=>e.jsxs(v,{defaultOpen:!0,children:[e.jsx(f,{children:e.jsx(h,{variant:"tertiary",children:"About"})}),e.jsx(u,{className:"w-64",children:e.jsx(x,{children:"Popover renders click-triggered content over the page. Press Escape or click outside to dismiss."})})]})},N={name:"Placements (VRT)",parameters:q,render:()=>e.jsx("div",{className:"flex flex-col items-center gap-32 py-16",children:["left","top","bottom","right"].map(t=>e.jsxs(v,{defaultOpen:!0,children:[e.jsx(f,{children:e.jsxs(h,{variant:"secondary",children:["side: ",t]})}),e.jsx(u,{side:t,className:"w-40",onOpenAutoFocus:o=>o.preventDefault(),children:e.jsxs(x,{children:["Opens on ",t,"."]})})]},t))})},j={name:"With Anchor",parameters:{docs:{disable:!0}},render:()=>{const[t,o]=a.useState(!0);return e.jsxs("div",{className:"flex flex-col items-center gap-6 py-8",children:[e.jsxs(v,{open:t,onOpenChange:o,children:[e.jsx(I,{children:e.jsx("div",{className:"rounded border border-border-strong px-6 py-3 text-sm text-foreground-muted",children:"Positioning anchor"})}),e.jsx(u,{side:"bottom",className:"w-56",children:e.jsx(x,{children:"Positioned against the anchor box, not the toggle button."})})]}),e.jsx(h,{variant:"secondary",onClick:()=>o(n=>!n),children:"Toggle (separate button)"})]})}},_={name:"Controlled",parameters:{docs:{disable:!0}},render:()=>{const[t,o]=a.useState(!1);return e.jsxs(v,{open:t,onOpenChange:o,children:[e.jsx(f,{children:e.jsxs(h,{variant:"secondary",children:[t?"Close":"Open"," popover"]})}),e.jsx(u,{children:e.jsx(x,{children:"Controlled content."})})]})}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:'A settings panel with a heading, form controls, and a close action — the\ncanonical "click to reveal editable content" use case. Pinned `defaultOpen`\nso VRT can capture the portaled content in one frame.',...y.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"Plain informational panel — minimal content, default placement.",...b.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:"All four `side` placements, pinned open. Triggers are stacked in a column\nwith generous spacing so each portaled panel opens clear of its neighbours\n(`left` / `right` extend horizontally; `top` / `bottom` diverge vertically).",...N.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:"`PopoverAnchor` decouples the positioning reference from the open trigger:\nthe panel is positioned against the bordered anchor box, while a **separate**\nbutton toggles the controlled `open` state. Note this pattern uses\ncontrolled `open` rather than `PopoverTrigger` — rendering both an explicit\n`PopoverAnchor` and a `PopoverTrigger` gives Radix two competing anchors and\nthe content loses its positioning reference. Interactive (not in the VRT\nroster); the anchor wiring is pinned by the unit test.",...j.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:"Controlled open state via `open` / `onOpenChange`.",..._.parameters?.docs?.description}}};const no=["Playground","SettingsPanel","Info","Placements","WithAnchor","Controlled"];export{_ as Controlled,b as Info,N as Placements,S as Playground,y as SettingsPanel,j as WithAnchor,no as __namedExportsOrder,ro as default};
