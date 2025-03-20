import icon from "astro-icon"
import { defineConfig } from "astro/config"

import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
	integrations: [icon()],
	site: "https://alexisxde.github.io",
	trailingSlash: "never",
	vite: { plugins: [tailwindcss()] },
	experimental: { svg: { mode: "sprite" } }
})
