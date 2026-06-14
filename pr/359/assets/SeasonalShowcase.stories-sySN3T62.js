import{i as e}from"./preload-helper-BwGARNBo.js";import{t}from"./iframe-Dc0mLLnz.js";import{t as n}from"./Badge-CLP_PO7k.js";import{t as r}from"./Button-BGdGuDrw.js";import{t as i}from"./Callout-DdZx91JX.js";import{t as a}from"./Button-DVk4NUXC.js";import{t as o}from"./Input-QjhTX4Ha.js";import{t as s}from"./Field-C627VQCD.js";import{c,i as l,n as u,s as d,t as f}from"./Select-HfpzpoTY.js";import{t as p}from"./Text-DsFE5Tgy.js";import{a as m,c as h,i as g,o as _,r as v,t as y}from"./docs-ui-Da22FkRD.js";import{t as b}from"./Badge-DxG5lf1G.js";import{t as x}from"./Callout-C-nu129u.js";import{n as S,r as C,t as w}from"./Select-ClkhwUTy.js";import{t as T}from"./Text-06Lx25G6.js";import{a as E,i as D,n as O,o as k,r as A,s as j,t as M}from"./scoped-theme-css-Chlp6pVc.js";import{n as N,r as P}from"./seasonal-DOPUY_R0.js";function F(){return(0,B.jsx)(`style`,{children:V})}function I({mode:e,season:t,className:n=``,children:r}){return(0,B.jsx)(`div`,{className:`seasonal-showcase-cell ${e===`dark`?`dark`:``} rounded-lg border border-border bg-background ${n}`,"data-theme":t??void 0,children:r})}function L(){return(0,B.jsx)(`div`,{className:`flex gap-1`,"aria-hidden":`true`,children:W.map(e=>(0,B.jsx)(`span`,{className:`h-5 flex-1 rounded-sm border border-border`,style:{backgroundColor:`var(--color-theme-${e})`},title:`theme-${e}`},e))})}function R(){return(0,B.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,B.jsx)(L,{}),(0,B.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,B.jsx)(r,{variant:`primary`,size:`sm`,children:`Primary`}),(0,B.jsx)(r,{variant:`secondary`,size:`sm`,children:`Secondary`}),(0,B.jsx)(r,{variant:`destructive`,size:`sm`,children:`Delete`}),(0,B.jsx)(n,{variant:`neutral`,appearance:`solid`,children:`Neutral`})]}),(0,B.jsx)(i,{variant:`neutral`,appearance:`solid`,title:`Seasonal surface`,children:`Solid surfaces ride the active seasonal ramp.`})]})}function z(){return(0,B.jsxs)(`div`,{className:`flex min-h-[600px] flex-col`,children:[(0,B.jsxs)(`header`,{className:`flex flex-wrap items-center gap-3 border-border border-b px-6 py-3`,children:[(0,B.jsx)(`span`,{className:`size-6 rounded bg-solid`,"aria-hidden":`true`}),(0,B.jsx)(p,{variant:`heading`,as:`span`,size:`md`,children:`Schatten Analytics`}),(0,B.jsx)(n,{variant:`neutral`,appearance:`solid`,children:`Pro`}),(0,B.jsxs)(`div`,{className:`ml-auto flex items-center gap-2`,children:[(0,B.jsx)(r,{variant:`secondary`,size:`sm`,children:`Export`}),(0,B.jsx)(r,{variant:`primary`,size:`sm`,children:`New report`})]})]}),(0,B.jsxs)(`div`,{className:`flex flex-1`,children:[(0,B.jsx)(`nav`,{"aria-label":`Dashboard sections`,className:`w-44 border-border border-r p-3`,children:(0,B.jsx)(`ul`,{className:`flex flex-col gap-1`,children:J.map((e,t)=>(0,B.jsx)(`li`,{children:(0,B.jsx)(`a`,{href:`#overview`,"aria-current":t===0?`page`:void 0,className:t===0?`block rounded bg-solid px-3 py-1.5 font-medium text-sm text-solid-foreground`:`block rounded px-3 py-1.5 text-foreground-muted text-sm hover:bg-surface-hover`,children:e})},e))})}),(0,B.jsxs)(`main`,{className:`flex flex-1 flex-col gap-4 p-6`,children:[(0,B.jsx)(p,{variant:`heading`,as:`h2`,size:`lg`,id:`overview`,children:`Overview`}),(0,B.jsx)(`div`,{className:`grid grid-cols-1 gap-4 sm:grid-cols-3`,children:Y.map(e=>(0,B.jsxs)(`div`,{className:`flex flex-col items-start gap-1 rounded-lg border border-border bg-surface p-4`,children:[(0,B.jsx)(p,{variant:`label`,as:`span`,size:`sm`,color:`muted`,children:e.label}),(0,B.jsx)(p,{variant:`heading`,as:`span`,size:`xl`,children:e.value}),(0,B.jsx)(n,{variant:e.tone,appearance:`subtle`,children:e.delta})]},e.label))}),(0,B.jsx)(i,{variant:`info`,appearance:`subtle`,title:`Pinned colors`,children:`State colors stay put: info is always blue and destructive is always red, whichever season is active.`}),(0,B.jsxs)(`section`,{className:`flex max-w-xl flex-col gap-3 rounded-lg border border-border bg-surface p-4`,children:[(0,B.jsx)(p,{variant:`heading`,as:`h3`,size:`sm`,children:`New report`}),(0,B.jsx)(s,{label:`Report name`,children:(0,B.jsx)(o,{placeholder:`Q2 retention`})}),(0,B.jsx)(s,{label:`Period`,children:(0,B.jsxs)(f,{defaultValue:`quarter`,children:[(0,B.jsx)(d,{children:(0,B.jsx)(c,{placeholder:`Select period`})}),(0,B.jsxs)(u,{children:[(0,B.jsx)(l,{value:`week`,children:`Last week`}),(0,B.jsx)(l,{value:`quarter`,children:`Last quarter`}),(0,B.jsx)(l,{value:`year`,children:`Last year`})]})]})}),(0,B.jsxs)(`div`,{className:`flex gap-2`,children:[(0,B.jsx)(r,{variant:`primary`,size:`sm`,children:`Create`}),(0,B.jsx)(r,{variant:`tertiary`,size:`sm`,children:`Cancel`})]})]})]})]})]})}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{b(),a(),x(),C(),S(),w(),T(),k(),P(),D(),h(),A(),B=t(),V=O(`.seasonal-showcase-cell`,{semanticCss:j,seasonalCss:E}),H=[`light`,`dark`],U=M.map(e=>e.id),W=[50,100,200,300,400,500,600,700,800,900,950],G={title:`Theming/Seasonal Showcase`,parameters:{layout:`fullscreen`}},K={name:`Eight Seasons`,render:()=>(0,B.jsxs)(`div`,{className:`p-6`,children:[(0,B.jsx)(F,{}),(0,B.jsxs)(`div`,{className:`mx-auto max-w-6xl`,children:[(0,B.jsx)(m,{children:`Seasonal Showcase`}),(0,B.jsx)(v,{children:`Schatten ships eight seasonal palettes based on the 24 solar terms (二十四節気) and Japanese traditional colors. A Special supplies the theme ramp and the Mode picks the rungs, so every solid surface — Button primary, the neutral solid Badge and Callout — re-tints per season, while destructive red and info blue stay pinned.`}),(0,B.jsx)(`div`,{className:`grid grid-cols-1 gap-4 md:grid-cols-2`,children:M.map(e=>(0,B.jsxs)(`section`,{className:`flex flex-col gap-2 rounded-xl border border-border p-4`,children:[(0,B.jsxs)(`header`,{className:`flex flex-wrap items-baseline gap-2`,children:[(0,B.jsx)(`h2`,{className:`font-semibold text-foreground text-lg`,children:e.label}),(0,B.jsxs)(`span`,{className:`text-foreground-muted text-xs`,children:[e.term,` · `,e.colors]}),(0,B.jsx)(`span`,{className:`ml-auto font-mono text-foreground-subtle text-xs`,children:e.id})]}),H.map(t=>(0,B.jsx)(I,{mode:t,season:e.id,className:`p-4`,children:(0,B.jsx)(R,{})},t))]},e.id))})]})]})},q={name:`Side by Side`,argTypes:{seasonA:{description:`Season applied to the left cell.`,control:`select`,options:U,table:{type:{summary:`SeasonalThemeId`},defaultValue:{summary:`season--spring-early`}}},seasonB:{description:`Season applied to the right cell.`,control:`select`,options:U,table:{type:{summary:`SeasonalThemeId`},defaultValue:{summary:`season--winter-deep`}}},mode:{description:`Mode for both cells (independent of the toolbar).`,control:`select`,options:[`light`,`dark`],table:{type:{summary:`"light" | "dark"`},defaultValue:{summary:`light`}}}},args:{seasonA:`season--spring-early`,seasonB:`season--winter-deep`,mode:`light`},render:e=>{let{seasonA:t,seasonB:n,mode:r}=e;return(0,B.jsxs)(`div`,{className:`p-6`,children:[(0,B.jsx)(F,{}),(0,B.jsxs)(`div`,{className:`mx-auto max-w-5xl`,children:[(0,B.jsx)(m,{children:`Side by Side`}),(0,B.jsx)(v,{children:`Pick any two seasons and compare the identical component stack under each ramp. The default pair — spring-early (hue 12) vs winter-deep (hue 255) — is the widest hue contrast the eight palettes offer.`}),(0,B.jsx)(`div`,{className:`grid grid-cols-1 gap-4 md:grid-cols-2`,children:[[`left`,t],[`right`,n]].map(([e,t])=>{let n=M.find(e=>e.id===t);return(0,B.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,B.jsxs)(`header`,{className:`flex flex-wrap items-baseline gap-2`,children:[(0,B.jsx)(`h2`,{className:`font-semibold text-base text-foreground`,children:n?.label}),(0,B.jsx)(`span`,{className:`text-foreground-muted text-xs`,children:n?.colors}),(0,B.jsx)(`span`,{className:`ml-auto font-mono text-foreground-subtle text-xs`,children:t})]}),(0,B.jsx)(I,{mode:r,season:t,className:`p-4`,children:(0,B.jsx)(R,{})})]},e)})})]})]})}},J=[`Overview`,`Reports`,`Audiences`,`Settings`],Y=[{label:`Sessions`,value:`24.3k`,delta:`+12.4%`,tone:`success`},{label:`Sign-ups`,value:`1,208`,delta:`+3.1%`,tone:`success`},{label:`Churn`,value:`0.8%`,delta:`-0.2%`,tone:`error`}],X={name:`Dashboard Mockup`,argTypes:{season:{description:`Seasonal palette applied to the whole mockup.`,control:`select`,options:[`none`,...U],table:{type:{summary:`SeasonalThemeId | "none"`},defaultValue:{summary:`season--spring-early`}}},mode:{description:`Mode for the mockup (independent of the toolbar).`,control:`select`,options:[`light`,`dark`],table:{type:{summary:`"light" | "dark"`},defaultValue:{summary:`light`}}}},args:{season:`season--spring-early`,mode:`light`},render:e=>{let{season:t,mode:n}=e;return(0,B.jsxs)(`div`,{className:`p-6`,children:[(0,B.jsx)(F,{}),(0,B.jsxs)(`div`,{className:`mx-auto max-w-6xl`,children:[(0,B.jsx)(m,{children:`Dashboard Mockup`}),(0,B.jsx)(v,{children:`A complete page built from lv1 components, wearing one seasonal ramp. The season flows through the solid family only — switch the season arg and watch the header mark, active nav item, primary buttons and Pro badge re-tint while state colors hold still.`}),(0,B.jsx)(I,{mode:n,season:t===`none`?null:t,className:`overflow-hidden`,children:(0,B.jsx)(z,{})})]})]})}},Z=Date.UTC(2026,3,1),Q={name:`Auto Season`,argTypes:{date:{description:`Date to resolve into a season. Set it to today to preview the live behavior.`,control:`date`,table:{type:{summary:`Date`}}},mode:{description:`Mode for the preview cell (independent of the toolbar).`,control:`select`,options:[`light`,`dark`],table:{type:{summary:`"light" | "dark"`},defaultValue:{summary:`light`}}}},args:{date:Z,mode:`light`},render:e=>{let{date:t,mode:n}=e,r=`season--${N(new Date(typeof t==`string`?Number.isNaN(Number(t))?t:Number(t):t))}`,i=M.find(e=>e.id===r);return(0,B.jsxs)(`div`,{className:`p-6`,children:[(0,B.jsx)(F,{}),(0,B.jsxs)(`div`,{className:`mx-auto max-w-3xl`,children:[(0,B.jsx)(m,{children:`Auto Season`}),(0,B.jsxs)(v,{children:[(0,B.jsx)(`code`,{children:`getCurrentSeason(date)`}),` maps any date onto the eight solar-term periods — drag the date control and watch the resolved palette change.`]}),(0,B.jsxs)(`div`,{className:`mb-4 flex flex-wrap items-baseline gap-2`,children:[(0,B.jsx)(p,{variant:`heading`,as:`h2`,size:`md`,children:i?.label}),(0,B.jsxs)(`span`,{className:`text-foreground-muted text-sm`,children:[i?.term,` · `,i?.colors]}),(0,B.jsx)(`span`,{className:`ml-auto font-mono text-foreground-subtle text-xs`,children:r})]}),(0,B.jsx)(I,{mode:n,season:r,className:`p-4`,children:(0,B.jsx)(R,{})}),(0,B.jsx)(_,{children:`Wiring it up`}),(0,B.jsxs)(g,{children:[`Browser: call `,(0,B.jsx)(`code`,{children:`applySeasonTheme()`}),` once on load. SSR: spread`,` `,(0,B.jsx)(`code`,{children:`getSeasonAttribute()`}),` onto the root element so the attribute is there before first paint. With the React provider, pass `,(0,B.jsx)(`code`,{children:`defaultSpecial="auto-seasonal"`}),` `,`instead.`]}),(0,B.jsx)(y,{children:`import { applySeasonTheme, getSeasonAttribute } from '@yasmro/schatten/themes/seasonal'
import { ThemeProvider } from '@yasmro/schatten/providers'

// Browser — sets data-theme="season--…" on <html>
applySeasonTheme()

// SSR (Astro / Next.js) — render the attribute before first paint
<html {...getSeasonAttribute()}>

// React — the provider resolves the season for you
<ThemeProvider defaultSpecial="auto-seasonal">…</ThemeProvider>`})]})]})}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source},description:{story:`One card per season: the 11-rung ramp plus every solid surface, in both
Modes. All eight seasons land in a single screen, so this story doubles
as the one-snapshot VRT pin for "every season re-tints solid".`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:`Any two seasons, same component stack, side by side. Args bypass the
toolbar globals (like Theme Audit's Per Special) so the VRT spec can
drive the combination deterministically via the URL.`,...q.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`How a whole page wears one season. The args bypass the toolbar globals so
the VRT spec drives season × mode via the URL; the representative VRT
pair (spring-early / winter-deep) pins composition drift — per-season
color values are already pinned by Theme Audit's per-special snapshots.`,...X.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:"The auto-season demo: `getCurrentSeason(date)` maps a date onto the eight\nsolar-term periods. VRT skips this story — the season rendering is pinned\nby Eight Seasons, and the date → season mapping is pinned by\n`src/themes/seasonal/index.test.ts`.",...Q.parameters?.docs?.description}}},$=[`EightSeasons`,`SideBySide`,`DashboardMockup`,`AutoSeason`]}))();export{Q as AutoSeason,X as DashboardMockup,K as EightSeasons,q as SideBySide,$ as __namedExportsOrder,G as default};