import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://alexisxde.github.io',
  markdown: {
    shikiConfig: {
      theme: 'catppuccin-mocha',
      wrap: true
    },
    rehypePlugins: [rehypeHeadingIds]
  }
})
