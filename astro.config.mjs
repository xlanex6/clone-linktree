import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from "@astrojs/image";
import vue from "@astrojs/vue";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image(), vue()],
  output: "server",
  adapter: netlify()
});