import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: 'https://masoodbuilds.com',

    output: 'static',

    trailingSlash: 'ignore',

    build: {
        format: 'directory'
    },

    integrations: [react(), sitemap()],

    vite: {
        plugins: [tailwindcss()],
    },

    experimental: {
        svg: true,
    },
});
