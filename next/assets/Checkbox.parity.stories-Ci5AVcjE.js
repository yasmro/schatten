import{j as e}from"./iframe-LgPoRcNF.js";import{C as a}from"./Checkbox-6VKjsdRo.js";import"./preload-helper-CrztxVc4.js";import"./index-CmeIrI6S.js";import"./index-CS0ApNL2.js";import"./index-CU84OGnG.js";import"./index-CTkRMf61.js";import"./index-DAG6IZK0.js";import"./index-CKNCL6Mz.js";import"./index-DQeKfQG3.js";import"./field-CBMhX5WN.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css                 */const W={title:"Components/lv1/Checkbox",component:a,parameters:{layout:"padded",docs:{description:{component:`Parity stories — React \`<Checkbox>\` and a hand-written vanilla checkbox
with the matching \`.st-checkbox-wrapper\` / \`.st-checkbox\` class chain
must render pixel-identical. Backs the VRT in
\`Checkbox.parity.vrt.spec.ts\`.

Covered combinations:
- 3 sizes (sm / md / lg) × unchecked
- checked / indeterminate (md)
- isError (md unchecked + md checked)
- disabled (md unchecked + md checked)
- with label / without label

Vanilla side carries \`data-state\` and \`aria-invalid\` manually — the CSS
targets attributes only, so vanilla HTML consumers must set them.`}}}},b=()=>e.jsx("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M2.5 8.5L3.5 7.5L6.5 10.5L12.5 3.5L13.5 4.5L6.5 12.5Z",fill:"currentColor"})}),n=()=>e.jsx("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M3 8H13",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"butt"})}),s=({size:t,state:i="unchecked",disabled:r,isError:m,label:c,id:d})=>e.jsxs("div",{className:"st-checkbox-wrapper",children:[e.jsx("button",{type:"button",id:d,role:"checkbox","aria-checked":i==="indeterminate"?"mixed":i==="checked","aria-invalid":m?"true":void 0,"data-state":i,disabled:r,className:`st-checkbox st-checkbox--${t}`,children:e.jsx("span",{className:"st-checkbox__indicator",children:i==="indeterminate"?e.jsx(n,{}):e.jsx(b,{})})}),c&&e.jsx("label",{htmlFor:d,className:"st-checkbox-wrapper__label",children:c})]}),l={name:"React vs Vanilla HTML",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-12 max-w-5xl",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"React"}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(a,{"aria-label":"cb-sm",size:"sm"}),e.jsx(a,{"aria-label":"cb-md",size:"md"}),e.jsx(a,{"aria-label":"cb-lg",size:"lg"})]}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(a,{"aria-label":"cb-checked",defaultChecked:!0}),e.jsx(a,{"aria-label":"cb-indeterminate",checked:"indeterminate",onCheckedChange:()=>{}})]}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(a,{"aria-label":"cb-error",isError:!0}),e.jsx(a,{"aria-label":"cb-error-checked",isError:!0,defaultChecked:!0})]}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(a,{"aria-label":"cb-disabled",disabled:!0}),e.jsx(a,{"aria-label":"cb-disabled-checked",disabled:!0,defaultChecked:!0})]}),e.jsxs("div",{className:"flex flex-col items-start gap-3",children:[e.jsx(a,{label:"With label (sm)",size:"sm"}),e.jsx(a,{label:"With label (md)"}),e.jsx(a,{label:"With label (lg)",size:"lg"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"Vanilla HTML"}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(s,{id:"v-cb-sm",size:"sm"}),e.jsx(s,{id:"v-cb-md",size:"md"}),e.jsx(s,{id:"v-cb-lg",size:"lg"})]}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(s,{id:"v-cb-checked",size:"md",state:"checked"}),e.jsx(s,{id:"v-cb-indeterminate",size:"md",state:"indeterminate"})]}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(s,{id:"v-cb-error",size:"md",isError:!0}),e.jsx(s,{id:"v-cb-error-checked",size:"md",state:"checked",isError:!0})]}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(s,{id:"v-cb-disabled",size:"md",disabled:!0}),e.jsx(s,{id:"v-cb-disabled-checked",size:"md",state:"checked",disabled:!0})]}),e.jsxs("div",{className:"flex flex-col items-start gap-3",children:[e.jsx(s,{id:"v-cb-label-sm",size:"sm",label:"With label (sm)"}),e.jsx(s,{id:"v-cb-label-md",size:"md",label:"With label (md)"}),e.jsx(s,{id:"v-cb-label-lg",size:"lg",label:"With label (lg)"})]})]})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'React vs Vanilla HTML',
  render: () => <div className="grid grid-cols-2 gap-12 max-w-5xl">
      <div className="space-y-4">
        <p className="text-xs mb-2 text-foreground-muted">React</p>
        <div className="flex items-center gap-6">
          <Checkbox aria-label="cb-sm" size="sm" />
          <Checkbox aria-label="cb-md" size="md" />
          <Checkbox aria-label="cb-lg" size="lg" />
        </div>
        <div className="flex items-center gap-6">
          <Checkbox aria-label="cb-checked" defaultChecked />
          <Checkbox aria-label="cb-indeterminate" checked="indeterminate" onCheckedChange={() => {}} />
        </div>
        <div className="flex items-center gap-6">
          <Checkbox aria-label="cb-error" isError />
          <Checkbox aria-label="cb-error-checked" isError defaultChecked />
        </div>
        <div className="flex items-center gap-6">
          <Checkbox aria-label="cb-disabled" disabled />
          <Checkbox aria-label="cb-disabled-checked" disabled defaultChecked />
        </div>
        <div className="flex flex-col items-start gap-3">
          <Checkbox label="With label (sm)" size="sm" />
          <Checkbox label="With label (md)" />
          <Checkbox label="With label (lg)" size="lg" />
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>
        <div className="flex items-center gap-6">
          <VanillaCheckbox id="v-cb-sm" size="sm" />
          <VanillaCheckbox id="v-cb-md" size="md" />
          <VanillaCheckbox id="v-cb-lg" size="lg" />
        </div>
        <div className="flex items-center gap-6">
          <VanillaCheckbox id="v-cb-checked" size="md" state="checked" />
          <VanillaCheckbox id="v-cb-indeterminate" size="md" state="indeterminate" />
        </div>
        <div className="flex items-center gap-6">
          <VanillaCheckbox id="v-cb-error" size="md" isError />
          <VanillaCheckbox id="v-cb-error-checked" size="md" state="checked" isError />
        </div>
        <div className="flex items-center gap-6">
          <VanillaCheckbox id="v-cb-disabled" size="md" disabled />
          <VanillaCheckbox id="v-cb-disabled-checked" size="md" state="checked" disabled />
        </div>
        <div className="flex flex-col items-start gap-3">
          <VanillaCheckbox id="v-cb-label-sm" size="sm" label="With label (sm)" />
          <VanillaCheckbox id="v-cb-label-md" size="md" label="With label (md)" />
          <VanillaCheckbox id="v-cb-label-lg" size="lg" label="With label (lg)" />
        </div>
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};const y=["Parity"];export{l as Parity,y as __namedExportsOrder,W as default};
