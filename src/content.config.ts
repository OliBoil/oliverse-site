import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
  }),
});

const notesEs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes-es' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.string(),
    icon: z.string(),
    tags: z.array(z.string()),
    order: z.number(),
  }),
});

const projectsEs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects-es' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.string(),
    icon: z.string(),
    tags: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = { notes, notesEs, projects, projectsEs };
