import{r as s,j as t}from"./iframe-hb5T65Ij.js";import{B as _}from"./Button-BliN2v0H.js";import{b as we,P as Pe,d as w,c as Re,f as Ee}from"./index-qAPIfBu3.js";import{u as ce}from"./index-RpaJvdtG.js";import{R as Ne,A as De,P as Be,c as de,D as Ie,C as Oe,a as Se,b as ke}from"./index-D7PELFty.js";import{u as Ae}from"./index-xDjcxiOh.js";import{P as pe}from"./index-C-HnyUZM.js";import{c as ue}from"./index-DHk-Frat.js";import"./preload-helper-C30NFVqV.js";import"./index-DUMlBwvy.js";import"./index-DWoaeKPU.js";import"./chevron-up-d1POIxb2.js";import"./Spinner-JzH0qtcM.js";import"./index-8RBvluId.js";var[L]=Re("Tooltip",[de]),H=de(),me="TooltipProvider",Le=700,M="tooltip.open",[He,F]=L(me),he=e=>{const{__scopeTooltip:r,delayDuration:o=Le,skipDelayDuration:n=300,disableHoverableContent:i=!1,children:l}=e,c=s.useRef(!0),h=s.useRef(!1),a=s.useRef(0);return s.useEffect(()=>{const u=a.current;return()=>window.clearTimeout(u)},[]),t.jsx(He,{scope:r,isOpenDelayedRef:c,delayDuration:o,onOpen:s.useCallback(()=>{window.clearTimeout(a.current),c.current=!1},[]),onClose:s.useCallback(()=>{window.clearTimeout(a.current),a.current=window.setTimeout(()=>c.current=!0,n)},[n]),isPointerInTransitRef:h,onPointerInTransitChange:s.useCallback(u=>{h.current=u},[]),disableHoverableContent:i,children:l})};he.displayName=me;var D="Tooltip",[Me,B]=L(D),fe=e=>{const{__scopeTooltip:r,children:o,open:n,defaultOpen:i,onOpenChange:l,disableHoverableContent:c,delayDuration:h}=e,a=F(D,e.__scopeTooltip),u=H(r),[d,m]=s.useState(null),f=Ae(),p=s.useRef(0),g=c??a.disableHoverableContent,C=h??a.delayDuration,x=s.useRef(!1),[j,b]=we({prop:n,defaultProp:i??!1,onChange:z=>{z?(a.onOpen(),document.dispatchEvent(new CustomEvent(M))):a.onClose(),l==null||l(z)},caller:D}),R=s.useMemo(()=>j?x.current?"delayed-open":"instant-open":"closed",[j]),E=s.useCallback(()=>{window.clearTimeout(p.current),p.current=0,x.current=!1,b(!0)},[b]),N=s.useCallback(()=>{window.clearTimeout(p.current),p.current=0,b(!1)},[b]),q=s.useCallback(()=>{window.clearTimeout(p.current),p.current=window.setTimeout(()=>{x.current=!0,b(!0),p.current=0},C)},[C,b]);return s.useEffect(()=>()=>{p.current&&(window.clearTimeout(p.current),p.current=0)},[]),t.jsx(Ne,{...u,children:t.jsx(Me,{scope:r,contentId:f,open:j,stateAttribute:R,trigger:d,onTriggerChange:m,onTriggerEnter:s.useCallback(()=>{a.isOpenDelayedRef.current?q():E()},[a.isOpenDelayedRef,q,E]),onTriggerLeave:s.useCallback(()=>{g?N():(window.clearTimeout(p.current),p.current=0)},[N,g]),onOpen:E,onClose:N,disableHoverableContent:g,children:o})})};fe.displayName=D;var V="TooltipTrigger",Te=s.forwardRef((e,r)=>{const{__scopeTooltip:o,...n}=e,i=B(V,o),l=F(V,o),c=H(o),h=s.useRef(null),a=ce(r,h,i.onTriggerChange),u=s.useRef(!1),d=s.useRef(!1),m=s.useCallback(()=>u.current=!1,[]);return s.useEffect(()=>()=>document.removeEventListener("pointerup",m),[m]),t.jsx(De,{asChild:!0,...c,children:t.jsx(Pe.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...n,ref:a,onPointerMove:w(e.onPointerMove,f=>{f.pointerType!=="touch"&&!d.current&&!l.isPointerInTransitRef.current&&(i.onTriggerEnter(),d.current=!0)}),onPointerLeave:w(e.onPointerLeave,()=>{i.onTriggerLeave(),d.current=!1}),onPointerDown:w(e.onPointerDown,()=>{i.open&&i.onClose(),u.current=!0,document.addEventListener("pointerup",m,{once:!0})}),onFocus:w(e.onFocus,()=>{u.current||i.onOpen()}),onBlur:w(e.onBlur,i.onClose),onClick:w(e.onClick,i.onClose)})})});Te.displayName=V;var $="TooltipPortal",[Ve,We]=L($,{forceMount:void 0}),ge=e=>{const{__scopeTooltip:r,forceMount:o,children:n,container:i}=e,l=B($,r);return t.jsx(Ve,{scope:r,forceMount:o,children:t.jsx(pe,{present:o||l.open,children:t.jsx(Be,{asChild:!0,container:i,children:n})})})};ge.displayName=$;var P="TooltipContent",xe=s.forwardRef((e,r)=>{const o=We(P,e.__scopeTooltip),{forceMount:n=o.forceMount,side:i="top",...l}=e,c=B(P,e.__scopeTooltip);return t.jsx(pe,{present:n||c.open,children:c.disableHoverableContent?t.jsx(ye,{side:i,...l,ref:r}):t.jsx(Ge,{side:i,...l,ref:r})})}),Ge=s.forwardRef((e,r)=>{const o=B(P,e.__scopeTooltip),n=F(P,e.__scopeTooltip),i=s.useRef(null),l=ce(r,i),[c,h]=s.useState(null),{trigger:a,onClose:u}=o,d=i.current,{onPointerInTransitChange:m}=n,f=s.useCallback(()=>{h(null),m(!1)},[m]),p=s.useCallback((g,C)=>{const x=g.currentTarget,j={x:g.clientX,y:g.clientY},b=ze(j,x.getBoundingClientRect()),R=Ke(j,b),E=Ue(C.getBoundingClientRect()),N=Xe([...R,...E]);h(N),m(!0)},[m]);return s.useEffect(()=>()=>f(),[f]),s.useEffect(()=>{if(a&&d){const g=x=>p(x,d),C=x=>p(x,a);return a.addEventListener("pointerleave",g),d.addEventListener("pointerleave",C),()=>{a.removeEventListener("pointerleave",g),d.removeEventListener("pointerleave",C)}}},[a,d,p,f]),s.useEffect(()=>{if(c){const g=C=>{const x=C.target,j={x:C.clientX,y:C.clientY},b=(a==null?void 0:a.contains(x))||(d==null?void 0:d.contains(x)),R=!Ye(j,c);b?f():R&&(f(),u())};return document.addEventListener("pointermove",g),()=>document.removeEventListener("pointermove",g)}},[a,d,c,u,f]),t.jsx(ye,{...e,ref:l})}),[Fe,$e]=L(D,{isInside:!1}),qe=Ee("TooltipContent"),ye=s.forwardRef((e,r)=>{const{__scopeTooltip:o,children:n,"aria-label":i,onEscapeKeyDown:l,onPointerDownOutside:c,...h}=e,a=B(P,o),u=H(o),{onClose:d}=a;return s.useEffect(()=>(document.addEventListener(M,d),()=>document.removeEventListener(M,d)),[d]),s.useEffect(()=>{if(a.trigger){const m=f=>{const p=f.target;p!=null&&p.contains(a.trigger)&&d()};return window.addEventListener("scroll",m,{capture:!0}),()=>window.removeEventListener("scroll",m,{capture:!0})}},[a.trigger,d]),t.jsx(Ie,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:l,onPointerDownOutside:c,onFocusOutside:m=>m.preventDefault(),onDismiss:d,children:t.jsxs(Oe,{"data-state":a.stateAttribute,...u,...h,ref:r,style:{...h.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[t.jsx(qe,{children:n}),t.jsx(Fe,{scope:o,isInside:!0,children:t.jsx(Se,{id:a.contentId,role:"tooltip",children:i||n})})]})})});xe.displayName=P;var ve="TooltipArrow",Ce=s.forwardRef((e,r)=>{const{__scopeTooltip:o,...n}=e,i=H(o);return $e(ve,o).isInside?null:t.jsx(ke,{...i,...n,ref:r})});Ce.displayName=ve;function ze(e,r){const o=Math.abs(r.top-e.y),n=Math.abs(r.bottom-e.y),i=Math.abs(r.right-e.x),l=Math.abs(r.left-e.x);switch(Math.min(o,n,i,l)){case l:return"left";case i:return"right";case o:return"top";case n:return"bottom";default:throw new Error("unreachable")}}function Ke(e,r,o=5){const n=[];switch(r){case"top":n.push({x:e.x-o,y:e.y+o},{x:e.x+o,y:e.y+o});break;case"bottom":n.push({x:e.x-o,y:e.y-o},{x:e.x+o,y:e.y-o});break;case"left":n.push({x:e.x+o,y:e.y-o},{x:e.x+o,y:e.y+o});break;case"right":n.push({x:e.x-o,y:e.y-o},{x:e.x-o,y:e.y+o});break}return n}function Ue(e){const{top:r,right:o,bottom:n,left:i}=e;return[{x:i,y:r},{x:o,y:r},{x:o,y:n},{x:i,y:n}]}function Ye(e,r){const{x:o,y:n}=e;let i=!1;for(let l=0,c=r.length-1;l<r.length;c=l++){const h=r[l],a=r[c],u=h.x,d=h.y,m=a.x,f=a.y;d>n!=f>n&&o<(m-u)*(n-d)/(f-d)+u&&(i=!i)}return i}function Xe(e){const r=e.slice();return r.sort((o,n)=>o.x<n.x?-1:o.x>n.x?1:o.y<n.y?-1:o.y>n.y?1:0),Je(r)}function Je(e){if(e.length<=1)return e.slice();const r=[];for(let n=0;n<e.length;n++){const i=e[n];for(;r.length>=2;){const l=r[r.length-1],c=r[r.length-2];if((l.x-c.x)*(i.y-c.y)>=(l.y-c.y)*(i.x-c.x))r.pop();else break}r.push(i)}r.pop();const o=[];for(let n=e.length-1;n>=0;n--){const i=e[n];for(;o.length>=2;){const l=o[o.length-1],c=o[o.length-2];if((l.x-c.x)*(i.y-c.y)>=(l.y-c.y)*(i.x-c.x))o.pop();else break}o.push(i)}return o.pop(),r.length===1&&o.length===1&&r[0].x===o[0].x&&r[0].y===o[0].y?r:r.concat(o)}var Qe=he,Ze=fe,et=Te,be=ge,_e=xe,je=Ce;const W=Qe,y=Ze,v=et,K=be,T=s.forwardRef(({className:e,sideOffset:r=4,container:o,children:n,...i},l)=>t.jsx(be,{container:o,children:t.jsx(_e,{ref:l,sideOffset:r,className:ue("z-50 overflow-hidden border border-border-strong bg-background px-3 py-1.5 text-sm text-foreground shadow-md","animate-in fade-in-0 zoom-in-95","data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95","data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...i,children:n})}));T.displayName=_e.displayName;const G=s.forwardRef(({className:e,...r},o)=>t.jsx(je,{ref:o,className:ue("fill-background",e),...r}));G.displayName=je.displayName;try{y.displayName="Tooltip",y.__docgenInfo={description:"",displayName:"Tooltip",props:{}}}catch{}try{G.displayName="TooltipArrow",G.__docgenInfo={description:"",displayName:"TooltipArrow",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{T.displayName="TooltipContent",T.__docgenInfo={description:"",displayName:"TooltipContent",props:{container:{defaultValue:null,description:"",name:"container",required:!1,type:{name:"Element | DocumentFragment | null"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{K.displayName="TooltipPortal",K.__docgenInfo={description:"",displayName:"TooltipPortal",props:{}}}catch{}try{W.displayName="TooltipProvider",W.__docgenInfo={description:"",displayName:"TooltipProvider",props:{}}}catch{}try{v.displayName="TooltipTrigger",v.__docgenInfo={description:"",displayName:"TooltipTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const ft={title:"Components/lv1/Tooltip",component:T,parameters:{layout:"centered"},tags:["autodocs"],decorators:[e=>t.jsx(W,{delayDuration:100,children:t.jsx(e,{})})],argTypes:{side:{description:"The preferred side of the trigger to render the tooltip.",control:"select",options:["top","right","bottom","left"],table:{type:{summary:'"top" | "right" | "bottom" | "left"'},defaultValue:{summary:"top"}}},sideOffset:{description:"Distance in pixels from the trigger.",control:"number",table:{type:{summary:"number"},defaultValue:{summary:"4"}}},align:{description:"The preferred alignment against the trigger.",control:"select",options:["start","center","end"],table:{type:{summary:'"start" | "center" | "end"'},defaultValue:{summary:"center"}}},alignOffset:{description:'An offset in pixels from the "start" or "end" alignment options.',control:"number",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},children:{description:"Content to display in the tooltip.",control:"text",table:{type:{summary:"ReactNode"}}}}},I={name:"Playground",args:{children:"This is helpful information.",side:"top",sideOffset:4,align:"center"},render:e=>t.jsxs(y,{children:[t.jsx(v,{asChild:!0,children:t.jsx(_,{variant:"secondary",children:"Hover me"})}),t.jsx(T,{...e})]})},O={name:"Sides",render:()=>t.jsxs("div",{className:"flex gap-8",children:[t.jsxs(y,{children:[t.jsx(v,{asChild:!0,children:t.jsx(_,{variant:"secondary",children:"Top"})}),t.jsx(T,{side:"top",children:"Tooltip on top"})]}),t.jsxs(y,{children:[t.jsx(v,{asChild:!0,children:t.jsx(_,{variant:"secondary",children:"Right"})}),t.jsx(T,{side:"right",children:"Tooltip on right"})]}),t.jsxs(y,{children:[t.jsx(v,{asChild:!0,children:t.jsx(_,{variant:"secondary",children:"Bottom"})}),t.jsx(T,{side:"bottom",children:"Tooltip on bottom"})]}),t.jsxs(y,{children:[t.jsx(v,{asChild:!0,children:t.jsx(_,{variant:"secondary",children:"Left"})}),t.jsx(T,{side:"left",children:"Tooltip on left"})]})]})},S={name:"With Icon Button",render:()=>t.jsxs("div",{className:"flex gap-4",children:[t.jsxs(y,{children:[t.jsx(v,{asChild:!0,children:t.jsx(_,{icon:"Info","aria-label":"Information"})}),t.jsx(T,{children:"View more information"})]}),t.jsxs(y,{children:[t.jsx(v,{asChild:!0,children:t.jsx(_,{icon:"Settings","aria-label":"Settings"})}),t.jsx(T,{children:"Open settings"})]}),t.jsxs(y,{children:[t.jsx(v,{asChild:!0,children:t.jsx(_,{icon:"Trash2",variant:"destructive","aria-label":"Delete"})}),t.jsx(T,{children:"Delete item"})]})]})},k={name:"With Disabled Button",render:()=>t.jsxs(y,{children:[t.jsx(v,{asChild:!0,children:t.jsx("span",{role:"button",tabIndex:0,children:t.jsx(_,{disabled:!0,style:{pointerEvents:"none"},children:"Disabled Button"})})}),t.jsx(T,{children:"This action is currently unavailable"})]})},A={name:"Rich Content",render:()=>t.jsxs(y,{children:[t.jsx(v,{asChild:!0,children:t.jsx(_,{variant:"secondary",children:"Hover for details"})}),t.jsxs(T,{className:"max-w-xs",children:[t.jsx("p",{className:"font-bold",children:"Keyboard Shortcut"}),t.jsxs("p",{className:"text-foreground-muted",children:["Press ",t.jsx("kbd",{className:"px-1 bg-surface-hover rounded",children:"Ctrl"})," +"," ",t.jsx("kbd",{className:"px-1 bg-surface-hover rounded",children:"S"})," to save"]})]})]})};var U,Y,X;I.parameters={...I.parameters,docs:{...(U=I.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    children: 'This is helpful information.',
    side: 'top',
    sideOffset: 4,
    align: 'center'
  },
  render: args => <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="secondary">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent {...args} />
    </Tooltip>
}`,...(X=(Y=I.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};var J,Q,Z;O.parameters={...O.parameters,docs:{...(J=O.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Sides',
  render: () => <div className="flex gap-8">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">Tooltip on top</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">Tooltip on right</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">Tooltip on left</TooltipContent>
      </Tooltip>
    </div>
}`,...(Z=(Q=O.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,te,oe;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'With Icon Button',
  render: () => <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button icon="Info" aria-label="Information" />
        </TooltipTrigger>
        <TooltipContent>View more information</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button icon="Settings" aria-label="Settings" />
        </TooltipTrigger>
        <TooltipContent>Open settings</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button icon="Trash2" variant="destructive" aria-label="Delete" />
        </TooltipTrigger>
        <TooltipContent>Delete item</TooltipContent>
      </Tooltip>
    </div>
}`,...(oe=(te=S.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var re,ne,ie;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'With Disabled Button',
  render: () => <Tooltip>
      <TooltipTrigger asChild>
        {/* biome-ignore lint/a11y/useSemanticElements: Wrapper for disabled button tooltip */}
        <span role="button" tabIndex={0}>
          <Button disabled style={{
          pointerEvents: 'none'
        }}>
            Disabled Button
          </Button>
        </span>
      </TooltipTrigger>
      <TooltipContent>This action is currently unavailable</TooltipContent>
    </Tooltip>
}`,...(ie=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var se,ae,le;A.parameters={...A.parameters,docs:{...(se=A.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Rich Content',
  render: () => <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="secondary">Hover for details</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <p className="font-bold">Keyboard Shortcut</p>
        <p className="text-foreground-muted">
          Press <kbd className="px-1 bg-surface-hover rounded">Ctrl</kbd> +{' '}
          <kbd className="px-1 bg-surface-hover rounded">S</kbd> to save
        </p>
      </TooltipContent>
    </Tooltip>
}`,...(le=(ae=A.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};const Tt=["Playground","Sides","WithIconButton","WithDisabledButton","RichContent"];export{I as Playground,A as RichContent,O as Sides,k as WithDisabledButton,S as WithIconButton,Tt as __namedExportsOrder,ft as default};
