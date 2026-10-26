import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{X as n,n as r}from"./iframe-DV92SZiC.js";import{i,r as a}from"./dist-CjgOqvXS.js";import{a as o,i as s,n as c,o as l}from"./dist-BzfR91eM.js";import{r as u,t as d}from"./dist-B4KblIbv.js";import{n as f,t as ee}from"./utils-BUtSjyiS.js";import{n as te,t as ne}from"./settings-vZOWkTSC.js";import{n as re,t as p}from"./Button-B8h71Upu.js";import{i as ie,n as ae,r as m,t as oe}from"./dist-DLCHoDjd.js";import{n as se,t as h}from"./dist-QD4VY7dO.js";import{n as ce,t as le}from"./dist-BWXV1t5L.js";import{i as ue,n as de,r as fe,t as pe}from"./dist-BRZSl1bJ.js";import{a as me,c as he,i as ge,n as _e,o as ve,r as ye,s as be,t as xe}from"./es2015-CImHDHBT.js";import{a as Se,i as Ce,o as we,r as Te,t as Ee}from"./dist-DGKXtGUJ.js";import{n as De,t as Oe}from"./Input-B_VLeiZS.js";import{n as ke,t as g}from"./Text-D0M9aUow.js";import"./Popover-DePiIMvv.js";function _(e){return e?`open`:`closed`}var v,y,b,x,S,C,Ae,w,T,E,D,O,k,je,Me,A,Ne,Pe,Fe,j,Ie,Le,Re,ze,M,Be,Ve,He,N,P,Ue,F,I;function We(){return(We=t((()=>{v=e(n(),1),ie(),o(),i(),ue(),me(),he(),le(),we(),de(),se(),u(),s(),oe(),_e(),ge(),y=r(),b=Object.defineProperty,x=(e,t)=>b(e,`name`,{value:t,configurable:!0}),S=`Popover`,[C,Ae]=a(S,[Se]),w=Se(),[T,E]=C(S),D=x(e=>{let{__scopePopover:t,children:n,open:r,defaultOpen:i,onOpenChange:a,modal:o=!1}=e,s=w(t),c=v.useRef(null),[l,u]=v.useState(!1),[d,f]=ae({prop:r,defaultProp:i??!1,onChange:a,caller:S});return(0,y.jsx)(Ce,{...s,children:(0,y.jsx)(T,{scope:t,contentId:ce(),triggerRef:c,open:d,onOpenChange:f,onOpenToggle:v.useCallback(()=>f(e=>!e),[f]),hasCustomAnchor:l,onCustomAnchorAdd:v.useCallback(()=>u(!0),[]),onCustomAnchorRemove:v.useCallback(()=>u(!1),[]),modal:o,children:n})})},`Popover`),O=`PopoverAnchor`,k=v.forwardRef(x(function(e,t){let{__scopePopover:n,...r}=e,i=E(O,n),a=w(n),{onCustomAnchorAdd:o,onCustomAnchorRemove:s}=i;return v.useEffect(()=>(o(),()=>s()),[o,s]),(0,y.jsx)(Ee,{...a,...r,ref:t})},`PopoverAnchor`)),je=`PopoverTrigger`,Me=v.forwardRef(x(function(e,t){let{__scopePopover:n,...r}=e,i=E(je,n),a=w(n),o=l(t,i.triggerRef),s=(0,y.jsx)(d.button,{type:`button`,"aria-haspopup":`dialog`,"aria-expanded":i.open,"aria-controls":i.open?i.contentId:void 0,"data-state":_(i.open),...r,ref:o,onClick:m(e.onClick,i.onOpenToggle)});return i.hasCustomAnchor?s:(0,y.jsx)(Ee,{asChild:!0,...a,children:s})},`PopoverTrigger`)),A=`PopoverPortal`,[Ne,Pe]=C(A,{forceMount:void 0}),Fe=x(e=>{let{__scopePopover:t,forceMount:n,children:r,container:i}=e,a=E(A,t);return(0,y.jsx)(Ne,{scope:t,forceMount:n,children:(0,y.jsx)(h,{present:n||a.open,children:(0,y.jsx)(pe,{asChild:!0,container:i,children:r})})})},`PopoverPortal`),j=`PopoverContent`,Ie=v.forwardRef(x(function(e,t){let n=Pe(j,e.__scopePopover),{forceMount:r=n.forceMount,...i}=e,a=E(j,e.__scopePopover);return(0,y.jsx)(h,{present:r||a.open,children:a.modal?(0,y.jsx)(Re,{...i,ref:t}):(0,y.jsx)(ze,{...i,ref:t})})},`PopoverContent`)),Le=c(`PopoverContent.RemoveScroll`),Re=v.forwardRef(x(function(e,t){let n=E(j,e.__scopePopover),r=v.useRef(null),i=l(t,r),a=v.useRef(!1);return v.useEffect(()=>{let e=r.current;if(e)return xe(e)},[]),(0,y.jsx)(ye,{as:Le,allowPinchZoom:!0,children:(0,y.jsx)(M,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:m(e.onCloseAutoFocus,e=>{e.preventDefault(),a.current||n.triggerRef.current?.focus()}),onPointerDownOutside:m(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=t.button===0&&t.ctrlKey===!0,r=t.button===2||n;a.current=r},{checkForDefaultPrevented:!1}),onFocusOutside:m(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1})})})},`PopoverContentModal`)),ze=v.forwardRef(x(function(e,t){let n=E(j,e.__scopePopover),r=v.useRef(!1),i=v.useRef(!1);return(0,y.jsx)(M,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(r.current||n.triggerRef.current?.focus(),t.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(r.current=!0,t.detail.originalEvent.type===`pointerdown`&&(i.current=!0));let a=t.target;n.triggerRef.current?.contains(a)&&t.preventDefault(),t.detail.originalEvent.type===`focusin`&&i.current&&t.preventDefault()}})},`PopoverContentNonModal`)),M=v.forwardRef(x(function(e,t){let{__scopePopover:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:a,disableOutsidePointerEvents:o,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:l,onInteractOutside:u,...d}=e,f=E(j,n),ee=w(n);return ve(),(0,y.jsx)(be,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:a,children:(0,y.jsx)(fe,{asChild:!0,disableOutsidePointerEvents:o,onInteractOutside:u,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:l,onDismiss:()=>f.onOpenChange(!1),deferPointerDownOutside:!0,children:(0,y.jsx)(Te,{"data-state":_(f.open),role:`dialog`,id:f.contentId,...ee,...d,ref:t,style:{...d.style,"--radix-popover-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-popover-content-available-width":`var(--radix-popper-available-width)`,"--radix-popover-content-available-height":`var(--radix-popper-available-height)`,"--radix-popover-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-popover-trigger-height":`var(--radix-popper-anchor-height)`}})})})},`PopoverContentImpl`)),Be=`PopoverClose`,Ve=v.forwardRef(x(function(e,t){let{__scopePopover:n,...r}=e,i=E(Be,n);return(0,y.jsx)(d.button,{type:`button`,...r,ref:t,onClick:m(e.onClick,()=>i.onOpenChange(!1))})},`PopoverClose`)),x(_,`getState`),He=D,N=k,P=Me,Ue=Fe,F=Ie,I=Ve})))()}var L,R,z,B,V,H,U;function Ge(){return(Ge=t((()=>{We(),L=n(),f(),R=r(),z=e=>(0,R.jsx)(He,{...e}),z.displayName=`Popover`,B=(0,L.forwardRef)(({children:e,...t},n)=>{let r=typeof e==`string`||typeof e==`number`;return(0,R.jsx)(N,{ref:n,asChild:!r,...t,children:e})}),B.displayName=N.displayName,V=(0,L.forwardRef)(({children:e,...t},n)=>{let r=typeof e==`string`||typeof e==`number`;return(0,R.jsx)(P,{ref:n,asChild:!r,...t,children:e})}),V.displayName=P.displayName,H=(0,L.forwardRef)(({className:e,align:t=`center`,sideOffset:n=8,container:r,...i},a)=>(0,R.jsx)(Ue,{container:r,children:(0,R.jsx)(F,{ref:a,align:t,sideOffset:n,className:ee(`st-popover__content`,e),...i})})),H.displayName=F.displayName,U=(0,L.forwardRef)(({children:e,...t},n)=>{let r=typeof e==`string`||typeof e==`number`;return(0,R.jsx)(I,{ref:n,asChild:!r,...t,children:e})}),U.displayName=I.displayName;try{z.displayName=`Popover`,z.__docgenInfo={description:"Click-triggered popover root. Unlike `Tooltip`, Radix Popover has no\n`Provider`, so the root wraps `PopoverPrimitive.Root` directly.",displayName:`Popover`,filePath:`/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx`,methods:[],props:{open:{defaultValue:null,declarations:[{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverProps`}],description:`Controlled open state.`,name:`open`,parent:{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverProps`},required:!1,tags:{},type:{name:`boolean`}},defaultOpen:{defaultValue:null,declarations:[{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverProps`}],description:`Initial open state (uncontrolled).`,name:`defaultOpen`,parent:{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverProps`},required:!1,tags:{},type:{name:`boolean`}},onOpenChange:{defaultValue:null,declarations:[{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverProps`}],description:`Fired when the open state changes.`,name:`onOpenChange`,parent:{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverProps`},required:!1,tags:{},type:{name:`((open: boolean) => void)`}},modal:{defaultValue:{value:`false`},declarations:[{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverProps`}],description:`Whether the popover traps focus and locks scroll.

Defaults to \`false\` — Popover is non-modal: the rest of the page stays
interactive, there is no scroll lock, and Tab can leave the panel. Set
\`modal\` when a focus trap + scroll lock is required.`,name:`modal`,parent:{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}}},tags:{}}}catch{}try{B.displayName=`PopoverAnchor`,B.__docgenInfo={description:"Optional positioning anchor. Render it around the element the content should\nbe positioned against when that element is not the `PopoverTrigger`.\n\nLike the triggers, `asChild` is not part of the public API — an element\nchild is merged onto directly (internal `asChild`), while a text child gets\nRadix's own `<div>` wrapper.",displayName:`PopoverAnchor`,filePath:`/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx`,methods:[],props:{},tags:{}}}catch{}try{U.displayName=`PopoverClose`,U.__docgenInfo={description:"Closes the popover. Like the triggers, `asChild` is not part of the public\nAPI — wrap a `<Button>` (element child) and the close behaviour merges onto\nit, while a string child lets Radix render its own `<button>`.",displayName:`PopoverClose`,filePath:`/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx`,methods:[],props:{},tags:{}}}catch{}try{H.displayName=`PopoverContent`,H.__docgenInfo={description:``,displayName:`PopoverContent`,filePath:`/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx`,methods:[],props:{side:{defaultValue:{value:`'bottom'`},declarations:[{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverContentProps`}],description:`The preferred side of the trigger to render the popover against.`,name:`side`,parent:{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverContentProps`},required:!1,tags:{default:`'bottom'`},type:{name:`enum`,raw:`"left" | "right" | "top" | "bottom"`,value:[{value:`"left"`},{value:`"right"`},{value:`"top"`},{value:`"bottom"`}]}},align:{defaultValue:{value:`center`},declarations:[{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverContentProps`}],description:`The alignment against the trigger.`,name:`align`,parent:{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverContentProps`},required:!1,tags:{default:`'center'`},type:{name:`enum`,raw:`"start" | "end" | "center"`,value:[{value:`"start"`},{value:`"end"`},{value:`"center"`}]}},sideOffset:{defaultValue:{value:`8`},declarations:[{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverContentProps`}],description:`Distance from the trigger, in pixels.`,name:`sideOffset`,parent:{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverContentProps`},required:!1,tags:{default:`8`},type:{name:`number`}},onOpenAutoFocus:{defaultValue:null,declarations:[{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverContentProps`}],description:`Fired when focus moves into the panel on open. Call
\`event.preventDefault()\` to keep focus where it was — e.g. when several
non-modal popovers are pinned open at once.`,name:`onOpenAutoFocus`,parent:{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverContentProps`},required:!1,tags:{},type:{name:`((event: Event) => void)`}},container:{defaultValue:null,declarations:[{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverContentProps`}],description:`Custom container element for the portal. Useful for rendering inside a
Dialog or Drawer.`,name:`container`,parent:{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverContentProps`},required:!1,tags:{},type:{name:`Element | DocumentFragment | null`}}},tags:{}}}catch{}try{V.displayName=`PopoverTrigger`,V.__docgenInfo={description:``,displayName:`PopoverTrigger`,filePath:`/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var W,G,Ke,K,q,J,Y,X,Z,Q,qe;function $(){return($=t((()=>{te(),W=n(),re(),De(),ke(),Ge(),G=r(),Ke={title:`Components/lv1/Popover`,component:H,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{side:{description:`The preferred side of the trigger to render the popover against.`,control:`select`,options:[`top`,`right`,`bottom`,`left`],table:{type:{summary:`"top" | "right" | "bottom" | "left"`},defaultValue:{summary:`bottom`}}},align:{description:`The alignment against the trigger.`,control:`select`,options:[`start`,`center`,`end`],table:{type:{summary:`"start" | "center" | "end"`},defaultValue:{summary:`center`}}}}},K={name:`Playground`,args:{side:`bottom`,align:`center`},render:e=>(0,G.jsxs)(z,{children:[(0,G.jsx)(V,{children:(0,G.jsx)(p,{variant:`secondary`,children:`Open popover`})}),(0,G.jsx)(H,{...e,children:(0,G.jsx)(g,{children:`Place any content inside the panel.`})})]})},q={layout:`padded`,docs:{disable:!0},a11y:{config:{rules:[{id:`aria-hidden-focus`,enabled:!1}]}}},J={name:`Settings Panel (VRT)`,parameters:q,render:()=>(0,G.jsxs)(z,{defaultOpen:!0,children:[(0,G.jsx)(V,{children:(0,G.jsx)(p,{variant:`secondary`,icon:ne,children:`Settings`})}),(0,G.jsx)(H,{className:`w-72`,children:(0,G.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,G.jsx)(g,{variant:`heading`,size:`sm`,children:`Dimensions`}),(0,G.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,G.jsxs)(`label`,{className:`flex items-center justify-between gap-4 text-sm`,htmlFor:`pop-w`,children:[`Width`,(0,G.jsx)(Oe,{id:`pop-w`,defaultValue:`100%`,className:`w-32`})]}),(0,G.jsxs)(`label`,{className:`flex items-center justify-between gap-4 text-sm`,htmlFor:`pop-h`,children:[`Height`,(0,G.jsx)(Oe,{id:`pop-h`,defaultValue:`auto`,className:`w-32`})]})]}),(0,G.jsxs)(`div`,{className:`flex justify-end gap-2`,children:[(0,G.jsx)(U,{children:(0,G.jsx)(p,{variant:`tertiary`,size:`sm`,children:`Cancel`})}),(0,G.jsx)(U,{children:(0,G.jsx)(p,{size:`sm`,children:`Save`})})]})]})})]})},Y={name:`Info (VRT)`,parameters:q,render:()=>(0,G.jsxs)(z,{defaultOpen:!0,children:[(0,G.jsx)(V,{children:(0,G.jsx)(p,{variant:`tertiary`,children:`About`})}),(0,G.jsx)(H,{className:`w-64`,children:(0,G.jsx)(g,{children:`Popover renders click-triggered content over the page. Press Escape or click outside to dismiss.`})})]})},X={name:`Placements (VRT)`,parameters:q,render:()=>(0,G.jsx)(`div`,{className:`flex flex-col items-center gap-32 py-16`,children:[`left`,`top`,`bottom`,`right`].map(e=>(0,G.jsxs)(z,{defaultOpen:!0,children:[(0,G.jsx)(V,{children:(0,G.jsxs)(p,{variant:`secondary`,children:[`side: `,e]})}),(0,G.jsx)(H,{side:e,className:`w-40`,onOpenAutoFocus:e=>e.preventDefault(),children:(0,G.jsxs)(g,{children:[`Opens on `,e,`.`]})})]},e))})},Z={name:`With Anchor`,parameters:{docs:{disable:!0}},render:()=>{let[e,t]=(0,W.useState)(!0);return(0,G.jsxs)(`div`,{className:`flex flex-col items-center gap-6 py-8`,children:[(0,G.jsxs)(z,{open:e,onOpenChange:t,children:[(0,G.jsx)(B,{children:(0,G.jsx)(`div`,{className:`rounded border border-border-strong px-6 py-3 text-sm text-foreground-muted`,children:`Positioning anchor`})}),(0,G.jsx)(H,{side:`bottom`,className:`w-56`,children:(0,G.jsx)(g,{children:`Positioned against the anchor box, not the toggle button.`})})]}),(0,G.jsx)(p,{variant:`secondary`,onClick:()=>t(e=>!e),children:`Toggle (separate button)`})]})}},Q={name:`Controlled`,parameters:{docs:{disable:!0}},render:()=>{let[e,t]=(0,W.useState)(!1);return(0,G.jsxs)(z,{open:e,onOpenChange:t,children:[(0,G.jsx)(V,{children:(0,G.jsxs)(p,{variant:`secondary`,children:[e?`Close`:`Open`,` popover`]})}),(0,G.jsx)(H,{children:(0,G.jsx)(g,{children:`Controlled content.`})})]})}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:`A settings panel with a heading, form controls, and a close action — the
canonical "click to reveal editable content" use case. Pinned \`defaultOpen\`
so VRT can capture the portaled content in one frame.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`Plain informational panel — minimal content, default placement.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:"All four `side` placements, pinned open. Triggers are stacked in a column\nwith generous spacing so each portaled panel opens clear of its neighbours\n(`left` / `right` extend horizontally; `top` / `bottom` diverge vertically).",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:"`PopoverAnchor` decouples the positioning reference from the open trigger:\nthe panel is positioned against the bordered anchor box, while a **separate**\nbutton toggles the controlled `open` state. Note this pattern uses\ncontrolled `open` rather than `PopoverTrigger` — rendering both an explicit\n`PopoverAnchor` and a `PopoverTrigger` gives Radix two competing anchors and\nthe content loses its positioning reference. Interactive (not in the VRT\nroster); the anchor wiring is pinned by the unit test.",...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:"Controlled open state via `open` / `onOpenChange`.",...Q.parameters?.docs?.description}}},qe=[`Playground`,`SettingsPanel`,`Info`,`Placements`,`WithAnchor`,`Controlled`]})))()}$();export{Q as Controlled,Y as Info,X as Placements,K as Playground,J as SettingsPanel,Z as WithAnchor,qe as __namedExportsOrder,Ke as default};