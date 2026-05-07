import{j as o}from"./iframe-BR71pDDo.js";import{B as e}from"./Button-fusqHp_n.js";import{c as t,a as r,b as i,T as c}from"./Tooltip-WKLn6XIT.js";import"./preload-helper-BdHZps5x.js";import"./index-r3lr-Zc6.js";import"./index-CNJc8Daf.js";import"./index-Dlp6Wp2P.js";import"./chevron-up-BedBGzaO.js";import"./utils-d2XQ1MEC.js";import"./index-Drd88ecX.js";import"./Spinner-fJP2C27T.js";import"./index-BPEMftxV.js";import"./index-C1HX8I77.js";import"./index-CscT5rD2.js";import"./index-DNshMYUc.js";import"./index-CUw09bJO.js";import"./index-C7jnHWcx.js";import"./index-ByHgnYS0.js";import"./index-o-5XQNmV.js";import"./index-JEu8y2tt.js";import"./index-Bk4LhLAQ.js";const w={title:"Components/lv1/Tooltip",component:t,parameters:{layout:"centered"},tags:["autodocs"],decorators:[p=>o.jsx(c,{delayDuration:100,children:o.jsx(p,{})})],argTypes:{side:{description:"The preferred side of the trigger to render the tooltip.",control:"select",options:["top","right","bottom","left"],table:{type:{summary:'"top" | "right" | "bottom" | "left"'},defaultValue:{summary:"top"}}},children:{description:"Content to display in the tooltip.",control:"text",table:{type:{summary:"ReactNode"}}},container:{table:{disable:!0}},hideArrow:{table:{disable:!0}},asChild:{table:{disable:!0}}}},n={name:"Playground",args:{children:"This is helpful information.",side:"top"},render:p=>o.jsxs(r,{children:[o.jsx(i,{children:o.jsx(e,{variant:"secondary",children:"Hover me"})}),o.jsx(t,{...p})]})},s={name:"Sides",render:()=>o.jsxs("div",{className:"flex gap-8",children:[o.jsxs(r,{children:[o.jsx(i,{children:o.jsx(e,{variant:"secondary",children:"Top"})}),o.jsx(t,{side:"top",children:"Tooltip on top"})]}),o.jsxs(r,{children:[o.jsx(i,{children:o.jsx(e,{variant:"secondary",children:"Right"})}),o.jsx(t,{side:"right",children:"Tooltip on right"})]}),o.jsxs(r,{children:[o.jsx(i,{children:o.jsx(e,{variant:"secondary",children:"Bottom"})}),o.jsx(t,{side:"bottom",children:"Tooltip on bottom"})]}),o.jsxs(r,{children:[o.jsx(i,{children:o.jsx(e,{variant:"secondary",children:"Left"})}),o.jsx(t,{side:"left",children:"Tooltip on left"})]})]})},a={name:"With Icon Button",render:()=>o.jsxs("div",{className:"flex gap-4",children:[o.jsxs(r,{children:[o.jsx(i,{children:o.jsx(e,{icon:"Info","aria-label":"Information"})}),o.jsx(t,{children:"View more information"})]}),o.jsxs(r,{children:[o.jsx(i,{children:o.jsx(e,{icon:"Settings","aria-label":"Settings"})}),o.jsx(t,{children:"Open settings"})]}),o.jsxs(r,{children:[o.jsx(i,{children:o.jsx(e,{icon:"Trash2",variant:"destructive","aria-label":"Delete"})}),o.jsx(t,{children:"Delete item"})]})]})},l={name:"With Disabled Button",render:()=>o.jsxs(r,{children:[o.jsx(i,{children:o.jsx("span",{role:"button",tabIndex:0,children:o.jsx(e,{disabled:!0,style:{pointerEvents:"none"},children:"Disabled Button"})})}),o.jsx(t,{children:"This action is currently unavailable"})]})},d={name:"Rich Content",render:()=>o.jsxs(r,{children:[o.jsx(i,{children:o.jsx(e,{variant:"secondary",children:"Hover for details"})}),o.jsxs(t,{className:"max-w-xs",children:[o.jsx("p",{className:"font-bold",children:"Keyboard Shortcut"}),o.jsxs("p",{className:"opacity-80",children:["Press ",o.jsx("kbd",{className:"px-1 bg-background/20 rounded",children:"Ctrl"})," +"," ",o.jsx("kbd",{className:"px-1 bg-background/20 rounded",children:"S"})," to save"]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Sides',
  render: () => <div className="flex gap-8">
      <Tooltip>
        <TooltipTrigger>
          <Button variant="secondary">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">Tooltip on top</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <Button variant="secondary">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">Tooltip on right</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <Button variant="secondary">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <Button variant="secondary">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">Tooltip on left</TooltipContent>
      </Tooltip>
    </div>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'With Icon Button',
  render: () => <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger>
          <Button icon="Info" aria-label="Information" />
        </TooltipTrigger>
        <TooltipContent>View more information</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <Button icon="Settings" aria-label="Settings" />
        </TooltipTrigger>
        <TooltipContent>Open settings</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <Button icon="Trash2" variant="destructive" aria-label="Delete" />
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Rich Content',
  render: () => <Tooltip>
      <TooltipTrigger>
        <Button variant="secondary">Hover for details</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <p className="font-bold">Keyboard Shortcut</p>
        <p className="opacity-80">
          Press <kbd className="px-1 bg-background/20 rounded">Ctrl</kbd> +{' '}
          <kbd className="px-1 bg-background/20 rounded">S</kbd> to save
        </p>
      </TooltipContent>
    </Tooltip>
}`,...d.parameters?.docs?.source}}};const E=["Playground","Sides","WithIconButton","WithDisabledButton","RichContent"];export{n as Playground,d as RichContent,s as Sides,l as WithDisabledButton,a as WithIconButton,E as __namedExportsOrder,w as default};
