import{r as i,j as e}from"./iframe-CRMu4CTZ.js";import{B as d}from"./Button-DUkwIhVY.js";import{I as D}from"./Input-B7M4kOAo.js";import{T as f}from"./Text-aq_YeunN.js";import{u as te,c as N}from"./index-B6Mn6Bct.js";import{u as V,c as re}from"./index-BtNHNYoo.js";import{c as ne}from"./index-BqlK2yPG.js";import{P as ae,D as se}from"./index-I2vJK7TU.js";import{h as ie,R as pe,u as ce,F as le}from"./Combination-D0X4G5Yo.js";import{u as de}from"./index-CoWkRq6I.js";import{R as ue,a as B,c as M,C as me,A as ve}from"./index-CqnU1r4_.js";import{P as W}from"./index-BgwJ8ZYF.js";import{P as q}from"./index-BNx-RwaO.js";import{a as he}from"./utils-DclmTqRz.js";/* empty css                */import{S as ge}from"./settings-IDq-r0NO.js";import"./preload-helper-CeXmTUo0.js";import"./index-BYWyDHmV.js";/* empty css               */import"./Spinner-1G5RZAWL.js";/* empty css                */import"./field-DDG4uwd0.js";/* empty css              *//* empty css             */import"./index-dr8IyO-9.js";import"./index-Cb74ucTm.js";import"./index-CxmuKVrD.js";import"./index-BlUrzjLV.js";import"./createLucideIcon-DTeZN6bn.js";var S="Popover",[z]=ne(S,[M]),O=M(),[fe,v]=z(S),L=o=>{const{__scopePopover:t,children:r,open:s,defaultOpen:n,onOpenChange:a,modal:p=!1}=o,c=O(t),P=i.useRef(null),[x,T]=i.useState(!1),[w,h]=te({prop:s,defaultProp:n??!1,onChange:a,caller:S});return e.jsx(ue,{...c,children:e.jsx(fe,{scope:t,contentId:de(),triggerRef:P,open:w,onOpenChange:h,onOpenToggle:i.useCallback(()=>h(k=>!k),[h]),hasCustomAnchor:x,onCustomAnchorAdd:i.useCallback(()=>T(!0),[]),onCustomAnchorRemove:i.useCallback(()=>T(!1),[]),modal:p,children:r})})};L.displayName=S;var $="PopoverAnchor",H=i.forwardRef((o,t)=>{const{__scopePopover:r,...s}=o,n=v($,r),a=O(r),{onCustomAnchorAdd:p,onCustomAnchorRemove:c}=n;return i.useEffect(()=>(p(),()=>c()),[p,c]),e.jsx(B,{...a,...s,ref:t})});H.displayName=$;var G="PopoverTrigger",U=i.forwardRef((o,t)=>{const{__scopePopover:r,...s}=o,n=v(G,r),a=O(r),p=V(t,n.triggerRef),c=e.jsx(q.button,{type:"button","aria-haspopup":"dialog","aria-expanded":n.open,"aria-controls":n.open?n.contentId:void 0,"data-state":Y(n.open),...s,ref:p,onClick:N(o.onClick,n.onOpenToggle)});return n.hasCustomAnchor?c:e.jsx(B,{asChild:!0,...a,children:c})});U.displayName=G;var F="PopoverPortal",[Pe,xe]=z(F,{forceMount:void 0}),K=o=>{const{__scopePopover:t,forceMount:r,children:s,container:n}=o,a=v(F,t);return e.jsx(Pe,{scope:t,forceMount:r,children:e.jsx(W,{present:r||a.open,children:e.jsx(ae,{asChild:!0,container:n,children:s})})})};K.displayName=F;var g="PopoverContent",Z=i.forwardRef((o,t)=>{const r=xe(g,o.__scopePopover),{forceMount:s=r.forceMount,...n}=o,a=v(g,o.__scopePopover);return e.jsx(W,{present:s||a.open,children:a.modal?e.jsx(ye,{...n,ref:t}):e.jsx(_e,{...n,ref:t})})});Z.displayName=g;var Ce=re("PopoverContent.RemoveScroll"),ye=i.forwardRef((o,t)=>{const r=v(g,o.__scopePopover),s=i.useRef(null),n=V(t,s),a=i.useRef(!1);return i.useEffect(()=>{const p=s.current;if(p)return ie(p)},[]),e.jsx(pe,{as:Ce,allowPinchZoom:!0,children:e.jsx(J,{...o,ref:n,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:N(o.onCloseAutoFocus,p=>{p.preventDefault(),a.current||r.triggerRef.current?.focus()}),onPointerDownOutside:N(o.onPointerDownOutside,p=>{const c=p.detail.originalEvent,P=c.button===0&&c.ctrlKey===!0,x=c.button===2||P;a.current=x},{checkForDefaultPrevented:!1}),onFocusOutside:N(o.onFocusOutside,p=>p.preventDefault(),{checkForDefaultPrevented:!1})})})}),_e=i.forwardRef((o,t)=>{const r=v(g,o.__scopePopover),s=i.useRef(!1),n=i.useRef(!1);return e.jsx(J,{...o,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{o.onCloseAutoFocus?.(a),a.defaultPrevented||(s.current||r.triggerRef.current?.focus(),a.preventDefault()),s.current=!1,n.current=!1},onInteractOutside:a=>{o.onInteractOutside?.(a),a.defaultPrevented||(s.current=!0,a.detail.originalEvent.type==="pointerdown"&&(n.current=!0));const p=a.target;r.triggerRef.current?.contains(p)&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&n.current&&a.preventDefault()}})}),J=i.forwardRef((o,t)=>{const{__scopePopover:r,trapFocus:s,onOpenAutoFocus:n,onCloseAutoFocus:a,disableOutsidePointerEvents:p,onEscapeKeyDown:c,onPointerDownOutside:P,onFocusOutside:x,onInteractOutside:T,...w}=o,h=v(g,r),k=O(r);return ce(),e.jsx(le,{asChild:!0,loop:!0,trapped:s,onMountAutoFocus:n,onUnmountAutoFocus:a,children:e.jsx(se,{asChild:!0,disableOutsidePointerEvents:p,onInteractOutside:T,onEscapeKeyDown:c,onPointerDownOutside:P,onFocusOutside:x,onDismiss:()=>h.onOpenChange(!1),deferPointerDownOutside:!0,children:e.jsx(me,{"data-state":Y(h.open),role:"dialog",id:h.contentId,...k,...w,ref:t,style:{...w.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),Q="PopoverClose",X=i.forwardRef((o,t)=>{const{__scopePopover:r,...s}=o,n=v(Q,r);return e.jsx(q.button,{type:"button",...s,ref:t,onClick:N(o.onClick,()=>n.onOpenChange(!1))})});X.displayName=Q;var be="PopoverArrow",je=i.forwardRef((o,t)=>{const{__scopePopover:r,...s}=o,n=O(r);return e.jsx(ve,{...n,...s,ref:t})});je.displayName=be;function Y(o){return o?"open":"closed"}var Ne=L,Oe=H,ee=U,Te=K,oe=Z,we=X;const u=Ne,E=Oe,m=i.forwardRef(({children:o,...t},r)=>{const s=typeof o=="string"||typeof o=="number";return e.jsx(ee,{ref:r,asChild:!s,...t,children:o})});m.displayName=ee.displayName;const l=i.forwardRef(({className:o,align:t="center",sideOffset:r=8,container:s,...n},a)=>e.jsx(Te,{container:s,children:e.jsx(oe,{ref:a,align:t,sideOffset:r,className:he("st-popover__content",o),...n})}));l.displayName=oe.displayName;const A=we;try{u.displayName="Popover",u.__docgenInfo={description:"Click-triggered popover root. Unlike `Tooltip`, Radix Popover has no\n`Provider`, so the root is used directly. `open` / `defaultOpen` /\n`onOpenChange` / `modal` are透過する (Radix props).\n\n`modal` defaults to Radix's `false` — Popover is non-modal: the rest of the\npage stays interactive, there is no scroll lock, and Tab can leave the\npanel. Set `modal` when a focus trap + scroll lock is required.",displayName:"Popover",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx",methods:[],props:{},tags:{}}}catch{}try{E.displayName="PopoverAnchor",E.__docgenInfo={description:"Optional positioning anchor. Render it around the element the content should\nbe positioned against when that element is not the `PopoverTrigger`.",displayName:"PopoverAnchor",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx",methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:"schatten/node_modules/.pnpm/@radix-ui+react-primitive@2.1.6_@types+react-dom@19.2.3_@types+react@19.2.17__@types+re_2b211ae514f45e2eda250184528d6c49/node_modules/@radix-ui/react-primitive/dist/index.d.mts",name:"TypeLiteral"}],description:"",name:"asChild",required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}try{A.displayName="PopoverClose",A.__docgenInfo={description:"Closes the popover. Wrap a `<Button>` with `asChild` for a styled close\naction inside the panel.",displayName:"PopoverClose",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx",methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:"schatten/node_modules/.pnpm/@radix-ui+react-primitive@2.1.6_@types+react-dom@19.2.3_@types+react@19.2.17__@types+re_2b211ae514f45e2eda250184528d6c49/node_modules/@radix-ui/react-primitive/dist/index.d.mts",name:"TypeLiteral"}],description:"",name:"asChild",required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}try{l.displayName="PopoverContent",l.__docgenInfo={description:"",displayName:"PopoverContent",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx",methods:[],props:{side:{defaultValue:{value:"'bottom'"},declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"}],description:"The preferred side of the trigger to render the popover against.",name:"side",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"},required:!1,tags:{default:"'bottom'"},type:{name:"enum",raw:'"left" | "right" | "top" | "bottom"',value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},align:{defaultValue:{value:"center"},declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"}],description:"The alignment against the trigger.",name:"align",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"},required:!1,tags:{default:"'center'"},type:{name:"enum",raw:'"end" | "start" | "center"',value:[{value:'"end"'},{value:'"start"'},{value:'"center"'}]}},container:{defaultValue:null,declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"}],description:`Custom container element for the portal. Useful for rendering inside a
Dialog or Drawer.`,name:"container",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"},required:!1,tags:{},type:{name:"Element | DocumentFragment | null"}},asChild:{defaultValue:null,declarations:[{fileName:"schatten/node_modules/.pnpm/@radix-ui+react-primitive@2.1.6_@types+react-dom@19.2.3_@types+react@19.2.17__@types+re_2b211ae514f45e2eda250184528d6c49/node_modules/@radix-ui/react-primitive/dist/index.d.mts",name:"TypeLiteral"}],description:"",name:"asChild",required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}try{m.displayName="PopoverTrigger",m.__docgenInfo={description:"",displayName:"PopoverTrigger",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx",methods:[],props:{},tags:{}}}catch{}const no={title:"Components/lv1/Popover",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{side:{description:"The preferred side of the trigger to render the popover against.",control:"select",options:["top","right","bottom","left"],table:{type:{summary:'"top" | "right" | "bottom" | "left"'},defaultValue:{summary:"bottom"}}},align:{description:"The alignment against the trigger.",control:"select",options:["start","center","end"],table:{type:{summary:'"start" | "center" | "end"'},defaultValue:{summary:"center"}}}}},R={name:"Playground",args:{side:"bottom",align:"center"},render:o=>e.jsxs(u,{children:[e.jsx(m,{children:e.jsx(d,{variant:"secondary",children:"Open popover"})}),e.jsx(l,{...o,children:e.jsx(f,{children:"Place any content inside the panel."})})]})},I={layout:"padded",docs:{disable:!0},a11y:{config:{rules:[{id:"aria-hidden-focus",enabled:!1}]}}},C={name:"Settings Panel (VRT)",parameters:I,render:()=>e.jsxs(u,{defaultOpen:!0,children:[e.jsx(m,{children:e.jsx(d,{variant:"secondary",icon:ge,children:"Settings"})}),e.jsx(l,{className:"w-72",children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(f,{variant:"heading",size:"sm",children:"Dimensions"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("label",{className:"flex items-center justify-between gap-4 text-sm",htmlFor:"pop-w",children:["Width",e.jsx(D,{id:"pop-w",defaultValue:"100%",className:"w-32"})]}),e.jsxs("label",{className:"flex items-center justify-between gap-4 text-sm",htmlFor:"pop-h",children:["Height",e.jsx(D,{id:"pop-h",defaultValue:"auto",className:"w-32"})]})]}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(A,{asChild:!0,children:e.jsx(d,{variant:"tertiary",size:"sm",children:"Cancel"})}),e.jsx(A,{asChild:!0,children:e.jsx(d,{size:"sm",children:"Save"})})]})]})})]})},y={name:"Info (VRT)",parameters:I,render:()=>e.jsxs(u,{defaultOpen:!0,children:[e.jsx(m,{children:e.jsx(d,{variant:"tertiary",children:"About"})}),e.jsx(l,{className:"w-64",children:e.jsx(f,{children:"Popover renders click-triggered content over the page. Press Escape or click outside to dismiss."})})]})},_={name:"Placements (VRT)",parameters:I,render:()=>e.jsx("div",{className:"flex flex-col items-center gap-32 py-16",children:["left","top","bottom","right"].map(o=>e.jsxs(u,{defaultOpen:!0,children:[e.jsx(m,{children:e.jsxs(d,{variant:"secondary",children:["side: ",o]})}),e.jsx(l,{side:o,className:"w-40",onOpenAutoFocus:t=>t.preventDefault(),children:e.jsxs(f,{children:["Opens on ",o,"."]})})]},o))})},b={name:"With Anchor",parameters:{docs:{disable:!0}},render:()=>{const[o,t]=i.useState(!0);return e.jsxs("div",{className:"flex flex-col items-center gap-6 py-8",children:[e.jsxs(u,{open:o,onOpenChange:t,children:[e.jsx(E,{asChild:!0,children:e.jsx("div",{className:"rounded border border-border-strong px-6 py-3 text-sm text-foreground-muted",children:"Positioning anchor"})}),e.jsx(l,{side:"bottom",className:"w-56",children:e.jsx(f,{children:"Positioned against the anchor box, not the toggle button."})})]}),e.jsx(d,{variant:"secondary",onClick:()=>t(r=>!r),children:"Toggle (separate button)"})]})}},j={name:"Controlled",parameters:{docs:{disable:!0}},render:()=>{const[o,t]=i.useState(!1);return e.jsxs(u,{open:o,onOpenChange:t,children:[e.jsx(m,{children:e.jsxs(d,{variant:"secondary",children:[o?"Close":"Open"," popover"]})}),e.jsx(l,{children:e.jsx(f,{children:"Controlled content."})})]})}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
            <PopoverClose asChild>
              <Button variant="tertiary" size="sm">
                Cancel
              </Button>
            </PopoverClose>
            <PopoverClose asChild>
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
}`,...y.parameters?.docs?.source},description:{story:"Plain informational panel — minimal content, default placement.",...y.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:"All four `side` placements, pinned open. Triggers are stacked in a column\nwith generous spacing so each portaled panel opens clear of its neighbours\n(`left` / `right` extend horizontally; `top` / `bottom` diverge vertically).",..._.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
          <PopoverAnchor asChild>
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
}`,...b.parameters?.docs?.source},description:{story:"`PopoverAnchor` decouples the positioning reference from the open trigger:\nthe panel is positioned against the bordered anchor box, while a **separate**\nbutton toggles the controlled `open` state. Note this pattern uses\ncontrolled `open` rather than `PopoverTrigger` — rendering both an explicit\n`PopoverAnchor` and a `PopoverTrigger` gives Radix two competing anchors and\nthe content loses its positioning reference. Interactive (not in the VRT\nroster); the anchor wiring is pinned by the unit test.",...b.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:"Controlled open state via `open` / `onOpenChange`.",...j.parameters?.docs?.description}}};const ao=["Playground","SettingsPanel","Info","Placements","WithAnchor","Controlled"];export{j as Controlled,y as Info,_ as Placements,R as Playground,C as SettingsPanel,b as WithAnchor,ao as __namedExportsOrder,no as default};
