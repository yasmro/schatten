import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-Ds5cqYfh.js";import{n as r,r as i,t as a}from"./DatePicker-vvGis8YH.js";import{n as o,t as s}from"./Button-CY5vEUa4.js";import{n as c,t as l}from"./Field-BhhQsN8H.js";import{n as u,t as d}from"./Dialog-C19EMyRa.js";function f(){let[e,t]=(0,m.useState)(!1);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{onClick:()=>t(!0),children:`Open dialog`}),(0,h.jsx)(d,{isOpen:e,onOpenChange:t,title:`Schedule`,actionButton:{label:`Save`,onClick:()=>t(!1)},children:(0,h.jsx)(l,{label:`Date`,children:(0,h.jsx)(a,{defaultValue:`2026-10-24`,today:`2026-10-20`})})})]})}function p({children:e}){let t=(0,m.useRef)(null);return(0,m.useEffect)(()=>{t.current?.querySelector(`[aria-haspopup="dialog"]`)?.click()},[]),(0,h.jsx)(`div`,{ref:t,className:`w-72`,children:e})}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{m=n(),o(),u(),c(),i(),h=t(),g={title:`Components/lv2/DatePicker`,component:a,tags:[`autodocs`],parameters:{layout:`centered`},argTypes:{granularity:{description:"What the value holds: a date (`YYYY-MM-DD`), or a local date and time (`YYYY-MM-DDTHH:mm`).",control:`inline-radio`,options:[`day`,`minute`],table:{type:{summary:`"day" | "minute"`},defaultValue:{summary:`day`}}},value:{description:'The selected value (controlled), in the format of `granularity`. `""` is none.',control:`text`,table:{type:{summary:`string`}}},defaultValue:{description:"The initial value (uncontrolled), in the format of `granularity`.",control:`text`,table:{type:{summary:`string`}}},onValueChange:{description:'Fired when the value changes. `""` while the inputs hold no valid value.',table:{type:{summary:`(value: string) => void`}}},name:{description:`Submits the selected value under this name.`,control:`text`,table:{type:{summary:`string`}}},size:{description:`Size of the control.`,control:`inline-radio`,options:[`sm`,`md`,`lg`],table:{type:{summary:`"sm" | "md" | "lg"`},defaultValue:{summary:`md`}}},min:{description:"The earliest selectable value, in the format of `value`.",control:`text`,table:{type:{summary:`string`}}},max:{description:"The latest selectable value, in the format of `value`.",control:`text`,table:{type:{summary:`string`}}},isDateDisabled:{description:`Marks individual dates unavailable.`,control:!1,table:{type:{summary:`(date: string) => boolean`}}},locale:{description:"BCP 47 language tag for the calendar. Typed dates stay `YYYY-MM-DD`.",control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`en-US`}}},weekStartsOn:{description:"The first column of the calendar: `0` is Sunday, `1` is Monday.",control:`select`,options:[0,1,2,3,4,5,6],table:{type:{summary:`0 | 1 | 2 | 3 | 4 | 5 | 6`},defaultValue:{summary:`0`}}},today:{description:`The date the calendar marks as today. Defaults to the local date.`,control:`text`,table:{type:{summary:`string`}}},placeholder:{description:`Text shown while the date input is empty.`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`YYYY-MM-DD`}}},labels:{description:`Overrides for the English default labels.`,control:!1,table:{type:{summary:`DatePickerLabels`}}},inputRef:{description:`Ref to the input, e.g. to focus it after a failed validation.`,control:!1,table:{type:{summary:`Ref<HTMLInputElement>`}}},isError:{description:`Displays the error state. A Field takes precedence.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{description:`Disables the inputs and the calendar button.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},readOnly:{description:`Shows the value without allowing edits.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},required:{description:`Native required validation on the inputs.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}}},_={args:{"aria-label":`Date`,defaultValue:`2026-10-24`},render:e=>(0,h.jsx)(`div`,{className:`w-72`,children:(0,h.jsx)(a,{...e})})},v={render:()=>(0,h.jsxs)(`div`,{className:`flex w-72 flex-col gap-4`,children:[(0,h.jsx)(a,{size:`sm`,defaultValue:`2026-10-24`,"aria-label":`Small`}),(0,h.jsx)(a,{size:`md`,defaultValue:`2026-10-24`,"aria-label":`Medium`}),(0,h.jsx)(a,{size:`lg`,defaultValue:`2026-10-24`,"aria-label":`Large`}),(0,h.jsx)(r,{size:`sm`,defaultValue:{from:`2026-10-20`,to:`2026-10-24`},"aria-label":`Small range`}),(0,h.jsx)(r,{size:`md`,defaultValue:{from:`2026-10-20`,to:`2026-10-24`},"aria-label":`Medium range`}),(0,h.jsx)(r,{size:`lg`,defaultValue:{from:`2026-10-20`,to:`2026-10-24`},"aria-label":`Large range`})]})},y={render:()=>(0,h.jsxs)(`div`,{className:`grid w-[40rem] grid-cols-2 gap-4`,children:[(0,h.jsx)(a,{"aria-label":`Empty`}),(0,h.jsx)(r,{"aria-label":`Empty range`}),(0,h.jsx)(a,{isError:!0,defaultValue:`2026-10-24`,"aria-label":`Error`}),(0,h.jsx)(r,{isError:!0,defaultValue:{from:`2026-10-20`,to:`2026-10-24`},"aria-label":`Error range`}),(0,h.jsx)(a,{readOnly:!0,defaultValue:`2026-10-24`,"aria-label":`Read-only`}),(0,h.jsx)(r,{readOnly:!0,defaultValue:{from:`2026-10-20`,to:`2026-10-24`},"aria-label":`Read-only range`}),(0,h.jsx)(a,{disabled:!0,defaultValue:`2026-10-24`,"aria-label":`Disabled`}),(0,h.jsx)(r,{disabled:!0,defaultValue:{from:`2026-10-20`,to:`2026-10-24`},"aria-label":`Disabled range`})]})},b={name:`In Field`,render:()=>(0,h.jsxs)(`div`,{className:`flex w-72 flex-col gap-4`,children:[(0,h.jsx)(l,{label:`Departure`,description:`Pick a weekday.`,required:!0,children:(0,h.jsx)(a,{defaultValue:`2026-10-24`})}),(0,h.jsx)(l,{label:`Stay`,error:`Choose both dates.`,children:(0,h.jsx)(r,{defaultValue:{from:`2026-10-20`}})})]})},x={name:`In Form`,render:()=>(0,h.jsxs)(`form`,{className:`flex w-72 flex-col gap-4`,children:[(0,h.jsx)(a,{name:`date`,defaultValue:`2026-10-24`,"aria-label":`Date`}),(0,h.jsx)(r,{startName:`start`,endName:`end`,defaultValue:{from:`2026-10-20`,to:`2026-10-24`},"aria-label":`Stay`}),(0,h.jsx)(`button`,{type:`reset`,children:`Reset`})]})},S={from:`2026-10-24T09:00`,to:`2026-10-26T18:00`},C={name:`With Time`,render:()=>(0,h.jsxs)(`div`,{className:`flex w-72 flex-col gap-4`,children:[(0,h.jsx)(a,{granularity:`minute`,size:`sm`,defaultValue:`2026-10-24T13:30`,"aria-label":`Small`}),(0,h.jsx)(a,{granularity:`minute`,size:`md`,defaultValue:`2026-10-24T13:30`,"aria-label":`Medium`}),(0,h.jsx)(a,{granularity:`minute`,size:`lg`,defaultValue:`2026-10-24T13:30`,"aria-label":`Large`}),(0,h.jsx)(r,{granularity:`minute`,size:`sm`,defaultValue:S,"aria-label":`Small range`}),(0,h.jsx)(r,{granularity:`minute`,size:`md`,defaultValue:S,"aria-label":`Medium range`}),(0,h.jsx)(r,{granularity:`minute`,size:`lg`,defaultValue:S,"aria-label":`Large range`})]})},w={name:`With Time States`,render:()=>(0,h.jsxs)(`div`,{className:`grid w-[40rem] grid-cols-2 items-start gap-4`,children:[(0,h.jsx)(a,{granularity:`minute`,"aria-label":`Empty`}),(0,h.jsx)(r,{granularity:`minute`,"aria-label":`Empty range`}),(0,h.jsx)(a,{granularity:`minute`,isError:!0,defaultValue:`2026-10-24T13:30`,"aria-label":`Error`}),(0,h.jsx)(r,{granularity:`minute`,isError:!0,defaultValue:S,"aria-label":`Error range`}),(0,h.jsx)(a,{granularity:`minute`,readOnly:!0,defaultValue:`2026-10-24T13:30`,"aria-label":`Read-only`}),(0,h.jsx)(r,{granularity:`minute`,readOnly:!0,defaultValue:S,"aria-label":`Read-only range`}),(0,h.jsx)(a,{granularity:`minute`,disabled:!0,defaultValue:`2026-10-24T13:30`,"aria-label":`Disabled`}),(0,h.jsx)(r,{granularity:`minute`,disabled:!0,defaultValue:S,"aria-label":`Disabled range`}),(0,h.jsx)(l,{label:`Departure`,description:`Pick a weekday.`,required:!0,children:(0,h.jsx)(a,{granularity:`minute`,defaultValue:`2026-10-24T13:30`})}),(0,h.jsx)(l,{label:`Stay`,error:`Choose both times.`,required:!0,children:(0,h.jsx)(r,{granularity:`minute`,defaultValue:{from:`2026-10-24T09:00`}})})]})},T={name:`With Time In Form`,render:()=>(0,h.jsxs)(`form`,{className:`flex w-72 flex-col gap-4`,children:[(0,h.jsx)(a,{granularity:`minute`,name:`date`,defaultValue:`2026-10-24T13:30`,"aria-label":`Departure`}),(0,h.jsx)(r,{granularity:`minute`,startName:`start`,endName:`end`,defaultValue:{from:`2026-10-24T09:00`,to:`2026-10-24T18:00`},"aria-label":`Stay`}),(0,h.jsx)(`button`,{type:`reset`,children:`Reset`}),(0,h.jsx)(`button`,{type:`submit`,children:`Submit`})]})},E={name:`In Dialog`,render:()=>(0,h.jsx)(f,{})},D={layout:`padded`},O={parameters:D,render:()=>(0,h.jsx)(`div`,{className:`h-96`,children:(0,h.jsx)(p,{children:(0,h.jsx)(a,{defaultValue:`2026-10-24`,today:`2026-10-20`,"aria-label":`Date`})})})},k={name:`Open Range`,parameters:D,render:()=>(0,h.jsx)(`div`,{className:`h-96`,children:(0,h.jsx)(p,{children:(0,h.jsx)(r,{defaultValue:{from:`2026-10-20`,to:`2026-10-24`},today:`2026-10-20`,"aria-label":`Stay`})})})},A={name:`Open With Time`,parameters:D,render:()=>(0,h.jsx)(`div`,{className:`h-96`,children:(0,h.jsx)(p,{children:(0,h.jsx)(a,{granularity:`minute`,defaultValue:`2026-10-24T13:30`,today:`2026-10-20`,"aria-label":`Departure`})})})},j=[`Playground`,`Sizes`,`States`,`InField`,`InForm`,`WithTime`,`WithTimeStates`,`WithTimeInForm`,`InDialog`,`Open`,`OpenRange`,`OpenWithTime`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'With Time',
  render: () => <div className="flex w-72 flex-col gap-4">
      <DatePicker granularity="minute" size="sm" defaultValue="2026-10-24T13:30" aria-label="Small" />
      <DatePicker granularity="minute" size="md" defaultValue="2026-10-24T13:30" aria-label="Medium" />
      <DatePicker granularity="minute" size="lg" defaultValue="2026-10-24T13:30" aria-label="Large" />
      <DateRangePicker granularity="minute" size="sm" defaultValue={timedRange} aria-label="Small range" />
      <DateRangePicker granularity="minute" size="md" defaultValue={timedRange} aria-label="Medium range" />
      <DateRangePicker granularity="minute" size="lg" defaultValue={timedRange} aria-label="Large range" />
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'With Time States',
  render: () => <div className="grid w-[40rem] grid-cols-2 items-start gap-4">
      <DatePicker granularity="minute" aria-label="Empty" />
      <DateRangePicker granularity="minute" aria-label="Empty range" />
      <DatePicker granularity="minute" isError defaultValue="2026-10-24T13:30" aria-label="Error" />
      <DateRangePicker granularity="minute" isError defaultValue={timedRange} aria-label="Error range" />
      <DatePicker granularity="minute" readOnly defaultValue="2026-10-24T13:30" aria-label="Read-only" />
      <DateRangePicker granularity="minute" readOnly defaultValue={timedRange} aria-label="Read-only range" />
      <DatePicker granularity="minute" disabled defaultValue="2026-10-24T13:30" aria-label="Disabled" />
      <DateRangePicker granularity="minute" disabled defaultValue={timedRange} aria-label="Disabled range" />
      <Field label="Departure" description="Pick a weekday." required>
        <DatePicker granularity="minute" defaultValue="2026-10-24T13:30" />
      </Field>
      <Field label="Stay" error="Choose both times." required>
        <DateRangePicker granularity="minute" defaultValue={{
        from: '2026-10-24T09:00'
      }} />
      </Field>
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'With Time In Form',
  render: () => <form className="flex w-72 flex-col gap-4">
      <DatePicker granularity="minute" name="date" defaultValue="2026-10-24T13:30" aria-label="Departure" />
      <DateRangePicker granularity="minute" startName="start" endName="end" defaultValue={{
      from: '2026-10-24T09:00',
      to: '2026-10-24T18:00'
    }} aria-label="Stay" />
      <button type="reset">Reset</button>
      <button type="submit">Submit</button>
    </form>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'In Dialog',
  render: () => <InDialogDemo />
}`,...E.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: openLayout,
  render: () => <div className="h-96">
      <OpenOnMount>
        <DatePicker defaultValue="2026-10-24" today="2026-10-20" aria-label="Date" />
      </OpenOnMount>
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Open With Time',
  parameters: openLayout,
  render: () => <div className="h-96">
      <OpenOnMount>
        <DatePicker granularity="minute" defaultValue="2026-10-24T13:30" today="2026-10-20" aria-label="Departure" />
      </OpenOnMount>
    </div>
}`,...A.parameters?.docs?.source}}}})))()}M();export{E as InDialog,b as InField,x as InForm,O as Open,k as OpenRange,A as OpenWithTime,_ as Playground,v as Sizes,y as States,C as WithTime,T as WithTimeInForm,w as WithTimeStates,j as __namedExportsOrder,g as default};