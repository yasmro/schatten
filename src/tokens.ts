/**
 * Schatten Design Tokens — TypeScript export of CSS custom properties.
 *
 * CSS is the single source of truth (see `src/core/tokens/*.css`); this file
 * is a thin, typed pointer layer so AI / IDE completion can surface the set
 * of design tokens available in the system.
 *
 * Prefer Tailwind utilities (`bg-error`, `text-foreground-muted`, …) for
 * everyday styling. Reach for `tokens` only when you need a CSS variable
 * reference in inline style, CSS-in-JS, or other non-class contexts.
 */

export const tokens = {
  color: {
    // Surfaces
    background: 'var(--color-background)',
    surface: 'var(--color-surface)',
    surfaceHover: 'var(--color-surface-hover)',

    // Foreground tiers (most → least prominent)
    foreground: 'var(--color-foreground)',
    foregroundMuted: 'var(--color-foreground-muted)',
    foregroundSubtle: 'var(--color-foreground-subtle)',

    // Solid (filled component backgrounds)
    solid: 'var(--color-solid)',
    solidHover: 'var(--color-solid-hover)',
    solidForeground: 'var(--color-solid-foreground)',
    solidForegroundHover: 'var(--color-solid-foreground-hover)',

    // Destructive (action color — shares vermillion with `error`)
    destructive: 'var(--color-destructive)',
    destructiveHover: 'var(--color-destructive-hover)',
    destructiveForeground: 'var(--color-destructive-foreground)',
    destructiveSubtle: 'var(--color-destructive-subtle)',

    // Accent
    accent: 'var(--color-accent)',
    accentForeground: 'var(--color-accent-foreground)',

    // Borders
    border: 'var(--color-border)',
    borderStrong: 'var(--color-border-strong)',

    // Focus ring
    ring: 'var(--color-ring)',
    ringOffset: 'var(--color-ring-offset)',

    // Inverted foreground tiers (text on saturated / dark fills)
    invertedForeground: 'var(--color-inverted-foreground)',
    invertedForegroundMuted: 'var(--color-inverted-foreground-muted)',
    invertedForegroundSubtle: 'var(--color-inverted-foreground-subtle)',

    // Theme scale (overridable per Special theme via [data-theme])
    theme50: 'var(--color-theme-50)',
    theme100: 'var(--color-theme-100)',
    theme200: 'var(--color-theme-200)',
    theme300: 'var(--color-theme-300)',
    theme400: 'var(--color-theme-400)',
    theme500: 'var(--color-theme-500)',
    theme600: 'var(--color-theme-600)',
    theme700: 'var(--color-theme-700)',
    theme800: 'var(--color-theme-800)',
    theme900: 'var(--color-theme-900)',
    theme950: 'var(--color-theme-950)',

    // State — error
    error: 'var(--color-error)',
    errorHover: 'var(--color-error-hover)',
    errorForeground: 'var(--color-error-foreground)',
    errorSubtle: 'var(--color-error-subtle)',

    // State — success
    success: 'var(--color-success)',
    successHover: 'var(--color-success-hover)',
    successForeground: 'var(--color-success-foreground)',
    successSubtle: 'var(--color-success-subtle)',

    // State — warning
    warning: 'var(--color-warning)',
    warningHover: 'var(--color-warning-hover)',
    warningForeground: 'var(--color-warning-foreground)',
    warningSubtle: 'var(--color-warning-subtle)',

    // State — info (pinned to blue, independent of the theme scale)
    info: 'var(--color-info)',
    infoHover: 'var(--color-info-hover)',
    infoForeground: 'var(--color-info-foreground)',
    infoSubtle: 'var(--color-info-subtle)',
  },

  spacing: {
    0: 'var(--spacing-0)',
    px: 'var(--spacing-px)',
    '0.5': 'var(--spacing-0-5)',
    1: 'var(--spacing-1)',
    '1.5': 'var(--spacing-1-5)',
    2: 'var(--spacing-2)',
    '2.5': 'var(--spacing-2-5)',
    3: 'var(--spacing-3)',
    '3.5': 'var(--spacing-3-5)',
    4: 'var(--spacing-4)',
    5: 'var(--spacing-5)',
    6: 'var(--spacing-6)',
    7: 'var(--spacing-7)',
    8: 'var(--spacing-8)',
    9: 'var(--spacing-9)',
    10: 'var(--spacing-10)',
    12: 'var(--spacing-12)',
    14: 'var(--spacing-14)',
    16: 'var(--spacing-16)',
    20: 'var(--spacing-20)',
    24: 'var(--spacing-24)',
  },

  radius: {
    none: 'var(--radius-none)',
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)',
    '2xl': 'var(--radius-2xl)',
    full: 'var(--radius-full)',
  },

  shadow: {
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
    xl: 'var(--shadow-xl)',
  },

  transition: {
    fast: 'var(--transition-fast)',
    normal: 'var(--transition-normal)',
    slow: 'var(--transition-slow)',
  },

  zIndex: {
    base: 'var(--z-base)',
    dropdown: 'var(--z-dropdown)',
    sticky: 'var(--z-sticky)',
    fixed: 'var(--z-fixed)',
    modalBackdrop: 'var(--z-modal-backdrop)',
    modal: 'var(--z-modal)',
    popover: 'var(--z-popover)',
    tooltip: 'var(--z-tooltip)',
    toast: 'var(--z-toast)',
  },

  font: {
    sans: 'var(--font-sans)',
    serif: 'var(--font-serif)',
    mono: 'var(--font-mono)',
  },

  fontSize: {
    xs: 'var(--text-xs)',
    sm: 'var(--text-sm)',
    base: 'var(--text-base)',
    lg: 'var(--text-lg)',
    xl: 'var(--text-xl)',
    '2xl': 'var(--text-2xl)',
    '3xl': 'var(--text-3xl)',
    '4xl': 'var(--text-4xl)',
  },

  lineHeight: {
    none: 'var(--leading-none)',
    tight: 'var(--leading-tight)',
    snug: 'var(--leading-snug)',
    normal: 'var(--leading-normal)',
    relaxed: 'var(--leading-relaxed)',
    loose: 'var(--leading-loose)',
  },

  fontWeight: {
    normal: 'var(--font-normal)',
    medium: 'var(--font-medium)',
    semibold: 'var(--font-semibold)',
    bold: 'var(--font-bold)',
  },

  letterSpacing: {
    tighter: 'var(--tracking-tighter)',
    tight: 'var(--tracking-tight)',
    normal: 'var(--tracking-normal)',
    wide: 'var(--tracking-wide)',
    wider: 'var(--tracking-wider)',
  },
} as const

export type ColorToken = keyof typeof tokens.color
export type SpacingToken = keyof typeof tokens.spacing
export type RadiusToken = keyof typeof tokens.radius
export type ShadowToken = keyof typeof tokens.shadow
export type TransitionToken = keyof typeof tokens.transition
export type ZIndexToken = keyof typeof tokens.zIndex
export type FontToken = keyof typeof tokens.font
export type FontSizeToken = keyof typeof tokens.fontSize
export type LineHeightToken = keyof typeof tokens.lineHeight
export type FontWeightToken = keyof typeof tokens.fontWeight
export type LetterSpacingToken = keyof typeof tokens.letterSpacing
