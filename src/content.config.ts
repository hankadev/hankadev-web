// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { defineCollection } from "astro:content";
// Import Zod
import { z } from "astro/zod";
// Define a `loader` and `schema` for each collection
const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.date(),
      tags: z.array(z.string()),
    }),
});
// Export a single `collections` object to register your collection(s)
export const collections = { blog };
