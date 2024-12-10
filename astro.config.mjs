// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  base: 'ironwill79.github.io',
  integrations: [preact()],
  site: 'https://ironwill79.github.io',
});