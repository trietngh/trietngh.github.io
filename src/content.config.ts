import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    skills: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  projects: projectsCollection,
};
