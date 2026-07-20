import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{K as n,O as r,g as i,t as a}from"./lucide-react-CwYeROqo.js";import{t as o}from"./Button-Dr82GheM.js";import{t as s}from"./Button-BhCxneLV.js";import{a as c,i as l,n as u,r as d,t as f}from"./Tooltip-11emPE8s.js";var p,m,h,g,_,v,y,b,x;e((()=>{a(),s(),c(),p=t(),m={title:`Components/lv1/Tooltip`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],decorators:[e=>(0,p.jsx)(d,{delayDuration:100,children:(0,p.jsx)(e,{})})],argTypes:{side:{description:`The preferred side of the trigger to render the tooltip.`,control:`select`,options:[`top`,`right`,`bottom`,`left`],table:{type:{summary:`"top" | "right" | "bottom" | "left"`},defaultValue:{summary:`top`}}},children:{description:`Content to display in the tooltip.`,control:`text`,table:{type:{summary:`ReactNode`}}},container:{table:{disable:!0}}}},h={name:`Playground`,args:{children:`This is helpful information.`,side:`top`},render:e=>(0,p.jsxs)(f,{children:[(0,p.jsx)(l,{children:(0,p.jsx)(o,{variant:`secondary`,children:`Hover me`})}),(0,p.jsx)(u,{...e})]})},g={name:`Sides`,parameters:{layout:`padded`},render:()=>(0,p.jsxs)(`div`,{className:`grid grid-cols-2 gap-24 p-24 place-items-center`,children:[(0,p.jsxs)(f,{open:!0,children:[(0,p.jsx)(l,{children:(0,p.jsx)(o,{variant:`secondary`,children:`Top`})}),(0,p.jsx)(u,{side:`top`,children:`Tooltip on top`})]}),(0,p.jsxs)(f,{open:!0,children:[(0,p.jsx)(l,{children:(0,p.jsx)(o,{variant:`secondary`,children:`Right`})}),(0,p.jsx)(u,{side:`right`,children:`Tooltip on right`})]}),(0,p.jsxs)(f,{open:!0,children:[(0,p.jsx)(l,{children:(0,p.jsx)(o,{variant:`secondary`,children:`Bottom`})}),(0,p.jsx)(u,{side:`bottom`,children:`Tooltip on bottom`})]}),(0,p.jsxs)(f,{open:!0,children:[(0,p.jsx)(l,{children:(0,p.jsx)(o,{variant:`secondary`,children:`Left`})}),(0,p.jsx)(u,{side:`left`,children:`Tooltip on left`})]})]})},_={name:`With Icon Button`,render:()=>(0,p.jsxs)(`div`,{className:`flex gap-4`,children:[(0,p.jsxs)(f,{children:[(0,p.jsx)(l,{children:(0,p.jsx)(o,{icon:n,"aria-label":`Information`})}),(0,p.jsx)(u,{children:`View more information`})]}),(0,p.jsxs)(f,{children:[(0,p.jsx)(l,{children:(0,p.jsx)(o,{icon:r,"aria-label":`Settings`})}),(0,p.jsx)(u,{children:`Open settings`})]}),(0,p.jsxs)(f,{children:[(0,p.jsx)(l,{children:(0,p.jsx)(o,{icon:i,variant:`destructive`,"aria-label":`Delete`})}),(0,p.jsx)(u,{children:`Delete item`})]})]})},v={name:`With Disabled Button`,render:()=>(0,p.jsxs)(f,{children:[(0,p.jsx)(l,{children:(0,p.jsx)(`span`,{role:`button`,tabIndex:0,children:(0,p.jsx)(o,{disabled:!0,style:{pointerEvents:`none`},children:`Disabled Button`})})}),(0,p.jsx)(u,{children:`This action is currently unavailable`})]})},y={name:`Long Content`,render:()=>(0,p.jsxs)(f,{open:!0,children:[(0,p.jsx)(l,{children:(0,p.jsx)(o,{variant:`secondary`,children:`Hover me`})}),(0,p.jsx)(u,{side:`bottom`,className:`max-w-xs`,children:"This is a longer tooltip that wraps onto multiple lines so the layout and `max-w-*` constraints stay covered by visual regression tests."})]})},b={name:`Rich Content`,render:()=>(0,p.jsxs)(f,{open:!0,children:[(0,p.jsx)(l,{children:(0,p.jsx)(o,{variant:`secondary`,children:`Hover for details`})}),(0,p.jsxs)(u,{side:`bottom`,className:`max-w-xs`,children:[(0,p.jsx)(`p`,{className:`font-bold`,children:`Keyboard Shortcut`}),(0,p.jsxs)(`p`,{className:`opacity-80`,children:[`Press `,(0,p.jsx)(`kbd`,{className:`px-1 bg-background/20 rounded`,children:`Ctrl`}),` +`,` `,(0,p.jsx)(`kbd`,{className:`px-1 bg-background/20 rounded`,children:`S`}),` to save`]})]})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`Sides demonstrates all four placement options. \`open\` is pinned so the
popover is visible without hovering — both as a static visual reference
and as a deterministic VRT target. Use the Playground story to test
hover / focus behavior interactively.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`Playground`,`Sides`,`WithIconButton`,`WithDisabledButton`,`LongContent`,`RichContent`]}))();export{y as LongContent,h as Playground,b as RichContent,g as Sides,v as WithDisabledButton,_ as WithIconButton,x as __namedExportsOrder,m as default};