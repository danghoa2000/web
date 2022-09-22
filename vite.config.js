import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                //js
                'resources/js/app.jsx',
            ],
            refresh: true,
        }),
    ],
});
