import{r as i,j as e}from"./iframe-pN5SSpXk.js";import{B as x}from"./Button-D89q53aA.js";import{I as pe}from"./Input-7CWnafKH.js";import{T as A}from"./Text-Bb-44_Nm.js";import{u as Qe,c as k}from"./index-UIVsOAyO.js";import{u as M}from"./index-Cy-fmtwe.js";import{c as le,u as Y}from"./index-CT1d3IHj.js";import{P as eo,F as oo,D as to}from"./index-BGbZVSjk.js";import{h as ro,R as no,u as ao}from"./Combination-BGlsqODe.js";import{u as so}from"./index-D-DqYz3P.js";import{u as io,o as co,s as po,f as lo,a as uo,b as mo,h as ho,c as fo,l as vo}from"./floating-ui.react-dom-tWKTNuQX.js";import{P as I}from"./index-BggueAS6.js";import{u as go}from"./index-BSmaOrbf.js";import{u as Po}from"./index-4j5MWGpm.js";import{P as de}from"./index-CXt3bupj.js";import{c as xo}from"./index-eR55nHGW.js";import{a as yo}from"./utils-DclmTqRz.js";/* empty css                */import{S as Co}from"./settings-Cl5JVwUV.js";import"./preload-helper-PD3t1wLK.js";import"./index-BYWyDHmV.js";/* empty css               */import"./Spinner-BfjJ103j.js";/* empty css                */import"./field-DuF07eUY.js";/* empty css              *//* empty css             */import"./index-CVD0sJJS.js";import"./index-CPAz3ktz.js";import"./index-BbrW5SCt.js";import"./createLucideIcon-BxvQYA9G.js";var wo="Arrow",ue=i.forwardRef((o,r)=>{const{children:n,width:s=10,height:a=5,...t}=o;return e.jsx(I.svg,{...t,ref:r,width:s,height:a,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:o.asChild?n:e.jsx("polygon",{points:"0,0 30,0 15,10"})})});ue.displayName=wo;var _o=ue,U="Popper",[me,he]=le(U),[bo,fe]=me(U),ve=o=>{const{__scopePopper:r,children:n}=o,[s,a]=i.useState(null),[t,c]=i.useState(void 0);return e.jsx(bo,{scope:r,anchor:s,onAnchorChange:a,placementState:t,setPlacementState:c,children:n})};ve.displayName=U;var ge="PopperAnchor",Pe=i.forwardRef((o,r)=>{const{__scopePopper:n,virtualRef:s,...a}=o,t=fe(ge,n),c=i.useRef(null),p=t.onAnchorChange,l=i.useCallback(f=>{c.current=f,f&&p(f)},[p]),d=M(r,l),u=i.useRef(null);i.useEffect(()=>{if(!s)return;const f=u.current;u.current=s.current,f!==u.current&&p(u.current)});const m=t.placementState&&Z(t.placementState),h=m?.[0],v=m?.[1];return s?null:e.jsx(I.div,{"data-radix-popper-side":h,"data-radix-popper-align":v,...a,ref:d})});Pe.displayName=ge;var G="PopperContent",[Ao,No]=me(G),xe=i.forwardRef((o,r)=>{const{__scopePopper:n,side:s="bottom",sideOffset:a=0,align:t="center",alignOffset:c=0,arrowPadding:p=0,avoidCollisions:l=!0,collisionBoundary:d=[],collisionPadding:u=0,sticky:m="partial",hideWhenDetached:h=!1,updatePositionStrategy:v="optimized",onPlaced:f,...P}=o,Q=fe(G,n),[W,$e]=i.useState(null),Be=M(r,j=>$e(j)),[z,Ve]=i.useState(null),ee=Po(z),Me=ee?.width??0,oe=ee?.height??0,He=s+(t!=="center"?"-"+t:""),We=typeof u=="number"?u:{top:0,right:0,bottom:0,left:0,...u},te=Array.isArray(d)?d:[d],re=te.length>0,N={padding:We,boundary:te.filter(Oo),altBoundary:re},{refs:ze,floatingStyles:ne,placement:L,isPositioned:D,middlewareData:_}=io({strategy:"fixed",placement:He,whileElementsMounted:(...j)=>fo(...j,{animationFrame:v==="always"}),elements:{reference:Q.anchor},middleware:[co({mainAxis:a+oe,alignmentAxis:c}),l&&po({mainAxis:!0,crossAxis:!1,limiter:m==="partial"?vo():void 0,...N}),l&&lo({...N}),uo({...N,apply:({elements:j,rects:ce,availableWidth:Ge,availableHeight:Ze})=>{const{width:Ke,height:Je}=ce.reference,$=j.floating.style;$.setProperty("--radix-popper-available-width",`${Ge}px`),$.setProperty("--radix-popper-available-height",`${Ze}px`),$.setProperty("--radix-popper-anchor-width",`${Ke}px`),$.setProperty("--radix-popper-anchor-height",`${Je}px`)}}),z&&mo({element:z,padding:p}),Ro({arrowWidth:Me,arrowHeight:oe}),h&&ho({strategy:"referenceHidden",...N,boundary:re?N.boundary:void 0})]}),q=Q.setPlacementState;Y(()=>(q(L),()=>{q(void 0)}),[L,q]);const[ae,se]=Z(L),ie=go(f);Y(()=>{D&&ie?.()},[D,ie]);const Le=_.arrow?.x,qe=_.arrow?.y,Ye=_.arrow?.centerOffset!==0,[Xe,Ue]=i.useState();return Y(()=>{W&&Ue(window.getComputedStyle(W).zIndex)},[W]),e.jsx("div",{ref:ze.setFloating,"data-radix-popper-content-wrapper":"",style:{...ne,transform:D?ne.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Xe,"--radix-popper-transform-origin":[_.transformOrigin?.x,_.transformOrigin?.y].join(" "),..._.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:o.dir,children:e.jsx(Ao,{scope:n,placedSide:ae,placedAlign:se,onArrowChange:Ve,arrowX:Le,arrowY:qe,shouldHideArrow:Ye,children:e.jsx(I.div,{"data-side":ae,"data-align":se,...P,ref:Be,style:{...P.style,animation:D?void 0:"none"}})})})});xe.displayName=G;var ye="PopperArrow",jo={top:"bottom",right:"left",bottom:"top",left:"right"},Ce=i.forwardRef(function(r,n){const{__scopePopper:s,...a}=r,t=No(ye,s),c=jo[t.placedSide];return e.jsx("span",{ref:t.onArrowChange,style:{position:"absolute",left:t.arrowX,top:t.arrowY,[c]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[t.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[t.placedSide],visibility:t.shouldHideArrow?"hidden":void 0},children:e.jsx(_o,{...a,ref:n,style:{...a.style,display:"block"}})})});Ce.displayName=ye;function Oo(o){return o!==null}var Ro=o=>({name:"transformOrigin",options:o,fn(r){const{placement:n,rects:s,middlewareData:a}=r,c=a.arrow?.centerOffset!==0,p=c?0:o.arrowWidth,l=c?0:o.arrowHeight,[d,u]=Z(n),m={start:"0%",center:"50%",end:"100%"}[u],h=(a.arrow?.x??0)+p/2,v=(a.arrow?.y??0)+l/2;let f="",P="";return d==="bottom"?(f=c?m:`${h}px`,P=`${-l}px`):d==="top"?(f=c?m:`${h}px`,P=`${s.floating.height+l}px`):d==="right"?(f=`${-l}px`,P=c?m:`${v}px`):d==="left"&&(f=`${s.floating.width+l}px`,P=c?m:`${v}px`),{data:{x:f,y:P}}}});function Z(o){const[r,n="center"]=o.split("-");return[r,n]}var So=ve,we=Pe,To=xe,Eo=Ce,H="Popover",[_e]=le(H,[he]),F=he(),[ko,w]=_e(H),be=o=>{const{__scopePopover:r,children:n,open:s,defaultOpen:a,onOpenChange:t,modal:c=!1}=o,p=F(r),l=i.useRef(null),[d,u]=i.useState(!1),[m,h]=Qe({prop:s,defaultProp:a??!1,onChange:t,caller:H});return e.jsx(So,{...p,children:e.jsx(ko,{scope:r,contentId:so(),triggerRef:l,open:m,onOpenChange:h,onOpenToggle:i.useCallback(()=>h(v=>!v),[h]),hasCustomAnchor:d,onCustomAnchorAdd:i.useCallback(()=>u(!0),[]),onCustomAnchorRemove:i.useCallback(()=>u(!1),[]),modal:c,children:n})})};be.displayName=H;var Ae="PopoverAnchor",Ne=i.forwardRef((o,r)=>{const{__scopePopover:n,...s}=o,a=w(Ae,n),t=F(n),{onCustomAnchorAdd:c,onCustomAnchorRemove:p}=a;return i.useEffect(()=>(c(),()=>p()),[c,p]),e.jsx(we,{...t,...s,ref:r})});Ne.displayName=Ae;var je="PopoverTrigger",Oe=i.forwardRef((o,r)=>{const{__scopePopover:n,...s}=o,a=w(je,n),t=F(n),c=M(r,a.triggerRef),p=e.jsx(I.button,{type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.open?a.contentId:void 0,"data-state":Ie(a.open),...s,ref:c,onClick:k(o.onClick,a.onOpenToggle)});return a.hasCustomAnchor?p:e.jsx(we,{asChild:!0,...t,children:p})});Oe.displayName=je;var K="PopoverPortal",[Io,Fo]=_e(K,{forceMount:void 0}),Re=o=>{const{__scopePopover:r,forceMount:n,children:s,container:a}=o,t=w(K,r);return e.jsx(Io,{scope:r,forceMount:n,children:e.jsx(de,{present:n||t.open,children:e.jsx(eo,{asChild:!0,container:a,children:s})})})};Re.displayName=K;var b="PopoverContent",Se=i.forwardRef((o,r)=>{const n=Fo(b,o.__scopePopover),{forceMount:s=n.forceMount,...a}=o,t=w(b,o.__scopePopover);return e.jsx(de,{present:s||t.open,children:t.modal?e.jsx($o,{...a,ref:r}):e.jsx(Bo,{...a,ref:r})})});Se.displayName=b;var Do=xo("PopoverContent.RemoveScroll"),$o=i.forwardRef((o,r)=>{const n=w(b,o.__scopePopover),s=i.useRef(null),a=M(r,s),t=i.useRef(!1);return i.useEffect(()=>{const c=s.current;if(c)return ro(c)},[]),e.jsx(no,{as:Do,allowPinchZoom:!0,children:e.jsx(Te,{...o,ref:a,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:k(o.onCloseAutoFocus,c=>{c.preventDefault(),t.current||n.triggerRef.current?.focus()}),onPointerDownOutside:k(o.onPointerDownOutside,c=>{const p=c.detail.originalEvent,l=p.button===0&&p.ctrlKey===!0,d=p.button===2||l;t.current=d},{checkForDefaultPrevented:!1}),onFocusOutside:k(o.onFocusOutside,c=>c.preventDefault(),{checkForDefaultPrevented:!1})})})}),Bo=i.forwardRef((o,r)=>{const n=w(b,o.__scopePopover),s=i.useRef(!1),a=i.useRef(!1);return e.jsx(Te,{...o,ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{o.onCloseAutoFocus?.(t),t.defaultPrevented||(s.current||n.triggerRef.current?.focus(),t.preventDefault()),s.current=!1,a.current=!1},onInteractOutside:t=>{o.onInteractOutside?.(t),t.defaultPrevented||(s.current=!0,t.detail.originalEvent.type==="pointerdown"&&(a.current=!0));const c=t.target;n.triggerRef.current?.contains(c)&&t.preventDefault(),t.detail.originalEvent.type==="focusin"&&a.current&&t.preventDefault()}})}),Te=i.forwardRef((o,r)=>{const{__scopePopover:n,trapFocus:s,onOpenAutoFocus:a,onCloseAutoFocus:t,disableOutsidePointerEvents:c,onEscapeKeyDown:p,onPointerDownOutside:l,onFocusOutside:d,onInteractOutside:u,...m}=o,h=w(b,n),v=F(n);return ao(),e.jsx(oo,{asChild:!0,loop:!0,trapped:s,onMountAutoFocus:a,onUnmountAutoFocus:t,children:e.jsx(to,{asChild:!0,disableOutsidePointerEvents:c,onInteractOutside:u,onEscapeKeyDown:p,onPointerDownOutside:l,onFocusOutside:d,onDismiss:()=>h.onOpenChange(!1),deferPointerDownOutside:!0,children:e.jsx(To,{"data-state":Ie(h.open),role:"dialog",id:h.contentId,...v,...m,ref:r,style:{...m.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),Ee="PopoverClose",ke=i.forwardRef((o,r)=>{const{__scopePopover:n,...s}=o,a=w(Ee,n);return e.jsx(I.button,{type:"button",...s,ref:r,onClick:k(o.onClick,()=>a.onOpenChange(!1))})});ke.displayName=Ee;var Vo="PopoverArrow",Mo=i.forwardRef((o,r)=>{const{__scopePopover:n,...s}=o,a=F(n);return e.jsx(Eo,{...a,...s,ref:r})});Mo.displayName=Vo;function Ie(o){return o?"open":"closed"}var Ho=be,Wo=Ne,Fe=Oe,zo=Re,De=Se,Lo=ke;const y=Ho,X=Wo,C=i.forwardRef(({children:o,...r},n)=>{const s=typeof o=="string"||typeof o=="number";return e.jsx(Fe,{ref:n,asChild:!s,...r,children:o})});C.displayName=Fe.displayName;const g=i.forwardRef(({className:o,align:r="center",sideOffset:n=8,container:s,...a},t)=>e.jsx(zo,{container:s,children:e.jsx(De,{ref:t,align:r,sideOffset:n,className:yo("st-popover__content",o),...a})}));g.displayName=De.displayName;const V=Lo;try{y.displayName="Popover",y.__docgenInfo={description:"Click-triggered popover root. Unlike `Tooltip`, Radix Popover has no\n`Provider`, so the root is used directly. `open` / `defaultOpen` /\n`onOpenChange` / `modal` are透過する (Radix props).\n\n`modal` defaults to Radix's `false` — Popover is non-modal: the rest of the\npage stays interactive, there is no scroll lock, and Tab can leave the\npanel. Set `modal` when a focus trap + scroll lock is required.",displayName:"Popover",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx",methods:[],props:{},tags:{}}}catch{}try{X.displayName="PopoverAnchor",X.__docgenInfo={description:"Optional positioning anchor. Render it around the element the content should\nbe positioned against when that element is not the `PopoverTrigger`.",displayName:"PopoverAnchor",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx",methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:"schatten/node_modules/.pnpm/@radix-ui+react-primitive@2.1.6_@types+react-dom@19.2.3_@types+react@19.2.17__@types+re_2b211ae514f45e2eda250184528d6c49/node_modules/@radix-ui/react-primitive/dist/index.d.mts",name:"TypeLiteral"}],description:"",name:"asChild",required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}try{V.displayName="PopoverClose",V.__docgenInfo={description:"Closes the popover. Wrap a `<Button>` with `asChild` for a styled close\naction inside the panel.",displayName:"PopoverClose",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx",methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:"schatten/node_modules/.pnpm/@radix-ui+react-primitive@2.1.6_@types+react-dom@19.2.3_@types+react@19.2.17__@types+re_2b211ae514f45e2eda250184528d6c49/node_modules/@radix-ui/react-primitive/dist/index.d.mts",name:"TypeLiteral"}],description:"",name:"asChild",required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}try{g.displayName="PopoverContent",g.__docgenInfo={description:"",displayName:"PopoverContent",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx",methods:[],props:{side:{defaultValue:{value:"'bottom'"},declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"}],description:"The preferred side of the trigger to render the popover against.",name:"side",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"},required:!1,tags:{default:"'bottom'"},type:{name:"enum",raw:'"left" | "right" | "top" | "bottom"',value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},align:{defaultValue:{value:"center"},declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"}],description:"The alignment against the trigger.",name:"align",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"},required:!1,tags:{default:"'center'"},type:{name:"enum",raw:'"start" | "end" | "center"',value:[{value:'"start"'},{value:'"end"'},{value:'"center"'}]}},container:{defaultValue:null,declarations:[{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"}],description:`Custom container element for the portal. Useful for rendering inside a
Dialog or Drawer.`,name:"container",parent:{fileName:"schatten/src/components/lv1/Popover/Popover.tsx",name:"PopoverContentProps"},required:!1,tags:{},type:{name:"Element | DocumentFragment | null"}},asChild:{defaultValue:null,declarations:[{fileName:"schatten/node_modules/.pnpm/@radix-ui+react-primitive@2.1.6_@types+react-dom@19.2.3_@types+react@19.2.17__@types+re_2b211ae514f45e2eda250184528d6c49/node_modules/@radix-ui/react-primitive/dist/index.d.mts",name:"TypeLiteral"}],description:"",name:"asChild",required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}try{C.displayName="PopoverTrigger",C.__docgenInfo={description:"",displayName:"PopoverTrigger",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Popover/Popover.tsx",methods:[],props:{},tags:{}}}catch{}const wt={title:"Components/lv1/Popover",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{side:{description:"The preferred side of the trigger to render the popover against.",control:"select",options:["top","right","bottom","left"],table:{type:{summary:'"top" | "right" | "bottom" | "left"'},defaultValue:{summary:"bottom"}}},align:{description:"The alignment against the trigger.",control:"select",options:["start","center","end"],table:{type:{summary:'"start" | "center" | "end"'},defaultValue:{summary:"center"}}}}},B={name:"Playground",args:{side:"bottom",align:"center"},render:o=>e.jsxs(y,{children:[e.jsx(C,{children:e.jsx(x,{variant:"secondary",children:"Open popover"})}),e.jsx(g,{...o,children:e.jsx(A,{children:"Place any content inside the panel."})})]})},J={layout:"padded",docs:{disable:!0},a11y:{config:{rules:[{id:"aria-hidden-focus",enabled:!1}]}}},O={name:"Settings Panel (VRT)",parameters:J,render:()=>e.jsxs(y,{defaultOpen:!0,children:[e.jsx(C,{children:e.jsx(x,{variant:"secondary",icon:Co,children:"Settings"})}),e.jsx(g,{className:"w-72",children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(A,{variant:"heading",size:"sm",children:"Dimensions"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("label",{className:"flex items-center justify-between gap-4 text-sm",htmlFor:"pop-w",children:["Width",e.jsx(pe,{id:"pop-w",defaultValue:"100%",className:"w-32"})]}),e.jsxs("label",{className:"flex items-center justify-between gap-4 text-sm",htmlFor:"pop-h",children:["Height",e.jsx(pe,{id:"pop-h",defaultValue:"auto",className:"w-32"})]})]}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(V,{asChild:!0,children:e.jsx(x,{variant:"tertiary",size:"sm",children:"Cancel"})}),e.jsx(V,{asChild:!0,children:e.jsx(x,{size:"sm",children:"Save"})})]})]})})]})},R={name:"Info (VRT)",parameters:J,render:()=>e.jsxs(y,{defaultOpen:!0,children:[e.jsx(C,{children:e.jsx(x,{variant:"tertiary",children:"About"})}),e.jsx(g,{className:"w-64",children:e.jsx(A,{children:"Popover renders click-triggered content over the page. Press Escape or click outside to dismiss."})})]})},S={name:"Placements (VRT)",parameters:J,render:()=>e.jsx("div",{className:"flex flex-col items-center gap-32 py-16",children:["left","top","bottom","right"].map(o=>e.jsxs(y,{defaultOpen:!0,children:[e.jsx(C,{children:e.jsxs(x,{variant:"secondary",children:["side: ",o]})}),e.jsx(g,{side:o,className:"w-40",onOpenAutoFocus:r=>r.preventDefault(),children:e.jsxs(A,{children:["Opens on ",o,"."]})})]},o))})},T={name:"With Anchor",parameters:{docs:{disable:!0}},render:()=>{const[o,r]=i.useState(!0);return e.jsxs("div",{className:"flex flex-col items-center gap-6 py-8",children:[e.jsxs(y,{open:o,onOpenChange:r,children:[e.jsx(X,{asChild:!0,children:e.jsx("div",{className:"rounded border border-border-strong px-6 py-3 text-sm text-foreground-muted",children:"Positioning anchor"})}),e.jsx(g,{side:"bottom",className:"w-56",children:e.jsx(A,{children:"Positioned against the anchor box, not the toggle button."})})]}),e.jsx(x,{variant:"secondary",onClick:()=>r(n=>!n),children:"Toggle (separate button)"})]})}},E={name:"Controlled",parameters:{docs:{disable:!0}},render:()=>{const[o,r]=i.useState(!1);return e.jsxs(y,{open:o,onOpenChange:r,children:[e.jsx(C,{children:e.jsxs(x,{variant:"secondary",children:[o?"Close":"Open"," popover"]})}),e.jsx(g,{children:e.jsx(A,{children:"Controlled content."})})]})}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:'A settings panel with a heading, form controls, and a close action — the\ncanonical "click to reveal editable content" use case. Pinned `defaultOpen`\nso VRT can capture the portaled content in one frame.',...O.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:"Plain informational panel — minimal content, default placement.",...R.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:"All four `side` placements, pinned open. Triggers are stacked in a column\nwith generous spacing so each portaled panel opens clear of its neighbours\n(`left` / `right` extend horizontally; `top` / `bottom` diverge vertically).",...S.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:"`PopoverAnchor` decouples the positioning reference from the open trigger:\nthe panel is positioned against the bordered anchor box, while a **separate**\nbutton toggles the controlled `open` state. Note this pattern uses\ncontrolled `open` rather than `PopoverTrigger` — rendering both an explicit\n`PopoverAnchor` and a `PopoverTrigger` gives Radix two competing anchors and\nthe content loses its positioning reference. Interactive (not in the VRT\nroster); the anchor wiring is pinned by the unit test.",...T.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:"Controlled open state via `open` / `onOpenChange`.",...E.parameters?.docs?.description}}};const _t=["Playground","SettingsPanel","Info","Placements","WithAnchor","Controlled"];export{E as Controlled,R as Info,S as Placements,B as Playground,O as SettingsPanel,T as WithAnchor,_t as __namedExportsOrder,wt as default};
