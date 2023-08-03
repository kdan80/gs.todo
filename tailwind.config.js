/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'darkBlue': '#17181f',
                'grey': '#2a2e32',
                'red': '#cF2E38',
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
