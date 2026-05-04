import{r as i,j as t}from"./iframe-C98nSHwL.js";import{B as j}from"./Button-Bftwu3ki.js";import{b as je,P as _e,d as P,c as Pe,f as we}from"./index-CZnXb2LI.js";import{u as le}from"./index-CcLCpXBE.js";import{R as Re,P as Ee,A as Ne,c as ce,a as De,D as Be,C as ke,b as Ie}from"./index-DhUnOCtn.js";import{u as Se}from"./index-C9uUT1Ze.js";import{P as pe}from"./index-jZmuaPfn.js";import{c as Oe}from"./index-DHk-Frat.js";import"./preload-helper-C30NFVqV.js";import"./index-BlzqjUFJ.js";import"./index-dxn4P6vt.js";import"./chevron-up-CntDs-5T.js";import"./Spinner-DWHdtGbg.js";import"./index-D__Vw2oH.js";var[L]=Pe("Tooltip",[ce]),H=ce(),de="TooltipProvider",Ae=700,M="tooltip.open",[Le,V]=L(de),ue=e=>{const{__scopeTooltip:r,delayDuration:o=Ae,skipDelayDuration:n=300,disableHoverableContent:s=!1,children:l}=e,c=i.useRef(!0),m=i.useRef(!1),a=i.useRef(0);return i.useEffect(()=>{const u=a.current;return()=>window.clearTimeout(u)},[]),t.jsx(Le,{scope:r,isOpenDelayedRef:c,delayDuration:o,onOpen:i.useCallback(()=>{window.clearTimeout(a.current),c.current=!1},[]),onClose:i.useCallback(()=>{window.clearTimeout(a.current),a.current=window.setTimeout(()=>c.current=!0,n)},[n]),isPointerInTransitRef:m,onPointerInTransitChange:i.useCallback(u=>{m.current=u},[]),disableHoverableContent:s,children:l})};ue.displayName=de;var D="Tooltip",[He,B]=L(D),Te=e=>{const{__scopeTooltip:r,children:o,open:n,defaultOpen:s,onOpenChange:l,disableHoverableContent:c,delayDuration:m}=e,a=V(D,e.__scopeTooltip),u=H(r),[p,T]=i.useState(null),h=Se(),d=i.useRef(0),g=c??a.disableHoverableContent,b=m??a.delayDuration,v=i.useRef(!1),[_,C]=je({prop:n,defaultProp:s??!1,onChange:q=>{q?(a.onOpen(),document.dispatchEvent(new CustomEvent(M))):a.onClose(),l==null||l(q)},caller:D}),R=i.useMemo(()=>_?v.current?"delayed-open":"instant-open":"closed",[_]),E=i.useCallback(()=>{window.clearTimeout(d.current),d.current=0,v.current=!1,C(!0)},[C]),N=i.useCallback(()=>{window.clearTimeout(d.current),d.current=0,C(!1)},[C]),$=i.useCallback(()=>{window.clearTimeout(d.current),d.current=window.setTimeout(()=>{v.current=!0,C(!0),d.current=0},b)},[b,C]);return i.useEffect(()=>()=>{d.current&&(window.clearTimeout(d.current),d.current=0)},[]),t.jsx(Re,{...u,children:t.jsx(He,{scope:r,contentId:h,open:_,stateAttribute:R,trigger:p,onTriggerChange:T,onTriggerEnter:i.useCallback(()=>{a.isOpenDelayedRef.current?$():E()},[a.isOpenDelayedRef,$,E]),onTriggerLeave:i.useCallback(()=>{g?N():(window.clearTimeout(d.current),d.current=0)},[N,g]),onOpen:E,onClose:N,disableHoverableContent:g,children:o})})};Te.displayName=D;var W="TooltipTrigger",me=i.forwardRef((e,r)=>{const{__scopeTooltip:o,...n}=e,s=B(W,o),l=V(W,o),c=H(o),m=i.useRef(null),a=le(r,m,s.onTriggerChange),u=i.useRef(!1),p=i.useRef(!1),T=i.useCallback(()=>u.current=!1,[]);return i.useEffect(()=>()=>document.removeEventListener("pointerup",T),[T]),t.jsx(De,{asChild:!0,...c,children:t.jsx(_e.button,{"aria-describedby":s.open?s.contentId:void 0,"data-state":s.stateAttribute,...n,ref:a,onPointerMove:P(e.onPointerMove,h=>{h.pointerType!=="touch"&&!p.current&&!l.isPointerInTransitRef.current&&(s.onTriggerEnter(),p.current=!0)}),onPointerLeave:P(e.onPointerLeave,()=>{s.onTriggerLeave(),p.current=!1}),onPointerDown:P(e.onPointerDown,()=>{s.open&&s.onClose(),u.current=!0,document.addEventListener("pointerup",T,{once:!0})}),onFocus:P(e.onFocus,()=>{u.current||s.onOpen()}),onBlur:P(e.onBlur,s.onClose),onClick:P(e.onClick,s.onClose)})})});me.displayName=W;var F="TooltipPortal",[Me,We]=L(F,{forceMount:void 0}),he=e=>{const{__scopeTooltip:r,forceMount:o,children:n,container:s}=e,l=B(F,r);return t.jsx(Me,{scope:r,forceMount:o,children:t.jsx(pe,{present:o||l.open,children:t.jsx(Ee,{asChild:!0,container:s,children:n})})})};he.displayName=F;var w="TooltipContent",fe=i.forwardRef((e,r)=>{const o=We(w,e.__scopeTooltip),{forceMount:n=o.forceMount,side:s="top",...l}=e,c=B(w,e.__scopeTooltip);return t.jsx(pe,{present:n||c.open,children:c.disableHoverableContent?t.jsx(ge,{side:s,...l,ref:r}):t.jsx(Ge,{side:s,...l,ref:r})})}),Ge=i.forwardRef((e,r)=>{const o=B(w,e.__scopeTooltip),n=V(w,e.__scopeTooltip),s=i.useRef(null),l=le(r,s),[c,m]=i.useState(null),{trigger:a,onClose:u}=o,p=s.current,{onPointerInTransitChange:T}=n,h=i.useCallback(()=>{m(null),T(!1)},[T]),d=i.useCallback((g,b)=>{const v=g.currentTarget,_={x:g.clientX,y:g.clientY},C=qe(_,v.getBoundingClientRect()),R=Ke(_,C),E=Ue(b.getBoundingClientRect()),N=ze([...R,...E]);m(N),T(!0)},[T]);return i.useEffect(()=>()=>h(),[h]),i.useEffect(()=>{if(a&&p){const g=v=>d(v,p),b=v=>d(v,a);return a.addEventListener("pointerleave",g),p.addEventListener("pointerleave",b),()=>{a.removeEventListener("pointerleave",g),p.removeEventListener("pointerleave",b)}}},[a,p,d,h]),i.useEffect(()=>{if(c){const g=b=>{const v=b.target,_={x:b.clientX,y:b.clientY},C=(a==null?void 0:a.contains(v))||(p==null?void 0:p.contains(v)),R=!Ye(_,c);C?h():R&&(h(),u())};return document.addEventListener("pointermove",g),()=>document.removeEventListener("pointermove",g)}},[a,p,c,u,h]),t.jsx(ge,{...e,ref:l})}),[Ve,Fe]=L(D,{isInside:!1}),$e=we("TooltipContent"),ge=i.forwardRef((e,r)=>{const{__scopeTooltip:o,children:n,"aria-label":s,onEscapeKeyDown:l,onPointerDownOutside:c,...m}=e,a=B(w,o),u=H(o),{onClose:p}=a;return i.useEffect(()=>(document.addEventListener(M,p),()=>document.removeEventListener(M,p)),[p]),i.useEffect(()=>{if(a.trigger){const T=h=>{const d=h.target;d!=null&&d.contains(a.trigger)&&p()};return window.addEventListener("scroll",T,{capture:!0}),()=>window.removeEventListener("scroll",T,{capture:!0})}},[a.trigger,p]),t.jsx(Be,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:l,onPointerDownOutside:c,onFocusOutside:T=>T.preventDefault(),onDismiss:p,children:t.jsxs(ke,{"data-state":a.stateAttribute,...u,...m,ref:r,style:{...m.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[t.jsx($e,{children:n}),t.jsx(Ve,{scope:o,isInside:!0,children:t.jsx(Ie,{id:a.contentId,role:"tooltip",children:s||n})})]})})});fe.displayName=w;var xe="TooltipArrow",ve=i.forwardRef((e,r)=>{const{__scopeTooltip:o,...n}=e,s=H(o);return Fe(xe,o).isInside?null:t.jsx(Ne,{...s,...n,ref:r})});ve.displayName=xe;function qe(e,r){const o=Math.abs(r.top-e.y),n=Math.abs(r.bottom-e.y),s=Math.abs(r.right-e.x),l=Math.abs(r.left-e.x);switch(Math.min(o,n,s,l)){case l:return"left";case s:return"right";case o:return"top";case n:return"bottom";default:throw new Error("unreachable")}}function Ke(e,r,o=5){const n=[];switch(r){case"top":n.push({x:e.x-o,y:e.y+o},{x:e.x+o,y:e.y+o});break;case"bottom":n.push({x:e.x-o,y:e.y-o},{x:e.x+o,y:e.y-o});break;case"left":n.push({x:e.x+o,y:e.y-o},{x:e.x+o,y:e.y+o});break;case"right":n.push({x:e.x-o,y:e.y-o},{x:e.x-o,y:e.y+o});break}return n}function Ue(e){const{top:r,right:o,bottom:n,left:s}=e;return[{x:s,y:r},{x:o,y:r},{x:o,y:n},{x:s,y:n}]}function Ye(e,r){const{x:o,y:n}=e;let s=!1;for(let l=0,c=r.length-1;l<r.length;c=l++){const m=r[l],a=r[c],u=m.x,p=m.y,T=a.x,h=a.y;p>n!=h>n&&o<(T-u)*(n-p)/(h-p)+u&&(s=!s)}return s}function ze(e){const r=e.slice();return r.sort((o,n)=>o.x<n.x?-1:o.x>n.x?1:o.y<n.y?-1:o.y>n.y?1:0),Xe(r)}function Xe(e){if(e.length<=1)return e.slice();const r=[];for(let n=0;n<e.length;n++){const s=e[n];for(;r.length>=2;){const l=r[r.length-1],c=r[r.length-2];if((l.x-c.x)*(s.y-c.y)>=(l.y-c.y)*(s.x-c.x))r.pop();else break}r.push(s)}r.pop();const o=[];for(let n=e.length-1;n>=0;n--){const s=e[n];for(;o.length>=2;){const l=o[o.length-1],c=o[o.length-2];if((l.x-c.x)*(s.y-c.y)>=(l.y-c.y)*(s.x-c.x))o.pop();else break}o.push(s)}return o.pop(),r.length===1&&o.length===1&&r[0].x===o[0].x&&r[0].y===o[0].y?r:r.concat(o)}var Je=ue,Qe=Te,ye=me,be=he,Ce=fe,Ze=ve;const G=Je,y=Qe,x=i.forwardRef(({children:e,...r},o)=>{const n=typeof e=="string"||typeof e=="number";return t.jsx(ye,{ref:o,asChild:!n,...r,children:e})});x.displayName=ye.displayName;const K=be,f=i.forwardRef(({className:e,container:r,children:o,...n},s)=>t.jsx(be,{container:r,children:t.jsxs(Ce,{ref:s,sideOffset:4,className:Oe("tooltip-content z-[var(--z-tooltip)] bg-foreground px-3 py-1.5 text-sm text-background shadow-md",e),...n,children:[o,t.jsx(Ze,{className:"fill-foreground"})]})}));f.displayName=Ce.displayName;try{y.displayName="Tooltip",y.__docgenInfo={description:"",displayName:"Tooltip",props:{}}}catch{}try{f.displayName="TooltipContent",f.__docgenInfo={description:"",displayName:"TooltipContent",props:{container:{defaultValue:null,description:"Portal container element",name:"container",required:!1,type:{name:"Element | DocumentFragment | null"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{K.displayName="TooltipPortal",K.__docgenInfo={description:"",displayName:"TooltipPortal",props:{}}}catch{}try{G.displayName="TooltipProvider",G.__docgenInfo={description:"",displayName:"TooltipProvider",props:{}}}catch{}try{x.displayName="TooltipTrigger",x.__docgenInfo={description:"",displayName:"TooltipTrigger",props:{}}}catch{}const mt={title:"Components/lv1/Tooltip",component:f,parameters:{layout:"centered"},tags:["autodocs"],decorators:[e=>t.jsx(G,{delayDuration:100,children:t.jsx(e,{})})],argTypes:{side:{description:"The preferred side of the trigger to render the tooltip.",control:"select",options:["top","right","bottom","left"],table:{type:{summary:'"top" | "right" | "bottom" | "left"'},defaultValue:{summary:"top"}}},children:{description:"Content to display in the tooltip.",control:"text",table:{type:{summary:"ReactNode"}}},container:{table:{disable:!0}},hideArrow:{table:{disable:!0}},asChild:{table:{disable:!0}}}},k={name:"Playground",args:{children:"This is helpful information.",side:"top"},render:e=>t.jsxs(y,{children:[t.jsx(x,{children:t.jsx(j,{variant:"secondary",children:"Hover me"})}),t.jsx(f,{...e})]})},I={name:"Sides",render:()=>t.jsxs("div",{className:"flex gap-8",children:[t.jsxs(y,{children:[t.jsx(x,{children:t.jsx(j,{variant:"secondary",children:"Top"})}),t.jsx(f,{side:"top",children:"Tooltip on top"})]}),t.jsxs(y,{children:[t.jsx(x,{children:t.jsx(j,{variant:"secondary",children:"Right"})}),t.jsx(f,{side:"right",children:"Tooltip on right"})]}),t.jsxs(y,{children:[t.jsx(x,{children:t.jsx(j,{variant:"secondary",children:"Bottom"})}),t.jsx(f,{side:"bottom",children:"Tooltip on bottom"})]}),t.jsxs(y,{children:[t.jsx(x,{children:t.jsx(j,{variant:"secondary",children:"Left"})}),t.jsx(f,{side:"left",children:"Tooltip on left"})]})]})},S={name:"With Icon Button",render:()=>t.jsxs("div",{className:"flex gap-4",children:[t.jsxs(y,{children:[t.jsx(x,{children:t.jsx(j,{icon:"Info","aria-label":"Information"})}),t.jsx(f,{children:"View more information"})]}),t.jsxs(y,{children:[t.jsx(x,{children:t.jsx(j,{icon:"Settings","aria-label":"Settings"})}),t.jsx(f,{children:"Open settings"})]}),t.jsxs(y,{children:[t.jsx(x,{children:t.jsx(j,{icon:"Trash2",variant:"destructive","aria-label":"Delete"})}),t.jsx(f,{children:"Delete item"})]})]})},O={name:"With Disabled Button",render:()=>t.jsxs(y,{children:[t.jsx(x,{children:t.jsx("span",{role:"button",tabIndex:0,children:t.jsx(j,{disabled:!0,style:{pointerEvents:"none"},children:"Disabled Button"})})}),t.jsx(f,{children:"This action is currently unavailable"})]})},A={name:"Rich Content",render:()=>t.jsxs(y,{children:[t.jsx(x,{children:t.jsx(j,{variant:"secondary",children:"Hover for details"})}),t.jsxs(f,{className:"max-w-xs",children:[t.jsx("p",{className:"font-bold",children:"Keyboard Shortcut"}),t.jsxs("p",{className:"opacity-80",children:["Press ",t.jsx("kbd",{className:"px-1 bg-background/20 rounded",children:"Ctrl"})," +"," ",t.jsx("kbd",{className:"px-1 bg-background/20 rounded",children:"S"})," to save"]})]})]})};var U,Y,z;k.parameters={...k.parameters,docs:{...(U=k.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(z=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};var X,J,Q;I.parameters={...I.parameters,docs:{...(X=I.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Q=(J=I.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,ee,te;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,re,ne;O.parameters={...O.parameters,docs:{...(oe=O.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ne=(re=O.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var se,ie,ae;A.parameters={...A.parameters,docs:{...(se=A.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ae=(ie=A.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};const ht=["Playground","Sides","WithIconButton","WithDisabledButton","RichContent"];export{k as Playground,A as RichContent,I as Sides,O as WithDisabledButton,S as WithIconButton,ht as __namedExportsOrder,mt as default};
