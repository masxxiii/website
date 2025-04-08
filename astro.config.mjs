import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    integrations: [react()],

    vite: {
        plugins: [tailwindcss()],
    },

    experimental: {
        svg: true,
    },

    output: 'static',

    trailingSlash: 'never',
});
