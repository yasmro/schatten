import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{n,t as r}from"./Avatar-DfI-EplU.js";var i,a,o,s,c,l,u,d,f;e((()=>{n(),i=t(),a=`data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='96'%20height='96'%3E%3Crect%20width='96'%20height='96'%20fill='%234f46e5'/%3E%3Ccircle%20cx='48'%20cy='38'%20r='17'%20fill='%23c7d2fe'/%3E%3Crect%20x='20'%20y='60'%20width='56'%20height='34'%20rx='17'%20fill='%23c7d2fe'/%3E%3C/svg%3E`,o={title:`Components/lv1/Avatar`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{src:{description:"Image URL. Falls back to the `fallback` initials when absent or failed.",control:`text`,table:{type:{summary:`string`}}},alt:{description:`Alt text / accessible name shown while the image is visible.`,control:`text`,table:{type:{summary:`string`}}},fallback:{description:`Initials shown when there is no image or it fails to load (string only).`,control:`text`,table:{type:{summary:`string`}}},size:{description:`Size of the avatar.`,control:`inline-radio`,options:[`sm`,`md`,`lg`],table:{type:{summary:`"sm" | "md" | "lg"`},defaultValue:{summary:`md`}}},delayMs:{description:`Delay (ms) before showing the fallback, to avoid an initials flash on fast loads.`,control:`number`,table:{type:{summary:`number`}}}}},s={name:`Playground`,args:{src:a,alt:`John Doe`,fallback:`JD`,size:`md`}},c={name:`Sizes`,render:()=>(0,i.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,i.jsx)(r,{src:a,alt:`John Doe`,fallback:`JD`,size:`sm`}),(0,i.jsx)(r,{src:a,alt:`John Doe`,fallback:`JD`,size:`md`}),(0,i.jsx)(r,{src:a,alt:`John Doe`,fallback:`JD`,size:`lg`})]})},l={name:`With Image`,render:()=>(0,i.jsx)(r,{src:a,alt:`Alice Anderson`,fallback:`AA`,size:`lg`})},u={name:`Fallback (initials)`,render:()=>(0,i.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,i.jsx)(r,{fallback:`JD`,size:`sm`}),(0,i.jsx)(r,{fallback:`AB`,size:`md`}),(0,i.jsx)(r,{fallback:`CD`,size:`lg`})]})},d={name:`With Broken Image`,render:()=>(0,i.jsx)(r,{src:`/this-avatar-image-does-not-exist.png`,alt:`Broken`,fallback:`JD`,size:`lg`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    src: IMAGE_SRC,
    alt: 'John Doe',
    fallback: 'JD',
    size: 'md'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex items-center gap-4">
      <Avatar src={IMAGE_SRC} alt="John Doe" fallback="JD" size="sm" />
      <Avatar src={IMAGE_SRC} alt="John Doe" fallback="JD" size="md" />
      <Avatar src={IMAGE_SRC} alt="John Doe" fallback="JD" size="lg" />
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'With Image',
  render: () => <Avatar src={IMAGE_SRC} alt="Alice Anderson" fallback="AA" size="lg" />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Fallback (initials)',
  render: () => <div className="flex items-center gap-4">
      <Avatar fallback="JD" size="sm" />
      <Avatar fallback="AB" size="md" />
      <Avatar fallback="CD" size="lg" />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'With Broken Image',
  // A 404 src exercises the image→fallback swap; the VRT interaction test
  // (Avatar.vrt.spec.ts) asserts the initials surface and the <img> drops.
  render: () => <Avatar src="/this-avatar-image-does-not-exist.png" alt="Broken" fallback="JD" size="lg" />
}`,...d.parameters?.docs?.source}}},f=[`Playground`,`Sizes`,`WithImage`,`Fallback`,`WithBrokenImage`]}))();export{u as Fallback,s as Playground,c as Sizes,d as WithBrokenImage,l as WithImage,f as __namedExportsOrder,o as default};