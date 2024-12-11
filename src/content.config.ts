import { glob } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';

const blogSchema = z.object({
  title: z.string(),
  pubDate: z.date(),
  description: z.string(),
  author: z.string(),
  image: z.object({
    url: z.string(),
    alt: z.string(),
  }),
  tags: z.array(z.string()),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/blog' }),
  schema: blogSchema
});

const fundamentalsSchema = z.object({
  title: z.string(),
  pubDate: z.date(),
  description: z.string(),
  author: z.string(),
  tags: z.array(z.string()),
});

const fundamentals = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/fundamentals' }),
  schema: fundamentalsSchema
});

export const collections = { blog, fundamentals };
