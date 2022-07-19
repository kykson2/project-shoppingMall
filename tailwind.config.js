/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '1025px',
            xl: '1280px',
            xl2: '1360px',
        },
        extend: {},
    },
    plugins: [],
};
