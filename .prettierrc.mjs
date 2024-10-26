/** @type {import("prettier").Config} */
const config = {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ],
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  bracketSameLine: true,
  bracketSpacing: true
}

export default config
