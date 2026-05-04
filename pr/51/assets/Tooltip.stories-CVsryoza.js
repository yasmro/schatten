import{r as s,j as t}from"./iframe-CdRDh2oM.js";import{B as _}from"./Button-49K2JpN1.js";import{b as Pe,P as we,d as P,c as Re,f as Ee}from"./index-FubEC7ys.js";import{u as de}from"./index-BBz_C4uA.js";import{R as Ne,A as De,P as ke,a as Be,c as pe,D as Ie,C as Se,b as Oe}from"./index-LDgEVaDd.js";import{u as Ae}from"./index-Cmk_zlxL.js";import{P as ue}from"./index-DqH2-go0.js";import{c as he}from"./index-DHk-Frat.js";import"./preload-helper-C30NFVqV.js";import"./index-pEVZFTM1.js";import"./index-D-z0s5SH.js";import"./chevron-up-B1RVtpop.js";import"./Spinner-DXbFxYg4.js";import"./index-DKnU2Zu_.js";var[L]=Re("Tooltip",[pe]),H=pe(),Te="TooltipProvider",Le=700,M="tooltip.open",[He,F]=L(Te),me=e=>{const{__scopeTooltip:r,delayDuration:o=Le,skipDelayDuration:n=300,disableHoverableContent:i=!1,children:l}=e,c=s.useRef(!0),T=s.useRef(!1),a=s.useRef(0);return s.useEffect(()=>{const u=a.current;return()=>window.clearTimeout(u)},[]),t.jsx(He,{scope:r,isOpenDelayedRef:c,delayDuration:o,onOpen:s.useCallback(()=>{window.clearTimeout(a.current),c.current=!1},[]),onClose:s.useCallback(()=>{window.clearTimeout(a.current),a.current=window.setTimeout(()=>c.current=!0,n)},[n]),isPointerInTransitRef:T,onPointerInTransitChange:s.useCallback(u=>{T.current=u},[]),disableHoverableContent:i,children:l})};me.displayName=Te;var D="Tooltip",[Me,k]=L(D),fe=e=>{const{__scopeTooltip:r,children:o,open:n,defaultOpen:i,onOpenChange:l,disableHoverableContent:c,delayDuration:T}=e,a=F(D,e.__scopeTooltip),u=H(r),[d,h]=s.useState(null),m=Ae(),p=s.useRef(0),g=c??a.disableHoverableContent,C=T??a.delayDuration,x=s.useRef(!1),[j,b]=Pe({prop:n,defaultProp:i??!1,onChange:U=>{U?(a.onOpen(),document.dispatchEvent(new CustomEvent(M))):a.onClose(),l==null||l(U)},caller:D}),R=s.useMemo(()=>j?x.current?"delayed-open":"instant-open":"closed",[j]),E=s.useCallback(()=>{window.clearTimeout(p.current),p.current=0,x.current=!1,b(!0)},[b]),N=s.useCallback(()=>{window.clearTimeout(p.current),p.current=0,b(!1)},[b]),K=s.useCallback(()=>{window.clearTimeout(p.current),p.current=window.setTimeout(()=>{x.current=!0,b(!0),p.current=0},C)},[C,b]);return s.useEffect(()=>()=>{p.current&&(window.clearTimeout(p.current),p.current=0)},[]),t.jsx(Ne,{...u,children:t.jsx(Me,{scope:r,contentId:m,open:j,stateAttribute:R,trigger:d,onTriggerChange:h,onTriggerEnter:s.useCallback(()=>{a.isOpenDelayedRef.current?K():E()},[a.isOpenDelayedRef,K,E]),onTriggerLeave:s.useCallback(()=>{g?N():(window.clearTimeout(p.current),p.current=0)},[N,g]),onOpen:E,onClose:N,disableHoverableContent:g,children:o})})};fe.displayName=D;var V="TooltipTrigger",ge=s.forwardRef((e,r)=>{const{__scopeTooltip:o,...n}=e,i=k(V,o),l=F(V,o),c=H(o),T=s.useRef(null),a=de(r,T,i.onTriggerChange),u=s.useRef(!1),d=s.useRef(!1),h=s.useCallback(()=>u.current=!1,[]);return s.useEffect(()=>()=>document.removeEventListener("pointerup",h),[h]),t.jsx(De,{asChild:!0,...c,children:t.jsx(we.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...n,ref:a,onPointerMove:P(e.onPointerMove,m=>{m.pointerType!=="touch"&&!d.current&&!l.isPointerInTransitRef.current&&(i.onTriggerEnter(),d.current=!0)}),onPointerLeave:P(e.onPointerLeave,()=>{i.onTriggerLeave(),d.current=!1}),onPointerDown:P(e.onPointerDown,()=>{i.open&&i.onClose(),u.current=!0,document.addEventListener("pointerup",h,{once:!0})}),onFocus:P(e.onFocus,()=>{u.current||i.onOpen()}),onBlur:P(e.onBlur,i.onClose),onClick:P(e.onClick,i.onClose)})})});ge.displayName=V;var $="TooltipPortal",[Ve,We]=L($,{forceMount:void 0}),xe=e=>{const{__scopeTooltip:r,forceMount:o,children:n,container:i}=e,l=k($,r);return t.jsx(Ve,{scope:r,forceMount:o,children:t.jsx(ue,{present:o||l.open,children:t.jsx(ke,{asChild:!0,container:i,children:n})})})};xe.displayName=$;var w="TooltipContent",ye=s.forwardRef((e,r)=>{const o=We(w,e.__scopeTooltip),{forceMount:n=o.forceMount,side:i="top",...l}=e,c=k(w,e.__scopeTooltip);return t.jsx(ue,{present:n||c.open,children:c.disableHoverableContent?t.jsx(ve,{side:i,...l,ref:r}):t.jsx(Ge,{side:i,...l,ref:r})})}),Ge=s.forwardRef((e,r)=>{const o=k(w,e.__scopeTooltip),n=F(w,e.__scopeTooltip),i=s.useRef(null),l=de(r,i),[c,T]=s.useState(null),{trigger:a,onClose:u}=o,d=i.current,{onPointerInTransitChange:h}=n,m=s.useCallback(()=>{T(null),h(!1)},[h]),p=s.useCallback((g,C)=>{const x=g.currentTarget,j={x:g.clientX,y:g.clientY},b=Ke(j,x.getBoundingClientRect()),R=Ue(j,b),E=Ye(C.getBoundingClientRect()),N=ze([...R,...E]);T(N),h(!0)},[h]);return s.useEffect(()=>()=>m(),[m]),s.useEffect(()=>{if(a&&d){const g=x=>p(x,d),C=x=>p(x,a);return a.addEventListener("pointerleave",g),d.addEventListener("pointerleave",C),()=>{a.removeEventListener("pointerleave",g),d.removeEventListener("pointerleave",C)}}},[a,d,p,m]),s.useEffect(()=>{if(c){const g=C=>{const x=C.target,j={x:C.clientX,y:C.clientY},b=(a==null?void 0:a.contains(x))||(d==null?void 0:d.contains(x)),R=!Xe(j,c);b?m():R&&(m(),u())};return document.addEventListener("pointermove",g),()=>document.removeEventListener("pointermove",g)}},[a,d,c,u,m]),t.jsx(ve,{...e,ref:l})}),[Fe,$e]=L(D,{isInside:!1}),qe=Ee("TooltipContent"),ve=s.forwardRef((e,r)=>{const{__scopeTooltip:o,children:n,"aria-label":i,onEscapeKeyDown:l,onPointerDownOutside:c,...T}=e,a=k(w,o),u=H(o),{onClose:d}=a;return s.useEffect(()=>(document.addEventListener(M,d),()=>document.removeEventListener(M,d)),[d]),s.useEffect(()=>{if(a.trigger){const h=m=>{const p=m.target;p!=null&&p.contains(a.trigger)&&d()};return window.addEventListener("scroll",h,{capture:!0}),()=>window.removeEventListener("scroll",h,{capture:!0})}},[a.trigger,d]),t.jsx(Ie,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:l,onPointerDownOutside:c,onFocusOutside:h=>h.preventDefault(),onDismiss:d,children:t.jsxs(Se,{"data-state":a.stateAttribute,...u,...T,ref:r,style:{...T.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[t.jsx(qe,{children:n}),t.jsx(Fe,{scope:o,isInside:!0,children:t.jsx(Oe,{id:a.contentId,role:"tooltip",children:i||n})})]})})});ye.displayName=w;var Ce="TooltipArrow",be=s.forwardRef((e,r)=>{const{__scopeTooltip:o,...n}=e,i=H(o);return $e(Ce,o).isInside?null:t.jsx(Be,{...i,...n,ref:r})});be.displayName=Ce;function Ke(e,r){const o=Math.abs(r.top-e.y),n=Math.abs(r.bottom-e.y),i=Math.abs(r.right-e.x),l=Math.abs(r.left-e.x);switch(Math.min(o,n,i,l)){case l:return"left";case i:return"right";case o:return"top";case n:return"bottom";default:throw new Error("unreachable")}}function Ue(e,r,o=5){const n=[];switch(r){case"top":n.push({x:e.x-o,y:e.y+o},{x:e.x+o,y:e.y+o});break;case"bottom":n.push({x:e.x-o,y:e.y-o},{x:e.x+o,y:e.y-o});break;case"left":n.push({x:e.x+o,y:e.y-o},{x:e.x+o,y:e.y+o});break;case"right":n.push({x:e.x-o,y:e.y-o},{x:e.x-o,y:e.y+o});break}return n}function Ye(e){const{top:r,right:o,bottom:n,left:i}=e;return[{x:i,y:r},{x:o,y:r},{x:o,y:n},{x:i,y:n}]}function Xe(e,r){const{x:o,y:n}=e;let i=!1;for(let l=0,c=r.length-1;l<r.length;c=l++){const T=r[l],a=r[c],u=T.x,d=T.y,h=a.x,m=a.y;d>n!=m>n&&o<(h-u)*(n-d)/(m-d)+u&&(i=!i)}return i}function ze(e){const r=e.slice();return r.sort((o,n)=>o.x<n.x?-1:o.x>n.x?1:o.y<n.y?-1:o.y>n.y?1:0),Je(r)}function Je(e){if(e.length<=1)return e.slice();const r=[];for(let n=0;n<e.length;n++){const i=e[n];for(;r.length>=2;){const l=r[r.length-1],c=r[r.length-2];if((l.x-c.x)*(i.y-c.y)>=(l.y-c.y)*(i.x-c.x))r.pop();else break}r.push(i)}r.pop();const o=[];for(let n=e.length-1;n>=0;n--){const i=e[n];for(;o.length>=2;){const l=o[o.length-1],c=o[o.length-2];if((l.x-c.x)*(i.y-c.y)>=(l.y-c.y)*(i.x-c.x))o.pop();else break}o.push(i)}return o.pop(),r.length===1&&o.length===1&&r[0].x===o[0].x&&r[0].y===o[0].y?r:r.concat(o)}var Qe=me,Ze=fe,et=ge,_e=xe,je=ye,q=be;const W=Qe,y=Ze,v=et,Y=_e,f=s.forwardRef(({className:e,container:r,children:o,...n},i)=>t.jsx(_e,{container:r,children:t.jsxs(je,{ref:i,sideOffset:4,className:he("tooltip-content z-50 bg-foreground px-3 py-1.5 text-sm text-background shadow-md",e),...n,children:[o,t.jsx(q,{className:"fill-foreground"})]})}));f.displayName=je.displayName;const G=s.forwardRef(({className:e,...r},o)=>t.jsx(q,{ref:o,className:he("fill-background",e),...r}));G.displayName=q.displayName;try{y.displayName="Tooltip",y.__docgenInfo={description:"",displayName:"Tooltip",props:{}}}catch{}try{G.displayName="TooltipArrow",G.__docgenInfo={description:"",displayName:"TooltipArrow",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{f.displayName="TooltipContent",f.__docgenInfo={description:"",displayName:"TooltipContent",props:{container:{defaultValue:null,description:"Portal container element",name:"container",required:!1,type:{name:"Element | DocumentFragment | null"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{Y.displayName="TooltipPortal",Y.__docgenInfo={description:"",displayName:"TooltipPortal",props:{}}}catch{}try{W.displayName="TooltipProvider",W.__docgenInfo={description:"",displayName:"TooltipProvider",props:{}}}catch{}try{v.displayName="TooltipTrigger",v.__docgenInfo={description:"",displayName:"TooltipTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const mt={title:"Components/lv1/Tooltip",component:f,parameters:{layout:"centered"},tags:["autodocs"],decorators:[e=>t.jsx(W,{delayDuration:100,children:t.jsx(e,{})})],argTypes:{side:{description:"The preferred side of the trigger to render the tooltip.",control:"select",options:["top","right","bottom","left"],table:{type:{summary:'"top" | "right" | "bottom" | "left"'},defaultValue:{summary:"top"}}},children:{description:"Content to display in the tooltip.",control:"text",table:{type:{summary:"ReactNode"}}}}},B={name:"Playground",args:{children:"This is helpful information.",side:"top"},render:e=>t.jsxs(y,{children:[t.jsx(v,{asChild:!0,children:t.jsx(_,{variant:"secondary",children:"Hover me"})}),t.jsx(f,{...e})]})},I={name:"Sides",render:()=>t.jsxs("div",{className:"flex gap-8",children:[t.jsxs(y,{children:[t.jsx(v,{asChild:!0,children:t.jsx(_,{variant:"secondary",children:"Top"})}),t.jsx(f,{side:"top",children:"Tooltip on top"})]}),t.jsxs(y,{children:[t.jsx(v,{asChild:!0,children:t.jsx(_,{variant:"secondary",children:"Right"})}),t.jsx(f,{side:"right",children:"Tooltip on right"})]}),t.jsxs(y,{children:[t.jsx(v,{asChild:!0,children:t.jsx(_,{variant:"secondary",children:"Bottom"})}),t.jsx(f,{side:"bottom",children:"Tooltip on bottom"})]}),t.jsxs(y,{children:[t.jsx(v,{asChild:!0,children:t.jsx(_,{variant:"secondary",children:"Left"})}),t.jsx(f,{side:"left",children:"Tooltip on left"})]})]})},S={name:"With Icon Button",render:()=>t.jsxs("div",{className:"flex gap-4",children:[t.jsxs(y,{children:[t.jsx(v,{asChild:!0,children:t.jsx(_,{icon:"Info","aria-label":"Information"})}),t.jsx(f,{children:"View more information"})]}),t.jsxs(y,{children:[t.jsx(v,{asChild:!0,children:t.jsx(_,{icon:"Settings","aria-label":"Settings"})}),t.jsx(f,{children:"Open settings"})]}),t.jsxs(y,{children:[t.jsx(v,{asChild:!0,children:t.jsx(_,{icon:"Trash2",variant:"destructive","aria-label":"Delete"})}),t.jsx(f,{children:"Delete item"})]})]})},O={name:"With Disabled Button",render:()=>t.jsxs(y,{children:[t.jsx(v,{asChild:!0,children:t.jsx("span",{role:"button",tabIndex:0,children:t.jsx(_,{disabled:!0,style:{pointerEvents:"none"},children:"Disabled Button"})})}),t.jsx(f,{children:"This action is currently unavailable"})]})},A={name:"Rich Content",render:()=>t.jsxs(y,{children:[t.jsx(v,{asChild:!0,children:t.jsx(_,{variant:"secondary",children:"Hover for details"})}),t.jsxs(f,{className:"max-w-xs",children:[t.jsx("p",{className:"font-bold",children:"Keyboard Shortcut"}),t.jsxs("p",{className:"opacity-80",children:["Press ",t.jsx("kbd",{className:"px-1 bg-background/20 rounded",children:"Ctrl"})," +"," ",t.jsx("kbd",{className:"px-1 bg-background/20 rounded",children:"S"})," to save"]})]})]})};var X,z,J;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    children: 'This is helpful information.',
    side: 'top'
  },
  render: args => <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="secondary">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent {...args} />
    </Tooltip>
}`,...(J=(z=B.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var Q,Z,ee;I.parameters={...I.parameters,docs:{...(Q=I.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,oe,re;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ne,ie,se;O.parameters={...O.parameters,docs:{...(ne=O.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(ie=O.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var ae,le,ce;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Rich Content',
  render: () => <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="secondary">Hover for details</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <p className="font-bold">Keyboard Shortcut</p>
        <p className="opacity-80">
          Press <kbd className="px-1 bg-background/20 rounded">Ctrl</kbd> +{' '}
          <kbd className="px-1 bg-background/20 rounded">S</kbd> to save
        </p>
      </TooltipContent>
    </Tooltip>
}`,...(ce=(le=A.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};const ft=["Playground","Sides","WithIconButton","WithDisabledButton","RichContent"];export{B as Playground,A as RichContent,I as Sides,O as WithDisabledButton,S as WithIconButton,ft as __namedExportsOrder,mt as default};
