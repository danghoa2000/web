import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                //scss
                'resources/sass/app.scss',
                'resources/sass/admin.scss',
                //js
                'resources/js/app.jsx',
                'resources/js/src/layout/admin/AdminLayout.jsx',
            ],
            refresh: true,
        }),
    ],
});
