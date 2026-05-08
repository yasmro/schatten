import{j as o}from"./iframe-B8iTFLCN.js";import{B as e}from"./Button-ByFxsh9J.js";import{c as t,a as r,b as i,T as N}from"./Tooltip-mj3Ue4ru.js";import"./preload-helper-DO2YjopH.js";import"./index-BP6eos4a.js";import"./index-CbFrLGv4.js";import"./index-BJgaHMnf.js";import"./chevron-up-Bp3EIql_.js";import"./utils-BQHNewu7.js";import"./index-D1SQP9Z-.js";import"./Spinner-jfc4jtRD.js";import"./index-DXZLJv7A.js";import"./index-BqP72f_k.js";import"./index-_WFQWMZT.js";import"./index-BxrPPyPg.js";import"./index-BcUeezY1.js";import"./index-Bt84WEyf.js";import"./index-C5BcvwYz.js";import"./index-Dd9LnZLl.js";import"./index-Cx1O_q5z.js";const M={title:"Components/lv1/Tooltip",component:t,parameters:{layout:"centered"},tags:["autodocs"],decorators:[p=>o.jsx(N,{delayDuration:100,children:o.jsx(p,{})})],argTypes:{side:{description:"The preferred side of the trigger to render the tooltip.",control:"select",options:["top","right","bottom","left"],table:{type:{summary:'"top" | "right" | "bottom" | "left"'},defaultValue:{summary:"top"}}},children:{description:"Content to display in the tooltip.",control:"text",table:{type:{summary:"ReactNode"}}},container:{table:{disable:!0}},hideArrow:{table:{disable:!0}},asChild:{table:{disable:!0}}}},n={name:"Playground",args:{children:"This is helpful information.",side:"top"},render:p=>o.jsxs(r,{children:[o.jsx(i,{children:o.jsx(e,{variant:"secondary",children:"Hover me"})}),o.jsx(t,{...p})]})},s={name:"Sides",render:()=>o.jsxs("div",{className:"flex gap-8",children:[o.jsxs(r,{children:[o.jsx(i,{children:o.jsx(e,{variant:"secondary",children:"Top"})}),o.jsx(t,{side:"top",children:"Tooltip on top"})]}),o.jsxs(r,{children:[o.jsx(i,{children:o.jsx(e,{variant:"secondary",children:"Right"})}),o.jsx(t,{side:"right",children:"Tooltip on right"})]}),o.jsxs(r,{children:[o.jsx(i,{children:o.jsx(e,{variant:"secondary",children:"Bottom"})}),o.jsx(t,{side:"bottom",children:"Tooltip on bottom"})]}),o.jsxs(r,{children:[o.jsx(i,{children:o.jsx(e,{variant:"secondary",children:"Left"})}),o.jsx(t,{side:"left",children:"Tooltip on left"})]})]})},a={name:"With Icon Button",render:()=>o.jsxs("div",{className:"flex gap-4",children:[o.jsxs(r,{children:[o.jsx(i,{children:o.jsx(e,{icon:"Info","aria-label":"Information"})}),o.jsx(t,{children:"View more information"})]}),o.jsxs(r,{children:[o.jsx(i,{children:o.jsx(e,{icon:"Settings","aria-label":"Settings"})}),o.jsx(t,{children:"Open settings"})]}),o.jsxs(r,{children:[o.jsx(i,{children:o.jsx(e,{icon:"Trash2",variant:"destructive","aria-label":"Delete"})}),o.jsx(t,{children:"Delete item"})]})]})},l={name:"With Disabled Button",render:()=>o.jsxs(r,{children:[o.jsx(i,{children:o.jsx("span",{role:"button",tabIndex:0,children:o.jsx(e,{disabled:!0,style:{pointerEvents:"none"},children:"Disabled Button"})})}),o.jsx(t,{children:"This action is currently unavailable"})]})},d={name:"Rich Content",render:()=>o.jsxs(r,{children:[o.jsx(i,{children:o.jsx(e,{variant:"secondary",children:"Hover for details"})}),o.jsxs(t,{className:"max-w-xs",children:[o.jsx("p",{className:"font-bold",children:"Keyboard Shortcut"}),o.jsxs("p",{className:"opacity-80",children:["Press ",o.jsx("kbd",{className:"px-1 bg-background/20 rounded",children:"Ctrl"})," +"," ",o.jsx("kbd",{className:"px-1 bg-background/20 rounded",children:"S"})," to save"]})]})]})};var c,m,T;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(T=(m=n.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};var g,h,u;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var x,b,j;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(j=(b=a.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var f,v,y;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(v=l.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var B,C,S;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(S=(C=d.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const Q=["Playground","Sides","WithIconButton","WithDisabledButton","RichContent"];export{n as Playground,d as RichContent,s as Sides,l as WithDisabledButton,a as WithIconButton,Q as __namedExportsOrder,M as default};
