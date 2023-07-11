/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],
    theme: {
        extend: {
            colors: {
                'darkBlue': '#17181f',
                'grey': '#2A2E32',
                'red': '#ff00ff',
                'teal': '#6fc5bc',
                'pink': '#fe75a1',
                'purple': '#af68e6',
            },
        },
    },
    plugins: [],
}
