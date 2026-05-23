import{j as e}from"./iframe-CRqGDSYf.js";import{I as a}from"./Input-cUzZf7Re.js";import{S as m}from"./search-CPQ5KBUj.js";import{X as u}from"./x-CaDtyFkP.js";import{M as x,L as h}from"./mail-BYcXiU-c.js";import{C as f}from"./circle-alert-hg4alc9_.js";import"./preload-helper--vB6UvDd.js";import"./field-DNh8RSFX.js";import"./utils-DCADjnpI.js";import"./index-CkIaN0ex.js";/* empty css              */import"./createLucideIcon-BpqUz7xC.js";const X={title:"Components/lv1/Input",component:a,parameters:{layout:"padded",docs:{description:{component:`Parity stories — React \`<Input>\` and a hand-written vanilla
\`<div class="st-input-wrapper">…<input class="st-input">…</div>\` must
render pixel-identical. Backs the VRT in \`Input.parity.vrt.spec.ts\`.

Covered combinations:
- 3 sizes (sm / md / lg)
- text adornments (textLeft + textRight)
- icon adornments (iconLeft + iconRight)
- error / disabled / readOnly
- disabled + error / readOnly + error
- type=date (st-input--date derived modifier)

Vanilla side carries \`aria-invalid\`, \`disabled\`, \`readonly\` manually —
the CSS targets attributes only. Wrapper-click-to-focus is React-only
(no CSS equivalent for focus delegation).`}}}},i=({size:j,placeholder:v,defaultValue:I,isError:g,disabled:V,readOnly:L,textLeft:r,textRight:l,iconLeft:s,iconRight:n,type:d,id:y})=>{const z=d==="date"||d==="datetime-local";return e.jsxs("div",{className:`st-input-wrapper st-input-wrapper--${j}`,children:[r&&e.jsx("span",{className:"st-input__text-left",children:r}),!r&&s&&e.jsx("span",{className:"st-input__icon-left",children:s}),e.jsx("input",{id:y,type:d??"text",className:`st-input${z?" st-input--date":""}`,placeholder:v,defaultValue:I,"aria-invalid":g?"true":void 0,disabled:V,readOnly:L}),l&&e.jsx("span",{className:"st-input__text-right",children:l}),!l&&n&&e.jsx("span",{className:"st-input__icon-right",children:n})]})},R=()=>e.jsx(m,{"aria-hidden":"true"}),b=()=>e.jsx(x,{"aria-hidden":"true"}),E=()=>e.jsx(u,{"aria-hidden":"true"}),S=()=>e.jsx(h,{"aria-hidden":"true"}),N=()=>e.jsx(f,{"aria-hidden":"true"}),t={name:"React vs Vanilla HTML",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-12 max-w-6xl",children:[e.jsxs("div",{className:"space-y-3 w-80",children:[e.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"React"}),e.jsx(a,{size:"sm",placeholder:"Small"}),e.jsx(a,{size:"md",placeholder:"Medium"}),e.jsx(a,{size:"lg",placeholder:"Large"}),e.jsx(a,{textLeft:"https://",placeholder:"example.com"}),e.jsx(a,{textRight:".com",placeholder:"domain"}),e.jsx(a,{textLeft:"$",textRight:"USD",placeholder:"0.00"}),e.jsx(a,{iconLeft:m,placeholder:"Search…"}),e.jsx(a,{iconLeft:x,iconRight:u,placeholder:"Email"}),e.jsx(a,{isError:!0,iconLeft:f,placeholder:"Error"}),e.jsx(a,{disabled:!0,defaultValue:"Disabled"}),e.jsx(a,{readOnly:!0,defaultValue:"Read-only"}),e.jsx(a,{disabled:!0,isError:!0,defaultValue:"Disabled + error"}),e.jsx(a,{readOnly:!0,isError:!0,iconLeft:h,defaultValue:"ReadOnly + error"}),e.jsx(a,{type:"date"})]}),e.jsxs("div",{className:"space-y-3 w-80",children:[e.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"Vanilla HTML"}),e.jsx(i,{id:"v-in-sm",size:"sm",placeholder:"Small"}),e.jsx(i,{id:"v-in-md",size:"md",placeholder:"Medium"}),e.jsx(i,{id:"v-in-lg",size:"lg",placeholder:"Large"}),e.jsx(i,{id:"v-in-tl",size:"md",textLeft:"https://",placeholder:"example.com"}),e.jsx(i,{id:"v-in-tr",size:"md",textRight:".com",placeholder:"domain"}),e.jsx(i,{id:"v-in-tlr",size:"md",textLeft:"$",textRight:"USD",placeholder:"0.00"}),e.jsx(i,{id:"v-in-il",size:"md",iconLeft:e.jsx(R,{}),placeholder:"Search…"}),e.jsx(i,{id:"v-in-ilr",size:"md",iconLeft:e.jsx(b,{}),iconRight:e.jsx(E,{}),placeholder:"Email"}),e.jsx(i,{id:"v-in-err",size:"md",isError:!0,iconLeft:e.jsx(N,{}),placeholder:"Error"}),e.jsx(i,{id:"v-in-dis",size:"md",disabled:!0,defaultValue:"Disabled"}),e.jsx(i,{id:"v-in-ro",size:"md",readOnly:!0,defaultValue:"Read-only"}),e.jsx(i,{id:"v-in-dis-err",size:"md",disabled:!0,isError:!0,defaultValue:"Disabled + error"}),e.jsx(i,{id:"v-in-ro-err",size:"md",readOnly:!0,isError:!0,iconLeft:e.jsx(S,{}),defaultValue:"ReadOnly + error"}),e.jsx(i,{id:"v-in-date",size:"md",type:"date"})]})]})};var o,c,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'React vs Vanilla HTML',
  render: () => <div className="grid grid-cols-2 gap-12 max-w-6xl">
      <div className="space-y-3 w-80">
        <p className="text-xs mb-2 text-foreground-muted">React</p>
        <Input size="sm" placeholder="Small" />
        <Input size="md" placeholder="Medium" />
        <Input size="lg" placeholder="Large" />
        <Input textLeft="https://" placeholder="example.com" />
        <Input textRight=".com" placeholder="domain" />
        <Input textLeft="$" textRight="USD" placeholder="0.00" />
        <Input iconLeft={Search} placeholder="Search…" />
        <Input iconLeft={Mail} iconRight={X} placeholder="Email" />
        <Input isError iconLeft={CircleAlert} placeholder="Error" />
        <Input disabled defaultValue="Disabled" />
        <Input readOnly defaultValue="Read-only" />
        <Input disabled isError defaultValue="Disabled + error" />
        <Input readOnly isError iconLeft={Lock} defaultValue="ReadOnly + error" />
        <Input type="date" />
      </div>
      <div className="space-y-3 w-80">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>
        <VanillaInput id="v-in-sm" size="sm" placeholder="Small" />
        <VanillaInput id="v-in-md" size="md" placeholder="Medium" />
        <VanillaInput id="v-in-lg" size="lg" placeholder="Large" />
        <VanillaInput id="v-in-tl" size="md" textLeft="https://" placeholder="example.com" />
        <VanillaInput id="v-in-tr" size="md" textRight=".com" placeholder="domain" />
        <VanillaInput id="v-in-tlr" size="md" textLeft="$" textRight="USD" placeholder="0.00" />
        <VanillaInput id="v-in-il" size="md" iconLeft={<SearchIcon />} placeholder="Search…" />
        <VanillaInput id="v-in-ilr" size="md" iconLeft={<MailIcon />} iconRight={<XIcon />} placeholder="Email" />
        <VanillaInput id="v-in-err" size="md" isError iconLeft={<CircleAlertIcon />} placeholder="Error" />
        <VanillaInput id="v-in-dis" size="md" disabled defaultValue="Disabled" />
        <VanillaInput id="v-in-ro" size="md" readOnly defaultValue="Read-only" />
        <VanillaInput id="v-in-dis-err" size="md" disabled isError defaultValue="Disabled + error" />
        <VanillaInput id="v-in-ro-err" size="md" readOnly isError iconLeft={<LockIcon />} defaultValue="ReadOnly + error" />
        <VanillaInput id="v-in-date" size="md" type="date" />
      </div>
    </div>
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const P=["Parity"];export{t as Parity,P as __namedExportsOrder,X as default};
