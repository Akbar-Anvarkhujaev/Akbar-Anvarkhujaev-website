import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Every .md file in src/content/projects/ becomes a project.
// Files starting with "_" (like _TEMPLATE.md) are ignored.
const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      subtitle: z.string().optional(),
      metric: z.string().optional(),
      features: z.array(z.string()).default([]),
      image: image().optional(),
      imageAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
      status: z.enum(["complete", "in-progress"]).default("complete"),
      order: z.number().default(100),
      repo: z.string().url().optional(),
      demo: z.string().url().optional(),
      note: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
