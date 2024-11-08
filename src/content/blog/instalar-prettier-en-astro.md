---
id: 1
title: Instalar Prettier en Astro
description: algo
slug: instalar-prettier-en-astro
tags: ['Astro', 'Prettier']
date: 2024-11-07 16:34:10
---

## Instalar Prettier en Astro

Install prettier via npm.

```
npm install -D prettier prettier-plugin-astro
```

Y crea el archivo `.prettierrc.mjs`:

```js
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
  bracketSpacing: true,
  arrowParens: 'avoid'
}

export default config
```

> [!TIP]
> Para ordenar las clases de taildwindcss utiliza el plugin `prettier-plugin-tailwindcss`

```
npm install -D prettier-plugin-tailwindcss
```

Y en tu archivo `.prettier.mjs` agregar el plugin

```js
/** @type {import("prettier").Config} */
const config = {
  plugins: [/*...,*/ 'prettier-plugin-tailwindcss']
  //...
}
```
