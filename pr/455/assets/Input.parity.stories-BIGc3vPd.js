import{j as e}from"./iframe-DXAhkGYo.js";import{I as a}from"./Input-DJjOUelV.js";import{X as b}from"./x-V-ZzH1gy.js";import{S as j}from"./search-D2-z7Wtw.js";import{M as f}from"./mail-C_dMnHZW.js";import"./preload-helper-CraBvC-j.js";import"./field-CIBqkeAX.js";import"./utils-HnQPFlDo.js";import"./index-BekUCMdb.js";/* empty css              */import"./createLucideIcon-nrAIdcbD.js";const D={title:"Components/lv1/Input",component:a,parameters:{layout:"padded",docs:{description:{component:`Parity stories — React \`<Input>\` and a hand-written
\`<div class="st-input-wrapper st-input-wrapper--md"><input class="st-input"></div>\`
must render pixel-identical. Backs the VRT in
\`Input.parity.vrt.spec.ts\`.

Covered combinations:
- 3 sizes (sm / md / lg)
- text adornments (textLeft + textRight)
- icon adornments (iconLeft + iconRight)
- error / disabled / readOnly
- disabled + error / readOnly + error
- type=date (carries the \`.st-input--date\` derived modifier)

Vanilla side carries \`aria-invalid\`, \`readonly\`, and \`disabled\`
manually — the CSS targets those attributes (per css-api.md §state),
so vanilla HTML consumers must set them.

NB: wrapper-click → input focus is **React-only**. The vanilla side
intentionally omits the focus delegation handler so the parity
screenshot reflects what a CSS-only consumer would see.`}}}},g=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"st-input__icon-left",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("path",{d:"m21 21-4.3-4.3"})]}),y=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"st-input__icon-right",children:[e.jsx("path",{d:"M18 6 6 18"}),e.jsx("path",{d:"m6 6 12 12"})]}),r=({size:d,isError:o,disabled:c,readOnly:p,defaultValue:u,placeholder:m,type:l,textLeft:t,textRight:n,withIcons:s,id:h})=>{const x=l==="date"||l==="datetime-local"||l==="month"||l==="week"||l==="time";return e.jsxs("div",{className:`st-input-wrapper st-input-wrapper--${d}`,children:[t&&e.jsx("span",{className:"st-input__text-left",children:t}),s&&e.jsx(g,{}),e.jsx("input",{id:h,type:l,placeholder:m,defaultValue:u,disabled:c,readOnly:p,"aria-invalid":o?"true":void 0,className:`st-input${x?" st-input--date":""}`}),n&&e.jsx("span",{className:"st-input__text-right",children:n}),s&&e.jsx(y,{})]})},i={name:"React vs Vanilla HTML",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-12 max-w-5xl",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"React"}),e.jsx(a,{"aria-label":"in-sm",size:"sm",placeholder:"Small"}),e.jsx(a,{"aria-label":"in-md",size:"md",placeholder:"Medium"}),e.jsx(a,{"aria-label":"in-lg",size:"lg",placeholder:"Large"}),e.jsx(a,{"aria-label":"in-text",textLeft:"$",textRight:"USD",placeholder:"0.00"}),e.jsx(a,{"aria-label":"in-icons",iconLeft:j,iconRight:b,placeholder:"With icons"}),e.jsx(a,{"aria-label":"in-error",isError:!0,placeholder:"Error"}),e.jsx(a,{"aria-label":"in-disabled",disabled:!0,defaultValue:"Disabled"}),e.jsx(a,{"aria-label":"in-readonly",readOnly:!0,defaultValue:"Read-only"}),e.jsx(a,{"aria-label":"in-disabled-error",disabled:!0,isError:!0,defaultValue:"Disabled + error"}),e.jsx(a,{"aria-label":"in-readonly-error",readOnly:!0,isError:!0,defaultValue:"Read-only + error"}),e.jsx(a,{"aria-label":"in-date",type:"date"}),e.jsx(a,{"aria-label":"in-mail",iconLeft:f,placeholder:"Email"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"Vanilla HTML"}),e.jsx(r,{size:"sm",placeholder:"Small"}),e.jsx(r,{size:"md",placeholder:"Medium"}),e.jsx(r,{size:"lg",placeholder:"Large"}),e.jsx(r,{size:"md",textLeft:"$",textRight:"USD",placeholder:"0.00"}),e.jsx(r,{size:"md",withIcons:!0,placeholder:"With icons"}),e.jsx(r,{size:"md",isError:!0,placeholder:"Error"}),e.jsx(r,{size:"md",disabled:!0,defaultValue:"Disabled"}),e.jsx(r,{size:"md",readOnly:!0,defaultValue:"Read-only"}),e.jsx(r,{size:"md",disabled:!0,isError:!0,defaultValue:"Disabled + error"}),e.jsx(r,{size:"md",readOnly:!0,isError:!0,defaultValue:"Read-only + error"}),e.jsx(r,{size:"md",type:"date"}),e.jsx(r,{size:"md",withIcons:!0,placeholder:"Email"})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'React vs Vanilla HTML',
  render: () => <div className="grid grid-cols-2 gap-12 max-w-5xl">
      <div className="space-y-3">
        <p className="text-xs mb-2 text-foreground-muted">React</p>
        <Input aria-label="in-sm" size="sm" placeholder="Small" />
        <Input aria-label="in-md" size="md" placeholder="Medium" />
        <Input aria-label="in-lg" size="lg" placeholder="Large" />
        <Input aria-label="in-text" textLeft="$" textRight="USD" placeholder="0.00" />
        <Input aria-label="in-icons" iconLeft={Search} iconRight={X} placeholder="With icons" />
        <Input aria-label="in-error" isError placeholder="Error" />
        <Input aria-label="in-disabled" disabled defaultValue="Disabled" />
        <Input aria-label="in-readonly" readOnly defaultValue="Read-only" />
        <Input aria-label="in-disabled-error" disabled isError defaultValue="Disabled + error" />
        <Input aria-label="in-readonly-error" readOnly isError defaultValue="Read-only + error" />
        <Input aria-label="in-date" type="date" />
        <Input aria-label="in-mail" iconLeft={Mail} placeholder="Email" />
      </div>
      <div className="space-y-3">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>
        <VanillaInput size="sm" placeholder="Small" />
        <VanillaInput size="md" placeholder="Medium" />
        <VanillaInput size="lg" placeholder="Large" />
        <VanillaInput size="md" textLeft="$" textRight="USD" placeholder="0.00" />
        <VanillaInput size="md" withIcons placeholder="With icons" />
        <VanillaInput size="md" isError placeholder="Error" />
        <VanillaInput size="md" disabled defaultValue="Disabled" />
        <VanillaInput size="md" readOnly defaultValue="Read-only" />
        <VanillaInput size="md" disabled isError defaultValue="Disabled + error" />
        <VanillaInput size="md" readOnly isError defaultValue="Read-only + error" />
        <VanillaInput size="md" type="date" />
        {/* Mail icon is rendered as a Lucide SVG on the React side; the
         * vanilla side uses the SearchIcon helper to demonstrate that any
         * inline SVG with the \`.st-input__icon-left\` class gets the
         * wrapper-derived size. */}
        <VanillaInput size="md" withIcons placeholder="Email" />
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};const _=["Parity"];export{i as Parity,_ as __namedExportsOrder,D as default};
