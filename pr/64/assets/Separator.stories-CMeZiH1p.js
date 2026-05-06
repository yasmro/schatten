import{r as p,j as e}from"./iframe-78_2x2Dg.js";import"./index-CZzvuarq.js";import{c as _}from"./index-Cm42CQhu.js";import{c as O}from"./utils-BLSKlp9E.js";import"./preload-helper-_w2XXFRF.js";import"./index-DvtJsAuA.js";var T=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],C=T.reduce((a,r)=>{const o=_(`Primitive.${r}`),s=p.forwardRef((i,n)=>{const{asChild:u,...d}=i,P=u?o:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),e.jsx(P,{...d,ref:n})});return s.displayName=`Primitive.${r}`,{...a,[r]:s}},{}),A="Separator",h="horizontal",E=["horizontal","vertical"],b=p.forwardRef((a,r)=>{const{decorative:o,orientation:s=h,...i}=a,n=V(s)?s:h,d=o?{role:"none"}:{"aria-orientation":n==="vertical"?n:void 0,role:"separator"};return e.jsx(C.div,{"data-orientation":n,...d,...i,ref:r})});b.displayName=A;function V(a){return E.includes(a)}var z=b;const t=p.forwardRef(({className:a,orientation:r="horizontal",decorative:o=!0,...s},i)=>e.jsx(z,{ref:i,orientation:r,decorative:o,className:O("shrink-0 bg-border",r==="horizontal"?"h-px w-full":"h-full w-px",a),...s}));t.displayName=z.displayName;try{t.displayName="Separator",t.__docgenInfo={description:"",displayName:"Separator",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const B={title:"Components/lv1/Separator",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{description:"Orientation of the separator.",control:"select",options:["horizontal","vertical"],table:{type:{summary:'"horizontal" | "vertical"'},defaultValue:{summary:"horizontal"}}},decorative:{description:'When true, the separator is purely visual and hidden from assistive technologies. When false, it is exposed as a semantic divider with role="separator".',control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}}}},l={name:"Playground",args:{orientation:"horizontal",decorative:!0},render:a=>e.jsxs("div",{className:"w-64",children:[e.jsx("p",{className:"text-sm",children:"Above"}),e.jsx(t,{...a,className:a.orientation==="vertical"?"h-6":""}),e.jsx("p",{className:"text-sm",children:"Below"})]})},c={name:"Horizontal",render:()=>e.jsxs("div",{className:"w-72 space-y-3",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium",children:"Schatten UI"}),e.jsx("p",{className:"text-sm text-foreground-muted",children:"A design system for the web."})]}),e.jsx(t,{}),e.jsxs("div",{className:"flex gap-4 text-sm text-foreground-muted",children:[e.jsx("span",{children:"Docs"}),e.jsx("span",{children:"Components"}),e.jsx("span",{children:"Themes"})]})]})},m={name:"Vertical",render:()=>e.jsxs("div",{className:"flex h-6 items-center gap-3 text-sm",children:[e.jsx("span",{children:"Docs"}),e.jsx(t,{orientation:"vertical"}),e.jsx("span",{children:"Components"}),e.jsx(t,{orientation:"vertical"}),e.jsx("span",{children:"Themes"})]})};var v,x,f;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    orientation: 'horizontal',
    decorative: true
  },
  render: args => <div className="w-64">
      <p className="text-sm">Above</p>
      <Separator {...args} className={args.orientation === 'vertical' ? 'h-6' : ''} />
      <p className="text-sm">Below</p>
    </div>
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var N,g,y;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Horizontal',
  render: () => <div className="w-72 space-y-3">
      <div>
        <h4 className="text-sm font-medium">Schatten UI</h4>
        <p className="text-sm text-foreground-muted">A design system for the web.</p>
      </div>
      <Separator />
      <div className="flex gap-4 text-sm text-foreground-muted">
        <span>Docs</span>
        <span>Components</span>
        <span>Themes</span>
      </div>
    </div>
}`,...(y=(g=c.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var j,S,w;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Vertical',
  render: () => <div className="flex h-6 items-center gap-3 text-sm">
      <span>Docs</span>
      <Separator orientation="vertical" />
      <span>Components</span>
      <Separator orientation="vertical" />
      <span>Themes</span>
    </div>
}`,...(w=(S=m.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const W=["Playground","Horizontal","Vertical"];export{c as Horizontal,l as Playground,m as Vertical,W as __namedExportsOrder,B as default};
