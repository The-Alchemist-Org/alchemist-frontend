/* eslint-disable global-require */
const colorVariable = require('@mertasan/tailwindcss-variables/colorVariable');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['public-sans', 'sans-serif'],
    },
    fontSize: {
      DEFAULT: '1rem',
      base: '1rem',
      '2xl': '2rem', // 32
      xl: '1.5rem', // 24
      lg: '1.25rem', // 20
      md: '1rem', // 16
      sm: '0.875rem', // 14
      xs: '0.75rem', // 12
    },
    lineHeight: {
      DEFAULT: '1rem',
      base: '1rem',
      '5xl': '2.5rem', // 40
      '4xl': '1.875rem', // 30
      '3xl': '1.625rem', // 26
      '2xl': '1.5rem', // 24
      xl: '1.375rem', // 22
      lg: '1.25rem', // 20
      md: '1.125rem', // 18
      sm: '1rem', // 16
    },
    extend: {
      gridTemplateColumns: {
        'auto-1fr': 'auto 1fr',
        '1fr-auto': '1fr auto',
      },
      minWidth: {
        input: '100px',
        dropdown: '348px',
        'dropdown-md': '260px',
      },
      borderRadius: {
        md: '0.25rem', // 4px
      },
      borderWidth: {
        1: '1px',
        6: '6px',
      },
      colors: {
        primary: {
          DEFAULT: colorVariable('var(--primary-default)'),
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
          soft: 'var(--primary-soft)',
          light: 'var(--primary-light)',
          dark: 'var(--primary-dark)',
        },
        secondary: {
          DEFAULT: 'var(--secondary-default)',
          50: 'var(--secondary-50)',
          75: 'var(--secondary-75)',
          100: 'var(--secondary-100)',
          200: 'var(--secondary-200)',
          300: 'var(--secondary-300)',
          400: 'var(--secondary-400)',
          500: 'var(--secondary-500)',
          600: 'var(--secondary-600)',
          700: 'var(--secondary-700)',
          800: 'var(--secondary-800)',
          900: 'var(--secondary-900)',
          soft: 'var(--secondary-soft)',
          light: 'var(--secondary-light)',
          dark: 'var(--secondary-dark)',
        },
        tertiary: {
          DEFAULT: 'var(--tertiary-default)',
          50: 'var(--tertiary-50)',
          100: 'var(--tertiary-100)',
          200: 'var(--tertiary-200)',
          300: 'var(--tertiary-300)',
          400: 'var(--tertiary-400)',
          500: 'var(--tertiary-500)',
          600: 'var(--tertiary-600)',
          700: 'var(--tertiary-700)',
          800: 'var(--tertiary-800)',
          900: 'var(--tertiary-900)',
        },
        quaternary: {
          DEFAULT: 'var(--quaternary-default)',
          50: 'var(--quaternary-50)',
          100: 'var(--quaternary-100)',
          200: 'var(--quaternary-200)',
          300: 'var(--quaternary-300)',
          400: 'var(--quaternary-400)',
          500: 'var(--quaternary-500)',
          600: 'var(--quaternary-600)',
          700: 'var(--quaternary-700)',
          800: 'var(--quaternary-800)',
          900: 'var(--quaternary-900)',
        },
        error: {
          DEFAULT: 'var(--error-default)',
          50: 'var(--error-50)',
          100: 'var(--error-100)',
          200: 'var(--error-200)',
          300: 'var(--error-300)',
          400: 'var(--error-400)',
          500: 'var(--error-500)',
          600: 'var(--error-600)',
          700: 'var(--error-700)',
          800: 'var(--error-800)',
          900: 'var(--error-900)',
          soft: 'var(--error-soft)',
          light: 'var(--error-light)',
          dark: 'var(--error-dark)',
        },
        success: {
          DEFAULT: 'var(--success-default)',
          50: 'var(--success-50)',
          100: 'var(--success-100)',
          200: 'var(--success-200)',
          300: 'var(--success-300)',
          400: 'var(--success-400)',
          500: 'var(--success-500)',
          600: 'var(--success-600)',
          700: 'var(--success-700)',
          800: 'var(--success-800)',
          900: 'var(--success-900)',
          soft: 'var(--success-soft)',
          light: 'var(--success-light)',
          dark: 'var(--success-dark)',
        },
        warning: {
          DEFAULT: 'var(--warning-default)',
          50: 'var(--warning-50)',
          100: 'var(--warning-100)',
          200: 'var(--warning-200)',
          300: 'var(--warning-300)',
          400: 'var(--warning-400)',
          500: 'var(--warning-500)',
          600: 'var(--warning-600)',
          700: 'var(--warning-700)',
          800: 'var(--warning-800)',
          900: 'var(--warning-900)',
          soft: 'var(--warning-soft)',
          light: 'var(--warning-light)',
          dark: 'var(--warning-dark)',
        },
        'cool-gray': {
          DEFAULT: 'var(--cool-gray-default)',
          50: 'var(--cool-gray-50)',
          100: 'var(--cool-gray-100)',
          200: 'var(--cool-gray-200)',
          300: 'var(--cool-gray-300)',
          400: 'var(--cool-gray-400)',
          500: 'var(--cool-gray-500)',
          600: 'var(--cool-gray-600)',
          700: 'var(--cool-gray-700)',
          800: 'var(--cool-gray-800)',
          900: 'var(--cool-gray-900)',
        },
        gray: {
          DEFAULT: 'var(--gray-default)',
          50: 'var(--gray-50)',
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
          400: 'var(--gray-400)',
          500: 'var(--gray-500)',
          600: 'var(--gray-600)',
          700: 'var(--gray-700)',
          800: 'var(--gray-800)',
          900: 'var(--gray-900)',
          950: 'var(--gray-950)',
        },
        'text-primary': {
          DEFAULT: 'var(--text-primary-default)',
        },
        'leg-accepted': {
          DEFAULT: '#00B127',
        }
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.3s ease-out',
        'accordion-up': 'accordion-up 0.3s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@mertasan/tailwindcss-variables'),
  ],
};
