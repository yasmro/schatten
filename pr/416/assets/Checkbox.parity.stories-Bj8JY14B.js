import{i as e}from"./preload-helper-ylcYtS7T.js";import{t}from"./iframe-1y-Fr_Ay.js";import{n,t as r}from"./Checkbox-SUFGrkPK.js";var i,a,o,s,c,l,u;e((()=>{n(),i=t(),a={title:`Components/lv1/Checkbox`,component:r,parameters:{layout:`padded`,docs:{description:{component:`Parity stories — React \`<Checkbox>\` and a hand-written vanilla checkbox
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
targets attributes only, so vanilla HTML consumers must set them.`}}}},o=()=>(0,i.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:(0,i.jsx)(`path`,{d:`M2.5 8.5L3.5 7.5L6.5 10.5L12.5 3.5L13.5 4.5L6.5 12.5Z`,fill:`currentColor`})}),s=()=>(0,i.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:(0,i.jsx)(`path`,{d:`M3 8H13`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`butt`})}),c=({size:e,state:t=`unchecked`,disabled:n,isError:r,label:a,id:c})=>(0,i.jsxs)(`div`,{className:`st-checkbox-wrapper`,children:[(0,i.jsx)(`button`,{type:`button`,id:c,role:`checkbox`,"aria-checked":t===`indeterminate`?`mixed`:t===`checked`,"aria-invalid":r?`true`:void 0,"data-state":t,disabled:n,className:`st-checkbox st-checkbox--${e}`,children:(0,i.jsx)(`span`,{className:`st-checkbox__indicator`,children:t===`indeterminate`?(0,i.jsx)(s,{}):(0,i.jsx)(o,{})})}),a&&(0,i.jsx)(`label`,{htmlFor:c,className:`st-checkbox-wrapper__label`,children:a})]}),l={name:`React vs Vanilla HTML`,render:()=>(0,i.jsxs)(`div`,{className:`grid grid-cols-2 gap-12 max-w-5xl`,children:[(0,i.jsxs)(`div`,{className:`space-y-4`,children:[(0,i.jsx)(`p`,{className:`text-xs mb-2 text-foreground-muted`,children:`React`}),(0,i.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,i.jsx)(r,{"aria-label":`cb-sm`,size:`sm`}),(0,i.jsx)(r,{"aria-label":`cb-md`,size:`md`}),(0,i.jsx)(r,{"aria-label":`cb-lg`,size:`lg`})]}),(0,i.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,i.jsx)(r,{"aria-label":`cb-checked`,defaultChecked:!0}),(0,i.jsx)(r,{"aria-label":`cb-indeterminate`,checked:`indeterminate`,onCheckedChange:()=>{}})]}),(0,i.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,i.jsx)(r,{"aria-label":`cb-error`,isError:!0}),(0,i.jsx)(r,{"aria-label":`cb-error-checked`,isError:!0,defaultChecked:!0})]}),(0,i.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,i.jsx)(r,{"aria-label":`cb-disabled`,disabled:!0}),(0,i.jsx)(r,{"aria-label":`cb-disabled-checked`,disabled:!0,defaultChecked:!0})]}),(0,i.jsxs)(`div`,{className:`flex flex-col items-start gap-3`,children:[(0,i.jsx)(r,{label:`With label (sm)`,size:`sm`}),(0,i.jsx)(r,{label:`With label (md)`}),(0,i.jsx)(r,{label:`With label (lg)`,size:`lg`})]})]}),(0,i.jsxs)(`div`,{className:`space-y-4`,children:[(0,i.jsx)(`p`,{className:`text-xs mb-2 text-foreground-muted`,children:`Vanilla HTML`}),(0,i.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,i.jsx)(c,{id:`v-cb-sm`,size:`sm`}),(0,i.jsx)(c,{id:`v-cb-md`,size:`md`}),(0,i.jsx)(c,{id:`v-cb-lg`,size:`lg`})]}),(0,i.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,i.jsx)(c,{id:`v-cb-checked`,size:`md`,state:`checked`}),(0,i.jsx)(c,{id:`v-cb-indeterminate`,size:`md`,state:`indeterminate`})]}),(0,i.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,i.jsx)(c,{id:`v-cb-error`,size:`md`,isError:!0}),(0,i.jsx)(c,{id:`v-cb-error-checked`,size:`md`,state:`checked`,isError:!0})]}),(0,i.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,i.jsx)(c,{id:`v-cb-disabled`,size:`md`,disabled:!0}),(0,i.jsx)(c,{id:`v-cb-disabled-checked`,size:`md`,state:`checked`,disabled:!0})]}),(0,i.jsxs)(`div`,{className:`flex flex-col items-start gap-3`,children:[(0,i.jsx)(c,{id:`v-cb-label-sm`,size:`sm`,label:`With label (sm)`}),(0,i.jsx)(c,{id:`v-cb-label-md`,size:`md`,label:`With label (md)`}),(0,i.jsx)(c,{id:`v-cb-label-lg`,size:`lg`,label:`With label (lg)`})]})]})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`Parity`]}))();export{l as Parity,u as __namedExportsOrder,a as default};