import{i as e}from"./preload-helper-BwGARNBo.js";import{t}from"./iframe-DRAyPivV.js";import{n,t as r}from"./Checkbox-VvgXkRw3.js";import{n as i,t as a}from"./Input-Ct3pN9lU.js";import{n as o,t as s}from"./Field-cLvcLGun.js";import{a as c,r as l}from"./Tooltip-vicQwWJs.js";import{n as u,r as d,t as f}from"./Radio-R_h8p_NL.js";import{c as p,i as m,l as h,n as g,s as _,t as v}from"./Select-C57G7NyS.js";import{n as y,t as b}from"./Switch-CraQ304K.js";import{n as x,t as S}from"./Textarea-wLphSYQY.js";var C,w,T,E,D,O,k,A,j,M,N,P,F,I,L;e((()=>{n(),i(),d(),h(),y(),x(),c(),o(),C=t(),w={title:`Components/lv1/Field`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],decorators:[e=>(0,C.jsx)(l,{delayDuration:100,children:(0,C.jsx)(e,{})})],argTypes:{label:{description:`Label text for the field.`,control:`text`,table:{type:{summary:`ReactNode`}}},description:{description:`Description text displayed above the input.`,control:`text`,table:{type:{summary:`ReactNode`}}},tooltip:{description:`Tooltip content displayed on hover of info icon next to label.`,control:`text`,table:{type:{summary:`ReactNode`}}},error:{description:`Error message to display.`,control:`text`,table:{type:{summary:`string`}}},isError:{description:`Explicitly set error state. If not provided, derived from error prop presence.`,control:`boolean`,table:{type:{summary:`boolean`}}},required:{description:`Show required indicator (*).`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{description:`Disable the field. Propagates to child components via context.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},flexGrow:{description:`Flex grow factor for layout within FieldSet.`,control:`select`,options:[void 0,0,1],table:{type:{summary:`0 | 1`}}},flexShrink:{description:`Flex shrink factor for layout within FieldSet.`,control:`select`,options:[void 0,0,1],table:{type:{summary:`0 | 1`}}},flexBasis:{description:`Flex basis for layout within FieldSet (CSS value).`,control:`text`,table:{type:{summary:`string`}}}}},T={name:`Playground`,args:{label:`Email`,description:`We'll never share your email.`},render:e=>(0,C.jsx)(s,{...e,children:(0,C.jsx)(a,{placeholder:`you@example.com`})})},E={name:`With Input`,render:()=>(0,C.jsxs)(`div`,{className:`flex flex-col gap-6 w-80`,children:[(0,C.jsx)(s,{label:`Username`,description:`Choose a unique username.`,children:(0,C.jsx)(a,{placeholder:`johndoe`})}),(0,C.jsx)(s,{label:`Email`,required:!0,children:(0,C.jsx)(a,{type:`email`,placeholder:`you@example.com`})})]})},D={name:`With Textarea`,render:()=>(0,C.jsx)(`div`,{className:`w-80`,children:(0,C.jsx)(s,{label:`Bio`,description:`Tell us about yourself.`,children:(0,C.jsx)(S,{placeholder:`Write something...`})})})},O={name:`With Select`,render:()=>(0,C.jsx)(`div`,{className:`w-80`,children:(0,C.jsx)(s,{label:`Country`,description:`Select your country.`,children:(0,C.jsxs)(v,{children:[(0,C.jsx)(_,{children:(0,C.jsx)(p,{placeholder:`Select a country`})}),(0,C.jsxs)(g,{children:[(0,C.jsx)(m,{value:`us`,children:`United States`}),(0,C.jsx)(m,{value:`uk`,children:`United Kingdom`}),(0,C.jsx)(m,{value:`jp`,children:`Japan`})]})]})})})},k={name:`With Checkbox`,render:()=>(0,C.jsx)(`div`,{className:`w-80`,children:(0,C.jsx)(s,{label:`Interests`,description:`Select your interests.`,children:(0,C.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,C.jsx)(r,{label:`Technology`}),(0,C.jsx)(r,{label:`Design`}),(0,C.jsx)(r,{label:`Business`})]})})})},A={name:`With Switch`,render:()=>(0,C.jsx)(`div`,{className:`w-80`,children:(0,C.jsx)(s,{label:`Notifications`,description:`Enable push notifications.`,children:(0,C.jsx)(b,{})})})},j={name:`With RadioGroup`,render:()=>(0,C.jsx)(`div`,{className:`w-80`,children:(0,C.jsx)(s,{label:`Plan`,description:`Choose your subscription plan.`,children:(0,C.jsxs)(u,{defaultValue:`free`,children:[(0,C.jsx)(f,{value:`free`,label:`Free`}),(0,C.jsx)(f,{value:`pro`,label:`Pro`}),(0,C.jsx)(f,{value:`enterprise`,label:`Enterprise`})]})})})},M={name:`With Tooltip`,render:()=>(0,C.jsxs)(`div`,{className:`flex flex-col gap-6 w-80`,children:[(0,C.jsx)(s,{label:`Email`,tooltip:`Used for account recovery and important notifications.`,children:(0,C.jsx)(a,{type:`email`,placeholder:`you@example.com`})}),(0,C.jsx)(s,{label:`Password`,description:`Must be at least 8 characters.`,tooltip:`Use a mix of letters, numbers, and symbols for better security.`,required:!0,children:(0,C.jsx)(a,{type:`password`,placeholder:`Enter password`})})]})},N={name:`Error`,render:()=>(0,C.jsxs)(`div`,{className:`flex flex-col gap-6 w-80`,children:[(0,C.jsx)(s,{label:`Email`,error:`Please enter a valid email address.`,children:(0,C.jsx)(a,{type:`email`,defaultValue:`invalid-email`})}),(0,C.jsx)(s,{label:`Password`,error:`Password must be at least 8 characters.`,required:!0,children:(0,C.jsx)(a,{type:`password`,defaultValue:`123`})})]})},P={name:`Disabled`,render:()=>(0,C.jsxs)(`div`,{className:`flex flex-col gap-6 w-80`,children:[(0,C.jsx)(s,{label:`Username`,description:`This field is disabled.`,disabled:!0,children:(0,C.jsx)(a,{placeholder:`johndoe`})}),(0,C.jsx)(s,{label:`Notifications`,disabled:!0,children:(0,C.jsx)(b,{})})]})},F={name:`Required`,render:()=>(0,C.jsxs)(`div`,{className:`flex flex-col gap-6 w-80`,children:[(0,C.jsx)(s,{label:`Full Name`,required:!0,children:(0,C.jsx)(a,{placeholder:`John Doe`})}),(0,C.jsx)(s,{label:`Email`,required:!0,description:`Required field.`,children:(0,C.jsx)(a,{type:`email`,placeholder:`you@example.com`})})]})},I={name:`Label Usage Patterns`,render:()=>(0,C.jsxs)(`div`,{className:`flex flex-col gap-8 w-96`,children:[(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`h3`,{className:`text-sm font-semibold text-foreground-muted mb-3`,children:`Checkbox Group: Field.label for group, Checkbox.label for options`}),(0,C.jsx)(s,{label:`Notification settings`,description:`Select all that apply.`,children:(0,C.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,C.jsx)(r,{label:`Email notifications`}),(0,C.jsx)(r,{label:`Push notifications`}),(0,C.jsx)(r,{label:`SMS notifications`})]})})]}),(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`h3`,{className:`text-sm font-semibold text-foreground-muted mb-3`,children:`RadioGroup: Field.label for group, Radio.label for options`}),(0,C.jsx)(s,{label:`Subscription plan`,description:`Choose one plan.`,children:(0,C.jsxs)(u,{defaultValue:`free`,children:[(0,C.jsx)(f,{value:`free`,label:`Free - Basic features`}),(0,C.jsx)(f,{value:`pro`,label:`Pro - Advanced features`}),(0,C.jsx)(f,{value:`enterprise`,label:`Enterprise - Custom solutions`})]})})]}),(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`h3`,{className:`text-sm font-semibold text-foreground-muted mb-3`,children:`Switch: Field.label only (single toggle)`}),(0,C.jsx)(s,{label:`Enable dark mode`,description:`Apply dark theme to the interface.`,children:(0,C.jsx)(b,{})})]}),(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`h3`,{className:`text-sm font-semibold text-foreground-muted mb-3`,children:`Standalone (without Field): Use component label`}),(0,C.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,C.jsx)(r,{label:`Remember me`}),(0,C.jsx)(b,{label:`Dark mode`})]})]})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    label: 'Email',
    description: "We'll never share your email."
  },
  render: args => <Field {...args}>
      <Input placeholder="you@example.com" />
    </Field>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'With Input',
  render: () => <div className="flex flex-col gap-6 w-80">
      <Field label="Username" description="Choose a unique username.">
        <Input placeholder="johndoe" />
      </Field>
      <Field label="Email" required>
        <Input type="email" placeholder="you@example.com" />
      </Field>
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'With Textarea',
  render: () => <div className="w-80">
      <Field label="Bio" description="Tell us about yourself.">
        <Textarea placeholder="Write something..." />
      </Field>
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'With Select',
  render: () => <div className="w-80">
      <Field label="Country" description="Select your country.">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="jp">Japan</SelectItem>
          </SelectContent>
        </Select>
      </Field>
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'With Checkbox',
  render: () => <div className="w-80">
      <Field label="Interests" description="Select your interests.">
        <div className="flex flex-col gap-2">
          <Checkbox label="Technology" />
          <Checkbox label="Design" />
          <Checkbox label="Business" />
        </div>
      </Field>
    </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'With Switch',
  render: () => <div className="w-80">
      <Field label="Notifications" description="Enable push notifications.">
        <Switch />
      </Field>
    </div>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'With RadioGroup',
  render: () => <div className="w-80">
      <Field label="Plan" description="Choose your subscription plan.">
        <RadioGroup defaultValue="free">
          <Radio value="free" label="Free" />
          <Radio value="pro" label="Pro" />
          <Radio value="enterprise" label="Enterprise" />
        </RadioGroup>
      </Field>
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'With Tooltip',
  render: () => <div className="flex flex-col gap-6 w-80">
      <Field label="Email" tooltip="Used for account recovery and important notifications.">
        <Input type="email" placeholder="you@example.com" />
      </Field>
      <Field label="Password" description="Must be at least 8 characters." tooltip="Use a mix of letters, numbers, and symbols for better security." required>
        <Input type="password" placeholder="Enter password" />
      </Field>
    </div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-6 w-80">
      <Field label="Email" error="Please enter a valid email address.">
        <Input type="email" defaultValue="invalid-email" />
      </Field>
      <Field label="Password" error="Password must be at least 8 characters." required>
        <Input type="password" defaultValue="123" />
      </Field>
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-6 w-80">
      <Field label="Username" description="This field is disabled." disabled>
        <Input placeholder="johndoe" />
      </Field>
      <Field label="Notifications" disabled>
        <Switch />
      </Field>
    </div>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Required',
  render: () => <div className="flex flex-col gap-6 w-80">
      <Field label="Full Name" required>
        <Input placeholder="John Doe" />
      </Field>
      <Field label="Email" required description="Required field.">
        <Input type="email" placeholder="you@example.com" />
      </Field>
    </div>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Label Usage Patterns',
  render: () => <div className="flex flex-col gap-8 w-96">
      <div>
        <h3 className="text-sm font-semibold text-foreground-muted mb-3">
          Checkbox Group: Field.label for group, Checkbox.label for options
        </h3>
        <Field label="Notification settings" description="Select all that apply.">
          <div className="flex flex-col gap-2">
            <Checkbox label="Email notifications" />
            <Checkbox label="Push notifications" />
            <Checkbox label="SMS notifications" />
          </div>
        </Field>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-foreground-muted mb-3">
          RadioGroup: Field.label for group, Radio.label for options
        </h3>
        <Field label="Subscription plan" description="Choose one plan.">
          <RadioGroup defaultValue="free">
            <Radio value="free" label="Free - Basic features" />
            <Radio value="pro" label="Pro - Advanced features" />
            <Radio value="enterprise" label="Enterprise - Custom solutions" />
          </RadioGroup>
        </Field>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-foreground-muted mb-3">
          Switch: Field.label only (single toggle)
        </h3>
        <Field label="Enable dark mode" description="Apply dark theme to the interface.">
          <Switch />
        </Field>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-foreground-muted mb-3">
          Standalone (without Field): Use component label
        </h3>
        <div className="flex flex-col gap-2">
          <Checkbox label="Remember me" />
          <Switch label="Dark mode" />
        </div>
      </div>
    </div>
}`,...I.parameters?.docs?.source}}},L=[`Playground`,`WithInput`,`WithTextarea`,`WithSelect`,`WithCheckbox`,`WithSwitch`,`WithRadioGroup`,`WithTooltip`,`ErrorState`,`Disabled`,`Required`,`LabelUsagePatterns`]}))();export{P as Disabled,N as ErrorState,I as LabelUsagePatterns,T as Playground,F as Required,k as WithCheckbox,E as WithInput,j as WithRadioGroup,O as WithSelect,A as WithSwitch,D as WithTextarea,M as WithTooltip,L as __namedExportsOrder,w as default};