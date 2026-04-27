import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sanity from '@sanity/astro';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), 
    sanity({
      projectId:'oaf9as88',
      dataset:'production',
      useCdn:true,
      studioBasePath:'/admin',
    }),
  ],
  devToolbar:{
    enabled: false
  }
});