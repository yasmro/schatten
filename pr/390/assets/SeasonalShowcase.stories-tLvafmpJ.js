import{j as e}from"./iframe-BeDgar8D.js";import{S as h,b as A,s as k,a as C}from"./scoped-theme-css-CD2pOsZn.js";import{g as D}from"./index-BjhfJjZn.js";import{P as u,L as x,S as P,N as E,C as L}from"./docs-ui-DB5VBbHb.js";import{T as l}from"./Text-DL0WMKIp.js";import{B as r}from"./Button-cNZhvFx7.js";import{B as y}from"./Badge-DO7qKprJ.js";import{C as T}from"./Callout-Bb3HuflH.js";import{F as w}from"./Field-C-MHIslG.js";import{I as B}from"./Input-2w_TIwfU.js";import{S as R,a as I,b as M,c as O,d as b}from"./Select-DyHeGkWO.js";import"./preload-helper-CIBZF7zf.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css             */import"./index-BFQFOdZ6.js";import"./index-CyGACN6W.js";/* empty css               */import"./Spinner-CkE3942c.js";/* empty css                *//* empty css              *//* empty css                */import"./circle-alert-DqO1JmKg.js";import"./createLucideIcon-d6_GSmTH.js";import"./triangle-alert-p9lQwD6Y.js";import"./info-ooilBzlQ.js";import"./x-CtJL1F92.js";import"./field-pOd9J3Ov.js";import"./Tooltip-B52cKtlp.js";import"./index-Bg7CmM54.js";import"./index-C7LcwkN1.js";import"./index-CSB4icoS.js";import"./index-CRxETzcI.js";import"./index-BwgqvcmJ.js";import"./index-DGBzMMrQ.js";import"./index-CC_n0F3O.js";import"./index-Cbel913z.js";import"./index-Cvn2eoyy.js";import"./index-GXs0rQQn.js";/* empty css                *//* empty css              *//* empty css              */import"./index-3a65KNIh.js";import"./index-KDre32Ro.js";import"./Combination-B-A-q1Hq.js";import"./index-Dhck1bVj.js";/* empty css               */import"./chevron-up-C3Hptkdm.js";import"./check-5iDNKMo8.js";const V=A(".seasonal-showcase-cell",{semanticCss:C,seasonalCss:k}),_=["light","dark"],v=h.map(s=>s.id),z=[50,100,200,300,400,500,600,700,800,900,950];function g(){return e.jsx("style",{children:V})}function S({mode:s,season:a,className:t="",children:i}){return e.jsx("div",{className:`seasonal-showcase-cell ${s==="dark"?"dark":""} rounded-lg border border-border bg-background ${t}`,"data-theme":a??void 0,children:i})}function U(){return e.jsx("div",{className:"flex gap-1","aria-hidden":"true",children:z.map(s=>e.jsx("span",{className:"h-5 flex-1 rounded-sm border border-border",style:{backgroundColor:`var(--color-theme-${s})`},title:`theme-${s}`},s))})}function j(){return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(U,{}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(r,{variant:"primary",size:"sm",children:"Primary"}),e.jsx(r,{variant:"secondary",size:"sm",children:"Secondary"}),e.jsx(r,{variant:"destructive",size:"sm",children:"Delete"}),e.jsx(y,{variant:"neutral",appearance:"solid",children:"Neutral"})]}),e.jsx(T,{variant:"neutral",appearance:"solid",title:"Seasonal surface",children:"Solid surfaces ride the active seasonal ramp."})]})}const Ue={title:"Theming/Seasonal Showcase",parameters:{layout:"fullscreen"}},d={name:"Eight Seasons",render:()=>e.jsxs("div",{className:"p-6",children:[e.jsx(g,{}),e.jsxs("div",{className:"mx-auto max-w-6xl",children:[e.jsx(u,{children:"Seasonal Showcase"}),e.jsx(x,{children:"Schatten ships eight seasonal palettes based on the 24 solar terms (二十四節気) and Japanese traditional colors. A Special supplies the theme ramp and the Mode picks the rungs, so every solid surface — Button primary, the neutral solid Badge and Callout — re-tints per season, while destructive red and info blue stay pinned."}),e.jsx("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:h.map(s=>e.jsxs("section",{className:"flex flex-col gap-2 rounded-xl border border-border p-4",children:[e.jsxs("header",{className:"flex flex-wrap items-baseline gap-2",children:[e.jsx("h2",{className:"font-semibold text-foreground text-lg",children:s.label}),e.jsxs("span",{className:"text-foreground-muted text-xs",children:[s.term," · ",s.colors]}),e.jsx("span",{className:"ml-auto font-mono text-foreground-subtle text-xs",children:s.id})]}),_.map(a=>e.jsx(S,{mode:a,season:s.id,className:"p-4",children:e.jsx(j,{})},a))]},s.id))})]})]})},c={name:"Side by Side",argTypes:{seasonA:{description:"Season applied to the left cell.",control:"select",options:v,table:{type:{summary:"SeasonalThemeId"},defaultValue:{summary:"season--spring-early"}}},seasonB:{description:"Season applied to the right cell.",control:"select",options:v,table:{type:{summary:"SeasonalThemeId"},defaultValue:{summary:"season--winter-deep"}}},mode:{description:"Mode for both cells (independent of the toolbar).",control:"select",options:["light","dark"],table:{type:{summary:'"light" | "dark"'},defaultValue:{summary:"light"}}}},args:{seasonA:"season--spring-early",seasonB:"season--winter-deep",mode:"light"},render:s=>{const{seasonA:a,seasonB:t,mode:i}=s;return e.jsxs("div",{className:"p-6",children:[e.jsx(g,{}),e.jsxs("div",{className:"mx-auto max-w-5xl",children:[e.jsx(u,{children:"Side by Side"}),e.jsx(x,{children:"Pick any two seasons and compare the identical component stack under each ramp. The default pair — spring-early (hue 12) vs winter-deep (hue 255) — is the widest hue contrast the eight palettes offer."}),e.jsx("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[["left",a],["right",t]].map(([N,o])=>{const n=h.find(f=>f.id===o);return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("header",{className:"flex flex-wrap items-baseline gap-2",children:[e.jsx("h2",{className:"font-semibold text-base text-foreground",children:n?.label}),e.jsx("span",{className:"text-foreground-muted text-xs",children:n?.colors}),e.jsx("span",{className:"ml-auto font-mono text-foreground-subtle text-xs",children:o})]}),e.jsx(S,{mode:i,season:o,className:"p-4",children:e.jsx(j,{})})]},N)})})]})]})}},$=["Overview","Reports","Audiences","Settings"],W=[{label:"Sessions",value:"24.3k",delta:"+12.4%",tone:"success"},{label:"Sign-ups",value:"1,208",delta:"+3.1%",tone:"success"},{label:"Churn",value:"0.8%",delta:"-0.2%",tone:"error"}];function F(){return e.jsxs("div",{className:"flex min-h-[600px] flex-col",children:[e.jsxs("header",{className:"flex flex-wrap items-center gap-3 border-border border-b px-6 py-3",children:[e.jsx("span",{className:"size-6 rounded bg-solid","aria-hidden":"true"}),e.jsx(l,{variant:"heading",as:"span",size:"md",children:"Schatten Analytics"}),e.jsx(y,{variant:"neutral",appearance:"solid",children:"Pro"}),e.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[e.jsx(r,{variant:"secondary",size:"sm",children:"Export"}),e.jsx(r,{variant:"primary",size:"sm",children:"New report"})]})]}),e.jsxs("div",{className:"flex flex-1",children:[e.jsx("nav",{"aria-label":"Dashboard sections",className:"w-44 border-border border-r p-3",children:e.jsx("ul",{className:"flex flex-col gap-1",children:$.map((s,a)=>e.jsx("li",{children:e.jsx("a",{href:"#overview","aria-current":a===0?"page":void 0,className:a===0?"block rounded bg-solid px-3 py-1.5 font-medium text-sm text-solid-foreground":"block rounded px-3 py-1.5 text-foreground-muted text-sm hover:bg-surface-hover",children:s})},s))})}),e.jsxs("main",{className:"flex flex-1 flex-col gap-4 p-6",children:[e.jsx(l,{variant:"heading",as:"h2",size:"lg",id:"overview",children:"Overview"}),e.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-3",children:W.map(s=>e.jsxs("div",{className:"flex flex-col items-start gap-1 rounded-lg border border-border bg-surface p-4",children:[e.jsx(l,{variant:"label",as:"span",size:"sm",color:"muted",children:s.label}),e.jsx(l,{variant:"heading",as:"span",size:"xl",children:s.value}),e.jsx(y,{variant:s.tone,appearance:"subtle",children:s.delta})]},s.label))}),e.jsx(T,{variant:"info",appearance:"subtle",title:"Pinned colors",children:"State colors stay put: info is always blue and destructive is always red, whichever season is active."}),e.jsxs("section",{className:"flex max-w-xl flex-col gap-3 rounded-lg border border-border bg-surface p-4",children:[e.jsx(l,{variant:"heading",as:"h3",size:"sm",children:"New report"}),e.jsx(w,{label:"Report name",children:e.jsx(B,{placeholder:"Q2 retention"})}),e.jsx(w,{label:"Period",children:e.jsxs(R,{defaultValue:"quarter",children:[e.jsx(I,{children:e.jsx(M,{placeholder:"Select period"})}),e.jsxs(O,{children:[e.jsx(b,{value:"week",children:"Last week"}),e.jsx(b,{value:"quarter",children:"Last quarter"}),e.jsx(b,{value:"year",children:"Last year"})]})]})}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(r,{variant:"primary",size:"sm",children:"Create"}),e.jsx(r,{variant:"tertiary",size:"sm",children:"Cancel"})]})]})]})]})]})}const m={name:"Dashboard Mockup",argTypes:{season:{description:"Seasonal palette applied to the whole mockup.",control:"select",options:["none",...v],table:{type:{summary:'SeasonalThemeId | "none"'},defaultValue:{summary:"season--spring-early"}}},mode:{description:"Mode for the mockup (independent of the toolbar).",control:"select",options:["light","dark"],table:{type:{summary:'"light" | "dark"'},defaultValue:{summary:"light"}}}},args:{season:"season--spring-early",mode:"light"},render:s=>{const{season:a,mode:t}=s;return e.jsxs("div",{className:"p-6",children:[e.jsx(g,{}),e.jsxs("div",{className:"mx-auto max-w-6xl",children:[e.jsx(u,{children:"Dashboard Mockup"}),e.jsx(x,{children:"A complete page built from lv1 components, wearing one seasonal ramp. The season flows through the solid family only — switch the season arg and watch the header mark, active nav item, primary buttons and Pro badge re-tint while state colors hold still."}),e.jsx(S,{mode:t,season:a==="none"?null:a,className:"overflow-hidden",children:e.jsx(F,{})})]})]})}},Y=Date.UTC(2026,3,1),p={name:"Auto Season",argTypes:{date:{description:"Date to resolve into a season. Set it to today to preview the live behavior.",control:"date",table:{type:{summary:"Date"}}},mode:{description:"Mode for the preview cell (independent of the toolbar).",control:"select",options:["light","dark"],table:{type:{summary:'"light" | "dark"'},defaultValue:{summary:"light"}}}},args:{date:Y,mode:"light"},render:s=>{const{date:a,mode:t}=s,i=new Date(typeof a=="string"?Number.isNaN(Number(a))?a:Number(a):a),o=`season--${D(i)}`,n=h.find(f=>f.id===o);return e.jsxs("div",{className:"p-6",children:[e.jsx(g,{}),e.jsxs("div",{className:"mx-auto max-w-3xl",children:[e.jsx(u,{children:"Auto Season"}),e.jsxs(x,{children:[e.jsx("code",{children:"getCurrentSeason(date)"})," maps any date onto the eight solar-term periods — drag the date control and watch the resolved palette change."]}),e.jsxs("div",{className:"mb-4 flex flex-wrap items-baseline gap-2",children:[e.jsx(l,{variant:"heading",as:"h2",size:"md",children:n?.label}),e.jsxs("span",{className:"text-foreground-muted text-sm",children:[n?.term," · ",n?.colors]}),e.jsx("span",{className:"ml-auto font-mono text-foreground-subtle text-xs",children:o})]}),e.jsx(S,{mode:t,season:o,className:"p-4",children:e.jsx(j,{})}),e.jsx(P,{children:"Wiring it up"}),e.jsxs(E,{children:["Browser: call ",e.jsx("code",{children:"applySeasonTheme()"})," once on load. SSR: spread"," ",e.jsx("code",{children:"getSeasonAttribute()"})," onto the root element so the attribute is there before first paint. With the React provider, pass ",e.jsx("code",{children:'defaultSpecial="auto-seasonal"'})," ","instead."]}),e.jsx(L,{children:`import { applySeasonTheme, getSeasonAttribute } from '@yasmro/schatten/themes/seasonal'
import { ThemeProvider } from '@yasmro/schatten/providers'

// Browser — sets data-theme="season--…" on <html>
applySeasonTheme()

// SSR (Astro / Next.js) — render the attribute before first paint
<html {...getSeasonAttribute()}>

// React — the provider resolves the season for you
<ThemeProvider defaultSpecial="auto-seasonal">…</ThemeProvider>`})]})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Eight Seasons',
  render: () => <div className="p-6">
      <ScopedStyles />
      <div className="mx-auto max-w-6xl">
        <PageTitle>Seasonal Showcase</PageTitle>
        <Lead>
          Schatten ships eight seasonal palettes based on the 24 solar terms (二十四節気) and
          Japanese traditional colors. A Special supplies the theme ramp and the Mode picks the
          rungs, so every solid surface — Button primary, the neutral solid Badge and Callout —
          re-tints per season, while destructive red and info blue stay pinned.
        </Lead>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {SEASONAL_DISPLAY.map(s => <section key={s.id} className="flex flex-col gap-2 rounded-xl border border-border p-4">
              <header className="flex flex-wrap items-baseline gap-2">
                <h2 className="font-semibold text-foreground text-lg">{s.label}</h2>
                <span className="text-foreground-muted text-xs">
                  {s.term} · {s.colors}
                </span>
                <span className="ml-auto font-mono text-foreground-subtle text-xs">{s.id}</span>
              </header>
              {MODES.map(m => <SeasonCell key={m} mode={m} season={s.id} className="p-4">
                  <SolidSample />
                </SeasonCell>)}
            </section>)}
        </div>
      </div>
    </div>
}`,...d.parameters?.docs?.source},description:{story:`One card per season: the 11-rung ramp plus every solid surface, in both
Modes. All eight seasons land in a single screen, so this story doubles
as the one-snapshot VRT pin for "every season re-tints solid".`,...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Side by Side',
  argTypes: {
    seasonA: {
      description: 'Season applied to the left cell.',
      control: 'select',
      options: SEASON_IDS,
      table: {
        type: {
          summary: 'SeasonalThemeId'
        },
        defaultValue: {
          summary: 'season--spring-early'
        }
      }
    },
    seasonB: {
      description: 'Season applied to the right cell.',
      control: 'select',
      options: SEASON_IDS,
      table: {
        type: {
          summary: 'SeasonalThemeId'
        },
        defaultValue: {
          summary: 'season--winter-deep'
        }
      }
    },
    mode: {
      description: 'Mode for both cells (independent of the toolbar).',
      control: 'select',
      options: ['light', 'dark'],
      table: {
        type: {
          summary: '"light" | "dark"'
        },
        defaultValue: {
          summary: 'light'
        }
      }
    }
  },
  args: {
    seasonA: 'season--spring-early',
    seasonB: 'season--winter-deep',
    mode: 'light'
  },
  render: args => {
    const {
      seasonA,
      seasonB,
      mode
    } = args as {
      seasonA: SeasonalThemeId;
      seasonB: SeasonalThemeId;
      mode: Mode;
    };
    return <div className="p-6">
        <ScopedStyles />
        <div className="mx-auto max-w-5xl">
          <PageTitle>Side by Side</PageTitle>
          <Lead>
            Pick any two seasons and compare the identical component stack under each ramp. The
            default pair — spring-early (hue 12) vs winter-deep (hue 255) — is the widest hue
            contrast the eight palettes offer.
          </Lead>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {([['left', seasonA], ['right', seasonB]] as const).map(([slot, id]) => {
            const display = SEASONAL_DISPLAY.find(s => s.id === id);
            return <div key={slot} className="flex flex-col gap-2">
                  <header className="flex flex-wrap items-baseline gap-2">
                    <h2 className="font-semibold text-base text-foreground">{display?.label}</h2>
                    <span className="text-foreground-muted text-xs">{display?.colors}</span>
                    <span className="ml-auto font-mono text-foreground-subtle text-xs">{id}</span>
                  </header>
                  <SeasonCell mode={mode} season={id} className="p-4">
                    <SolidSample />
                  </SeasonCell>
                </div>;
          })}
          </div>
        </div>
      </div>;
  }
}`,...c.parameters?.docs?.source},description:{story:`Any two seasons, same component stack, side by side. Args bypass the
toolbar globals (like Theme Audit's Per Special) so the VRT spec can
drive the combination deterministically via the URL.`,...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Dashboard Mockup',
  argTypes: {
    season: {
      description: 'Seasonal palette applied to the whole mockup.',
      control: 'select',
      options: ['none', ...SEASON_IDS],
      table: {
        type: {
          summary: 'SeasonalThemeId | "none"'
        },
        defaultValue: {
          summary: 'season--spring-early'
        }
      }
    },
    mode: {
      description: 'Mode for the mockup (independent of the toolbar).',
      control: 'select',
      options: ['light', 'dark'],
      table: {
        type: {
          summary: '"light" | "dark"'
        },
        defaultValue: {
          summary: 'light'
        }
      }
    }
  },
  args: {
    season: 'season--spring-early',
    mode: 'light'
  },
  render: args => {
    const {
      season,
      mode
    } = args as {
      season: string;
      mode: Mode;
    };
    return <div className="p-6">
        <ScopedStyles />
        <div className="mx-auto max-w-6xl">
          <PageTitle>Dashboard Mockup</PageTitle>
          <Lead>
            A complete page built from lv1 components, wearing one seasonal ramp. The season flows
            through the solid family only — switch the season arg and watch the header mark, active
            nav item, primary buttons and Pro badge re-tint while state colors hold still.
          </Lead>
          <SeasonCell mode={mode} season={season === 'none' ? null : season as SeasonalThemeId} className="overflow-hidden">
            <Dashboard />
          </SeasonCell>
        </div>
      </div>;
  }
}`,...m.parameters?.docs?.source},description:{story:`How a whole page wears one season. The args bypass the toolbar globals so
the VRT spec drives season × mode via the URL; the representative VRT
pair (spring-early / winter-deep) pins composition drift — per-season
color values are already pinned by Theme Audit's per-special snapshots.`,...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Auto Season',
  argTypes: {
    date: {
      description: 'Date to resolve into a season. Set it to today to preview the live behavior.',
      control: 'date',
      table: {
        type: {
          summary: 'Date'
        }
      }
    },
    mode: {
      description: 'Mode for the preview cell (independent of the toolbar).',
      control: 'select',
      options: ['light', 'dark'],
      table: {
        type: {
          summary: '"light" | "dark"'
        },
        defaultValue: {
          summary: 'light'
        }
      }
    }
  },
  args: {
    date: AUTO_SEASON_DEFAULT_DATE,
    mode: 'light'
  },
  render: args => {
    const {
      date: raw,
      mode
    } = args as {
      date: number | string;
      mode: Mode;
    };
    // The date control round-trips as a ms timestamp, but a URL-driven arg
    // can arrive as a string — numeric strings are timestamps, anything
    // else (e.g. an ISO date) goes to the Date constructor as-is.
    const date = new Date(typeof raw === 'string' ? Number.isNaN(Number(raw)) ? raw : Number(raw) : raw);
    const season = getCurrentSeason(date);
    const id: SeasonalThemeId = \`season--\${season}\`;
    const display = SEASONAL_DISPLAY.find(s => s.id === id);
    return <div className="p-6">
        <ScopedStyles />
        <div className="mx-auto max-w-3xl">
          <PageTitle>Auto Season</PageTitle>
          <Lead>
            <code>getCurrentSeason(date)</code> maps any date onto the eight solar-term periods —
            drag the date control and watch the resolved palette change.
          </Lead>
          <div className="mb-4 flex flex-wrap items-baseline gap-2">
            <Text variant="heading" as="h2" size="md">
              {display?.label}
            </Text>
            <span className="text-foreground-muted text-sm">
              {display?.term} · {display?.colors}
            </span>
            <span className="ml-auto font-mono text-foreground-subtle text-xs">{id}</span>
          </div>
          <SeasonCell mode={mode} season={id} className="p-4">
            <SolidSample />
          </SeasonCell>
          <SectionTitle>Wiring it up</SectionTitle>
          <Note>
            Browser: call <code>applySeasonTheme()</code> once on load. SSR: spread{' '}
            <code>getSeasonAttribute()</code> onto the root element so the attribute is there before
            first paint. With the React provider, pass <code>defaultSpecial="auto-seasonal"</code>{' '}
            instead.
          </Note>
          <CodeBlock>{\`import { applySeasonTheme, getSeasonAttribute } from '@yasmro/schatten/themes/seasonal'
import { ThemeProvider } from '@yasmro/schatten/providers'

// Browser — sets data-theme="season--…" on <html>
applySeasonTheme()

// SSR (Astro / Next.js) — render the attribute before first paint
<html {...getSeasonAttribute()}>

// React — the provider resolves the season for you
<ThemeProvider defaultSpecial="auto-seasonal">…</ThemeProvider>\`}</CodeBlock>
        </div>
      </div>;
  }
}`,...p.parameters?.docs?.source},description:{story:"The auto-season demo: `getCurrentSeason(date)` maps a date onto the eight\nsolar-term periods. VRT skips this story — the season rendering is pinned\nby Eight Seasons, and the date → season mapping is pinned by\n`src/themes/seasonal/index.test.ts`.",...p.parameters?.docs?.description}}};const $e=["EightSeasons","SideBySide","DashboardMockup","AutoSeason"];export{p as AutoSeason,m as DashboardMockup,d as EightSeasons,c as SideBySide,$e as __namedExportsOrder,Ue as default};
