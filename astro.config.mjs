import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from "@astrojs/image";
import vue from "@astrojs/vue";

export default defineConfig({
  integrations: [tailwind(), image(), vue()]
});
