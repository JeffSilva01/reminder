import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-poppins)',
      },
      colors: {
        primary: {
          500: '#7FC4ED',
          600: '#659ABA',
        },
        base: {
          100: '#FBF9FE',
          200: '#322F40',
          300: '#282533',
          400: '#1D1B26',
          500: '#0F0E13',
        },
      },
    },
  },
  plugins: [],
}
export default config
