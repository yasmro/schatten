import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-BjRhV-jL.js";import{n as r,r as i,t as a}from"./DatePicker-CHQ1X1-g.js";import{n as o,t as s}from"./Button-xxNx6_i_.js";import{n as c,t as l}from"./Field-Eko5X4ZZ.js";import{n as u,t as d}from"./Dialog-CBjLKeLa.js";function f(){let[e,t]=(0,m.useState)(!1);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{onClick:()=>t(!0),children:`Open dialog`}),(0,h.jsx)(d,{isOpen:e,onOpenChange:t,title:`Schedule`,actionButton:{label:`Save`,onClick:()=>t(!1)},children:(0,h.jsx)(l,{label:`Date`,children:(0,h.jsx)(a,{defaultValue:`2026-10-24`,today:`2026-10-20`})})})]})}function p({children:e}){let t=(0,m.useRef)(null);return(0,m.useEffect)(()=>{t.current?.querySelector(`[aria-haspopup="dialog"]`)?.click()},[]),(0,h.jsx)(`div`,{ref:t,className:`w-72`,children:e})}var m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{m=n(),o(),u(),c(),i(),h=t(),g={title:`Components/lv2/DatePicker`,component:a,tags:[`autodocs`],parameters:{layout:`centered`},argTypes:{value:{description:'The selected date as `YYYY-MM-DD` (controlled). `""` is no selection.',control:`text`,table:{type:{summary:`string`}}},defaultValue:{description:"The initially selected date as `YYYY-MM-DD` (uncontrolled).",control:`text`,table:{type:{summary:`string`}}},onValueChange:{description:'Fired when the date changes. `""` while the input holds no valid date.',table:{type:{summary:`(value: string) => void`}}},name:{description:`Submits the selected date under this name.`,control:`text`,table:{type:{summary:`string`}}},size:{description:`Size of the control.`,control:`inline-radio`,options:[`sm`,`md`,`lg`],table:{type:{summary:`"sm" | "md" | "lg"`},defaultValue:{summary:`md`}}},min:{description:`The earliest selectable date. Applies to the calendar and to typed dates.`,control:`text`,table:{type:{summary:`string`}}},max:{description:`The latest selectable date. Applies to the calendar and to typed dates.`,control:`text`,table:{type:{summary:`string`}}},isDateDisabled:{description:`Marks individual dates unavailable.`,control:!1,table:{type:{summary:`(date: string) => boolean`}}},locale:{description:"BCP 47 language tag for the calendar. Typed dates stay `YYYY-MM-DD`.",control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`en-US`}}},weekStartsOn:{description:"The first column of the calendar: `0` is Sunday, `1` is Monday.",control:`select`,options:[0,1,2,3,4,5,6],table:{type:{summary:`0 | 1 | 2 | 3 | 4 | 5 | 6`},defaultValue:{summary:`0`}}},today:{description:`The date the calendar marks as today. Defaults to the local date.`,control:`text`,table:{type:{summary:`string`}}},placeholder:{description:`Text shown while the input is empty.`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`YYYY-MM-DD`}}},labels:{description:`Overrides for the English default labels.`,control:!1,table:{type:{summary:`DatePickerLabels`}}},inputRef:{description:`Ref to the input, e.g. to focus it after a failed validation.`,control:!1,table:{type:{summary:`Ref<HTMLInputElement>`}}},isError:{description:`Displays the error state. A Field takes precedence.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{description:`Disables the input and the calendar button.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},readOnly:{description:`Shows the value without allowing edits.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},required:{description:`Native required validation on the input.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}}},_={args:{"aria-label":`Date`,defaultValue:`2026-10-24`},render:e=>(0,h.jsx)(`div`,{className:`w-72`,children:(0,h.jsx)(a,{...e})})},v={render:()=>(0,h.jsxs)(`div`,{className:`flex w-72 flex-col gap-4`,children:[(0,h.jsx)(a,{size:`sm`,defaultValue:`2026-10-24`,"aria-label":`Small`}),(0,h.jsx)(a,{size:`md`,defaultValue:`2026-10-24`,"aria-label":`Medium`}),(0,h.jsx)(a,{size:`lg`,defaultValue:`2026-10-24`,"aria-label":`Large`}),(0,h.jsx)(r,{size:`sm`,defaultValue:{from:`2026-10-20`,to:`2026-10-24`},"aria-label":`Small range`}),(0,h.jsx)(r,{size:`md`,defaultValue:{from:`2026-10-20`,to:`2026-10-24`},"aria-label":`Medium range`}),(0,h.jsx)(r,{size:`lg`,defaultValue:{from:`2026-10-20`,to:`2026-10-24`},"aria-label":`Large range`})]})},y={render:()=>(0,h.jsxs)(`div`,{className:`grid w-[40rem] grid-cols-2 gap-4`,children:[(0,h.jsx)(a,{"aria-label":`Empty`}),(0,h.jsx)(r,{"aria-label":`Empty range`}),(0,h.jsx)(a,{isError:!0,defaultValue:`2026-10-24`,"aria-label":`Error`}),(0,h.jsx)(r,{isError:!0,defaultValue:{from:`2026-10-20`,to:`2026-10-24`},"aria-label":`Error range`}),(0,h.jsx)(a,{readOnly:!0,defaultValue:`2026-10-24`,"aria-label":`Read-only`}),(0,h.jsx)(r,{readOnly:!0,defaultValue:{from:`2026-10-20`,to:`2026-10-24`},"aria-label":`Read-only range`}),(0,h.jsx)(a,{disabled:!0,defaultValue:`2026-10-24`,"aria-label":`Disabled`}),(0,h.jsx)(r,{disabled:!0,defaultValue:{from:`2026-10-20`,to:`2026-10-24`},"aria-label":`Disabled range`})]})},b={name:`In Field`,render:()=>(0,h.jsxs)(`div`,{className:`flex w-72 flex-col gap-4`,children:[(0,h.jsx)(l,{label:`Departure`,description:`Pick a weekday.`,required:!0,children:(0,h.jsx)(a,{defaultValue:`2026-10-24`})}),(0,h.jsx)(l,{label:`Stay`,error:`Choose both dates.`,children:(0,h.jsx)(r,{defaultValue:{from:`2026-10-20`}})})]})},x={name:`In Form`,render:()=>(0,h.jsxs)(`form`,{className:`flex w-72 flex-col gap-4`,children:[(0,h.jsx)(a,{name:`date`,defaultValue:`2026-10-24`,"aria-label":`Date`}),(0,h.jsx)(r,{startName:`start`,endName:`end`,defaultValue:{from:`2026-10-20`,to:`2026-10-24`},"aria-label":`Stay`}),(0,h.jsx)(`button`,{type:`reset`,children:`Reset`})]})},S={name:`In Dialog`,render:()=>(0,h.jsx)(f,{})},C={layout:`padded`},w={parameters:C,render:()=>(0,h.jsx)(`div`,{className:`h-96`,children:(0,h.jsx)(p,{children:(0,h.jsx)(a,{defaultValue:`2026-10-24`,today:`2026-10-20`,"aria-label":`Date`})})})},T={name:`Open Range`,parameters:C,render:()=>(0,h.jsx)(`div`,{className:`h-96`,children:(0,h.jsx)(p,{children:(0,h.jsx)(r,{defaultValue:{from:`2026-10-20`,to:`2026-10-24`},today:`2026-10-20`,"aria-label":`Stay`})})})},E=[`Playground`,`Sizes`,`States`,`InField`,`InForm`,`InDialog`,`Open`,`OpenRange`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Date',
    defaultValue: '2026-10-24'
  },
  render: args => <div className="w-72">
      <DatePicker {...args} />
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-72 flex-col gap-4">
      <DatePicker size="sm" defaultValue="2026-10-24" aria-label="Small" />
      <DatePicker size="md" defaultValue="2026-10-24" aria-label="Medium" />
      <DatePicker size="lg" defaultValue="2026-10-24" aria-label="Large" />
      <DateRangePicker size="sm" defaultValue={{
      from: '2026-10-20',
      to: '2026-10-24'
    }} aria-label="Small range" />
      <DateRangePicker size="md" defaultValue={{
      from: '2026-10-20',
      to: '2026-10-24'
    }} aria-label="Medium range" />
      <DateRangePicker size="lg" defaultValue={{
      from: '2026-10-20',
      to: '2026-10-24'
    }} aria-label="Large range" />
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid w-[40rem] grid-cols-2 gap-4">
      <DatePicker aria-label="Empty" />
      <DateRangePicker aria-label="Empty range" />
      <DatePicker isError defaultValue="2026-10-24" aria-label="Error" />
      <DateRangePicker isError defaultValue={{
      from: '2026-10-20',
      to: '2026-10-24'
    }} aria-label="Error range" />
      <DatePicker readOnly defaultValue="2026-10-24" aria-label="Read-only" />
      <DateRangePicker readOnly defaultValue={{
      from: '2026-10-20',
      to: '2026-10-24'
    }} aria-label="Read-only range" />
      <DatePicker disabled defaultValue="2026-10-24" aria-label="Disabled" />
      <DateRangePicker disabled defaultValue={{
      from: '2026-10-20',
      to: '2026-10-24'
    }} aria-label="Disabled range" />
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'In Field',
  render: () => <div className="flex w-72 flex-col gap-4">
      <Field label="Departure" description="Pick a weekday." required>
        <DatePicker defaultValue="2026-10-24" />
      </Field>
      <Field label="Stay" error="Choose both dates.">
        <DateRangePicker defaultValue={{
        from: '2026-10-20'
      }} />
      </Field>
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'In Form',
  render: () => <form className="flex w-72 flex-col gap-4">
      <DatePicker name="date" defaultValue="2026-10-24" aria-label="Date" />
      <DateRangePicker startName="start" endName="end" defaultValue={{
      from: '2026-10-20',
      to: '2026-10-24'
    }} aria-label="Stay" />
      <button type="reset">Reset</button>
    </form>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'In Dialog',
  render: () => <InDialogDemo />
}`,...S.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: openLayout,
  render: () => <div className="h-96">
      <OpenOnMount>
        <DatePicker defaultValue="2026-10-24" today="2026-10-20" aria-label="Date" />
      </OpenOnMount>
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Open Range',
  parameters: openLayout,
  render: () => <div className="h-96">
      <OpenOnMount>
        <DateRangePicker defaultValue={{
        from: '2026-10-20',
        to: '2026-10-24'
      }} today="2026-10-20" aria-label="Stay" />
      </OpenOnMount>
    </div>
}`,...T.parameters?.docs?.source}}}})))()}D();export{S as InDialog,b as InField,x as InForm,w as Open,T as OpenRange,_ as Playground,v as Sizes,y as States,E as __namedExportsOrder,g as default};