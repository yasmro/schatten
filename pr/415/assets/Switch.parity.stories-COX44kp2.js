import{j as e}from"./iframe-BunPHfCI.js";import{S as s}from"./Switch-DKci-WsC.js";import"./preload-helper-S0CTN78S.js";import"./index-BMzBCWfm.js";import"./index-BobG05Jn.js";import"./index-U2PucffX.js";import"./index-B2kDSkD5.js";import"./index-BLDi1d_0.js";import"./index-DkSiK3dL.js";import"./field-BpRt8o09.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css               */const z={title:"Components/lv1/Switch",component:s,parameters:{layout:"padded",docs:{description:{component:"Parity stories — React `<Switch>` and a hand-written vanilla switch with\nthe matching `.st-switch-wrapper` / `.st-switch` class chain must render\npixel-identical. Backs the VRT in `Switch.parity.vrt.spec.ts`.\n\nCovered combinations:\n- 3 sizes × unchecked\n- checked (md)\n- isError (unchecked + checked, md)\n- disabled (unchecked + checked, md)\n- with label\n\nVanilla side carries `data-state` and `aria-invalid` manually — the CSS\ntargets attributes only, so vanilla HTML consumers must set them."}}}},n=()=>e.jsx("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M2.5 8.5L3.5 7.5L6.5 10.5L12.5 3.5L13.5 4.5L6.5 12.5Z",fill:"currentColor"})}),a=({size:c,state:l="unchecked",disabled:r,isError:m,label:t,id:d})=>e.jsxs("div",{className:"st-switch-wrapper",children:[e.jsxs("button",{type:"button",id:d,role:"switch","aria-checked":l==="checked","aria-invalid":m?"true":void 0,"data-state":l,disabled:r,className:`st-switch st-switch--${c}`,children:[e.jsx("span",{className:"st-switch__check",children:e.jsx(n,{})}),e.jsx("span",{className:"st-switch__thumb","data-state":l})]}),t&&e.jsx("label",{htmlFor:d,className:"st-switch-wrapper__label",children:t})]}),i={name:"React vs Vanilla HTML",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-12 max-w-5xl",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"React"}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(s,{"aria-label":"sw-sm",size:"sm"}),e.jsx(s,{"aria-label":"sw-md",size:"md"}),e.jsx(s,{"aria-label":"sw-lg",size:"lg"})]}),e.jsx("div",{className:"flex items-center gap-6",children:e.jsx(s,{"aria-label":"sw-checked",defaultChecked:!0})}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(s,{"aria-label":"sw-error",isError:!0}),e.jsx(s,{"aria-label":"sw-error-checked",isError:!0,defaultChecked:!0})]}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(s,{"aria-label":"sw-disabled",disabled:!0}),e.jsx(s,{"aria-label":"sw-disabled-checked",disabled:!0,defaultChecked:!0})]}),e.jsxs("div",{className:"flex flex-col items-start gap-3",children:[e.jsx(s,{label:"With label (sm)",size:"sm"}),e.jsx(s,{label:"With label (md)"}),e.jsx(s,{label:"With label (lg)",size:"lg"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"Vanilla HTML"}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(a,{id:"v-sw-sm",size:"sm"}),e.jsx(a,{id:"v-sw-md",size:"md"}),e.jsx(a,{id:"v-sw-lg",size:"lg"})]}),e.jsx("div",{className:"flex items-center gap-6",children:e.jsx(a,{id:"v-sw-checked",size:"md",state:"checked"})}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(a,{id:"v-sw-error",size:"md",isError:!0}),e.jsx(a,{id:"v-sw-error-checked",size:"md",state:"checked",isError:!0})]}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(a,{id:"v-sw-disabled",size:"md",disabled:!0}),e.jsx(a,{id:"v-sw-disabled-checked",size:"md",state:"checked",disabled:!0})]}),e.jsxs("div",{className:"flex flex-col items-start gap-3",children:[e.jsx(a,{id:"v-sw-label-sm",size:"sm",label:"With label (sm)"}),e.jsx(a,{id:"v-sw-label-md",size:"md",label:"With label (md)"}),e.jsx(a,{id:"v-sw-label-lg",size:"lg",label:"With label (lg)"})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'React vs Vanilla HTML',
  render: () => <div className="grid grid-cols-2 gap-12 max-w-5xl">
      <div className="space-y-4">
        <p className="text-xs mb-2 text-foreground-muted">React</p>
        <div className="flex items-center gap-6">
          <Switch aria-label="sw-sm" size="sm" />
          <Switch aria-label="sw-md" size="md" />
          <Switch aria-label="sw-lg" size="lg" />
        </div>
        <div className="flex items-center gap-6">
          <Switch aria-label="sw-checked" defaultChecked />
        </div>
        <div className="flex items-center gap-6">
          <Switch aria-label="sw-error" isError />
          <Switch aria-label="sw-error-checked" isError defaultChecked />
        </div>
        <div className="flex items-center gap-6">
          <Switch aria-label="sw-disabled" disabled />
          <Switch aria-label="sw-disabled-checked" disabled defaultChecked />
        </div>
        <div className="flex flex-col items-start gap-3">
          <Switch label="With label (sm)" size="sm" />
          <Switch label="With label (md)" />
          <Switch label="With label (lg)" size="lg" />
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>
        <div className="flex items-center gap-6">
          <VanillaSwitch id="v-sw-sm" size="sm" />
          <VanillaSwitch id="v-sw-md" size="md" />
          <VanillaSwitch id="v-sw-lg" size="lg" />
        </div>
        <div className="flex items-center gap-6">
          <VanillaSwitch id="v-sw-checked" size="md" state="checked" />
        </div>
        <div className="flex items-center gap-6">
          <VanillaSwitch id="v-sw-error" size="md" isError />
          <VanillaSwitch id="v-sw-error-checked" size="md" state="checked" isError />
        </div>
        <div className="flex items-center gap-6">
          <VanillaSwitch id="v-sw-disabled" size="md" disabled />
          <VanillaSwitch id="v-sw-disabled-checked" size="md" state="checked" disabled />
        </div>
        <div className="flex flex-col items-start gap-3">
          <VanillaSwitch id="v-sw-label-sm" size="sm" label="With label (sm)" />
          <VanillaSwitch id="v-sw-label-md" size="md" label="With label (md)" />
          <VanillaSwitch id="v-sw-label-lg" size="lg" label="With label (lg)" />
        </div>
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};const S=["Parity"];export{i as Parity,S as __namedExportsOrder,z as default};
