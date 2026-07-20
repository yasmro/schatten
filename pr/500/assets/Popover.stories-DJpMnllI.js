import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-DvlgmmzG.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{i,r as a}from"./dist-D3WHILzy.js";import{a as o,i as s,n as c,o as l}from"./dist-CEZ3G2aK.js";import{r as u,t as d}from"./dist-61Q5Mj5n.js";import{n as f,t as ee}from"./utils-B34KuJNe.js";import{O as te,t as ne}from"./lucide-react-CwYeROqo.js";import{n as re,t as p}from"./Button-Dr82GheM.js";import{i as ie,n as ae,r as m,t as oe}from"./dist-fDQuXgyp2.js";import{n as se,t as ce}from"./dist-B-yRI-vu2.js";import{n as le,t as ue}from"./dist-DWjd86BR.js";import{i as de,n as fe,r as pe,t as me}from"./dist-CF3Hbbvp.js";import{c as he,i as ge,l as _e,n as ve,o as ye,r as be,s as xe,t as Se}from"./es2015-C0HGrLJO.js";import{a as Ce,i as we,n as Te,o as Ee,r as De,t as Oe}from"./dist-CbcYQddO.js";import{n as ke,t as Ae}from"./Input-BXykjnqo.js";import{n as je,t as h}from"./Text-Brd3pl5g.js";import{t as Me}from"./Popover-DKlQRDbk.js";function Ne(e){return e?`open`:`closed`}var g,_,v,y,Pe,b,Fe,x,S,C,w,T,E,D,Ie,Le,O,k,A,Re,ze,Be,j,M,N,Ve,He,Ue,P,F,We,I,L,Ge=t((()=>{g=e(n(),1),ie(),o(),i(),de(),ye(),_e(),ue(),Ee(),fe(),se(),u(),s(),oe(),ve(),be(),_=r(),v=`Popover`,[y,Pe]=a(v,[Ce]),b=Ce(),[Fe,x]=y(v),S=e=>{let{__scopePopover:t,children:n,open:r,defaultOpen:i,onOpenChange:a,modal:o=!1}=e,s=b(t),c=g.useRef(null),[l,u]=g.useState(!1),[d,f]=ae({prop:r,defaultProp:i??!1,onChange:a,caller:v});return(0,_.jsx)(we,{...s,children:(0,_.jsx)(Fe,{scope:t,contentId:le(),triggerRef:c,open:d,onOpenChange:f,onOpenToggle:g.useCallback(()=>f(e=>!e),[f]),hasCustomAnchor:l,onCustomAnchorAdd:g.useCallback(()=>u(!0),[]),onCustomAnchorRemove:g.useCallback(()=>u(!1),[]),modal:o,children:n})})},S.displayName=v,C=`PopoverAnchor`,w=g.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=x(C,n),a=b(n),{onCustomAnchorAdd:o,onCustomAnchorRemove:s}=i;return g.useEffect(()=>(o(),()=>s()),[o,s]),(0,_.jsx)(Oe,{...a,...r,ref:t})}),w.displayName=C,T=`PopoverTrigger`,E=g.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=x(T,n),a=b(n),o=l(t,i.triggerRef),s=(0,_.jsx)(d.button,{type:`button`,"aria-haspopup":`dialog`,"aria-expanded":i.open,"aria-controls":i.open?i.contentId:void 0,"data-state":Ne(i.open),...r,ref:o,onClick:m(e.onClick,i.onOpenToggle)});return i.hasCustomAnchor?s:(0,_.jsx)(Oe,{asChild:!0,...a,children:s})}),E.displayName=T,D=`PopoverPortal`,[Ie,Le]=y(D,{forceMount:void 0}),O=e=>{let{__scopePopover:t,forceMount:n,children:r,container:i}=e,a=x(D,t);return(0,_.jsx)(Ie,{scope:t,forceMount:n,children:(0,_.jsx)(ce,{present:n||a.open,children:(0,_.jsx)(me,{asChild:!0,container:i,children:r})})})},O.displayName=D,k=`PopoverContent`,A=g.forwardRef((e,t)=>{let n=Le(k,e.__scopePopover),{forceMount:r=n.forceMount,...i}=e,a=x(k,e.__scopePopover);return(0,_.jsx)(ce,{present:r||a.open,children:a.modal?(0,_.jsx)(ze,{...i,ref:t}):(0,_.jsx)(Be,{...i,ref:t})})}),A.displayName=k,Re=c(`PopoverContent.RemoveScroll`),ze=g.forwardRef((e,t)=>{let n=x(k,e.__scopePopover),r=g.useRef(null),i=l(t,r),a=g.useRef(!1);return g.useEffect(()=>{let e=r.current;if(e)return Se(e)},[]),(0,_.jsx)(ge,{as:Re,allowPinchZoom:!0,children:(0,_.jsx)(j,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:m(e.onCloseAutoFocus,e=>{e.preventDefault(),a.current||n.triggerRef.current?.focus()}),onPointerDownOutside:m(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=t.button===0&&t.ctrlKey===!0,r=t.button===2||n;a.current=r},{checkForDefaultPrevented:!1}),onFocusOutside:m(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1})})})}),Be=g.forwardRef((e,t)=>{let n=x(k,e.__scopePopover),r=g.useRef(!1),i=g.useRef(!1);return(0,_.jsx)(j,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(r.current||n.triggerRef.current?.focus(),t.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(r.current=!0,t.detail.originalEvent.type===`pointerdown`&&(i.current=!0));let a=t.target;n.triggerRef.current?.contains(a)&&t.preventDefault(),t.detail.originalEvent.type===`focusin`&&i.current&&t.preventDefault()}})}),j=g.forwardRef((e,t)=>{let{__scopePopover:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:a,disableOutsidePointerEvents:o,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:l,onInteractOutside:u,...d}=e,f=x(k,n),ee=b(n);return xe(),(0,_.jsx)(he,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:a,children:(0,_.jsx)(pe,{asChild:!0,disableOutsidePointerEvents:o,onInteractOutside:u,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:l,onDismiss:()=>f.onOpenChange(!1),deferPointerDownOutside:!0,children:(0,_.jsx)(De,{"data-state":Ne(f.open),role:`dialog`,id:f.contentId,...ee,...d,ref:t,style:{...d.style,"--radix-popover-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-popover-content-available-width":`var(--radix-popper-available-width)`,"--radix-popover-content-available-height":`var(--radix-popper-available-height)`,"--radix-popover-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-popover-trigger-height":`var(--radix-popper-anchor-height)`}})})})}),M=`PopoverClose`,N=g.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=x(M,n);return(0,_.jsx)(d.button,{type:`button`,...r,ref:t,onClick:m(e.onClick,()=>i.onOpenChange(!1))})}),N.displayName=M,Ve=`PopoverArrow`,He=g.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=b(n);return(0,_.jsx)(Te,{...i,...r,ref:t})}),He.displayName=Ve,Ue=S,P=w,F=E,We=O,I=A,L=N})),R,z,B,V,H,U,W,Ke=t((()=>{Ge(),R=e(n(),1),f(),Me(),z=r(),B=e=>(0,z.jsx)(Ue,{...e}),B.displayName=`Popover`,V=(0,R.forwardRef)(({children:e,...t},n)=>{let r=typeof e==`string`||typeof e==`number`;return(0,z.jsx)(P,{ref:n,asChild:!r,...t,children:e})}),V.displayName=P.displayName,H=(0,R.forwardRef)(({children:e,...t},n)=>{let r=typeof e==`string`||typeof e==`number`;return(0,z.jsx)(F,{ref:n,asChild:!r,...t,children:e})}),H.displayName=F.displayName,U=(0,R.forwardRef)(({className:e,align:t=`center`,sideOffset:n=8,container:r,...i},a)=>(0,z.jsx)(We,{container:r,children:(0,z.jsx)(I,{ref:a,align:t,sideOffset:n,className:ee(`st-popover__content`,e),...i})})),U.displayName=I.displayName,W=(0,R.forwardRef)(({children:e,...t},n)=>{let r=typeof e==`string`||typeof e==`number`;return(0,z.jsx)(L,{ref:n,asChild:!r,...t,children:e})}),W.displayName=L.displayName;try{B.displayName=`Popover`,B.__docgenInfo={description:"Click-triggered popover root. Unlike `Tooltip`, Radix Popover has no\n`Provider`, so the root wraps `PopoverPrimitive.Root` directly.",displayName:`Popover`,filePath:`/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx`,methods:[],props:{open:{defaultValue:null,declarations:[{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverProps`}],description:`Controlled open state.`,name:`open`,parent:{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverProps`},required:!1,tags:{},type:{name:`boolean`}},defaultOpen:{defaultValue:null,declarations:[{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverProps`}],description:`Initial open state (uncontrolled).`,name:`defaultOpen`,parent:{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverProps`},required:!1,tags:{},type:{name:`boolean`}},onOpenChange:{defaultValue:null,declarations:[{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverProps`}],description:`Fired when the open state changes.`,name:`onOpenChange`,parent:{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverProps`},required:!1,tags:{},type:{name:`((open: boolean) => void)`}},modal:{defaultValue:{value:`false`},declarations:[{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverProps`}],description:`Whether the popover traps focus and locks scroll.

Defaults to \`false\` — Popover is non-modal: the rest of the page stays
interactive, there is no scroll lock, and Tab can leave the panel. Set
\`modal\` when a focus trap + scroll lock is required.`,name:`modal`,parent:{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}}},tags:{}}}catch{}try{V.displayName=`PopoverAnchor`,V.__docgenInfo={description:"Optional positioning anchor. Render it around the element the content should\nbe positioned against when that element is not the `PopoverTrigger`.\n\nLike the triggers, `asChild` is not part of the public API — an element\nchild is merged onto directly (internal `asChild`), while a text child gets\nRadix's own `<div>` wrapper.",displayName:`PopoverAnchor`,filePath:`/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx`,methods:[],props:{},tags:{}}}catch{}try{W.displayName=`PopoverClose`,W.__docgenInfo={description:"Closes the popover. Like the triggers, `asChild` is not part of the public\nAPI — wrap a `<Button>` (element child) and the close behaviour merges onto\nit, while a string child lets Radix render its own `<button>`.",displayName:`PopoverClose`,filePath:`/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx`,methods:[],props:{},tags:{}}}catch{}try{U.displayName=`PopoverContent`,U.__docgenInfo={description:``,displayName:`PopoverContent`,filePath:`/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx`,methods:[],props:{side:{defaultValue:{value:`'bottom'`},declarations:[{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverContentProps`}],description:`The preferred side of the trigger to render the popover against.`,name:`side`,parent:{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverContentProps`},required:!1,tags:{default:`'bottom'`},type:{name:`enum`,raw:`"left" | "right" | "top" | "bottom"`,value:[{value:`"left"`},{value:`"right"`},{value:`"top"`},{value:`"bottom"`}]}},align:{defaultValue:{value:`center`},declarations:[{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverContentProps`}],description:`The alignment against the trigger.`,name:`align`,parent:{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverContentProps`},required:!1,tags:{default:`'center'`},type:{name:`enum`,raw:`"center" | "start" | "end"`,value:[{value:`"center"`},{value:`"start"`},{value:`"end"`}]}},sideOffset:{defaultValue:{value:`8`},declarations:[{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverContentProps`}],description:`Distance from the trigger, in pixels.`,name:`sideOffset`,parent:{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverContentProps`},required:!1,tags:{default:`8`},type:{name:`number`}},onOpenAutoFocus:{defaultValue:null,declarations:[{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverContentProps`}],description:`Fired when focus moves into the panel on open. Call
\`event.preventDefault()\` to keep focus where it was — e.g. when several
non-modal popovers are pinned open at once.`,name:`onOpenAutoFocus`,parent:{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverContentProps`},required:!1,tags:{},type:{name:`((event: Event) => void)`}},container:{defaultValue:null,declarations:[{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverContentProps`}],description:`Custom container element for the portal. Useful for rendering inside a
Dialog or Drawer.`,name:`container`,parent:{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverContentProps`},required:!1,tags:{},type:{name:`Element | DocumentFragment | null`}}},tags:{}}}catch{}try{H.displayName=`PopoverTrigger`,H.__docgenInfo={description:``,displayName:`PopoverTrigger`,filePath:`/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx`,methods:[],props:{},tags:{}}}catch{}})),G,K,qe,q,J,Y,X,Z,Q,$,Je;t((()=>{ne(),G=e(n(),1),re(),ke(),je(),Ke(),K=r(),qe={title:`Components/lv1/Popover`,component:U,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{side:{description:`The preferred side of the trigger to render the popover against.`,control:`select`,options:[`top`,`right`,`bottom`,`left`],table:{type:{summary:`"top" | "right" | "bottom" | "left"`},defaultValue:{summary:`bottom`}}},align:{description:`The alignment against the trigger.`,control:`select`,options:[`start`,`center`,`end`],table:{type:{summary:`"start" | "center" | "end"`},defaultValue:{summary:`center`}}}}},q={name:`Playground`,args:{side:`bottom`,align:`center`},render:e=>(0,K.jsxs)(B,{children:[(0,K.jsx)(H,{children:(0,K.jsx)(p,{variant:`secondary`,children:`Open popover`})}),(0,K.jsx)(U,{...e,children:(0,K.jsx)(h,{children:`Place any content inside the panel.`})})]})},J={layout:`padded`,docs:{disable:!0},a11y:{config:{rules:[{id:`aria-hidden-focus`,enabled:!1}]}}},Y={name:`Settings Panel (VRT)`,parameters:J,render:()=>(0,K.jsxs)(B,{defaultOpen:!0,children:[(0,K.jsx)(H,{children:(0,K.jsx)(p,{variant:`secondary`,icon:te,children:`Settings`})}),(0,K.jsx)(U,{className:`w-72`,children:(0,K.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,K.jsx)(h,{variant:`heading`,size:`sm`,children:`Dimensions`}),(0,K.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,K.jsxs)(`label`,{className:`flex items-center justify-between gap-4 text-sm`,htmlFor:`pop-w`,children:[`Width`,(0,K.jsx)(Ae,{id:`pop-w`,defaultValue:`100%`,className:`w-32`})]}),(0,K.jsxs)(`label`,{className:`flex items-center justify-between gap-4 text-sm`,htmlFor:`pop-h`,children:[`Height`,(0,K.jsx)(Ae,{id:`pop-h`,defaultValue:`auto`,className:`w-32`})]})]}),(0,K.jsxs)(`div`,{className:`flex justify-end gap-2`,children:[(0,K.jsx)(W,{children:(0,K.jsx)(p,{variant:`tertiary`,size:`sm`,children:`Cancel`})}),(0,K.jsx)(W,{children:(0,K.jsx)(p,{size:`sm`,children:`Save`})})]})]})})]})},X={name:`Info (VRT)`,parameters:J,render:()=>(0,K.jsxs)(B,{defaultOpen:!0,children:[(0,K.jsx)(H,{children:(0,K.jsx)(p,{variant:`tertiary`,children:`About`})}),(0,K.jsx)(U,{className:`w-64`,children:(0,K.jsx)(h,{children:`Popover renders click-triggered content over the page. Press Escape or click outside to dismiss.`})})]})},Z={name:`Placements (VRT)`,parameters:J,render:()=>(0,K.jsx)(`div`,{className:`flex flex-col items-center gap-32 py-16`,children:[`left`,`top`,`bottom`,`right`].map(e=>(0,K.jsxs)(B,{defaultOpen:!0,children:[(0,K.jsx)(H,{children:(0,K.jsxs)(p,{variant:`secondary`,children:[`side: `,e]})}),(0,K.jsx)(U,{side:e,className:`w-40`,onOpenAutoFocus:e=>e.preventDefault(),children:(0,K.jsxs)(h,{children:[`Opens on `,e,`.`]})})]},e))})},Q={name:`With Anchor`,parameters:{docs:{disable:!0}},render:()=>{let[e,t]=(0,G.useState)(!0);return(0,K.jsxs)(`div`,{className:`flex flex-col items-center gap-6 py-8`,children:[(0,K.jsxs)(B,{open:e,onOpenChange:t,children:[(0,K.jsx)(V,{children:(0,K.jsx)(`div`,{className:`rounded border border-border-strong px-6 py-3 text-sm text-foreground-muted`,children:`Positioning anchor`})}),(0,K.jsx)(U,{side:`bottom`,className:`w-56`,children:(0,K.jsx)(h,{children:`Positioned against the anchor box, not the toggle button.`})})]}),(0,K.jsx)(p,{variant:`secondary`,onClick:()=>t(e=>!e),children:`Toggle (separate button)`})]})}},$={name:`Controlled`,parameters:{docs:{disable:!0}},render:()=>{let[e,t]=(0,G.useState)(!1);return(0,K.jsxs)(B,{open:e,onOpenChange:t,children:[(0,K.jsx)(H,{children:(0,K.jsxs)(p,{variant:`secondary`,children:[e?`Close`:`Open`,` popover`]})}),(0,K.jsx)(U,{children:(0,K.jsx)(h,{children:`Controlled content.`})})]})}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`A settings panel with a heading, form controls, and a close action — the
canonical "click to reveal editable content" use case. Pinned \`defaultOpen\`
so VRT can capture the portaled content in one frame.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`Plain informational panel — minimal content, default placement.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:"All four `side` placements, pinned open. Triggers are stacked in a column\nwith generous spacing so each portaled panel opens clear of its neighbours\n(`left` / `right` extend horizontally; `top` / `bottom` diverge vertically).",...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:"`PopoverAnchor` decouples the positioning reference from the open trigger:\nthe panel is positioned against the bordered anchor box, while a **separate**\nbutton toggles the controlled `open` state. Note this pattern uses\ncontrolled `open` rather than `PopoverTrigger` — rendering both an explicit\n`PopoverAnchor` and a `PopoverTrigger` gives Radix two competing anchors and\nthe content loses its positioning reference. Interactive (not in the VRT\nroster); the anchor wiring is pinned by the unit test.",...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:"Controlled open state via `open` / `onOpenChange`.",...$.parameters?.docs?.description}}},Je=[`Playground`,`SettingsPanel`,`Info`,`Placements`,`WithAnchor`,`Controlled`]}))();export{$ as Controlled,X as Info,Z as Placements,q as Playground,Y as SettingsPanel,Q as WithAnchor,Je as __namedExportsOrder,qe as default};