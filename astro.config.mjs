import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  site: 'https://alexisxde.github.io',
  trailingSlash: 'never',
  build: {
    format: 'file'
  },
  markdown: {
    shikiConfig: {
      theme: 'catppuccin-mocha',
      wrap: true
    },
    rehypePlugins: [rehypeHeadingIds]
  }
})