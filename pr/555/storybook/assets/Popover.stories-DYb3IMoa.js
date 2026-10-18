import{r as a,j as e}from"./iframe-BCPS_Gwu.js";import{B as P}from"./Button-7AwFwQwm.js";import{I as L}from"./Input-CVOuKA2b.js";import{T as y}from"./Text-NAofvd6f.js";import{u as se,c as T}from"./index-BsRxFkKe.js";import{u as M,c as ae}from"./index-Cg9iWWoh.js";import{c as ie}from"./index-BEOibNH4.js";import{c as H,P as pe,a as $,b as ce,f as le,u as de,F as ue,g as me,D as ve,d as he}from"./index-BkyOsAHa.js";import{u as fe}from"./index-Cs_eKotw.js";import{u as B}from"./index-BqOry4Sd.js";import{P as G}from"./index-CkEWcBwG.js";import{P as U}from"./index-BozPz1Oe.js";import{h as Pe,R as ge}from"./Combination-BHjQf-xF.js";import{a as xe}from"./utils-HnQPFlDo.js";/* empty css                */import{S as Ce}from"./settings-hR3i9gN7.js";import"./preload-helper-BjiFMugz.js";import"./index-BekUCMdb.js";/* empty css               */import"./Spinner-CaRXErqN.js";/* empty css                */import"./field-BWnTc-rv.js";/* empty css              *//* empty css             */import"./index-C3NY1aDt.js";import"./index-I8WU88zS.js";import"./index-Du19fj2_.js";import"./index-BvgP_ZQ0.js";import"./index-BcMfz-ch.js";import"./index-7qwy3zfh.js";import"./createLucideIcon-CW1bjhrF.js";var ye=Object.defineProperty,m=(t,o)=>ye(t,"name",{value:o,configurable:!0}),q="Popover",[K,lo]=ie(q,[H]),F=H(),[be,x]=K(q),Ne=m(t=>{const{__scopePopover:o,children:n,open:r,defaultOpen:p,onOpenChange:s,modal:i=!1}=t,c=F(o),d=a.useRef(null),[l,f]=a.useState(!1),[b,C]=a.useState(0),[D,E]=a.useState(0),[S,u]=se({prop:r,defaultProp:p??!1,onChange:s,caller:q});return e.jsx(pe,{...c,children:e.jsx(be,{scope:o,contentId:B(),titleId:B(),descriptionId:B(),titlePresent:b>0,descriptionPresent:D>0,setTitleCount:C,setDescriptionCount:E,triggerRef:d,open:S,onOpenChange:u,onOpenToggle:a.useCallback(()=>u(V=>!V),[u]),hasCustomAnchor:l,onCustomAnchorAdd:a.useCallback(()=>f(!0),[]),onCustomAnchorRemove:a.useCallback(()=>f(!1),[]),modal:i,children:n})})},"Popover"),je="PopoverAnchor",Z=a.forwardRef(m(function(o,n){const{__scopePopover:r,...p}=o,s=x(je,r),i=F(r),{onCustomAnchorAdd:c,onCustomAnchorRemove:d}=s;return a.useEffect(()=>(c(),()=>d()),[c,d]),e.jsx($,{...i,...p,ref:n})},"PopoverAnchor")),_e="PopoverTrigger",J=a.forwardRef(m(function(o,n){const{__scopePopover:r,...p}=o,s=x(_e,r),i=F(r),c=M(n,s.triggerRef),d=e.jsx(U.button,{type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.open?s.contentId:void 0,"data-state":z(s.open),...p,ref:c,onClick:T(o.onClick,s.onOpenToggle)});return s.hasCustomAnchor?d:e.jsx($,{asChild:!0,...i,children:d})},"PopoverTrigger")),Q="PopoverPortal",[Oe,we]=K(Q,{forceMount:void 0}),Te=m(t=>{const{__scopePopover:o,forceMount:n,children:r,container:p}=t,s=x(Q,o);return e.jsx(Oe,{scope:o,forceMount:n,children:e.jsx(G,{present:n||s.open,children:e.jsx(ce,{asChild:!0,container:p,children:r})})})},"PopoverPortal"),R="PopoverContent",X=a.forwardRef(m(function(o,n){const r=we(R,o.__scopePopover),{forceMount:p=r.forceMount,...s}=o,i=x(R,o.__scopePopover);return e.jsx(G,{present:p||i.open,children:i.modal?e.jsx(Ae,{...s,ref:n}):e.jsx(Se,{...s,ref:n})})},"PopoverContent")),Re=ae("PopoverContent.RemoveScroll"),Ae=a.forwardRef(m(function(o,n){const r=x(R,o.__scopePopover),p=a.useRef(null),s=M(n,p),i=a.useRef(!1),{nodes:c,registry:d}=le();return a.useEffect(()=>{const l=p.current;if(l)return Pe(l)},[]),e.jsx(ge,{as:Re,allowPinchZoom:!0,shards:a.useMemo(()=>[p,...c.map(l=>({current:l}))],[p,c]),children:e.jsx(Y,{...o,ref:s,branchNodes:c,branchRegistry:d,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:T(o.onCloseAutoFocus,l=>{l.preventDefault(),i.current||r.triggerRef.current?.focus()}),onPointerDownOutside:T(o.onPointerDownOutside,l=>{const f=l.detail.originalEvent,b=f.button===0&&f.ctrlKey===!0,C=f.button===2||b;i.current=C},{checkForDefaultPrevented:!1}),onFocusOutside:T(o.onFocusOutside,l=>l.preventDefault(),{checkForDefaultPrevented:!1})})})},"PopoverContentModal")),Se=a.forwardRef(m(function(o,n){const r=x(R,o.__scopePopover),p=a.useRef(!1),s=a.useRef(!1);return e.jsx(Y,{...o,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:i=>{o.onCloseAutoFocus?.(i),i.defaultPrevented||(p.current||r.triggerRef.current?.focus(),i.preventDefault()),p.current=!1,s.current=!1},onInteractOutside:i=>{o.onInteractOutside?.(i),i.defaultPrevented||(p.current=!0,i.detail.originalEvent.type==="pointerdown"&&(s.current=!0));const c=i.target;r.triggerRef.current?.contains(c)&&i.preventDefault(),i.detail.originalEvent.type==="focusin"&&s.current&&i.preventDefault()}})},"PopoverContentNonModal")),Y=a.forwardRef(m(function(o,n){const{__scopePopover:r,trapFocus:p,onOpenAutoFocus:s,onCloseAutoFocus:i,disableOutsidePointerEvents:c,onEscapeKeyDown:d,onPointerDownOutside:l,onFocusOutside:f,onInteractOutside:b,"aria-describedby":C,branchNodes:D,branchRegistry:E,...S}=o,u=x(R,r),V=F(r),[te,re]=a.useState(null),ne=M(n,re);return de(te),fe(),e.jsx(ue,{registry:E,children:e.jsx(me,{asChild:!0,loop:!0,trapped:p,branches:D,onMountAutoFocus:s,onUnmountAutoFocus:i,children:e.jsx(ve,{asChild:!0,disableOutsidePointerEvents:c,onInteractOutside:b,onEscapeKeyDown:d,onPointerDownOutside:l,onFocusOutside:f,onDismiss:()=>u.onOpenChange(!1),deferPointerDownOutside:!0,children:e.jsx(he,{"data-state":z(u.open),role:"dialog",id:u.contentId,"aria-labelledby":u.titlePresent?u.titleId:void 0,"aria-describedby":u.descriptionPresent?oe(C,u.descriptionId):C,...V,...S,ref:ne,style:{...S.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})})},"PopoverContentImpl")),Ie="PopoverClose",ee=a.forwardRef(m(function(o,n){const{__scopePopover:r,...p}=o,s=x(Ie,r);return e.jsx(U.button,{type:"button",...p,ref:n,onClick:T(o.onClick,()=>s.onOpenChange(!1))})},"PopoverClose"));function z(t){return t?"open":"closed"}m(z,"getState");function oe(...t){const o=new Set;for(const n of t)if(typeof n=="string")for(const r of String(n).trim().split(/\s+/))r&&o.add(r);return o.size>0?Array.from(o).join(" "):void 0}m(oe,"concatAriaDescribedby");const h=t=>e.jsx(Ne,{...t});h.displayName="Popover";const k=a.forwardRef(({children:t,...o},n)=>{const r=typeof t=="string"||typeof t=="number";return e.jsx(Z,{ref:n,asChild:!r,...o,children:t})});k.displayName=Z.displayName;const g=a.forwardRef(({children:t,...o},n)=>{const r=typeof t=="string"||typeof t=="number";return e.jsx(J,{ref:n,asChild:!r,...o,children:t})});g.displayName=J.displayName;const v=a.forwardRef(({className:t,align:o="center",sideOffset:n=8,container:r,...p},s)=>e.jsx(Te,{container:r,children:e.jsx(X,{ref:s,align:o,sideOffset:n,className:xe("st-popover__content",t),...p})}));v.displayName=X.displayName;const A=a.forwardRef(({children:t,...o},n)=>{const r=typeof t=="string"||typeof t=="number";return e.jsx(ee,{ref:n,asChild:!r,...o,children:t})});A.displayName=ee.displayName;try{h.displayName="Popover",h.__docgenInfo={description:"Click-triggered popover root. Unlike `Tooltip`, Radix Popover has no\n`Provider`, so the root wraps `PopoverPrimitive.Root` directly.",displayName:"Popover",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx",methods:[],props:{open:{defaultValue:null,declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"}],description:"Controlled open state.",name:"open",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"},required:!1,tags:{},type:{name:"boolean"}},defaultOpen:{defaultValue:null,declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"}],description:"Initial open state (uncontrolled).",name:"defaultOpen",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"},required:!1,tags:{},type:{name:"boolean"}},onOpenChange:{defaultValue:null,declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"}],description:"Fired when the open state changes.",name:"onOpenChange",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"},required:!1,tags:{},type:{name:"((open: boolean) => void)"}},modal:{defaultValue:{value:"false"},declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"}],description:"Whether the popover traps focus and locks scroll.\n\nDefaults to `false` — Popover is non-modal: the rest of the page stays\ninteractive, there is no scroll lock, and Tab can leave the panel. Set\n`modal` when a focus trap + scroll lock is required.",name:"modal",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverProps"},required:!1,tags:{default:"false"},type:{name:"boolean"}}},tags:{}}}catch{}try{k.displayName="PopoverAnchor",k.__docgenInfo={description:"Optional positioning anchor. Render it around the element the content should\nbe positioned against when that element is not the `PopoverTrigger`.\n\nLike the triggers, `asChild` is not part of the public API — an element\nchild is merged onto directly (internal `asChild`), while a text child gets\nRadix's own `<div>` wrapper.",displayName:"PopoverAnchor",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx",methods:[],props:{},tags:{}}}catch{}try{A.displayName="PopoverClose",A.__docgenInfo={description:"Closes the popover. Like the triggers, `asChild` is not part of the public\nAPI — wrap a `<Button>` (element child) and the close behaviour merges onto\nit, while a string child lets Radix render its own `<button>`.",displayName:"PopoverClose",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx",methods:[],props:{},tags:{}}}catch{}try{v.displayName="PopoverContent",v.__docgenInfo={description:"",displayName:"PopoverContent",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx",methods:[],props:{side:{defaultValue:{value:"'bottom'"},declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"}],description:"The preferred side of the trigger to render the popover against.",name:"side",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"},required:!1,tags:{default:"'bottom'"},type:{name:"enum",raw:'"top" | "bottom" | "left" | "right"',value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},align:{defaultValue:{value:"center"},declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"}],description:"The alignment against the trigger.",name:"align",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"},required:!1,tags:{default:"'center'"},type:{name:"enum",raw:'"start" | "center" | "end"',value:[{value:'"start"'},{value:'"center"'},{value:'"end"'}]}},sideOffset:{defaultValue:{value:"8"},declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"}],description:"Distance from the trigger, in pixels.",name:"sideOffset",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"},required:!1,tags:{default:"8"},type:{name:"number"}},onOpenAutoFocus:{defaultValue:null,declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"}],description:"Fired when focus moves into the panel on open. Call\n`event.preventDefault()` to keep focus where it was — e.g. when several\nnon-modal popovers are pinned open at once.",name:"onOpenAutoFocus",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"},required:!1,tags:{},type:{name:"((event: Event) => void)"}},container:{defaultValue:null,declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"}],description:`Custom container element for the portal. Useful for rendering inside a
Dialog or Drawer.`,name:"container",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"},required:!1,tags:{},type:{name:"Element | DocumentFragment | null"}}},tags:{}}}catch{}try{g.displayName="PopoverTrigger",g.__docgenInfo={description:"",displayName:"PopoverTrigger",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx",methods:[],props:{},tags:{}}}catch{}const uo={title:"Components/lv1/Popover",component:v,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{side:{description:"The preferred side of the trigger to render the popover against.",control:"select",options:["top","right","bottom","left"],table:{type:{summary:'"top" | "right" | "bottom" | "left"'},defaultValue:{summary:"bottom"}}},align:{description:"The alignment against the trigger.",control:"select",options:["start","center","end"],table:{type:{summary:'"start" | "center" | "end"'},defaultValue:{summary:"center"}}}}},I={name:"Playground",args:{side:"bottom",align:"center"},render:t=>e.jsxs(h,{children:[e.jsx(g,{children:e.jsx(P,{variant:"secondary",children:"Open popover"})}),e.jsx(v,{...t,children:e.jsx(y,{children:"Place any content inside the panel."})})]})},W={layout:"padded",docs:{disable:!0},a11y:{config:{rules:[{id:"aria-hidden-focus",enabled:!1}]}}},N={name:"Settings Panel (VRT)",parameters:W,render:()=>e.jsxs(h,{defaultOpen:!0,children:[e.jsx(g,{children:e.jsx(P,{variant:"secondary",icon:Ce,children:"Settings"})}),e.jsx(v,{className:"w-72",children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(y,{variant:"heading",size:"sm",children:"Dimensions"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("label",{className:"flex items-center justify-between gap-4 text-sm",htmlFor:"pop-w",children:["Width",e.jsx(L,{id:"pop-w",defaultValue:"100%",className:"w-32"})]}),e.jsxs("label",{className:"flex items-center justify-between gap-4 text-sm",htmlFor:"pop-h",children:["Height",e.jsx(L,{id:"pop-h",defaultValue:"auto",className:"w-32"})]})]}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(A,{children:e.jsx(P,{variant:"tertiary",size:"sm",children:"Cancel"})}),e.jsx(A,{children:e.jsx(P,{size:"sm",children:"Save"})})]})]})})]})},j={name:"Info (VRT)",parameters:W,render:()=>e.jsxs(h,{defaultOpen:!0,children:[e.jsx(g,{children:e.jsx(P,{variant:"tertiary",children:"About"})}),e.jsx(v,{className:"w-64",children:e.jsx(y,{children:"Popover renders click-triggered content over the page. Press Escape or click outside to dismiss."})})]})},_={name:"Placements (VRT)",parameters:W,render:()=>e.jsx("div",{className:"flex flex-col items-center gap-32 py-16",children:["left","top","bottom","right"].map(t=>e.jsxs(h,{defaultOpen:!0,children:[e.jsx(g,{children:e.jsxs(P,{variant:"secondary",children:["side: ",t]})}),e.jsx(v,{side:t,className:"w-40",onOpenAutoFocus:o=>o.preventDefault(),children:e.jsxs(y,{children:["Opens on ",t,"."]})})]},t))})},O={name:"With Anchor",parameters:{docs:{disable:!0}},render:()=>{const[t,o]=a.useState(!0);return e.jsxs("div",{className:"flex flex-col items-center gap-6 py-8",children:[e.jsxs(h,{open:t,onOpenChange:o,children:[e.jsx(k,{children:e.jsx("div",{className:"rounded border border-border-strong px-6 py-3 text-sm text-foreground-muted",children:"Positioning anchor"})}),e.jsx(v,{side:"bottom",className:"w-56",children:e.jsx(y,{children:"Positioned against the anchor box, not the toggle button."})})]}),e.jsx(P,{variant:"secondary",onClick:()=>o(n=>!n),children:"Toggle (separate button)"})]})}},w={name:"Controlled",parameters:{docs:{disable:!0}},render:()=>{const[t,o]=a.useState(!1);return e.jsxs(h,{open:t,onOpenChange:o,children:[e.jsx(g,{children:e.jsxs(P,{variant:"secondary",children:[t?"Close":"Open"," popover"]})}),e.jsx(v,{children:e.jsx(y,{children:"Controlled content."})})]})}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:'A settings panel with a heading, form controls, and a close action — the\ncanonical "click to reveal editable content" use case. Pinned `defaultOpen`\nso VRT can capture the portaled content in one frame.',...N.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:"Plain informational panel — minimal content, default placement.",...j.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:"All four `side` placements, pinned open. Triggers are stacked in a column\nwith generous spacing so each portaled panel opens clear of its neighbours\n(`left` / `right` extend horizontally; `top` / `bottom` diverge vertically).",..._.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:"`PopoverAnchor` decouples the positioning reference from the open trigger:\nthe panel is positioned against the bordered anchor box, while a **separate**\nbutton toggles the controlled `open` state. Note this pattern uses\ncontrolled `open` rather than `PopoverTrigger` — rendering both an explicit\n`PopoverAnchor` and a `PopoverTrigger` gives Radix two competing anchors and\nthe content loses its positioning reference. Interactive (not in the VRT\nroster); the anchor wiring is pinned by the unit test.",...O.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:"Controlled open state via `open` / `onOpenChange`.",...w.parameters?.docs?.description}}};const mo=["Playground","SettingsPanel","Info","Placements","WithAnchor","Controlled"];export{w as Controlled,j as Info,_ as Placements,I as Playground,N as SettingsPanel,O as WithAnchor,mo as __namedExportsOrder,uo as default};
