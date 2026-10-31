import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-Rq-DL1nV.js";import{n as r,r as i,t as a}from"./DatePicker-WDAtnBOY.js";import{n as o,t as s}from"./Field-jXrrKx4k.js";import{n as c,t as l}from"./Dialog-CQF2Fwpu.js";function u(){let[e,t]=(0,f.useState)(!0);return(0,p.jsx)(l,{isOpen:e,onOpenChange:t,title:`Schedule`,actionButton:{label:`Save`,onClick:()=>t(!1)},children:(0,p.jsx)(s,{label:`Date`,children:(0,p.jsx)(a,{defaultValue:`2026-10-24`,today:`2026-10-20`})})})}function d({children:e}){let t=(0,f.useRef)(null);return(0,f.useEffect)(()=>{t.current?.querySelector(`[aria-haspopup="dialog"]`)?.click()},[]),(0,p.jsx)(`div`,{ref:t,className:`w-72`,children:e})}var f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{f=n(),c(),o(),i(),p=t(),m={title:`Components/lv2/DatePicker`,component:a,tags:[`autodocs`],parameters:{layout:`centered`},argTypes:{value:{description:'The selected date as `YYYY-MM-DD` (controlled). `""` is no selection.',control:`text`,table:{type:{summary:`string`}}},defaultValue:{description:"The initially selected date as `YYYY-MM-DD` (uncontrolled).",control:`text`,table:{type:{summary:`string`}}},onValueChange:{description:'Fired when the date changes. `""` while the input holds no valid date.',table:{type:{summary:`(value: string) => void`}}},name:{description:`Submits the selected date under this name.`,control:`text`,table:{type:{summary:`string`}}},size:{description:`Size of the control.`,control:`inline-radio`,options:[`sm`,`md`,`lg`],table:{type:{summary:`"sm" | "md" | "lg"`},defaultValue:{summary:`md`}}},min:{description:`The earliest selectable date. Applies to the calendar and to typed dates.`,control:`text`,table:{type:{summary:`string`}}},max:{description:`The latest selectable date. Applies to the calendar and to typed dates.`,control:`text`,table:{type:{summary:`string`}}},isDateDisabled:{description:`Marks individual dates unavailable.`,control:!1,table:{type:{summary:`(date: string) => boolean`}}},locale:{description:"BCP 47 language tag for the calendar. Typed dates stay `YYYY-MM-DD`.",control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`en-US`}}},weekStartsOn:{description:"The first column of the calendar: `0` is Sunday, `1` is Monday.",control:`select`,options:[0,1,2,3,4,5,6],table:{type:{summary:`0 | 1 | 2 | 3 | 4 | 5 | 6`},defaultValue:{summary:`0`}}},today:{description:`The date the calendar marks as today. Defaults to the local date.`,control:`text`,table:{type:{summary:`string`}}},placeholder:{description:`Text shown while the input is empty.`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`YYYY-MM-DD`}}},labels:{description:`Overrides for the English default labels.`,control:!1,table:{type:{summary:`DatePickerLabels`}}},inputRef:{description:`Ref to the input, e.g. to focus it after a failed validation.`,control:!1,table:{type:{summary:`Ref<HTMLInputElement>`}}},isError:{description:`Displays the error state. A Field takes precedence.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{description:`Disables the input and the calendar button.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},readOnly:{description:`Shows the value without allowing edits.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},required:{description:`Native required validation on the input.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}}},h={args:{"aria-label":`Date`,defaultValue:`2026-10-24`},render:e=>(0,p.jsx)(`div`,{className:`w-72`,children:(0,p.jsx)(a,{...e})})},g={render:()=>(0,p.jsxs)(`div`,{className:`flex w-72 flex-col gap-4`,children:[(0,p.jsx)(a,{size:`sm`,defaultValue:`2026-10-24`,"aria-label":`Small`}),(0,p.jsx)(a,{size:`md`,defaultValue:`2026-10-24`,"aria-label":`Medium`}),(0,p.jsx)(a,{size:`lg`,defaultValue:`2026-10-24`,"aria-label":`Large`}),(0,p.jsx)(r,{size:`sm`,defaultValue:{from:`2026-10-20`,to:`2026-10-24`},"aria-label":`Small range`}),(0,p.jsx)(r,{size:`md`,defaultValue:{from:`2026-10-20`,to:`2026-10-24`},"aria-label":`Medium range`}),(0,p.jsx)(r,{size:`lg`,defaultValue:{from:`2026-10-20`,to:`2026-10-24`},"aria-label":`Large range`})]})},_={render:()=>(0,p.jsxs)(`div`,{className:`grid w-[40rem] grid-cols-2 gap-4`,children:[(0,p.jsx)(a,{"aria-label":`Empty`}),(0,p.jsx)(r,{"aria-label":`Empty range`}),(0,p.jsx)(a,{isError:!0,defaultValue:`2026-10-24`,"aria-label":`Error`}),(0,p.jsx)(r,{isError:!0,defaultValue:{from:`2026-10-20`,to:`2026-10-24`},"aria-label":`Error range`}),(0,p.jsx)(a,{readOnly:!0,defaultValue:`2026-10-24`,"aria-label":`Read-only`}),(0,p.jsx)(r,{readOnly:!0,defaultValue:{from:`2026-10-20`,to:`2026-10-24`},"aria-label":`Read-only range`}),(0,p.jsx)(a,{disabled:!0,defaultValue:`2026-10-24`,"aria-label":`Disabled`}),(0,p.jsx)(r,{disabled:!0,defaultValue:{from:`2026-10-20`,to:`2026-10-24`},"aria-label":`Disabled range`})]})},v={name:`In Field`,render:()=>(0,p.jsxs)(`div`,{className:`flex w-72 flex-col gap-4`,children:[(0,p.jsx)(s,{label:`Departure`,description:`Pick a weekday.`,required:!0,children:(0,p.jsx)(a,{defaultValue:`2026-10-24`})}),(0,p.jsx)(s,{label:`Stay`,error:`Choose both dates.`,children:(0,p.jsx)(r,{defaultValue:{from:`2026-10-20`}})})]})},y={name:`In Dialog`,render:()=>(0,p.jsx)(u,{})},b={layout:`padded`},x={parameters:b,render:()=>(0,p.jsx)(`div`,{className:`h-96`,children:(0,p.jsx)(d,{children:(0,p.jsx)(a,{defaultValue:`2026-10-24`,today:`2026-10-20`,"aria-label":`Date`})})})},S={name:`Open Range`,parameters:b,render:()=>(0,p.jsx)(`div`,{className:`h-96`,children:(0,p.jsx)(d,{children:(0,p.jsx)(r,{defaultValue:{from:`2026-10-20`,to:`2026-10-24`},today:`2026-10-20`,"aria-label":`Stay`})})})},C=[`Playground`,`Sizes`,`States`,`InField`,`InDialog`,`Open`,`OpenRange`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Date',
    defaultValue: '2026-10-24'
  },
  render: args => <div className="w-72">
      <DatePicker {...args} />
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'In Dialog',
  render: () => <InDialogDemo />
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: openLayout,
  render: () => <div className="h-96">
      <OpenOnMount>
        <DatePicker defaultValue="2026-10-24" today="2026-10-20" aria-label="Date" />
      </OpenOnMount>
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}}})))()}w();export{y as InDialog,v as InField,x as Open,S as OpenRange,h as Playground,g as Sizes,_ as States,C as __namedExportsOrder,m as default};