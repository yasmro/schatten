import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-B6nZGSSK.js";import{n,t as r}from"./info-ClTo78iB.js";import{n as i,t as a}from"./settings-DXOAIuNC.js";import{n as o,t as s}from"./trash-2-jb8EGMms.js";import{n as c,t as l}from"./Button-BFnwUmgR.js";import{a as u,i as d,n as f,r as p,t as m}from"./Tooltip-D4n1Vr2X.js";var h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{n(),i(),o(),c(),u(),h=t(),g={title:`Components/lv1/Tooltip`,component:f,parameters:{layout:`centered`},tags:[`autodocs`],decorators:[e=>(0,h.jsx)(p,{delayDuration:100,children:(0,h.jsx)(e,{})})],argTypes:{side:{description:`The preferred side of the trigger to render the tooltip.`,control:`select`,options:[`top`,`right`,`bottom`,`left`],table:{type:{summary:`"top" | "right" | "bottom" | "left"`},defaultValue:{summary:`top`}}},children:{description:`Content to display in the tooltip.`,control:`text`,table:{type:{summary:`ReactNode`}}},container:{table:{disable:!0}}}},_={name:`Playground`,args:{children:`This is helpful information.`,side:`top`},render:e=>(0,h.jsxs)(m,{children:[(0,h.jsx)(d,{children:(0,h.jsx)(l,{variant:`secondary`,children:`Hover me`})}),(0,h.jsx)(f,{...e})]})},v={name:`Sides`,parameters:{layout:`padded`},render:()=>(0,h.jsxs)(`div`,{className:`grid grid-cols-2 gap-24 p-24 place-items-center`,children:[(0,h.jsxs)(m,{open:!0,children:[(0,h.jsx)(d,{children:(0,h.jsx)(l,{variant:`secondary`,children:`Top`})}),(0,h.jsx)(f,{side:`top`,children:`Tooltip on top`})]}),(0,h.jsxs)(m,{open:!0,children:[(0,h.jsx)(d,{children:(0,h.jsx)(l,{variant:`secondary`,children:`Right`})}),(0,h.jsx)(f,{side:`right`,children:`Tooltip on right`})]}),(0,h.jsxs)(m,{open:!0,children:[(0,h.jsx)(d,{children:(0,h.jsx)(l,{variant:`secondary`,children:`Bottom`})}),(0,h.jsx)(f,{side:`bottom`,children:`Tooltip on bottom`})]}),(0,h.jsxs)(m,{open:!0,children:[(0,h.jsx)(d,{children:(0,h.jsx)(l,{variant:`secondary`,children:`Left`})}),(0,h.jsx)(f,{side:`left`,children:`Tooltip on left`})]})]})},y={name:`With Icon Button`,render:()=>(0,h.jsxs)(`div`,{className:`flex gap-4`,children:[(0,h.jsxs)(m,{children:[(0,h.jsx)(d,{children:(0,h.jsx)(l,{icon:r,"aria-label":`Information`})}),(0,h.jsx)(f,{children:`View more information`})]}),(0,h.jsxs)(m,{children:[(0,h.jsx)(d,{children:(0,h.jsx)(l,{icon:a,"aria-label":`Settings`})}),(0,h.jsx)(f,{children:`Open settings`})]}),(0,h.jsxs)(m,{children:[(0,h.jsx)(d,{children:(0,h.jsx)(l,{icon:s,variant:`destructive`,"aria-label":`Delete`})}),(0,h.jsx)(f,{children:`Delete item`})]})]})},b={name:`With Disabled Button`,render:()=>(0,h.jsxs)(m,{children:[(0,h.jsx)(d,{children:(0,h.jsx)(`span`,{role:`button`,tabIndex:0,children:(0,h.jsx)(l,{disabled:!0,style:{pointerEvents:`none`},children:`Disabled Button`})})}),(0,h.jsx)(f,{children:`This action is currently unavailable`})]})},x={name:`Long Content`,render:()=>(0,h.jsxs)(m,{open:!0,children:[(0,h.jsx)(d,{children:(0,h.jsx)(l,{variant:`secondary`,children:`Hover me`})}),(0,h.jsx)(f,{side:`bottom`,className:`max-w-xs`,children:"This is a longer tooltip that wraps onto multiple lines so the layout and `max-w-*` constraints stay covered by visual regression tests."})]})},S={name:`Rich Content`,render:()=>(0,h.jsxs)(m,{open:!0,children:[(0,h.jsx)(d,{children:(0,h.jsx)(l,{variant:`secondary`,children:`Hover for details`})}),(0,h.jsxs)(f,{side:`bottom`,className:`max-w-xs`,children:[(0,h.jsx)(`p`,{className:`font-bold`,children:`Keyboard Shortcut`}),(0,h.jsxs)(`p`,{className:`opacity-80`,children:[`Press `,(0,h.jsx)(`kbd`,{className:`px-1 bg-background/20 rounded`,children:`Ctrl`}),` +`,` `,(0,h.jsx)(`kbd`,{className:`px-1 bg-background/20 rounded`,children:`S`}),` to save`]})]})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    children: 'This is helpful information.',
    side: 'top'
  },
  render: args => <Tooltip>
      <TooltipTrigger>
        <Button variant="secondary">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent {...args} />
    </Tooltip>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Sides',
  parameters: {
    layout: 'padded'
  },
  render: () => <div className="grid grid-cols-2 gap-24 p-24 place-items-center">
      <Tooltip open>
        <TooltipTrigger>
          <Button variant="secondary">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">Tooltip on top</TooltipContent>
      </Tooltip>

      <Tooltip open>
        <TooltipTrigger>
          <Button variant="secondary">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">Tooltip on right</TooltipContent>
      </Tooltip>

      <Tooltip open>
        <TooltipTrigger>
          <Button variant="secondary">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
      </Tooltip>

      <Tooltip open>
        <TooltipTrigger>
          <Button variant="secondary">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">Tooltip on left</TooltipContent>
      </Tooltip>
    </div>
}`,...v.parameters?.docs?.source},description:{story:`Sides demonstrates all four placement options. \`open\` is pinned so the
popover is visible without hovering — both as a static visual reference
and as a deterministic VRT target. Use the Playground story to test
hover / focus behavior interactively.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'With Icon Button',
  render: () => <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger>
          <Button icon={Info} aria-label="Information" />
        </TooltipTrigger>
        <TooltipContent>View more information</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <Button icon={Settings} aria-label="Settings" />
        </TooltipTrigger>
        <TooltipContent>Open settings</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <Button icon={Trash2} variant="destructive" aria-label="Delete" />
        </TooltipTrigger>
        <TooltipContent>Delete item</TooltipContent>
      </Tooltip>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'With Disabled Button',
  render: () => <Tooltip>
      <TooltipTrigger>
        {/* biome-ignore lint/a11y/useSemanticElements: Wrapper for disabled button tooltip */}
        <span role="button" tabIndex={0}>
          <Button disabled style={{
          pointerEvents: 'none'
        }}>
            Disabled Button
          </Button>
        </span>
      </TooltipTrigger>
      <TooltipContent>This action is currently unavailable</TooltipContent>
    </Tooltip>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Long Content',
  render: () => <Tooltip open>
      <TooltipTrigger>
        <Button variant="secondary">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="max-w-xs">
        This is a longer tooltip that wraps onto multiple lines so the layout and \`max-w-*\`
        constraints stay covered by visual regression tests.
      </TooltipContent>
    </Tooltip>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Rich Content',
  render: () => <Tooltip open>
      <TooltipTrigger>
        <Button variant="secondary">Hover for details</Button>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="max-w-xs">
        <p className="font-bold">Keyboard Shortcut</p>
        <p className="opacity-80">
          Press <kbd className="px-1 bg-background/20 rounded">Ctrl</kbd> +{' '}
          <kbd className="px-1 bg-background/20 rounded">S</kbd> to save
        </p>
      </TooltipContent>
    </Tooltip>
}`,...S.parameters?.docs?.source}}},C=[`Playground`,`Sides`,`WithIconButton`,`WithDisabledButton`,`LongContent`,`RichContent`]})))()}w();export{x as LongContent,_ as Playground,S as RichContent,v as Sides,b as WithDisabledButton,y as WithIconButton,C as __namedExportsOrder,g as default};