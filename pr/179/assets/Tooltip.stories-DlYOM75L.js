import{j as o}from"./iframe-BFmZqsBC.js";import{B as e}from"./Button-CbbNS7ws.js";import{c as t,a as r,b as n,T as A}from"./Tooltip-CdJcPgkd.js";import"./preload-helper-CS-FZmmI.js";import"./index-CMCoUxjt.js";import"./index-foA8_dZQ.js";import"./index-BzzdA1ql.js";import"./chevron-up-C5mTaxgt.js";import"./utils-BQHNewu7.js";import"./index-D1SQP9Z-.js";import"./Spinner-BHcLdcr7.js";import"./index-DjDkFX_H.js";import"./index-CpSWM_ks.js";import"./index-C1pzhsF7.js";import"./index-Vfj_pH_g.js";import"./index-CjbxFyqg.js";import"./index-HckI5bbI.js";import"./index-B-YNfNEq.js";import"./index-DNjwBex9.js";import"./index-DYF9gB8K.js";const io={title:"Components/lv1/Tooltip",component:t,parameters:{layout:"centered"},tags:["autodocs"],decorators:[m=>o.jsx(A,{delayDuration:100,children:o.jsx(m,{})})],argTypes:{side:{description:"The preferred side of the trigger to render the tooltip.",control:"select",options:["top","right","bottom","left"],table:{type:{summary:'"top" | "right" | "bottom" | "left"'},defaultValue:{summary:"top"}}},children:{description:"Content to display in the tooltip.",control:"text",table:{type:{summary:"ReactNode"}}},container:{table:{disable:!0}},asChild:{table:{disable:!0}}}},i={name:"Playground",args:{children:"This is helpful information.",side:"top"},render:m=>o.jsxs(r,{children:[o.jsx(n,{children:o.jsx(e,{variant:"secondary",children:"Hover me"})}),o.jsx(t,{...m})]})},s={name:"Sides",render:()=>o.jsxs("div",{className:"flex gap-8",children:[o.jsxs(r,{children:[o.jsx(n,{children:o.jsx(e,{variant:"secondary",children:"Top"})}),o.jsx(t,{side:"top",children:"Tooltip on top"})]}),o.jsxs(r,{children:[o.jsx(n,{children:o.jsx(e,{variant:"secondary",children:"Right"})}),o.jsx(t,{side:"right",children:"Tooltip on right"})]}),o.jsxs(r,{children:[o.jsx(n,{children:o.jsx(e,{variant:"secondary",children:"Bottom"})}),o.jsx(t,{side:"bottom",children:"Tooltip on bottom"})]}),o.jsxs(r,{children:[o.jsx(n,{children:o.jsx(e,{variant:"secondary",children:"Left"})}),o.jsx(t,{side:"left",children:"Tooltip on left"})]})]})},a={name:"With Icon Button",render:()=>o.jsxs("div",{className:"flex gap-4",children:[o.jsxs(r,{children:[o.jsx(n,{children:o.jsx(e,{icon:"Info","aria-label":"Information"})}),o.jsx(t,{children:"View more information"})]}),o.jsxs(r,{children:[o.jsx(n,{children:o.jsx(e,{icon:"Settings","aria-label":"Settings"})}),o.jsx(t,{children:"Open settings"})]}),o.jsxs(r,{children:[o.jsx(n,{children:o.jsx(e,{icon:"Trash2",variant:"destructive","aria-label":"Delete"})}),o.jsx(t,{children:"Delete item"})]})]})},l={name:"With Disabled Button",render:()=>o.jsxs(r,{children:[o.jsx(n,{children:o.jsx("span",{role:"button",tabIndex:0,children:o.jsx(e,{disabled:!0,style:{pointerEvents:"none"},children:"Disabled Button"})})}),o.jsx(t,{children:"This action is currently unavailable"})]})},d={name:"Rich Content",render:()=>o.jsxs(r,{children:[o.jsx(n,{children:o.jsx(e,{variant:"secondary",children:"Hover for details"})}),o.jsxs(t,{className:"max-w-xs",children:[o.jsx("p",{className:"font-bold",children:"Keyboard Shortcut"}),o.jsxs("p",{className:"opacity-80",children:["Press ",o.jsx("kbd",{className:"px-1 bg-background/20 rounded",children:"Ctrl"})," +"," ",o.jsx("kbd",{className:"px-1 bg-background/20 rounded",children:"S"})," to save"]})]})]})},p={name:"Open / All Sides",parameters:{layout:"padded"},render:()=>o.jsxs("div",{className:"grid grid-cols-2 gap-24 p-24 place-items-center",children:[o.jsxs(r,{open:!0,children:[o.jsx(n,{children:o.jsx(e,{variant:"secondary",children:"Top"})}),o.jsx(t,{side:"top",children:"Tooltip on top"})]}),o.jsxs(r,{open:!0,children:[o.jsx(n,{children:o.jsx(e,{variant:"secondary",children:"Right"})}),o.jsx(t,{side:"right",children:"Tooltip on right"})]}),o.jsxs(r,{open:!0,children:[o.jsx(n,{children:o.jsx(e,{variant:"secondary",children:"Bottom"})}),o.jsx(t,{side:"bottom",children:"Tooltip on bottom"})]}),o.jsxs(r,{open:!0,children:[o.jsx(n,{children:o.jsx(e,{variant:"secondary",children:"Left"})}),o.jsx(t,{side:"left",children:"Tooltip on left"})]})]})},c={name:"Open / Long Content",render:()=>o.jsxs(r,{open:!0,children:[o.jsx(n,{children:o.jsx(e,{variant:"secondary",children:"Hover me"})}),o.jsx(t,{side:"bottom",className:"max-w-xs",children:"This is a longer tooltip that wraps onto multiple lines so the layout and `max-w-*` constraints stay covered by visual regression tests."})]})},T={name:"Open / Rich Content",render:()=>o.jsxs(r,{open:!0,children:[o.jsx(n,{children:o.jsx(e,{variant:"secondary",children:"Hover for details"})}),o.jsxs(t,{side:"bottom",className:"max-w-xs",children:[o.jsx("p",{className:"font-bold",children:"Keyboard Shortcut"}),o.jsxs("p",{className:"opacity-80",children:["Press ",o.jsx("kbd",{className:"px-1 bg-background/20 rounded",children:"Ctrl"})," +"," ",o.jsx("kbd",{className:"px-1 bg-background/20 rounded",children:"S"})," to save"]})]})]})};var g,h,u;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(u=(h=i.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var x,b,j;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(j=(b=s.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var v,y,C;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(C=(y=a.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var B,f,N;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(N=(f=l.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var S,k,O;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(O=(k=d.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var R,w,D;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Open / All Sides',
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
}`,...(D=(w=p.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var I,P,W;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Open / Long Content',
  render: () => <Tooltip open>
      <TooltipTrigger>
        <Button variant="secondary">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="max-w-xs">
        This is a longer tooltip that wraps onto multiple lines so the layout and \`max-w-*\`
        constraints stay covered by visual regression tests.
      </TooltipContent>
    </Tooltip>
}`,...(W=(P=c.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var H,L,E;T.parameters={...T.parameters,docs:{...(H=T.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Open / Rich Content',
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
}`,...(E=(L=T.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};const so=["Playground","Sides","WithIconButton","WithDisabledButton","RichContent","OpenAllSides","OpenLongContent","OpenRichContent"];export{p as OpenAllSides,c as OpenLongContent,T as OpenRichContent,i as Playground,d as RichContent,s as Sides,l as WithDisabledButton,a as WithIconButton,so as __namedExportsOrder,io as default};
