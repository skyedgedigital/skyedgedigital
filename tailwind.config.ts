import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FC6129',
        background: '#141414',
      },
      fontFamily: {
        urbanist: ['var(--font-urbanist)', 'sans-serif'],
        lexend: ['var(--font-lexend)', 'sans-serif'],
        'red-hat-display': ['var(--font-red-hat-display)'],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
        'spin-slow': 'spin 6s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
