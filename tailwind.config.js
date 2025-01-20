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
      animation: {
        fadeIn: "fadeIn 2s ease-out forwards",
        bounceIcon: "bounceIcon 1s infinite ease-in-out",
        skillEntry: "skillEntry 0.8s ease-in-out",
        pulseIcon: "pulseIcon 1.5s infinite ease-in-out",
        fadeAndBounce: "fadeAndBounce 0.8s ease-in-out",
        bg: "bgAnimation 4s ease infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(5px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        bounceIcon: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(5px)" },
        },
        skillEntry: {
          "0%": { opacity: 0, transform: "scale(0.8) rotate(-3deg)" },
          "10%": { opacity: 0.6, transform: "scale(1.05) rotate(2deg)" },
          "100%": { opacity: 1, transform: "scale(1) rotate(0deg)" },
        },
        pulseIcon: {
          "0%, 100%": { transform: "scale(1)", filter: "brightness(100%)" },
          "50%": { transform: "scale(1.15)", filter: "brightness(120%)" },
        },
        fadeAndBounce: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "50%": { transform: "translateY(-10px)", opacity: 0.6 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        bgAnimation: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};
