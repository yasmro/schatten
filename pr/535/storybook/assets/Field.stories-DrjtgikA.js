import{j as e}from"./iframe-mgqTaNXD.js";import{C as l}from"./Checkbox-CSUADqqk.js";import{I as a}from"./Input-nr3_ZVAH.js";import{R as y,a as o}from"./Radio-nKZC3a8Q.js";import{S as g,a as S,b as F,c as w,d as j}from"./Select-Bt8juNrP.js";import{S as f}from"./Switch-zlHc8iRq.js";import{T as N}from"./Textarea-C73HXnOB.js";import{T as R}from"./Tooltip-BQnxAvlW.js";import{F as r}from"./Field-DScS73DH.js";import"./preload-helper-svYq55ts.js";import"./index-BXnlFawg.js";import"./index-CQNSIme7.js";import"./index-D13f_To6.js";import"./index-BbfShtyM.js";import"./index-Cfsfi_W8.js";import"./index-B2koz8Pg.js";import"./index-BudBZmlv.js";import"./index-DJyDoJpb.js";import"./field-DxwjqQ7N.js";import"./utils-HnQPFlDo.js";import"./index-BekUCMdb.js";/* empty css                 *//* empty css              */import"./index-CoH8AfeR.js";import"./index-N1mxlMGV.js";import"./index-CLC3raYj.js";import"./index-j-kK1dL4.js";/* empty css              */import"./index-eD1GqKwZ.js";import"./Combination-BJheHtrA.js";import"./index-CjbZulxo.js";import"./index-YBtSw7Qa.js";/* empty css               */import"./chevron-up-Cl55ym8p.js";import"./createLucideIcon-BaBKfCoU.js";import"./check-CYh7XIMr.js";/* empty css               *//* empty css                 *//* empty css                *//* empty css              */import"./info-DhvuueVf.js";const he={title:"Components/lv1/Field",component:r,parameters:{layout:"centered"},tags:["autodocs"],decorators:[v=>e.jsx(R,{delayDuration:100,children:e.jsx(v,{})})],argTypes:{label:{description:"Label text for the field.",control:"text",table:{type:{summary:"ReactNode"}}},description:{description:"Description text displayed above the input.",control:"text",table:{type:{summary:"ReactNode"}}},tooltip:{description:"Tooltip content displayed on hover of info icon next to label.",control:"text",table:{type:{summary:"ReactNode"}}},error:{description:"Error message to display.",control:"text",table:{type:{summary:"string"}}},isError:{description:"Explicitly set error state. If not provided, derived from error prop presence.",control:"boolean",table:{type:{summary:"boolean"}}},required:{description:"Show required indicator (*).",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Disable the field. Propagates to child components via context.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},flexGrow:{description:"Flex grow factor for layout within FieldSet.",control:"select",options:[void 0,0,1],table:{type:{summary:"0 | 1"}}},flexShrink:{description:"Flex shrink factor for layout within FieldSet.",control:"select",options:[void 0,0,1],table:{type:{summary:"0 | 1"}}},flexBasis:{description:"Flex basis for layout within FieldSet (CSS value).",control:"text",table:{type:{summary:"string"}}}}},t={name:"Playground",args:{label:"Email",description:"We'll never share your email."},render:v=>e.jsx(r,{...v,children:e.jsx(a,{placeholder:"you@example.com"})})},i={name:"With Input",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-80",children:[e.jsx(r,{label:"Username",description:"Choose a unique username.",children:e.jsx(a,{placeholder:"johndoe"})}),e.jsx(r,{label:"Email",required:!0,children:e.jsx(a,{type:"email",placeholder:"you@example.com"})})]})},s={name:"With Textarea",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Bio",description:"Tell us about yourself.",children:e.jsx(N,{placeholder:"Write something..."})})})},d={name:"With Select",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Country",description:"Select your country.",children:e.jsxs(g,{children:[e.jsx(S,{children:e.jsx(F,{placeholder:"Select a country"})}),e.jsxs(w,{children:[e.jsx(j,{value:"us",children:"United States"}),e.jsx(j,{value:"uk",children:"United Kingdom"}),e.jsx(j,{value:"jp",children:"Japan"})]})]})})})},c={name:"With Checkbox",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Interests",description:"Select your interests.",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(l,{label:"Technology"}),e.jsx(l,{label:"Design"}),e.jsx(l,{label:"Business"})]})})})},n={name:"With Switch",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Notifications",description:"Enable push notifications.",children:e.jsx(f,{})})})},m={name:"With RadioGroup",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Plan",description:"Choose your subscription plan.",children:e.jsxs(y,{defaultValue:"free",children:[e.jsx(o,{value:"free",label:"Free"}),e.jsx(o,{value:"pro",label:"Pro"}),e.jsx(o,{value:"enterprise",label:"Enterprise"})]})})})},p={name:"With Tooltip",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-80",children:[e.jsx(r,{label:"Email",tooltip:"Used for account recovery and important notifications.",children:e.jsx(a,{type:"email",placeholder:"you@example.com"})}),e.jsx(r,{label:"Password",description:"Must be at least 8 characters.",tooltip:"Use a mix of letters, numbers, and symbols for better security.",required:!0,children:e.jsx(a,{type:"password",placeholder:"Enter password"})})]})},u={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-80",children:[e.jsx(r,{label:"Email",error:"Please enter a valid email address.",children:e.jsx(a,{type:"email",defaultValue:"invalid-email"})}),e.jsx(r,{label:"Password",error:"Password must be at least 8 characters.",required:!0,children:e.jsx(a,{type:"password",defaultValue:"123"})})]})},h={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-80",children:[e.jsx(r,{label:"Username",description:"This field is disabled.",disabled:!0,children:e.jsx(a,{placeholder:"johndoe"})}),e.jsx(r,{label:"Notifications",disabled:!0,children:e.jsx(f,{})})]})},x={name:"Required",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-80",children:[e.jsx(r,{label:"Full Name",required:!0,children:e.jsx(a,{placeholder:"John Doe"})}),e.jsx(r,{label:"Email",required:!0,description:"Required field.",children:e.jsx(a,{type:"email",placeholder:"you@example.com"})})]})},b={name:"Label Usage Patterns",render:()=>e.jsxs("div",{className:"flex flex-col gap-8 w-96",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground-muted mb-3",children:"Checkbox Group: Field.label for group, Checkbox.label for options"}),e.jsx(r,{label:"Notification settings",description:"Select all that apply.",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(l,{label:"Email notifications"}),e.jsx(l,{label:"Push notifications"}),e.jsx(l,{label:"SMS notifications"})]})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground-muted mb-3",children:"RadioGroup: Field.label for group, Radio.label for options"}),e.jsx(r,{label:"Subscription plan",description:"Choose one plan.",children:e.jsxs(y,{defaultValue:"free",children:[e.jsx(o,{value:"free",label:"Free - Basic features"}),e.jsx(o,{value:"pro",label:"Pro - Advanced features"}),e.jsx(o,{value:"enterprise",label:"Enterprise - Custom solutions"})]})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground-muted mb-3",children:"Switch: Field.label only (single toggle)"}),e.jsx(r,{label:"Enable dark mode",description:"Apply dark theme to the interface.",children:e.jsx(f,{})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground-muted mb-3",children:"Standalone (without Field): Use component label"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(l,{label:"Remember me"}),e.jsx(f,{label:"Dark mode"})]})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    label: 'Email',
    description: "We'll never share your email."
  },
  render: args => <Field {...args}>
      <Input placeholder="you@example.com" />
    </Field>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'With Input',
  render: () => <div className="flex flex-col gap-6 w-80">
      <Field label="Username" description="Choose a unique username.">
        <Input placeholder="johndoe" />
      </Field>
      <Field label="Email" required>
        <Input type="email" placeholder="you@example.com" />
      </Field>
    </div>
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'With Textarea',
  render: () => <div className="w-80">
      <Field label="Bio" description="Tell us about yourself.">
        <Textarea placeholder="Write something..." />
      </Field>
    </div>
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'With Switch',
  render: () => <div className="w-80">
      <Field label="Notifications" description="Enable push notifications.">
        <Switch />
      </Field>
    </div>
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'With Tooltip',
  render: () => <div className="flex flex-col gap-6 w-80">
      <Field label="Email" tooltip="Used for account recovery and important notifications.">
        <Input type="email" placeholder="you@example.com" />
      </Field>
      <Field label="Password" description="Must be at least 8 characters." tooltip="Use a mix of letters, numbers, and symbols for better security." required>
        <Input type="password" placeholder="Enter password" />
      </Field>
    </div>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-6 w-80">
      <Field label="Email" error="Please enter a valid email address.">
        <Input type="email" defaultValue="invalid-email" />
      </Field>
      <Field label="Password" error="Password must be at least 8 characters." required>
        <Input type="password" defaultValue="123" />
      </Field>
    </div>
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-6 w-80">
      <Field label="Username" description="This field is disabled." disabled>
        <Input placeholder="johndoe" />
      </Field>
      <Field label="Notifications" disabled>
        <Switch />
      </Field>
    </div>
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Required',
  render: () => <div className="flex flex-col gap-6 w-80">
      <Field label="Full Name" required>
        <Input placeholder="John Doe" />
      </Field>
      <Field label="Email" required description="Required field.">
        <Input type="email" placeholder="you@example.com" />
      </Field>
    </div>
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const xe=["Playground","WithInput","WithTextarea","WithSelect","WithCheckbox","WithSwitch","WithRadioGroup","WithTooltip","ErrorState","Disabled","Required","LabelUsagePatterns"];export{h as Disabled,u as ErrorState,b as LabelUsagePatterns,t as Playground,x as Required,c as WithCheckbox,i as WithInput,m as WithRadioGroup,d as WithSelect,n as WithSwitch,s as WithTextarea,p as WithTooltip,xe as __namedExportsOrder,he as default};
