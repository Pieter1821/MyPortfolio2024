/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-blue': '#a0c4ff',
        'pastel-pink': '#ffc6ff',
        'pastel-green': '#9bf6ff',
        'pastel-yellow': '#fdffb6',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', ...fontFamily.sans],
        body: ['var(--font-body)', ...fontFamily.sans]
      },
    },
  },
  plugins: [nextui()],
};

export default config;
