import{j as o}from"./iframe-CFo2v3yn.js";import{c as t,a as e,b as r,T as m}from"./Tooltip-CCkCgEJw.js";import{B as i}from"./Button-ak2U5ihJ.js";import{I as T}from"./info-Cei9ef1X.js";import{S as g}from"./settings-CM4yyrOH.js";import{T as u}from"./trash-2-CTsu6iYJ.js";import"./preload-helper-L4mbS_mw.js";import"./index-Cr6FOicX.js";import"./index-CTtLbU2W.js";import"./index-CNdnkSHN.js";import"./index-BpK0hZDe.js";import"./index-DkI-ivqg.js";import"./index-C1jc4trU.js";import"./index-B_oj_1IT.js";import"./index-BzA2ygT7.js";import"./index-CkJ3PtRR.js";import"./utils-DclmTqRz.js";/* empty css                */import"./index-CMlM4MiU.js";import"./index-BYWyDHmV.js";/* empty css               */import"./Spinner-Dz4FQiyk.js";/* empty css                */import"./createLucideIcon-BtZnhpAi.js";const _={title:"Components/lv1/Tooltip",component:t,parameters:{layout:"centered"},tags:["autodocs"],decorators:[c=>o.jsx(m,{delayDuration:100,children:o.jsx(c,{})})],argTypes:{side:{description:"The preferred side of the trigger to render the tooltip.",control:"select",options:["top","right","bottom","left"],table:{type:{summary:'"top" | "right" | "bottom" | "left"'},defaultValue:{summary:"top"}}},children:{description:"Content to display in the tooltip.",control:"text",table:{type:{summary:"ReactNode"}}},container:{table:{disable:!0}},asChild:{table:{disable:!0}}}},s={name:"Playground",args:{children:"This is helpful information.",side:"top"},render:c=>o.jsxs(e,{children:[o.jsx(r,{children:o.jsx(i,{variant:"secondary",children:"Hover me"})}),o.jsx(t,{...c})]})},n={name:"Sides",parameters:{layout:"padded"},render:()=>o.jsxs("div",{className:"grid grid-cols-2 gap-24 p-24 place-items-center",children:[o.jsxs(e,{open:!0,children:[o.jsx(r,{children:o.jsx(i,{variant:"secondary",children:"Top"})}),o.jsx(t,{side:"top",children:"Tooltip on top"})]}),o.jsxs(e,{open:!0,children:[o.jsx(r,{children:o.jsx(i,{variant:"secondary",children:"Right"})}),o.jsx(t,{side:"right",children:"Tooltip on right"})]}),o.jsxs(e,{open:!0,children:[o.jsx(r,{children:o.jsx(i,{variant:"secondary",children:"Bottom"})}),o.jsx(t,{side:"bottom",children:"Tooltip on bottom"})]}),o.jsxs(e,{open:!0,children:[o.jsx(r,{children:o.jsx(i,{variant:"secondary",children:"Left"})}),o.jsx(t,{side:"left",children:"Tooltip on left"})]})]})},a={name:"With Icon Button",render:()=>o.jsxs("div",{className:"flex gap-4",children:[o.jsxs(e,{children:[o.jsx(r,{children:o.jsx(i,{icon:T,"aria-label":"Information"})}),o.jsx(t,{children:"View more information"})]}),o.jsxs(e,{children:[o.jsx(r,{children:o.jsx(i,{icon:g,"aria-label":"Settings"})}),o.jsx(t,{children:"Open settings"})]}),o.jsxs(e,{children:[o.jsx(r,{children:o.jsx(i,{icon:u,variant:"destructive","aria-label":"Delete"})}),o.jsx(t,{children:"Delete item"})]})]})},l={name:"With Disabled Button",render:()=>o.jsxs(e,{children:[o.jsx(r,{children:o.jsx("span",{role:"button",tabIndex:0,children:o.jsx(i,{disabled:!0,style:{pointerEvents:"none"},children:"Disabled Button"})})}),o.jsx(t,{children:"This action is currently unavailable"})]})},p={name:"Long Content",render:()=>o.jsxs(e,{open:!0,children:[o.jsx(r,{children:o.jsx(i,{variant:"secondary",children:"Hover me"})}),o.jsx(t,{side:"bottom",className:"max-w-xs",children:"This is a longer tooltip that wraps onto multiple lines so the layout and `max-w-*` constraints stay covered by visual regression tests."})]})},d={name:"Rich Content",render:()=>o.jsxs(e,{open:!0,children:[o.jsx(r,{children:o.jsx(i,{variant:"secondary",children:"Hover for details"})}),o.jsxs(t,{side:"bottom",className:"max-w-xs",children:[o.jsx("p",{className:"font-bold",children:"Keyboard Shortcut"}),o.jsxs("p",{className:"opacity-80",children:["Press ",o.jsx("kbd",{className:"px-1 bg-background/20 rounded",children:"Ctrl"})," +"," ",o.jsx("kbd",{className:"px-1 bg-background/20 rounded",children:"S"})," to save"]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source},description:{story:`Sides demonstrates all four placement options. \`open\` is pinned so the
popover is visible without hovering — both as a static visual reference
and as a deterministic VRT target. Use the Playground story to test
hover / focus behavior interactively.`,...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const U=["Playground","Sides","WithIconButton","WithDisabledButton","LongContent","RichContent"];export{p as LongContent,s as Playground,d as RichContent,n as Sides,l as WithDisabledButton,a as WithIconButton,U as __namedExportsOrder,_ as default};
