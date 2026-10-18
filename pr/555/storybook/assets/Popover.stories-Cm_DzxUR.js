import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{X as n,n as r}from"./iframe-D33Uj0mn.js";import{n as i,t as a}from"./dist-DBMbgUYI.js";import{a as o,i as s,n as c,o as l}from"./dist-BVX5pK9D.js";import{r as u,t as d}from"./dist-4NwSa4U7.js";import{n as f,t as p}from"./utils-BUtSjyiS.js";import{n as m,t as h}from"./settings-BwulJjFO.js";import{n as g,t as _}from"./Button-93e0UBS1.js";import{i as ee,n as te,r as v,t as ne}from"./dist-C6pSUKAk.js";import{n as re,t as ie}from"./dist-DZYhkYma.js";import{n as y,t as ae}from"./dist-BLSoOH9J.js";import{i as oe,n as se,r as ce,t as le}from"./es2015-Crk8DkS7.js";import{c as ue,d as de,f as fe,h as pe,i as me,l as he,m as ge,n as _e,o as ve,p as ye,r as be,s as b,t as xe,u as Se}from"./dist-CfNp3QL0.js";import{n as Ce,t as we}from"./dist-CS96zmmF.js";import{n as Te,t as Ee}from"./Input-O5jQSzfp.js";import{n as De,t as x}from"./Text-C5MPgc7y.js";import"./Popover-DePiIMvv.js";function S(e){return e?`open`:`closed`}function Oe(...e){let t=new Set;for(let n of e)if(typeof n==`string`)for(let e of String(n).trim().split(/\s+/))e&&t.add(e);return t.size>0?Array.from(t).join(` `):void 0}var C,w,ke,T,E,D,Ae,O,je,k,Me,Ne,A,Pe,j,M,Fe,Ie,Le,N,P,Re,ze,Be,F,Ve,I;function He(){return(He=t((()=>{C=e(n(),1),ee(),o(),i(),pe(),we(),de(),ae(),ue(),_e(),re(),u(),s(),ne(),se(),oe(),w=r(),ke=Object.defineProperty,T=(e,t)=>ke(e,`name`,{value:t,configurable:!0}),E=`Popover`,[D,Ae]=a(E,[b]),O=b(),[je,k]=D(E),Me=T(e=>{let{__scopePopover:t,children:n,open:r,defaultOpen:i,onOpenChange:a,modal:o=!1}=e,s=O(t),c=C.useRef(null),[l,u]=C.useState(!1),[d,f]=C.useState(0),[p,m]=C.useState(0),[h,g]=te({prop:r,defaultProp:i??!1,onChange:a,caller:E});return(0,w.jsx)(be,{...s,children:(0,w.jsx)(je,{scope:t,contentId:y(),titleId:y(),descriptionId:y(),titlePresent:d>0,descriptionPresent:p>0,setTitleCount:f,setDescriptionCount:m,triggerRef:c,open:h,onOpenChange:g,onOpenToggle:C.useCallback(()=>g(e=>!e),[g]),hasCustomAnchor:l,onCustomAnchorAdd:C.useCallback(()=>u(!0),[]),onCustomAnchorRemove:C.useCallback(()=>u(!1),[]),modal:o,children:n})})},`Popover`),Ne=`PopoverAnchor`,A=C.forwardRef(T(function(e,t){let{__scopePopover:n,...r}=e,i=k(Ne,n),a=O(n),{onCustomAnchorAdd:o,onCustomAnchorRemove:s}=i;return C.useEffect(()=>(o(),()=>s()),[o,s]),(0,w.jsx)(me,{...a,...r,ref:t})},`PopoverAnchor`)),Pe=`PopoverTrigger`,j=C.forwardRef(T(function(e,t){let{__scopePopover:n,...r}=e,i=k(Pe,n),a=O(n),o=l(t,i.triggerRef),s=(0,w.jsx)(d.button,{type:`button`,"aria-haspopup":`dialog`,"aria-expanded":i.open,"aria-controls":i.open?i.contentId:void 0,"data-state":S(i.open),...r,ref:o,onClick:v(e.onClick,i.onOpenToggle)});return i.hasCustomAnchor?s:(0,w.jsx)(me,{asChild:!0,...a,children:s})},`PopoverTrigger`)),M=`PopoverPortal`,[Fe,Ie]=D(M,{forceMount:void 0}),Le=T(e=>{let{__scopePopover:t,forceMount:n,children:r,container:i}=e,a=k(M,t);return(0,w.jsx)(Fe,{scope:t,forceMount:n,children:(0,w.jsx)(ie,{present:n||a.open,children:(0,w.jsx)(xe,{asChild:!0,container:i,children:r})})})},`PopoverPortal`),N=`PopoverContent`,P=C.forwardRef(T(function(e,t){let n=Ie(N,e.__scopePopover),{forceMount:r=n.forceMount,...i}=e,a=k(N,e.__scopePopover);return(0,w.jsx)(ie,{present:r||a.open,children:a.modal?(0,w.jsx)(ze,{...i,ref:t}):(0,w.jsx)(Be,{...i,ref:t})})},`PopoverContent`)),Re=c(`PopoverContent.RemoveScroll`),ze=C.forwardRef(T(function(e,t){let n=k(N,e.__scopePopover),r=C.useRef(null),i=l(t,r),a=C.useRef(!1),{nodes:o,registry:s}=ye();return C.useEffect(()=>{let e=r.current;if(e)return le(e)},[]),(0,w.jsx)(ce,{as:Re,allowPinchZoom:!0,shards:C.useMemo(()=>[r,...o.map(e=>({current:e}))],[r,o]),children:(0,w.jsx)(F,{...e,ref:i,branchNodes:o,branchRegistry:s,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:v(e.onCloseAutoFocus,e=>{e.preventDefault(),a.current||n.triggerRef.current?.focus()}),onPointerDownOutside:v(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=t.button===0&&t.ctrlKey===!0,r=t.button===2||n;a.current=r},{checkForDefaultPrevented:!1}),onFocusOutside:v(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1})})})},`PopoverContentModal`)),Be=C.forwardRef(T(function(e,t){let n=k(N,e.__scopePopover),r=C.useRef(!1),i=C.useRef(!1);return(0,w.jsx)(F,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(r.current||n.triggerRef.current?.focus(),t.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(r.current=!0,t.detail.originalEvent.type===`pointerdown`&&(i.current=!0));let a=t.target;n.triggerRef.current?.contains(a)&&t.preventDefault(),t.detail.originalEvent.type===`focusin`&&i.current&&t.preventDefault()}})},`PopoverContentNonModal`)),F=C.forwardRef(T(function(e,t){let{__scopePopover:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:a,disableOutsidePointerEvents:o,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:u,onInteractOutside:d,"aria-describedby":f,branchNodes:p,branchRegistry:m,...h}=e,g=k(N,n),_=O(n),[ee,te]=C.useState(null),v=l(t,te);return fe(ee),Ce(),(0,w.jsx)(Se,{registry:m,children:(0,w.jsx)(he,{asChild:!0,loop:!0,trapped:r,branches:p,onMountAutoFocus:i,onUnmountAutoFocus:a,children:(0,w.jsx)(ge,{asChild:!0,disableOutsidePointerEvents:o,onInteractOutside:d,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:u,onDismiss:()=>g.onOpenChange(!1),deferPointerDownOutside:!0,children:(0,w.jsx)(ve,{"data-state":S(g.open),role:`dialog`,id:g.contentId,"aria-labelledby":g.titlePresent?g.titleId:void 0,"aria-describedby":g.descriptionPresent?Oe(f,g.descriptionId):f,..._,...h,ref:v,style:{...h.style,"--radix-popover-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-popover-content-available-width":`var(--radix-popper-available-width)`,"--radix-popover-content-available-height":`var(--radix-popper-available-height)`,"--radix-popover-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-popover-trigger-height":`var(--radix-popper-anchor-height)`}})})})})},`PopoverContentImpl`)),Ve=`PopoverClose`,I=C.forwardRef(T(function(e,t){let{__scopePopover:n,...r}=e,i=k(Ve,n);return(0,w.jsx)(d.button,{type:`button`,...r,ref:t,onClick:v(e.onClick,()=>i.onOpenChange(!1))})},`PopoverClose`)),T(S,`getState`),T(Oe,`concatAriaDescribedby`)})))()}var L,R,z,B,V,H,U;function W(){return(W=t((()=>{He(),L=n(),f(),R=r(),z=e=>(0,R.jsx)(Me,{...e}),z.displayName=`Popover`,B=(0,L.forwardRef)(({children:e,...t},n)=>{let r=typeof e==`string`||typeof e==`number`;return(0,R.jsx)(A,{ref:n,asChild:!r,...t,children:e})}),B.displayName=A.displayName,V=(0,L.forwardRef)(({children:e,...t},n)=>{let r=typeof e==`string`||typeof e==`number`;return(0,R.jsx)(j,{ref:n,asChild:!r,...t,children:e})}),V.displayName=j.displayName,H=(0,L.forwardRef)(({className:e,align:t=`center`,sideOffset:n=8,container:r,...i},a)=>(0,R.jsx)(Le,{container:r,children:(0,R.jsx)(P,{ref:a,align:t,sideOffset:n,className:p(`st-popover__content`,e),...i})})),H.displayName=P.displayName,U=(0,L.forwardRef)(({children:e,...t},n)=>{let r=typeof e==`string`||typeof e==`number`;return(0,R.jsx)(I,{ref:n,asChild:!r,...t,children:e})}),U.displayName=I.displayName;try{z.displayName=`Popover`,z.__docgenInfo={description:"Click-triggered popover root. Unlike `Tooltip`, Radix Popover has no\n`Provider`, so the root wraps `PopoverPrimitive.Root` directly.",displayName:`Popover`,filePath:`/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx`,methods:[],props:{open:{defaultValue:null,declarations:[{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverProps`}],description:`Controlled open state.`,name:`open`,parent:{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverProps`},required:!1,tags:{},type:{name:`boolean`}},defaultOpen:{defaultValue:null,declarations:[{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverProps`}],description:`Initial open state (uncontrolled).`,name:`defaultOpen`,parent:{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverProps`},required:!1,tags:{},type:{name:`boolean`}},onOpenChange:{defaultValue:null,declarations:[{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverProps`}],description:`Fired when the open state changes.`,name:`onOpenChange`,parent:{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverProps`},required:!1,tags:{},type:{name:`((open: boolean) => void)`}},modal:{defaultValue:{value:`false`},declarations:[{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverProps`}],description:`Whether the popover traps focus and locks scroll.

Defaults to \`false\` — Popover is non-modal: the rest of the page stays
interactive, there is no scroll lock, and Tab can leave the panel. Set
\`modal\` when a focus trap + scroll lock is required.`,name:`modal`,parent:{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}}},tags:{}}}catch{}try{B.displayName=`PopoverAnchor`,B.__docgenInfo={description:"Optional positioning anchor. Render it around the element the content should\nbe positioned against when that element is not the `PopoverTrigger`.\n\nLike the triggers, `asChild` is not part of the public API — an element\nchild is merged onto directly (internal `asChild`), while a text child gets\nRadix's own `<div>` wrapper.",displayName:`PopoverAnchor`,filePath:`/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx`,methods:[],props:{},tags:{}}}catch{}try{U.displayName=`PopoverClose`,U.__docgenInfo={description:"Closes the popover. Like the triggers, `asChild` is not part of the public\nAPI — wrap a `<Button>` (element child) and the close behaviour merges onto\nit, while a string child lets Radix render its own `<button>`.",displayName:`PopoverClose`,filePath:`/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx`,methods:[],props:{},tags:{}}}catch{}try{H.displayName=`PopoverContent`,H.__docgenInfo={description:``,displayName:`PopoverContent`,filePath:`/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx`,methods:[],props:{side:{defaultValue:{value:`'bottom'`},declarations:[{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverContentProps`}],description:`The preferred side of the trigger to render the popover against.`,name:`side`,parent:{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverContentProps`},required:!1,tags:{default:`'bottom'`},type:{name:`enum`,raw:`"top" | "right" | "bottom" | "left"`,value:[{value:`"top"`},{value:`"right"`},{value:`"bottom"`},{value:`"left"`}]}},align:{defaultValue:{value:`center`},declarations:[{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverContentProps`}],description:`The alignment against the trigger.`,name:`align`,parent:{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverContentProps`},required:!1,tags:{default:`'center'`},type:{name:`enum`,raw:`"end" | "start" | "center"`,value:[{value:`"end"`},{value:`"start"`},{value:`"center"`}]}},sideOffset:{defaultValue:{value:`8`},declarations:[{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverContentProps`}],description:`Distance from the trigger, in pixels.`,name:`sideOffset`,parent:{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverContentProps`},required:!1,tags:{default:`8`},type:{name:`number`}},onOpenAutoFocus:{defaultValue:null,declarations:[{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverContentProps`}],description:`Fired when focus moves into the panel on open. Call
\`event.preventDefault()\` to keep focus where it was — e.g. when several
non-modal popovers are pinned open at once.`,name:`onOpenAutoFocus`,parent:{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverContentProps`},required:!1,tags:{},type:{name:`((event: Event) => void)`}},container:{defaultValue:null,declarations:[{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverContentProps`}],description:`Custom container element for the portal. Useful for rendering inside a
Dialog or Drawer.`,name:`container`,parent:{fileName:`schatten/src/components/lv1/Popover/Popover.tsx`,name:`PopoverContentProps`},required:!1,tags:{},type:{name:`Element | DocumentFragment | null`}}},tags:{}}}catch{}try{V.displayName=`PopoverTrigger`,V.__docgenInfo={description:``,displayName:`PopoverTrigger`,filePath:`/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var G,K,Ue,q,J,Y,X,Z,Q,$,We;function Ge(){return(Ge=t((()=>{m(),G=n(),g(),Te(),De(),W(),K=r(),Ue={title:`Components/lv1/Popover`,component:H,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{side:{description:`The preferred side of the trigger to render the popover against.`,control:`select`,options:[`top`,`right`,`bottom`,`left`],table:{type:{summary:`"top" | "right" | "bottom" | "left"`},defaultValue:{summary:`bottom`}}},align:{description:`The alignment against the trigger.`,control:`select`,options:[`start`,`center`,`end`],table:{type:{summary:`"start" | "center" | "end"`},defaultValue:{summary:`center`}}}}},q={name:`Playground`,args:{side:`bottom`,align:`center`},render:e=>(0,K.jsxs)(z,{children:[(0,K.jsx)(V,{children:(0,K.jsx)(_,{variant:`secondary`,children:`Open popover`})}),(0,K.jsx)(H,{...e,children:(0,K.jsx)(x,{children:`Place any content inside the panel.`})})]})},J={layout:`padded`,docs:{disable:!0},a11y:{config:{rules:[{id:`aria-hidden-focus`,enabled:!1}]}}},Y={name:`Settings Panel (VRT)`,parameters:J,render:()=>(0,K.jsxs)(z,{defaultOpen:!0,children:[(0,K.jsx)(V,{children:(0,K.jsx)(_,{variant:`secondary`,icon:h,children:`Settings`})}),(0,K.jsx)(H,{className:`w-72`,children:(0,K.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,K.jsx)(x,{variant:`heading`,size:`sm`,children:`Dimensions`}),(0,K.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,K.jsxs)(`label`,{className:`flex items-center justify-between gap-4 text-sm`,htmlFor:`pop-w`,children:[`Width`,(0,K.jsx)(Ee,{id:`pop-w`,defaultValue:`100%`,className:`w-32`})]}),(0,K.jsxs)(`label`,{className:`flex items-center justify-between gap-4 text-sm`,htmlFor:`pop-h`,children:[`Height`,(0,K.jsx)(Ee,{id:`pop-h`,defaultValue:`auto`,className:`w-32`})]})]}),(0,K.jsxs)(`div`,{className:`flex justify-end gap-2`,children:[(0,K.jsx)(U,{children:(0,K.jsx)(_,{variant:`tertiary`,size:`sm`,children:`Cancel`})}),(0,K.jsx)(U,{children:(0,K.jsx)(_,{size:`sm`,children:`Save`})})]})]})})]})},X={name:`Info (VRT)`,parameters:J,render:()=>(0,K.jsxs)(z,{defaultOpen:!0,children:[(0,K.jsx)(V,{children:(0,K.jsx)(_,{variant:`tertiary`,children:`About`})}),(0,K.jsx)(H,{className:`w-64`,children:(0,K.jsx)(x,{children:`Popover renders click-triggered content over the page. Press Escape or click outside to dismiss.`})})]})},Z={name:`Placements (VRT)`,parameters:J,render:()=>(0,K.jsx)(`div`,{className:`flex flex-col items-center gap-32 py-16`,children:[`left`,`top`,`bottom`,`right`].map(e=>(0,K.jsxs)(z,{defaultOpen:!0,children:[(0,K.jsx)(V,{children:(0,K.jsxs)(_,{variant:`secondary`,children:[`side: `,e]})}),(0,K.jsx)(H,{side:e,className:`w-40`,onOpenAutoFocus:e=>e.preventDefault(),children:(0,K.jsxs)(x,{children:[`Opens on `,e,`.`]})})]},e))})},Q={name:`With Anchor`,parameters:{docs:{disable:!0}},render:()=>{let[e,t]=(0,G.useState)(!0);return(0,K.jsxs)(`div`,{className:`flex flex-col items-center gap-6 py-8`,children:[(0,K.jsxs)(z,{open:e,onOpenChange:t,children:[(0,K.jsx)(B,{children:(0,K.jsx)(`div`,{className:`rounded border border-border-strong px-6 py-3 text-sm text-foreground-muted`,children:`Positioning anchor`})}),(0,K.jsx)(H,{side:`bottom`,className:`w-56`,children:(0,K.jsx)(x,{children:`Positioned against the anchor box, not the toggle button.`})})]}),(0,K.jsx)(_,{variant:`secondary`,onClick:()=>t(e=>!e),children:`Toggle (separate button)`})]})}},$={name:`Controlled`,parameters:{docs:{disable:!0}},render:()=>{let[e,t]=(0,G.useState)(!1);return(0,K.jsxs)(z,{open:e,onOpenChange:t,children:[(0,K.jsx)(V,{children:(0,K.jsxs)(_,{variant:`secondary`,children:[e?`Close`:`Open`,` popover`]})}),(0,K.jsx)(H,{children:(0,K.jsx)(x,{children:`Controlled content.`})})]})}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:"Controlled open state via `open` / `onOpenChange`.",...$.parameters?.docs?.description}}},We=[`Playground`,`SettingsPanel`,`Info`,`Placements`,`WithAnchor`,`Controlled`]})))()}Ge();export{$ as Controlled,X as Info,Z as Placements,q as Playground,Y as SettingsPanel,Q as WithAnchor,We as __namedExportsOrder,Ue as default};