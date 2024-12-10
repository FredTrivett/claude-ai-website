import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-copernicus)', 'system-ui', 'sans-serif'],
        copernicus: ['var(--font-copernicus)', 'sans-serif'],
        serene: ['var(--font-serene)', 'sans-serif'],
        tyrene: ['var(--font-tyrene)', 'sans-serif'],
      },
      fontWeight: {
        'copernicus-light': '300',
        medium: '500',
        semibold: '600',
        heavy: '800',
        'serene-medium': '500',
        'serene-bold': '700',
        'serene-black': '900',
      },
    },
  },
  plugins: [],
} satisfies Config;
