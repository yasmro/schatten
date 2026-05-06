import{j as e}from"./iframe-C-6Cjyy5.js";import{C as r}from"./Checkbox-B52OEGTx.js";import{I as l}from"./Input-DTjI_XRt.js";import{R as le,a as o}from"./Radio-BjC9EPi2.js";import{S as re,a as oe,b as se,c as te,d as j}from"./Select-FGS12NKN.js";import{S as f}from"./Switch-BuEZoHuq.js";import{T as ie}from"./Textarea-6UP2fWCP.js";import{T as de}from"./Tooltip-SwEh11tv.js";import{F as a}from"./Field-DrWlAxoZ.js";import"./preload-helper-6VsmarHM.js";import"./index-B1rHvjUu.js";import"./index-eYOYbn8w.js";import"./index-BZLSeQhk.js";import"./index-BygYTALP.js";import"./index-Cb74U8Db.js";import"./index-DBT6-ab5.js";import"./field-CdPd0XGy.js";import"./index-DHk-Frat.js";import"./index-CHCbu3uR.js";import"./chevron-up-DWyVLwuv.js";import"./index-CXMQ45H3.js";import"./index-Df-gjO8t.js";import"./index-2rHjIt3C.js";import"./index-CixaME7I.js";import"./index-ADM7Cjg6.js";import"./index-C3yG56jF.js";const Ue={title:"Components/lv1/Field",component:a,parameters:{layout:"centered"},tags:["autodocs"],decorators:[v=>e.jsx(de,{delayDuration:100,children:e.jsx(v,{})})],argTypes:{label:{description:"Label text for the field.",control:"text",table:{type:{summary:"ReactNode"}}},description:{description:"Description text displayed above the input.",control:"text",table:{type:{summary:"ReactNode"}}},tooltip:{description:"Tooltip content displayed on hover of info icon next to label.",control:"text",table:{type:{summary:"ReactNode"}}},error:{description:"Error message to display.",control:"text",table:{type:{summary:"string"}}},isError:{description:"Explicitly set error state. If not provided, derived from error prop presence.",control:"boolean",table:{type:{summary:"boolean"}}},required:{description:"Show required indicator (*).",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Disable the field. Propagates to child components via context.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},flexGrow:{description:"Flex grow factor for layout within FieldSet.",control:"select",options:[void 0,0,1],table:{type:{summary:"0 | 1"}}},flexShrink:{description:"Flex shrink factor for layout within FieldSet.",control:"select",options:[void 0,0,1],table:{type:{summary:"0 | 1"}}},flexBasis:{description:"Flex basis for layout within FieldSet (CSS value).",control:"text",table:{type:{summary:"string"}}}}},s={name:"Playground",args:{label:"Email",description:"We'll never share your email."},render:v=>e.jsx(a,{...v,children:e.jsx(l,{placeholder:"you@example.com"})})},t={name:"With Input",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-80",children:[e.jsx(a,{label:"Username",description:"Choose a unique username.",children:e.jsx(l,{placeholder:"johndoe"})}),e.jsx(a,{label:"Email",required:!0,children:e.jsx(l,{type:"email",placeholder:"you@example.com"})})]})},i={name:"With Textarea",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(a,{label:"Bio",description:"Tell us about yourself.",children:e.jsx(ie,{placeholder:"Write something..."})})})},d={name:"With Select",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(a,{label:"Country",description:"Select your country.",children:e.jsxs(re,{children:[e.jsx(oe,{children:e.jsx(se,{placeholder:"Select a country"})}),e.jsxs(te,{children:[e.jsx(j,{value:"us",children:"United States"}),e.jsx(j,{value:"uk",children:"United Kingdom"}),e.jsx(j,{value:"jp",children:"Japan"})]})]})})})},c={name:"With Checkbox",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(a,{label:"Interests",description:"Select your interests.",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{label:"Technology"}),e.jsx(r,{label:"Design"}),e.jsx(r,{label:"Business"})]})})})},n={name:"With Switch",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(a,{label:"Notifications",description:"Enable push notifications.",children:e.jsx(f,{})})})},m={name:"With RadioGroup",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(a,{label:"Plan",description:"Choose your subscription plan.",children:e.jsxs(le,{defaultValue:"free",children:[e.jsx(o,{value:"free",label:"Free"}),e.jsx(o,{value:"pro",label:"Pro"}),e.jsx(o,{value:"enterprise",label:"Enterprise"})]})})})},p={name:"With Tooltip",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-80",children:[e.jsx(a,{label:"Email",tooltip:"Used for account recovery and important notifications.",children:e.jsx(l,{type:"email",placeholder:"you@example.com"})}),e.jsx(a,{label:"Password",description:"Must be at least 8 characters.",tooltip:"Use a mix of letters, numbers, and symbols for better security.",required:!0,children:e.jsx(l,{type:"password",placeholder:"Enter password"})})]})},u={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-80",children:[e.jsx(a,{label:"Email",error:"Please enter a valid email address.",children:e.jsx(l,{type:"email",defaultValue:"invalid-email"})}),e.jsx(a,{label:"Password",error:"Password must be at least 8 characters.",required:!0,children:e.jsx(l,{type:"password",defaultValue:"123"})})]})},h={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-80",children:[e.jsx(a,{label:"Username",description:"This field is disabled.",disabled:!0,children:e.jsx(l,{placeholder:"johndoe"})}),e.jsx(a,{label:"Notifications",disabled:!0,children:e.jsx(f,{})})]})},x={name:"Required",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-80",children:[e.jsx(a,{label:"Full Name",required:!0,children:e.jsx(l,{placeholder:"John Doe"})}),e.jsx(a,{label:"Email",required:!0,description:"Required field.",children:e.jsx(l,{type:"email",placeholder:"you@example.com"})})]})},b={name:"Label Usage Patterns",render:()=>e.jsxs("div",{className:"flex flex-col gap-8 w-96",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground-muted mb-3",children:"Checkbox Group: Field.label for group, Checkbox.label for options"}),e.jsx(a,{label:"Notification settings",description:"Select all that apply.",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{label:"Email notifications"}),e.jsx(r,{label:"Push notifications"}),e.jsx(r,{label:"SMS notifications"})]})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground-muted mb-3",children:"RadioGroup: Field.label for group, Radio.label for options"}),e.jsx(a,{label:"Subscription plan",description:"Choose one plan.",children:e.jsxs(le,{defaultValue:"free",children:[e.jsx(o,{value:"free",label:"Free - Basic features"}),e.jsx(o,{value:"pro",label:"Pro - Advanced features"}),e.jsx(o,{value:"enterprise",label:"Enterprise - Custom solutions"})]})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground-muted mb-3",children:"Switch: Field.label only (single toggle)"}),e.jsx(a,{label:"Enable dark mode",description:"Apply dark theme to the interface.",children:e.jsx(f,{})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground-muted mb-3",children:"Standalone (without Field): Use component label"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{label:"Remember me"}),e.jsx(f,{label:"Dark mode"})]})]})]})};var y,g,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    label: 'Email',
    description: "We'll never share your email."
  },
  render: args => <Field {...args}>
      <Input placeholder="you@example.com" />
    </Field>
}`,...(S=(g=s.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var F,w,N;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'With Input',
  render: () => <div className="flex flex-col gap-6 w-80">
      <Field label="Username" description="Choose a unique username.">
        <Input placeholder="johndoe" />
      </Field>
      <Field label="Email" required>
        <Input type="email" placeholder="you@example.com" />
      </Field>
    </div>
}`,...(N=(w=t.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var R,C,W;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'With Textarea',
  render: () => <div className="w-80">
      <Field label="Bio" description="Tell us about yourself.">
        <Textarea placeholder="Write something..." />
      </Field>
    </div>
}`,...(W=(C=i.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var E,k,I;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(I=(k=d.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var P,T,q;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(q=(T=c.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var U,G,D;n.parameters={...n.parameters,docs:{...(U=n.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'With Switch',
  render: () => <div className="w-80">
      <Field label="Notifications" description="Enable push notifications.">
        <Switch />
      </Field>
    </div>
}`,...(D=(G=n.parameters)==null?void 0:G.docs)==null?void 0:D.source}}};var V,B,L;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(L=(B=m.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var A,J,M;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'With Tooltip',
  render: () => <div className="flex flex-col gap-6 w-80">
      <Field label="Email" tooltip="Used for account recovery and important notifications.">
        <Input type="email" placeholder="you@example.com" />
      </Field>
      <Field label="Password" description="Must be at least 8 characters." tooltip="Use a mix of letters, numbers, and symbols for better security." required>
        <Input type="password" placeholder="Enter password" />
      </Field>
    </div>
}`,...(M=(J=p.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};var K,_,O;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-6 w-80">
      <Field label="Email" error="Please enter a valid email address.">
        <Input type="email" defaultValue="invalid-email" />
      </Field>
      <Field label="Password" error="Password must be at least 8 characters." required>
        <Input type="password" defaultValue="123" />
      </Field>
    </div>
}`,...(O=(_=u.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var z,H,Q;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-6 w-80">
      <Field label="Username" description="This field is disabled." disabled>
        <Input placeholder="johndoe" />
      </Field>
      <Field label="Notifications" disabled>
        <Switch />
      </Field>
    </div>
}`,...(Q=(H=h.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var X,Y,Z;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Required',
  render: () => <div className="flex flex-col gap-6 w-80">
      <Field label="Full Name" required>
        <Input placeholder="John Doe" />
      </Field>
      <Field label="Email" required description="Required field.">
        <Input type="email" placeholder="you@example.com" />
      </Field>
    </div>
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ae;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(ae=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const Ge=["Playground","WithInput","WithTextarea","WithSelect","WithCheckbox","WithSwitch","WithRadioGroup","WithTooltip","ErrorState","Disabled","Required","LabelUsagePatterns"];export{h as Disabled,u as ErrorState,b as LabelUsagePatterns,s as Playground,x as Required,c as WithCheckbox,t as WithInput,m as WithRadioGroup,d as WithSelect,n as WithSwitch,i as WithTextarea,p as WithTooltip,Ge as __namedExportsOrder,Ue as default};
