import { buildThemeInitScript, THEME_INIT_SCRIPT } from '../../theme-init'

export interface ThemeInitScriptProps {
  /**
   * CSP `nonce` forwarded to the rendered `<script>`. Supply this when your
   * Content-Security-Policy uses a nonce allowlist for inline scripts.
   */
  nonce?: string
  /**
   * `localStorage` key the snippet reads. Must match the `storageKey` passed
   * to `<ThemeProvider>` — a mismatch silently defeats FOUC avoidance.
   * @default 'schatten-theme'
   */
  storageKey?: string
}

/**
 * Renders the synchronous FOUC-avoidance `<script>` for the first paint.
 *
 * Place it in your document `<head>`, before any stylesheet, so the persisted
 * Mode (`.dark`) and Special (`data-theme`) are applied before the browser
 * paints — avoiding a flash of the light/default theme. The script body is
 * {@link THEME_INIT_SCRIPT} for the default key, or a key-specific build from
 * {@link buildThemeInitScript} when `storageKey` is customized.
 *
 * For non-React documents, inline {@link THEME_INIT_SCRIPT} as a string
 * instead of rendering this component.
 */
export function ThemeInitScript({ nonce, storageKey = 'schatten-theme' }: ThemeInitScriptProps) {
  const script =
    storageKey === 'schatten-theme' ? THEME_INIT_SCRIPT : buildThemeInitScript(storageKey)
  return (
    // oxlint-disable-next-line react/no-danger -- the inline FOUC snippet is the entire purpose of this component — the bytes are built in init-script.ts (storageKey is JSON-escaped, `<`→<) and pinned by fouc-snippet.test.ts.
    <script nonce={nonce} dangerouslySetInnerHTML={{ __html: script }} />
  )
}

ThemeInitScript.displayName = 'ThemeInitScript'
