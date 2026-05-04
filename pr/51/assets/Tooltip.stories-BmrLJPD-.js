import{r as s,j as e}from"./iframe-DQUMFEll.js";import{B as v}from"./Button-DbQAWTBD.js";import{b as Re,P as Ae,d as w,c as Be,f as De}from"./index-dQoU3zLV.js";import{u as he}from"./index-DHKfVGxy.js";import{R as Se,A as ke,P as Ie,a as Oe,c as Te,D as Le,C as He,b as Me}from"./index--b6jr1k0.js";import{u as Ve}from"./index-CUtQhic9.js";import{P as ge}from"./index-CNiLHsNQ.js";import{c as fe}from"./index-DHk-Frat.js";import"./preload-helper-C30NFVqV.js";import"./index-fe338coh.js";import"./index-J6jPjAe3.js";import"./chevron-up-BMSkzH0a.js";import"./Spinner-DB7PjKjR.js";import"./index-8Chylr7f.js";var[H]=Be("Tooltip",[Te]),M=Te(),xe="TooltipProvider",We=700,V="tooltip.open",[Ge,F]=H(xe),ye=t=>{const{__scopeTooltip:r,delayDuration:o=We,skipDelayDuration:n=300,disableHoverableContent:i=!1,children:l}=t,c=s.useRef(!0),T=s.useRef(!1),a=s.useRef(0);return s.useEffect(()=>{const u=a.current;return()=>window.clearTimeout(u)},[]),e.jsx(Ge,{scope:r,isOpenDelayedRef:c,delayDuration:o,onOpen:s.useCallback(()=>{window.clearTimeout(a.current),c.current=!1},[]),onClose:s.useCallback(()=>{window.clearTimeout(a.current),a.current=window.setTimeout(()=>c.current=!0,n)},[n]),isPointerInTransitRef:T,onPointerInTransitChange:s.useCallback(u=>{T.current=u},[]),disableHoverableContent:i,children:l})};ye.displayName=xe;var A="Tooltip",[qe,B]=H(A),ve=t=>{const{__scopeTooltip:r,children:o,open:n,defaultOpen:i,onOpenChange:l,disableHoverableContent:c,delayDuration:T}=t,a=F(A,t.__scopeTooltip),u=M(r),[d,m]=s.useState(null),g=Ve(),p=s.useRef(0),y=c??a.disableHoverableContent,b=T??a.delayDuration,C=s.useRef(!1),[_,j]=Re({prop:n,defaultProp:i??!1,onChange:Y=>{Y?(a.onOpen(),document.dispatchEvent(new CustomEvent(V))):a.onClose(),l==null||l(Y)},caller:A}),N=s.useMemo(()=>_?C.current?"delayed-open":"instant-open":"closed",[_]),E=s.useCallback(()=>{window.clearTimeout(p.current),p.current=0,C.current=!1,j(!0)},[j]),R=s.useCallback(()=>{window.clearTimeout(p.current),p.current=0,j(!1)},[j]),U=s.useCallback(()=>{window.clearTimeout(p.current),p.current=window.setTimeout(()=>{C.current=!0,j(!0),p.current=0},b)},[b,j]);return s.useEffect(()=>()=>{p.current&&(window.clearTimeout(p.current),p.current=0)},[]),e.jsx(Se,{...u,children:e.jsx(qe,{scope:r,contentId:g,open:_,stateAttribute:N,trigger:d,onTriggerChange:m,onTriggerEnter:s.useCallback(()=>{a.isOpenDelayedRef.current?U():E()},[a.isOpenDelayedRef,U,E]),onTriggerLeave:s.useCallback(()=>{y?R():(window.clearTimeout(p.current),p.current=0)},[R,y]),onOpen:E,onClose:R,disableHoverableContent:y,children:o})})};ve.displayName=A;var W="TooltipTrigger",Ce=s.forwardRef((t,r)=>{const{__scopeTooltip:o,...n}=t,i=B(W,o),l=F(W,o),c=M(o),T=s.useRef(null),a=he(r,T,i.onTriggerChange),u=s.useRef(!1),d=s.useRef(!1),m=s.useCallback(()=>u.current=!1,[]);return s.useEffect(()=>()=>document.removeEventListener("pointerup",m),[m]),e.jsx(ke,{asChild:!0,...c,children:e.jsx(Ae.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...n,ref:a,onPointerMove:w(t.onPointerMove,g=>{g.pointerType!=="touch"&&!d.current&&!l.isPointerInTransitRef.current&&(i.onTriggerEnter(),d.current=!0)}),onPointerLeave:w(t.onPointerLeave,()=>{i.onTriggerLeave(),d.current=!1}),onPointerDown:w(t.onPointerDown,()=>{i.open&&i.onClose(),u.current=!0,document.addEventListener("pointerup",m,{once:!0})}),onFocus:w(t.onFocus,()=>{u.current||i.onOpen()}),onBlur:w(t.onBlur,i.onClose),onClick:w(t.onClick,i.onClose)})})});Ce.displayName=W;var $="TooltipPortal",[Fe,$e]=H($,{forceMount:void 0}),be=t=>{const{__scopeTooltip:r,forceMount:o,children:n,container:i}=t,l=B($,r);return e.jsx(Fe,{scope:r,forceMount:o,children:e.jsx(ge,{present:o||l.open,children:e.jsx(Ie,{asChild:!0,container:i,children:n})})})};be.displayName=$;var P="TooltipContent",je=s.forwardRef((t,r)=>{const o=$e(P,t.__scopeTooltip),{forceMount:n=o.forceMount,side:i="top",...l}=t,c=B(P,t.__scopeTooltip);return e.jsx(ge,{present:n||c.open,children:c.disableHoverableContent?e.jsx(_e,{side:i,...l,ref:r}):e.jsx(Ke,{side:i,...l,ref:r})})}),Ke=s.forwardRef((t,r)=>{const o=B(P,t.__scopeTooltip),n=F(P,t.__scopeTooltip),i=s.useRef(null),l=he(r,i),[c,T]=s.useState(null),{trigger:a,onClose:u}=o,d=i.current,{onPointerInTransitChange:m}=n,g=s.useCallback(()=>{T(null),m(!1)},[m]),p=s.useCallback((y,b)=>{const C=y.currentTarget,_={x:y.clientX,y:y.clientY},j=ze(_,C.getBoundingClientRect()),N=Je(_,j),E=Qe(b.getBoundingClientRect()),R=et([...N,...E]);T(R),m(!0)},[m]);return s.useEffect(()=>()=>g(),[g]),s.useEffect(()=>{if(a&&d){const y=C=>p(C,d),b=C=>p(C,a);return a.addEventListener("pointerleave",y),d.addEventListener("pointerleave",b),()=>{a.removeEventListener("pointerleave",y),d.removeEventListener("pointerleave",b)}}},[a,d,p,g]),s.useEffect(()=>{if(c){const y=b=>{const C=b.target,_={x:b.clientX,y:b.clientY},j=(a==null?void 0:a.contains(C))||(d==null?void 0:d.contains(C)),N=!Ze(_,c);j?g():N&&(g(),u())};return document.addEventListener("pointermove",y),()=>document.removeEventListener("pointermove",y)}},[a,d,c,u,g]),e.jsx(_e,{...t,ref:l})}),[Ue,Ye]=H(A,{isInside:!1}),Xe=De("TooltipContent"),_e=s.forwardRef((t,r)=>{const{__scopeTooltip:o,children:n,"aria-label":i,onEscapeKeyDown:l,onPointerDownOutside:c,...T}=t,a=B(P,o),u=M(o),{onClose:d}=a;return s.useEffect(()=>(document.addEventListener(V,d),()=>document.removeEventListener(V,d)),[d]),s.useEffect(()=>{if(a.trigger){const m=g=>{const p=g.target;p!=null&&p.contains(a.trigger)&&d()};return window.addEventListener("scroll",m,{capture:!0}),()=>window.removeEventListener("scroll",m,{capture:!0})}},[a.trigger,d]),e.jsx(Le,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:l,onPointerDownOutside:c,onFocusOutside:m=>m.preventDefault(),onDismiss:d,children:e.jsxs(He,{"data-state":a.stateAttribute,...u,...T,ref:r,style:{...T.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[e.jsx(Xe,{children:n}),e.jsx(Ue,{scope:o,isInside:!0,children:e.jsx(Me,{id:a.contentId,role:"tooltip",children:i||n})})]})})});je.displayName=P;var we="TooltipArrow",Pe=s.forwardRef((t,r)=>{const{__scopeTooltip:o,...n}=t,i=M(o);return Ye(we,o).isInside?null:e.jsx(Oe,{...i,...n,ref:r})});Pe.displayName=we;function ze(t,r){const o=Math.abs(r.top-t.y),n=Math.abs(r.bottom-t.y),i=Math.abs(r.right-t.x),l=Math.abs(r.left-t.x);switch(Math.min(o,n,i,l)){case l:return"left";case i:return"right";case o:return"top";case n:return"bottom";default:throw new Error("unreachable")}}function Je(t,r,o=5){const n=[];switch(r){case"top":n.push({x:t.x-o,y:t.y+o},{x:t.x+o,y:t.y+o});break;case"bottom":n.push({x:t.x-o,y:t.y-o},{x:t.x+o,y:t.y-o});break;case"left":n.push({x:t.x+o,y:t.y-o},{x:t.x+o,y:t.y+o});break;case"right":n.push({x:t.x-o,y:t.y-o},{x:t.x-o,y:t.y+o});break}return n}function Qe(t){const{top:r,right:o,bottom:n,left:i}=t;return[{x:i,y:r},{x:o,y:r},{x:o,y:n},{x:i,y:n}]}function Ze(t,r){const{x:o,y:n}=t;let i=!1;for(let l=0,c=r.length-1;l<r.length;c=l++){const T=r[l],a=r[c],u=T.x,d=T.y,m=a.x,g=a.y;d>n!=g>n&&o<(m-u)*(n-d)/(g-d)+u&&(i=!i)}return i}function et(t){const r=t.slice();return r.sort((o,n)=>o.x<n.x?-1:o.x>n.x?1:o.y<n.y?-1:o.y>n.y?1:0),tt(r)}function tt(t){if(t.length<=1)return t.slice();const r=[];for(let n=0;n<t.length;n++){const i=t[n];for(;r.length>=2;){const l=r[r.length-1],c=r[r.length-2];if((l.x-c.x)*(i.y-c.y)>=(l.y-c.y)*(i.x-c.x))r.pop();else break}r.push(i)}r.pop();const o=[];for(let n=t.length-1;n>=0;n--){const i=t[n];for(;o.length>=2;){const l=o[o.length-1],c=o[o.length-2];if((l.x-c.x)*(i.y-c.y)>=(l.y-c.y)*(i.x-c.x))o.pop();else break}o.push(i)}return o.pop(),r.length===1&&o.length===1&&r[0].x===o[0].x&&r[0].y===o[0].y?r:r.concat(o)}var ot=ye,rt=ve,nt=Ce,Ne=be,Ee=je,K=Pe;const G=ot,f=rt,x=nt,X=Ne,h=s.forwardRef(({className:t,sideOffset:r=4,container:o,children:n,hideArrow:i=!1,...l},c)=>e.jsx(Ne,{container:o,children:e.jsxs(Ee,{ref:c,sideOffset:r,className:fe("tooltip-content z-50 bg-foreground px-3 py-1.5 text-sm text-background shadow-md",t),...l,children:[n,!i&&e.jsx(K,{className:"fill-foreground"})]})}));h.displayName=Ee.displayName;const q=s.forwardRef(({className:t,...r},o)=>e.jsx(K,{ref:o,className:fe("fill-background",t),...r}));q.displayName=K.displayName;try{f.displayName="Tooltip",f.__docgenInfo={description:"",displayName:"Tooltip",props:{}}}catch{}try{q.displayName="TooltipArrow",q.__docgenInfo={description:"",displayName:"TooltipArrow",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{h.displayName="TooltipContent",h.__docgenInfo={description:"",displayName:"TooltipContent",props:{container:{defaultValue:null,description:"Portal container element",name:"container",required:!1,type:{name:"Element | DocumentFragment | null"}},hideArrow:{defaultValue:{value:"false"},description:"Hide the arrow indicator.",name:"hideArrow",required:!1,type:{name:"boolean"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{X.displayName="TooltipPortal",X.__docgenInfo={description:"",displayName:"TooltipPortal",props:{}}}catch{}try{G.displayName="TooltipProvider",G.__docgenInfo={description:"",displayName:"TooltipProvider",props:{}}}catch{}try{x.displayName="TooltipTrigger",x.__docgenInfo={description:"",displayName:"TooltipTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const yt={title:"Components/lv1/Tooltip",component:h,parameters:{layout:"centered"},tags:["autodocs"],decorators:[t=>e.jsx(G,{delayDuration:100,children:e.jsx(t,{})})],argTypes:{side:{description:"The preferred side of the trigger to render the tooltip.",control:"select",options:["top","right","bottom","left"],table:{type:{summary:'"top" | "right" | "bottom" | "left"'},defaultValue:{summary:"top"}}},sideOffset:{description:"Distance in pixels from the trigger.",control:"number",table:{type:{summary:"number"},defaultValue:{summary:"4"}}},hideArrow:{description:"Hide the arrow indicator.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},align:{description:"The preferred alignment against the trigger.",control:"select",options:["start","center","end"],table:{type:{summary:'"start" | "center" | "end"'},defaultValue:{summary:"center"}}},alignOffset:{description:'An offset in pixels from the "start" or "end" alignment options.',control:"number",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},children:{description:"Content to display in the tooltip.",control:"text",table:{type:{summary:"ReactNode"}}}}},D={name:"Playground",args:{children:"This is helpful information.",side:"top",sideOffset:4,align:"center",hideArrow:!1},render:t=>e.jsxs(f,{children:[e.jsx(x,{asChild:!0,children:e.jsx(v,{variant:"secondary",children:"Hover me"})}),e.jsx(h,{...t})]})},S={name:"Sides",render:()=>e.jsxs("div",{className:"flex gap-8",children:[e.jsxs(f,{children:[e.jsx(x,{asChild:!0,children:e.jsx(v,{variant:"secondary",children:"Top"})}),e.jsx(h,{side:"top",children:"Tooltip on top"})]}),e.jsxs(f,{children:[e.jsx(x,{asChild:!0,children:e.jsx(v,{variant:"secondary",children:"Right"})}),e.jsx(h,{side:"right",children:"Tooltip on right"})]}),e.jsxs(f,{children:[e.jsx(x,{asChild:!0,children:e.jsx(v,{variant:"secondary",children:"Bottom"})}),e.jsx(h,{side:"bottom",children:"Tooltip on bottom"})]}),e.jsxs(f,{children:[e.jsx(x,{asChild:!0,children:e.jsx(v,{variant:"secondary",children:"Left"})}),e.jsx(h,{side:"left",children:"Tooltip on left"})]})]})},k={name:"Alignments",render:()=>e.jsx("div",{className:"flex flex-col gap-8",children:e.jsxs("div",{className:"flex gap-8",children:[e.jsxs(f,{children:[e.jsx(x,{asChild:!0,children:e.jsx(v,{variant:"secondary",className:"w-32",children:"Start"})}),e.jsx(h,{side:"bottom",align:"start",children:"Aligned to start"})]}),e.jsxs(f,{children:[e.jsx(x,{asChild:!0,children:e.jsx(v,{variant:"secondary",className:"w-32",children:"Center"})}),e.jsx(h,{side:"bottom",align:"center",children:"Aligned to center"})]}),e.jsxs(f,{children:[e.jsx(x,{asChild:!0,children:e.jsx(v,{variant:"secondary",className:"w-32",children:"End"})}),e.jsx(h,{side:"bottom",align:"end",children:"Aligned to end"})]})]})})},I={name:"With Icon Button",render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsxs(f,{children:[e.jsx(x,{asChild:!0,children:e.jsx(v,{icon:"Info","aria-label":"Information"})}),e.jsx(h,{children:"View more information"})]}),e.jsxs(f,{children:[e.jsx(x,{asChild:!0,children:e.jsx(v,{icon:"Settings","aria-label":"Settings"})}),e.jsx(h,{children:"Open settings"})]}),e.jsxs(f,{children:[e.jsx(x,{asChild:!0,children:e.jsx(v,{icon:"Trash2",variant:"destructive","aria-label":"Delete"})}),e.jsx(h,{children:"Delete item"})]})]})},O={name:"With Disabled Button",render:()=>e.jsxs(f,{children:[e.jsx(x,{asChild:!0,children:e.jsx("span",{role:"button",tabIndex:0,children:e.jsx(v,{disabled:!0,style:{pointerEvents:"none"},children:"Disabled Button"})})}),e.jsx(h,{children:"This action is currently unavailable"})]})},L={name:"Rich Content",render:()=>e.jsxs(f,{children:[e.jsx(x,{asChild:!0,children:e.jsx(v,{variant:"secondary",children:"Hover for details"})}),e.jsxs(h,{className:"max-w-xs",children:[e.jsx("p",{className:"font-bold",children:"Keyboard Shortcut"}),e.jsxs("p",{className:"opacity-80",children:["Press ",e.jsx("kbd",{className:"px-1 bg-background/20 rounded",children:"Ctrl"})," +"," ",e.jsx("kbd",{className:"px-1 bg-background/20 rounded",children:"S"})," to save"]})]})]})};var z,J,Q;D.parameters={...D.parameters,docs:{...(z=D.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    children: 'This is helpful information.',
    side: 'top',
    sideOffset: 4,
    align: 'center',
    hideArrow: false
  },
  render: args => <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="secondary">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent {...args} />
    </Tooltip>
}`,...(Q=(J=D.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,ee,te;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,re,ne;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Alignments',
  render: () => <div className="flex flex-col gap-8">
      <div className="flex gap-8">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary" className="w-32">
              Start
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" align="start">
            Aligned to start
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary" className="w-32">
              Center
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" align="center">
            Aligned to center
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary" className="w-32">
              End
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" align="end">
            Aligned to end
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
}`,...(ne=(re=k.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ie,se,ae;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ae=(se=I.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var le,ce,de;O.parameters={...O.parameters,docs:{...(le=O.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(de=(ce=O.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,ue,me;L.parameters={...L.parameters,docs:{...(pe=L.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(me=(ue=L.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};const vt=["Playground","Sides","Alignments","WithIconButton","WithDisabledButton","RichContent"];export{k as Alignments,D as Playground,L as RichContent,S as Sides,O as WithDisabledButton,I as WithIconButton,vt as __namedExportsOrder,yt as default};
