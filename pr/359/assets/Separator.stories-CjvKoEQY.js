import{i as e}from"./preload-helper-BwGARNBo.js";import{t}from"./iframe-DRAyPivV.js";import{n,t as r}from"./Separator-Dv2mwNPF.js";var i,a,o,s,c,l;e((()=>{n(),i=t(),a={title:`Components/lv1/Separator`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{orientation:{description:`Orientation of the separator.`,control:`select`,options:[`horizontal`,`vertical`],table:{type:{summary:`"horizontal" | "vertical"`},defaultValue:{summary:`horizontal`}}},decorative:{description:`When true, the separator is purely visual and hidden from assistive technologies. When false, it is exposed as a semantic divider with role="separator".`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}}}},o={name:`Playground`,args:{orientation:`horizontal`,decorative:!0},render:e=>(0,i.jsxs)(`div`,{className:`w-64`,children:[(0,i.jsx)(`p`,{className:`text-sm`,children:`Above`}),(0,i.jsx)(r,{...e,className:e.orientation===`vertical`?`h-6`:``}),(0,i.jsx)(`p`,{className:`text-sm`,children:`Below`})]})},s={name:`Horizontal`,render:()=>(0,i.jsxs)(`div`,{className:`w-72 space-y-3`,children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`h4`,{className:`text-sm font-medium`,children:`Schatten UI`}),(0,i.jsx)(`p`,{className:`text-sm text-foreground-muted`,children:`A design system for the web.`})]}),(0,i.jsx)(r,{}),(0,i.jsxs)(`div`,{className:`flex gap-4 text-sm text-foreground-muted`,children:[(0,i.jsx)(`span`,{children:`Docs`}),(0,i.jsx)(`span`,{children:`Components`}),(0,i.jsx)(`span`,{children:`Themes`})]})]})},c={name:`Vertical`,render:()=>(0,i.jsxs)(`div`,{className:`flex h-6 items-center gap-3 text-sm`,children:[(0,i.jsx)(`span`,{children:`Docs`}),(0,i.jsx)(r,{orientation:`vertical`}),(0,i.jsx)(`span`,{children:`Components`}),(0,i.jsx)(r,{orientation:`vertical`}),(0,i.jsx)(`span`,{children:`Themes`})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Vertical',
  render: () => <div className="flex h-6 items-center gap-3 text-sm">
      <span>Docs</span>
      <Separator orientation="vertical" />
      <span>Components</span>
      <Separator orientation="vertical" />
      <span>Themes</span>
    </div>
}`,...c.parameters?.docs?.source}}},l=[`Playground`,`Horizontal`,`Vertical`]}))();export{s as Horizontal,o as Playground,c as Vertical,l as __namedExportsOrder,a as default};