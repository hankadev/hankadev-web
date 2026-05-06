// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { remarkReadingTime } from "./remark-reading-time.mjs";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://www.hankadev.com",

  markdown: {
    shikiConfig: {
      theme: "nord",
    },
    remarkPlugins: [remarkReadingTime],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Aldrich",
      cssVariable: "--font-aldrich",
    },
    {
      provider: fontProviders.fontsource(),
      name: "Rajdhani",
      cssVariable: "--font-rajdhani",
    },
  ],

  integrations: [icon()],
  adapter: cloudflare({ imageService: "compile", prerenderEnvironment: "node" }),
});