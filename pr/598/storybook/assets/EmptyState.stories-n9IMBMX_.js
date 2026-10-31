import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-CvSUxp8s.js";import{n,t as r}from"./createLucideIcon-CkSYkVr9.js";import{i,n as a,r as o,t as s}from"./EmptyState-ukcKCQ0q.js";import{n as c,t as l}from"./plus-CntoqsDU.js";import{n as u,t as d}from"./search-BtBh8te8.js";import{n as f,t as p}from"./Button-PmocxPey.js";var m,h;function g(){return(g=e((()=>{n(),m=[[`path`,{d:`m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2`,key:`usdka0`}]],h=r(`folder-open`,m)})))()}var _,v,y,b,x,S,C;function w(){return(w=e((()=>{g(),i(),c(),u(),f(),a(),_=t(),v={title:`Components/lv2/EmptyState`,component:s,tags:[`autodocs`],parameters:{layout:`centered`},argTypes:{icon:{description:`Decorative Lucide icon shown above the title. Pass the component itself.`,control:!1,table:{type:{summary:`LucideIcon`}}},title:{description:"Heading text, rendered as a heading through `Text`.",control:`text`,table:{type:{summary:`ReactNode`}}},description:{description:`Supporting copy below the title. Inline content only.`,control:`text`,table:{type:{summary:`ReactNode`}}},action:{description:"The next step — one `Button`, or several wrapped in a fragment.",control:!1,table:{type:{summary:`ReactNode`}}},headingLevel:{description:`Heading level of the title. The consumer decides the page outline.`,control:`select`,options:[1,2,3,4,5,6],table:{type:{summary:`1 | 2 | 3 | 4 | 5 | 6`},defaultValue:{summary:`2`}}},size:{description:`Overall scale — icon size, type size and spacing.`,control:`inline-radio`,options:[`sm`,`md`,`lg`],table:{type:{summary:`"sm" | "md" | "lg"`},defaultValue:{summary:`md`}}},align:{description:`Horizontal placement of the content.`,control:`inline-radio`,options:[`center`,`start`],table:{type:{summary:`"center" | "start"`},defaultValue:{summary:`center`}}}}},y={args:{icon:o,title:`No messages yet`,description:`New messages will appear here.`,action:(0,_.jsx)(p,{variant:`primary`,children:`Send a message`}),size:`md`,align:`center`},render:e=>(0,_.jsx)(`div`,{className:`w-[480px]`,children:(0,_.jsx)(s,{...e})})},b={name:`Sizes`,render:()=>(0,_.jsx)(`div`,{className:`flex w-[560px] flex-col gap-4`,children:[`sm`,`md`,`lg`].map(e=>(0,_.jsx)(s,{size:e,icon:o,title:`No messages yet`,description:`New messages will appear here.`,action:(0,_.jsx)(p,{variant:`primary`,children:`Send a message`})},e))})},x={name:`Alignments`,render:()=>(0,_.jsx)(`div`,{className:`flex w-[480px] flex-col gap-4`,children:[`center`,`start`].map(e=>(0,_.jsx)(s,{align:e,icon:d,title:`No results found`,description:`Try a different search term or remove a filter.`,action:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(p,{variant:`primary`,children:`Clear filters`}),(0,_.jsx)(p,{variant:`secondary`,children:`Start over`})]})},e))})},S={name:`Compositions`,render:()=>(0,_.jsxs)(`div`,{className:`flex w-[640px] flex-col gap-4`,children:[(0,_.jsx)(s,{title:`Nothing to show`}),(0,_.jsx)(s,{title:`No files`,description:`Files you upload will appear here.`}),(0,_.jsx)(s,{icon:h,title:`This folder is empty`,headingLevel:3}),(0,_.jsx)(s,{icon:h,title:`This folder is empty`,description:`Upload a file or create a new document to get started. Everything you add to this folder is shared with the people who already have access to it.`,action:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(p,{variant:`primary`,icon:l,children:`New document`}),(0,_.jsx)(p,{variant:`secondary`,children:`Upload a file`}),(0,_.jsx)(p,{variant:`tertiary`,children:`Learn more`})]})})]})},C=[`Playground`,`Sizes`,`Alignments`,`Compositions`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Inbox,
    title: 'No messages yet',
    description: 'New messages will appear here.',
    action: <Button variant="primary">Send a message</Button>,
    size: 'md',
    align: 'center'
  },
  render: args => <div className="w-[480px]">
      <EmptyState {...args} />
    </div>
}`,...y.parameters?.docs?.source},description:{story:`Interactive single instance — adjust the props in the Controls panel.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex w-[560px] flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map(size => <EmptyState key={size} size={size} icon={Inbox} title="No messages yet" description="New messages will appear here." action={<Button variant="primary">Send a message</Button>} />)}
    </div>
}`,...b.parameters?.docs?.source},description:{story:"`sm` for a card or table body, `md` for a panel, `lg` for a whole page.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Alignments',
  render: () => <div className="flex w-[480px] flex-col gap-4">
      {(['center', 'start'] as const).map(align => <EmptyState key={align} align={align} icon={Search} title="No results found" description="Try a different search term or remove a filter." action={<>
              <Button variant="primary">Clear filters</Button>
              <Button variant="secondary">Start over</Button>
            </>} />)}
    </div>
}`,...x.parameters?.docs?.source},description:{story:"`center` is the default; `start` suits a left-aligned layout.",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Compositions',
  render: () => <div className="flex w-[640px] flex-col gap-4">
      <EmptyState title="Nothing to show" />
      <EmptyState title="No files" description="Files you upload will appear here." />
      <EmptyState icon={FolderOpen} title="This folder is empty" headingLevel={3} />
      <EmptyState icon={FolderOpen} title="This folder is empty" description="Upload a file or create a new document to get started. Everything you add to this folder is shared with the people who already have access to it." action={<>
            <Button variant="primary" icon={Plus}>
              New document
            </Button>
            <Button variant="secondary">Upload a file</Button>
            <Button variant="tertiary">Learn more</Button>
          </>} />
    </div>
}`,...S.parameters?.docs?.source},description:{story:"Every part but `title` is optional. The row of three buttons also pins that\na `Button` icon inside `action` keeps its own size, and that a long\ndescription stays at a readable line length.",...S.parameters?.docs?.description}}}})))()}w();export{x as Alignments,S as Compositions,y as Playground,b as Sizes,C as __namedExportsOrder,v as default};