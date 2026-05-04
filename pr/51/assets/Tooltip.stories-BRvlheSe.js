import{r as i,j as t}from"./iframe-CFxpEhv6.js";import{B as _}from"./Button-JfLnqAj2.js";import{b as Pe,P as Re,d as w,c as Ee,f as Ne}from"./index-CX9ZPkjV.js";import{u as pe}from"./index-DJ7EVWSB.js";import{R as De,P as ke,A as Be,c as de,a as Ie,D as Se,C as Oe,b as Ae}from"./index-uAoPEz7M.js";import{u as Le}from"./index-lGQn5pH0.js";import{P as ue}from"./index-CMFcaOZl.js";import{c as Te}from"./index-DHk-Frat.js";import"./preload-helper-C30NFVqV.js";import"./index-DVi1YuTR.js";import"./index-DTdqjYf_.js";import"./chevron-up-DOv3NXWs.js";import"./Spinner-DhV9V0LF.js";import"./index-BIugY_rk.js";var[L]=Ee("Tooltip",[de]),H=de(),me="TooltipProvider",He=700,M="tooltip.open",[Me,F]=L(me),fe=e=>{const{__scopeTooltip:r,delayDuration:o=He,skipDelayDuration:n=300,disableHoverableContent:s=!1,children:l}=e,c=i.useRef(!0),m=i.useRef(!1),a=i.useRef(0);return i.useEffect(()=>{const u=a.current;return()=>window.clearTimeout(u)},[]),t.jsx(Me,{scope:r,isOpenDelayedRef:c,delayDuration:o,onOpen:i.useCallback(()=>{window.clearTimeout(a.current),c.current=!1},[]),onClose:i.useCallback(()=>{window.clearTimeout(a.current),a.current=window.setTimeout(()=>c.current=!0,n)},[n]),isPointerInTransitRef:m,onPointerInTransitChange:i.useCallback(u=>{m.current=u},[]),disableHoverableContent:s,children:l})};fe.displayName=me;var D="Tooltip",[We,k]=L(D),he=e=>{const{__scopeTooltip:r,children:o,open:n,defaultOpen:s,onOpenChange:l,disableHoverableContent:c,delayDuration:m}=e,a=F(D,e.__scopeTooltip),u=H(r),[p,T]=i.useState(null),f=Le(),d=i.useRef(0),g=c??a.disableHoverableContent,b=m??a.delayDuration,y=i.useRef(!1),[j,C]=Pe({prop:n,defaultProp:s??!1,onChange:U=>{U?(a.onOpen(),document.dispatchEvent(new CustomEvent(M))):a.onClose(),l==null||l(U)},caller:D}),R=i.useMemo(()=>j?y.current?"delayed-open":"instant-open":"closed",[j]),E=i.useCallback(()=>{window.clearTimeout(d.current),d.current=0,y.current=!1,C(!0)},[C]),N=i.useCallback(()=>{window.clearTimeout(d.current),d.current=0,C(!1)},[C]),K=i.useCallback(()=>{window.clearTimeout(d.current),d.current=window.setTimeout(()=>{y.current=!0,C(!0),d.current=0},b)},[b,C]);return i.useEffect(()=>()=>{d.current&&(window.clearTimeout(d.current),d.current=0)},[]),t.jsx(De,{...u,children:t.jsx(We,{scope:r,contentId:f,open:j,stateAttribute:R,trigger:p,onTriggerChange:T,onTriggerEnter:i.useCallback(()=>{a.isOpenDelayedRef.current?K():E()},[a.isOpenDelayedRef,K,E]),onTriggerLeave:i.useCallback(()=>{g?N():(window.clearTimeout(d.current),d.current=0)},[N,g]),onOpen:E,onClose:N,disableHoverableContent:g,children:o})})};he.displayName=D;var W="TooltipTrigger",ge=i.forwardRef((e,r)=>{const{__scopeTooltip:o,...n}=e,s=k(W,o),l=F(W,o),c=H(o),m=i.useRef(null),a=pe(r,m,s.onTriggerChange),u=i.useRef(!1),p=i.useRef(!1),T=i.useCallback(()=>u.current=!1,[]);return i.useEffect(()=>()=>document.removeEventListener("pointerup",T),[T]),t.jsx(Ie,{asChild:!0,...c,children:t.jsx(Re.button,{"aria-describedby":s.open?s.contentId:void 0,"data-state":s.stateAttribute,...n,ref:a,onPointerMove:w(e.onPointerMove,f=>{f.pointerType!=="touch"&&!p.current&&!l.isPointerInTransitRef.current&&(s.onTriggerEnter(),p.current=!0)}),onPointerLeave:w(e.onPointerLeave,()=>{s.onTriggerLeave(),p.current=!1}),onPointerDown:w(e.onPointerDown,()=>{s.open&&s.onClose(),u.current=!0,document.addEventListener("pointerup",T,{once:!0})}),onFocus:w(e.onFocus,()=>{u.current||s.onOpen()}),onBlur:w(e.onBlur,s.onClose),onClick:w(e.onClick,s.onClose)})})});ge.displayName=W;var $="TooltipPortal",[Ve,Ge]=L($,{forceMount:void 0}),xe=e=>{const{__scopeTooltip:r,forceMount:o,children:n,container:s}=e,l=k($,r);return t.jsx(Ve,{scope:r,forceMount:o,children:t.jsx(ue,{present:o||l.open,children:t.jsx(ke,{asChild:!0,container:s,children:n})})})};xe.displayName=$;var P="TooltipContent",ye=i.forwardRef((e,r)=>{const o=Ge(P,e.__scopeTooltip),{forceMount:n=o.forceMount,side:s="top",...l}=e,c=k(P,e.__scopeTooltip);return t.jsx(ue,{present:n||c.open,children:c.disableHoverableContent?t.jsx(ve,{side:s,...l,ref:r}):t.jsx(Fe,{side:s,...l,ref:r})})}),Fe=i.forwardRef((e,r)=>{const o=k(P,e.__scopeTooltip),n=F(P,e.__scopeTooltip),s=i.useRef(null),l=pe(r,s),[c,m]=i.useState(null),{trigger:a,onClose:u}=o,p=s.current,{onPointerInTransitChange:T}=n,f=i.useCallback(()=>{m(null),T(!1)},[T]),d=i.useCallback((g,b)=>{const y=g.currentTarget,j={x:g.clientX,y:g.clientY},C=Ue(j,y.getBoundingClientRect()),R=Ye(j,C),E=Xe(b.getBoundingClientRect()),N=Je([...R,...E]);m(N),T(!0)},[T]);return i.useEffect(()=>()=>f(),[f]),i.useEffect(()=>{if(a&&p){const g=y=>d(y,p),b=y=>d(y,a);return a.addEventListener("pointerleave",g),p.addEventListener("pointerleave",b),()=>{a.removeEventListener("pointerleave",g),p.removeEventListener("pointerleave",b)}}},[a,p,d,f]),i.useEffect(()=>{if(c){const g=b=>{const y=b.target,j={x:b.clientX,y:b.clientY},C=(a==null?void 0:a.contains(y))||(p==null?void 0:p.contains(y)),R=!ze(j,c);C?f():R&&(f(),u())};return document.addEventListener("pointermove",g),()=>document.removeEventListener("pointermove",g)}},[a,p,c,u,f]),t.jsx(ve,{...e,ref:l})}),[$e,qe]=L(D,{isInside:!1}),Ke=Ne("TooltipContent"),ve=i.forwardRef((e,r)=>{const{__scopeTooltip:o,children:n,"aria-label":s,onEscapeKeyDown:l,onPointerDownOutside:c,...m}=e,a=k(P,o),u=H(o),{onClose:p}=a;return i.useEffect(()=>(document.addEventListener(M,p),()=>document.removeEventListener(M,p)),[p]),i.useEffect(()=>{if(a.trigger){const T=f=>{const d=f.target;d!=null&&d.contains(a.trigger)&&p()};return window.addEventListener("scroll",T,{capture:!0}),()=>window.removeEventListener("scroll",T,{capture:!0})}},[a.trigger,p]),t.jsx(Se,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:l,onPointerDownOutside:c,onFocusOutside:T=>T.preventDefault(),onDismiss:p,children:t.jsxs(Oe,{"data-state":a.stateAttribute,...u,...m,ref:r,style:{...m.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[t.jsx(Ke,{children:n}),t.jsx($e,{scope:o,isInside:!0,children:t.jsx(Ae,{id:a.contentId,role:"tooltip",children:s||n})})]})})});ye.displayName=P;var be="TooltipArrow",Ce=i.forwardRef((e,r)=>{const{__scopeTooltip:o,...n}=e,s=H(o);return qe(be,o).isInside?null:t.jsx(Be,{...s,...n,ref:r})});Ce.displayName=be;function Ue(e,r){const o=Math.abs(r.top-e.y),n=Math.abs(r.bottom-e.y),s=Math.abs(r.right-e.x),l=Math.abs(r.left-e.x);switch(Math.min(o,n,s,l)){case l:return"left";case s:return"right";case o:return"top";case n:return"bottom";default:throw new Error("unreachable")}}function Ye(e,r,o=5){const n=[];switch(r){case"top":n.push({x:e.x-o,y:e.y+o},{x:e.x+o,y:e.y+o});break;case"bottom":n.push({x:e.x-o,y:e.y-o},{x:e.x+o,y:e.y-o});break;case"left":n.push({x:e.x+o,y:e.y-o},{x:e.x+o,y:e.y+o});break;case"right":n.push({x:e.x-o,y:e.y-o},{x:e.x-o,y:e.y+o});break}return n}function Xe(e){const{top:r,right:o,bottom:n,left:s}=e;return[{x:s,y:r},{x:o,y:r},{x:o,y:n},{x:s,y:n}]}function ze(e,r){const{x:o,y:n}=e;let s=!1;for(let l=0,c=r.length-1;l<r.length;c=l++){const m=r[l],a=r[c],u=m.x,p=m.y,T=a.x,f=a.y;p>n!=f>n&&o<(T-u)*(n-p)/(f-p)+u&&(s=!s)}return s}function Je(e){const r=e.slice();return r.sort((o,n)=>o.x<n.x?-1:o.x>n.x?1:o.y<n.y?-1:o.y>n.y?1:0),Qe(r)}function Qe(e){if(e.length<=1)return e.slice();const r=[];for(let n=0;n<e.length;n++){const s=e[n];for(;r.length>=2;){const l=r[r.length-1],c=r[r.length-2];if((l.x-c.x)*(s.y-c.y)>=(l.y-c.y)*(s.x-c.x))r.pop();else break}r.push(s)}r.pop();const o=[];for(let n=e.length-1;n>=0;n--){const s=e[n];for(;o.length>=2;){const l=o[o.length-1],c=o[o.length-2];if((l.x-c.x)*(s.y-c.y)>=(l.y-c.y)*(s.x-c.x))o.pop();else break}o.push(s)}return o.pop(),r.length===1&&o.length===1&&r[0].x===o[0].x&&r[0].y===o[0].y?r:r.concat(o)}var Ze=fe,et=he,_e=ge,je=xe,we=ye,q=Ce;const V=Ze,v=et,x=i.forwardRef(({children:e,...r},o)=>{const n=typeof e=="string"||typeof e=="number";return t.jsx(_e,{ref:o,asChild:!n,...r,children:e})});x.displayName=_e.displayName;const Y=je,h=i.forwardRef(({className:e,container:r,children:o,...n},s)=>t.jsx(je,{container:r,children:t.jsxs(we,{ref:s,sideOffset:4,className:Te("tooltip-content z-50 bg-foreground px-3 py-1.5 text-sm text-background shadow-md",e),...n,children:[o,t.jsx(q,{className:"fill-foreground"})]})}));h.displayName=we.displayName;const G=i.forwardRef(({className:e,...r},o)=>t.jsx(q,{ref:o,className:Te("fill-background",e),...r}));G.displayName=q.displayName;try{v.displayName="Tooltip",v.__docgenInfo={description:"",displayName:"Tooltip",props:{}}}catch{}try{G.displayName="TooltipArrow",G.__docgenInfo={description:"",displayName:"TooltipArrow",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{h.displayName="TooltipContent",h.__docgenInfo={description:"",displayName:"TooltipContent",props:{container:{defaultValue:null,description:"Portal container element",name:"container",required:!1,type:{name:"Element | DocumentFragment | null"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{Y.displayName="TooltipPortal",Y.__docgenInfo={description:"",displayName:"TooltipPortal",props:{}}}catch{}try{V.displayName="TooltipProvider",V.__docgenInfo={description:"",displayName:"TooltipProvider",props:{}}}catch{}try{x.displayName="TooltipTrigger",x.__docgenInfo={description:"",displayName:"TooltipTrigger",props:{}}}catch{}const ft={title:"Components/lv1/Tooltip",component:h,parameters:{layout:"centered"},tags:["autodocs"],decorators:[e=>t.jsx(V,{delayDuration:100,children:t.jsx(e,{})})],argTypes:{side:{description:"The preferred side of the trigger to render the tooltip.",control:"select",options:["top","right","bottom","left"],table:{type:{summary:'"top" | "right" | "bottom" | "left"'},defaultValue:{summary:"top"}}},children:{description:"Content to display in the tooltip.",control:"text",table:{type:{summary:"ReactNode"}}}}},B={name:"Playground",args:{children:"This is helpful information.",side:"top"},render:e=>t.jsxs(v,{children:[t.jsx(x,{children:t.jsx(_,{variant:"secondary",children:"Hover me"})}),t.jsx(h,{...e})]})},I={name:"Sides",render:()=>t.jsxs("div",{className:"flex gap-8",children:[t.jsxs(v,{children:[t.jsx(x,{children:t.jsx(_,{variant:"secondary",children:"Top"})}),t.jsx(h,{side:"top",children:"Tooltip on top"})]}),t.jsxs(v,{children:[t.jsx(x,{children:t.jsx(_,{variant:"secondary",children:"Right"})}),t.jsx(h,{side:"right",children:"Tooltip on right"})]}),t.jsxs(v,{children:[t.jsx(x,{children:t.jsx(_,{variant:"secondary",children:"Bottom"})}),t.jsx(h,{side:"bottom",children:"Tooltip on bottom"})]}),t.jsxs(v,{children:[t.jsx(x,{children:t.jsx(_,{variant:"secondary",children:"Left"})}),t.jsx(h,{side:"left",children:"Tooltip on left"})]})]})},S={name:"With Icon Button",render:()=>t.jsxs("div",{className:"flex gap-4",children:[t.jsxs(v,{children:[t.jsx(x,{children:t.jsx(_,{icon:"Info","aria-label":"Information"})}),t.jsx(h,{children:"View more information"})]}),t.jsxs(v,{children:[t.jsx(x,{children:t.jsx(_,{icon:"Settings","aria-label":"Settings"})}),t.jsx(h,{children:"Open settings"})]}),t.jsxs(v,{children:[t.jsx(x,{children:t.jsx(_,{icon:"Trash2",variant:"destructive","aria-label":"Delete"})}),t.jsx(h,{children:"Delete item"})]})]})},O={name:"With Disabled Button",render:()=>t.jsxs(v,{children:[t.jsx(x,{children:t.jsx("span",{role:"button",tabIndex:0,children:t.jsx(_,{disabled:!0,style:{pointerEvents:"none"},children:"Disabled Button"})})}),t.jsx(h,{children:"This action is currently unavailable"})]})},A={name:"Rich Content",render:()=>t.jsxs(v,{children:[t.jsx(x,{children:t.jsx(_,{variant:"secondary",children:"Hover for details"})}),t.jsxs(h,{className:"max-w-xs",children:[t.jsx("p",{className:"font-bold",children:"Keyboard Shortcut"}),t.jsxs("p",{className:"opacity-80",children:["Press ",t.jsx("kbd",{className:"px-1 bg-background/20 rounded",children:"Ctrl"})," +"," ",t.jsx("kbd",{className:"px-1 bg-background/20 rounded",children:"S"})," to save"]})]})]})};var X,z,J;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    children: 'This is helpful information.',
    side: 'top'
  },
  render: args => <Tooltip>
      <TooltipTrigger>
        <Button variant="secondary">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent {...args} />
    </Tooltip>
}`,...(J=(z=B.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var Q,Z,ee;I.parameters={...I.parameters,docs:{...(Q=I.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Sides',
  render: () => <div className="flex gap-8">
      <Tooltip>
        <TooltipTrigger>
          <Button variant="secondary">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">Tooltip on top</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <Button variant="secondary">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">Tooltip on right</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <Button variant="secondary">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <Button variant="secondary">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">Tooltip on left</TooltipContent>
      </Tooltip>
    </div>
}`,...(ee=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,oe,re;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'With Icon Button',
  render: () => <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger>
          <Button icon="Info" aria-label="Information" />
        </TooltipTrigger>
        <TooltipContent>View more information</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <Button icon="Settings" aria-label="Settings" />
        </TooltipTrigger>
        <TooltipContent>Open settings</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <Button icon="Trash2" variant="destructive" aria-label="Delete" />
        </TooltipTrigger>
        <TooltipContent>Delete item</TooltipContent>
      </Tooltip>
    </div>
}`,...(re=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ne,se,ie;O.parameters={...O.parameters,docs:{...(ne=O.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'With Disabled Button',
  render: () => <Tooltip>
      <TooltipTrigger>
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
}`,...(ie=(se=O.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ae,le,ce;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Rich Content',
  render: () => <Tooltip>
      <TooltipTrigger>
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
}`,...(ce=(le=A.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};const ht=["Playground","Sides","WithIconButton","WithDisabledButton","RichContent"];export{B as Playground,A as RichContent,I as Sides,O as WithDisabledButton,S as WithIconButton,ht as __namedExportsOrder,ft as default};
