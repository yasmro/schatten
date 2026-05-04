import{j as e}from"./iframe-BEYCqZZk.js";import{C as r}from"./Checkbox-BFQJ2GMW.js";import{I as a}from"./Input-0epvH8LS.js";import{R as Y,a as s}from"./Radio-Vzf00tJm.js";import{S as $,a as ee,b as le,c as ae,d as f}from"./Select-BbqNetpg.js";import{S as b}from"./Switch-kOPERj29.js";import{T as re}from"./Textarea-DbdDELcM.js";import{F as l}from"./Field-HFIEocEN.js";import"./preload-helper-hmmh1zBP.js";import"./index-D9DDLpzw.js";import"./index-BweSrq76.js";import"./index-DpvPB9rk.js";import"./index-CIEPNccz.js";import"./field-CsnnpDbt.js";import"./index-DHk-Frat.js";import"./index-Dx-NVE55.js";import"./chevron-up-MavV8hab.js";import"./index-DSYURzPw.js";const ye={title:"Components/lv1/Field",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{description:"Label text for the field.",control:"text",table:{type:{summary:"ReactNode"}}},description:{description:"Description text displayed above the input.",control:"text",table:{type:{summary:"ReactNode"}}},error:{description:"Error message to display.",control:"text",table:{type:{summary:"string"}}},isError:{description:"Explicitly set error state. If not provided, derived from error prop presence.",control:"boolean",table:{type:{summary:"boolean"}}},required:{description:"Show required indicator (*).",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Disable the field. Propagates to child components via context.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},flexGrow:{description:"Flex grow factor for layout within FieldSet.",control:"select",options:[void 0,0,1],table:{type:{summary:"0 | 1"}}},flexShrink:{description:"Flex shrink factor for layout within FieldSet.",control:"select",options:[void 0,0,1],table:{type:{summary:"0 | 1"}}},flexBasis:{description:"Flex basis for layout within FieldSet (CSS value).",control:"text",table:{type:{summary:"string"}}}}},o={name:"Playground",args:{label:"Email",description:"We'll never share your email."},render:Z=>e.jsx(l,{...Z,children:e.jsx(a,{placeholder:"you@example.com"})})},i={name:"With Input",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-80",children:[e.jsx(l,{label:"Username",description:"Choose a unique username.",children:e.jsx(a,{placeholder:"johndoe"})}),e.jsx(l,{label:"Email",required:!0,children:e.jsx(a,{type:"email",placeholder:"you@example.com"})})]})},t={name:"With Textarea",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(l,{label:"Bio",description:"Tell us about yourself.",children:e.jsx(re,{placeholder:"Write something..."})})})},d={name:"With Select",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(l,{label:"Country",description:"Select your country.",children:e.jsxs($,{children:[e.jsx(ee,{children:e.jsx(le,{placeholder:"Select a country"})}),e.jsxs(ae,{children:[e.jsx(f,{value:"us",children:"United States"}),e.jsx(f,{value:"uk",children:"United Kingdom"}),e.jsx(f,{value:"jp",children:"Japan"})]})]})})})},c={name:"With Checkbox",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(l,{label:"Interests",description:"Select your interests.",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{label:"Technology"}),e.jsx(r,{label:"Design"}),e.jsx(r,{label:"Business"})]})})})},n={name:"With Switch",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(l,{label:"Notifications",description:"Enable push notifications.",children:e.jsx(b,{})})})},m={name:"With RadioGroup",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(l,{label:"Plan",description:"Choose your subscription plan.",children:e.jsxs(Y,{defaultValue:"free",children:[e.jsx(s,{value:"free",label:"Free"}),e.jsx(s,{value:"pro",label:"Pro"}),e.jsx(s,{value:"enterprise",label:"Enterprise"})]})})})},p={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-80",children:[e.jsx(l,{label:"Email",error:"Please enter a valid email address.",children:e.jsx(a,{type:"email",defaultValue:"invalid-email"})}),e.jsx(l,{label:"Password",error:"Password must be at least 8 characters.",required:!0,children:e.jsx(a,{type:"password",defaultValue:"123"})})]})},u={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-80",children:[e.jsx(l,{label:"Username",description:"This field is disabled.",disabled:!0,children:e.jsx(a,{placeholder:"johndoe"})}),e.jsx(l,{label:"Notifications",disabled:!0,children:e.jsx(b,{})})]})},h={name:"Required",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-80",children:[e.jsx(l,{label:"Full Name",required:!0,children:e.jsx(a,{placeholder:"John Doe"})}),e.jsx(l,{label:"Email",required:!0,description:"Required field.",children:e.jsx(a,{type:"email",placeholder:"you@example.com"})})]})},x={name:"Label Usage Patterns",render:()=>e.jsxs("div",{className:"flex flex-col gap-8 w-96",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground-muted mb-3",children:"Checkbox Group: Field.label for group, Checkbox.label for options"}),e.jsx(l,{label:"Notification settings",description:"Select all that apply.",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{label:"Email notifications"}),e.jsx(r,{label:"Push notifications"}),e.jsx(r,{label:"SMS notifications"})]})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground-muted mb-3",children:"RadioGroup: Field.label for group, Radio.label for options"}),e.jsx(l,{label:"Subscription plan",description:"Choose one plan.",children:e.jsxs(Y,{defaultValue:"free",children:[e.jsx(s,{value:"free",label:"Free - Basic features"}),e.jsx(s,{value:"pro",label:"Pro - Advanced features"}),e.jsx(s,{value:"enterprise",label:"Enterprise - Custom solutions"})]})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground-muted mb-3",children:"Switch: Field.label only (single toggle)"}),e.jsx(l,{label:"Enable dark mode",description:"Apply dark theme to the interface.",children:e.jsx(b,{})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground-muted mb-3",children:"Standalone (without Field): Use component label"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{label:"Remember me"}),e.jsx(b,{label:"Dark mode"})]})]})]})};var v,j,g;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    label: 'Email',
    description: "We'll never share your email."
  },
  render: args => <Field {...args}>
      <Input placeholder="you@example.com" />
    </Field>
}`,...(g=(j=o.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};var S,y,F;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'With Input',
  render: () => <div className="flex flex-col gap-6 w-80">
      <Field label="Username" description="Choose a unique username.">
        <Input placeholder="johndoe" />
      </Field>
      <Field label="Email" required>
        <Input type="email" placeholder="you@example.com" />
      </Field>
    </div>
}`,...(F=(y=i.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var w,N,C;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'With Textarea',
  render: () => <div className="w-80">
      <Field label="Bio" description="Tell us about yourself.">
        <Textarea placeholder="Write something..." />
      </Field>
    </div>
}`,...(C=(N=t.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var R,W,E;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(E=(W=d.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var k,I,P;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(P=(I=c.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var q,T,G;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'With Switch',
  render: () => <div className="w-80">
      <Field label="Notifications" description="Enable push notifications.">
        <Switch />
      </Field>
    </div>
}`,...(G=(T=n.parameters)==null?void 0:T.docs)==null?void 0:G.source}}};var U,D,V;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(V=(D=m.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var B,L,A;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-6 w-80">
      <Field label="Email" error="Please enter a valid email address.">
        <Input type="email" defaultValue="invalid-email" />
      </Field>
      <Field label="Password" error="Password must be at least 8 characters." required>
        <Input type="password" defaultValue="123" />
      </Field>
    </div>
}`,...(A=(L=p.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var J,K,M;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-6 w-80">
      <Field label="Username" description="This field is disabled." disabled>
        <Input placeholder="johndoe" />
      </Field>
      <Field label="Notifications" disabled>
        <Switch />
      </Field>
    </div>
}`,...(M=(K=u.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var _,O,z;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Required',
  render: () => <div className="flex flex-col gap-6 w-80">
      <Field label="Full Name" required>
        <Input placeholder="John Doe" />
      </Field>
      <Field label="Email" required description="Required field.">
        <Input type="email" placeholder="you@example.com" />
      </Field>
    </div>
}`,...(z=(O=h.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var H,Q,X;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(X=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Fe=["Playground","WithInput","WithTextarea","WithSelect","WithCheckbox","WithSwitch","WithRadioGroup","ErrorState","Disabled","Required","LabelUsagePatterns"];export{u as Disabled,p as ErrorState,x as LabelUsagePatterns,o as Playground,h as Required,c as WithCheckbox,i as WithInput,m as WithRadioGroup,d as WithSelect,n as WithSwitch,t as WithTextarea,Fe as __namedExportsOrder,ye as default};
