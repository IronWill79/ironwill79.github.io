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
  loader: glob({ base: './src/blog', pattern: '**/[^_]*.md' }),
  schema: blogSchema,
});

const fundamentalsSchema = z.object({
  title: z.string(),
  pubDate: z.date(),
  description: z.string(),
  author: z.string(),
  tags: z.array(z.string()),
});

const fundamentals = defineCollection({
  loader: glob({ base: './src/fundamentals', pattern: '**/[^_]*.md' }),
  schema: fundamentalsSchema,
});

const lfsSchema = z.object({
  title: z.string(),
  pubDate: z.date(),
  description: z.string(),
  author: z.string(),
  tags: z.array(z.string()),
});

const lfs = defineCollection({
  loader: glob({ base: './src/lfs', pattern: '**/[^_]*.md' }),
  schema: lfsSchema,
});

const osdevSchema = z.object({
  title: z.string(),
  pubDate: z.date(),
  description: z.string(),
  author: z.string(),
  tags: z.array(z.string()),
});

const osdev = defineCollection({
  loader: glob({ base: './src/os-dev', pattern: '**/[^_]*.md' }),
  schema: osdevSchema,
});

export const collections = { blog, fundamentals, lfs, osdev };
