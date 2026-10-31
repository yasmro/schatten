import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-BjBoZifN.js";import{n,t as r}from"./Badge-Dc9Tzs5Y.js";import{n as i,t as a}from"./Button-CrACp7B-.js";import{n as o,t as s}from"./Callout-kiL83hgW.js";import{n as c,t as l}from"./Field-jNFiG_EB.js";import{n as u,t as d}from"./Input-DhT-ziJt.js";import{c as f,i as p,l as m,n as h,s as ee,t as g}from"./Select-6n9qIYlV.js";import{n as _,t as v}from"./Text-DYq6pGft.js";import{a as y,c as b,i as x,o as S,r as C,t as w}from"./docs-ui-CqZV3JrN.js";import{a as T,i as E,n as D,o as O,r as k,s as A,t as j}from"./scoped-theme-css-mZKp9dS-.js";import{n as M,r as N}from"./seasonal-CWCDZM9j.js";function P(){return(0,z.jsx)(`style`,{children:B})}function F({mode:e,season:t,className:n=``,children:r}){return(0,z.jsx)(`div`,{className:`seasonal-showcase-cell ${e===`dark`?`dark`:``} rounded-lg border border-border bg-background ${n}`,"data-theme":t??void 0,children:r})}function I(){return(0,z.jsx)(`div`,{className:`flex gap-1`,"aria-hidden":`true`,children:U.map(e=>(0,z.jsx)(`span`,{className:`h-5 flex-1 rounded-sm border border-border`,style:{backgroundColor:`var(--color-theme-${e})`},title:`theme-${e}`},e))})}function L(){return(0,z.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,z.jsx)(I,{}),(0,z.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,z.jsx)(a,{variant:`primary`,size:`sm`,children:`Primary`}),(0,z.jsx)(a,{variant:`secondary`,size:`sm`,children:`Secondary`}),(0,z.jsx)(a,{variant:`destructive`,size:`sm`,children:`Delete`}),(0,z.jsx)(r,{variant:`neutral`,appearance:`solid`,children:`Neutral`})]}),(0,z.jsx)(s,{variant:`neutral`,appearance:`solid`,title:`Seasonal surface`,children:`Solid surfaces ride the active seasonal ramp.`})]})}function R(){return(0,z.jsxs)(`div`,{className:`flex min-h-[600px] flex-col`,children:[(0,z.jsxs)(`header`,{className:`flex flex-wrap items-center gap-3 border-border border-b px-6 py-3`,children:[(0,z.jsx)(`span`,{className:`size-6 rounded bg-solid`,"aria-hidden":`true`}),(0,z.jsx)(v,{variant:`heading`,as:`span`,size:`md`,children:`Schatten Analytics`}),(0,z.jsx)(r,{variant:`neutral`,appearance:`solid`,children:`Pro`}),(0,z.jsxs)(`div`,{className:`ml-auto flex items-center gap-2`,children:[(0,z.jsx)(a,{variant:`secondary`,size:`sm`,children:`Export`}),(0,z.jsx)(a,{variant:`primary`,size:`sm`,children:`New report`})]})]}),(0,z.jsxs)(`div`,{className:`flex flex-1`,children:[(0,z.jsx)(`nav`,{"aria-label":`Dashboard sections`,className:`w-44 border-border border-r p-3`,children:(0,z.jsx)(`ul`,{className:`flex flex-col gap-1`,children:q.map((e,t)=>(0,z.jsx)(`li`,{children:(0,z.jsx)(`a`,{href:`#overview`,"aria-current":t===0?`page`:void 0,className:t===0?`block rounded bg-solid px-3 py-1.5 font-medium text-sm text-solid-foreground`:`block rounded px-3 py-1.5 text-foreground-muted text-sm hover:bg-surface-hover`,children:e})},e))})}),(0,z.jsxs)(`main`,{className:`flex flex-1 flex-col gap-4 p-6`,children:[(0,z.jsx)(v,{variant:`heading`,as:`h2`,size:`lg`,id:`overview`,children:`Overview`}),(0,z.jsx)(`div`,{className:`grid grid-cols-1 gap-4 sm:grid-cols-3`,children:J.map(e=>(0,z.jsxs)(`div`,{className:`flex flex-col items-start gap-1 rounded-lg border border-border bg-surface p-4`,children:[(0,z.jsx)(v,{variant:`label`,as:`span`,size:`sm`,color:`muted`,children:e.label}),(0,z.jsx)(v,{variant:`heading`,as:`span`,size:`xl`,children:e.value}),(0,z.jsx)(r,{variant:e.tone,appearance:`subtle`,children:e.delta})]},e.label))}),(0,z.jsx)(s,{variant:`info`,appearance:`subtle`,title:`Pinned colors`,children:`State colors stay put: info is always blue and destructive is always red, whichever season is active.`}),(0,z.jsxs)(`section`,{className:`flex max-w-xl flex-col gap-3 rounded-lg border border-border bg-surface p-4`,children:[(0,z.jsx)(v,{variant:`heading`,as:`h3`,size:`sm`,children:`New report`}),(0,z.jsx)(l,{label:`Report name`,children:(0,z.jsx)(d,{placeholder:`Q2 retention`})}),(0,z.jsx)(l,{label:`Period`,children:(0,z.jsxs)(g,{defaultValue:`quarter`,children:[(0,z.jsx)(ee,{children:(0,z.jsx)(f,{placeholder:`Select period`})}),(0,z.jsxs)(h,{children:[(0,z.jsx)(p,{value:`week`,children:`Last week`}),(0,z.jsx)(p,{value:`quarter`,children:`Last quarter`}),(0,z.jsx)(p,{value:`year`,children:`Last year`})]})]})}),(0,z.jsxs)(`div`,{className:`flex gap-2`,children:[(0,z.jsx)(a,{variant:`primary`,size:`sm`,children:`Create`}),(0,z.jsx)(a,{variant:`tertiary`,size:`sm`,children:`Cancel`})]})]})]})]})]})}var z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{n(),i(),o(),c(),u(),m(),_(),O(),N(),E(),b(),k(),z=t(),B=D(`.seasonal-showcase-cell`,{semanticCss:A,seasonalCss:T}),V=[`light`,`dark`],H=j.map(e=>e.id),U=[50,100,200,300,400,500,600,700,800,900,950],W={title:`Theming/Seasonal Showcase`,tags:[`!dev`],parameters:{layout:`fullscreen`}},G={name:`Eight Seasons`,render:()=>(0,z.jsxs)(`div`,{className:`p-6`,children:[(0,z.jsx)(P,{}),(0,z.jsxs)(`div`,{className:`mx-auto max-w-6xl`,children:[(0,z.jsx)(y,{children:`Seasonal Showcase`}),(0,z.jsx)(C,{children:`Schatten ships eight seasonal palettes based on the 24 solar terms (二十四節気) and Japanese traditional colors. A Special supplies the theme ramp and the Mode picks the rungs, so every solid surface — Button primary, the neutral solid Badge and Callout — re-tints per season, while destructive red and info blue stay pinned.`}),(0,z.jsx)(`div`,{className:`grid grid-cols-1 gap-4 md:grid-cols-2`,children:j.map(e=>(0,z.jsxs)(`section`,{className:`flex flex-col gap-2 rounded-xl border border-border p-4`,children:[(0,z.jsxs)(`header`,{className:`flex flex-wrap items-baseline gap-2`,children:[(0,z.jsx)(`h2`,{className:`font-semibold text-foreground text-lg`,children:e.label}),(0,z.jsxs)(`span`,{className:`text-foreground-muted text-xs`,children:[e.term,` · `,e.colors]}),(0,z.jsx)(`span`,{className:`ml-auto font-mono text-foreground-muted text-xs`,children:e.id})]}),V.map(t=>(0,z.jsx)(F,{mode:t,season:e.id,className:`p-4`,children:(0,z.jsx)(L,{})},t))]},e.id))})]})]})},K={name:`Side by Side`,argTypes:{seasonA:{description:`Season applied to the left cell.`,control:`select`,options:H,table:{type:{summary:`SeasonalThemeId`},defaultValue:{summary:`season--spring-early`}}},seasonB:{description:`Season applied to the right cell.`,control:`select`,options:H,table:{type:{summary:`SeasonalThemeId`},defaultValue:{summary:`season--winter-deep`}}},mode:{description:`Mode for both cells (independent of the toolbar).`,control:`select`,options:[`light`,`dark`],table:{type:{summary:`"light" | "dark"`},defaultValue:{summary:`light`}}}},args:{seasonA:`season--spring-early`,seasonB:`season--winter-deep`,mode:`light`},render:e=>{let{seasonA:t,seasonB:n,mode:r}=e;return(0,z.jsxs)(`div`,{className:`p-6`,children:[(0,z.jsx)(P,{}),(0,z.jsxs)(`div`,{className:`mx-auto max-w-5xl`,children:[(0,z.jsx)(y,{children:`Side by Side`}),(0,z.jsx)(C,{children:`Pick any two seasons and compare the identical component stack under each ramp. The default pair — spring-early (hue 12) vs winter-deep (hue 255) — is the widest hue contrast the eight palettes offer.`}),(0,z.jsx)(`div`,{className:`grid grid-cols-1 gap-4 md:grid-cols-2`,children:[[`left`,t],[`right`,n]].map(([e,t])=>{let n=j.find(e=>e.id===t);return(0,z.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,z.jsxs)(`header`,{className:`flex flex-wrap items-baseline gap-2`,children:[(0,z.jsx)(`h2`,{className:`font-semibold text-base text-foreground`,children:n?.label}),(0,z.jsx)(`span`,{className:`text-foreground-muted text-xs`,children:n?.colors}),(0,z.jsx)(`span`,{className:`ml-auto font-mono text-foreground-muted text-xs`,children:t})]}),(0,z.jsx)(F,{mode:r,season:t,className:`p-4`,children:(0,z.jsx)(L,{})})]},e)})})]})]})}},q=[`Overview`,`Reports`,`Audiences`,`Settings`],J=[{label:`Sessions`,value:`24.3k`,delta:`+12.4%`,tone:`success`},{label:`Sign-ups`,value:`1,208`,delta:`+3.1%`,tone:`success`},{label:`Churn`,value:`0.8%`,delta:`-0.2%`,tone:`error`}],Y={name:`Dashboard Mockup`,argTypes:{season:{description:`Seasonal palette applied to the whole mockup.`,control:`select`,options:[`none`,...H],table:{type:{summary:`SeasonalThemeId | "none"`},defaultValue:{summary:`season--spring-early`}}},mode:{description:`Mode for the mockup (independent of the toolbar).`,control:`select`,options:[`light`,`dark`],table:{type:{summary:`"light" | "dark"`},defaultValue:{summary:`light`}}}},args:{season:`season--spring-early`,mode:`light`},render:e=>{let{season:t,mode:n}=e;return(0,z.jsxs)(`div`,{className:`p-6`,children:[(0,z.jsx)(P,{}),(0,z.jsxs)(`div`,{className:`mx-auto max-w-6xl`,children:[(0,z.jsx)(y,{children:`Dashboard Mockup`}),(0,z.jsx)(C,{children:`A complete page built from lv1 components, wearing one seasonal ramp. The season flows through the solid family only — switch the season arg and watch the header mark, active nav item, primary buttons and Pro badge re-tint while state colors hold still.`}),(0,z.jsx)(F,{mode:n,season:t===`none`?null:t,className:`overflow-hidden`,children:(0,z.jsx)(R,{})})]})]})}},X=Date.UTC(2026,3,1),Z={name:`Auto Season`,argTypes:{date:{description:`Date to resolve into a season. Set it to today to preview the live behavior.`,control:`date`,table:{type:{summary:`Date`}}},mode:{description:`Mode for the preview cell (independent of the toolbar).`,control:`select`,options:[`light`,`dark`],table:{type:{summary:`"light" | "dark"`},defaultValue:{summary:`light`}}}},args:{date:X,mode:`light`},render:e=>{let{date:t,mode:n}=e,r=new Date(typeof t==`string`?Number.isNaN(Number(t))?t:Number(t):t),i=`season--${M(r)}`,a=j.find(e=>e.id===i);return(0,z.jsxs)(`div`,{className:`p-6`,children:[(0,z.jsx)(P,{}),(0,z.jsxs)(`div`,{className:`mx-auto max-w-3xl`,children:[(0,z.jsx)(y,{children:`Auto Season`}),(0,z.jsxs)(C,{children:[(0,z.jsx)(`code`,{children:`getCurrentSeason(date)`}),` maps any date onto the eight solar-term periods — drag the date control and watch the resolved palette change.`]}),(0,z.jsxs)(`div`,{className:`mb-4 flex flex-wrap items-baseline gap-2`,children:[(0,z.jsx)(v,{variant:`heading`,as:`h2`,size:`md`,children:a?.label}),(0,z.jsxs)(`span`,{className:`text-foreground-muted text-sm`,children:[a?.term,` · `,a?.colors]}),(0,z.jsx)(`span`,{className:`ml-auto font-mono text-foreground-muted text-xs`,children:i})]}),(0,z.jsx)(F,{mode:n,season:i,className:`p-4`,children:(0,z.jsx)(L,{})}),(0,z.jsx)(S,{children:`Wiring it up`}),(0,z.jsxs)(x,{children:[`Browser: call `,(0,z.jsx)(`code`,{children:`applySeasonTheme()`}),` once on load. SSR: spread`,` `,(0,z.jsx)(`code`,{children:`getSeasonAttribute()`}),` onto the root element so the attribute is there before first paint. With the React provider, pass `,(0,z.jsx)(`code`,{children:`defaultSpecial="auto-seasonal"`}),` `,`instead.`]}),(0,z.jsx)(w,{children:`import { applySeasonTheme, getSeasonAttribute } from '@yasmro/schatten/themes/seasonal'
import { ThemeProvider } from '@yasmro/schatten/providers'

