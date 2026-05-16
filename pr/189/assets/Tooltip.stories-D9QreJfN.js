import{j as o}from"./iframe-DpiZM5MV.js";import{B as e}from"./Button-8rMcSu_I.js";import{c as t,a as r,b as i,T as W}from"./Tooltip-BdWWwiJh.js";import"./preload-helper-B4Ykk505.js";import"./index-tQngIe9K.js";import"./index-Hmi8QLo7.js";import"./index-DvRupHxX.js";import"./chevron-up-DtLZXdNh.js";import"./utils-BQHNewu7.js";import"./index-D1SQP9Z-.js";import"./Spinner-BULm_pQp.js";import"./index-DlK-YHVr.js";import"./index-BVWI0XQc.js";import"./index-BP-Kkp-_.js";import"./index-B0-q-ZFz.js";import"./index-B38ZlyX0.js";import"./index-BqV-jkI5.js";import"./index-D2dXB3rR.js";import"./index-5Ef7PE4E.js";import"./index-DncwhFZZ.js";const $={title:"Components/lv1/Tooltip",component:t,parameters:{layout:"centered"},tags:["autodocs"],decorators:[c=>o.jsx(W,{delayDuration:100,children:o.jsx(c,{})})],argTypes:{side:{description:"The preferred side of the trigger to render the tooltip.",control:"select",options:["top","right","bottom","left"],table:{type:{summary:'"top" | "right" | "bottom" | "left"'},defaultValue:{summary:"top"}}},children:{description:"Content to display in the tooltip.",control:"text",table:{type:{summary:"ReactNode"}}},container:{table:{disable:!0}},asChild:{table:{disable:!0}}}},s={name:"Playground",args:{children:"This is helpful information.",side:"top"},render:c=>o.jsxs(r,{children:[o.jsx(i,{children:o.jsx(e,{variant:"secondary",children:"Hover me"})}),o.jsx(t,{...c})]})},n={name:"Sides",parameters:{layout:"padded"},render:()=>o.jsxs("div",{className:"grid grid-cols-2 gap-24 p-24 place-items-center",children:[o.jsxs(r,{open:!0,children:[o.jsx(i,{children:o.jsx(e,{variant:"secondary",children:"Top"})}),o.jsx(t,{side:"top",children:"Tooltip on top"})]}),o.jsxs(r,{open:!0,children:[o.jsx(i,{children:o.jsx(e,{variant:"secondary",children:"Right"})}),o.jsx(t,{side:"right",children:"Tooltip on right"})]}),o.jsxs(r,{open:!0,children:[o.jsx(i,{children:o.jsx(e,{variant:"secondary",children:"Bottom"})}),o.jsx(t,{side:"bottom",children:"Tooltip on bottom"})]}),o.jsxs(r,{open:!0,children:[o.jsx(i,{children:o.jsx(e,{variant:"secondary",children:"Left"})}),o.jsx(t,{side:"left",children:"Tooltip on left"})]})]})},a={name:"With Icon Button",render:()=>o.jsxs("div",{className:"flex gap-4",children:[o.jsxs(r,{children:[o.jsx(i,{children:o.jsx(e,{icon:"Info","aria-label":"Information"})}),o.jsx(t,{children:"View more information"})]}),o.jsxs(r,{children:[o.jsx(i,{children:o.jsx(e,{icon:"Settings","aria-label":"Settings"})}),o.jsx(t,{children:"Open settings"})]}),o.jsxs(r,{children:[o.jsx(i,{children:o.jsx(e,{icon:"Trash2",variant:"destructive","aria-label":"Delete"})}),o.jsx(t,{children:"Delete item"})]})]})},l={name:"With Disabled Button",render:()=>o.jsxs(r,{children:[o.jsx(i,{children:o.jsx("span",{role:"button",tabIndex:0,children:o.jsx(e,{disabled:!0,style:{pointerEvents:"none"},children:"Disabled Button"})})}),o.jsx(t,{children:"This action is currently unavailable"})]})},p={name:"Long Content",render:()=>o.jsxs(r,{open:!0,children:[o.jsx(i,{children:o.jsx(e,{variant:"secondary",children:"Hover me"})}),o.jsx(t,{side:"bottom",className:"max-w-xs",children:"This is a longer tooltip that wraps onto multiple lines so the layout and `max-w-*` constraints stay covered by visual regression tests."})]})},d={name:"Rich Content",render:()=>o.jsxs(r,{open:!0,children:[o.jsx(i,{children:o.jsx(e,{variant:"secondary",children:"Hover for details"})}),o.jsxs(t,{side:"bottom",className:"max-w-xs",children:[o.jsx("p",{className:"font-bold",children:"Keyboard Shortcut"}),o.jsxs("p",{className:"opacity-80",children:["Press ",o.jsx("kbd",{className:"px-1 bg-background/20 rounded",children:"Ctrl"})," +"," ",o.jsx("kbd",{className:"px-1 bg-background/20 rounded",children:"S"})," to save"]})]})]})};var m,T,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(T=s.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var u,h,x,b,j;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source},description:{story:`Sides demonstrates all four placement options. \`open\` is pinned so the
popover is visible without hovering — both as a static visual reference
and as a deterministic VRT target. Use the Playground story to test
hover / focus behavior interactively.`,...(j=(b=n.parameters)==null?void 0:b.docs)==null?void 0:j.description}}};var v,y,f;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var C,B,S;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(S=(B=l.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var N,w,D;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(D=(w=p.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var k,I,R;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(R=(I=d.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};const oo=["Playground","Sides","WithIconButton","WithDisabledButton","LongContent","RichContent"];export{p as LongContent,s as Playground,d as RichContent,n as Sides,l as WithDisabledButton,a as WithIconButton,oo as __namedExportsOrder,$ as default};
