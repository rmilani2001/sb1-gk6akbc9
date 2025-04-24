/** @type {import('tailwindcss').Config} */
export default {
<<<<<<< HEAD
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary))',
        secondary: 'rgb(var(--secondary))',
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
=======
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 8s linear infinite',
>>>>>>> 4372c8f0822ccf4459190fc6ac3f00b975e2f68d
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
<<<<<<< HEAD
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'rgb(var(--foreground))',
            a: {
              color: 'rgb(var(--primary))',
              '&:hover': {
                color: 'rgb(var(--secondary))',
              },
            },
          },
        },
=======
>>>>>>> 4372c8f0822ccf4459190fc6ac3f00b975e2f68d
      },
    },
  },
  plugins: [],
};