/** @format */

import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [
        laravel({
            input: [
                '/var/www/html/resources/css/app.css',
                '/var/www/html/resources/js/app.tsx',
            ],
            refresh: true,
        }),
        react(),
    ],
    server: {
        //host: true,
        // cors: {
        //     'origin': '*',
        //     'credentials': true,
        //     'preflightContinue': false,
        //     'methods': ['POST', 'PUT', 'PATCH', 'GET', 'OPTIONS', 'HEAD'],
        // },
    },
})
