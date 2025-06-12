/** #### Extends the Prettier config
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import('prettier').Config} */
const config = {
  // If one or more property in an object requires quotes, quote all properties.
  // https://prettier.io/docs/options.html#quote-props
  quoteProps: "consistent",
  plugins: [
    // Sort, combine and remove unused imports, using the `organizeImports`
    // feature of the TypeScript language service API.
    // See `settings -> editor.codeActionsOnSave -> source.organizeImports` in
    // the monorepo.code-workspace file.
    "prettier-plugin-organize-imports",
  ],
};

export default config;
