import{j as e}from"./iframe-CRqGDSYf.js";import{a,R as r}from"./Radio-BEqVDoaC.js";import"./preload-helper--vB6UvDd.js";import"./index-BhdmQbqv.js";import"./index-DDwwNpKz.js";import"./index-B0tD5zwY.js";import"./index-W_rMTlDy.js";import"./index-Cg_RKOr0.js";import"./index-CtzR7ivp.js";import"./index-Bi5H0pnt.js";import"./index-BCDOQrHy.js";import"./index-BSOvn1Li.js";import"./index-Dw-3vz52.js";import"./field-DNh8RSFX.js";import"./utils-DCADjnpI.js";import"./index-CkIaN0ex.js";/* empty css              */const G={title:"Components/lv1/Radio",component:a,parameters:{layout:"padded",docs:{description:{component:"Parity stories — React `<RadioGroup>` / `<Radio>` and hand-written\nvanilla markup with the matching `.st-radio-group` / `.st-radio-wrapper`\n/ `.st-radio` class chain must render pixel-identical. Backs the VRT in\n`Radio.parity.vrt.spec.ts`.\n\nCovered combinations:\n- 3 sizes (sm / md / lg) × unchecked\n- checked state (md)\n- isError (unchecked + checked, md)\n- disabled (unchecked + checked, md)\n- with label / without label\n\nVanilla side carries `data-state`, `aria-checked`, `aria-invalid`,\n`disabled` manually — the CSS targets attributes only. The indicator\n`<span>` is rendered ONLY in the checked state (mirrors Radix Item\nIndicator unmount behaviour, unlike Checkbox's forceMount)."}}}},d=({size:u,state:l="unchecked",disabled:p,isError:h,label:s,id:o})=>{const c=l==="checked";return e.jsxs("div",{className:"st-radio-wrapper",children:[e.jsx("button",{type:"button",id:o,role:"radio","aria-checked":c,"aria-invalid":h?"true":void 0,"data-state":l,disabled:p,className:`st-radio st-radio--${u}`,children:c&&e.jsx("span",{className:"st-radio__indicator",children:e.jsx("span",{className:"st-radio__dot"})})}),s&&e.jsx("label",{htmlFor:o,className:"st-radio-wrapper__label",children:s})]})},i={name:"React vs Vanilla HTML",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-12 max-w-5xl",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"React"}),e.jsxs(r,{defaultValue:"md",children:[e.jsx(a,{value:"sm",size:"sm",label:"Small (unchecked)"}),e.jsx(a,{value:"md",size:"md",label:"Medium (checked)"}),e.jsx(a,{value:"lg",size:"lg",label:"Large (unchecked)"})]}),e.jsxs(r,{defaultValue:"er2",isError:!0,children:[e.jsx(a,{value:"er1",label:"Error, unchecked"}),e.jsx(a,{value:"er2",label:"Error, checked"})]}),e.jsxs(r,{defaultValue:"dis2",children:[e.jsx(a,{value:"dis1",label:"Disabled, unchecked",disabled:!0}),e.jsx(a,{value:"dis2",label:"Disabled, checked",disabled:!0})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"Vanilla HTML"}),e.jsxs("div",{role:"radiogroup","aria-label":"vanilla-sizes",className:"st-radio-group",children:[e.jsx(d,{id:"v-r-sm",size:"sm",label:"Small (unchecked)"}),e.jsx(d,{id:"v-r-md",size:"md",state:"checked",label:"Medium (checked)"}),e.jsx(d,{id:"v-r-lg",size:"lg",label:"Large (unchecked)"})]}),e.jsxs("div",{role:"radiogroup","aria-label":"vanilla-error","aria-invalid":"true",className:"st-radio-group",children:[e.jsx(d,{id:"v-r-er1",size:"md",isError:!0,label:"Error, unchecked"}),e.jsx(d,{id:"v-r-er2",size:"md",state:"checked",isError:!0,label:"Error, checked"})]}),e.jsxs("div",{role:"radiogroup","aria-label":"vanilla-disabled",className:"st-radio-group",children:[e.jsx(d,{id:"v-r-dis1",size:"md",disabled:!0,label:"Disabled, unchecked"}),e.jsx(d,{id:"v-r-dis2",size:"md",state:"checked",disabled:!0,label:"Disabled, checked"})]})]})]})};var t,n,m;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'React vs Vanilla HTML',
  render: () => <div className="grid grid-cols-2 gap-12 max-w-5xl">
      <div className="space-y-4">
        <p className="text-xs mb-2 text-foreground-muted">React</p>
        <RadioGroup defaultValue="md">
          <Radio value="sm" size="sm" label="Small (unchecked)" />
          <Radio value="md" size="md" label="Medium (checked)" />
          <Radio value="lg" size="lg" label="Large (unchecked)" />
        </RadioGroup>
        <RadioGroup defaultValue="er2" isError>
          <Radio value="er1" label="Error, unchecked" />
          <Radio value="er2" label="Error, checked" />
        </RadioGroup>
        <RadioGroup defaultValue="dis2">
          <Radio value="dis1" label="Disabled, unchecked" disabled />
          <Radio value="dis2" label="Disabled, checked" disabled />
        </RadioGroup>
      </div>
      <div className="space-y-4">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>
        <div role="radiogroup" aria-label="vanilla-sizes" className="st-radio-group">
          <VanillaRadio id="v-r-sm" size="sm" label="Small (unchecked)" />
          <VanillaRadio id="v-r-md" size="md" state="checked" label="Medium (checked)" />
          <VanillaRadio id="v-r-lg" size="lg" label="Large (unchecked)" />
        </div>
        <div role="radiogroup" aria-label="vanilla-error" aria-invalid="true" className="st-radio-group">
          <VanillaRadio id="v-r-er1" size="md" isError label="Error, unchecked" />
          <VanillaRadio id="v-r-er2" size="md" state="checked" isError label="Error, checked" />
        </div>
        <div role="radiogroup" aria-label="vanilla-disabled" className="st-radio-group">
          <VanillaRadio id="v-r-dis1" size="md" disabled label="Disabled, unchecked" />
          <VanillaRadio id="v-r-dis2" size="md" state="checked" disabled label="Disabled, checked" />
        </div>
      </div>
    </div>
}`,...(m=(n=i.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const _=["Parity"];export{i as Parity,_ as __namedExportsOrder,G as default};
