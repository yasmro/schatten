// Ambient declarations for Vite-specific import suffixes used by Storybook
// stories. We don't depend on `vite` directly (it's a transitive of Storybook),
// so we declare the narrow subset we use here instead of `/// <reference
// types="vite/client" />`.
declare module '*.css?raw' {
  const content: string
  export default content
}
