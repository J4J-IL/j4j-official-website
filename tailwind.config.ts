import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ["'Noto Sans Hebrew'", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      aqua: '#00FFAA',
      'aqua-bright': '#7CFFD3',
      violet: '#8146FF',
      white: '#fff',
      'white-50': 'rgb(var(--color-white) / 0.5)',
      black: '#000',
    },

    extend: {
      fontSize: {
        'section-title': [
          '4rem',
          {
            lineHeight: '169%',
            fontWeight: 900,
          },
        ],
        'header-footer': [
          '1.25rem',
          {
            fontWeight: 700,
          },
        ],
        'section-subtitle': '2rem',
        quota: [
          '3rem',
          {
            fontWeight: 900,
          },
        ],
        'body-title': '1.75rem',
        'body-text': '1.625rem',
      },
      linearGradient: {
        'activity': 'linear-gradient(0deg, rgba(0, 255, 170, 0.23) 0%, rgba(129, 70, 255, 0.37) 80%)',
      boxShadow: {
        readmore: '0px 0px 14px rgba(124, 255, 211, 0.5)',
      },
    },
  },
  plugins: [],
} satisfies Config;
