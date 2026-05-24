import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    imageCover: z.string().optional(),
    imagesDir: z.string().optional(),
    tags: z.array(z.string()).default([]),
    skills: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    githubUrl: z.string().url().optional(),
    startedMonth: z.string().optional(),
    duration: z.string().optional(),
    status: z.string().optional(),
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
};
