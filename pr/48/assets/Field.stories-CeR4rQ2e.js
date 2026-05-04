import{j as e}from"./iframe-236r9hJk.js";import{C as f}from"./Checkbox-BqIuNOM4.js";import{I as r}from"./Input-Cwd60erO.js";import{R as X,a as l}from"./Radio-DWBEVb-F.js";import{S as $,a as ee,b as ae,c as re,d as b}from"./Select-CufwCiSD.js";import{S as x}from"./Switch-CEGlJp8U.js";import{T as le}from"./Textarea-CiKQZ2NH.js";import{F as a}from"./Field-BGT_BstN.js";import"./preload-helper-DT0q8JqK.js";import"./index-CXw5seCw.js";import"./index-CadrxrdT.js";import"./index-B9Ch7cFV.js";import"./index-B53_k0JJ.js";import"./field-gTJ4FW1G.js";import"./index-DHk-Frat.js";import"./index-CK3IXnQq.js";import"./chevron-up-DXMdkt0n.js";import"./index-CoN8_y1u.js";const ye={title:"Components/lv1/Field",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{description:"Label text for the field.",control:"text",table:{type:{summary:"ReactNode"}}},description:{description:"Description text displayed above the input.",control:"text",table:{type:{summary:"ReactNode"}}},error:{description:"Error message to display.",control:"text",table:{type:{summary:"string"}}},isError:{description:"Explicitly set error state. If not provided, derived from error prop presence.",control:"boolean",table:{type:{summary:"boolean"}}},required:{description:"Show required indicator (*).",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Disable the field. Propagates to child components via context.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},s={name:"Playground",args:{label:"Email",description:"We'll never share your email."},render:Z=>e.jsx(a,{...Z,children:e.jsx(r,{placeholder:"you@example.com"})})},i={name:"With Input",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-80",children:[e.jsx(a,{label:"Username",description:"Choose a unique username.",children:e.jsx(r,{placeholder:"johndoe"})}),e.jsx(a,{label:"Email",required:!0,children:e.jsx(r,{type:"email",placeholder:"you@example.com"})})]})},o={name:"With Textarea",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(a,{label:"Bio",description:"Tell us about yourself.",children:e.jsx(le,{placeholder:"Write something..."})})})},t={name:"With Select",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(a,{label:"Country",description:"Select your country.",children:e.jsxs($,{children:[e.jsx(ee,{children:e.jsx(ae,{placeholder:"Select a country"})}),e.jsxs(re,{children:[e.jsx(b,{value:"us",children:"United States"}),e.jsx(b,{value:"uk",children:"United Kingdom"}),e.jsx(b,{value:"jp",children:"Japan"})]})]})})})},d={name:"With Checkbox",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(a,{label:"Terms and Conditions",description:"Please read and accept.",required:!0,children:e.jsx(f,{})})})},c={name:"With Switch",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(a,{label:"Notifications",description:"Enable push notifications.",children:e.jsx(x,{})})})},n={name:"With RadioGroup",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(a,{label:"Plan",description:"Choose your subscription plan.",children:e.jsxs(X,{defaultValue:"free",children:[e.jsx(l,{value:"free",label:"Free"}),e.jsx(l,{value:"pro",label:"Pro"}),e.jsx(l,{value:"enterprise",label:"Enterprise"})]})})})},m={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-80",children:[e.jsx(a,{label:"Email",error:"Please enter a valid email address.",children:e.jsx(r,{type:"email",defaultValue:"invalid-email"})}),e.jsx(a,{label:"Password",error:"Password must be at least 8 characters.",required:!0,children:e.jsx(r,{type:"password",defaultValue:"123"})})]})},p={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-80",children:[e.jsx(a,{label:"Username",description:"This field is disabled.",disabled:!0,children:e.jsx(r,{placeholder:"johndoe"})}),e.jsx(a,{label:"Notifications",disabled:!0,children:e.jsx(x,{})})]})},u={name:"Required",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-80",children:[e.jsx(a,{label:"Full Name",required:!0,children:e.jsx(r,{placeholder:"John Doe"})}),e.jsx(a,{label:"Email",required:!0,description:"Required field.",children:e.jsx(r,{type:"email",placeholder:"you@example.com"})})]})},h={name:"Label Usage Patterns",render:()=>e.jsxs("div",{className:"flex flex-col gap-8 w-96",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground-muted mb-3",children:"Checkbox / Switch: Use Field.label only"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{label:"Enable notifications",description:"You will receive email updates.",children:e.jsx(x,{})}),e.jsx(a,{label:"I agree to the terms",required:!0,children:e.jsx(f,{})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground-muted mb-3",children:"RadioGroup: Field.label for group, Radio.label for options"}),e.jsx(a,{label:"Subscription plan",description:"Choose your plan.",children:e.jsxs(X,{defaultValue:"free",children:[e.jsx(l,{value:"free",label:"Free - Basic features"}),e.jsx(l,{value:"pro",label:"Pro - Advanced features"}),e.jsx(l,{value:"enterprise",label:"Enterprise - Custom solutions"})]})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground-muted mb-3",children:"Standalone (without Field): Use component label"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(f,{label:"Remember me"}),e.jsx(x,{label:"Dark mode"})]})]})]})};var v,j,g;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    label: 'Email',
    description: "We'll never share your email."
  },
  render: args => <Field {...args}>
      <Input placeholder="you@example.com" />
    </Field>
}`,...(g=(j=s.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};var S,y,F;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'With Input',
  render: () => <div className="flex flex-col gap-6 w-80">
      <Field label="Username" description="Choose a unique username.">
        <Input placeholder="johndoe" />
      </Field>
      <Field label="Email" required>
        <Input type="email" placeholder="you@example.com" />
      </Field>
    </div>
}`,...(F=(y=i.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var w,N,R;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'With Textarea',
  render: () => <div className="w-80">
      <Field label="Bio" description="Tell us about yourself.">
        <Textarea placeholder="Write something..." />
      </Field>
    </div>
}`,...(R=(N=o.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var W,C,E;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(E=(C=t.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var I,P,q;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'With Checkbox',
  render: () => <div className="w-80">
      <Field label="Terms and Conditions" description="Please read and accept." required>
        <Checkbox />
      </Field>
    </div>
}`,...(q=(P=d.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var T,U,k;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'With Switch',
  render: () => <div className="w-80">
      <Field label="Notifications" description="Enable push notifications.">
        <Switch />
      </Field>
    </div>
}`,...(k=(U=c.parameters)==null?void 0:U.docs)==null?void 0:k.source}}};var V,G,D;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(D=(G=n.parameters)==null?void 0:G.docs)==null?void 0:D.source}}};var L,B,J;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-6 w-80">
      <Field label="Email" error="Please enter a valid email address.">
        <Input type="email" defaultValue="invalid-email" />
      </Field>
      <Field label="Password" error="Password must be at least 8 characters." required>
        <Input type="password" defaultValue="123" />
      </Field>
    </div>
}`,...(J=(B=m.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var A,K,Y;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-6 w-80">
      <Field label="Username" description="This field is disabled." disabled>
        <Input placeholder="johndoe" />
      </Field>
      <Field label="Notifications" disabled>
        <Switch />
      </Field>
    </div>
}`,...(Y=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var _,O,z;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Required',
  render: () => <div className="flex flex-col gap-6 w-80">
      <Field label="Full Name" required>
        <Input placeholder="John Doe" />
      </Field>
      <Field label="Email" required description="Required field.">
        <Input type="email" placeholder="you@example.com" />
      </Field>
    </div>
}`,...(z=(O=u.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var H,M,Q;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Label Usage Patterns',
  render: () => <div className="flex flex-col gap-8 w-96">
      <div>
        <h3 className="text-sm font-semibold text-foreground-muted mb-3">
          Checkbox / Switch: Use Field.label only
        </h3>
        <div className="flex flex-col gap-4">
          <Field label="Enable notifications" description="You will receive email updates.">
            <Switch />
          </Field>
          <Field label="I agree to the terms" required>
            <Checkbox />
          </Field>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-foreground-muted mb-3">
          RadioGroup: Field.label for group, Radio.label for options
        </h3>
        <Field label="Subscription plan" description="Choose your plan.">
          <RadioGroup defaultValue="free">
            <Radio value="free" label="Free - Basic features" />
            <Radio value="pro" label="Pro - Advanced features" />
            <Radio value="enterprise" label="Enterprise - Custom solutions" />
          </RadioGroup>
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
}`,...(Q=(M=h.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};const Fe=["Playground","WithInput","WithTextarea","WithSelect","WithCheckbox","WithSwitch","WithRadioGroup","ErrorState","Disabled","Required","LabelUsagePatterns"];export{p as Disabled,m as ErrorState,h as LabelUsagePatterns,s as Playground,u as Required,d as WithCheckbox,i as WithInput,n as WithRadioGroup,t as WithSelect,c as WithSwitch,o as WithTextarea,Fe as __namedExportsOrder,ye as default};
