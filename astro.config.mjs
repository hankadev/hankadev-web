// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://www.hankadev.com",
  markdown: {
    shikiConfig: {
      theme: "nord",
    },
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
});