// Browser — sets data-theme="season--…" on <html>
applySeasonTheme()

// SSR (Astro / Next.js) — render the attribute before first paint
<html {...getSeasonAttribute()}>

// React — the provider resolves the season for you
<ThemeProvider defaultSpecial="auto-seasonal">…</ThemeProvider>`})]})]})}},Q=[`EightSeasons`,`SideBySide`,`DashboardMockup`,`AutoSeason`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
                <span className="ml-auto font-mono text-foreground-muted text-xs">{s.id}</span>
              </header>
              {MODES.map(m => <SeasonCell key={m} mode={m} season={s.id} className="p-4">
                  <SolidSample />
                </SeasonCell>)}
            </section>)}
        </div>
      </div>
    </div>
}`,...G.parameters?.docs?.source},description:{story:`One card per season: the 11-rung ramp plus every solid surface, in both
Modes. All eight seasons land in a single screen, so this story doubles
as the one-snapshot VRT pin for "every season re-tints solid".`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
                    <span className="ml-auto font-mono text-foreground-muted text-xs">{id}</span>
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
}`,...K.parameters?.docs?.source},description:{story:`Any two seasons, same component stack, side by side. Args bypass the
toolbar globals (like Theme Audit's Per Special) so the VRT spec can
drive the combination deterministically via the URL.`,...K.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`How a whole page wears one season. The args bypass the toolbar globals so
the VRT spec drives season × mode via the URL; the representative VRT
pair (spring-early / winter-deep) pins composition drift — per-season
color values are already pinned by Theme Audit's per-special snapshots.`,...Y.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
            <span className="ml-auto font-mono text-foreground-muted text-xs">{id}</span>
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
}`,...Z.parameters?.docs?.source},description:{story:"The auto-season demo: `getCurrentSeason(date)` maps a date onto the eight\nsolar-term periods. VRT skips this story — the season rendering is pinned\nby Eight Seasons, and the date → season mapping is pinned by\n`src/themes/seasonal/index.test.ts`.",...Z.parameters?.docs?.description}}}})))()}$();export{Z as AutoSeason,Y as DashboardMockup,G as EightSeasons,K as SideBySide,Q as __namedExportsOrder,W as default};