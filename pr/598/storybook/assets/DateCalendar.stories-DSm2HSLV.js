import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-1tmscECc.js";import{n as r,t as i}from"./Field-DXlRLjxB.js";import{n as a,r as o,t as s}from"./DateCalendar-CXLFQrAu.js";function c(){let[e,t]=(0,l.useState)(``),[n,r]=(0,l.useState)({});return(0,u.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,u.jsx)(s,{"aria-label":`Single`,defaultMonth:`2026-09-01`,value:e,onValueChange:t}),(0,u.jsx)(`output`,{"data-testid":`value`,children:e}),(0,u.jsx)(a,{"aria-label":`Range`,defaultMonth:`2026-09-01`,value:n,onValueChange:r}),(0,u.jsx)(`output`,{"data-testid":`range`,children:JSON.stringify(n)})]})}var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{l=n(),r(),o(),u=t(),d=`2026-10-24`,f={title:`Components/lv1/DateCalendar`,component:s,subcomponents:{DateRangeCalendar:a},parameters:{layout:`centered`,docs:{description:{component:"Always-visible month grid for picking a date (`DateCalendar`) or a range\n(`DateRangeCalendar`). Values are ISO `YYYY-MM-DD` strings, so a time zone can\nnever shift a date by one day."}}},tags:[`autodocs`],argTypes:{value:{description:"The selected date as `YYYY-MM-DD` (controlled).",control:`text`,table:{type:{summary:`string`}}},defaultValue:{description:"The initially selected date as `YYYY-MM-DD` (uncontrolled).",control:`text`,table:{type:{summary:`string`}}},onValueChange:{description:"Fired with the selected date as `YYYY-MM-DD`.",table:{type:{summary:`(value: string) => void`}}},month:{description:`The displayed month (controlled), as any date in that month.`,control:`text`,table:{type:{summary:`string`}}},defaultMonth:{description:`The month displayed first (uncontrolled).`,control:`text`,table:{type:{summary:`string`}}},onMonthChange:{description:`Fired when the displayed month changes, with its first day.`,table:{type:{summary:`(month: string) => void`}}},min:{description:`The earliest selectable date.`,control:`text`,table:{type:{summary:`string`}}},max:{description:`The latest selectable date.`,control:`text`,table:{type:{summary:`string`}}},isDateDisabled:{description:`Marks individual dates unavailable.`,table:{type:{summary:`(date: string) => boolean`}}},locale:{description:"BCP 47 language tag passed to `Intl.DateTimeFormat`.",control:`text`,table:{type:{summary:`DateCalendarLocale`},defaultValue:{summary:`en-US`}}},weekStartsOn:{description:"The first column of the grid: `0` is Sunday, `1` is Monday.",control:`select`,options:[0,1,2,3,4,5,6],table:{type:{summary:`WeekDay`},defaultValue:{summary:`0`}}},today:{description:`The date marked as today. Defaults to the local date.`,control:`text`,table:{type:{summary:`string`}}},captionLayout:{description:`How the month heading is presented.`,control:`select`,options:[`label`,`dropdown`],table:{type:{summary:`"label" | "dropdown"`},defaultValue:{summary:`label`}}},showWeekNumber:{description:`Shows ISO-8601 week numbers in a leading column.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},labels:{description:`Overrides for the English default labels.`,table:{type:{summary:`DateCalendarLabels`}}},isError:{description:`Displays the error state.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{description:`Disables the whole calendar.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},readOnly:{description:`Keeps the calendar navigable but blocks selection.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},numberOfMonths:{description:`Number of months shown side by side.`,control:!1,table:{category:`DateRangeCalendar only`,type:{summary:`number`},defaultValue:{summary:`1`}}},minDays:{description:`Shortest allowed range in days, counting both ends.`,control:!1,table:{category:`DateRangeCalendar only`,type:{summary:`number`}}},maxDays:{description:`Longest allowed range in days, counting both ends.`,control:!1,table:{category:`DateRangeCalendar only`,type:{summary:`number`}}},allowDisabledInRange:{description:"Allows a range to span days marked by `isDateDisabled`.",control:!1,table:{category:`DateRangeCalendar only`,type:{summary:`boolean`},defaultValue:{summary:`false`}}}}},p={name:`Playground`,args:{today:d,defaultValue:`2026-10-20`}},m={name:`Single date`,render:()=>(0,u.jsx)(s,{today:d,defaultValue:`2026-10-20`})},h={name:`Date range`,render:()=>(0,u.jsx)(a,{today:d,defaultValue:{from:`2026-10-13`,to:`2026-10-22`}})},g={name:`min, max and disabled dates`,render:()=>(0,u.jsx)(s,{today:d,min:`2026-10-05`,max:`2026-10-28`,isDateDisabled:e=>[6,0].includes(new Date(e).getUTCDay())})},_={name:`Range: 2–7 days, no weekends inside`,render:()=>(0,u.jsx)(a,{today:d,defaultValue:{from:`2026-10-20`},minDays:2,maxDays:7,isDateDisabled:e=>[6,0].includes(new Date(e).getUTCDay())})},v={name:`Two months`,render:()=>(0,u.jsx)(a,{today:d,numberOfMonths:2,defaultValue:{from:`2026-10-26`,to:`2026-11-05`}})},y={name:`Week numbers`,render:()=>(0,u.jsx)(s,{today:d,showWeekNumber:!0,weekStartsOn:1})},b={name:`Month and year dropdowns`,render:()=>(0,u.jsx)(s,{today:d,captionLayout:`dropdown`})},x={name:`Right-to-left`,render:()=>(0,u.jsx)(`div`,{dir:`rtl`,children:(0,u.jsx)(a,{today:d,locale:`ar-EG`,weekStartsOn:6,defaultValue:{from:`2026-10-13`,to:`2026-10-22`},labels:{previousMonth:`الشهر السابق`,nextMonth:`الشهر التالي`}})})},S={name:`Japanese locale`,render:()=>(0,u.jsx)(s,{today:d,locale:`ja-JP`,defaultValue:`2026-10-20`,labels:{previousMonth:`前の月`,nextMonth:`次の月`}})},C={name:`States`,render:()=>(0,u.jsxs)(`div`,{className:`flex flex-wrap items-start gap-10`,children:[(0,u.jsx)(s,{today:d,defaultValue:`2026-10-20`,"aria-label":`Error`,isError:!0}),(0,u.jsx)(s,{today:d,defaultValue:`2026-10-20`,"aria-label":`Disabled`,disabled:!0}),(0,u.jsx)(s,{today:d,defaultValue:`2026-10-20`,"aria-label":`Read-only`,readOnly:!0})]})},w={name:`Inside Field`,render:()=>(0,u.jsx)(i,{label:`Check-in`,description:`Earliest is today.`,error:`Pick a date`,children:(0,u.jsx)(s,{today:d,min:d})})},T={name:`Returned value`,render:()=>(0,u.jsx)(c,{})},E=[`Playground`,`Single`,`Range`,`DisabledDates`,`RangeConstraints`,`TwoMonths`,`WeekNumbers`,`Dropdown`,`Rtl`,`LocaleJa`,`States`,`InField`,`ReturnedValue`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    today: TODAY,
    defaultValue: '2026-10-20'
  }
}`,...p.parameters?.docs?.source},description:{story:`Interactive single instance — always the first export (storybook-guideline.md).`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Single date',
  render: () => <DateCalendar today={TODAY} defaultValue="2026-10-20" />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Date range',
  render: () => <DateRangeCalendar today={TODAY} defaultValue={{
    from: '2026-10-13',
    to: '2026-10-22'
  }} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'min, max and disabled dates',
  render: () => <DateCalendar today={TODAY} min="2026-10-05" max="2026-10-28" isDateDisabled={date => [6, 0].includes(new Date(date).getUTCDay())} />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Range: 2–7 days, no weekends inside',
  render: () => <DateRangeCalendar today={TODAY} defaultValue={{
    from: '2026-10-20'
  }} minDays={2} maxDays={7} isDateDisabled={date => [6, 0].includes(new Date(date).getUTCDay())} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Two months',
  render: () => <DateRangeCalendar today={TODAY} numberOfMonths={2} defaultValue={{
    from: '2026-10-26',
    to: '2026-11-05'
  }} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Week numbers',
  render: () => <DateCalendar today={TODAY} showWeekNumber weekStartsOn={1} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Month and year dropdowns',
  render: () => <DateCalendar today={TODAY} captionLayout="dropdown" />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Right-to-left',
  render: () => <div dir="rtl">
      <DateRangeCalendar today={TODAY} locale="ar-EG" weekStartsOn={6} defaultValue={{
      from: '2026-10-13',
      to: '2026-10-22'
    }} labels={{
      previousMonth: 'الشهر السابق',
      nextMonth: 'الشهر التالي'
    }} />
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Japanese locale',
  render: () => <DateCalendar today={TODAY} locale="ja-JP" defaultValue="2026-10-20" labels={{
    previousMonth: '前の月',
    nextMonth: '次の月'
  }} />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'States',
  render: () => <div className="flex flex-wrap items-start gap-10">
      <DateCalendar today={TODAY} defaultValue="2026-10-20" aria-label="Error" isError />
      <DateCalendar today={TODAY} defaultValue="2026-10-20" aria-label="Disabled" disabled />
      <DateCalendar today={TODAY} defaultValue="2026-10-20" aria-label="Read-only" readOnly />
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Inside Field',
  render: () => <Field label="Check-in" description="Earliest is today." error="Pick a date">
      <DateCalendar today={TODAY} min={TODAY} />
    </Field>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Returned value',
  render: () => <ValueReadout />
}`,...T.parameters?.docs?.source},description:{story:"Prints what `onValueChange` returns, for the time zone interaction tests.",...T.parameters?.docs?.description}}}})))()}D();export{g as DisabledDates,b as Dropdown,w as InField,S as LocaleJa,p as Playground,h as Range,_ as RangeConstraints,T as ReturnedValue,x as Rtl,m as Single,C as States,v as TwoMonths,y as WeekNumbers,E as __namedExportsOrder,f as default};