import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

/** @type {import('tailwindcss').Config} */
export default defineConfig({
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: 'rgb(var(--accent))',
        'accent-light': 'rgb(var(--accent-light))',
        'accent-dark': 'rgb(var(--accent-dark))',
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwind-children'),
  ],
});
