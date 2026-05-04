import{r as s,j as e}from"./iframe-DvTXJcxU.js";import{B as v}from"./Button-DhpgFhCu.js";import{b as Re,P as Ae,d as w,c as Be,f as De}from"./index-CMBeD08-.js";import{u as he}from"./index-BsyalPDK.js";import{R as Se,A as Ie,P as Oe,a as ke,c as fe,D as Le,C as He,b as Me}from"./index-BOdRjFcW.js";import{u as Ve}from"./index-BlwbLQma.js";import{P as Te}from"./index-713Le14n.js";import{c as ge}from"./index-DHk-Frat.js";import"./preload-helper-C30NFVqV.js";import"./index-zHFvEtkb.js";import"./index-COWpJAGp.js";import"./chevron-up-PoV6oSoX.js";import"./Spinner-Dakwx7nD.js";import"./index-DVjl-Ijd.js";var[H]=Be("Tooltip",[fe]),M=fe(),xe="TooltipProvider",We=700,V="tooltip.open",[Ge,F]=H(xe),ye=t=>{const{__scopeTooltip:r,delayDuration:o=We,skipDelayDuration:n=300,disableHoverableContent:i=!1,children:l}=t,c=s.useRef(!0),f=s.useRef(!1),a=s.useRef(0);return s.useEffect(()=>{const u=a.current;return()=>window.clearTimeout(u)},[]),e.jsx(Ge,{scope:r,isOpenDelayedRef:c,delayDuration:o,onOpen:s.useCallback(()=>{window.clearTimeout(a.current),c.current=!1},[]),onClose:s.useCallback(()=>{window.clearTimeout(a.current),a.current=window.setTimeout(()=>c.current=!0,n)},[n]),isPointerInTransitRef:f,onPointerInTransitChange:s.useCallback(u=>{f.current=u},[]),disableHoverableContent:i,children:l})};ye.displayName=xe;var A="Tooltip",[qe,B]=H(A),ve=t=>{const{__scopeTooltip:r,children:o,open:n,defaultOpen:i,onOpenChange:l,disableHoverableContent:c,delayDuration:f}=t,a=F(A,t.__scopeTooltip),u=M(r),[d,m]=s.useState(null),T=Ve(),p=s.useRef(0),y=c??a.disableHoverableContent,b=f??a.delayDuration,C=s.useRef(!1),[_,j]=Re({prop:n,defaultProp:i??!1,onChange:U=>{U?(a.onOpen(),document.dispatchEvent(new CustomEvent(V))):a.onClose(),l==null||l(U)},caller:A}),N=s.useMemo(()=>_?C.current?"delayed-open":"instant-open":"closed",[_]),E=s.useCallback(()=>{window.clearTimeout(p.current),p.current=0,C.current=!1,j(!0)},[j]),R=s.useCallback(()=>{window.clearTimeout(p.current),p.current=0,j(!1)},[j]),K=s.useCallback(()=>{window.clearTimeout(p.current),p.current=window.setTimeout(()=>{C.current=!0,j(!0),p.current=0},b)},[b,j]);return s.useEffect(()=>()=>{p.current&&(window.clearTimeout(p.current),p.current=0)},[]),e.jsx(Se,{...u,children:e.jsx(qe,{scope:r,contentId:T,open:_,stateAttribute:N,trigger:d,onTriggerChange:m,onTriggerEnter:s.useCallback(()=>{a.isOpenDelayedRef.current?K():E()},[a.isOpenDelayedRef,K,E]),onTriggerLeave:s.useCallback(()=>{y?R():(window.clearTimeout(p.current),p.current=0)},[R,y]),onOpen:E,onClose:R,disableHoverableContent:y,children:o})})};ve.displayName=A;var W="TooltipTrigger",Ce=s.forwardRef((t,r)=>{const{__scopeTooltip:o,...n}=t,i=B(W,o),l=F(W,o),c=M(o),f=s.useRef(null),a=he(r,f,i.onTriggerChange),u=s.useRef(!1),d=s.useRef(!1),m=s.useCallback(()=>u.current=!1,[]);return s.useEffect(()=>()=>document.removeEventListener("pointerup",m),[m]),e.jsx(Ie,{asChild:!0,...c,children:e.jsx(Ae.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...n,ref:a,onPointerMove:w(t.onPointerMove,T=>{T.pointerType!=="touch"&&!d.current&&!l.isPointerInTransitRef.current&&(i.onTriggerEnter(),d.current=!0)}),onPointerLeave:w(t.onPointerLeave,()=>{i.onTriggerLeave(),d.current=!1}),onPointerDown:w(t.onPointerDown,()=>{i.open&&i.onClose(),u.current=!0,document.addEventListener("pointerup",m,{once:!0})}),onFocus:w(t.onFocus,()=>{u.current||i.onOpen()}),onBlur:w(t.onBlur,i.onClose),onClick:w(t.onClick,i.onClose)})})});Ce.displayName=W;var $="TooltipPortal",[Fe,$e]=H($,{forceMount:void 0}),be=t=>{const{__scopeTooltip:r,forceMount:o,children:n,container:i}=t,l=B($,r);return e.jsx(Fe,{scope:r,forceMount:o,children:e.jsx(Te,{present:o||l.open,children:e.jsx(Oe,{asChild:!0,container:i,children:n})})})};be.displayName=$;var P="TooltipContent",je=s.forwardRef((t,r)=>{const o=$e(P,t.__scopeTooltip),{forceMount:n=o.forceMount,side:i="top",...l}=t,c=B(P,t.__scopeTooltip);return e.jsx(Te,{present:n||c.open,children:c.disableHoverableContent?e.jsx(_e,{side:i,...l,ref:r}):e.jsx(ze,{side:i,...l,ref:r})})}),ze=s.forwardRef((t,r)=>{const o=B(P,t.__scopeTooltip),n=F(P,t.__scopeTooltip),i=s.useRef(null),l=he(r,i),[c,f]=s.useState(null),{trigger:a,onClose:u}=o,d=i.current,{onPointerInTransitChange:m}=n,T=s.useCallback(()=>{f(null),m(!1)},[m]),p=s.useCallback((y,b)=>{const C=y.currentTarget,_={x:y.clientX,y:y.clientY},j=Xe(_,C.getBoundingClientRect()),N=Je(_,j),E=Qe(b.getBoundingClientRect()),R=et([...N,...E]);f(R),m(!0)},[m]);return s.useEffect(()=>()=>T(),[T]),s.useEffect(()=>{if(a&&d){const y=C=>p(C,d),b=C=>p(C,a);return a.addEventListener("pointerleave",y),d.addEventListener("pointerleave",b),()=>{a.removeEventListener("pointerleave",y),d.removeEventListener("pointerleave",b)}}},[a,d,p,T]),s.useEffect(()=>{if(c){const y=b=>{const C=b.target,_={x:b.clientX,y:b.clientY},j=(a==null?void 0:a.contains(C))||(d==null?void 0:d.contains(C)),N=!Ze(_,c);j?T():N&&(T(),u())};return document.addEventListener("pointermove",y),()=>document.removeEventListener("pointermove",y)}},[a,d,c,u,T]),e.jsx(_e,{...t,ref:l})}),[Ke,Ue]=H(A,{isInside:!1}),Ye=De("TooltipContent"),_e=s.forwardRef((t,r)=>{const{__scopeTooltip:o,children:n,"aria-label":i,onEscapeKeyDown:l,onPointerDownOutside:c,...f}=t,a=B(P,o),u=M(o),{onClose:d}=a;return s.useEffect(()=>(document.addEventListener(V,d),()=>document.removeEventListener(V,d)),[d]),s.useEffect(()=>{if(a.trigger){const m=T=>{const p=T.target;p!=null&&p.contains(a.trigger)&&d()};return window.addEventListener("scroll",m,{capture:!0}),()=>window.removeEventListener("scroll",m,{capture:!0})}},[a.trigger,d]),e.jsx(Le,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:l,onPointerDownOutside:c,onFocusOutside:m=>m.preventDefault(),onDismiss:d,children:e.jsxs(He,{"data-state":a.stateAttribute,...u,...f,ref:r,style:{...f.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[e.jsx(Ye,{children:n}),e.jsx(Ke,{scope:o,isInside:!0,children:e.jsx(Me,{id:a.contentId,role:"tooltip",children:i||n})})]})})});je.displayName=P;var we="TooltipArrow",Pe=s.forwardRef((t,r)=>{const{__scopeTooltip:o,...n}=t,i=M(o);return Ue(we,o).isInside?null:e.jsx(ke,{...i,...n,ref:r})});Pe.displayName=we;function Xe(t,r){const o=Math.abs(r.top-t.y),n=Math.abs(r.bottom-t.y),i=Math.abs(r.right-t.x),l=Math.abs(r.left-t.x);switch(Math.min(o,n,i,l)){case l:return"left";case i:return"right";case o:return"top";case n:return"bottom";default:throw new Error("unreachable")}}function Je(t,r,o=5){const n=[];switch(r){case"top":n.push({x:t.x-o,y:t.y+o},{x:t.x+o,y:t.y+o});break;case"bottom":n.push({x:t.x-o,y:t.y-o},{x:t.x+o,y:t.y-o});break;case"left":n.push({x:t.x+o,y:t.y-o},{x:t.x+o,y:t.y+o});break;case"right":n.push({x:t.x-o,y:t.y-o},{x:t.x-o,y:t.y+o});break}return n}function Qe(t){const{top:r,right:o,bottom:n,left:i}=t;return[{x:i,y:r},{x:o,y:r},{x:o,y:n},{x:i,y:n}]}function Ze(t,r){const{x:o,y:n}=t;let i=!1;for(let l=0,c=r.length-1;l<r.length;c=l++){const f=r[l],a=r[c],u=f.x,d=f.y,m=a.x,T=a.y;d>n!=T>n&&o<(m-u)*(n-d)/(T-d)+u&&(i=!i)}return i}function et(t){const r=t.slice();return r.sort((o,n)=>o.x<n.x?-1:o.x>n.x?1:o.y<n.y?-1:o.y>n.y?1:0),tt(r)}function tt(t){if(t.length<=1)return t.slice();const r=[];for(let n=0;n<t.length;n++){const i=t[n];for(;r.length>=2;){const l=r[r.length-1],c=r[r.length-2];if((l.x-c.x)*(i.y-c.y)>=(l.y-c.y)*(i.x-c.x))r.pop();else break}r.push(i)}r.pop();const o=[];for(let n=t.length-1;n>=0;n--){const i=t[n];for(;o.length>=2;){const l=o[o.length-1],c=o[o.length-2];if((l.x-c.x)*(i.y-c.y)>=(l.y-c.y)*(i.x-c.x))o.pop();else break}o.push(i)}return o.pop(),r.length===1&&o.length===1&&r[0].x===o[0].x&&r[0].y===o[0].y?r:r.concat(o)}var ot=ye,rt=ve,nt=Ce,Ne=be,Ee=je,z=Pe;const G=ot,g=rt,x=nt,Y=Ne,h=s.forwardRef(({className:t,sideOffset:r=6,container:o,children:n,hideArrow:i=!1,...l},c)=>e.jsx(Ne,{container:o,children:e.jsxs(Ee,{ref:c,sideOffset:r,className:ge("z-50 overflow-hidden border border-border-strong bg-background px-3 py-1.5 text-sm text-foreground shadow-md","animate-in fade-in-0 zoom-in-95","data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95","data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...l,children:[n,!i&&e.jsx(z,{className:"fill-background drop-shadow-[0_1px_0_var(--color-border-strong)]"})]})}));h.displayName=Ee.displayName;const q=s.forwardRef(({className:t,...r},o)=>e.jsx(z,{ref:o,className:ge("fill-background",t),...r}));q.displayName=z.displayName;try{g.displayName="Tooltip",g.__docgenInfo={description:"",displayName:"Tooltip",props:{}}}catch{}try{q.displayName="TooltipArrow",q.__docgenInfo={description:"",displayName:"TooltipArrow",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{h.displayName="TooltipContent",h.__docgenInfo={description:"",displayName:"TooltipContent",props:{container:{defaultValue:null,description:"Portal container element",name:"container",required:!1,type:{name:"Element | DocumentFragment | null"}},hideArrow:{defaultValue:{value:"false"},description:"Hide the arrow indicator.",name:"hideArrow",required:!1,type:{name:"boolean"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{Y.displayName="TooltipPortal",Y.__docgenInfo={description:"",displayName:"TooltipPortal",props:{}}}catch{}try{G.displayName="TooltipProvider",G.__docgenInfo={description:"",displayName:"TooltipProvider",props:{}}}catch{}try{x.displayName="TooltipTrigger",x.__docgenInfo={description:"",displayName:"TooltipTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const yt={title:"Components/lv1/Tooltip",component:h,parameters:{layout:"centered"},tags:["autodocs"],decorators:[t=>e.jsx(G,{delayDuration:100,children:e.jsx(t,{})})],argTypes:{side:{description:"The preferred side of the trigger to render the tooltip.",control:"select",options:["top","right","bottom","left"],table:{type:{summary:'"top" | "right" | "bottom" | "left"'},defaultValue:{summary:"top"}}},sideOffset:{description:"Distance in pixels from the trigger.",control:"number",table:{type:{summary:"number"},defaultValue:{summary:"6"}}},hideArrow:{description:"Hide the arrow indicator.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},align:{description:"The preferred alignment against the trigger.",control:"select",options:["start","center","end"],table:{type:{summary:'"start" | "center" | "end"'},defaultValue:{summary:"center"}}},alignOffset:{description:'An offset in pixels from the "start" or "end" alignment options.',control:"number",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},children:{description:"Content to display in the tooltip.",control:"text",table:{type:{summary:"ReactNode"}}}}},D={name:"Playground",args:{children:"This is helpful information.",side:"top",sideOffset:6,align:"center",hideArrow:!1},render:t=>e.jsxs(g,{children:[e.jsx(x,{asChild:!0,children:e.jsx(v,{variant:"secondary",children:"Hover me"})}),e.jsx(h,{...t})]})},S={name:"Sides",render:()=>e.jsxs("div",{className:"flex gap-8",children:[e.jsxs(g,{children:[e.jsx(x,{asChild:!0,children:e.jsx(v,{variant:"secondary",children:"Top"})}),e.jsx(h,{side:"top",children:"Tooltip on top"})]}),e.jsxs(g,{children:[e.jsx(x,{asChild:!0,children:e.jsx(v,{variant:"secondary",children:"Right"})}),e.jsx(h,{side:"right",children:"Tooltip on right"})]}),e.jsxs(g,{children:[e.jsx(x,{asChild:!0,children:e.jsx(v,{variant:"secondary",children:"Bottom"})}),e.jsx(h,{side:"bottom",children:"Tooltip on bottom"})]}),e.jsxs(g,{children:[e.jsx(x,{asChild:!0,children:e.jsx(v,{variant:"secondary",children:"Left"})}),e.jsx(h,{side:"left",children:"Tooltip on left"})]})]})},I={name:"Alignments",render:()=>e.jsx("div",{className:"flex flex-col gap-8",children:e.jsxs("div",{className:"flex gap-8",children:[e.jsxs(g,{children:[e.jsx(x,{asChild:!0,children:e.jsx(v,{variant:"secondary",className:"w-32",children:"Start"})}),e.jsx(h,{side:"bottom",align:"start",children:"Aligned to start"})]}),e.jsxs(g,{children:[e.jsx(x,{asChild:!0,children:e.jsx(v,{variant:"secondary",className:"w-32",children:"Center"})}),e.jsx(h,{side:"bottom",align:"center",children:"Aligned to center"})]}),e.jsxs(g,{children:[e.jsx(x,{asChild:!0,children:e.jsx(v,{variant:"secondary",className:"w-32",children:"End"})}),e.jsx(h,{side:"bottom",align:"end",children:"Aligned to end"})]})]})})},O={name:"With Icon Button",render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsxs(g,{children:[e.jsx(x,{asChild:!0,children:e.jsx(v,{icon:"Info","aria-label":"Information"})}),e.jsx(h,{children:"View more information"})]}),e.jsxs(g,{children:[e.jsx(x,{asChild:!0,children:e.jsx(v,{icon:"Settings","aria-label":"Settings"})}),e.jsx(h,{children:"Open settings"})]}),e.jsxs(g,{children:[e.jsx(x,{asChild:!0,children:e.jsx(v,{icon:"Trash2",variant:"destructive","aria-label":"Delete"})}),e.jsx(h,{children:"Delete item"})]})]})},k={name:"With Disabled Button",render:()=>e.jsxs(g,{children:[e.jsx(x,{asChild:!0,children:e.jsx("span",{role:"button",tabIndex:0,children:e.jsx(v,{disabled:!0,style:{pointerEvents:"none"},children:"Disabled Button"})})}),e.jsx(h,{children:"This action is currently unavailable"})]})},L={name:"Rich Content",render:()=>e.jsxs(g,{children:[e.jsx(x,{asChild:!0,children:e.jsx(v,{variant:"secondary",children:"Hover for details"})}),e.jsxs(h,{className:"max-w-xs",children:[e.jsx("p",{className:"font-bold",children:"Keyboard Shortcut"}),e.jsxs("p",{className:"text-foreground-muted",children:["Press ",e.jsx("kbd",{className:"px-1 bg-surface-hover rounded",children:"Ctrl"})," +"," ",e.jsx("kbd",{className:"px-1 bg-surface-hover rounded",children:"S"})," to save"]})]})]})};var X,J,Q;D.parameters={...D.parameters,docs:{...(X=D.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    children: 'This is helpful information.',
    side: 'top',
    sideOffset: 6,
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
}`,...(te=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,re,ne;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ne=(re=I.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ie,se,ae;O.parameters={...O.parameters,docs:{...(ie=O.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ae=(se=O.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var le,ce,de;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(de=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,ue,me;L.parameters={...L.parameters,docs:{...(pe=L.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(me=(ue=L.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};const vt=["Playground","Sides","Alignments","WithIconButton","WithDisabledButton","RichContent"];export{I as Alignments,D as Playground,L as RichContent,S as Sides,k as WithDisabledButton,O as WithIconButton,vt as __namedExportsOrder,yt as default};
