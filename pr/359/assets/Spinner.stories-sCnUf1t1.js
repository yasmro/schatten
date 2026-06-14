import{i as e}from"./preload-helper-BwGARNBo.js";import{t}from"./iframe-DRAyPivV.js";import{n,t as r}from"./Spinner-BkubmgoK.js";var i,a,o,s,c,l,u;e((()=>{n(),i=t(),a={title:`Components/lv1/Spinner`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{description:`Color variant of the spinner.`,control:`select`,options:[`default`,`inverted`],table:{type:{summary:`"default" | "inverted"`},defaultValue:{summary:`default`}}},type:{description:`Spinner animation type.`,control:`select`,options:[`default`,`ripple`],table:{type:{summary:`"default" | "ripple"`},defaultValue:{summary:`default`}}},size:{description:`Size of the spinner.`,control:`select`,options:[`sm`,`md`,`lg`],table:{type:{summary:`"sm" | "md" | "lg"`},defaultValue:{summary:`md`}}},label:{description:`Accessible label for screen readers.`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`Loading`}}}}},o={name:`Playground`,args:{type:`default`,size:`md`,label:`Loading`}},s={name:`All Types`,render:()=>(0,i.jsxs)(`div`,{className:`flex items-center gap-8`,children:[(0,i.jsx)(r,{type:`default`}),(0,i.jsx)(r,{type:`ripple`})]})},c={name:`Sizes`,render:()=>(0,i.jsxs)(`div`,{className:`flex items-center gap-8`,children:[(0,i.jsx)(r,{size:`sm`}),(0,i.jsx)(r,{size:`md`}),(0,i.jsx)(r,{size:`lg`})]})},l={name:`On Dark Background`,render:()=>(0,i.jsxs)(`div`,{className:`flex items-center gap-8 rounded-lg bg-solid p-8`,children:[(0,i.jsx)(r,{variant:`inverted`,type:`default`}),(0,i.jsx)(r,{variant:`inverted`,type:`ripple`})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    type: 'default',
    size: 'md',
    label: 'Loading'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'All Types',
  render: () => <div className="flex items-center gap-8">
      <Spinner type="default" />
      <Spinner type="ripple" />
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex items-center gap-8">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'On Dark Background',
  render: () => <div className="flex items-center gap-8 rounded-lg bg-solid p-8">
      <Spinner variant="inverted" type="default" />
      <Spinner variant="inverted" type="ripple" />
    </div>
}`,...l.parameters?.docs?.source}}},u=[`Playground`,`AllTypes`,`Sizes`,`OnDarkBackground`]}))();export{s as AllTypes,l as OnDarkBackground,o as Playground,c as Sizes,u as __namedExportsOrder,a as default};