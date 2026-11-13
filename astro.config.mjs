// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  site: "https://akbar-anvarkhujaev.com",
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [sitemap()],
  // `npm run dev` opens the homepage in your browser automatically.
  server: { open: "/" },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
