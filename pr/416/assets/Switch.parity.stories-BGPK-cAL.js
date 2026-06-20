import{i as e}from"./preload-helper-ylcYtS7T.js";import{t}from"./iframe-1y-Fr_Ay.js";import{n,t as r}from"./Switch-3h7TqPsa.js";var i,a,o,s,c,l;e((()=>{n(),i=t(),a={title:`Components/lv1/Switch`,component:r,parameters:{layout:`padded`,docs:{description:{component:`Parity stories — React \`<Switch>\` and a hand-written vanilla switch with
the matching \`.st-switch-wrapper\` / \`.st-switch\` class chain must render
pixel-identical. Backs the VRT in \`Switch.parity.vrt.spec.ts\`.

Covered combinations:
- 3 sizes × unchecked
- checked (md)
- isError (unchecked + checked, md)
- disabled (unchecked + checked, md)
- with label

Vanilla side carries \`data-state\` and \`aria-invalid\` manually — the CSS
targets attributes only, so vanilla HTML consumers must set them.`}}}},o=()=>(0,i.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:(0,i.jsx)(`path`,{d:`M2.5 8.5L3.5 7.5L6.5 10.5L12.5 3.5L13.5 4.5L6.5 12.5Z`,fill:`currentColor`})}),s=({size:e,state:t=`unchecked`,disabled:n,isError:r,label:a,id:s})=>(0,i.jsxs)(`div`,{className:`st-switch-wrapper`,children:[(0,i.jsxs)(`button`,{type:`button`,id:s,role:`switch`,"aria-checked":t===`checked`,"aria-invalid":r?`true`:void 0,"data-state":t,disabled:n,className:`st-switch st-switch--${e}`,children:[(0,i.jsx)(`span`,{className:`st-switch__check`,children:(0,i.jsx)(o,{})}),(0,i.jsx)(`span`,{className:`st-switch__thumb`,"data-state":t})]}),a&&(0,i.jsx)(`label`,{htmlFor:s,className:`st-switch-wrapper__label`,children:a})]}),c={name:`React vs Vanilla HTML`,render:()=>(0,i.jsxs)(`div`,{className:`grid grid-cols-2 gap-12 max-w-5xl`,children:[(0,i.jsxs)(`div`,{className:`space-y-4`,children:[(0,i.jsx)(`p`,{className:`text-xs mb-2 text-foreground-muted`,children:`React`}),(0,i.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,i.jsx)(r,{"aria-label":`sw-sm`,size:`sm`}),(0,i.jsx)(r,{"aria-label":`sw-md`,size:`md`}),(0,i.jsx)(r,{"aria-label":`sw-lg`,size:`lg`})]}),(0,i.jsx)(`div`,{className:`flex items-center gap-6`,children:(0,i.jsx)(r,{"aria-label":`sw-checked`,defaultChecked:!0})}),(0,i.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,i.jsx)(r,{"aria-label":`sw-error`,isError:!0}),(0,i.jsx)(r,{"aria-label":`sw-error-checked`,isError:!0,defaultChecked:!0})]}),(0,i.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,i.jsx)(r,{"aria-label":`sw-disabled`,disabled:!0}),(0,i.jsx)(r,{"aria-label":`sw-disabled-checked`,disabled:!0,defaultChecked:!0})]}),(0,i.jsxs)(`div`,{className:`flex flex-col items-start gap-3`,children:[(0,i.jsx)(r,{label:`With label (sm)`,size:`sm`}),(0,i.jsx)(r,{label:`With label (md)`}),(0,i.jsx)(r,{label:`With label (lg)`,size:`lg`})]})]}),(0,i.jsxs)(`div`,{className:`space-y-4`,children:[(0,i.jsx)(`p`,{className:`text-xs mb-2 text-foreground-muted`,children:`Vanilla HTML`}),(0,i.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,i.jsx)(s,{id:`v-sw-sm`,size:`sm`}),(0,i.jsx)(s,{id:`v-sw-md`,size:`md`}),(0,i.jsx)(s,{id:`v-sw-lg`,size:`lg`})]}),(0,i.jsx)(`div`,{className:`flex items-center gap-6`,children:(0,i.jsx)(s,{id:`v-sw-checked`,size:`md`,state:`checked`})}),(0,i.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,i.jsx)(s,{id:`v-sw-error`,size:`md`,isError:!0}),(0,i.jsx)(s,{id:`v-sw-error-checked`,size:`md`,state:`checked`,isError:!0})]}),(0,i.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,i.jsx)(s,{id:`v-sw-disabled`,size:`md`,disabled:!0}),(0,i.jsx)(s,{id:`v-sw-disabled-checked`,size:`md`,state:`checked`,disabled:!0})]}),(0,i.jsxs)(`div`,{className:`flex flex-col items-start gap-3`,children:[(0,i.jsx)(s,{id:`v-sw-label-sm`,size:`sm`,label:`With label (sm)`}),(0,i.jsx)(s,{id:`v-sw-label-md`,size:`md`,label:`With label (md)`}),(0,i.jsx)(s,{id:`v-sw-label-lg`,size:`lg`,label:`With label (lg)`})]})]})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l=[`Parity`]}))();export{c as Parity,l as __namedExportsOrder,a as default};