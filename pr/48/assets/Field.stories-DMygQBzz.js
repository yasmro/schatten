import{r as v,j as e}from"./iframe-BRLFNKvf.js";import{C as de}from"./Checkbox-BCs4p6oX.js";import{I as a}from"./Input-DHh-B4ys.js";import{R as ne,a as S}from"./Radio-DmUNjssw.js";import{S as ce,a as me,b as pe,c as ue,d as g}from"./Select-G95N-fNj.js";import{S as re}from"./Switch-CWjn0uHP.js";import{T as he}from"./Textarea-BSxJMXqZ.js";import{F as xe}from"./field-context-B03R_C6O.js";import{a as be}from"./index-DiZijfAW.js";import"./preload-helper-DT0q8JqK.js";import"./index-BIphAUCD.js";import"./index-C1WF4D_C.js";import"./index-DjznaSaN.js";import"./index-CpUznKo4.js";import"./index-CJVccWG0.js";import"./chevron-up-C5_x0TOT.js";import"./index-4AzvZEBy.js";function r({label:s,description:t,error:l,isError:ae,required:le=!1,disabled:se=!1,children:ie,className:te}){const i=v.useId(),y=`${i}-description`,j=`${i}-error`,F=ae??!!l,N=v.useMemo(()=>{const o=[];return t&&o.push(y),l&&o.push(j),o.length>0?o.join(" "):void 0},[t,l,y,j]),oe=v.useMemo(()=>({id:i,isError:F,describedBy:N}),[i,F,N]);return e.jsx(xe.Provider,{value:oe,children:e.jsxs("div",{className:be("flex flex-col gap-1.5",te),"data-disabled":se||void 0,children:[s&&e.jsxs("label",{htmlFor:i,className:"text-base font-medium text-foreground",children:[s,le&&e.jsx("span",{className:"text-destructive ml-0.5",children:"*"})]}),t&&!l&&e.jsx("p",{id:y,className:"-mt-1.5 mb-1 text-sm text-foreground-muted",children:t}),ie,l&&e.jsx("p",{id:j,className:"text-sm text-destructive",children:l})]})})}r.displayName="Field";try{r.displayName="Field",r.__docgenInfo={description:"",displayName:"Field",props:{label:{defaultValue:null,description:"Label text for the field",name:"label",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Description text displayed above the input",name:"description",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message to display",name:"error",required:!1,type:{name:"string"}},isError:{defaultValue:null,description:"Explicitly set error state. If not provided, derived from error prop",name:"isError",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Show required indicator (*)",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Disable the field",name:"disabled",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Field content (input element)",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Te={title:"Components/lv1/Field",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{description:"Label text for the field.",control:"text",table:{type:{summary:"ReactNode"}}},description:{description:"Description text displayed below the input.",control:"text",table:{type:{summary:"ReactNode"}}},error:{description:"Error message to display.",control:"text",table:{type:{summary:"string"}}},isError:{description:"Explicitly set error state. If not provided, derived from error prop presence.",control:"boolean",table:{type:{summary:"boolean"}}},required:{description:"Show required indicator (*).",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Disable the field.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},d={name:"Playground",args:{label:"Email",description:"We'll never share your email."},render:s=>e.jsx(r,{...s,children:e.jsx(a,{placeholder:"you@example.com"})})},n={name:"With Input",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-80",children:[e.jsx(r,{label:"Username",description:"Choose a unique username.",children:e.jsx(a,{placeholder:"johndoe"})}),e.jsx(r,{label:"Email",required:!0,children:e.jsx(a,{type:"email",placeholder:"you@example.com"})})]})},c={name:"With Textarea",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Bio",description:"Tell us about yourself.",children:e.jsx(he,{placeholder:"Write something..."})})})},m={name:"With Select",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Country",description:"Select your country.",children:e.jsxs(ce,{children:[e.jsx(me,{children:e.jsx(pe,{placeholder:"Select a country"})}),e.jsxs(ue,{children:[e.jsx(g,{value:"us",children:"United States"}),e.jsx(g,{value:"uk",children:"United Kingdom"}),e.jsx(g,{value:"jp",children:"Japan"})]})]})})})},p={name:"With Checkbox",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Terms and Conditions",description:"Please read and accept.",required:!0,children:e.jsx(de,{})})})},u={name:"With Switch",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Notifications",description:"Enable push notifications.",children:e.jsx(re,{})})})},h={name:"With RadioGroup",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Plan",description:"Choose your subscription plan.",children:e.jsxs(ne,{defaultValue:"free",children:[e.jsx(S,{value:"free",label:"Free"}),e.jsx(S,{value:"pro",label:"Pro"}),e.jsx(S,{value:"enterprise",label:"Enterprise"})]})})})},x={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-80",children:[e.jsx(r,{label:"Email",error:"Please enter a valid email address.",children:e.jsx(a,{type:"email",defaultValue:"invalid-email"})}),e.jsx(r,{label:"Password",error:"Password must be at least 8 characters.",required:!0,children:e.jsx(a,{type:"password",defaultValue:"123"})})]})},b={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-80",children:[e.jsx(r,{label:"Username",description:"This field is disabled.",disabled:!0,children:e.jsx(a,{placeholder:"johndoe",disabled:!0})}),e.jsx(r,{label:"Notifications",disabled:!0,children:e.jsx(re,{disabled:!0})})]})},f={name:"Required",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-80",children:[e.jsx(r,{label:"Full Name",required:!0,children:e.jsx(a,{placeholder:"John Doe"})}),e.jsx(r,{label:"Email",required:!0,description:"Required field.",children:e.jsx(a,{type:"email",placeholder:"you@example.com"})})]})};var w,q,E;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    label: 'Email',
    description: "We'll never share your email."
  },
  render: args => <Field {...args}>
      <Input placeholder="you@example.com" />
    </Field>
}`,...(E=(q=d.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var W,I,R;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'With Input',
  render: () => <div className="flex flex-col gap-6 w-80">
      <Field label="Username" description="Choose a unique username.">
        <Input placeholder="johndoe" />
      </Field>
      <Field label="Email" required>
        <Input type="email" placeholder="you@example.com" />
      </Field>
    </div>
}`,...(R=(I=n.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var C,V,P;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'With Textarea',
  render: () => <div className="w-80">
      <Field label="Bio" description="Tell us about yourself.">
        <Textarea placeholder="Write something..." />
      </Field>
    </div>
}`,...(P=(V=c.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var T,D,_;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(_=(D=m.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var k,U,G;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'With Checkbox',
  render: () => <div className="w-80">
      <Field label="Terms and Conditions" description="Please read and accept." required>
        <Checkbox />
      </Field>
    </div>
}`,...(G=(U=p.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var J,B,K;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'With Switch',
  render: () => <div className="w-80">
      <Field label="Notifications" description="Enable push notifications.">
        <Switch />
      </Field>
    </div>
}`,...(K=(B=u.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var L,M,$;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...($=(M=h.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var A,O,z;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-6 w-80">
      <Field label="Email" error="Please enter a valid email address.">
        <Input type="email" defaultValue="invalid-email" />
      </Field>
      <Field label="Password" error="Password must be at least 8 characters." required>
        <Input type="password" defaultValue="123" />
      </Field>
    </div>
}`,...(z=(O=x.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var H,Q,X;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-6 w-80">
      <Field label="Username" description="This field is disabled." disabled>
        <Input placeholder="johndoe" disabled />
      </Field>
      <Field label="Notifications" disabled>
        <Switch disabled />
      </Field>
    </div>
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Required',
  render: () => <div className="flex flex-col gap-6 w-80">
      <Field label="Full Name" required>
        <Input placeholder="John Doe" />
      </Field>
      <Field label="Email" required description="Required field.">
        <Input type="email" placeholder="you@example.com" />
      </Field>
    </div>
}`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const De=["Playground","WithInput","WithTextarea","WithSelect","WithCheckbox","WithSwitch","WithRadioGroup","ErrorState","Disabled","Required"];export{b as Disabled,x as ErrorState,d as Playground,f as Required,p as WithCheckbox,n as WithInput,h as WithRadioGroup,m as WithSelect,u as WithSwitch,c as WithTextarea,De as __namedExportsOrder,Te as default};
