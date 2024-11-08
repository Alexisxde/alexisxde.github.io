import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: '#0c0a09',
        light: '#fbfbfb',
        'border-light': '#e7e5e4',
        'border-dark': '#292524',
        'gray-light': '#78716c',
        'gray-dark': '#a8a29e'
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      keyframes: {
        'fade-in': {
          '0%': { transform: 'translateY(8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      animation: {
        'fade-in': 'fade-in 500ms forwards'
      }
    }
  }
}
