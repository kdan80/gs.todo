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
        './resources/js/**/*.ts',
    ],
    theme: {
        extend: {
            colors: {
                'darkBlue': '#17181f',
                'grey': '#2a2e32',
                'red': '#ff1234',
                'teal': '#6fc5bc',
                'pink': '#fe75a1',
                'purple': '#af68e6',
                'yellow': '#fbd85d',
                'blue': '#6da9e4',
                'green': '#98d8aa',
            },
        },
    },
    plugins: [],
}
