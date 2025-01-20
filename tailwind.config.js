/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            dark: {
                primary: '#1b1a1a',
                secondary: '#000000',
                accent: '#1e1e1e',
                text: '#d4d4d4',
                muted: '#6a6969',
                hover: '#5c5b5b',
            },
        },
    },
},
}

